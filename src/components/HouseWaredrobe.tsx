"use client"
import MaxWidthWrapper from "@/components/layout/MaxWidthWrapper";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  
import Image from "next/image";
import { cardData } from "@/data/houseData";
import { useRouter } from "next/navigation";

const HouseWaredrobe = () =>{
    const router = useRouter()

    const handleDetails = (slug:string) =>{
      router.push(`house-furniture/${slug}`)
    }
    const tableData = cardData.filter((card)=> card.id >=41 && card.id <= 50)
    return(
        <section className="py-5 md:py-10">
            <MaxWidthWrapper>
            <div className="flex flex-col md:flex-row justify-between">
                <h1 className="text-lg  md:text-2xl font-semibold text-black capitalize">
                    House Waredrobe</h1>

                <div className="flex justify-end md:justify-start">
                <button type="button" className="text-base font-normal hover:text-red-600">View All</button>
                </div>
            </div>
            <Carousel>
            <CarouselContent>
            {tableData?.map((card)=> (
                        <CarouselItem 
                        className="basis-1/2 md:basis-1/3 lg:basis-1/5 mt-5 " 
                        key={card.id}
                    >
                        <div  onClick={() => handleDetails(card.slug)} className="p-3 rounded-lg border shadow-sm h-full flex flex-col cursor-pointer ">
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
                    </CarouselItem>
                    
                    
                ))}
                
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
            </Carousel>
            </MaxWidthWrapper>
        </section>
       
    )
}

export default HouseWaredrobe;