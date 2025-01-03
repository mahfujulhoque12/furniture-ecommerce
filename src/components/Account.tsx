"use client";

import React, { useState } from "react";
import MaxWidthWrapper from "@/components/layout/MaxWidthWrapper";
import { useUser, useAuth } from "@clerk/nextjs";
import { useCart } from "@/context/CartContext";
import { IoTrashOutline } from "react-icons/io5";
import cart from "/public/cart/cart.png";
import Image from "next/image";
import Refund from "./Refund";
import Return from "./Return";


const Account: React.FC = () => {
  const [currentSection, setCurrentSection] = useState<"dashboard" | "orders" | "refund">("orders");
  const { cartItems, removeFromCart, subtotal, total } = useCart();
  const { user } = useUser();
  const { signOut } = useAuth();

  const handleLogout = () => {
    signOut(); // Sign out the user
  };



  return (
    <section className="py-5 md:py-10">
      <MaxWidthWrapper>
        <div className="flex flex-col md:flex-row gap-4">
          {/* Sidebar */}
          <div className="border basis-full md:basis-1/3 p-4 rounded shadow">
            <h2 className="text-lg font-bold mb-4">
              <span className="text-sm text-gray-500">Welcome,</span>{" "}
              {user?.fullName || "User"}!
            </h2>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => setCurrentSection("dashboard")}
                  className={`block py-2 px-4 rounded ${
                    currentSection === "dashboard" ? "font-bold" : ""
                  }`}
                >
                  Retrun
                </button>
              </li>

              <li>
                <button
                  onClick={() => setCurrentSection("refund")}
                  className={`block py-2 px-4 rounded ${
                    currentSection === "refund" ? "font-bold" : ""
                  }`}
                >
                  Refund
                </button>
              </li>

              <li>
                <button
                  onClick={() => setCurrentSection("orders")}
                  className={`block py-2 px-4 rounded ${
                    currentSection === "orders" ? "font-bold" : ""
                  }`}
                >
                  Orders
                </button>
              </li>
              <button
                onClick={handleLogout}
                className="block py-2 px-4 rounded text-red-500 hover:bg-red-100"
              >
                Logout
              </button>
            </ul>
          </div>

          {/* Main Content */}
          <div className="basis-full p-4 rounded shadow border">
            {currentSection === "orders" && (
              <>
                <h2 className="text-lg font-bold mb-4">Your Orders</h2>
                <div id="orders">
                  {cartItems.length > 0 ? (
                    <div className="flex flex-col border rounded-lg p-4 mb-4 overflow-y-auto scrollbar-hide max-h-[500px]">
                      {cartItems.map((item) => (
                        <div
                          key={item.id}
                          className="flex flex-col border p-2 md:p-0 md:border-0 md:flex-row justify-between items-center mb-2"
                        >
                          {item.image ? (
                            <Image
                              src={item.image}
                              alt={item.name}
                              width={100}
                              height={100}
                              className="h-[100px]"
                            />
                          ) : (
                            <p className="text-sm text-gray-500">
                              No image available
                            </p>
                          )}
                          <p className="text-center text-lg font-medium w-[270px]">
                            {item.name}
                          </p>

                          {/* Price */}
                          <p className="text-center text-lg font-semibold">
                            ${(item.price * item.quantity).toFixed(2)}
                          </p>

                          {/* Remove Button */}
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-red-500 hover:text-red-700"
                          >
                            <IoTrashOutline size={35} />
                          </button>
                        </div>
                      ))}

                      <div className="mt-4 border-t pt-4">
                        <div className="flex justify-between">
                          <p className="text-lg font-semibold">Subtotal</p>
                          <p className="text-lg font-semibold">
                            ${subtotal.toFixed(2)}
                          </p>
                        </div>
                        <div className="flex justify-between">
                          <p className="text-lg font-semibold">Tax (5%)</p>
                          <p className="text-lg font-semibold">
                            ${(subtotal * 0.05).toFixed(2)}
                          </p>
                        </div>
                        <div className="flex justify-between font-semibold mt-2">
                          <p className="text-lg font-bold">Total</p>
                          <p className="text-lg font-bold">${total.toFixed(2)}</p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-10">
                      <p className="text-xl font-medium text-gray-66">
                        No items available here.
                      </p>
                      <div className="flex items-center w-full justify-center mt-3">
                        <Image
                          src={cart}
                          alt="No items"
                          width={400}
                          height={400}
                          className="object-fill"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </>
            )}

            {currentSection === "dashboard" && (
              <>
                <h2 className="text-lg font-bold mb-4">Return Your Product</h2>
                <div id="dashboard">
                 <Return/>
                </div>
              </>
            )}

            {currentSection === "refund" && (
              <>
                <h2 className="text-lg font-bold mb-4">Refund Your product</h2>
                <div id="refund">
                 <Refund/>
                </div>
              </>
            )}
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Account;
