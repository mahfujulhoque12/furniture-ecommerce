import kids1 from '/public/kids/kids1.png';
import kids2 from '/public/kids/kids2.png';
import kids3 from '/public/kids/kids3.png';
import kids4 from '/public/kids/kids4.png';
import kids5 from '/public/kids/kids5.png';
import kids6 from '/public/kids/kids6.png';
import kids7 from '/public/kids/kids7.png';
import kids8 from '/public/kids/kids8.png';
import kids9 from '/public/kids/kids9.png';
import kids10 from '/public/kids/kids10.png';



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

    // house chair
    {
        id:701,
        slug:createSlug('Speacial kids one'),
        image:kids1.src,
        title:"upto 62% discount",
        name:"Buy furniture for your kids",
        price:280,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$380",
        moreImg:[kids1.src,kids7.src,kids4.src,kids6.src,],
    },
    {
        id:702,
        slug:createSlug('Speacial kids two'),
        image:kids2.src,
        title:"upto 62% discount",
        name:"Buy furniture for your kids",
        price:280,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$380",
        moreImg:[kids1.src,kids7.src,kids4.src,kids6.src,],
    }, 

     {
        id:703,
        slug:createSlug('Speacial kids three'),
        image:kids3.src,
        title:"upto 62% discount",
        name:"Buy furniture for your kids",
        price:280,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$380",
        moreImg:[kids4.src,kids7.src,kids4.src,kids6.src,],
    }, 
     {
        id:704,
        slug:createSlug('Speacial kids four'),
        image:kids5.src,
        title:"upto 62% discount",
        name:"Buy furniture for your kids",
        price:280,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$380",
        moreImg:[kids6.src,kids7.src,kids4.src,kids6.src,],
    },  
    {
        id:705,
        slug:createSlug('Speacial kids five'),
        image:kids7.src,
        title:"upto 62% discount",
        name:"Buy furniture for your kids",
        price:280,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$380",
        moreImg:[kids10.src,kids7.src,kids4.src,kids6.src,],
    }, 
     {
        id:706,
        slug:createSlug('Speacial kids six'),
        image:kids4.src,
        title:"upto 62% discount",
        name:"Buy furniture for your kids",
        price:280,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$380",
        moreImg:[kids1.src,kids7.src,kids4.src,kids6.src,],
    },  
    {
        id:707,
        slug:createSlug('Speacial kids seven'),
        image:kids8.src,
        title:"upto 62% discount",
        name:"Buy furniture for your kids",
        price:280,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$380",
        moreImg:[kids1.src,kids7.src,kids4.src,kids6.src,],
    },  
    {
        id:708,
        slug:createSlug('Speacial kids eight'),
        image:kids9.src,
        title:"upto 62% discount",
        name:"Buy furniture for your kids",
        price:280,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$380",
        moreImg:[kids1.src,kids7.src,kids4.src,kids6.src,],
    }, 
     {
        id:709,
        slug:createSlug('Speacial kids nine'),
        image:kids10.src,
        title:"upto 62% discount",
        name:"Buy furniture for your kids",
        price:280,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$380",
        moreImg:[kids1.src,kids7.src,kids4.src,kids6.src,],
    }, 
     {
        id:710,
        slug:createSlug('Speacial kids ten'),
        image:kids6.src,
        title:"upto 62% discount",
        name:"Buy furniture for your kids",
        price:280,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$380",
        moreImg:[kids1.src,kids7.src,kids4.src,kids6.src,],
    },
]