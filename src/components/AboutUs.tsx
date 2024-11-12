
import Image from "next/image";
import Link from "next/link";
import MaxWidthWrapper from "@/components/layout/MaxWidthWrapper";
import about from '/public/aboutUS/about.jpg'

const AboutUs = () => {
  return (
    <section className="py-5 md:py-10">
     <MaxWidthWrapper>
      <div>
        <h3 className="text-lg text-center md:text-2xl font-semibold text-black capitalize">About Us</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-5 gap-5">
            <div className="shadow-md  rounded-md ">
              <Image src={about} alt="aboutus" width={1000} height={500} className="max-h-[500px] object-contain"/>
            </div>
            <div>
            <p className="text-base font-medium">  
              At Your Brand Name we are passionate about bringing comfort, style, and functionality to your space. Our journey began with a simple goal: to make high-quality furniture accessible to everyone. From timeless classics to modern designs, our curated collection is crafted to meet the unique needs of every home and office. We believe furniture is more than just decor; it's an expression of who you are. With a commitment to superior materials, sustainable practices, and exceptional customer service, we strive to make your shopping experience as seamless as possible. Join us in transforming your spaces into beautiful, welcoming, and functional environments you’ll love for years to come."
          </p>
          <div className="mt-5">
          <Link href="/shop" className="text-base font-semibold text-white bg-black px-4 py-1 rounded-md">Shop Now</Link>
          </div>
            </div>

        </div>
      </div>
     </MaxWidthWrapper>
    </section>
  );
};

export default AboutUs;
