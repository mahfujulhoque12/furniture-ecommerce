import tv1 from '/public/tv/tv1.png';
import tv2 from '/public/tv/tv2.png';
import tv3 from '/public/tv/tv3.png';
import tv4 from '/public/tv/tv4.png';
import tv5 from '/public/tv/tv5.png';
import tv6 from '/public/tv/tv6.png';
import tv7 from '/public/tv/tv7.png';
import tv8 from '/public/tv/tv8.png';
import tv9 from '/public/tv/tv9.png';
import tv10 from '/public/tv/tv10.png';




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
        id:731,
        slug:createSlug('Speacial tv one'),
        image:tv1.src,
        title:"upto 62% discount",
        name:"Buy furniture for your tv",
        price:280,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$380",
        moreImg:[tv1.src,tv7.src,tv4.src,tv6.src,],
    },
    {
        id:732,
        slug:createSlug('Speacial tv two'),
        image:tv2.src,
        title:"upto 62% discount",
        name:"Buy furniture for your tv",
        price:280,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$380",
        moreImg:[tv1.src,tv7.src,tv4.src,tv6.src,],
    }, 

     {
        id:733,
        slug:createSlug('Speacial tv three'),
        image:tv3.src,
        title:"upto 62% discount",
        name:"Buy furniture for your tv",
        price:280,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$380",
        moreImg:[tv4.src,tv7.src,tv4.src,tv6.src,],
    }, 
     {
        id:734,
        slug:createSlug('Speacial tv four'),
        image:tv5.src,
        title:"upto 62% discount",
        name:"Buy furniture for your tv",
        price:280,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$380",
        moreImg:[tv6.src,tv7.src,tv4.src,tv6.src,],
    },  
    {
        id:735,
        slug:createSlug('Speacial tv five'),
        image:tv7.src,
        title:"upto 62% discount",
        name:"Buy furniture for your tv",
        price:280,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$380",
        moreImg:[tv10.src,tv7.src,tv4.src,tv6.src,],
    }, 
     {
        id:736,
        slug:createSlug('Speacial tv six'),
        image:tv4.src,
        title:"upto 62% discount",
        name:"Buy furniture for your tv",
        price:280,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$380",
        moreImg:[tv1.src,tv7.src,tv4.src,tv6.src,],
    },  
    {
        id:737,
        slug:createSlug('Speacial tv seven'),
        image:tv8.src,
        title:"upto 62% discount",
        name:"Buy furniture for your tv",
        price:280,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$380",
        moreImg:[tv1.src,tv7.src,tv4.src,tv6.src,],
    },  
    {
        id:738,
        slug:createSlug('Speacial tv eight'),
        image:tv9.src,
        title:"upto 62% discount",
        name:"Buy furniture for your tv",
        price:280,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$380",
        moreImg:[tv1.src,tv7.src,tv4.src,tv6.src,],
    }, 
     {
        id:739,
        slug:createSlug('Speacial tv nine'),
        image:tv10.src,
        title:"upto 62% discount",
        name:"Buy furniture for your tv",
        price:280,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$380",
        moreImg:[tv1.src,tv7.src,tv4.src,tv6.src,],
    }, 
     {
        id:740,
        slug:createSlug('Speacial tv ten'),
        image:tv6.src,
        title:"upto 62% discount",
        name:"Buy furniture for your tv",
        price:280,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$380",
        moreImg:[tv1.src,tv7.src,tv4.src,tv6.src,],
    },
]