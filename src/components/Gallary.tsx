import MaxWidthWrapper from "./layout/MaxWidthWrapper";
import gallary from '/public/gallary/gallary.png';
import gallary2 from '/public/gallary/gallary2.png';
import gallary3 from '/public/gallary/gallary3.png';
import gallary4 from '/public/gallary/gallary4.png';
import Image from 'next/image';

const Gallary = () => {
    return (
        <section className="py-5 md:py-10 bg-[#f9f9f9] ">
            <MaxWidthWrapper>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 h-full">
                    {/* First Item */}
                    <div className="cursor-pointer h-full">
                        <div className="bg-white overflow-hidden relative shadow-md h-full flex flex-col justify-between">
                            <Image src={gallary4} alt="img" width={400} height={300} className="transition-all duration-300 hover:scale-105" />
                            <h4 className="absolute top-10 right-8 text-xl font-medium">Hanging Swing Chair</h4>
                            <p className="absolute top-20 text-gray-500 right-8 text-base font-normal">Special offer 50% Off</p>
                            <button type="button" className="absolute top-32 bg-black rounded-md text-white shadow-sm right-8 text-base font-semibold px-4 py-2 hover:bg-[#232323]">Shop Now</button>
                        </div>
                    </div>

                    {/* Second Column with two items */}
                    <div className="flex flex-col gap-4 h-full">
                        <div className="bg-white shadow-md overflow-hidden relative h-full">
                            <Image src={gallary3} alt="img" width={500} height={300} className="transition-all duration-300 hover:scale-105"/>
                            <div>
                                <h4 className="absolute top-[35%] left-8 text-xl font-medium">Modern Tools</h4>
                                <p className="absolute top-[55%] text-gray-500 left-8 text-base font-normal">7 Items</p>
                            </div>
                        </div>
                        <div className="bg-white shadow-md overflow-hidden relative h-full">
                            <Image src={gallary2} alt="img" width={500} height={300} className="transition-all duration-300 hover:scale-105"/>
                            <div>
                                <h4 className="absolute top-[35%] left-8 text-xl font-medium">Curvy Chairs</h4>
                                <p className="absolute top-[55%] text-gray-500 left-8 text-base font-normal">For Hotel and Businesses</p>
                            </div>
                        </div>
                    </div>

                    {/* Third Item */}
                    <div className="cursor-pointer h-full">
                        <div className="bg-white overflow-hidden relative shadow-md h-full flex flex-col justify-between">
                            <Image src={gallary} alt="img" width={400} height={300} className="transition-all duration-300 hover:scale-105" />
                            <h4 className="absolute top-[60%] right-[20%] text-xl font-medium">Hanging Wood Lamp</h4>
                            <p className="absolute top-[70%] text-gray-500 right-[25%] text-base font-normal">Special offer 50% Off</p>
                            <button type="button" className="absolute top-[80%] bg-black rounded-md text-white shadow-sm right-[35%] text-base font-semibold px-4 py-2 hover:bg-[#232323]">Shop Now</button>
                        </div>
                    </div>
                </div>
            </MaxWidthWrapper>
        </section>
    )
}

export default Gallary;
