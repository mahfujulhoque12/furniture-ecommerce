"use client";
import React, { useState,useEffect } from "react";
import MaxWidthWrapper from "@/components/layout/MaxWidthWrapper";
import { cardData } from "@/data/blogData";
import Image from "next/image";
import { useRouter } from "next/navigation";


const ITEMS_PER_PAGE = 4;

const AllBlog = () => {

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [date, setDate] = useState<string | null>(null);

  useEffect(() => {
    const formattedDate = new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
    setDate(formattedDate);
  }, []);

  const router = useRouter();

  useEffect(() => {
    const total = Math.ceil(cardData.length / ITEMS_PER_PAGE);
    setTotalPages(total);
  }, []);

  const handleDetails = (slug: string) => {
    router.push(`blog/${slug}`);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleNext = () =>{
    if (currentPage < totalPages ) setCurrentPage((prev)=> prev + 1)
  }
const handlePrev = () => {
  if(currentPage > 1) setCurrentPage((prev)=> prev - 1)
}
 
  // Slice data for current page
  const currentData = cardData.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <section className="py-5 md:py-10">
      <MaxWidthWrapper>
        <h2 className="text-black text-center font-semibold text-lg uppercase">
          Our Blog
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
          {currentData.map((card) => (
            <div
              key={card.id}
              className="overflow-hidden group border rounded-md shadow-md"
            >
              <Image
                src={card.image}
                alt="img"
                width={1200}
                height={700}
                className="transition-transform duration-500 group-hover:scale-105"
              />
              <div className="p-3">
                <p className="text-sm font-medium text-gray-500">{date}</p>
                <h2 className="mt-2 text-lg font-semibold text-black">
                  {card.title}
                </h2>
                <p className="text-sm font-medium text-gray-600">
                  {card.des.slice(0, 100)}...
                </p>
                <div className="flex justify-start items-center mt-3">
                  <button
                    onClick={() => handleDetails(card.slug)}
                    className="bg-black hover:bg-[#232323] text-white font-semibold text-sm px-4 py-2 rounded-md"
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-8 items-center space-x-2">
          {/* Previous Button */}
          <button
            onClick={handlePrev}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded-md ${
              currentPage === 1
                ? " text-gray-500 cursor-not-allowed"
                : "text-black  transition-all duration-300 hover:text-red-800"
            }`}
          >
            Prev
          </button>

          {/* Page Numbers */}
          {Array.from({ length: totalPages }).map((_, index) => {
            const pageNumber = index + 1;
            return (
              <button
                key={pageNumber}
                onClick={() => handlePageChange(pageNumber)}
                className={`px-3 py-1 rounded-md ${
                  pageNumber === currentPage
                    ? "bg-black text-white"
                    : "bg-gray-200 text-black transiton-all hover:bg-gray-300"
                }`}
              >
                {pageNumber}
              </button>
            );
          })}

          {/* Next Button */}
          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded-md ${
              currentPage === totalPages
                ? " text-gray-500 cursor-not-allowed"
                : " text-black  transition-all duration-300 hover:text-red-800"
            }`}
          >
            Next
          </button>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default AllBlog;
