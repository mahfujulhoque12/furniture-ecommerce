import rugs1 from '/public/rugs/rugs1.png';
import rugs2 from '/public/rugs/rugs2.png';
import rugs3 from '/public/rugs/rugs3.png';
import rugs4 from '/public/rugs/rugs4.png';
import rugs5 from '/public/rugs/rugs10.png';
import rugs6 from '/public/rugs/rugs6.png';
import rugs7 from '/public/rugs/rugs7.png';
import rugs8 from '/public/rugs/rugs8.png';
import rugs9 from '/public/rugs/rugs9.png';
import rugs10 from '/public/rugs/rugs10.png';



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
        id:871,
        slug:createSlug('Speacial rugs one'),
        image:rugs1.src,
        title:"upto 62% discount",
        name:"Buy furniture for your rugs",
        price:287,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$387",
        moreImg:[rugs1.src,rugs7.src,rugs4.src,rugs6.src,],
    },
    {
        id:872,
        slug:createSlug('Speacial rugs two'),
        image:rugs2.src,
        title:"upto 62% discount",
        name:"Buy furniture for your rugs",
        price:287,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$387",
        moreImg:[rugs1.src,rugs7.src,rugs4.src,rugs6.src,],
    }, 

     {
        id:873,
        slug:createSlug('Speacial rugs three'),
        image:rugs3.src,
        title:"upto 62% discount",
        name:"Buy furniture for your rugs",
        price:287,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$387",
        moreImg:[rugs4.src,rugs7.src,rugs4.src,rugs6.src,],
    }, 
     {
        id:874,
        slug:createSlug('Speacial rugs four'),
        image:rugs5.src,
        title:"upto 62% discount",
        name:"Buy furniture for your rugs",
        price:287,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$387",
        moreImg:[rugs6.src,rugs7.src,rugs4.src,rugs6.src,],
    },  
    {
        id:875,
        slug:createSlug('Speacial rugs five'),
        image:rugs7.src,
        title:"upto 62% discount",
        name:"Buy furniture for your rugs",
        price:287,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$387",
        moreImg:[rugs10.src,rugs7.src,rugs4.src,rugs6.src,],
    }, 
     {
        id:876,
        slug:createSlug('Speacial rugs six'),
        image:rugs4.src,
        title:"upto 62% discount",
        name:"Buy furniture for your rugs",
        price:287,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$387",
        moreImg:[rugs1.src,rugs7.src,rugs4.src,rugs6.src,],
    },  
    {
        id:877,
        slug:createSlug('Speacial rugs seven'),
        image:rugs8.src,
        title:"upto 62% discount",
        name:"Buy furniture for your rugs",
        price:287,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$387",
        moreImg:[rugs1.src,rugs7.src,rugs4.src,rugs6.src,],
    },  
    {
        id:878,
        slug:createSlug('Speacial rugs eight'),
        image:rugs9.src,
        title:"upto 62% discount",
        name:"Buy furniture for your rugs",
        price:287,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$387",
        moreImg:[rugs1.src,rugs7.src,rugs4.src,rugs6.src,],
    }, 
     {
        id:879,
        slug:createSlug('Speacial rugs nine'),
        image:rugs10.src,
        title:"upto 62% discount",
        name:"Buy furniture for your rugs",
        price:287,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$387",
        moreImg:[rugs1.src,rugs7.src,rugs4.src,rugs6.src,],
    }, 

     {
        id:880,
        slug:createSlug('Speacial rugs ten'),
        image:rugs6.src,
        title:"upto 62% discount",
        name:"Buy furniture for your rugs",
        price:287,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$387",
        moreImg:[rugs1.src,rugs7.src,rugs4.src,rugs6.src,],
    },
]