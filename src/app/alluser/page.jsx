
"use client"
import { useState, useEffect } from "react";
import { getAllOrders } from "../../../sanity/sanity-utils";
import { useSession } from "next-auth/react";

export default function Alluser() {
  const user = useSession();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (user) {
          const fetchedOrders = await getAllOrders();
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
      <h1 className="text-center">All Orders</h1>
      <div className="text-center w-full border-collapse py-5">
        <div className="flex my-6 pb-3 border-b-2 border-white justify-between">
          <div><p>Product</p></div>
          <div><p>Paid</p></div>
          <div><p>Quantity</p></div>
          <div><p>Status</p></div>
        </div>
        <div>
          {orders.map((order) => (
            <div className="flex py-3 justify-between" key={order._id}>
              <div>
                <img className="size-[200px]" src={order.image} />
                <p>{order.name}</p>
                <p>{order.email}</p>
              </div>
              <div>{order.paid ? <p className="text-green">Paid</p> : <p className="text-red">Not Paid</p>}</div>
              <div><p>{order.qty}</p></div>
              <div>
                {order.delivered ? (
                  <p className="text-green-500 text-green">Delivered</p>
                ) : (
                  <p className="text-red-500">In Transit</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
