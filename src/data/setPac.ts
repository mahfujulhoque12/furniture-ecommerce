import combo1 from '/public/combo/combo1.png';
import combo2 from '/public/combo/combo2.png';
import combo3 from '/public/combo/combo3.png';
import combo4 from '/public/combo/combo4.png';
import combo5 from '/public/combo/combo5.png';
import combo7 from '/public/combo/combo6.png';
import combo6 from '/public/combo/combo7.png';
import combo8 from '/public/combo/combo8.png';
import combo9 from '/public/combo/combo9.png';


type CardData = {
    id:number;
    slug:string;
    imageUrl:string;
    title:string;
    des:string;
    price :number;
    oldPrice:string;
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
      slug:createSlug("combo Offer for you1 testtttttt"),
      imageUrl:combo9.src,
      title:"Speacial Combo Offer only for you",
      des:"Lorem ipsum dolor sit amet consectetur adipisicing ...",
      price:260,
      oldPrice:"$320",
      moreImg:[combo1.src,combo2.src,combo3.src,combo4.src,],
    },
    {
        id:2,
        slug:createSlug("combo Offer for you2"),
        imageUrl:combo2.src,
        title:"Speacial combo Offer only for you",
        des:"Lorem ipsum dolor sit amet consectetur adipisicing ...",
        price:260,
        oldPrice:"$320",
        moreImg:[combo5.src,combo6.src,combo7.src,combo8.src,],
      },
      {
        id:3,
        slug:createSlug("combo Offer for you3"),
        imageUrl:combo7.src,
        title:"Speacial combo Offer only for you",
        des:"Lorem ipsum dolor sit amet consectetur adipisicing ...",
        price:260,
        oldPrice:"$320",
        moreImg:[combo9.src,combo6.src,combo7.src,combo8.src,],
      },
      {
        id:4,
        slug:createSlug("combo Offer for you4"),
        imageUrl:combo4.src,
        title:"Speacial combo Offer only for you",
        des:"Lorem ipsum dolor sit amet consectetur adipisicing ...",
        price:260,
        oldPrice:"$320",
        moreImg:[combo1.src,combo6.src,combo5.src,combo8.src,],
      },
      {
        id:5,
        slug:createSlug("combo Offer for you5"),
        imageUrl:combo5.src,
        title:"Speacial combo Offer only for you",
        des:"Lorem ipsum dolor sit amet consectetur adipisicing ...",
        price:260,
        oldPrice:"$320",
        moreImg:[combo9.src,combo6.src,combo7.src,combo8.src,],
      },
      {
        id:6,
        slug:createSlug("combo Offer for you6"),
        imageUrl:combo6.src,
        title:"Speacial combo Offer only for you",
        des:"Lorem ipsum dolor sit amet consectetur adipisicing ...",
        price:260,
        oldPrice:"$320",
        moreImg:[combo2.src,combo6.src,combo7.src,combo8.src,],
      },
      {
        id:7,
        slug:createSlug("combo Offer for you7"),
        imageUrl:combo7.src,
        title:"Speacial combo Offer only for you",
        des:"Lorem ipsum dolor sit amet consectetur adipisicing ...",
        price:260,
        oldPrice:"$320",
        moreImg:[combo9.src,combo6.src,combo7.src,combo8.src,],
      },
      {
        id:8,
        slug:createSlug("combo Offer for you8"),
        imageUrl:combo8.src,
        title:"Speacial combo Offer only for you",
        des:"Lorem ipsum dolor sit amet consectetur adipisicing ...",
        price:260,
        oldPrice:"$320",
        moreImg:[combo9.src,combo6.src,combo7.src,combo8.src,],
      },
      {
        id:9,
        slug:createSlug("combo Offer for you9"),
        imageUrl:combo9.src,
        title:"Speacial combo Offer only for you",
        des:"Lorem ipsum dolor sit amet consectetur adipisicing ...",
        price:260,
        oldPrice:"$320",
        moreImg:[combo9.src,combo6.src,combo7.src,combo8.src,],
      },
]