import React from 'react'
import MaxWidthWrapper from './layout/MaxWidthWrapper'
import { IoSearch } from "react-icons/io5";

const Search = () => {
  return (
    <section className="overflow-visible">
      <div>
        <MaxWidthWrapper>
          <form action="">
            <div className='pt-1 w-[80%] mx-auto'>
              <div className='flex items-center border shadow-md   h-[60px] left-0 bg-white rounded-md z-50'>
                <IoSearch size={25} className='text-black ms-2' />
                <input 
                  type="text" 
                  placeholder='Find Your Products...' 
                  className='w-full outline-none p-2 placeholder:text-black' 
                />
              </div>
            </div>
          </form>
        </MaxWidthWrapper>
      </div>
    </section>
  )
}

export default Search
