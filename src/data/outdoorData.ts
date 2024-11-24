import outdoor1 from '/public/outdoor/Outdoor1.png';
import outdoor2 from '/public/outdoor/Outdoor2.png';
import outdoor3 from '/public/outdoor/Outdoor3.png';
import outdoor4 from '/public/outdoor/Outdoor4.png';
import outdoor5 from '/public/outdoor/Outdoor5.png';
import outdoor6 from '/public/outdoor/Outdoor6.png';
import outdoor7 from '/public/outdoor/Outdoor7.png';
import outdoor8 from '/public/outdoor/Outdoor8.png';
import outdoor9 from '/public/outdoor/Outdoor9.png';
import outdoor10 from '/public/outdoor/Outdoor10.png';




type OutdoorData = {
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

export const outdoorData : OutdoorData [] =[

    // house chair
    {
        id:711,
        slug:createSlug('Speacial outdoor one'),
        image:outdoor1.src,
        title:"upto 62% discount",
        name:"Buy furniture for your outdoor",
        price:280,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$380",
        moreImg:[outdoor1.src,outdoor7.src,outdoor4.src,outdoor6.src,],
    },
    {
        id:712,
        slug:createSlug('Speacial outdoor two'),
        image:outdoor2.src,
        title:"upto 62% discount",
        name:"Buy furniture for your outdoor",
        price:280,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$380",
        moreImg:[outdoor1.src,outdoor7.src,outdoor4.src,outdoor6.src,],
    }, 

     {
        id:713,
        slug:createSlug('Speacial outdoor three'),
        image:outdoor3.src,
        title:"upto 62% discount",
        name:"Buy furniture for your outdoor",
        price:280,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$380",
        moreImg:[outdoor4.src,outdoor7.src,outdoor4.src,outdoor6.src,],
    }, 
     {
        id:714,
        slug:createSlug('Speacial outdoor four'),
        image:outdoor5.src,
        title:"upto 62% discount",
        name:"Buy furniture for your outdoor",
        price:280,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$380",
        moreImg:[outdoor6.src,outdoor7.src,outdoor4.src,outdoor6.src,],
    },  
    {
        id:715,
        slug:createSlug('Speacial outdoor five'),
        image:outdoor7.src,
        title:"upto 62% discount",
        name:"Buy furniture for your outdoor",
        price:280,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$380",
        moreImg:[outdoor10.src,outdoor7.src,outdoor4.src,outdoor6.src,],
    }, 
     {
        id:716,
        slug:createSlug('Speacial outdoor six'),
        image:outdoor4.src,
        title:"upto 62% discount",
        name:"Buy furniture for your outdoor",
        price:280,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$380",
        moreImg:[outdoor1.src,outdoor7.src,outdoor4.src,outdoor6.src,],
    },  
    {
        id:717,
        slug:createSlug('Speacial outdoor seven'),
        image:outdoor8.src,
        title:"upto 62% discount",
        name:"Buy furniture for your outdoor",
        price:280,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$380",
        moreImg:[outdoor1.src,outdoor7.src,outdoor4.src,outdoor6.src,],
    },  
    {
        id:718,
        slug:createSlug('Speacial outdoor eight'),
        image:outdoor9.src,
        title:"upto 62% discount",
        name:"Buy furniture for your outdoor",
        price:280,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$380",
        moreImg:[outdoor1.src,outdoor7.src,outdoor4.src,outdoor6.src,],
    }, 
     {
        id:719,
        slug:createSlug('Speacial outdoor nine'),
        image:outdoor10.src,
        title:"upto 62% discount",
        name:"Buy furniture for your outdoor",
        price:280,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$380",
        moreImg:[outdoor1.src,outdoor7.src,outdoor4.src,outdoor6.src,],
    }, 
     {
        id:720,
        slug:createSlug('Speacial outdoor ten'),
        image:outdoor6.src,
        title:"upto 62% discount",
        name:"Buy furniture for your outdoor",
        price:280,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$380",
        moreImg:[outdoor1.src,outdoor7.src,outdoor4.src,outdoor6.src,],
    },

]