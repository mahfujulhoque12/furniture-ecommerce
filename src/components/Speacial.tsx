"use client";

import MaxWidthWrapper from "@/components/layout/MaxWidthWrapper";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";
import { cardData } from "@/data/speacialOffer";
import { useRouter } from "next/navigation";

const Special = () => {
    const router = useRouter();

    const handleDetails = (slug: string) => {
        try {
            router.push(`speacialOffer/${slug}`);
        } catch (error) {
            console.error("Failed to navigate:", error);
        }
    };

    return (
        <section className="py-5 md:py-10">
            <MaxWidthWrapper>
                <div className="flex flex-col md:flex-row justify-between">
                    <h1 className="text-lg md:text-2xl font-semibold text-black capitalize">
                        Special offer up to 70% discount
                    </h1>
                    <div className="flex justify-end md:justify-start">
                        <button type="button" className="text-base font-normal hover:text-red-600" aria-label="View all offers">
                            View All
                        </button>
                    </div>
                </div>
                <Carousel>
                    <CarouselContent>
                        {cardData?.map((card) => (
                            <CarouselItem className="basis-1/2 md:basis-1/3 lg:basis-1/5 mt-8" key={card.id}>
                                <div
                                    onClick={() => handleDetails(card.slug)}
                                    className="cursor-pointer p-3 rounded-lg border shadow-md h-full flex flex-col justify-between"
                                    aria-label={`View details of ${card.title}`}
                                >
                                    <div className="transition-all duration-300 hover:scale-[101%]">
                                        <Image
                                            src={card.image}
                                            alt={card.title}
                                            width={400}
                                            height={300}
                                            className="rounded-md w-full h-[200px] object-cover"
                                            loading="lazy"
                                        />
                                        <h3 className="mt-[-30px] z-10 relative bg-black text-white px-3 py-1 w-full text-center rounded-md">
                                            {card.title}
                                        </h3>
                                        <h4 className="text-lg font-semibold text-start py-1">{card.name}</h4>
                                        <p className="text-sm text-start font-normal mb-1">{card.des}</p>
                                        <p className="text-base font-bold text-start flex gap-2">
                                            {card.price} <del className="text-gray-400">{card.oldPrice}</del>
                                        </p>
                                        <button className="bg-black px-3 mt-1 py-1 rounded-md text-base font-medium text-white"> Add to cart</button>
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
    );
};

export default Special;
