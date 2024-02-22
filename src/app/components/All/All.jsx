


import Link from "next/link";


const All = ({ product,imageStyle }) => {
  return (
    <div>

  
    <div className="  
 ">
      <Link className="" href={`/details/${product?.slug}`}>
        <div className="">
          <div className="">
            <img
              src={product?.image}
              
              alt="img"
              className={`lg:${imageStyle} allimage `}
            />
          </div>

          <div className="md:text-[16px] text-[11px] flex gap-2 uppercase">
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
