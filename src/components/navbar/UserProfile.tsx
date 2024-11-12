// UserProfile.tsx
"use client";
import React from "react";
import { FaUserCheck } from "react-icons/fa";
import { FaBasketShopping } from "react-icons/fa6";
import AddToCard from "../AddToCard";
import { useCart } from "@/context/CartContext";

const UserProfile: React.FC = () => {
  const { cartItems } = useCart(); // Access cartItems from context

  return (
    <div className="flex justify-between gap-5">
      <button type="button" className="flex items-center gap-2 text-sm">
        Login
        <FaUserCheck size={25} className="text-black" />
      </button>

      <div className="flex items-center gap-2 text-sm">
        <AddToCard cartItems={cartItems} />
      </div>
    </div>
  );
};

export default UserProfile;
