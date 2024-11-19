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
    discount:string;
    moreImg:string [];
  }
  
  const createSlug = (title: string): string =>
    title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

 export const cardData : CardData [] =[
    {
      id:331,
      slug:createSlug("Speacial Offer for you1"),
      imageUrl:furniture14.src,
      hoverImg:furniture13.src,
      title:"Speacial Offer for you bad",
      des:"Lorem ipsum dolor sit amet consectetur adipisicing ...",
      price:260,
      discount:"-20%",
      moreImg:[furniture13.src,furniture11.src,furniture10.src,furniture8.src],
    },
    {
      id:332,
     slug: createSlug("Speacial Offer for you2"),
      imageUrl:furniture1.src,
      hoverImg:furniture2.src,
      title:"Speacial Offer for you ",
      des:"Lorem ipsum dolor sit amet consectetur adipisicing ...",
      price:260,
      discount:"-20%",
      moreImg:[furniture13.src,furniture11.src,furniture10.src,furniture8.src],
    },
    {
      id:333,
     slug: createSlug("Speacial Offer for you3"),
     imageUrl:furniture8.src,
     hoverImg:furniture14.src,
      title:"Speacial Offer for you",
      des:"Lorem ipsum dolor sit amet consectetur adipisicing ...",
      price:260,
      discount:"-20%",
      moreImg:[furniture13.src,furniture11.src,furniture10.src,furniture8.src],
    },
    {
      id:334,
     slug: createSlug("Speacial Offer for you4"),
     imageUrl:furniture8.src,
     hoverImg:furniture7.src,
      title:"Speacial Offer for you",
      des:"Lorem ipsum dolor sit amet consectetur adipisicing ...",
      price:260,
      discount:"-20%",
      moreImg:[furniture13.src,furniture11.src,furniture10.src,furniture8.src],
    },
    {
      id:335,
     slug: createSlug("Speacial Offer for you5"),
     imageUrl:furniture1.src,
     hoverImg:furniture2.src,
      title:"Speacial Offer for you",
      des:"Lorem ipsum dolor sit amet consectetur adipisicing ...",
      price:260,
      discount:"-20%",
      moreImg:[furniture13.src,furniture11.src,furniture10.src,furniture8.src],
    },
    {
      id:336,
     slug: createSlug("Speacial Offer for you6"),
     imageUrl:furniture11.src,
     hoverImg:furniture12.src,
      title:"Speacial Offer for you",
      des:"Lorem ipsum dolor sit amet consectetur adipisicing ...",
      price:260,
      discount:"-20%",
      moreImg:[furniture13.src,furniture11.src,furniture10.src,furniture8.src],
    },
    {
      id:337,
     slug: createSlug("Speacial Offer for you7"),
     imageUrl:furniture12.src,
     hoverImg:furniture14.src,
      title:"Speacial Offer for you",
      des:"Lorem ipsum dolor sit amet consectetur adipisicing ...",
      price:260,
      discount:"-20%",
      moreImg:[furniture13.src,furniture11.src,furniture10.src,furniture8.src],
    },
    {
      id:338,  
    slug: createSlug("Speacial Offer for you8"),
    imageUrl:furniture11.src,
    hoverImg:furniture12.src,
      title:"Speacial Offer for you",
      des:"Lorem ipsum dolor sit amet consectetur adipisicing ...",
      price:260,
      discount:"-20%",
      moreImg:[furniture13.src,furniture11.src,furniture10.src,furniture8.src],
    },
    {
      id:339,
    slug: createSlug("Speacial Offer for you9"),
    imageUrl:furniture13.src,
    hoverImg:furniture14.src,
      title:"Speacial Offer for you",
      des:"Lorem ipsum dolor sit amet consectetur adipisicing ...",
      price:260,
      discount:"-20%",
      moreImg:[furniture13.src,furniture11.src,furniture10.src,furniture8.src],
    },
    {
      id:340,    slug: createSlug("Speacial Offer for you10"),
     imageUrl:furniture5.src,
     hoverImg:furniture6.src,
      title:"Speacial Offer for you",
      des:"Lorem ipsum dolor sit amet consectetur adipisicing ...",
      price:260,
      discount:"-20%",
      moreImg:[furniture13.src,furniture11.src,furniture10.src,furniture8.src],
    },
    {
      id:341,    slug: createSlug("Speacial Offer for you11"),
     imageUrl:furniture3.src,
      hoverImg:furniture4.src,
      title:"Speacial Offer for you",
      des:"Lorem ipsum dolor sit amet consectetur adipisicing ...",
      price:260,
      discount:"-20%",
      moreImg:[furniture13.src,furniture11.src,furniture10.src,furniture8.src],
    },
    {
      id:342,    slug: createSlug("Speacial Offer for you12"),
     imageUrl:furniture9.src,
     hoverImg:furniture4.src,
      title:"Speacial Offer for you",
      des:"Lorem ipsum dolor sit amet consectetur adipisicing ...",
      price:260,
      discount:"-20%",
      moreImg:[furniture13.src,furniture11.src,furniture10.src,furniture8.src],
    },
    {
      id:343,    slug: createSlug("Speacial Offer for you13"),
     imageUrl:furniture3.src,
      hoverImg:furniture4.src,
      title:"Speacial Offer for you",
      des:"Lorem ipsum dolor sit amet consectetur adipisicing ...",
      price:260,
      discount:"-20%",
      moreImg:[furniture13.src,furniture11.src,furniture10.src,furniture8.src],
    },
    {
      id:344,
     slug: createSlug("Speacial Offer for you14"),
     imageUrl:furniture8.src,
     hoverImg:furniture1.src,
      title:"Speacial Offer for you",
      des:"Lorem ipsum dolor sit amet consectetur adipisicing ...",
      price:260,
      discount:"-20%",
      moreImg:[furniture13.src,furniture11.src,furniture10.src,furniture8.src],
    },
    {
      id:345,
     slug: createSlug("Speacial Offer for you15"),
     imageUrl:furniture9.src,
     hoverImg:furniture12.src,
      title:"Speacial Offer for you",
      des:"Lorem ipsum dolor sit amet consectetur adipisicing ...",
      price:260,
      discount:"-20%",
      moreImg:[furniture13.src,furniture11.src,furniture10.src,furniture8.src],
    },{
      id:346,
     slug: createSlug("Speacial Offer for you16"),
     imageUrl:furniture14.src,
     hoverImg:furniture4.src,
      title:"Speacial Offer for you",
      des:"Lorem ipsum dolor sit amet consectetur adipisicing ...",
      price:260,
      discount:"-20%",
      moreImg:[furniture13.src,furniture11.src,furniture10.src,furniture8.src],
    },{
      id:347,
     slug: createSlug("Speacial Offer for you17"),
     imageUrl:furniture2.src,
     hoverImg:furniture7.src,
      title:"Speacial Offer for you",
      des:"Lorem ipsum dolor sit amet consectetur adipisicing ...",
      price:260,
      discount:"-20%",
      moreImg:[furniture13.src,furniture11.src,furniture10.src,furniture8.src],
    },{
      id:348,
     slug: createSlug("Speacial Offer for you18"),
     imageUrl:furniture1.src,
     hoverImg:furniture4.src,
      title:"Speacial Offer for you",
      des:"Lorem ipsum dolor sit amet consectetur adipisicing ...",
      price:260,
      discount:"-20%",
      moreImg:[furniture13.src,furniture11.src,furniture10.src,furniture8.src],
    },{
      id:349,
     slug: createSlug("Speacial Offer for you19"),
     imageUrl:furniture8.src,
     hoverImg:furniture1.src,
      title:"Speacial Offer for you",
      des:"Lorem ipsum dolor sit amet consectetur adipisicing ...",
      price:260,
      discount:"-20%",
      moreImg:[furniture13.src,furniture11.src,furniture10.src,furniture8.src],
    },
]