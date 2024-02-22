import Link from "next/link";


const Productsnav = () => {
    return ( 



        <div className="flex justify-end pt-5">
            <div className="flex gap-3 md:gap-6 md:text-[16px] text-[13px]">
                <Link className="links" href='/allproducts'> <p>All</p></Link>
               
                <Link className="links" href="/allproducts/shortwear"><p>Shorts</p></Link>
                <Link className="links" href="/allproducts/tshirts"> <p>Tshirts</p></Link>
                <Link className="links" href="/allproducts/hoodies"> <p>Hoodies</p></Link>
                <Link className="links" href="/allproducts/caps"> <p>Caps</p></Link>
            </div>
        </div>
     );
}
 
export default Productsnav;