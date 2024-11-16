// UserProfile.tsx
"use client";
import React from "react";
import { FaUserCheck } from "react-icons/fa";
import AddToCard from "../AddToCard";
import { useCart } from "@/context/CartContext";
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'

const UserProfile: React.FC = () => {
  const { cartItems } = useCart(); // Access cartItems from context

  return (
    <div className="flex justify-between gap-5">
      <div className="flex coursor-pointer items-center gap-2 text-sm">
      <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
  
        <FaUserCheck size={25} className="text-black" />
      </div>

      <div className="flex items-center gap-2 text-sm">
        <AddToCard cartItems={cartItems} />
      </div>
    </div>
  );
};

export default UserProfile;
