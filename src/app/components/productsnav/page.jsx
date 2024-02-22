import Link from "next/link";


const Productsnav = () => {
    return ( 



        <div className="flex justify-end pt-5">
            <div className="flex gap-3 md:gap-6 md:text-[16px] text-[13px]">
                <Link href='/allproducts'> <p>All</p></Link>
               
                <Link href="/allproducts/shortwear"><p>Shorts</p></Link>
                <Link href="/allproducts/tshirts"> <p>Tshirts</p></Link>
                <Link href="/allproducts/hoodies"> <p>Hoodies</p></Link>
                <Link href="/allproducts/caps"> <p>Caps</p></Link>
            </div>
        </div>
     );
}
 
export default Productsnav;