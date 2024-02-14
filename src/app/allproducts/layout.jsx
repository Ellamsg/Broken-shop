
"use client"


import React from "react";


import { useRouter } from 'next/navigation'
import Productsnav from "../components/productsnav/page";

export default function Layout({ children }) {

  const router = useRouter();
  return (
    <div className="space">
     
      <Productsnav/>
    
       <div className="">
     
        {children}
       
     
        
        </div>
    

      
     
    </div>
  );
}

