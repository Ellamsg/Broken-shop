"use client";
import All from "../components/All/All";
import React, { useState, useEffect } from "react";
import { getProducts } from "../../../sanity/sanity-utils";
import Allwears from "./Allwears/page";

const Allproducts = () => {
 
  return (
    <div className="">
    <Allwears/>
    </div>
  );
};

export default Allproducts;
