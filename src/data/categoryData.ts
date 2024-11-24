import house from '/public/category/living.png';
import office from '/public/category/office.png';
import classic from '/public/category/classic.png';
import compact from '/public/category/compact.png';
import curtains from '/public/category/curtains.png';
import entryway from '/public/category/entryway.png';
import fabric from '/public/category/fabric.png';
import glass from '/public/category/glass.png';
import kids from '/public/category/kids.png';
import leather from '/public/category/leather.png';
import lighting from '/public/category/lighting.png';
import luxury from '/public/category/luxury.png';
import metal from '/public/category/metal.png';
import multi from '/public/category/multi.png';
import outdoor from '/public/category/outdoor.png';
import rattan from '/public/category/rattan.png';
import rugs from '/public/category/rugs.png';
import scandinavian from '/public/category/scandinavian.png';
import tv from '/public/category/tv.png';
import wallArt from '/public/category/wallArt.png';
import wooden from '/public/category/wooden.png';
import modern from '/public/category/modern.png';



type CategoryData = {
    id:number;
    img:string;
    title:string;
    href:string;
}

export const categoryData: CategoryData [] =[
    {
        id:1,
        img:house.src,
        title:"House Furniture",
        href:"/house-furniture",
    },
    {
        id:2,
        img:office.src,
        title:"Office Furniture",
        href:"/office-furniture",
    },
    {
        id:3,
        img:kids.src,
        title:"Kid's Furniture",
        href:"/kids-furniture",
    },
    {
        id:15,
        img:outdoor.src,
        title:"Outdoor Furniture",
        href:"/outdoor-furniture",
    },
    {
        id:4,
        img:entryway.src,
        title:" Entryway Furniture",
        href:"/entryway-furniture",
    },
    {
        id:5,
        img:tv.src,
        title:"TV Units & Media Stands ",
        href:"/tv-units",
    },
    {
        id:6,
        img:modern.src,
        title:"Modern Furniture ",
        href:"/modern-furniture",
    },
    {
        id:7,
        img:classic.src,
        title:"Classic Furniture ",
        href:"/classic-furniture",
    },
    {
        id:8,
        img:scandinavian.src,
        title:" Scandinavian Furniture",
        href:"/scandinavian-furniture",
    },
    {
        id:9,
        img:luxury.src,
        title:"Luxury Furniture",
        href:"/luxury-furniture",
    },
    {
        id:10,
        img:wooden.src,
        title:"Wooden Furniture",
        href:"/wooden-furniture",
    },
    {
        id:11,
        img:metal.src,
        title:"Metal Furniture ",
        href:"/metal-furniture",
    },
    {
        id:12,
        img:glass.src,
        title:"Glass Furniture",
        href:"/glass-furniture",
    },
    {
        id:13,
        img:fabric.src,
        title:"Fabric Furniture",
        href:"/fabric-furniture",
    },
    {
        id:14,
        img:leather.src,
        title:"Leather Furniture",
        href:"/leather-furniture",
    },
    {
        id:16,
        img:rattan.src,
        title:"Rattan & Bamboo Furniture",
        href:"/rattan-bamboo-furniture",
    },
    {
        id:17,
        img:multi.src,
        title:"Multi-Functional Furniture",
        href:"/multi-functional-furniture",
    },  {
        id:18,
        img:compact.src,
        title:"Compact & Space-Saving Furniture",
        href:"/compact-space-saving-furniture",
    },  {
        id:19,
        img:lighting.src,
        title:"Lighting Solutions",
        href:"/lighting-solutions",
    },  {
        id:20,
        img:rugs.src,
        title:"Rugs & Mats",
        href:"/rugs-mats",
    },  {
        id:21,
        img:curtains.src,
        title:"Curtains & Blinds",
        href:"curtains-blinds",
    },  {
        id:22,
        img:wallArt.src,
        title:"Wall Art & Mirrors",
        href:"wall-art-mirrors",
    },


] 