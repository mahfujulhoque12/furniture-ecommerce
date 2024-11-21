"use client";
import React from "react";
import { useCart } from "@/context/CartContext";
import MaxWidthWrapper from "@/components/layout/MaxWidthWrapper";
import CheckoutForm from './CheckoutForm';
import Image from 'next/image';
import card1 from '/public/checkout/card1.png';
import card2 from '/public/checkout/card2.png';
import card3 from '/public/checkout/card3.png';
import card4 from '/public/checkout/card4.png';
import Link from 'next/link';


const Checkout = () =>{
    const { cartItems, subtotal, total } = useCart(); 
    return (
        <section className="py-5 md:py-10">
            <MaxWidthWrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 flex-grow h-full">
            
            <div className="">
                <CheckoutForm/>
            </div>
            <div className="bg-gray-50 p-3 rounded-md shadow-md border">
      <h3 className="text-lg md:text-2xl text-center font-semibold">Your Order</h3>
      
      {/* prodcts price details start */}
      <div className="mt-6">
        <table className="w-full border-separate border-spacing-2">
          <thead>
            <tr className="text-left">
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Quantity</th>
              <th className="px-4 py-2">Price</th>
             
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id}>
                <td className="px-4 py-2 text-sm">{item.name}</td>
                <td className="px-4 py-2 text-center text-sm">{item.quantity}</td>
                <td className="px-4 py-2 text-sm">${(item.price * item.quantity).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="mt-3  md:px-7 flex justify-between">
          <div className="font-semibold text-sm">Subtotal:</div>
          <div>${subtotal.toFixed(2)}</div>
        </div>

        <div className="mt-2 flex md:px-7  justify-between border-b border-text-black">
          <div className="font-semibold text-sm" >Tax (5%):</div>
          <div>${(subtotal * 0.05).toFixed(2)}</div>
        </div>

        <div className="mt-3 flex md:px-7  justify-between">
          <div className="font-semibold text-lg">Total:</div>
          <div className="text-xl">${total.toFixed(2)}</div>
        </div>
      </div>
      {/* prodcts price details end */}

      {/* credit card start */}
      <div className="mt-6 flex justify-between">
      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          name="creditCard"
          id="creditCard"
          className=" rounded-full border-2 border-gray-400 "
        />
        <label htmlFor="creditCard" className="text-sm font-normal ">Credit Card</label>
      </div>
        <div className="flex ">

          <Link href="#">
          <Image src={card1} alt="card-img" width={100} height={100} className="w-[80px] h-[40px] object-contain "/>
          </Link>
          <Link href="#">
          <Image src={card2} alt="card-img" width={100} height={100} className="w-[80px] h-[40px] object-contain "/> 
          </Link>

          <Link href="#">
          <Image src={card3} alt="card-img" width={100} height={100} className="w-[80px] h-[40px] object-contain "/>
          </Link>
          <Link href="#">
          <Image src={card4} alt="card-img" width={100} height={100} className="w-[80px] h-[40px] object-contain "/>
          </Link>
        </div>
      </div>
      {/* credit card end */}

      {/* card info start */}
          <div className="mt-8">
            <p className="text-sm text-gray-500 font-noraml">pay securly using your card</p>
            <div className="flex flex-col mt-3"> 
              <label className="text-sm font-medium">Card Number</label>
              <input type="text" placeholder="*** *** *** ***" className="placeholder:text-gray-500 text-lg p-2 mt-2 rounded-md focus:border-[#60D66A] outline-none border"/>
            </div>
            
            <div className="flex justify-between mt-2 ">
            <div className="flex flex-col mt-3"> 
              <label className="text-sm font-medium">Expration(MM/YY)</label>
              <input type="text" placeholder="MM/YY" className="placeholder:text-gray-500 text-lg p-2 mt-2 rounded-md focus:border-[#60D66A] outline-none border"/>
            </div>
            <div className="flex flex-col mt-3"> 
              <label className="text-sm font-medium">Card Security Code</label>
              <input type="text" placeholder="CSC" className="placeholder:text-gray-500 text-lg p-2 mt-2 rounded-md focus:border-[#60D66A] outline-none border"/>
            </div>
            </div>
            
            </div>  

      {/* card info end */}

      {/* button */}

      <button className="text-white font-semibold text-sm bg-black px-4 py-2 rounded-md shodow-md w-full mt-8 hover:bg-[#232323]">Place Order</button>


    </div>

        </div>
        </MaxWidthWrapper>
        </section>
      
    )
}

export default Checkout;