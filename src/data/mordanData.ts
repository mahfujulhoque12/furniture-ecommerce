import modern1 from '/public/mordan/modern1.png';
import modern2 from '/public/mordan/modern2.png';
import modern3 from '/public/mordan/modern3.png';
import modern4 from '/public/mordan/modern4.png';
import modern5 from '/public/mordan/modern5.png';
import modern6 from '/public/mordan/modern6.png';
import modern7 from '/public/mordan/modern1.png';
import modern8 from '/public/mordan/modern8.png';
import modern9 from '/public/mordan/modern9.png';
import modern10 from '/public/mordan/modern10.png';



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
        id:741,
        slug:createSlug('Speacial modern one'),
        image:modern1.src,
        title:"upto 62% discount",
        name:"Buy furniture for your modern",
        price:280,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$380",
        moreImg:[modern1.src,modern7.src,modern4.src,modern6.src,],
    },
    {
        id:742,
        slug:createSlug('Speacial modern two'),
        image:modern2.src,
        title:"upto 62% discount",
        name:"Buy furniture for your modern",
        price:280,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$380",
        moreImg:[modern1.src,modern7.src,modern4.src,modern6.src,],
    }, 

     {
        id:743,
        slug:createSlug('Speacial modern three'),
        image:modern3.src,
        title:"upto 62% discount",
        name:"Buy furniture for your modern",
        price:280,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$380",
        moreImg:[modern4.src,modern7.src,modern4.src,modern6.src,],
    }, 
     {
        id:744,
        slug:createSlug('Speacial modern four'),
        image:modern5.src,
        title:"upto 62% discount",
        name:"Buy furniture for your modern",
        price:280,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$380",
        moreImg:[modern6.src,modern7.src,modern4.src,modern6.src,],
    },  
    {
        id:745,
        slug:createSlug('Speacial modern five'),
        image:modern7.src,
        title:"upto 62% discount",
        name:"Buy furniture for your modern",
        price:280,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$380",
        moreImg:[modern10.src,modern7.src,modern4.src,modern6.src,],
    }, 
     {
        id:746,
        slug:createSlug('Speacial modern six'),
        image:modern4.src,
        title:"upto 62% discount",
        name:"Buy furniture for your modern",
        price:280,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$380",
        moreImg:[modern1.src,modern7.src,modern4.src,modern6.src,],
    },  
    {
        id:747,
        slug:createSlug('Speacial modern seven'),
        image:modern8.src,
        title:"upto 62% discount",
        name:"Buy furniture for your modern",
        price:280,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$380",
        moreImg:[modern1.src,modern7.src,modern4.src,modern6.src,],
    },  
    {
        id:748,
        slug:createSlug('Speacial modern eight'),
        image:modern9.src,
        title:"upto 62% discount",
        name:"Buy furniture for your modern",
        price:280,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$380",
        moreImg:[modern1.src,modern7.src,modern4.src,modern6.src,],
    }, 
     {
        id:749,
        slug:createSlug('Speacial modern nine'),
        image:modern10.src,
        title:"upto 62% discount",
        name:"Buy furniture for your modern",
        price:280,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$380",
        moreImg:[modern1.src,modern7.src,modern4.src,modern6.src,],
    }, 
     {
        id:750,
        slug:createSlug('Speacial modern ten'),
        image:modern6.src,
        title:"upto 62% discount",
        name:"Buy furniture for your modern",
        price:280,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$380",
        moreImg:[modern1.src,modern7.src,modern4.src,modern6.src,],
    },
]