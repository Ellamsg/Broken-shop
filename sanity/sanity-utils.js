// sanity-utils.js

import { createClient, groq } from "next-sanity";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  title: "artshop",
  apiVersion: "2023-11-21",
  token: process.env.NEXT_PUBLIC_SANITY_API_TOKEN,
  useCdn: true,
});





//get email from sanity schema

export async function getUsersByEmail(email) {
  return client.fetch(
    groq`*[_type =="user" && email == $email]{
           _id,
           name,
           email,
           createdAt,
           
       }`,
    { email }
  );
}



//get products by slug


export async function getProductsBySlug(slug) {

  return client.fetch(

    groq`*[_type =="product" && slug.current ==$slug]{
      _id,
      name,
      createdAt,
      description,
      price,
      "image":image.asset->url,
    "image2":image2.asset->url,
    "slug":slug.current
      
  }`,
  {slug}
  )


}



//fetch products
export async function getProducts() {
  return client.fetch(

    groq`*[_type == "product" ]{
      _id,
      name,
     
      createdAt,
      description,
      price,
   "image":image.asset->url,
   "image2":image2.asset->url,
   "slug":slug.current
      
  }`,
  )
}

export async function getCategory(category) {
  return client.fetch(
    groq`*[_type == "product" && category == $category]{
      _id, name, createdAt,  description, price, "image2":image2.asset->url, "image": image.asset->url, "slug": slug.current
    }`,
    { category },
  );
}




//send and create email to sanity schema

export async function createUser(userData) {
  const { name, email } = userData;

  

  const newUser = await client.create({
    _type: "user",
    name,
    email,
    createdAt: new Date().toISOString(),
  });
  return newUser;

 
}




//sanity send order 

export async function getOrdersByEmail(email) {
  try {
    // Query orders from Sanity with a GROQ query
    const orders = await client.fetch(
      `*[_type == 'order' && email == $email] | order(createdAt desc)`,
      { email }
    );

    // Return the sorted orders
    return orders;
  } catch (error) {
    // Handle errors appropriately
    console.error('Error getting orders:', error.message);
    throw new Error('Failed to get orders');
  }
}

export async function getAllOrders() {
  try {
    // Query all orders from Sanity with a GROQ query
    const orders = await client.fetch(
      `*[_type == 'order'] | order(createdAt desc)`
    );

    // Return the sorted orders
    return orders;
  } catch (error) {
    // Handle errors appropriately
    console.error('Error getting orders:', error.message);
    throw new Error('Failed to get orders');
  }
}



export async function createOrder(email,cart) {
  console.log(email,cart);
  try {
    // Create an array to store the promises for creating each order
    const orderCreationPromises = [];
   
    // Iterate over the orderDataArray and create a promise for each order
    cart.forEach((orderData) => {
      // Extract order data
      
      const { name, quantity, price,image} = orderData;
  
      // Create a promise for creating each order
      const orderCreationPromise = client.create({
        _type: 'order',
        name,
        qty: quantity,
        price,
       image,
      
        paid: true,
        delivered: false,
        email: email,
        createdAt: new Date().toISOString(),
      });

      // Add the promise to the array
      orderCreationPromises.push(orderCreationPromise);
    });

    // Wait for all order creation promises to resolve
    const createdOrders = await Promise.all(orderCreationPromises);

    // Return the created orders
    return createdOrders;
  } catch (error) {
    // Handle errors appropriately
    console.error('Error creating order:', error.message);
    throw new Error('Failed to create order');
  }
}
