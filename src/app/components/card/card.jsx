import Image from "next/image";
import Link from "next/link";
import "./card.css";

const Card = ({ product }) => {
  return (
    <div className="my-5  mx-[5px]">
      <Link className="" href={`/details/${product?.slug}`}>
        <div className="">
          <div className="lg:h-[450px] bg-white flex flex-col justify-center items-center h-[250px] md:h-[400px]">
            <img
              src={product?.image}
           className=" w-[100%] md:h-auto h-[100%] object-contain "
              alt="img"
            
            />
          </div>

          <div className=" md:text-[16px] text-[13px] flex justify-between gap-2 uppercase">
            <p>{product?.name}</p>

            <p>NGN{product && (product.price / 100).toLocaleString()}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
