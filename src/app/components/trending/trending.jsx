

import Image from "next/image";
import Link from "next/link";


const Trending = ({ product,imageStyle }) => {
  return (
    <div>
{/**products */}
  
    <div className="  ">
      
      <Link className="" href={`/details/${product?.slug}`}>
        <div className="">
          <div className="">
            <img
              src={product?.image}
              
              alt="img"
              className={`lg:${imageStyle} mage `}
            />
          </div>

          <div className="md:text-[16px] text-[13px] flex gap-4 uppercase">
            <p>{product?.name}</p>

            <p>NGN{product?.price / 100}</p>
          </div>
        </div>
      </Link>
    </div>
    </div>
  );
};

export default Trending;
