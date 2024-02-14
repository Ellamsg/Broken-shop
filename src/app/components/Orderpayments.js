"use client";
import React from "react";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import useCartStore from "../cartStore";
import Link from "next/link";
import { createOrder } from "../../../sanity/sanity-utils";
import { PaystackButton } from "react-paystack";

const Orderpayments = () => {
  const router = useRouter();

  const session = useSession();
 
  const cart = useCartStore((state) => state.cart);
  const cartTotal = useCartStore((state) => state.cartTotal);
  const clearCart = useCartStore((state) => state.clearCart);
  const publicKey = process.env.NEXT_PUBLIC_PAYSTACK_KEY;
  const amount = cartTotal.toFixed(0); // Remember, set in kobo!
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");

  //send order to sanity
  const onSend = async () => {
    try {
      // Save the email from the session data
      const email = session.data.user.email;

      // Create a Sanity order with the email and cart data
      if (email) {
        const res = await createOrder(email, cart);

        // Clear the cart if the order creation is successful
        if (res) {
          clearCart();
          // Redirect to a different page
          router?.push("/order");
        }
      }

      // Show a success message to the user
      alert("Thanks for doing business with us! Come back soon!!");
    } catch (error) {
      // Handle any errors that occur during the process
      console.error(error);
      alert("An error occurred while processing the order.");
    }
  };

  const componentProps = {
    email,
    amount,
    metadata: {
      custom_fields: [
        {
          display_name: "Cart Items",
          variable_name: "cart_items",
          value: cart
            .map((product) => `${product.quantity} ${product.name} size:  ${product.size}, `)
            .join(", "),
        },
        {
          display_name: "Name",
          variable_name: "name",//login
          value: name, // Assuming 'address' is a variable representing the user's address
        },
     

        {
          display_name: "Phone Number",
          variable_name: "phone_number",
          value: phone, // Assuming 'phone' is a variable representing the user's phone number
        },
        {
          display_name: "Address",
          variable_name: "address",
          value: address, // Assuming 'phone' is a variable representing the user's phone number
        },
        {
          display_name: "City",
          variable_name: "city",
          value: city, // Assuming 'phone' is a variable representing the user's phone number
        },
        // Add any other custom fields as needed
      ],
      // Add any other key/value pairs as needed
    },
    publicKey,
    text: "PAY NOW",
    onSuccess: (response) => {
      console.log("Paystack API Response:", response);
      onSend();
    },
    onClose: () => alert("Wait! Don't leave :("),
  };

  if (!session) return <div>not logged in</div>;

  if (session.status === "loading") {
    return <p>loading...</p>;
  }

  if (session.status === "unauthenticated") {
    router?.push("/cart/login");
  }



  // Function to save cart data to local storage

  if (session.status === "authenticated") {
    return (
      <div className="space py-4">
        <div className=" flex flex-col gap-6 md:flex-row">
          <div className=" md:w-[50%] ">
            <div className="border-b-2 border-white ">
              <p className="text-[16px] uppercase ">INFORMATION</p>
            </div>

            <div className="pt-5  ">
              <form className="flex md:w-auto w-[100%]   flex-col gap-3">
                <p>CUSTOMER DETAILS</p>
                <div className="flex flex-col gap-3">
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="order-info"
                    placeholder="name"
                  />
                  <input
                    type="text"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="order-info"
                    placeholder="email"
                  />
                </div>

                <p>DELIVERY ADDRESS</p>
                <div className="flex lg:flex-row  flex-col gap-4">
                  <input
                    className="order-info w-full"
                    placeholder="address"
                    type="text"
                    id="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                  <input
                    className="order-info w-full"
                    placeholder="city"
                    type="text"
                    id="city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                </div>

                <div className="flex gap-3 flex-col">
                  <input
                    className="order-info"
                    placeholder="phone number"
                    type="text"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </form>

              <div className="flex md:flex-row pt-4 flex-col justify-between">
                <PaystackButton
                  className="text-black mt-3 bg-white p-3 "
                  {...componentProps}
                />
              <Link className="md:order-first" href="/cart">
              <button className="text-white  mt-3 border-2 border-white p-3">
                  GO BACK{" "}
                </button>
              </Link>
               
              </div>
            </div>
          </div>
          <div className=" md:w-[50%] ">
            <div className="border-b-2 border-white">
              <p>ORDER SUMMARY</p>
            </div>
            {cart.map((product) => (
              <div className="flex  justify-between  py-4" key={product.id}>
                <div className=" md:w-[33.3%] flex gap-1 md:gap-5">
                  <img
                    src={product.image2}
                    className=" size-[90px]  md:size-[150px]"
                    alt="cart-img"
                  />
                  <div className="uppercase flex flex-col justify-between">
                    <p className="md:text-[16px] text-[10px]">{product.name}</p>
                    <p className="text-[13px]">QTY:{product.quantity}</p>
                    <p className="text-[13px]">SIZE:{product.size}</p>{" "}
                  </div>
                </div>

                <div className="flex   text-end w-[33.3%] flex-col justify-between ">
                  <div className="md:text-[1.0rem] text-[13px] items-end justify-items-end flex justify-end ">
                    <p>${product.price}</p>
                  </div>
                </div>
              </div>
            ))}

            <div>
              <div className="flex lg:justify-end">
                <div className=" w-[100%]">
                  <div className="flex py-3 md:text-[1.2rem] text-[13px] border-b-2 border-white justify-between">
                    <p className="uppercase  ">
                      SubTotal
                    </p>
                    <p>NGN{cartTotal}</p>
                  </div>

                  <div className=" py-3 flex md:text-[1.2rem] text-[13px] justify-between">
                    <p className="uppercase  md:text-[16px] text-[13px]">
                      Total
                    </p>
                    <p>NGN{cartTotal}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Orderpayments;
