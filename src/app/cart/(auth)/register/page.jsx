"use client";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Register = () => {
  const [error, setError] = useState(false);
  const router = useRouter();
  //send post request to database form

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });
      res.status === 201 &&
        router.push("/cart/login?success=Account has been created");
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className="space ">
      <div className="flex pt-4  flex-col items-center justify-center">
        <div className="lg:w-[50%] w-[100%] md:w-[70%]">
          <form className="flex gap-1 flex-col" onSubmit={handleSubmit}>
            <label id="email">User</label>
            <input
              className="login"
              type="text"
              required
              placeholder="username"
            />
            <label id="password">Email</label>
            <input
              className="login"
              type="email"
              required
              placeholder="email"
            />
            <label id="password">Password</label>
            <input
              className="login"
              type="password"
              required
              placeholder="password"
            />
            <div className="flex justify-center items-center">
              <button className="change login-btn  mt-[30px]">Register</button>
            </div>
          </form>
          {error && "err yes"}

          <div className="flex flex-col justify-center pb-5 ">
            <p className="text-center py-4 ">
              Already have an account?
            </p>

            <Link className="text-center" href="/cart/login">
              <p className="font-bold ">LOGIN</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
