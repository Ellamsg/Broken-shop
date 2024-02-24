"use client";

import { signOut, useSession } from "next-auth/react";
import { useState } from "react";
import useCartStore from "@/app/cartStore";
import { motion } from "framer-motion";
import Link from "next/link";
import "./header.css";





const MOBILE_NAV_ITEMS = [
  {
    id: 0,
    navTitle: "Home",
    link:"/"
    
  },
  {
    id: 1,
    navTitle: "order",
    link:"/order"
  },
  {
    id: 2,
    navTitle: "Shop",
    link:"/allproducts"
  },
  {
    id: 3,
    navTitle: "About",
    link:"/about"
  },
  {
    id: 3,
    navTitle: "Cart",
    link:"/cart"
  },
];


const Header = () => {
  const totalItems = useCartStore((state) => state.totalItems);
  const session = useSession();

  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const hideNavItemsVariant = {
    opened: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    closed: {
      opacity: 1,
      y: "0%",
      transition: {
        delay: 1.1,
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  const mobileMenuVariant = {
    opened: {
      y: "0%",
      transition: {
        delay: 0.15,
        duration: 1.1,
        ease: [0.74, 0, 0.19, 1.02],
      },
    },
    closed: {
      y: "-100%",
      transition: {
        delay: 0.35,
        duration: 0.63,
        ease: [0.74, 0, 0.19, 1.02],
      },
    },
  };

  const fadeInVariant = {
    opened: {
      opacity: 1,
      transition: {
        delay: 1.2,
      },
    },
    closed: { opacity: 0 },
  };

  const ulVariant = {
    opened: {
      transition: {
        delayChildren: 1,
        staggerChildren: 0.18,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.06,
        staggerDirection: -1,
      },
    },
  };

  const liVariant = {
    opened: {
      opacity: 1,
      y: "0%",
      transition: {
        duration: 0.65,
        ease: "easeOut",
      },
    },
    closed: {
      opacity: 0,
      y: "100%",
      transition: {
        duration: 0.25,
        ease: "easeInOut",
      },
    },
  };

  const fadeInStart = { opacity: 0 };
  const fadeInEnd = { opacity: 1 };
  const fadeInTransition = { duration: 1 };

  return (
    <div className="sticky top-0 bg-darkwind z-30">
      <div className=" scrolling-limit  change lg:text-base text-sm text-white bg-[#101010] py-2 lg:py-3">
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

      <main className=" !w-[100%]  space py-3">
        <motion.nav
          className="flex justify-between w-[100%]   items-center "
          initial="closed"
          animate={mobileNavOpen ? "opened" : "closed"}
        >
         

         
          <div className="logo-container">
            <motion.div variants={hideNavItemsVariant}>
            
              <Link href="/">
                <img
                  className="md:w-[120px]  w-[70px]"
                  src="/images/broken.png"
                  alt="broken-logo"
                />
              </Link>
            </motion.div>
          </div>
          <div className="md:block  hidden">
            <Link href="/cart">
            <p>CART{totalItems > 0 && <a className="text-white">({totalItems})</a>}</p>
            </Link>

         
          </div>
          <div className="menu-container  cursor-pointer z-20">
            <motion.div
              className=""
              variants={hideNavItemsVariant}
              onClick={() => setMobileNavOpen(true)}
            >
             <img className="md:w-[70px] w-[50px] md:h-[30px] h-[20px]" src="/icons/burger.png" alt/>
            </motion.div>
          </div>
          
          <div className="">
            {session.status === "authenticated" ? (
              <div className=" ">
                <div className="cursor-pointer items-center gap-[9px] flex " onClick={signOut}>
                  <img className="h-2 order-last" src={session.data.user.image} />
                 <p className="md:text-[16px] text-[12px] capitalize">{session.data.user.name}</p> 
                </div>
              </div>
            ) : (
              <Link className="" href="/cart">
               <img className="size-[20px]" src="/icons/login.png" alt="login" />
              </Link>
            )}
          </div>
          <motion.div variants={mobileMenuVariant} className="mobile-menu px-3 md:px-[70px] pt-4 bg-darkwind ">
            <motion.button
              className=""
              variants={fadeInVariant}
              onClick={() => setMobileNavOpen(false)}
            >
          <img className="size-[40px]" src="/icons/close.png" alt/>
            </motion.button>
            <div className="">
              <div className="border-b-2 flex gap-2  border-white">
              <p className="md:text-6xl text-3xl  ">SHOP</p>
           <Link href="/cart">
           <p className="">CART{totalItems > 0 && <a className="text-white">({totalItems})</a>}</p>
           </Link>   
              </div>

           
            <div className="flex mt-3 md:flex-row flex-col gap-4 md:gap-6 justify-between ">
              <motion.ul className="md:w-[50%] text-end" variants={ulVariant}>
                {MOBILE_NAV_ITEMS.map((navItem) => (
                  <motion.li whileTap={{ scale: 0.95 }} key={navItem.id}>
                    <motion.div className="border-b-2 mt-[7px] md:mt-[13px] border-white pb-2 md:pb-5"
                      onClick={() => setMobileNavOpen(false)}
                      variants={liVariant}
                    >

                      <Link href={`${navItem.link}`}>
                      <p className="md:text-[34px] text-[24px]"> {navItem.navTitle}</p>
                      </Link>
                      
                  
                    </motion.div>
                  </motion.li>
                ))}
              </motion.ul>

              <motion.div
                variants={fadeInVariant}
                className="h-[100vh] md:w-[50%] md:order-first flex"
              >
                <div className="w-[100%]">

                  <img className="lg:h-[70%] md:h-[63%] object-cover w-[100%]" src="/images/wop.jpg"/>
                </div>
              </motion.div>
            </div>
            </div>
          </motion.div>
        </motion.nav>
      </main>
    </div>
  );
};
export default Header;
