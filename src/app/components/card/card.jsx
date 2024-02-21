import Image from "next/image";
import Link from "next/link";
import "./card.css";

const Card = ({ product }) => {
  return (
    <div className="my-5  mx-[5px]">
      <Link className="" href={`/details/${product?.slug}`}>
        <div className="">
          <div className="bg-green">
            <img
              src={product?.image}
           className="lg:h-[450px] md:h-[400px] w-[100%] h-[250px]"
              alt="img"
            
            />
          </div>

          <div className=" md:text-[16px] text-[13px] flex justify-between gap-2 uppercase">
            <p>{product?.name}</p>

            <p>NGN{product?.price / 100}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
