"use client";
import { useState } from "react";
import { FaBasketShopping } from "react-icons/fa6";
import { IoClose, IoTrashOutline } from "react-icons/io5";
import { useCart } from "@/context/CartContext";
import Image from "next/image";
import { CartItem } from "@/context/CartContext";
import cart from '/public/cart/cart.png';
import Link from 'next/link';

interface AddToCardProps {
  cartItems: CartItem[];
}

const AddToCard: React.FC<AddToCardProps> = () => {
  const { cartItems, removeFromCart, updateCartItem, subtotal, total } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => setIsOpen(!isOpen);

  const handleIncrement = (item: CartItem) => {
    updateCartItem(item.id, item.quantity + 1); 
  };

  const handleDecrement = (item: CartItem) => {
    if (item.quantity > 1) {
      updateCartItem(item.id, item.quantity - 1); 
    }
  };

  return (
    <div>
      <button onClick={toggleDrawer} className="relative">
        <FaBasketShopping size={25} className="text-black" />
        <p className="absolute top-[-8px] right-[-18px]">({cartItems.length})</p>
      </button>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
        onClick={toggleDrawer}
      ></div>

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 z-50 h-full bg-white w-full mx-auto p-6 shadow-lg transform transition-transform duration-500 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">In Your Cart</h2>
          <button onClick={toggleDrawer} className="px-2 py-1 bg-black text-white rounded-md">
            <IoClose />
          </button>
        </div>

        {/* Conditional Content Based on Cart Items */}
        {cartItems.length > 0 ? (
          <div className="flex flex-col border rounded-lg p-4 mb-4 overflow-y-auto scrollbar-hide max-h-[500px]">
            {cartItems.map((item) => (
              <div key={item.id} className="flex flex-col border p-2 md:p-0 md:border-0 md:flex-row justify-between items-center mb-2">
                {item.image ? (
                  <Image src={item.image} alt={item.name} width={100} height={100} className="h-[100px]" />
                ) : (
                  <p className="text-sm text-gray-500">No image available</p>
                )}
                <p className="text-center text-lg font-medium w-[270px]">{item.name}</p>

                {/* Quantity Controls */}
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => handleDecrement(item)}
                    className="text-gray-600 bg-gray-100 hover:bg-gray-200 transition-all duration-150 text-xl flex items-center justify-center font-bold w-6 h-6 rounded-md  hover:text-gray-800"
                  >
                    -
                  </button>
                  <p className="text-center text-lg font-semibold">{item.quantity}</p>

                  <button
                    onClick={() => handleIncrement(item)}
                      className="text-gray-600 bg-gray-100 hover:bg-gray-200 transition-all duration-150 text-xl flex items-center justify-center font-bold w-6 h-6 rounded-md  hover:text-gray-800"
                  >
                    +
                  </button>
                </div>

                {/* Price */}
                <p className="text-center text-lg font-semibold">${(item.price * item.quantity).toFixed(2)}</p>

                {/* Remove Button */}
                <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:text-red-700">
                  <IoTrashOutline size={35} />
                </button>
              </div>
            ))}

            <div className="mt-4 border-t pt-4">
              <div className="flex justify-between">
                <p className="text-lg font-semibold">Subtotal</p>
                <p className="text-lg font-semibold">${subtotal.toFixed(2)}</p>
              </div>
              <div className="flex justify-between">
                <p className="text-lg font-semibold">Tax (5%)</p>
                <p className="text-lg font-semibold">${(subtotal * 0.05).toFixed(2)}</p>
              </div>
              <div className="flex justify-between font-semibold mt-2">
                <p className="text-lg font-bold">Total</p>
                <p className="text-lg font-bold">${total.toFixed(2)}</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-10">
            <p className="text-xl font-medium text-gray-66">No items available here.</p>
            <div className="flex items-center w-full justify-center mt-3">
              <Image src={cart} alt="" width={400} height={400} className="object-fill" />
            </div>
          </div>
        )}

        {cartItems.length > 0 && (
          <Link onClick={toggleDrawer} href="/checkout" className="px-4 py-2 shadow-md hover:bg-black bg-[#111111] text-white rounded-lg w-full block text-center">
            Checkout
          </Link>
        )}
      </div>
    </div>
  );
};

export default AddToCard;
