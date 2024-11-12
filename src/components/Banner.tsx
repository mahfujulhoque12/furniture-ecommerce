import React from 'react'
import MaxWidthWrapper from './layout/MaxWidthWrapper';
import banner from '/public/banner/banner.jpg';
import Image from 'next/image';
import Link from 'next/link';

const Banner = () => {
  return (
    <section className="py-5 md:py-10">
    <MaxWidthWrapper>
    <Link href="#" className="relative" >
        <Image src={banner} alt="img" width={1100} height={400} className="w-full h-[400px] object-cover"/>
        <div className="absolute top-[25%] sm:top-[20%]  left-[15%] sm:left-[25%] md:left-[15%] lg:left-[25%] xl:left-[30%]">
        <h2 className=" font-bold text-2xl  md:text-4xl text-black">Holiday Essential For Less</h2>

        <button className="bg-black  mt-4 text-white px-4 py-2 transition-all duration-150 rounded-md shadow-md hover:bg-[#181C14]">Continure Shopping</button>

        </div>
       
    </Link>
    </MaxWidthWrapper>
  
    </section>
  )
}

export default Banner;