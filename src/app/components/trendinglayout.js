"use client";
import { getProducts } from "../../../sanity/sanity-utils";
import Trending from "./trending/trending";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const Trendinglayouts = () => {
  const imageStyles = [
    "w-[100%] h-[520px]", // Style for the first image
    "w-[59%] h-[300px]",
    "w-[100%] h-[520px]",
    // Style for the third image
    // Add more styles as needed
  ];

  const [trending, setTrending] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedProducts = await getProducts();
        // Shuffle the fetched products
        const shuffledProducts = fetchedProducts.sort(
          () => Math.random() - 0.5
        );
        // Take the first 3 products
        const selectedProducts = shuffledProducts.slice(0, 3);
        setTrending(selectedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="relative md:h-auto space  ">
        <div className="grid md:gap-6 gap-3 my-5 md:grid-cols-2 grid-cols-1 lg:grid-cols-3">
          {trending.map((product, index) => (
            <Trending
              key={product._id}
              imageStyle={imageStyles[index % imageStyles.length]}
              className=""
              product={product}
            />
          ))}
        </div>
        <div className="mb-6 flex justify-center  ">
          <div className=" h-[150px]  border-white border-2 w-[150px] flex items-center  justify-center rounded-[100%]">
            <Link href="/allproducts">
              {" "}
              <p className="discover">discover</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trendinglayouts;
