import fabric1 from '/public/fabric/fabric1.png';
import fabric2 from '/public/fabric/fabric2.png';
import fabric3 from '/public/fabric/fabric3.png';
import fabric4 from '/public/fabric/fabric4.png';
import fabric5 from '/public/fabric/fabric5.png';
import fabric6 from '/public/fabric/fabric6.png';
import fabric7 from '/public/fabric/fabric7.png';
import fabric8 from '/public/fabric/fabric8.png';
import fabric9 from '/public/fabric/fabric9.png';
import fabric10 from '/public/fabric/fabric10.png';



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
        id:811,
        slug:createSlug('Speacial fabric one'),
        image:fabric1.src,
        title:"upto 62% discount",
        name:"Buy furniture for your fabric",
        price:281,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$381",
        moreImg:[fabric1.src,fabric7.src,fabric4.src,fabric6.src,],
    },
    {
        id:812,
        slug:createSlug('Speacial fabric two'),
        image:fabric2.src,
        title:"upto 62% discount",
        name:"Buy furniture for your fabric",
        price:281,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$381",
        moreImg:[fabric1.src,fabric7.src,fabric4.src,fabric6.src,],
    }, 

     {
        id:813,
        slug:createSlug('Speacial fabric three'),
        image:fabric3.src,
        title:"upto 62% discount",
        name:"Buy furniture for your fabric",
        price:281,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$381",
        moreImg:[fabric4.src,fabric7.src,fabric4.src,fabric6.src,],
    }, 
     {
        id:814,
        slug:createSlug('Speacial fabric four'),
        image:fabric5.src,
        title:"upto 62% discount",
        name:"Buy furniture for your fabric",
        price:281,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$381",
        moreImg:[fabric6.src,fabric7.src,fabric4.src,fabric6.src,],
    },  
    {
        id:815,
        slug:createSlug('Speacial fabric five'),
        image:fabric7.src,
        title:"upto 62% discount",
        name:"Buy furniture for your fabric",
        price:281,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$381",
        moreImg:[fabric10.src,fabric7.src,fabric4.src,fabric6.src,],
    }, 
     {
        id:816,
        slug:createSlug('Speacial fabric six'),
        image:fabric4.src,
        title:"upto 62% discount",
        name:"Buy furniture for your fabric",
        price:281,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$381",
        moreImg:[fabric1.src,fabric7.src,fabric4.src,fabric6.src,],
    },  
    {
        id:817,
        slug:createSlug('Speacial fabric seven'),
        image:fabric8.src,
        title:"upto 62% discount",
        name:"Buy furniture for your fabric",
        price:281,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$381",
        moreImg:[fabric1.src,fabric7.src,fabric4.src,fabric6.src,],
    },  
    {
        id:818,
        slug:createSlug('Speacial fabric eight'),
        image:fabric9.src,
        title:"upto 62% discount",
        name:"Buy furniture for your fabric",
        price:281,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$381",
        moreImg:[fabric1.src,fabric7.src,fabric4.src,fabric6.src,],
    }, 
     {
        id:819,
        slug:createSlug('Speacial fabric nine'),
        image:fabric10.src,
        title:"upto 62% discount",
        name:"Buy furniture for your fabric",
        price:281,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$381",
        moreImg:[fabric1.src,fabric7.src,fabric4.src,fabric6.src,],
    }, 

     {
        id:820,
        slug:createSlug('Speacial fabric ten'),
        image:fabric6.src,
        title:"upto 62% discount",
        name:"Buy furniture for your fabric",
        price:281,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$381",
        moreImg:[fabric1.src,fabric7.src,fabric4.src,fabric6.src,],
    },
]