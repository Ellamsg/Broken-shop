"use client";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";


const Login = () => {
  

     const session = useSession()
     const router = useRouter()
    if(session.status === "loading"){
        return <p>loading...</p>
    }

    if(session.status === "authenticated"){
       router?.push ("/cart")
    }
  
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const email = e.target[0].value;
      const password = e.target[1].value;
      signIn("credentials", { email, password });
    };
  
  return (
    <div className="space pb-7 flex flex-col justify-center items-center">
      
      <div className=" w-[100%] md:w-[70%] lg:w-[50%] ">

    
      <form className="flex  pt-3 flex-col gap-3" onSubmit={handleSubmit}>
        <label id="email">Email</label>
        <input required className=" login" type="text" placeholder="email" />
        <label id="password">Password</label>
        <input required className=" login " type="password" placeholder="password" />
        <div className="flex justify-center items-center" >
        <button className="change login-btn  mt-[30px]">login plx</button>
        </div>
      
      </form>
      <p className="text-center py-4">or</p>
      <div className="flex    justify-center  text-white hover:text-black">
        <div className="flex hover:bg-white border-2 border-white  ">
        <img src="/icons/google.svg" className="size-6" />
      <button className=" px-4" onClick={() => signIn("google")}>login with googs</button>
        </div>
      
      </div>
      </div>
    </div>
  );
};

export default Login;
