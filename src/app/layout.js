import { Inter } from "next/font/google";
import "./globals.css";

import Header from "./components/header/header";
import AuthProvider from "./components/AuthProvider/AuthProvider";
import Footer from "./components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Brokenbycoker",
  description: "E-commerce fashion",
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        <link rel="icon" href="/images/brokenheart.png" sizes="any" />
      </head>
      <body className={inter.className}>
        <AuthProvider>
          <div>
            <Header />
            <div className="">{children}</div>

            <Footer />
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
