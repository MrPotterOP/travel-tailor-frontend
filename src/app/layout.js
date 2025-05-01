import { Caveat, Lexend, Open_Sans } from "next/font/google";
import LocalFont from "next/font/local";
import "./globals.css";

import WhatsAppButton from "./components/UI/Button/Whatsapp";

import AnalyticsLoader from "./lib/AnLoader";

const fontAlt = Caveat({
  variable: "--font-alt",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap"
})

const fontPrime = Open_Sans({
  variable: "--font-prime",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
})
// const fontPrime = Lexend({
//   variable: "--font-prime",
//   subsets: ["latin"],
//   weight: ["300", "400", "500", "700"],
// })

// const fontPrime = LocalFont({
//   src: [
//     {
//       path: "./fonts/CoFo Sans 1.otf",
//       weight: "300",
//       style: "normal",
//     },
//     {
//       path: "./fonts/CoFo Sans 7.otf",
//       weight: "400",
//       style: "normal",
//     },
//     {
//       path: "./fonts/CoFo Sans 5.otf",
//       weight: "500",  
//       style: "normal",
//     },
//     {
//       path: "./fonts/CoFo Sans 3.otf",
//       weight: "700",
//       style: "normal",
//     }
//   ],
//   variable: "--font-prime",
//   display: "swap",
// });

// const fontPrime = LocalFont({
//   src: [
//     {
//       path: "./fonts/CoFoSans-Regular.ttf",
//       weight: "300",
//       style: "normal",
//     },
//     {
//       path: "./fonts/CoFoSans-Medium.ttf",
//       weight: "400",
//       style: "normal",
//     },
//     {
//       path: "./fonts/CoFoSans-Bold.ttf",
//       weight: "500",  
//       style: "normal",
//     },
//     {
//       path: "./fonts/CoFoSans-Black.ttf",
//       weight: "700",
//       style: "normal",
//     }
//   ],
//   variable: "--font-prime",
//   display: "swap",
// });

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";


// TODO - Get detailed description from client

export const metadata = {
  title: "Home | Travel Tailor",
  description: "Travel Tailor is a travel booking website that helps travelers find the best deals on Tours and help them plan their trips.",

  icons: {
    icon: "/favicon.ico",
    shortcut: "/images/logoAlt.png",
    apple: "/images/logoAlt.png"
  },

  openGraph: {
    title: "Home | Travel Tailor",
    description: "Travel Tailor is a travel booking website that helps travelers find the best deals on Tours and help them plan their trips.",
    url: "https://www.traveltailot.in/",
    siteName: "Travel Tailor",
    locale: "en_US",
    type: "website",
  }

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
        <WhatsAppButton phoneNumber="+919165070409" position="right" tooltip="Chat on WhatsApp" />
        <AnalyticsLoader />
      </body>
    </html>
  );
}
