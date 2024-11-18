import React from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import slider1 from '/public/slider/slider1.jpg';
import slider2 from '/public/slider/slider2.jpg';
import slider3 from '/public/slider/slider3.jpg';
import Image from "next/image";
import Link from "next/link";

 function createSlug(title: string): string {
    return title
      .toLowerCase()                        
      .trim()                              
      .replace(/[\s\W-]+/g, '-')            
      .replace(/^-+|-+$/g, '');          
  }


type SliderData = {
    id:number;
    slug:string;
    image:string;
    title:string;
    subTitle:string;
}
const sliderData : SliderData[] =[
    {
        id:1,
        slug:createSlug("image-one"),
        image:slider1.src,
        title:"Transform Your Home with Elegant Furniture",
        subTitle:"Discover timeless designs crafted for comfort and style"
    },
    {
        id:2,
        slug:createSlug("image-two"),
        image:slider2.src,
        title:"Find Furniture That Fits Your Style",
        subTitle:"From modern minimalism to rustic charm, we've got it all."
    },
    {
        id:3,
        slug:createSlug("image-three"),
        image:slider3.src,
        title:"Upgrade Your Home, Effortlessly",
        subTitle:"Explore furniture tailored for every room and every need"
    }
]



const Slider = () => {
  return (
    <section>

        <div>

          <Carousel scrollBy={1}> 
            <CarouselContent>
                {sliderData.map((data)=>(
                       <CarouselItem key={data.id}>
                        <div className="relative">
                            <Image src={data.image} alt={data.title} width={1200} height={700}  className="w-full h-[300px] md:h-[600px] object-cover"/>
                            <div className="absolute top-16 left-2  sm:top-[40%]  sm:left-[20%]  md:left-[8%] lg:left-[15%] xl:left-[20%]">
                                <h1 className="text-white text-lg md:text-4xl uppercase font-bold text-center">{data.title}</h1>
                                <h3 className="text-white font-medium text-sm md:text-lg text-center capitalize">{data.subTitle}</h3>
                                <div className="flex justify-center items-center mt-3">
                                    <Link href="/shop" className="text-xs md:text-sm font-bold text-white bg-black px-4 py-2 hover:bg-[#232323] rounded-md shadow-md">Shop Now</Link>
                                </div>
                            </div>
                        </div>
                    
                       </CarouselItem>
                ))}
           
    
            </CarouselContent>
            <CarouselPrevious isSlider/>
            <CarouselNext isSlider />
          </Carousel>
        </div>

    </section>
  )
}

export default Slider
