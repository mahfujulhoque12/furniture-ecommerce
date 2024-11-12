"use client";
import React, { FC, useState } from "react";
import MaxWidthWrapper from "./layout/MaxWidthWrapper";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cardData } from "@/data/speacialProducts";

import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { MdOutlineShoppingBag } from "react-icons/md";
import { useRouter } from "next/navigation";

const SpeacialProducts: FC = () => {
  const [hoveredCardId, setHoveredCardId] = useState<number | null>(null);
  const router = useRouter()

  const handleDetails = (slug:string) =>{
    router.push(`speacial/${slug}`)
  }
 
  return (
    <section className="py-5 md:py-10">
      <MaxWidthWrapper>
        <div className="bg-[#fffefe] border p-3 rounded-md relative">
          <p className="bg-black w-[4px] h-[50px] p-0 absolute left-0 top-0"></p>
          <div className="flex gap-4 flex-col md:flex-row justify-between items-center">
            <h2 className="text-black font-semibold text-lg uppercase">
              Speacial Products
            </h2>

            
          </div>

          <Carousel className="mt-8">
            <CarouselContent>
              {cardData?.map((card) => (
                <CarouselItem
                className="basis-1/2 md:basis-1/3 lg:basis-1/4"
                key={card.id}
              >
                <div
                  onMouseEnter={() => setHoveredCardId(card.id)}
                  onMouseLeave={() => setHoveredCardId(null)}
                  onClick={() => handleDetails(card.slug)}
                  className="cursor-pointer h-full flex flex-col justify-between" 
                >
                  <div className="p-3 rounded-lg border shadow-md flex-grow h-full">
                    <div className="relative items-center justify-center max-h-[250px]">
                      <Image
                        src={hoveredCardId === card.id ? card.imageUrl : card.hoverImg}
                        alt="furniture"
                        width={500}
                        height={300}
                        className="h-full sm:w-full object-contain transition-all duration-500 rounded-md ease-in-out"
                      />
                      {/* Action Icons */}
                      <div
                        className={`flex gap-2 absolute top-[70%] left-[30%] transition-all duration-300 ${
                          hoveredCardId === card.id ? "opacity-100 scale-100" : "opacity-0 scale-90"
                        }`}
                      >
                        <CiHeart
                          size={25}
                          className="bg-white border text-black transition-colors duration-300 hover:text-white hover:bg-black rounded-md w-8 h-8"
                        />
                        <FaEye
                          size={10}
                          className="bg-white border text-black transition-colors duration-300 p-1 hover:text-white hover:bg-black rounded-md h-8 w-8"
                        />
                        <FaArrowRightArrowLeft
                          size={20}
                          className="bg-white border text-black transition-colors duration-300 p-1 hover:text-white hover:bg-black rounded-md h-8 w-8"
                        />
                      </div>
                    </div>
                    {/* Other content */}
                   <div className="mt-[2rem] sm:mt-[3rem] md:mt-[1rem] lg:mt-[1rem] xl:mt-[3rem]">
                   <h3 className="text-start text-lg  md:mt-3 font-semibold py-1">{card.title}</h3>
                   <p className="text-base font-noraml text-gray-600">{card.des}</p>
                   </div>
                    <div
                      className={`flex justify-start items-center text-yellow-500 gap-1 transition-opacity duration-500 ${
                        hoveredCardId === card.id ? "opacity-0" : "opacity-100"
                      }`}
                    >
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                    <p
                      className={`text-normal text-start text-black py-1 transition-opacity duration-500 ${
                        hoveredCardId === card.id ? "opacity-0 py-0" : "opacity-100"
                      }`}
                    >
                      {card.price}
                    </p>
                    <div
                      className={`mt-[-50px] transition-opacity duration-500 ${
                        hoveredCardId === card.id ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <button
                        className="bg-black flex items-center gap-2 justify-center text-white p-3 py-1 mt-3 transition-opacity duration-500 rounded-md hover:bg-[#232323] w-full max-w-[500px] md:max-w-[236px]"
                      >
                        <MdOutlineShoppingBag size={20} /> Add to cart
                      </button>
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

export default SpeacialProducts;
