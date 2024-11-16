"use client";
import React, { FC, useState,useEffect } from "react";
import MaxWidthWrapper from "./layout/MaxWidthWrapper";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cardData } from "@/data/blogData";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Blog: FC = () => {
  const router = useRouter();

  const handleDetails = (slug: string) => {
    router.push(`blog/${slug}`);
  };

  const [date, setDate] = useState<string | null>(null);

  useEffect(() => {
    const formattedDate = new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
    setDate(formattedDate);
  }, []);


  
  return (
    <section className="py-5 md:py-10">
      <MaxWidthWrapper>
        <div className="bg-[#fffefe] border p-3 rounded-md relative">
          <p className="bg-black w-[4px] h-[50px] p-0 absolute left-0 top-0"></p>
          <div className="flex gap-4 flex-col md:flex-row justify-between items-center">
            <h2 className="text-black font-semibold text-lg uppercase">
              Our Blog
            </h2>
          </div>

          <Carousel className="mt-8">
            <CarouselContent>
              {cardData?.map((card) => (
                <CarouselItem
                  className="basis-full md:basis-1/2 "
                  key={card.id}
                >
                  <div className="overflow-hidden group">
                  <Image src={card.image} alt="img" width={1200} height={700} className="transition-transform duration-500 group-hover:scale-105" />
                  <div className="p-3">
                  <p className=" text-sm font-medium text-gray-500">{date}</p>
                  <h2 className=" mt-2 text-lg font-semibold	 text-black">{card.title}</h2>

                  <p className=" text-sm font-medium text-gray-600">{card.des.slice(0,100)}...</p>

                 <div  className="flex justify-start items-center mt-3">
                 <button
                 onClick={()=>handleDetails(card.slug)}
                  className="bg-black hover:bg-[#232323] text-white font-semibold text-sm px-4 py-2 rounded-md">Read More </button>
                 </div>
                  </div>
                  

                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Blog;
