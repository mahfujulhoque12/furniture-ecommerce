import wood1 from '/public/wood/wood1.png';
import wood2 from '/public/wood/wood2.png';
import wood3 from '/public/wood/wood3.png';
import wood4 from '/public/wood/wood4.png';
import wood5 from '/public/wood/wood5.png';
import wood6 from '/public/wood/wood6.png';
import wood7 from '/public/wood/wood7.png';
import wood8 from '/public/wood/wood8.png';
import wood9 from '/public/wood/wood9.png';
import wood10 from '/public/wood/wood10.png';






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
        id:781,
        slug:createSlug('Speacial wood one'),
        image:wood1.src,
        title:"upto 62% discount",
        name:"Buy furniture for your wood",
        price:280,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$380",
        moreImg:[wood1.src,wood7.src,wood4.src,wood6.src,],
    },
    {
        id:782,
        slug:createSlug('Speacial wood two'),
        image:wood2.src,
        title:"upto 62% discount",
        name:"Buy furniture for your wood",
        price:280,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$380",
        moreImg:[wood1.src,wood7.src,wood4.src,wood6.src,],
    }, 

     {
        id:783,
        slug:createSlug('Speacial wood three'),
        image:wood3.src,
        title:"upto 62% discount",
        name:"Buy furniture for your wood",
        price:280,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$380",
        moreImg:[wood4.src,wood7.src,wood4.src,wood6.src,],
    }, 
     {
        id:784,
        slug:createSlug('Speacial wood four'),
        image:wood5.src,
        title:"upto 62% discount",
        name:"Buy furniture for your wood",
        price:280,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$380",
        moreImg:[wood6.src,wood7.src,wood4.src,wood6.src,],
    },  
    {
        id:785,
        slug:createSlug('Speacial wood five'),
        image:wood7.src,
        title:"upto 62% discount",
        name:"Buy furniture for your wood",
        price:280,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$380",
        moreImg:[wood10.src,wood7.src,wood4.src,wood6.src,],
    }, 
     {
        id:786,
        slug:createSlug('Speacial wood six'),
        image:wood4.src,
        title:"upto 62% discount",
        name:"Buy furniture for your wood",
        price:280,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$380",
        moreImg:[wood1.src,wood7.src,wood4.src,wood6.src,],
    },  
    {
        id:787,
        slug:createSlug('Speacial wood seven'),
        image:wood8.src,
        title:"upto 62% discount",
        name:"Buy furniture for your wood",
        price:280,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$380",
        moreImg:[wood1.src,wood7.src,wood4.src,wood6.src,],
    },  
    {
        id:788,
        slug:createSlug('Speacial wood eight'),
        image:wood9.src,
        title:"upto 62% discount",
        name:"Buy furniture for your wood",
        price:280,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$380",
        moreImg:[wood1.src,wood7.src,wood4.src,wood6.src,],
    }, 
     {
        id:789,
        slug:createSlug('Speacial wood nine'),
        image:wood10.src,
        title:"upto 62% discount",
        name:"Buy furniture for your wood",
        price:280,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$380",
        moreImg:[wood1.src,wood7.src,wood4.src,wood6.src,],
    }, 
     {
        id:790,
        slug:createSlug('Speacial wood ten'),
        image:wood6.src,
        title:"upto 62% discount",
        name:"Buy furniture for your wood",
        price:280,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$380",
        moreImg:[wood1.src,wood7.src,wood4.src,wood6.src,],
    },
]