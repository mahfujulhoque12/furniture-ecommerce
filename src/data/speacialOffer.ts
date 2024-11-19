import speacial from '/public/speacial/speacial.jpg';
import speacial1 from '/public/speacial/speacial1.jpg';
import speacial2 from '/public/speacial/speacial3.jpg';
import speacial3 from '/public/speacial/speacial4.jpg';
import speacial4 from '/public/speacial/speacial5.jpg';
import speacial5 from '/public/speacial/speacial6.jpg';
import speacial6 from '/public/speacial/speacial7.jpg';
import speacial7 from '/public/speacial/speacial8.jpg';
import speacial8 from '/public/speacial/speacial9.jpg';
import speacial9 from '/public/speacial/speacial2.jpg';



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
        id:321,
        slug:createSlug('North Valley Spruce'),
        image:speacial.src,
        title:"upto 70% discount",
        name:"North Valley Spruce",
        price:250,
        des:"Lorem Ipsum is simply dummy  of the printing and typesetting ...",
        oldPrice:"$280",
        moreImg:[speacial.src,speacial8.src,speacial4.src,speacial6.src,],
    },
    {
        id:322,
        slug:createSlug('North Valley Spruce2'),
        image:speacial1.src,
        title:"upto 70% discount",
        name:"North Valley Spruce",
         price:250,
        des:"Lorem Ipsum is simply dummy  of the printing and typesetting ...",
        oldPrice:"$280",
        moreImg:[speacial.src,speacial8.src,speacial4.src,speacial6.src,], 
    },  {
        id:323,
        slug:createSlug('North Valley Spruce3'),
        image:speacial2.src,
        title:"upto 70% discount",
        name:"North Valley Spruce",
         price:250,
        des:"Lorem Ipsum is simply dummy  of the printing and typesetting ...",
        oldPrice:"$280",
        moreImg:[speacial.src,speacial8.src,speacial4.src,speacial6.src,],
    }, 
     {
        id:324,
        slug:createSlug('North Valley Spruce4'),
        image:speacial3.src,
        title:"upto 70% discount",
        name:"North Valley Spruce",
         price:250,
        des:"Lorem Ipsum is simply dummy  of the printing and typesetting ...",
        oldPrice:"$280",
            moreImg:[speacial.src,speacial8.src,speacial4.src,speacial6.src,],
    }, 
     {
        id:325,
        slug:createSlug('North Valley Spruce5'),
        image:speacial4.src,
        title:"upto 70% discount",
        name:"North Valley Spruce",
         price:250,
        des:"Lorem Ipsum is simply dummy  of the printing and typesetting ...",
        oldPrice:"$280",
            moreImg:[speacial.src,speacial8.src,speacial4.src,speacial6.src,],
    },  
    {
        id:326,
        slug:createSlug('North Valley Spruce 6'),
        image:speacial5.src,
        title:"upto 70% discount",
        name:"North Valley Spruce",
         price:250,
        des:"Lorem Ipsum is simply dummy  of the printing and typesetting ...",
        oldPrice:"$280",
            moreImg:[speacial.src,speacial8.src,speacial4.src,speacial6.src,],
    },  
    {
        id:327,
        slug:createSlug('North Valley Spruce 7'),
        image:speacial6.src,
        title:"upto 70% discount",
        name:"North Valley Spruce",
         price:250,
        des:"Lorem Ipsum is simply dummy  of the printing and typesetting ...",
        oldPrice:"$280",
            moreImg:[speacial.src,speacial8.src,speacial4.src,speacial6.src,],
    },  
    {
        id:328,
        slug:createSlug('North Valley Spruce 8'),
        image:speacial7.src,
        title:"upto 70% discount",
        name:"North Valley Spruce",
         price:250,
        des:"Lorem Ipsum is simply dummy  of the printing and typesetting ...",
        oldPrice:"$280",
            moreImg:[speacial.src,speacial8.src,speacial4.src,speacial6.src,],
    },
      {
        id:329,
        slug:createSlug('North Valley Spruce 9'),
        image:speacial8.src,
        title:"upto 70% discount",
        name:"North Valley Spruce",
         price:250,
        des:"Lorem Ipsum is simply dummy  of the printing and typesetting ...",
        oldPrice:"$280",
            moreImg:[speacial.src,speacial8.src,speacial4.src,speacial6.src,],
    },  
    {
        id:330,
        slug:createSlug('North Valley Spruce10'),
        image:speacial9.src,
        des:"Lorem Ipsum is simply dummy  of the printing and typesetting ...",
        title:"upto 70% discount",
        name:"North Valley Spruce",
         price:250,
        oldPrice:"$280",
        moreImg:[speacial.src,speacial8.src,speacial4.src,speacial6.src,],
    },
] 
