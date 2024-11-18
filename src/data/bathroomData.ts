import bath from '/public/bath/bath.png';
import bath2 from '/public/bath/bath1.png';
import bath3 from '/public/bath/bath3.png';
import bath4 from '/public/bath/bath4.png';
import bath5 from '/public/bath/bath5.png';
import bath6 from '/public/bath/bath6.png';
import bath7 from '/public/bath/bath7.png';
import bath8 from '/public/bath/bath8.png';


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
        id:1,
        slug:createSlug('North Valley Spruce ggggg'),
        image:bath8.src,
        title:"upto 35% discount",
        name:"North Valley Spruce",
        price:250,
        des:"Lorem Ipsum is simply  text of the  and typesetting industry...",
        oldPrice:"$280",
        moreImg:[bath.src,bath8.src, bath6.src, bath3.src],
    },
    {
        id:2,
        slug:createSlug('North Valley Spruce2'),
        image:bath6.src,
        title:"upto 35% discount",
        name:"North Valley Spruce",
          price:250,
        des:"Lorem Ipsum is simply  text of the  and typesetting industry...",
        oldPrice:"$280",
        moreImg:[bath.src,bath8.src, bath6.src, bath3.src],

    },  {
        id:3,
        slug:createSlug('North Valley Spruce3'),
        image:bath2.src,
        title:"upto 35% discount",
        name:"North Valley Spruce",
          price:250,
        des:"Lorem Ipsum is simply  text of the  and typesetting industry...",
        oldPrice:"$280",
        moreImg:[bath.src,bath8.src, bath6.src, bath3.src],
    },  {
        id:4,
        slug:createSlug('North Valley Spruce4'),
        image:bath3.src,
        title:"upto 35% discount",
        name:"North Valley Spruce",
          price:250,
        des:"Lorem Ipsum is simply  text of the  and typesetting industry...",
        oldPrice:"$280",
        moreImg:[bath.src,bath8.src, bath6.src, bath3.src],
    },  {
        id:5,
        slug:createSlug('North Valley Spruce5'),
        image:bath4.src,
        title:"upto 35% discount",
        name:"North Valley Spruce",
          price:250,
        des:"Lorem Ipsum is simply  text of the  and typesetting industry...",
        oldPrice:"$280",
        moreImg:[bath.src,bath8.src, bath6.src, bath3.src],
    },  {
        id:6,
        slug:createSlug('North Valley Spruce 6'),
        image:bath5.src,
        title:"upto 35% discount",
        name:"North Valley Spruce",
          price:250,
        des:"Lorem Ipsum is simply  text of the  and typesetting industry...",
        oldPrice:"$280",
        moreImg:[bath.src,bath8.src, bath6.src, bath3.src],
    },  {
        id:7,
        slug:createSlug('North Valley Spruce 7'),
        image:bath6.src,
        title:"upto 35% discount",
        name:"North Valley Spruce",
          price:250,
        des:"Lorem Ipsum is simply  text of the  and typesetting industry...",
        oldPrice:"$280",
        moreImg:[bath.src,bath8.src, bath6.src, bath3.src],
    },  {
        id:8,
        slug:createSlug('North Valley Spruce 8'),
        image:bath7.src,
        title:"upto 35% discount",
        name:"North Valley Spruce",
          price:250,
        des:"Lorem Ipsum is simply  text of the  and typesetting industry...",
        oldPrice:"$280",
        moreImg:[bath.src,bath8.src, bath6.src, bath3.src],
    },  {
        id:9,
        slug:createSlug('North Valley Spruce 9'),
        image:bath.src,
        title:"upto 35% discount",
        name:"North Valley Spruce",
          price:250,
        des:"Lorem Ipsum is simply  text of the  and typesetting industry...",
        oldPrice:"$280",
        moreImg:[bath.src,bath8.src, bath6.src, bath3.src],
    }, 
     {
        id:10,
        slug:createSlug('North Valley Spruce10'),
        image:bath8.src,
        des:"Lorem Ipsum is simply  text of the  and typesetting industry...",
        title:"upto 35% discount",
        name:"North Valley Spruce",
          price:250,
        oldPrice:"$280",
        moreImg:[bath.src,bath8.src, bath6.src, bath3.src],
    },
] 
