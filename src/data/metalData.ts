import metal1 from '/public/metal/metal1.png';
import metal2 from '/public/metal/metal2.png';
import metal3 from '/public/metal/metal3.png';
import metal4 from '/public/metal/metal4.png';
import metal5 from '/public/metal/metal5.png';
import metal6 from '/public/metal/metal6.png';
import metal7 from '/public/metal/metal7.png';
import metal8 from '/public/metal/metal8.png';
import metal9 from '/public/metal/metal9.png';
import metal10 from '/public/metal/metal10.png';






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
        id:791,
        slug:createSlug('Speacial metal one'),
        image:metal1.src,
        title:"upto 62% discount",
        name:"Buy furniture for your metal",
        price:280,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$380",
        moreImg:[metal1.src,metal7.src,metal4.src,metal6.src,],
    },
    {
        id:792,
        slug:createSlug('Speacial metal two'),
        image:metal2.src,
        title:"upto 62% discount",
        name:"Buy furniture for your metal",
        price:280,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$380",
        moreImg:[metal1.src,metal7.src,metal4.src,metal6.src,],
    }, 

     {
        id:793,
        slug:createSlug('Speacial metal three'),
        image:metal3.src,
        title:"upto 62% discount",
        name:"Buy furniture for your metal",
        price:280,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$380",
        moreImg:[metal4.src,metal7.src,metal4.src,metal6.src,],
    }, 
     {
        id:794,
        slug:createSlug('Speacial metal four'),
        image:metal5.src,
        title:"upto 62% discount",
        name:"Buy furniture for your metal",
        price:280,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$380",
        moreImg:[metal6.src,metal7.src,metal4.src,metal6.src,],
    },  
    {
        id:795,
        slug:createSlug('Speacial metal five'),
        image:metal7.src,
        title:"upto 62% discount",
        name:"Buy furniture for your metal",
        price:280,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$380",
        moreImg:[metal10.src,metal7.src,metal4.src,metal6.src,],
    }, 
     {
        id:796,
        slug:createSlug('Speacial metal six'),
        image:metal4.src,
        title:"upto 62% discount",
        name:"Buy furniture for your metal",
        price:280,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$380",
        moreImg:[metal1.src,metal7.src,metal4.src,metal6.src,],
    },  
    {
        id:797,
        slug:createSlug('Speacial metal seven'),
        image:metal8.src,
        title:"upto 62% discount",
        name:"Buy furniture for your metal",
        price:280,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$380",
        moreImg:[metal1.src,metal7.src,metal4.src,metal6.src,],
    },  
    {
        id:798,
        slug:createSlug('Speacial metal eight'),
        image:metal9.src,
        title:"upto 62% discount",
        name:"Buy furniture for your metal",
        price:280,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$380",
        moreImg:[metal1.src,metal7.src,metal4.src,metal6.src,],
    }, 
     {
        id:799,
        slug:createSlug('Speacial metal nine'),
        image:metal10.src,
        title:"upto 62% discount",
        name:"Buy furniture for your metal",
        price:280,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$380",
        moreImg:[metal1.src,metal7.src,metal4.src,metal6.src,],
    }, 

     {
        id:800,
        slug:createSlug('Speacial metal ten'),
        image:metal6.src,
        title:"upto 62% discount",
        name:"Buy furniture for your metal",
        price:280,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$380",
        moreImg:[metal1.src,metal7.src,metal4.src,metal6.src,],
    },
]