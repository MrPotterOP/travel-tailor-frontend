import { Caveat, Lexend } from "next/font/google";
import "./globals.css";

import WhatsAppButton from "./components/UI/Button/Whatsapp";

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
      {/* <head> */}
        {/* <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
            `}
          </Script> */}
      {/* </head> */}
      <body className={`${fontPrime.variable} ${fontAlt.variable}`} suppressHydrationWarning>
        {/* {process.env.NEXT_PUBLIC_GA_ID && <GoogleAnalytics GA_MEASUREMENT_ID={process.env.NEXT_PUBLIC_GA_ID} />} */}
        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton phoneNumber="+919165070409" position="left" tooltip="Chat on WhatsApp" />
        {/* <Analytics /> */}
      </body>
    </html>
  );
}
