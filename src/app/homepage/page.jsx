"use client";

import ReactPlayer from "react-player";
import "./home.css";
import YouTube from "react-youtube";
import { getCategory } from "../../../sanity/sanity-utils";
import React, { useState, useEffect } from "react";
import Card from "../components/card/card";
import { getProducts } from "../../../sanity/sanity-utils";
import Slider from "react-slick";
import Link from "next/link";
import Trendinglayouts from "../components/trendinglayout";


const Homepage = () => {
  const settings = {
    dots: false,
    className: "center",
    infinite: true,
    centerMode: true,
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
          slidesToShow: 2,
          slidesToScroll: 2,
          // Add any additional settings for small screens here
        },
      },
      {
        breakpoint: 680, // Adjust settings for screens with a maximum width of 480px
        settings: {
          slidesToShow: 1,
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
   const [loading, setLoading] =useState(true);

  //fetch products from sanity

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedProducts = await getProducts();
        // Shuffle the fetched products
        const shuffledProducts = fetchedProducts.sort(
          () => Math.random() - 0.5
        );
       

        setProducts(shuffledProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className=" ">
      <div className="border-b-2 font-bold justify-between  mb-4 lg:mx-[70px] mx-3 items-center lg:text-[16rem] flex  text-[4.5rem]  leading-tight border-white">
        <p className="texts">B</p>
        <p className="texts">R</p>
        <img className=" clamp-img" src="/images/brokenheart.png" />
        <p className="texts">K</p>
        <p className="texts">E</p>
        <p className="texts">N</p>
      </div>

      <div className="space">
        <div className="grid grid-cols-2 gap-3  ">
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

          <div className="grid md:grid-cols-4  ">
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
              <div className="lg:size-[150px] md:size-[100px] clamps  size-[150px]  border-white border-2  flex items-center  justify-center rounded-[100%]">
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
            <a
              href="https://www.instagram.com/brokenbycoker?igsh=cTBqdjMxZGc2MnJ0&utm_source=qr"
              target="_blank"
            >
              <p>Instagram</p>
            </a>
          </div>
          <div>
            <a
              href="https://www.tiktok.com/@brokenbycoker?_t=8kBa1FEy8tq&_r=1"
              target="_blank"
            >
              <p> Tiktok</p>
            </a>
          </div>
        </div>

        <div className=" flex items-center">
          <a href="mailto:Brokenbycoker@gmail.com" >

          <p>Brokenbtcoker@gmail.com</p>
          </a>
         
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
                className="md:size-[30px] size-[15px]"
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
        <div className="w-[100%] bg-white adverts flex flex-col md:flex-row">
          <div className="md:w-[50%] h-[550px] md:h-[700px] w-[100%] md:order-first order-last">
            <img
              src="/images/wop2.jpg"
              className="h-[100%] object-cover w-[100%]"
            />
          </div>

          <div className="md:w-[50%]   text-darkwind py-6  md:h-auto h-[550px]  w-[100%]  flex flex-col justify-center items-center ">
            <div className="flex flex-col justify-center items-center">
              <div className="w-[60%] ">
                <p className="uppercase font-[ellams] font-bold pb-3 text-center">
                  BROKEN T-SHIRT, PINK LADIES EDITION
                </p>
              </div>
            </div>

            <img
              src="/images/wop3.jpg"
              className="h-[300px] object-cover w-[200px]"
            />
            <div className="  pt-4 flex items-center justify-items-center flex-col justify-center text-center">
              <div className="md:w-[50%] w-[75%] mb-3">
                <p className="pb-4 italic md:text-[16px] text-[13px] font-[ellams] font-semibold">
                  That beauty lies in imperfection. We believe that every
                  setback, and every challenge we face in life is an opportunity
                  to grow, evolve, and ultimately, to shine.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute items-center flex justify-center bottom-0 top-0 m-auto  left-0 right-0 ">
          <div className="  bg-darkwind text-white size-[120px] flex items-center  justify-center rounded-[100%]">
            <Link href="/about">
              {" "}
              <p className="discover">About</p>
            </Link>
          </div>
        </div>
      </div>

      <div className="slant md:h-[50vh] h-[30vh] ">
        <div className="slanted  items-center scrolling-limit  change lg:text-base text-sm text-white bg-[#101010] py-2 lg:py-3">
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

      <div className="py-[80px] space lg:px-[70px] px-3">
        <video
          className="w-[100%] drop h-[400px] md:h-[600px] object-cover"
          src="https://res.cloudinary.com/dalmrzjps/video/upload/v1707251993/broken-ads_e3c1gs.mp4"
          poster="/images/mock13.jpg"
          autoPlay
          loop
          muted
          x5-playsinline=""
          playsinline=""
        />
      </div>

      <div className="space">
        <div className="md:text-[6rem] uppercase font-semibold text-[3rem]">
          <p>Discover </p>
          <p className="md:text-center ">Unique Style</p>
        </div>

        <div className="text-end flex flex-col md:justify-end md:items-end md:justify-items-end">
          <div className="md:w-[50%]  text-start">
            <p>
              Broken , where fashion meets individuality. Explore our exclusive
              collection of clothing and caps designed to elevate your style and
              express your personality. From trendy tops to statement caps, we
              have everything you need to stand out from the crowd.
            </p>
          </div>
        </div>
      </div>

      <Trendinglayouts />
    </div>
  );
};

export default Homepage;
