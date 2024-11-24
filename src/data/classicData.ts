import classic1 from '/public/classic/classic1.png';
import classic2 from '/public/classic/classic3.png';
import classic3 from '/public/classic/classic3.png';
import classic4 from '/public/classic/classic4.png';
import classic5 from '/public/classic/classic5.png';
import classic6 from '/public/classic/classic6.png';
import classic7 from '/public/classic/classic7.png';
import classic8 from '/public/classic/classic8.png';
import classic9 from '/public/classic/classic9.png';
import classic10 from '/public/classic/classic10.png';


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
        id:751,
        slug:createSlug('Speacial classic one'),
        image:classic1.src,
        title:"upto 62% discount",
        name:"Buy furniture for your classic",
        price:280,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$380",
        moreImg:[classic1.src,classic7.src,classic4.src,classic6.src,],
    },
    {
        id:752,
        slug:createSlug('Speacial classic two'),
        image:classic2.src,
        title:"upto 62% discount",
        name:"Buy furniture for your classic",
        price:280,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$380",
        moreImg:[classic1.src,classic7.src,classic4.src,classic6.src,],
    }, 

     {
        id:753,
        slug:createSlug('Speacial classic three'),
        image:classic3.src,
        title:"upto 62% discount",
        name:"Buy furniture for your classic",
        price:280,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$380",
        moreImg:[classic4.src,classic7.src,classic4.src,classic6.src,],
    }, 
     {
        id:754,
        slug:createSlug('Speacial classic four'),
        image:classic5.src,
        title:"upto 62% discount",
        name:"Buy furniture for your classic",
        price:280,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$380",
        moreImg:[classic6.src,classic7.src,classic4.src,classic6.src,],
    },  
    {
        id:755,
        slug:createSlug('Speacial classic five'),
        image:classic7.src,
        title:"upto 62% discount",
        name:"Buy furniture for your classic",
        price:280,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$380",
        moreImg:[classic10.src,classic7.src,classic4.src,classic6.src,],
    }, 
     {
        id:756,
        slug:createSlug('Speacial classic six'),
        image:classic4.src,
        title:"upto 62% discount",
        name:"Buy furniture for your classic",
        price:280,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$380",
        moreImg:[classic1.src,classic7.src,classic4.src,classic6.src,],
    },  
    {
        id:757,
        slug:createSlug('Speacial classic seven'),
        image:classic8.src,
        title:"upto 62% discount",
        name:"Buy furniture for your classic",
        price:280,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$380",
        moreImg:[classic1.src,classic7.src,classic4.src,classic6.src,],
    },  
    {
        id:758,
        slug:createSlug('Speacial classic eight'),
        image:classic9.src,
        title:"upto 62% discount",
        name:"Buy furniture for your classic",
        price:280,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$380",
        moreImg:[classic1.src,classic7.src,classic4.src,classic6.src,],
    }, 
     {
        id:759,
        slug:createSlug('Speacial classic nine'),
        image:classic10.src,
        title:"upto 62% discount",
        name:"Buy furniture for your classic",
        price:280,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$380",
        moreImg:[classic1.src,classic7.src,classic4.src,classic6.src,],
    }, 
     {
        id:760,
        slug:createSlug('Speacial classic ten'),
        image:classic6.src,
        title:"upto 62% discount",
        name:"Buy furniture for your classic",
        price:280,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$380",
        moreImg:[classic1.src,classic7.src,classic4.src,classic6.src,],
    },
]