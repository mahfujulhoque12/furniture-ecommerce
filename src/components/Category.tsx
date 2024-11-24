import React from 'react'
import MaxWidthWrapper from './layout/MaxWidthWrapper'
import Image from 'next/image';
import Link from 'next/link';
import {categoryData} from '@/data/categoryData';
const Category: React.FC = () => {
  return (
    <section className="py-5 md:py-10">

    <MaxWidthWrapper>

        <div>
        <h1 className="text-lg  md:text-2xl text-center  sm:text-start font-semibold text-black capitalize">All Products Category</h1>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3'>
            {categoryData.map((category)=>(
                  <div key={category.id} className="p-4 shadow-md border rounded-md transition-all duration-500 hover:scale-[101%] mt-5">
                            <Image src={category.img} alt='img' width={250} height={200} className="rounded w-full h-[150px] object-cover" />
                            <h3 className="text-base pt-3 font-semibold text-balck text-start">{category.title}</h3>

                            <div className="mt-2">
                            <Link href={category.href} className='bg-black hover:bg-[#232323] text-white px-4 py-2 rouned-md text-sm font-semibold rounded-md '>Shop Now</Link>
                            </div>

                  </div>
            ))}
      
          

        </div>

        </div>
    </MaxWidthWrapper>
    </section>
  )
}

export default Category