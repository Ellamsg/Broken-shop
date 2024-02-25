"use client";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
const Login = () => {
  const session = useSession();
  const router = useRouter();
  if (session.status === "loading") {
    return <p>loading...</p>;
  }

  if (session.status === "authenticated") {
    router?.push("/cart");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    signIn("credentials", { email, password });
  };

  return (
    <div className="space pb-7 flex pt-4 flex-col justify-center items-center">
      <div className=" w-[100%] md:w-[70%] lg:w-[50%] ">
        <form className="flex  pt-3 flex-col gap-3" onSubmit={handleSubmit}>
          <label id="email">Email</label>
          <input required className=" login" type="text" placeholder="email" />
          <label id="password">Password</label>
          <input
            required
            className=" login "
            type="password"
            placeholder="password"
          />
          <div className="flex justify-center items-center">
            <button className="change login-btn  mt-[30px]">Login </button>
          </div>
        </form>
        <p className="text-center py-4">or</p>
        <div className="flex   justify-center  text-white hover:text-black">
          <div onClick={() => signIn("google")} className="flex hover:bg-white border-2 border-white  ">
            <img src="/icons/google.svg" className="size-6" />
            <button className=" px-4" >
              Login with google
            </button>
          </div>
        
        </div>
        <div className="flex flex-col justify-center  text-center">
        <p className="py-3">Dont have an account?</p>
          <Link href="/cart/register"><p>REGISTER</p></Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
