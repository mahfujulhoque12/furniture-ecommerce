"use client";
import { FC, useState } from "react";
import { use } from "react";
import { cardData } from "@/data/houseData";
import MaxWidthWrapper from "@/components/layout/MaxWidthWrapper";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";
import { FaCalendarAlt } from "react-icons/fa";
import { GiCutDiamond } from "react-icons/gi";
import Link from 'next/link';
import ServicesFaq from "@/components/ServicesFaq";



import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"


interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

const Page: FC<PageProps> = ({ params }) => {
  const { slug } = use(params);
  const allInfo = cardData.find((card) => card.slug === slug);

  const [mainImage, setMainImage] = useState(allInfo?.image);

  const [count,setCount] =  useState<number>(1)
  const [msg ,setMsg] = useState<string | null> ("")

  const decrementCount = () => {
    if (count > 1) {
      setCount(count - 1);
    } else {
      setMsg("Minimum required is 1");
    }
  };

  return (
    <section className="py-5 md:py-10">
      <MaxWidthWrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <Image
              src={mainImage as string}
              alt="img"
              width={1000}
              height={600}
              className="h-[400px] object-cover rounded-md shadow-md"
            />
              <div className="flex gap-3 justify-center shadow-md p-2 rounded-md border mt-5">
              {allInfo?.moreImg?.map((img, index) => (
                <div
                  key={index} 
                  onMouseEnter={() => setMainImage(img)}
                >
                  <Image
                    src={img}
                    alt="img"
                    width={1000}
                    height={600}
                    className="h-[100px] w-[100px] shadow-md object-cover rounded-md cursor-pointer"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="max-h-[500px] overflow-y-scroll scrollbar-hide">
            <div>
               <h3 className="text-lg font-semibold capitalize">{allInfo?.title}</h3> 
               <h3 className="text-xl font-semibold">{allInfo?.name}</h3> 

               <p className="text-sm py-1 font-normal text-gray-500">{allInfo?.des}</p>


               <div className="flex gap-1 pb-1">
               <FaStar size={20} className="text-yellow-400"/>
               <FaStar size={20} className="text-yellow-400"/>
               <FaStar size={20} className="text-yellow-400"/>
               <FaStar size={20} className="text-yellow-400"/>
               <FaStar size={20} className="text-yellow-400"/>
               </div>
               <p className="text-xl font-bold py-2">{allInfo?.price} <del className="text-base font-semibold text-gray-500">{allInfo?.oldPrice} Off</del></p>
                 
          

              {/* Delevery section start */}
             <div className="mt-5 flex justify-between  p-3 border rounded-md shadow-sm">
              <div>
              <h4 className="text-sm font-bold bg-gray-100 text-center mb-1">Free While Global Delevery</h4>
              <p className="text-sm font-semibold ">Get it in 4-5 weeks to <span className="underline text-red-600">13524</span></p>
              </div>
                
                <Drawer>
              <DrawerTrigger>
              <FaChevronRight />
              </DrawerTrigger>
              <DrawerContent >
                <DrawerHeader>
                  <div className="flex justify-between px-5">
                  <DrawerTitle>Delivery Details</DrawerTitle>
                  <DrawerClose>
                  <IoMdCloseCircle size={20} className="text-red-500"/>
                  </DrawerClose>
                  </div>
                  <hr className="mt-1"/>
                </DrawerHeader>

                  <div className="p-4">
                    <p className="text-sm font-bold bg-gray-100 mb-1 w-[195px]">Free While Global Delevery</p>
                    <p className="text-sm font-semibold ">Get it in 4-5 weeks to <span className="underline text-red-600">13524</span></p>
                  </div>

                  <div className="p-4">
                    <p className="text-base	flex items-center gap-2 text-black font-medium"><FaCalendarAlt size={20} />
                    Delivery Scheduled After Item Ships</p>
                    <p className="text-xs mt-1	font-noraml text-gray-600">We’ll contact you to schedule a convenient delivery date once your item reaches your local area</p>
                    <hr className="mt-4"/> 
                  </div>

                  <div className="p-4">
                    <h3 className="text-2xl font-semibold ">Available Delivery Method(s)</h3>
                    <p className="text-base	 text-black font-medium mt-5">
                    FREE White Glove Delivery</p>
                    <p className="text-xs mt-1	font-noraml text-gray-600">We’ll carry your items to any room inside your home, unpack and set them up, and remove all packaging.</p>
                    <hr className="mt-4"/> 
                  </div>
                        
                  <div className="p-4">
                    <h3 className="text-2xl font-semibold ">Shipping Policy</h3>
                    <p className="text-sm	 font-medium mt-1 text-gray-500">
                    Your order means a lot to us. That's why we offer fast, safe and reliable delivery options for every item.</p>

                    <Link href="#" className="underline text-red-600 mt-2">Shipping Policy</Link>
                  
                  </div>
              
              </DrawerContent>
                </Drawer>
            </div>
        {/* Delevery section end */}


        {/* counter and Add to cart start */}
        {msg && (
                <p className="text-red-500 text-sm mt-2">{msg}</p>
              )}
              <div className="flex justify-between mt-5">
            
              <div className="flex items-center border rounded-full shadow-md overflow-hidden">
             
                <button 
                  type="button" 
                  className="text-3xl font-semibold px-4 py-1  hover:bg-gray-200   transition-all"
                  onClick={decrementCount}
                >
                  -
                </button>
                <p className="text-xl px-6 py-1 border-x bg-white">{count}</p>
                <button 
                  type="button" 
                  className="text-3xl font-semibold px-4 py-1  hover:bg-gray-200  transition-all"
                  onClick={()=>{
                    setCount(count + 1)
                    setMsg("")
                  }}
                >
                  +
                </button>
              </div>

                <div>
                  <button className="w-full bg-black px-6 shadow-md py-2 rounded-full text-white text-base font-semibold hover:bg-[#232323]">Add to cart</button>
                </div>
              </div>
        {/* counter and Add to cart end */}

            {/* offers start */}
             <div className="mt-4">
              <h4  className="text-lg font-semibold">More Offers and Savings</h4>
              <button type="button">
                <div className="flex gap-5 mt-3 ">
                    <div>
                    <GiCutDiamond  size={50} className="text-yellow-400"/>
                    </div>
                  <div>
                  <p className="text-base	 font-medium mt-1 text-gray-500 text-start"> Earn <span className="font-bold text-black">$21.50</span> in rewards with 5% back¹, plus members-only sales and more when you join Wayfair RewardsEarn $21.50 in rewards with 5% back¹, plus members-only sales and more when you join Wayfair Rewards</p>
                  <p className="text-base underline text-red-600 text-start">Join now for $29/year</p>
                  </div>
                </div>
              </button>
            </div>   
          {/* offers end */}    
          
          {/* services start*/}
          <div>
            <ServicesFaq/>
          </div>
          {/* services  end*/}

          </div>
            
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Page;
