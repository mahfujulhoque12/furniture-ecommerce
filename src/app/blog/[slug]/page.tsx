"use client";
import { FC } from "react";
import { use } from "react";
import { cardData } from "@/data/blogData";
import MaxWidthWrapper from "@/components/layout/MaxWidthWrapper";
import LeaveMsg from "@/components/LeaveMsg";

import Image from 'next/image';
import Link from 'next/link';

interface PageProps {
    params: Promise<{
      slug: string;
    }>;
  }
  
  const Page: FC<PageProps> = ({ params }) => {
    
    const { slug } = use(params);
    
    const allInfo = cardData.find((card) => card.slug === slug);

    const date = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    return (
        <section className="py-5 md:py-10">
        <MaxWidthWrapper>
           <div key={allInfo?.id}>
            <Image src={allInfo?.image as string} alt="img" width={1200} height={800} className="w-full h-[500px] drop-shadow-md object-cover"/>
         
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-5">
         
                 <div className="border p-3 shadow-md rounded-md">
                 <p className=" text-sm font-medium text-gray-500">{date}</p>
                 <h2 className=" text-lg font-semibold	 text-black">{allInfo?.title}</h2>

                <p className=" text-sm font-medium text-gray-600">{allInfo?.des}</p>
                <p className=" text-sm font-medium text-gray-600 mt-2">{allInfo?.desTwo}</p>

                
                <div  className="flex justify-start items-center mt-3">
                <Link href="/shop"

                className="bg-black hover:bg-[#232323] text-white font-semibold text-sm px-4 py-2 rounded-md">Shop Now </Link>
                </div>
                 </div>
                 <div  className="border p-3 shadow-md rounded-md">
                    <h3 className="text-lg font-semibold text-center text-black capitalize mb-3">Leave us a message</h3>
                    <LeaveMsg/>
                 </div>
            </div>
           </div>
        </MaxWidthWrapper>
        </section>
    )
}

export default Page;