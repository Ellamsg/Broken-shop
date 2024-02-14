import Link from "next/link";


const Productsnav = () => {
    return ( 



        <div className="flex justify-end pt-5">
            <div className="flex gap-6">
                <Link href='/allproducts'> <p>ALL</p></Link>
               
                <Link href="/allproducts/caps"> <p>WOMEN</p></Link>
                <Link href="/allproducts/caps"> <p>CAPS</p></Link>
            </div>
        </div>
     );
}
 
export default Productsnav;