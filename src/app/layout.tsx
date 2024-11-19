import type { Metadata } from "next";
import { poppins } from "@/lib/font";
import "./globals.css";
import {
  ClerkProvider,
} from '@clerk/nextjs'

import Navigation from "@/components/navbar/Navigation";
import Footer from "@/components/Footer";
import { CartProvider } from "@/context/CartContext";


export const metadata: Metadata = {
  title: "Furniture E-commerce",
  description: "Chose your furniture from here",
  icons: {
    icon: '/logo.ico', 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={`${poppins.className} antialiased overflow-x-hidden`}>
       <CartProvider>
        <Navigation />
        {children}
       <Footer /> 
      </CartProvider>
      </body>
    </html>
  </ClerkProvider>
   
  );
}
