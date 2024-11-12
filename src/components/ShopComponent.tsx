"use client";
import React, { useState } from "react";
import MaxWidthWrapper from "./layout/MaxWidthWrapper";
import { cardData } from "@/data/shopData";
import Image from "next/image";
import { FaCartShopping } from "react-icons/fa6";
import Link from "next/link";
import { BsListColumnsReverse } from "react-icons/bs";
import { FaColumns } from "react-icons/fa";
import { useRouter } from "next/navigation";

const ShopComponent = () => {
  const [data, setData] = useState(cardData);
  const [active, setActive] = useState<string>("all");
  const [checkbox, setCheckbox] = useState<string | null>(null);
  const [maxPrice, setMaxPrice] = useState<number>(320);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [isColumnLayout, setIsColumnLayout] = useState(false);

  const router = useRouter();

  const handleDetails= (slug: string) =>{
      router.push(`/shop/${slug}`)
  }




// Filter items by category
const filterData = (category: string, maxPrice: number = 320, color: string | null = null) => {
  let filteredData = cardData;

  // Filter by category
  if (category !== "all") {
    filteredData = filteredData.filter((card) => card.category === category);
  }

  // Filter by price
  filteredData = filteredData.filter((card) => {
    const price = parseFloat(card.price.replace('$', ''));
    return price <= maxPrice;
  });

  // Filter by color
  if (color) {
    filteredData = filteredData.filter((card) => card.color?.toLowerCase() === color.toLowerCase());
  }

  setData(filteredData);
};

// Handle category button click
const handleButtonClick = (category: string) => {
  // Reset other filters when category changes
  setActive(category);
  setCheckbox(null); // Reset checkbox
  setSelectedColor(null); // Reset color
  setMaxPrice(320); // Reset price filter
  filterData(category); // Filter by category
};

// Handle checkbox filter
const handleCheckboxClick = (category: string) => {
  // Reset other filters when checkbox changes
  setCheckbox(category);
  setActive("all"); // Reset category radio button
  setSelectedColor(null); // Reset color
  setMaxPrice(320); // Reset price filter
  filterData(category); // Filter by checkbox category
};

// Handle color button click
const handleColorClick = (color: string) => {
  // Reset other filters when color changes
  setSelectedColor(color);
  setActive("all"); // Reset category radio button
  setCheckbox(null); // Reset checkbox
  setMaxPrice(320); // Reset price filter
  filterData(active, maxPrice, color); // Filter by color
};

// Handle price range change
const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  const value = parseInt(event.target.value, 10);
  setMaxPrice(value);
  filterData(active, value, selectedColor); // Filter by price
};


  return (
    <section className="py-5 md:py-10">
      <MaxWidthWrapper>
        <div className="flex gap-4">
          <div className="basis-[35%]">
            <h2 className="text-lg font-medium text-black border-b">
              Category products
            </h2>
            {/* radio start */}
            <div>
              <h4 className="text-base font-semibold py-2">Find your products</h4>
              <div>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="category"
                    value="all"
                    onChange={() => handleButtonClick("all")}
                    checked={active === "all"}
                    className="w-5 h-5 text-black border-gray-300 rounded-full transition duration-200"
                  />
                  <span className="text-base font-medium text-gray-700">All</span>
                </label>
              </div>
              <div>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="category"
                    value="bestseller"
                    onChange={() => handleButtonClick("bestseller")}
                    checked={active === "bestseller"}
                    className="w-5 h-5 text-black border-gray-300 rounded-full transition duration-200"
                  />
                  <span className="text-base font-medium text-gray-700">Bestseller</span>
                </label>
              </div>
              <div>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="category"
                    value="featured"
                    onChange={() => handleButtonClick("featured")}
                    checked={active === "featured"}
                    className="w-5 h-5 text-black border-gray-300 rounded-full transition duration-200"
                  />
                  <span className="text-base font-medium text-gray-700">Featured</span>
                </label>
              </div>
              <div>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="category"
                    value="latest"
                    onChange={() => handleButtonClick("latest")}
                    checked={active === "latest"}
                    className="w-5 h-5 text-black border-gray-300 rounded-full transition duration-200"
                  />
                  <span className="text-base font-medium text-gray-700">Latest</span>
                </label>
              </div>
            </div>
          {/* radio end */}

            {/* Checkbox button start*/}
            <div>
              <h4 className="text-base font-semibold py-2 mt-4">Choose your products</h4>
              <div className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="category"
                  value="bestseller"
                  checked={checkbox === 'bestseller'}
                  onChange={() => handleCheckboxClick('bestseller')}
                  className="w-5 h-5 text-black border-gray-300 rounded-sm checked:bg-black checked:border-black transition duration-200"
                />
                <span className={`text-base font-medium ${checkbox === 'bestseller' ? 'text-black' : 'text-gray-700'} transition duration-200`}>
                  Bestseller
                </span>
              </div>
              <div className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="category"
                  value="latest"
                  checked={checkbox === 'latest'}
                  onChange={() => handleCheckboxClick('latest')}
                  className="w-5 h-5 text-black border-gray-300 rounded-sm checked:bg-black checked:border-black transition duration-200"
                />
                <span className={`text-base font-medium ${checkbox === 'latest' ? 'text-black' : 'text-gray-700'} transition duration-200`}>
                  Latest
                </span>
              </div>
              <div className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="category"
                  value="featured"
                  checked={checkbox === 'featured'}
                  onChange={() => handleCheckboxClick('featured')}
                  className="w-5 h-5 text-black border-gray-300 rounded-sm checked:bg-black checked:border-black transition duration-200"
                />
                <span className={`text-base font-medium ${checkbox === 'featured' ? 'text-black' : 'text-gray-700'} transition duration-200`}>
                  Featured
                </span>
              </div>
            </div>
           {/* Checkbox button end*/}

        {/* color button start */}
        <div>
        
          <div>
              <h3 className="text-base font-semibold py-2 mt-4">Find your products by color</h3>
              <div className="flex gap-2">
                <button
                  className={`h-8 rounded-full w-8 ${selectedColor === 'red' ? 'border-2 border-black' : ''} bg-red-600`}
                  onClick={() => handleColorClick('red')}
                ></button>
                <button
                  className={`h-8 rounded-full w-8 ${selectedColor === 'green' ? 'border-2 border-black' : ''} bg-green-600`}
                  onClick={() => handleColorClick('green')}
                ></button>
                <button
                  className={`h-8 rounded-full w-8 ${selectedColor === 'yellow' ? 'border-2 border-black' : ''} bg-yellow-600`}
                  onClick={() => handleColorClick('yellow')}
                ></button>
                <button
                  className={`h-8 rounded-full w-8 ${selectedColor === 'sky' ? 'border-2 border-black' : ''} bg-sky-600`}
                  onClick={() => handleColorClick('sky')}
                ></button>
              </div>
            </div>

        </div>
        {/* color button end */}

            {/* Price range start*/}
            <div>
              <h4 className="text-base font-semibold py-2 mt-4">Choose products depending on price</h4>
              <div className="flex flex-col space-y-2">
                <label className="text-base font-medium text-gray-700">Up to ${maxPrice}</label>
                <input
                  type="range"
                  min="0"
                  max="320"
                  step="10"
                  value={maxPrice}
                  onChange={handlePriceChange}
                  className="w-[60%] h-2 bg-gray-200 rounded-full appearance-none cursor-pointer focus:outline-none"
                />
                <div className="flex w-[60%] justify-between text-sm text-gray-500">
                  <span>$0</span>
                  <span>$320</span>
                </div>
              </div>
            </div>
          {/* Price range end*/}
          </div>

          <div className="basis-[65%]">
  <div className="flex justify-between mb-5">
    <div className="flex gap-2">
      <button
        className={`rounded-sm p-2 w-10 h-10 ${
          isColumnLayout
            ? ' bg-black text-white'
            : 'bg-white border border-black text-black'
        }`}
        onClick={() => setIsColumnLayout(true)}
      >
        <BsListColumnsReverse
          className={`w-6 h-6 ${isColumnLayout ? 'text-white' : 'text-black'}`}
        />
      </button>

      <button
        className={`rounded-sm p-2 w-10 h-10 ${
          !isColumnLayout
            ? ' bg-black text-white'
            : 'bg-white border border-black text-black'
        }`}
        onClick={() => setIsColumnLayout(false)}
      >
        <FaColumns
          className={`w-6 h-6 ${!isColumnLayout ? 'text-white' : 'text-black'}`}
        />
      </button>
    </div>

    <div>
      <input
        type="text"
        placeholder="Find Your Product.."
        className="outline-none border rounded-md placeholder:text-black px-3 py-1"
      />
    </div>
  </div>

  {/* Scrollable product grid */}
  <div className="max-h-[500px] overflow-y-scroll scrollbar-hide">
    <div
      className={`grid gap-3 ${
        isColumnLayout ? 'grid-cols-2' : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
      }`}
    >
      {data.map((card) => (
        <div key={card.id} className="h-full">
          <div className="cursor-pointer h-full" onClick={() => handleDetails(card.slug)}>
            <div className="p-3 items-start h-full rounded-lg border shadow-sm">
              <div className="transition-all duration-300 hover:scale-[101%] h-full">
                <Image
                  src={card.imageUrl}
                  alt="img"
                  width={400}
                  height={300}
                  className="rounded-md w-full h-[200px] object-cover"
                />
                <h3 className="mt-[-30px] z-10 relative bg-black text-white px-3 py-1 w-full rounded-md">
                  {card.title}
                </h3>
                <h4 className="text-lg font-semibold text-start py-1">{card.title}</h4>
                <p className="text-sm text-start font-normal mb-1">{card.des.slice(0,58)}...</p>
                <p className="text-base font-bold text-start flex gap-2">
                  {card.price} <del className="text-gray-400">{card.oldPrice}</del>
                </p>
                <div className="flex justify-start py-1">
                  <Link
                    href=""
                    className="flex items-center gap-2 text-sm font-bold bg-black text-white px-3 py-1 rounded-md"
                  >
                    <FaCartShopping /> Add To Cart
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default ShopComponent;
