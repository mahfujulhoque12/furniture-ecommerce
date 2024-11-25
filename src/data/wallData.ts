import wall1 from '/public/wall/wall1.png';
import wall2 from '/public/wall/wall2.png';
import wall3 from '/public/wall/wall3.png';
import wall4 from '/public/wall/wall4.png';
import wall5 from '/public/wall/wall10.png';
import wall6 from '/public/wall/wall6.png';
import wall7 from '/public/wall/wall7.png';
import wall8 from '/public/wall/wall8.png';
import wall9 from '/public/wall/wall9.png';
import wall10 from '/public/wall/wall10.png';



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
        id:891,
        slug:createSlug('Speacial wall one'),
        image:wall1.src,
        title:"upto 62% discount",
        name:"Buy furniture for your wall",
        price:289,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$389",
        moreImg:[wall1.src,wall7.src,wall4.src,wall6.src,],
    },
    {
        id:892,
        slug:createSlug('Speacial wall two'),
        image:wall2.src,
        title:"upto 62% discount",
        name:"Buy furniture for your wall",
        price:289,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$389",
        moreImg:[wall1.src,wall7.src,wall4.src,wall6.src,],
    }, 

     {
        id:893,
        slug:createSlug('Speacial wall three'),
        image:wall3.src,
        title:"upto 62% discount",
        name:"Buy furniture for your wall",
        price:289,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$389",
        moreImg:[wall4.src,wall7.src,wall4.src,wall6.src,],
    }, 
     {
        id:894,
        slug:createSlug('Speacial wall four'),
        image:wall5.src,
        title:"upto 62% discount",
        name:"Buy furniture for your wall",
        price:289,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$389",
        moreImg:[wall6.src,wall7.src,wall4.src,wall6.src,],
    },  
    {
        id:895,
        slug:createSlug('Speacial wall five'),
        image:wall7.src,
        title:"upto 62% discount",
        name:"Buy furniture for your wall",
        price:289,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$389",
        moreImg:[wall10.src,wall7.src,wall4.src,wall6.src,],
    }, 
     {
        id:896,
        slug:createSlug('Speacial wall six'),
        image:wall4.src,
        title:"upto 62% discount",
        name:"Buy furniture for your wall",
        price:289,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$389",
        moreImg:[wall1.src,wall7.src,wall4.src,wall6.src,],
    },  
    {
        id:897,
        slug:createSlug('Speacial wall seven'),
        image:wall8.src,
        title:"upto 62% discount",
        name:"Buy furniture for your wall",
        price:289,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$389",
        moreImg:[wall1.src,wall7.src,wall4.src,wall6.src,],
    },  
    {
        id:898,
        slug:createSlug('Speacial wall eight'),
        image:wall9.src,
        title:"upto 62% discount",
        name:"Buy furniture for your wall",
        price:289,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$389",
        moreImg:[wall1.src,wall7.src,wall4.src,wall6.src,],
    }, 
     {
        id:899,
        slug:createSlug('Speacial wall nine'),
        image:wall10.src,
        title:"upto 62% discount",
        name:"Buy furniture for your wall",
        price:287,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$387",
        moreImg:[wall1.src,wall7.src,wall4.src,wall6.src,],
    }, 

     {
        id:900,
        slug:createSlug('Speacial wall ten'),
        image:wall6.src,
        title:"upto 62% discount",
        name:"Buy furniture for your wall",
        price:287,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$387",
        moreImg:[wall1.src,wall7.src,wall4.src,wall6.src,],
    },
]