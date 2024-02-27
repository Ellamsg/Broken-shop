import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <div className="fixed  bottom-4 right-3 md:right-6">
        <a href="https://wa.me/2349084753065" target="_blank">
          <img className="size-6" src="/icons/whatsapp2.png" />
        </a>
      </div>
      <div className="flex py-4 mx-3  lg:mx-[70px]  justify-between border-t-2 border-white">
        <div className="flex">
          <a
            href="https://www.instagram.com/brokenbycoker?igsh=cTBqdjMxZGc2MnJ0&utm_source=qr"
            target="_blank"
          >
            <p>Instagram</p>
          </a>
        </div>

        <div>
          <a
            href="https://www.tiktok.com/@brokenbycoker?_t=8kBa1FEy8tq&_r=1"
            target="_blank"
          >
            <p> Tiktok</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
