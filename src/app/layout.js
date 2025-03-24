import { Caveat, Lexend } from "next/font/google";
import "./globals.css";

const fontAlt = Caveat({
  variable: "--font-alt",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap"
})

const fontPrime = Lexend({
  variable: "--font-prime",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
})

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";


// TODO - Get detailed description from client

export const metadata = {
  title: "Home | Travel Tailor",
  description: "Travel Tailor is a travel booking website that helps travelers find the best deals on Tours and help them plan their trips.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${fontPrime.variable} ${fontAlt.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
