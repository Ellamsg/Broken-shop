"use client";
import { useState } from "react";
import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { getOrdersByEmail } from "../../../sanity/sanity-utils";

export default function Order() {
  const user = useSession();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (user) {
          const fetchedOrders = await getOrdersByEmail(user?.data.user.email);
          setOrders(fetchedOrders);
        }
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchData();
  }, [user]);

  return (
    <div className="space">
      <h1 className="underline pt-4  ">Order</h1>
      <div className="text-center w-full border-collapse py-2">
        <div className="flex my-3 md:my-6 pb-3 border-b-2 border-white justify-between">
          <div>
            <p>product</p>
          </div>
          <div className="opacity-0">
            <p>paid</p>
          </div>
          <div>
            <p> Qty</p>
          </div>
          <div>
            <p>status</p>
          </div>
        </div>
        <div>
          {orders.map((product) => (
            <div
              className="flex pt-2 md:text-[16px] text-[10px] py-3 justify-between"
              key={product._id}
           >
              <div className="">
                <div className="flex">
                  <img
                    className="md:size-[200px] size-[90px]"
                    src={product.image}
                  />
                  <div className="justify-between flex flex-col">
                    <div>
                      {product.paid ? (
                        <p className="text-green">paid</p>
                      ) : (
                        <p className="text-red">not paid</p>
                      )}
                    </div>
                    <div className=" text-start">
                      <p>QYT:{product.qty}</p>
                    </div>
                    <div className=" text-start">
                      <p>SIZE:{product.sizes}</p>
                    </div>
                  </div>
                </div>

                
                <div>
                  <p className="pt-2 ">{product.name}</p>
                </div>
              </div>

              <div>
                {" "}
                {product.delivered ? (
                  <p className="text-green-500 text-green">Delivered</p>
                ) : (
                  <p className="text-red-500">In transit</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
