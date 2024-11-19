import deal1 from '/public/deal/deal1.png';
import deal2 from '/public/deal/deal2.png';
import deal3 from '/public/deal/deal3.png';
import deal4 from '/public/deal/deal4.png';
import deal5 from '/public/deal/deal5.png';
import deal6 from '/public/deal/deal6.png';


type CardData = {
    id:number;
    slug:string;
    image:string;
    title:string;
    name:string;
    price:number;
    oldPrice:string;
    des:string;
    moreImg:string [];
} 
export function createSlug(title: string): string {
    return title
      .toLowerCase()                        
      .trim()                              
      .replace(/[\s\W-]+/g, '-')            
      .replace(/^-+|-+$/g, '');          
  }

export const cardData : CardData [] =[
    {
        id:101,
        slug:createSlug('North Valley Spruce'),
        image:deal1.src,
        title:"Deal of the Day",
        name:"North Valley Spruce",
        price:250,
        des:"Lorem Ipsum is simply dummy text of the Lorem Ipsum has...",
        oldPrice:"$280",
        moreImg:[deal1.src, deal2.src, deal6.src, deal4.src],
    },
    {
        id:102,
        slug:createSlug('North Valley Spruce2'),
        image:deal6.src,
        title:"Deal of the Day",
        name:"North Valley Spruce",
         price:250,
         des:"Lorem Ipsum is simply dummy text of the Lorem Ipsum has...",
        oldPrice:"$280",
        moreImg:[deal1.src, deal2.src, deal6.src, deal4.src],
    },  {
        id:103,
        slug:createSlug('North Valley Spruce3'),
        image:deal2.src,
        title:"Deal of the Day",
        name:"North Valley Spruce",
         price:250,
         des:"Lorem Ipsum is simply dummy text of the Lorem Ipsum has...",
        oldPrice:"$280",
        moreImg:[deal1.src, deal2.src, deal6.src, deal4.src],
    },  {
        id:104,
        slug:createSlug('North Valley Spruce4'),
        image:deal3.src,
        title:"Deal of the Day",
        name:"North Valley Spruce",
         price:250,
         des:"Lorem Ipsum is simply dummy text of the Lorem Ipsum has...",
        oldPrice:"$280",
        moreImg:[deal1.src, deal2.src, deal6.src, deal4.src],
    },  {
        id:105,
        slug:createSlug('North Valley Spruce5'),
        image:deal4.src,
        title:"Deal of the Day",
        name:"North Valley Spruce",
         price:250,
         des:"Lorem Ipsum is simply dummy text of the Lorem Ipsum has...",
        oldPrice:"$280",
        moreImg:[deal1.src, deal2.src, deal6.src, deal4.src],
    },  {
        id:106,
        slug:createSlug('North Valley Spruce 6'),
        image:deal5.src,
        title:"Deal of the Day",
        name:"North Valley Spruce",
         price:250,
         des:"Lorem Ipsum is simply dummy text of the Lorem Ipsum has...",
        oldPrice:"$280",
        moreImg:[deal1.src, deal2.src, deal6.src, deal4.src],
    },  {
        id:107,
        slug:createSlug('North Valley Spruce 7'),
        image:deal6.src,
        title:"Deal of the Day",
        name:"North Valley Spruce",
         price:250,
         des:"Lorem Ipsum is simply dummy text of the Lorem Ipsum has...",
        oldPrice:"$280",
        moreImg:[deal1.src, deal2.src, deal6.src, deal4.src],
    },  {
        id:108,
        slug:createSlug('North Valley Spruce 8'),
        image:deal3.src,
        title:"Deal of the Day",
        name:"North Valley Spruce",
         price:250,
         des:"Lorem Ipsum is simply dummy text of the Lorem Ipsum has...",
        oldPrice:"$280",
        moreImg:[deal1.src, deal2.src, deal6.src, deal4.src],
    },  {
        id:109,
        slug:createSlug('North Valley Spruce 9'),
        image:deal2.src,
        title:"Deal of the Day",
        name:"North Valley Spruce",
         price:250,
         des:"Lorem Ipsum is simply dummy text of the Lorem Ipsum has...",
        oldPrice:"$280",
        moreImg:[deal1.src, deal2.src, deal6.src, deal4.src],
    }, 
     {
        id:200,
        slug:createSlug('North Valley Spruce10'),
        image:deal6.src,
         des:"Lorem Ipsum is simply dummy text of the Lorem Ipsum has...",
        title:"Deal of the Day",
        name:"North Valley Spruce",
         price:250,
        oldPrice:"$280",
        moreImg:[deal1.src, deal2.src, deal6.src, deal4.src],
    },
] 
