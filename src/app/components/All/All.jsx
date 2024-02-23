


import Link from "next/link";


const All = ({ product,imageStyle }) => {
  return (
    <div>

  
    <div className="  
 ">
      <Link className="" href={`/details/${product?.slug}`}>
        <div className="">
          <div className="md:h-auto h-[240px] flex flex-col justify-center items-center bg-white">
            <img
              src={product?.image2}
              
              alt="img"
              className="allimage "
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
