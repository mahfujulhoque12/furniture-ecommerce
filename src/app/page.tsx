import Banner from "@/components/Banner";
import Bathroom from "@/components/Bathroom";
import Deals from "@/components/Deals";
import DiscountProducts from "@/components/DiscountProducts";
import Gallary from "@/components/Gallary";
import HeroSlider from "@/components/HeroSlider";
import MagicHoliday from "@/components/MagicHoliday";
import Speacial from "@/components/Speacial";
import SpeacialProducts from "@/components/SpeacialProducts";
import SetPac from "@/components/SetPac";
import FaqAccordion from "@/components/faq/FaqAccordion";
import Blog from '@/components/Blog'






export default function Home() {
  return (
    <div>
      <HeroSlider/>
      <DiscountProducts/>
      <Speacial/>
      <Gallary/>
      <SpeacialProducts/>
      <Banner/>
      <Bathroom/>
      <MagicHoliday/>
      <Deals/>
      <SetPac/>
      <Blog/>
      <FaqAccordion/>
    </div>
  );
}
