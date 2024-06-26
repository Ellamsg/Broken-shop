

import Image from "next/image";
import Link from "next/link";


const Trending = ({ product }) => {
  return (
    <div>
{/**products */}
  
    <div className="  ">
      
      <Link className="" href={`/details/${product?.slug}`}>
        <div className="">
          <div className=" flex flex-col justify-center items-center bg-white">
            <img
              src={product?.image2}
              
              alt="img"
              className="allimage"
            />
          </div>

          <div className="md:text-[16px] text-[13px] flex gap-4 uppercase">
            <p>{product?.name}</p>

            <p>NGN{product && (product.price / 100).toLocaleString()}</p>
          </div>
        </div>
      </Link>
    </div>
    </div>
  );
};

export default Trending;
