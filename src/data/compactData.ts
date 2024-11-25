import compact1 from '/public/compact/compact1.png';
import compact2 from '/public/compact/compact2.png';
import compact3 from '/public/compact/compact3.png';
import compact4 from '/public/compact/compact4.png';
import compact5 from '/public/compact/compact5.png';
import compact6 from '/public/compact/compact6.png';
import compact7 from '/public/compact/compact7.png';
import compact8 from '/public/compact/compact8.png';
import compact9 from '/public/compact/compact9.png';
import compact10 from '/public/compact/compact10.png';



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
        id:851,
        slug:createSlug('Speacial compact one'),
        image:compact1.src,
        title:"upto 62% discount",
        name:"Buy furniture for your compact",
        price:285,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$385",
        moreImg:[compact1.src,compact7.src,compact4.src,compact6.src,],
    },
    {
        id:852,
        slug:createSlug('Speacial compact two'),
        image:compact2.src,
        title:"upto 62% discount",
        name:"Buy furniture for your compact",
        price:285,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$385",
        moreImg:[compact1.src,compact7.src,compact4.src,compact6.src,],
    }, 

     {
        id:853,
        slug:createSlug('Speacial compact three'),
        image:compact3.src,
        title:"upto 62% discount",
        name:"Buy furniture for your compact",
        price:285,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$385",
        moreImg:[compact4.src,compact7.src,compact4.src,compact6.src,],
    }, 
     {
        id:854,
        slug:createSlug('Speacial compact four'),
        image:compact5.src,
        title:"upto 62% discount",
        name:"Buy furniture for your compact",
        price:285,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$385",
        moreImg:[compact6.src,compact7.src,compact4.src,compact6.src,],
    },  
    {
        id:855,
        slug:createSlug('Speacial compact five'),
        image:compact7.src,
        title:"upto 62% discount",
        name:"Buy furniture for your compact",
        price:285,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$385",
        moreImg:[compact10.src,compact7.src,compact4.src,compact6.src,],
    }, 
     {
        id:856,
        slug:createSlug('Speacial compact six'),
        image:compact4.src,
        title:"upto 62% discount",
        name:"Buy furniture for your compact",
        price:285,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$385",
        moreImg:[compact1.src,compact7.src,compact4.src,compact6.src,],
    },  
    {
        id:857,
        slug:createSlug('Speacial compact seven'),
        image:compact8.src,
        title:"upto 62% discount",
        name:"Buy furniture for your compact",
        price:285,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$385",
        moreImg:[compact1.src,compact7.src,compact4.src,compact6.src,],
    },  
    {
        id:858,
        slug:createSlug('Speacial compact eight'),
        image:compact9.src,
        title:"upto 62% discount",
        name:"Buy furniture for your compact",
        price:285,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$385",
        moreImg:[compact1.src,compact7.src,compact4.src,compact6.src,],
    }, 
     {
        id:859,
        slug:createSlug('Speacial compact nine'),
        image:compact10.src,
        title:"upto 62% discount",
        name:"Buy furniture for your compact",
        price:285,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$385",
        moreImg:[compact1.src,compact7.src,compact4.src,compact6.src,],
    }, 

     {
        id:860,
        slug:createSlug('Speacial compact ten'),
        image:compact6.src,
        title:"upto 62% discount",
        name:"Buy furniture for your compact",
        price:285,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$385",
        moreImg:[compact1.src,compact7.src,compact4.src,compact6.src,],
    },
]