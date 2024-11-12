import furniture1 from '/public/furniture/furniture1.jpg';
import furniture2 from '/public/furniture/furniture2.jpg';
import furniture3 from '/public/furniture/furniture3.jpg';
import furniture4 from '/public/furniture/furniture4.jpg';
import furniture5 from '/public/furniture/furniture5.jpg';
import furniture6 from '/public/furniture/furniture6.jpg';
import furniture7 from '/public/furniture/furniture7.jpg';
import furniture8 from '/public/furniture/furniture8.jpg';
import furniture9 from '/public/furniture/furniture9.jpg';
import furniture10 from '/public/furniture/furniture10.jpg';
import furniture11 from '/public/furniture/furniture11.jpg';
import furniture12 from '/public/furniture/furniture12.jpg';
import furniture13 from '/public/furniture/furniture13.jpg';
import furniture14 from '/public/furniture/furniture14.jpg';


type CardData = {
    id:number;
    slug:string;
    imageUrl:string;
    hoverImg:string;
    title:string;
    des:string;
    price :number;
    oldPrice:string;
    category:string;
    moreImg:string [];
  }
  
  const createSlug = (title: string): string =>
    title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
      
 export const cardData : CardData [] =[
    {
      id:1,
      category:"featured",
      slug:createSlug("Speacial Offer for you1"),
      imageUrl:furniture1.src,
      hoverImg:furniture2.src,
      title:"Speacial Offer only for you",
      des:"Lorem ipsum dolor sit amet consectetur adipisicing ...",
      price:260,
      oldPrice:"$320",
      moreImg:[furniture2.src,furniture3.src,furniture4.src,furniture5.src,],
    },
    {
      id:2,
      category:"featured",
     slug: createSlug("Speacial Offer for you2"),
      imageUrl:furniture3.src,
      hoverImg:furniture4.src,
      title:"Speacial Offer for you",
      des:"Lorem ipsum dolor sit amet consectetur adipisicing ...",
      price:250,
      oldPrice:"$320",
      moreImg:[furniture2.src,furniture3.src,furniture4.src,furniture5.src,],

    },
    {
      id:3,
      category:"featured",
     slug: createSlug("Speacial Offer for you3"),
     imageUrl:furniture5.src,
     hoverImg:furniture6.src,
      title:"Speacial Offer for all",
      des:"Lorem ipsum dolor sit amet consectetur adipisicing ...",
      price:20,
      oldPrice:"$320",
      moreImg:[furniture2.src,furniture3.src,furniture4.src,furniture5.src,],

    },
    {
      id:4,
      category:"featured",
     slug: createSlug("Speacial Offer for you4"),
     imageUrl:furniture7.src,
     hoverImg:furniture8.src,
      title:"Speacial Offer for you",
      des:"Lorem ipsum dolor sit amet consectetur adipisicing ...",
      price:260,
      oldPrice:"$320",
      moreImg:[furniture2.src,furniture3.src,furniture4.src,furniture5.src,],

    },
    {
      id:5,
      category:"featured",
     slug: createSlug("Speacial Offer for you5"),
     imageUrl:furniture9.src,
     hoverImg:furniture10.src,
      title:"Speacial Offer for you",
      des:"Lorem ipsum dolor sit amet consectetur adipisicing ...",
      price:260,
      oldPrice:"$320",
      moreImg:[furniture2.src,furniture3.src,furniture4.src,furniture5.src,],

    },
    {
      id:6,
      category:"featured",
     slug: createSlug("Speacial Offer for you6"),
     imageUrl:furniture11.src,
     hoverImg:furniture12.src,
      title:"Speacial Offer for you",
      des:"Lorem ipsum dolor sit amet consectetur adipisicing ...",
      price:260,
      oldPrice:"$320",
      moreImg:[furniture2.src,furniture3.src,furniture4.src,furniture5.src,],

    },
    {
      id:7,
      category:"featured",
     slug: createSlug("Speacial Offer for you7"),
     imageUrl:furniture12.src,
     hoverImg:furniture14.src,
      title:"Speacial Offer for you",
      des:"Lorem ipsum dolor sit amet consectetur adipisicing ...",
      price:260,
      oldPrice:"$300",
      moreImg:[furniture2.src,furniture3.src,furniture4.src,furniture5.src,],

    },
    {
      id:8,
     category:"latest" ,   
    slug: createSlug("Speacial Offer for you8"),
    imageUrl:furniture11.src,
    hoverImg:furniture12.src,
      title:"Speacial Offer for you",
      des:"Lorem ipsum dolor sit amet consectetur adipisicing ...",
      price:260,
      oldPrice:"$300",
      moreImg:[furniture2.src,furniture3.src,furniture4.src,furniture5.src,],

    },
    {
      id:9,
    category:"latest" , 
    slug: createSlug("Speacial Offer for you9"),
    imageUrl:furniture13.src,
    hoverImg:furniture14.src,
      title:"Speacial Offer for you",
       des:"Lorem ipsum dolor sit amet consectetur adipisicing ...",
       price:260,
      oldPrice:"$300",
      moreImg:[furniture2.src,furniture3.src,furniture4.src,furniture5.src,],

    },
    {
      id:10,
      category:"latest",
     slug: createSlug("Speacial Offer for you10"),
     imageUrl:furniture5.src,
     hoverImg:furniture6.src,
      title:"Speacial Offer for you",
       des:"Lorem ipsum dolor sit amet consectetur adipisicing ...",
       price:260,
      oldPrice:"$300",
      moreImg:[furniture2.src,furniture3.src,furniture4.src,furniture5.src,],

    },
    {
      id:11,
      category:"latest",
     slug: createSlug("Speacial Offer for you11"),
     imageUrl:furniture3.src,
      hoverImg:furniture4.src,
      title:"Speacial Offer for you",
       des:"Lorem ipsum dolor sit amet consectetur adipisicing ...",
       price:260,
      oldPrice:"$300",
      moreImg:[furniture2.src,furniture3.src,furniture4.src,furniture5.src,],

    },
    {
      id:12,
      category:"latest",
     slug: createSlug("Speacial Offer for you12"),
     imageUrl:furniture9.src,
     hoverImg:furniture4.src,
      title:"Speacial Offer for you",
       des:"Lorem ipsum dolor sit amet consectetur adipisicing ...",
       price:260,
      oldPrice:"$300",
      moreImg:[furniture2.src,furniture3.src,furniture4.src,furniture5.src,],
    },
    {
      id:13,
      category:"latest",
     slug: createSlug("Speacial Offer for you13"),
     imageUrl:furniture3.src,
      hoverImg:furniture4.src,
      title:"Speacial Offer for you",
       des:"Lorem ipsum dolor sit amet consectetur adipisicing ...",
       price:260,
      oldPrice:"$300",
      moreImg:[furniture2.src,furniture3.src,furniture4.src,furniture5.src,],
    },
    {
      id:14,
      category:"bestseller",
     slug: createSlug("Speacial Offer for you14"),
     imageUrl:furniture8.src,
     hoverImg:furniture1.src,
      title:"Speacial Offer for you",
       des:"Lorem ipsum dolor sit amet consectetur adipisicing ...",
       price:260,
      oldPrice:"$300",
      moreImg:[furniture2.src,furniture3.src,furniture4.src,furniture5.src,],
    },
    {
      id:15,
      category:"bestseller",
     slug: createSlug("Speacial Offer for you15"),
     imageUrl:furniture9.src,
     hoverImg:furniture12.src,
      title:"Speacial Offer for you",
       des:"Lorem ipsum dolor sit amet consectetur adipisicing ...",
       price:260,
      oldPrice:"$300",
      moreImg:[furniture2.src,furniture3.src,furniture4.src,furniture5.src,],
    },{
      id:16,
      category:"bestseller",
     slug: createSlug("Speacial Offer for you16"),
     imageUrl:furniture14.src,
     hoverImg:furniture4.src,
      title:"Speacial Offer for you",
       des:"Lorem ipsum dolor sit amet consectetur adipisicing ...",
       price:260,
      oldPrice:"$300",
      moreImg:[furniture2.src,furniture3.src,furniture4.src,furniture5.src,],

    },{
      id:17,
      category:"bestseller",
     slug: createSlug("Speacial Offer for you17"),
     imageUrl:furniture2.src,
     hoverImg:furniture7.src,
      title:"Speacial Offer for you",
       des:"Lorem ipsum dolor sit amet consectetur adipisicing ...",
       price:260,
      oldPrice:"$300",
      moreImg:[furniture2.src,furniture3.src,furniture4.src,furniture5.src,],

    },{
      id:18,
      category:"bestseller",
     slug: createSlug("Speacial Offer for you18"),
     imageUrl:furniture1.src,
     hoverImg:furniture4.src,
      title:"Speacial Offer for you",
       des:"Lorem ipsum dolor sit amet consectetur adipisicing ...",
       price:260,
      oldPrice:"$300",
      moreImg:[furniture2.src,furniture3.src,furniture4.src,furniture5.src,],

    },{
      id:19,
      category:"bestseller",
     slug: createSlug("Speacial Offer for you19"),
     imageUrl:furniture8.src,
     hoverImg:furniture1.src,
      title:"Speacial Offer for you",
       des:"Lorem ipsum dolor sit amet consectetur adipisicing ...",
       price:260,
      oldPrice:"$300",
      moreImg:[furniture2.src,furniture3.src,furniture4.src,furniture5.src,],

    },
]