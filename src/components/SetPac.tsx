"use client"
import React from 'react';
import MaxWidthWrapper from './layout/MaxWidthWrapper';
import Image from 'next/image';
import { cardData } from '@/data/setPac';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import { useRouter } from "next/navigation";

const SetPac: React.FC = () => {
  const router = useRouter()

  const handleDetails = (slug:string) =>{
    router.push(`combo/${slug}`)
  }

  return (
    <section className="py-5 lg:py-10">
      <MaxWidthWrapper>
        <h1 className="text-lg text-center  sm:text-start md:text-2xl font-semibold text-black capitalize">
          Combo Pack only for this holiday
        </h1>
        <Carousel>
  <CarouselContent>

  {cardData.map((card) => (
              <CarouselItem className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 mt-5 " 
                        key={card.id}>
          
          <div
          onClick = {()=> handleDetails(card.slug)}
          className="cursor-pointer shadow-md p-3 transition-colors duration-150 border hover:bg-gray-100 rounded-md flex flex-col transform hover:scale-100"
          aria-label={`View details of ${card.title}`}
          >
           
          <Image
            src={card.imageUrl}
            alt={card.title}
            width={400}
            height={300}
            loading="lazy"
            className="h-[300px] w-full object-cover rounded-md"
          />
          <h2 className="mt-3 text-xl font-semibold">{card.title}</h2>
          <p className="text-sm font-normal">{card.des}</p>
        </div>
          

    </CarouselItem>
      ))}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>


       
      </MaxWidthWrapper>
    </section>
  );
};

export default SetPac;
