import { Caveat, Lexend, Open_Sans } from "next/font/google";
import "./globals.css";

import WhatsAppButton from "./components/UI/Button/Whatsapp";

import AnalyticsLoader from "./lib/AnLoader";
import PopupForm from "./components/Popup/PopupForm";

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


import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";


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
      <body className={`${fontPrime.variable} ${fontAlt.variable}`} suppressHydrationWarning>
        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton phoneNumber="+919165070409" position="right" tooltip="Chat on WhatsApp" />
        <PopupForm />
        <AnalyticsLoader />
      </body>
    </html>
  );
}
