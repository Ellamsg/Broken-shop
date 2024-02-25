


import Link from "next/link";


const All = ({ product }) => {
  return (
    <div>

  
    <div className="  
 ">
      <Link className="" href={`/details/${product?.slug}`}>
        <div className="">
          <div className="md:h-auto bg-white h-[240px] flex flex-col justify-center items-center ">
            <img
              src={product?.image2}
              
              alt="img"
              className="object-contain h-[100%] w-[100%] "
            />
          </div>

          <div className="md:text-[16px] text-[11px] md:flex-row flex-col flex md:gap-2 uppercase">
            <p className="">{product?.name}</p>

            <p>NGN{product && (product.price / 100).toLocaleString()}</p>
          </div>
        </div>
      </Link>
    </div>
    </div>
  );
};

export default All;
