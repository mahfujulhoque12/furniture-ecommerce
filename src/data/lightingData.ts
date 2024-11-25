import lighting1 from '/public/lighting/lighting1.png';
import lighting2 from '/public/lighting/lighting2.png';
import lighting3 from '/public/lighting/lighting3.png';
import lighting4 from '/public/lighting/lighting4.png';
import lighting5 from '/public/lighting/lighting10.png';
import lighting6 from '/public/lighting/lighting6.png';
import lighting7 from '/public/lighting/lighting7.png';
import lighting8 from '/public/lighting/lighting8.png';
import lighting9 from '/public/lighting/lighting9.png';
import lighting10 from '/public/lighting/lighting10.png';



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
        id:861,
        slug:createSlug('Speacial lighting one'),
        image:lighting1.src,
        title:"upto 62% discount",
        name:"Buy furniture for your lighting",
        price:286,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$386",
        moreImg:[lighting1.src,lighting7.src,lighting4.src,lighting6.src,],
    },
    {
        id:862,
        slug:createSlug('Speacial lighting two'),
        image:lighting2.src,
        title:"upto 62% discount",
        name:"Buy furniture for your lighting",
        price:286,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$386",
        moreImg:[lighting1.src,lighting7.src,lighting4.src,lighting6.src,],
    }, 

     {
        id:863,
        slug:createSlug('Speacial lighting three'),
        image:lighting3.src,
        title:"upto 62% discount",
        name:"Buy furniture for your lighting",
        price:286,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$386",
        moreImg:[lighting4.src,lighting7.src,lighting4.src,lighting6.src,],
    }, 
     {
        id:864,
        slug:createSlug('Speacial lighting four'),
        image:lighting5.src,
        title:"upto 62% discount",
        name:"Buy furniture for your lighting",
        price:286,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$386",
        moreImg:[lighting6.src,lighting7.src,lighting4.src,lighting6.src,],
    },  
    {
        id:865,
        slug:createSlug('Speacial lighting five'),
        image:lighting7.src,
        title:"upto 62% discount",
        name:"Buy furniture for your lighting",
        price:286,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$386",
        moreImg:[lighting10.src,lighting7.src,lighting4.src,lighting6.src,],
    }, 
     {
        id:866,
        slug:createSlug('Speacial lighting six'),
        image:lighting4.src,
        title:"upto 62% discount",
        name:"Buy furniture for your lighting",
        price:286,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$386",
        moreImg:[lighting1.src,lighting7.src,lighting4.src,lighting6.src,],
    },  
    {
        id:867,
        slug:createSlug('Speacial lighting seven'),
        image:lighting8.src,
        title:"upto 62% discount",
        name:"Buy furniture for your lighting",
        price:286,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$386",
        moreImg:[lighting1.src,lighting7.src,lighting4.src,lighting6.src,],
    },  
    {
        id:868,
        slug:createSlug('Speacial lighting eight'),
        image:lighting9.src,
        title:"upto 62% discount",
        name:"Buy furniture for your lighting",
        price:286,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$386",
        moreImg:[lighting1.src,lighting7.src,lighting4.src,lighting6.src,],
    }, 
     {
        id:869,
        slug:createSlug('Speacial lighting nine'),
        image:lighting10.src,
        title:"upto 62% discount",
        name:"Buy furniture for your lighting",
        price:286,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$386",
        moreImg:[lighting1.src,lighting7.src,lighting4.src,lighting6.src,],
    }, 

     {
        id:870,
        slug:createSlug('Speacial lighting ten'),
        image:lighting6.src,
        title:"upto 62% discount",
        name:"Buy furniture for your lighting",
        price:286,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$386",
        moreImg:[lighting1.src,lighting7.src,lighting4.src,lighting6.src,],
    },
]