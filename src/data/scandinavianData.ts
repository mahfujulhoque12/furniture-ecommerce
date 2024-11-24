import scandinavian1 from '/public/scandinavian/Scandinavian1.png';
import scandinavian2 from '/public/scandinavian/Scandinavian2.png';
import scandinavian3 from '/public/scandinavian/Scandinavian3.png';
import scandinavian4 from '/public/scandinavian/Scandinavian4.png';
import scandinavian5 from '/public/scandinavian/Scandinavian5.png';
import scandinavian6 from '/public/scandinavian/Scandinavian6.png';
import scandinavian7 from '/public/scandinavian/Scandinavian7.png';
import scandinavian8 from '/public/scandinavian/Scandinavian8.png';
import scandinavian9 from '/public/scandinavian/Scandinavian9.png';
import scandinavian10 from '/public/scandinavian/Scandinavian10.png';




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
        id:761,
        slug:createSlug('Speacial scandinavian one'),
        image:scandinavian1.src,
        title:"upto 62% discount",
        name:"Buy furniture for your scandinavian",
        price:280,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$380",
        moreImg:[scandinavian1.src,scandinavian7.src,scandinavian4.src,scandinavian6.src,],
    },
    {
        id:762,
        slug:createSlug('Speacial scandinavian two'),
        image:scandinavian2.src,
        title:"upto 62% discount",
        name:"Buy furniture for your scandinavian",
        price:280,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$380",
        moreImg:[scandinavian1.src,scandinavian7.src,scandinavian4.src,scandinavian6.src,],
    }, 

     {
        id:763,
        slug:createSlug('Speacial scandinavian three'),
        image:scandinavian3.src,
        title:"upto 62% discount",
        name:"Buy furniture for your scandinavian",
        price:280,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$380",
        moreImg:[scandinavian4.src,scandinavian7.src,scandinavian4.src,scandinavian6.src,],
    }, 
     {
        id:764,
        slug:createSlug('Speacial scandinavian four'),
        image:scandinavian5.src,
        title:"upto 62% discount",
        name:"Buy furniture for your scandinavian",
        price:280,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$380",
        moreImg:[scandinavian6.src,scandinavian7.src,scandinavian4.src,scandinavian6.src,],
    },  
    {
        id:765,
        slug:createSlug('Speacial scandinavian five'),
        image:scandinavian7.src,
        title:"upto 62% discount",
        name:"Buy furniture for your scandinavian",
        price:280,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$380",
        moreImg:[scandinavian10.src,scandinavian7.src,scandinavian4.src,scandinavian6.src,],
    }, 
     {
        id:766,
        slug:createSlug('Speacial scandinavian six'),
        image:scandinavian4.src,
        title:"upto 62% discount",
        name:"Buy furniture for your scandinavian",
        price:280,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$380",
        moreImg:[scandinavian1.src,scandinavian7.src,scandinavian4.src,scandinavian6.src,],
    },  
    {
        id:767,
        slug:createSlug('Speacial scandinavian seven'),
        image:scandinavian8.src,
        title:"upto 62% discount",
        name:"Buy furniture for your scandinavian",
        price:280,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$380",
        moreImg:[scandinavian1.src,scandinavian7.src,scandinavian4.src,scandinavian6.src,],
    },  
    {
        id:768,
        slug:createSlug('Speacial scandinavian eight'),
        image:scandinavian9.src,
        title:"upto 62% discount",
        name:"Buy furniture for your scandinavian",
        price:280,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$380",
        moreImg:[scandinavian1.src,scandinavian7.src,scandinavian4.src,scandinavian6.src,],
    }, 
     {
        id:769,
        slug:createSlug('Speacial scandinavian nine'),
        image:scandinavian10.src,
        title:"upto 62% discount",
        name:"Buy furniture for your scandinavian",
        price:280,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$380",
        moreImg:[scandinavian1.src,scandinavian7.src,scandinavian4.src,scandinavian6.src,],
    }, 
     {
        id:770,
        slug:createSlug('Speacial scandinavian ten'),
        image:scandinavian6.src,
        title:"upto 62% discount",
        name:"Buy furniture for your scandinavian",
        price:280,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$380",
        moreImg:[scandinavian1.src,scandinavian7.src,scandinavian4.src,scandinavian6.src,],
    },
]