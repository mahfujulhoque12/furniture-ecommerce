"use client";

import React, { useState, useEffect, useRef } from "react";
import { FaUserCheck } from "react-icons/fa";
import AddToCard from "../AddToCard";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";
import {
  SignInButton,
  SignedIn,
  SignedOut,
  useAuth,
  UserButton
} from "@clerk/nextjs";

const UserProfile: React.FC = () => {
  const router = useRouter();
  const { signOut } = useAuth(); // Clerk's signOut method
  const { cartItems } = useCart(); // Access cartItems from context
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Toggle Dropdown
  const handleUserClick = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  // Navigation Handlers
  const handleGoToAccount = () => {
    router.push("/account");
    setIsDropdownOpen(false);
  };

  const handleSignOut = () => {
    signOut();
    setIsDropdownOpen(false);
  };

  // Close Dropdown on Outside Click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex justify-between items-center gap-5">
      {/* User Section */}
      <UserButton/>
      <div className="relative">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <FaUserCheck
            size={25}
            className="text-black cursor-pointer"
            onClick={handleUserClick}
          />
          {isDropdownOpen && (
            <div
              ref={dropdownRef}
              className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg rounded-lg z-10"
            >
              <button
                onClick={handleGoToAccount}
                className="block w-full px-4 py-2 text-left hover:bg-gray-100"
              >
                Account
              </button>
              <button
                onClick={handleSignOut}
                className="block w-full px-4 py-2 text-left text-red-500 hover:bg-gray-100"
              >
                Sign Out
              </button>
            </div>
          )}
        </SignedIn>
      </div>

      {/* Add to Cart Section */}
      <div className="flex items-center gap-2">
        <AddToCard cartItems={cartItems} />
      </div>
    </div>
  );
};

export default UserProfile;
