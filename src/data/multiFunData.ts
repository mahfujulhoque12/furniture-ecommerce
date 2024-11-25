import multiFun1 from '/public/multiFun/multiFun1.png';
import multiFun2 from '/public/multiFun/multiFun2.png';
import multiFun3 from '/public/multiFun/multiFun3.png';
import multiFun4 from '/public/multiFun/multiFun4.png';
import multiFun5 from '/public/multiFun/multiFun5.png';
import multiFun6 from '/public/multiFun/multiFun6.png';
import multiFun7 from '/public/multiFun/multiFun7.png';
import multiFun8 from '/public/multiFun/multiFun8.png';
import multiFun9 from '/public/multiFun/multiFun9.png';
import multiFun10 from '/public/multiFun/multiFun10.png';



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
        id:841,
        slug:createSlug('Speacial multiFun one'),
        image:multiFun1.src,
        title:"upto 62% discount",
        name:"Buy furniture for your multiFun",
        price:284,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$384",
        moreImg:[multiFun1.src,multiFun7.src,multiFun4.src,multiFun6.src,],
    },
    {
        id:842,
        slug:createSlug('Speacial multiFun two'),
        image:multiFun2.src,
        title:"upto 62% discount",
        name:"Buy furniture for your multiFun",
        price:284,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$384",
        moreImg:[multiFun1.src,multiFun7.src,multiFun4.src,multiFun6.src,],
    }, 

     {
        id:843,
        slug:createSlug('Speacial multiFun three'),
        image:multiFun3.src,
        title:"upto 62% discount",
        name:"Buy furniture for your multiFun",
        price:284,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$384",
        moreImg:[multiFun4.src,multiFun7.src,multiFun4.src,multiFun6.src,],
    }, 
     {
        id:844,
        slug:createSlug('Speacial multiFun four'),
        image:multiFun5.src,
        title:"upto 62% discount",
        name:"Buy furniture for your multiFun",
        price:284,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$384",
        moreImg:[multiFun6.src,multiFun7.src,multiFun4.src,multiFun6.src,],
    },  
    {
        id:845,
        slug:createSlug('Speacial multiFun five'),
        image:multiFun7.src,
        title:"upto 62% discount",
        name:"Buy furniture for your multiFun",
        price:284,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$384",
        moreImg:[multiFun10.src,multiFun7.src,multiFun4.src,multiFun6.src,],
    }, 
     {
        id:846,
        slug:createSlug('Speacial multiFun six'),
        image:multiFun4.src,
        title:"upto 62% discount",
        name:"Buy furniture for your multiFun",
        price:284,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$384",
        moreImg:[multiFun1.src,multiFun7.src,multiFun4.src,multiFun6.src,],
    },  
    {
        id:847,
        slug:createSlug('Speacial multiFun seven'),
        image:multiFun8.src,
        title:"upto 62% discount",
        name:"Buy furniture for your multiFun",
        price:284,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$384",
        moreImg:[multiFun1.src,multiFun7.src,multiFun4.src,multiFun6.src,],
    },  
    {
        id:848,
        slug:createSlug('Speacial multiFun eight'),
        image:multiFun9.src,
        title:"upto 62% discount",
        name:"Buy furniture for your multiFun",
        price:284,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$384",
        moreImg:[multiFun1.src,multiFun7.src,multiFun4.src,multiFun6.src,],
    }, 
     {
        id:849,
        slug:createSlug('Speacial multiFun nine'),
        image:multiFun10.src,
        title:"upto 62% discount",
        name:"Buy furniture for your multiFun",
        price:284,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$384",
        moreImg:[multiFun1.src,multiFun7.src,multiFun4.src,multiFun6.src,],
    }, 

     {
        id:850,
        slug:createSlug('Speacial multiFun ten'),
        image:multiFun6.src,
        title:"upto 62% discount",
        name:"Buy furniture for your multiFun",
        price:284,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$384",
        moreImg:[multiFun1.src,multiFun7.src,multiFun4.src,multiFun6.src,],
    },
]