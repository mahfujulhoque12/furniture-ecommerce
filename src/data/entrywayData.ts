import entryway1 from '/public/entryway/Entryway1.png';
import entryway2 from '/public/entryway/Entryway2.png';
import entryway3 from '/public/entryway/Entryway3.png';
import entryway7 from '/public/entryway/Entryway4.png';
import entryway10 from '/public/entryway/Entryway5.png';
import entryway9 from '/public/entryway/Entryway6.png';
import entryway5 from '/public/entryway/Entryway7.png';
import entryway6 from '/public/entryway/Entryway8.png';
import entryway4 from '/public/entryway/Entryway9.png';
import entryway8 from '/public/entryway/Entryway10.png';





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
        id:721,
        slug:createSlug('Speacial entryway one'),
        image:entryway1.src,
        title:"upto 62% discount",
        name:"Buy furniture for your entryway",
        price:280,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$380",
        moreImg:[entryway1.src,entryway7.src,entryway4.src,entryway6.src,],
    },
    {
        id:722,
        slug:createSlug('Speacial entryway two'),
        image:entryway2.src,
        title:"upto 62% discount",
        name:"Buy furniture for your entryway",
        price:280,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$380",
        moreImg:[entryway1.src,entryway7.src,entryway4.src,entryway6.src,],
    }, 

     {
        id:723,
        slug:createSlug('Speacial entryway three'),
        image:entryway3.src,
        title:"upto 62% discount",
        name:"Buy furniture for your entryway",
        price:280,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$380",
        moreImg:[entryway4.src,entryway7.src,entryway4.src,entryway6.src,],
    }, 
     {
        id:724,
        slug:createSlug('Speacial entryway four'),
        image:entryway5.src,
        title:"upto 62% discount",
        name:"Buy furniture for your entryway",
        price:280,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$380",
        moreImg:[entryway6.src,entryway7.src,entryway4.src,entryway6.src,],
    },  
    {
        id:725,
        slug:createSlug('Speacial entryway five'),
        image:entryway7.src,
        title:"upto 62% discount",
        name:"Buy furniture for your entryway",
        price:280,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$380",
        moreImg:[entryway10.src,entryway7.src,entryway4.src,entryway6.src,],
    }, 
     {
        id:726,
        slug:createSlug('Speacial entryway six'),
        image:entryway4.src,
        title:"upto 62% discount",
        name:"Buy furniture for your entryway",
        price:280,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$380",
        moreImg:[entryway1.src,entryway7.src,entryway4.src,entryway6.src,],
    },  
    {
        id:727,
        slug:createSlug('Speacial entryway seven'),
        image:entryway8.src,
        title:"upto 62% discount",
        name:"Buy furniture for your entryway",
        price:280,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$380",
        moreImg:[entryway1.src,entryway7.src,entryway4.src,entryway6.src,],
    },  
    {
        id:728,
        slug:createSlug('Speacial entryway eight'),
        image:entryway9.src,
        title:"upto 62% discount",
        name:"Buy furniture for your entryway",
        price:280,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$380",
        moreImg:[entryway1.src,entryway7.src,entryway4.src,entryway6.src,],
    }, 
     {
        id:729,
        slug:createSlug('Speacial entryway nine'),
        image:entryway10.src,
        title:"upto 62% discount",
        name:"Buy furniture for your entryway",
        price:280,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$380",
        moreImg:[entryway1.src,entryway7.src,entryway4.src,entryway6.src,],
    }, 
     {
        id:730,
        slug:createSlug('Speacial entryway ten'),
        image:entryway6.src,
        title:"upto 62% discount",
        name:"Buy furniture for your entryway",
        price:280,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$380",
        moreImg:[entryway1.src,entryway7.src,entryway4.src,entryway6.src,],
    },
]