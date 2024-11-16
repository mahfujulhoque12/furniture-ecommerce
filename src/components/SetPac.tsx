import React from 'react';
import MaxWidthWrapper from './layout/MaxWidthWrapper';
import Image from 'next/image';
import set from '/public/set/set.png';
import set2 from '/public/set/set2.png';
import set3 from '/public/set/set3.png';
import set4 from '/public/set/set4.png';
import Link from 'next/link';

interface CardData {
  id: number;
  image: string;
  title: string;
  link: string;
}

const cardData: CardData[] = [
  { id: 1, image: set.src, title: "Cookware sets from $75", link: "Roast-ready picks for every meal." },
  { id: 2, image: set2.src, title: "Dinnerware from $30", link: "Set a seasonal tablescape in your just-right style." },
  { id: 3, image: set3.src, title: "Slow cookers from $35", link: "Comfort food made effortless." },
  { id: 4, image: set4.src, title: "Knife sets from $30", link: "Precision cutting every time." },
];

const SetPac: React.FC = () => {
  return (
    <section className="py-5 lg:py-10">
      <MaxWidthWrapper>
        <h1 className="text-lg text-center  sm:text-start md:text-2xl font-semibold text-black capitalize">
          Combo Pack only for this holiday
        </h1>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 md:grid-cols-2 lg:grid-cols-4">
          {cardData.map((card) => (
          <div
          key={card.id}
          className="cursor-pointer shadow-md p-3 transition-colors duration-150 border hover:bg-gray-100 rounded-md flex flex-col transform hover:scale-100"
          aria-label={`View details of ${card.title}`}
          >
          <Link href="/shop"> 
          <Image
            src={card.image}
            alt={card.title}
            width={400}
            height={300}
            loading="lazy"
            className="h-[300px] w-full object-cover rounded-md"
          />
          <h2 className="mt-3 text-2xl font-semibold">{card.title}</h2>
          <p className="text-sm font-normal mt-3">{card.link}</p>
          </Link>  
        </div>
        
          
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default SetPac;
