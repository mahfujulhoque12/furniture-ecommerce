"use client";
import { useState, useRef } from "react";
import Link from "next/link";
import MaxWidthWrapper from "@/components/layout/MaxWidthWrapper";

import UserProfile from "./UserProfile";
import { AlignJustify } from "lucide-react";
import MegaMenu from "@/components/navbar/MegaMenu";
import MobileNavigationDrawer from "@/components/navbar/MobileNavigationDrawer";
import Image from "next/image";
import logo from '/public/logo/logo.png';
import Search from "../Search";

interface MobileMenuOpeningPosition {
  mobileMenuPos?: "left" | "right" | "top" | "bottom"; // Make it optional
}
const Navigation = ({ mobileMenuPos = "left" }: MobileMenuOpeningPosition) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const drawerButtonRef = useRef(null);

  return (
    <header className="sticky top-0 lef-0 z-50 h-[135px] bg-white border-b border-[#cacaca]">
      <div className="border-b">
      <MaxWidthWrapper>
        <div className="flex items-center  justify-between gap-4 h-[60px]">
         <div className="flex  gap-5 p-3">
         <button
            ref={drawerButtonRef}
            className="border-none h-[45px] w-[45] -ml-3 bg-transparent md:hidden"
            aria-haspopup="true"
            onClick={() => setIsDrawerOpen(true)}
          >
            {/* Mobile Hamburger menu */}
            <AlignJustify />
          

          </button>
          <Link href="/">
          <Image src={logo} alt="" width={100} height={100} className="object-cover p-1 h-[50px] md:hidden mt-2"/>
          </Link>
         </div>

          <Link  href="/">
            <Image src={logo} alt="logo" width={80} height={40} className="hidden md:block   object-cover p-1 h-[60px]" />
          </Link>

          <div className="hidden lg:block">
            <MegaMenu />
          </div>
          <UserProfile />
          {/* Mobile navigation drawer */}
          <div className="lg:hidden absolute">
            <MobileNavigationDrawer
              {...{
                isDrawerOpen,
                setIsDrawerOpen,
                drawerButtonRef,
                mobileMenuPos,
              }}
            />
          </div>
        </div>
      </MaxWidthWrapper>
      </div>
   
      <Search/>
    </header>
  );
};

export default Navigation;
