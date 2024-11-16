import React from 'react'
import MaxWidthWrapper from './layout/MaxWidthWrapper'
import Image from 'next/image'

import magic3 from '/public/magic/holiday3.png';
import magic1 from '/public/magic/holiday1.png';
import magic2 from '/public/magic/holiday2.png';
import magic4 from '/public/magic/holiday4.png';
import Link from 'next/link';


type CardData = {
    id:number;
    image:string;
    title:string;
    link:string;
}

const cardData : CardData[] =[
    {
        id:1,
        image:magic3.src,
        title:"Speacial Offer from $60",
        link:"size for every speace"
    },
    {
        id:2,
        image:magic1.src,
        title:"Speacial Offer from $50",
        link:"size for every speace"
    },  {
        id:3,
        image:magic2.src,
        title:"Speacial Offer from $80",
        link:"size for every speace"
    },  {
        id:4,
        image:magic4.src,
        title:"Speacial Offer from $90",
        link:"size for every speace"
    },
    
]

const MagicHoliday = () => {
  return (
    <section className='py-5 lg:py-10'>
    <MaxWidthWrapper>
 
                <h1 className="text-lg text-center  sm:text-start md:text-2xl font-semibold text-black capitalize">holiday magic made affordable</h1>

    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {cardData.map((card)=>(
                 <div className=" relative" key={card.id}>
                  <Link href="/shop">
                 <div className="transition transform duration-500 shadow-md hover:scale-[101%]">
                   <Image src={card.image} alt="img" width={400} height={600} className="h-[400px] w-full object-cover rounded-md" />
                   <div className="absolute top-[20%] left-[5%]">
                     <h2 className="text-2xl text-black font-semibold  drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">{card.title}</h2>
                     <button className="text-red-800 text-lg underline font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">{card.link}</button>
                   </div>
                 </div>
                 </Link>
               </div>
               
        ))}
       
      
    </div>
    </MaxWidthWrapper>
    </section>
  )
}

export default MagicHoliday