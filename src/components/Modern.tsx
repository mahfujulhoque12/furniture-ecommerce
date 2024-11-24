"use client"
import MaxWidthWrapper from "@/components/layout/MaxWidthWrapper";
import { cardData } from "@/data/mordanData";
import Image from "next/image";
import React from 'react'
import { useRouter } from "next/navigation";

const Modern:React.FC = () => {

    const router = useRouter()
    const handleDetails = (slug:string) => {
        router.push(`modern-furniture/${slug}`)
    }

  return (
    <section className="py-5 md:py-10">
        <MaxWidthWrapper>

        <div>
            <h1 className="text-lg text-start  sm:text-start  md:text-2xl font-semibold text-black capitalize">Modern Furniture</h1>
            <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-5">
                {cardData.map((card)=>(
                      
                     <div key={card.id}
                     onClick={()=> handleDetails(card.slug)}
                     className="p-3 rounded-lg border shadow-sm h-full flex flex-col cursor-pointer ">
                                <div className="transition-all duration-300 hover:scale-[101%]">
                                    <Image
                                        src={card.image} 
                                        alt="img" 
                                        width={400} 
                                        height={300} 
                                        className="rounded-md w-full h-[200px] object-cover"
                                    />
                                    <h3 className="mt-[-30px] z-10 relative bg-black text-white px-3 py-1 w-full rounded-md">{card.title}</h3>
                                    <h4 className="text-lg font-semibold text-start py-1">{card.name}</h4>
                                    <p className="text-sm text-start font-normal mb-1">{card.des.slice(0,58)}...</p>
                                    <p className="text-base font-bold text-start flex gap-2">
                                        {card.price} 
                                        <del className="text-gray-400">{card.oldPrice}</del>
                                    </p>
                            </div>
                        </div>
                   
                ))}
              
            </div>
        </div>
        </MaxWidthWrapper>
    </section>
  )
}

export default Modern