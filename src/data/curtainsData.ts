import curtains1 from '/public/curtains/curtains1.png';
import curtains2 from '/public/curtains/curtains2.png';
import curtains3 from '/public/curtains/curtains3.png';
import curtains4 from '/public/curtains/curtains4.png';
import curtains5 from '/public/curtains/curtains10.png';
import curtains6 from '/public/curtains/curtains6.png';
import curtains7 from '/public/curtains/curtains7.png';
import curtains8 from '/public/curtains/curtains8.png';
import curtains9 from '/public/curtains/curtains9.png';
import curtains10 from '/public/curtains/curtains10.png';



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
        id:881,
        slug:createSlug('Speacial curtains one'),
        image:curtains1.src,
        title:"upto 62% discount",
        name:"Buy furniture for your curtains",
        price:288,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$388",
        moreImg:[curtains1.src,curtains7.src,curtains4.src,curtains6.src,],
    },
    {
        id:882,
        slug:createSlug('Speacial curtains two'),
        image:curtains2.src,
        title:"upto 62% discount",
        name:"Buy furniture for your curtains",
        price:288,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$388",
        moreImg:[curtains1.src,curtains7.src,curtains4.src,curtains6.src,],
    }, 

     {
        id:883,
        slug:createSlug('Speacial curtains three'),
        image:curtains3.src,
        title:"upto 62% discount",
        name:"Buy furniture for your curtains",
        price:288,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$388",
        moreImg:[curtains4.src,curtains7.src,curtains4.src,curtains6.src,],
    }, 
     {
        id:884,
        slug:createSlug('Speacial curtains four'),
        image:curtains5.src,
        title:"upto 62% discount",
        name:"Buy furniture for your curtains",
        price:288,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$388",
        moreImg:[curtains6.src,curtains7.src,curtains4.src,curtains6.src,],
    },  
    {
        id:885,
        slug:createSlug('Speacial curtains five'),
        image:curtains7.src,
        title:"upto 62% discount",
        name:"Buy furniture for your curtains",
        price:288,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$388",
        moreImg:[curtains10.src,curtains7.src,curtains4.src,curtains6.src,],
    }, 
     {
        id:886,
        slug:createSlug('Speacial curtains six'),
        image:curtains4.src,
        title:"upto 62% discount",
        name:"Buy furniture for your curtains",
        price:288,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$388",
        moreImg:[curtains1.src,curtains7.src,curtains4.src,curtains6.src,],
    },  
    {
        id:887,
        slug:createSlug('Speacial curtains seven'),
        image:curtains8.src,
        title:"upto 62% discount",
        name:"Buy furniture for your curtains",
        price:288,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$388",
        moreImg:[curtains1.src,curtains7.src,curtains4.src,curtains6.src,],
    },  
    {
        id:888,
        slug:createSlug('Speacial curtains eight'),
        image:curtains9.src,
        title:"upto 62% discount",
        name:"Buy furniture for your curtains",
        price:288,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$388",
        moreImg:[curtains1.src,curtains7.src,curtains4.src,curtains6.src,],
    }, 
     {
        id:889,
        slug:createSlug('Speacial curtains nine'),
        image:curtains10.src,
        title:"upto 62% discount",
        name:"Buy furniture for your curtains",
        price:287,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$387",
        moreImg:[curtains1.src,curtains7.src,curtains4.src,curtains6.src,],
    }, 

     {
        id:890,
        slug:createSlug('Speacial curtains ten'),
        image:curtains6.src,
        title:"upto 62% discount",
        name:"Buy furniture for your curtains",
        price:287,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$387",
        moreImg:[curtains1.src,curtains7.src,curtains4.src,curtains6.src,],
    },
]