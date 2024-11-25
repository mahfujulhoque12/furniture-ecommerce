import leather1 from '/public/leather/leather1.png';
import leather2 from '/public/leather/leather2.png';
import leather3 from '/public/leather/leather3.png';
import leather4 from '/public/leather/leather4.png';
import leather5 from '/public/leather/leather5.png';
import leather6 from '/public/leather/leather6.png';
import leather7 from '/public/leather/leather7.png';
import leather8 from '/public/leather/leather8.png';
import leather9 from '/public/leather/leather9.png';
import leather10 from '/public/leather/leather10.png';



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
        id:821,
        slug:createSlug('Speacial leather one'),
        image:leather1.src,
        title:"upto 62% discount",
        name:"Buy furniture for your leather",
        price:282,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$382",
        moreImg:[leather1.src,leather7.src,leather4.src,leather6.src,],
    },
    {
        id:822,
        slug:createSlug('Speacial leather two'),
        image:leather2.src,
        title:"upto 62% discount",
        name:"Buy furniture for your leather",
        price:282,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$382",
        moreImg:[leather1.src,leather7.src,leather4.src,leather6.src,],
    }, 

     {
        id:823,
        slug:createSlug('Speacial leather three'),
        image:leather3.src,
        title:"upto 62% discount",
        name:"Buy furniture for your leather",
        price:282,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$382",
        moreImg:[leather4.src,leather7.src,leather4.src,leather6.src,],
    }, 
     {
        id:824,
        slug:createSlug('Speacial leather four'),
        image:leather5.src,
        title:"upto 62% discount",
        name:"Buy furniture for your leather",
        price:282,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$382",
        moreImg:[leather6.src,leather7.src,leather4.src,leather6.src,],
    },  
    {
        id:825,
        slug:createSlug('Speacial leather five'),
        image:leather7.src,
        title:"upto 62% discount",
        name:"Buy furniture for your leather",
        price:282,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$382",
        moreImg:[leather10.src,leather7.src,leather4.src,leather6.src,],
    }, 
     {
        id:826,
        slug:createSlug('Speacial leather six'),
        image:leather4.src,
        title:"upto 62% discount",
        name:"Buy furniture for your leather",
        price:282,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$382",
        moreImg:[leather1.src,leather7.src,leather4.src,leather6.src,],
    },  
    {
        id:827,
        slug:createSlug('Speacial leather seven'),
        image:leather8.src,
        title:"upto 62% discount",
        name:"Buy furniture for your leather",
        price:282,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$382",
        moreImg:[leather1.src,leather7.src,leather4.src,leather6.src,],
    },  
    {
        id:828,
        slug:createSlug('Speacial leather eight'),
        image:leather9.src,
        title:"upto 62% discount",
        name:"Buy furniture for your leather",
        price:282,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$382",
        moreImg:[leather1.src,leather7.src,leather4.src,leather6.src,],
    }, 
     {
        id:829,
        slug:createSlug('Speacial leather nine'),
        image:leather10.src,
        title:"upto 62% discount",
        name:"Buy furniture for your leather",
        price:282,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$382",
        moreImg:[leather1.src,leather7.src,leather4.src,leather6.src,],
    }, 

     {
        id:830,
        slug:createSlug('Speacial leather ten'),
        image:leather6.src,
        title:"upto 62% discount",
        name:"Buy furniture for your leather",
        price:282,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$382",
        moreImg:[leather1.src,leather7.src,leather4.src,leather6.src,],
    },
]