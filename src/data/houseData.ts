import chair1 from '/public/houseChair/chair1.png';
import chair2 from '/public/houseChair/chair2.png';
import chair3 from '/public/houseChair/chair3.png';
import chair4 from '/public/houseChair/chair4.png';
import chair5 from '/public/houseChair/chair5.png';
import chair6 from '/public/houseChair/chair6.png';
import chair7 from '/public/houseChair/chair7.png';

import table1 from '/public/houseTable/table1.png';
import table2 from '/public/houseTable/table2.png';
import table3 from '/public/houseTable/table3.png';
import table4 from '/public/houseTable/table4.png';
import table5 from '/public/houseTable/table5.png';
import table6 from '/public/houseTable/table6.png';
import table7 from '/public/houseTable/table7.png';

import cabinet1 from '/public/houseCabinet/cabinet1.png';
import cabinet2 from '/public/houseCabinet/cabinet2.png';
import cabinet3 from '/public/houseCabinet/cabinet3.png';
import cabinet4 from '/public/houseCabinet/cabinet4.png';
import cabinet5 from '/public/houseCabinet/cabinet5.png';
import cabinet6 from '/public/houseCabinet/cabinet6.png';
import cabinet7 from '/public/houseCabinet/cabinet7.png';

import sofa1 from '/public/houseSofa/sofa1.png';
import sofa2 from '/public/houseSofa/sofa2.png';
import sofa3 from '/public/houseSofa/sofa3.png';
import sofa4 from '/public/houseSofa/sofa4.png';
import sofa5 from '/public/houseSofa/sofa5.png';
import sofa6 from '/public/houseSofa/sofa6.png';
import sofa7 from '/public/houseSofa/sofa7.png';


import waredrobe1 from '/public/waredrobe/waredrobe1.png';
import waredrobe2 from '/public/waredrobe/waredrobe2.png';
import waredrobe3 from '/public/waredrobe/waredrobe3.png';
import waredrobe4 from '/public/waredrobe/waredrobe4.png';
import waredrobe5 from '/public/waredrobe/waredrobe5.png';
import waredrobe6 from '/public/waredrobe/waredrobe6.png';
import waredrobe7 from '/public/waredrobe/waredrobe7.png';


import corner1 from '/public/corner/corner1.png';
import corner2 from '/public/corner/corner2.png';
import corner3 from '/public/corner/corner3.png';
import corner4 from '/public/corner/corner4.png';
import corner5 from '/public/corner/corner6.png';
import corner6 from '/public/corner/corner5.png';
import corner7 from '/public/corner/corner7.png';






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
        id:1,
        slug:createSlug('Speacial House Chair'),
        image:chair1.src,
        title:"upto 70% discount",
        name:"Speacial House Chair",
        price:250,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$280",
        moreImg:[chair1.src,chair7.src,chair4.src,chair6.src,],
    },
    {
        id:2,
        slug:createSlug('Simple House Chair'),
        image:chair7.src,
        title:"upto 70% discount",
        name:"Simple House Chair",
          price:250,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$280",
           moreImg:[chair1.src,chair7.src,chair4.src,chair6.src,], 
    },  
    {
        id:3,
        slug:createSlug('Normal House Chair'),
        image:chair2.src,
        title:"upto 70% discount",
        name:"Normal House Chair",
          price:250,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$280",
            moreImg:[chair1.src,chair7.src,chair4.src,chair6.src,],
    }, 
     {
        id:4,
        slug:createSlug('Comfort House Chair'),
        image:chair3.src,
        title:"upto 70% discount",
        name:"Comfort House Chair",
          price:250,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$280",
            moreImg:[chair1.src,chair7.src,chair4.src,chair6.src,],
    }, 
     {
        id:5,
        slug:createSlug('Comfort House Chair two'),
        image:chair4.src,
        title:"upto 70% discount",
        name:"Comfort House Chair Two",
          price:250,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$280",
            moreImg:[chair1.src,chair7.src,chair4.src,chair6.src,],
    },  
    {
        id:6,
        slug:createSlug('Comfort House Chair three'),
        image:chair5.src,
        title:"upto 70% discount",
        name:"Comfort House Chair ",
          price:250,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$280",
            moreImg:[chair1.src,chair7.src,chair4.src,chair6.src,],
    },  
    {
        id:7,
        slug:createSlug('Comfort House Chair 4'),
        image:chair6.src,
        title:"upto 70% discount",
        name:"Comfort House Chair",
          price:250,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$280",
            moreImg:[chair3.src,chair7.src,chair4.src,chair6.src,],
    },  
    {
        id:8,
        slug:createSlug('Comfort House Chair 8'),
        image:chair7.src,
        title:"upto 70% discount",
        name:"Comfort House Chair",
          price:250,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$280",
            moreImg:[chair5.src,chair7.src,chair4.src,chair6.src,],
    },
      {
        id:9,
        slug:createSlug('Comfort House Chair 9'),
        image:chair7.src,
        title:"upto 70% discount",
        name:"Comfort House Chair",
          price:250,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$280",
            moreImg:[chair1.src,chair7.src,chair4.src,chair6.src,],
    },  
    {
        id:10,
        slug:createSlug('Comfort House Chair10'),
        image:chair4.src,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        title:"upto 70% discount",
        name:"Comfort House Chair",
          price:250,
        oldPrice:"$280",
        moreImg:[chair1.src,chair7.src,chair4.src,chair6.src,],
    },

    // house table

    {
        id:11,
        slug:createSlug('Speacial House table'),
        image:table1.src,
        title:"upto 70% discount",
        name:"Speacial House table",
          price:250,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$280",
        moreImg:[table1.src,table7.src,table4.src,table6.src,],
    },
    {
        id:12,
        slug:createSlug('Simple House table'),
        image:table7.src,
        title:"upto 70% discount",
        name:"Simple House table",
          price:250,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$280",
           moreImg:[table1.src,table7.src,table4.src,table6.src,], 
    },  {
        id:13,
        slug:createSlug('Normal House table'),
        image:table2.src,
        title:"upto 70% discount",
        name:"Normal House table",
          price:250,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$280",
            moreImg:[table1.src,table7.src,table4.src,table6.src,],
    }, 
     {
        id:14,
        slug:createSlug('Comfort House table'),
        image:table3.src,
        title:"upto 70% discount",
        name:"Comfort House table",
          price:250,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$280",
            moreImg:[table1.src,table7.src,table4.src,table6.src,],
    }, 
     {
        id:15,
        slug:createSlug('Comfort House table two'),
        image:table4.src,
        title:"upto 70% discount",
        name:"Comfort House table Two",
          price:250,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$280",
            moreImg:[table1.src,table7.src,table4.src,table6.src,],
    },  
    {
        id:16,
        slug:createSlug('Comfort House table three'),
        image:table5.src,
        title:"upto 70% discount",
        name:"Comfort House table ",
          price:250,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$280",
            moreImg:[table1.src,table7.src,table4.src,table6.src,],
    },  
    {
        id:17,
        slug:createSlug('Comfort House table 4'),
        image:table6.src,
        title:"upto 70% discount",
        name:"Comfort House table",
          price:250,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$280",
            moreImg:[table3.src,table7.src,table4.src,table6.src,],
    },  
    {
        id:18,
        slug:createSlug('Comfort House table 8'),
        image:table7.src,
        title:"upto 70% discount",
        name:"Comfort House table",
          price:250,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$280",
            moreImg:[table5.src,table7.src,table4.src,table6.src,],
    },
      {
        id:19,
        slug:createSlug('Comfort House table 9'),
        image:table7.src,
        title:"upto 70% discount",
        name:"Comfort House table",
          price:250,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$280",
            moreImg:[table1.src,table7.src,table4.src,table6.src,],
    },  
    {
        id:20,
        slug:createSlug('Comfort House table10'),
        image:table4.src,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        title:"upto 70% discount",
        name:"Comfort House table",
          price:250,
        oldPrice:"$280",
        moreImg:[table1.src,table7.src,table4.src,table6.src,],
    },

    // houser cabinet

    {
        id:21,
        slug:createSlug('Speacial House cabinet'),
        image:cabinet1.src,
        title:"upto 70% discount",
        name:"Speacial House cabinet",
          price:250,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$280",
        moreImg:[cabinet1.src,cabinet7.src,cabinet4.src,cabinet6.src,],
    },
    {
        id:22,
        slug:createSlug('Simple House cabinet'),
        image:cabinet7.src,
        title:"upto 70% discount",
        name:"Simple House cabinet",
          price:250,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$280",
           moreImg:[cabinet1.src,cabinet7.src,cabinet4.src,cabinet6.src,], 
    },  {
        id:23,
        slug:createSlug('Normal House cabinet'),
        image:cabinet2.src,
        title:"upto 70% discount",
        name:"Normal House cabinet",
          price:250,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$280",
            moreImg:[cabinet1.src,cabinet7.src,cabinet4.src,cabinet6.src,],
    }, 
     {
        id:24,
        slug:createSlug('Comfort House cabinet'),
        image:cabinet3.src,
        title:"upto 70% discount",
        name:"Comfort House cabinet",
          price:250,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$280",
            moreImg:[cabinet1.src,cabinet7.src,cabinet4.src,cabinet6.src,],
    }, 
     {
        id:25,
        slug:createSlug('Comfort House cabinet two'),
        image:cabinet4.src,
        title:"upto 70% discount",
        name:"Comfort House cabinet Two",
          price:250,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$280",
            moreImg:[cabinet1.src,cabinet7.src,cabinet4.src,cabinet6.src,],
    },  
    {
        id:26,
        slug:createSlug('Comfort House cabinet three'),
        image:cabinet5.src,
        title:"upto 70% discount",
        name:"Comfort House cabinet ",
          price:250,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$280",
            moreImg:[cabinet1.src,cabinet7.src,cabinet4.src,cabinet6.src,],
    },  
    {
        id:27,
        slug:createSlug('Comfort House cabinet 4'),
        image:cabinet6.src,
        title:"upto 70% discount",
        name:"Comfort House cabinet",
          price:250,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$280",
            moreImg:[cabinet3.src,cabinet7.src,cabinet4.src,cabinet6.src,],
    },  
    {
        id:28,
        slug:createSlug('Comfort House cabinet 8'),
        image:cabinet7.src,
        title:"upto 70% discount",
        name:"Comfort House cabinet",
          price:250,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$280",
            moreImg:[cabinet5.src,cabinet7.src,cabinet4.src,cabinet6.src,],
    },
      {
        id:29,
        slug:createSlug('Comfort House cabinet 9'),
        image:cabinet7.src,
        title:"upto 70% discount",
        name:"Comfort House cabinet",
          price:250,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$280",
            moreImg:[cabinet1.src,cabinet7.src,cabinet4.src,cabinet6.src,],
    },  
    {
        id:30,
        slug:createSlug('Comfort House cabinet10'),
        image:cabinet4.src,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        title:"upto 70% discount",
        name:"Comfort House cabinet",
          price:250,
        oldPrice:"$280",
        moreImg:[cabinet1.src,cabinet7.src,cabinet4.src,cabinet6.src,],
    },

    // house sofa
    {
        id:31,
        slug:createSlug('Speacial House sofa'),
        image:sofa1.src,
        title:"upto 70% discount",
        name:"Speacial House sofa",
          price:250,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$280",
        moreImg:[sofa1.src,sofa7.src,sofa4.src,sofa6.src,],
    },
    {
        id:32,
        slug:createSlug('Simple House sofa'),
        image:sofa7.src,
        title:"upto 70% discount",
        name:"Simple House sofa",
          price:250,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$280",
           moreImg:[sofa1.src,sofa7.src,sofa4.src,sofa6.src,], 
    },  {
        id:33,
        slug:createSlug('Normal House sofa'),
        image:sofa2.src,
        title:"upto 70% discount",
        name:"Normal House sofa",
          price:250,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$280",
            moreImg:[sofa1.src,sofa7.src,sofa4.src,sofa6.src,],
    }, 
     {
        id:34,
        slug:createSlug('Comfort House sofa'),
        image:sofa3.src,
        title:"upto 70% discount",
        name:"Comfort House sofa",
          price:250,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$280",
            moreImg:[sofa1.src,sofa7.src,sofa4.src,sofa6.src,],
    }, 
     {
        id:35,
        slug:createSlug('Comfort House sofa two'),
        image:sofa4.src,
        title:"upto 70% discount",
        name:"Comfort House sofa Two",
          price:250,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$280",
            moreImg:[sofa1.src,sofa7.src,sofa4.src,sofa6.src,],
    },  
    {
        id:36,
        slug:createSlug('Comfort House sofa three'),
        image:sofa5.src,
        title:"upto 70% discount",
        name:"Comfort House sofa ",
          price:250,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$280",
            moreImg:[sofa1.src,sofa7.src,sofa4.src,sofa6.src,],
    },  
    {
        id:37,
        slug:createSlug('Comfort House sofa 4'),
        image:sofa6.src,
        title:"upto 70% discount",
        name:"Comfort House sofa",
          price:250,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$280",
            moreImg:[sofa3.src,sofa7.src,sofa4.src,sofa6.src,],
    },  
    {
        id:38,
        slug:createSlug('Comfort House sofa 8'),
        image:sofa7.src,
        title:"upto 70% discount",
        name:"Comfort House sofa",
          price:250,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$280",
            moreImg:[sofa5.src,sofa7.src,sofa4.src,sofa6.src,],
    },
      {
        id:39,
        slug:createSlug('Comfort House sofa 9'),
        image:sofa7.src,
        title:"upto 70% discount",
        name:"Comfort House sofa",
          price:250,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$280",
            moreImg:[sofa1.src,sofa7.src,sofa4.src,sofa6.src,],
    },  
    {
        id:40,
        slug:createSlug('Comfort House sofa10'),
        image:sofa4.src,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        title:"upto 70% discount",
        name:"Comfort House sofa",
          price:250,
        oldPrice:"$280",
        moreImg:[sofa1.src,sofa7.src,sofa4.src,sofa6.src,],
    },

    // house waredrobe
    {
        id:41,
        slug:createSlug('Speacial House waredrobe'),
        image:waredrobe1.src,
        title:"upto 70% discount",
        name:"Speacial House waredrobe",
          price:250,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$280",
        moreImg:[waredrobe1.src,waredrobe7.src,waredrobe4.src,waredrobe6.src,],
    },
    {
        id:42,
        slug:createSlug('Simple House waredrobe'),
        image:waredrobe7.src,
        title:"upto 70% discount",
        name:"Simple House waredrobe",
          price:250,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$280",
           moreImg:[waredrobe1.src,waredrobe7.src,waredrobe4.src,waredrobe6.src,], 
    },  {
        id:43,
        slug:createSlug('Normal House waredrobe'),
        image:waredrobe2.src,
        title:"upto 70% discount",
        name:"Normal House waredrobe",
          price:250,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$280",
            moreImg:[waredrobe1.src,waredrobe7.src,waredrobe4.src,waredrobe6.src,],
    }, 
     {
        id:44,
        slug:createSlug('Comfort House waredrobe'),
        image:waredrobe3.src,
        title:"upto 70% discount",
        name:"Comfort House waredrobe",
          price:250,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$280",
            moreImg:[waredrobe1.src,waredrobe7.src,waredrobe4.src,waredrobe6.src,],
    }, 
     {
        id:45,
        slug:createSlug('Comfort House waredrobe two'),
        image:waredrobe4.src,
        title:"upto 70% discount",
        name:"Comfort House waredrobe Two",
          price:250,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$280",
            moreImg:[waredrobe1.src,waredrobe7.src,waredrobe4.src,waredrobe6.src,],
    },  
    {
        id:46,
        slug:createSlug('Comfort House waredrobe three'),
        image:waredrobe5.src,
        title:"upto 70% discount",
        name:"Comfort House waredrobe ",
          price:250,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$280",
            moreImg:[waredrobe1.src,waredrobe7.src,waredrobe4.src,waredrobe6.src,],
    },  
    {
        id:47,
        slug:createSlug('Comfort House waredrobe 4'),
        image:waredrobe6.src,
        title:"upto 70% discount",
        name:"Comfort House waredrobe",
          price:250,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$280",
            moreImg:[waredrobe3.src,waredrobe7.src,waredrobe4.src,waredrobe6.src,],
    },  
    {
        id:48,
        slug:createSlug('Comfort House waredrobe 8'),
        image:waredrobe7.src,
        title:"upto 70% discount",
        name:"Comfort House waredrobe",
          price:250,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$280",
            moreImg:[waredrobe5.src,waredrobe7.src,waredrobe4.src,waredrobe6.src,],
    },
      {
        id:49,
        slug:createSlug('Comfort House waredrobe 9'),
        image:waredrobe7.src,
        title:"upto 70% discount",
        name:"Comfort House waredrobe",
          price:250,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$280",
            moreImg:[waredrobe1.src,waredrobe7.src,waredrobe4.src,waredrobe6.src,],
    },  
    {
        id:50,
        slug:createSlug('Comfort House waredrobe10'),
        image:waredrobe4.src,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        title:"upto 70% discount",
        name:"Comfort House waredrobe",
          price:250,
        oldPrice:"$280",
        moreImg:[waredrobe1.src,waredrobe7.src,waredrobe4.src,waredrobe6.src,],
    },

    // house corner 

    {
        id:51,
        slug:createSlug('Speacial House corner'),
        image:corner1.src,
        title:"upto 70% discount",
        name:"Speacial House corner",
          price:250,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$280",
        moreImg:[corner1.src,corner7.src,corner4.src,corner6.src,],
    },
    {
        id:52,
        slug:createSlug('Simple House corner'),
        image:corner7.src,
        title:"upto 70% discount",
        name:"Simple House corner",
          price:250,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$280",
           moreImg:[corner1.src,corner7.src,corner4.src,corner6.src,], 
    },  {
        id:53,
        slug:createSlug('Normal House corner'),
        image:corner2.src,
        title:"upto 70% discount",
        name:"Normal House corner",
          price:250,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$280",
            moreImg:[corner1.src,corner7.src,corner4.src,corner6.src,],
    }, 
     {
        id:54,
        slug:createSlug('Comfort House corner'),
        image:corner3.src,
        title:"upto 70% discount",
        name:"Comfort House corner",
          price:250,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$280",
            moreImg:[corner1.src,corner7.src,corner4.src,corner6.src,],
    }, 
     {
        id:55,
        slug:createSlug('Comfort House corner two'),
        image:corner4.src,
        title:"upto 70% discount",
        name:"Comfort House corner Two",
          price:250,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$280",
            moreImg:[corner1.src,corner7.src,corner4.src,corner6.src,],
    },  
    {
        id:56,
        slug:createSlug('Comfort House corner three'),
        image:corner5.src,
        title:"upto 70% discount",
        name:"Comfort House corner ",
          price:250,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$280",
            moreImg:[corner1.src,corner7.src,corner4.src,corner6.src,],
    },  
    {
        id:57,
        slug:createSlug('Comfort House corner 4'),
        image:corner6.src,
        title:"upto 70% discount",
        name:"Comfort House corner",
          price:250,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$280",
            moreImg:[corner3.src,corner7.src,corner4.src,corner6.src,],
    },  
    {
        id:58,
        slug:createSlug('Comfort House corner 8'),
        image:corner7.src,
        title:"upto 70% discount",
        name:"Comfort House corner",
          price:250,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$280",
            moreImg:[corner5.src,corner7.src,corner4.src,corner6.src,],
    },
      {
        id:59,
        slug:createSlug('Comfort House corner 9'),
        image:corner7.src,
        title:"upto 70% discount",
        name:"Comfort House corner",
          price:250,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$280",
            moreImg:[corner1.src,corner7.src,corner4.src,corner6.src,],
    },  
    {
        id:60,
        slug:createSlug('Comfort House corner10'),
        image:corner4.src,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        title:"upto 70% discount",
        name:"Comfort House corner",
          price:250,
        oldPrice:"$280",
        moreImg:[corner1.src,corner7.src,corner4.src,corner6.src,],
    },

] 
