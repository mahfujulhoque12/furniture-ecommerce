import bamboo1 from '/public/bamboo/bamboo1.png';
import bamboo2 from '/public/bamboo/bamboo2.png';
import bamboo3 from '/public/bamboo/bamboo3.png';
import bamboo4 from '/public/bamboo/bamboo4.png';
import bamboo5 from '/public/bamboo/bamboo5.png';
import bamboo6 from '/public/bamboo/bamboo6.png';
import bamboo7 from '/public/bamboo/bamboo7.png';
import bamboo8 from '/public/bamboo/bamboo8.png';
import bamboo9 from '/public/bamboo/bamboo9.png';
import bamboo10 from '/public/bamboo/bamboo10.png';



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
        id:831,
        slug:createSlug('Speacial bamboo one'),
        image:bamboo1.src,
        title:"upto 62% discount",
        name:"Buy furniture for your bamboo",
        price:283,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$383",
        moreImg:[bamboo1.src,bamboo7.src,bamboo4.src,bamboo6.src,],
    },
    {
        id:832,
        slug:createSlug('Speacial bamboo two'),
        image:bamboo2.src,
        title:"upto 62% discount",
        name:"Buy furniture for your bamboo",
        price:283,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$383",
        moreImg:[bamboo1.src,bamboo7.src,bamboo4.src,bamboo6.src,],
    }, 

     {
        id:833,
        slug:createSlug('Speacial bamboo three'),
        image:bamboo3.src,
        title:"upto 62% discount",
        name:"Buy furniture for your bamboo",
        price:283,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$383",
        moreImg:[bamboo4.src,bamboo7.src,bamboo4.src,bamboo6.src,],
    }, 
     {
        id:834,
        slug:createSlug('Speacial bamboo four'),
        image:bamboo5.src,
        title:"upto 62% discount",
        name:"Buy furniture for your bamboo",
        price:283,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$383",
        moreImg:[bamboo6.src,bamboo7.src,bamboo4.src,bamboo6.src,],
    },  
    {
        id:835,
        slug:createSlug('Speacial bamboo five'),
        image:bamboo7.src,
        title:"upto 62% discount",
        name:"Buy furniture for your bamboo",
        price:283,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$383",
        moreImg:[bamboo10.src,bamboo7.src,bamboo4.src,bamboo6.src,],
    }, 
     {
        id:836,
        slug:createSlug('Speacial bamboo six'),
        image:bamboo4.src,
        title:"upto 62% discount",
        name:"Buy furniture for your bamboo",
        price:283,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$383",
        moreImg:[bamboo1.src,bamboo7.src,bamboo4.src,bamboo6.src,],
    },  
    {
        id:837,
        slug:createSlug('Speacial bamboo seven'),
        image:bamboo8.src,
        title:"upto 62% discount",
        name:"Buy furniture for your bamboo",
        price:283,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$383",
        moreImg:[bamboo1.src,bamboo7.src,bamboo4.src,bamboo6.src,],
    },  
    {
        id:838,
        slug:createSlug('Speacial bamboo eight'),
        image:bamboo9.src,
        title:"upto 62% discount",
        name:"Buy furniture for your bamboo",
        price:283,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$383",
        moreImg:[bamboo1.src,bamboo7.src,bamboo4.src,bamboo6.src,],
    }, 
     {
        id:839,
        slug:createSlug('Speacial bamboo nine'),
        image:bamboo10.src,
        title:"upto 62% discount",
        name:"Buy furniture for your bamboo",
        price:283,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$383",
        moreImg:[bamboo1.src,bamboo7.src,bamboo4.src,bamboo6.src,],
    }, 

     {
        id:840,
        slug:createSlug('Speacial bamboo ten'),
        image:bamboo6.src,
        title:"upto 62% discount",
        name:"Buy furniture for your bamboo",
        price:283,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$383",
        moreImg:[bamboo1.src,bamboo7.src,bamboo4.src,bamboo6.src,],
    },
]