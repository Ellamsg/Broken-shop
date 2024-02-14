"use client"
import React, { useState, useEffect } from "react";
import { getProducts } from "../../../../sanity/sanity-utils";
import All from "@/app/components/All/All";

const Allwears = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
      const fetchData = async () => {
        try {
          const fetchedProducts = await getProducts();
          setProducts(fetchedProducts);
        } catch (error) {
          console.error("Error fetching products:", error);
        }
      };
  
      fetchData();
    }, []);
  
    const totalproducts = products.length
  
    const imageStyles = [
      "w-[100%] h-[520px]", // Style for the first image
      "w-[9%] h-[250px]",
      "w-[100%] h-[520px]",
      // Style for the third image
      // Add more styles as needed
    ]



    
    return ( <div>

 

<div className="border-white flex border-b-2 py-4">
  <p className="text-6xl">ALL</p>
  <p>{totalproducts}</p>  
</div>
<div className="grid md:gap-6   gap-3 my-5 grid-cols-2 lg:grid-cols-3">
  {products.map((product, index) => (
    <All
      key={product._id}
      imageStyle={imageStyles[index % imageStyles.length]}
      className=""
      product={product}
    />
  ))}
</div>

    </div> );
}
 
export default Allwears;