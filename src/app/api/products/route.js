import connect from "@/utils/db";
import { NextResponse } from "next/server";
import Products from "@/models/Products";

export const GET = async (request) => {
  const url = new URL(request.url);

  const username = url.searchParams.get("username");

  try {
    await connect();

    const poroducts = await Products.find(username && { username });

    return new NextResponse(JSON.stringify(poroducts), { status: 200 });
  } catch (err) {
    return new NextResponse("no name", { status: 500 });
  }
};



export const POST = async (request) => {
  const body = await request.json();

  const newProducts = new Products(body);

  try {
    await connect();

    await newProducts.save();

    return new NextResponse("Post has been created", { status: 201 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};

