"use client";
import { useState } from "react";
import { FaBasketShopping } from "react-icons/fa6";
import { IoClose, IoTrashOutline } from "react-icons/io5";
import { useCart } from "@/context/CartContext";

const AddToCard = () => {
  const { cartItems, removeFromCart, subtotal, total } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={openModal} className="relative">
        <FaBasketShopping size={25} className="text-black" />
        <p className="absolute top-[-8px] right-[-18px]">({cartItems.length})</p>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-end bg-black bg-opacity-50" onClick={closeModal}>
          <div className="fixed top-0 right-0 bg-white rounded-lg shadow-lg w-[350px] p-6 m-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold mb-4">In Your Cart</h2>
              <button onClick={closeModal} className="absolute top-6 right-6 px-3 py-1 bg-black text-white rounded-md">
                <IoClose />
              </button>
            </div>

            <div className="flex flex-col h-64 border rounded-lg p-4 mb-4 overflow-y-auto">
              {cartItems.map((item) => (
                <div key={item.id} className="flex justify-between items-center mb-2">
                  <span>{item.name}</span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                  <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:text-red-700">
                    <IoTrashOutline size={20} />
                  </button>
                </div>
              ))}
              <div className="mt-4 border-t pt-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax (5%)</span>
                  <span>${(subtotal * 0.05).toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-semibold mt-2">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
            </div>

            <button className="px-4 py-2 shadow-md hover:bg-black bg-[#111111] text-white rounded-lg w-full">
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddToCard;
