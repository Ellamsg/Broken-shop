"use client";

import ReactPlayer from "react-player";
import "./home.css";
import YouTube from "react-youtube";
import { getCategory } from "../../../sanity/sanity-utils";
import React, { useState, useEffect } from "react";
import Card from "../components/card/card";

import Slider from "react-slick";
import Link from "next/link";
import Trendinglayouts from "../components/trendinglayout";

const Homepage = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    responsive: [
      {
        breakpoint: 868, // Adjust settings for screens with a maximum width of 768px
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          // Add any additional settings for small screens here
        },
      },
      {
        breakpoint: 680, // Adjust settings for screens with a maximum width of 480px
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          // Add any additional settings for screens with a width of 480px or less
        },
      },
      // Add more responsive breakpoints if needed
    ],
  };

  const imageStyles = [
    "w-[100%] h-[520px]", // Style for the first image
    "w-[59%] h-[300px]",
    "w-[100%] h-[520px]",
    // Style for the third image
    // Add more styles as needed
  ];

  const [products, setProducts] = useState([]);

  //fetch products from sanity

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedProducts = await getCategory("featured");
        setProducts(fetchedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="">
      <div className="border-b-2 justify-between  mb-4 lg:mx-[70px] mx-3 items-center lg:text-[16rem] flex  text-[4.5rem]  leading-tight border-white">
        <p>B</p>
        <p>R</p>
        <img className=" size-5 lg:size-20" src="/images/heart2.png" />
        <p>K</p>
        <p>E</p>
        <p>N</p>
      </div>

      <div className="space">
        <div className="grid grid-cols-2 gap-3 ">
          <div className="grid md:grid-cols-2 gap-3 ">
            <video
              className="md:h-[300px] h-[324px] object-cover w-[100%]"
              src="https://res.cloudinary.com/dalmrzjps/video/upload/v1707253371/first_ogkw0q.mp4"
              poster="/images/mock13.jpg"
              autoPlay
              loop
              muted
              x5-playsinline=""
              playsinline=""
            />

            <video
              poster="/images/mock12.jpg"
              autoPlay
              loop
              muted
              x5-playsinline=""
              playsinline=""
              src="https://res.cloudinary.com/dalmrzjps/video/upload/v1707258503/third_lx54ga.mp4"
              className="md:h-[500px] h-[334px]  object-cover w-[100%]"
            />
          </div>

          <div className="grid md:grid-cols-4 ">
            <video
              className=" w-[100%] md:h-auto h-[250px] object-cover"
              poster="/images/mock14.jpg"
              autoPlay
              loop
              muted
              x5-playsinline=""
              playsinline=""
              src="https://res.cloudinary.com/dalmrzjps/video/upload/v1707258957/four_aboeta.mp4"
            />

            <div className=" flex justify-center md:p-0 p-2 items-center md:items-end">
              <div className="lg:size-[150px] md:size-[100px] size-[150px] border-white border-2  flex items-center  justify-center rounded-[100%]">
                <Link href="/allproducts">
                  {" "}
                  <p className="discover">discover</p>
                </Link>
              </div>
            </div>

            <video
              poster="/images/mock11.jpg"
              autoPlay
              loop
              muted
              x5-playsinline=""
              playsinline=""
              className="md:h-[300px] h-[250px] md:col-span-2  object-cover w-[100%]"
              src="https://res.cloudinary.com/dalmrzjps/video/upload/v1707260807/Bang_trimmed_jpclri.mp4"
            />
          </div>
        </div>
      </div>

      <div className="flex md:text-[16px] space  text-[12px]  justify-between">
        <div className="flex gap-6 py-4">
          <div>
            <p>Instagram</p>
          </div>
          <div>
            <p>Tiktok</p>
          </div>
        </div>

        <div className=" flex items-center">
          <p>@broken.ng</p>
        </div>
      </div>

      <section className="lg:px-[70px] px-3">
        <div className="flex items-center text-[11px] md:text-[16px] justify-between border-y-2 border-white py-4">
          <div>
            <p>FEATURED PRODUCTS</p>
          </div>
          <Link href="/allproducts">
            <div className="flex justify-center gap-2 md:gap-4 items-center ">
              <p>VIEW ALL PRODUCT</p>
              <img
                className="md:size-[30px] size-[20px]"
                src="/icons/arrow-red.png"
                alt="arrow"
              />
            </div>
          </Link>
        </div>
        {/**featured */}
        <Slider className="!space-x-4 !-m-[5.9px] !gap-3" {...settings}>
          {products.map((product, index) => (
            <Card
              key={product._id}
              imageStyle={imageStyles[index]}
              className=""
              product={product}
            />
          ))}
        </Slider>
      </section>

      <div className="relative py-3">
        <div className="w-[100%] adverts flex flex-col md:flex-row">
          <div className="md:w-[50%] h-[500px] md:h-[700px] w-[100%] md:order-first order-last">
            <img
              src="/images/wop2.jpg"
              className="h-[100%] object-cover w-[100%]"
            />
          </div>

          <div className="md:w-[50%] bg-white text-darkwind md:h-auto h-[500px] w-[100%]  flex flex-col justify-center items-center ">
            <p>rail wshfjhfhbfggjg</p>
            <img
              src="/images/wop3.jpg"
              className="h-[300px] object-cover w-[200px]"
            />
            <p>rail wshfjhfhbfggjg</p>
          </div>
        </div>
        <div className="absolute items-center flex justify-center bottom-0 top-0 m-auto  left-0 right-0 ">
          <div className="  bg-darkwind text-white size-[120px] flex items-center  justify-center rounded-[100%]">
            <p className="discover">discover</p>
          </div>
        </div>
      </div>

      <div className="slant md:h-[50vh] h-[30vh] ">
        <div class="slanted">
          <div className=" scrolling-limit pt-3 change lg:text-base text-sm text-white bg-[#101010] ">
            <div className="scrolling">
              <p>
                Broken discount Broken discount Broken discount Broken discount
                Broken discount Broken discount Broken discount Broken discount
                Broken discount Broken discount Broken discount Broken discount
                Broken discount Broken discount Broken discount Broken discount
                Broken discount Broken discount Broken discount Broken discount
                Broken discount Broken discount Broken discount Broken discount
                Broken discount Broken discount Broken discount Broken discount
                Broken discount Broken discount Broken discount Broken discount
                Broken discount Broken discount Broken discount Broken discount
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-[80px] space lg:px-[70px] px-3">
        <video
          className="w-[100%] drop h-[400px] md:h-[600px] object-cover"
          src="https://res.cloudinary.com/dalmrzjps/video/upload/v1707251993/broken-ads_e3c1gs.mp4"
          poster="https://res.cloudinary.com/dmwfd0zhh/video/upload/q_auto,f_auto,so_0.05/v1701766450/Pith%20Africa/pith_film_short_05750464c5.jpg"
          autoPlay
          loop
          muted
          x5-playsinline=""
          playsinline=""
        />
      </div>

      <div className="space">
        <div className="md:text-[6rem] text-[3rem]">
          <p>ALL BLVCK</p>
          <p className="md:text-center ">EVERYTHING</p>
        </div>

        <div className="text-end flex flex-col md:justify-end md:items-end md:justify-items-end">
          <div className="md:w-[50%]  text-start">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              fugit, illum tenetur consequuntur dignissimos non? Consectetur
              temporibus exercitationem, debitis maiores, culpa velit voluptas
            </p>
          </div>
        </div>
      </div>

      <Trendinglayouts />
    </div>
  );
};

export default Homepage;
