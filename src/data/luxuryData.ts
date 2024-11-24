import luxury1 from '/public/luxzary/Luxury1.png';
import luxury2 from '/public/luxzary/Luxury2.png';
import luxury3 from '/public/luxzary/Luxury3.png';
import luxury4 from '/public/luxzary/Luxury4.png';
import luxury5 from '/public/luxzary/Luxury5.png';
import luxury6 from '/public/luxzary/Luxury6.png';
import luxury7 from '/public/luxzary/Luxury7.png';
import luxury8 from '/public/luxzary/Luxury8.png';
import luxury9 from '/public/luxzary/Luxury9.png';
import luxury10 from '/public/luxzary/Luxury10.png';






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
        id:771,
        slug:createSlug('Speacial luxury one'),
        image:luxury1.src,
        title:"upto 62% discount",
        name:"Buy furniture for your luxury",
        price:280,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$380",
        moreImg:[luxury1.src,luxury7.src,luxury4.src,luxury6.src,],
    },
    {
        id:772,
        slug:createSlug('Speacial luxury two'),
        image:luxury2.src,
        title:"upto 62% discount",
        name:"Buy furniture for your luxury",
        price:280,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$380",
        moreImg:[luxury1.src,luxury7.src,luxury4.src,luxury6.src,],
    }, 

     {
        id:773,
        slug:createSlug('Speacial luxury three'),
        image:luxury3.src,
        title:"upto 62% discount",
        name:"Buy furniture for your luxury",
        price:280,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$380",
        moreImg:[luxury4.src,luxury7.src,luxury4.src,luxury6.src,],
    }, 
     {
        id:774,
        slug:createSlug('Speacial luxury four'),
        image:luxury5.src,
        title:"upto 62% discount",
        name:"Buy furniture for your luxury",
        price:280,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$380",
        moreImg:[luxury6.src,luxury7.src,luxury4.src,luxury6.src,],
    },  
    {
        id:775,
        slug:createSlug('Speacial luxury five'),
        image:luxury7.src,
        title:"upto 62% discount",
        name:"Buy furniture for your luxury",
        price:280,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$380",
        moreImg:[luxury10.src,luxury7.src,luxury4.src,luxury6.src,],
    }, 
     {
        id:776,
        slug:createSlug('Speacial luxury six'),
        image:luxury4.src,
        title:"upto 62% discount",
        name:"Buy furniture for your luxury",
        price:280,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$380",
        moreImg:[luxury1.src,luxury7.src,luxury4.src,luxury6.src,],
    },  
    {
        id:777,
        slug:createSlug('Speacial luxury seven'),
        image:luxury8.src,
        title:"upto 62% discount",
        name:"Buy furniture for your luxury",
        price:280,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$380",
        moreImg:[luxury1.src,luxury7.src,luxury4.src,luxury6.src,],
    },  
    {
        id:778,
        slug:createSlug('Speacial luxury eight'),
        image:luxury9.src,
        title:"upto 62% discount",
        name:"Buy furniture for your luxury",
        price:280,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$380",
        moreImg:[luxury1.src,luxury7.src,luxury4.src,luxury6.src,],
    }, 
     {
        id:779,
        slug:createSlug('Speacial luxury nine'),
        image:luxury10.src,
        title:"upto 62% discount",
        name:"Buy furniture for your luxury",
        price:280,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$380",
        moreImg:[luxury1.src,luxury7.src,luxury4.src,luxury6.src,],
    }, 
     {
        id:780,
        slug:createSlug('Speacial luxury ten'),
        image:luxury6.src,
        title:"upto 62% discount",
        name:"Buy furniture for your luxury",
        price:280,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$380",
        moreImg:[luxury1.src,luxury7.src,luxury4.src,luxury6.src,],
    },
]