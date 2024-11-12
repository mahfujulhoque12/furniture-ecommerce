import chair1 from '/public/officeChair/chair1.png';
import chair2 from '/public/officeChair/chair2.png';
import chair3 from '/public/officeChair/chair3.png';
import chair4 from '/public/officeChair/chair4.png';
import chair5 from '/public/officeChair/chair5.png';
import chair6 from '/public/officeChair/chair6.png';
import chair7 from '/public/officeChair/chair7.png';

import sofa1 from '/public/officeSofa/sofa1.png';
import sofa2 from '/public/officeSofa/sofa2.png';
import sofa3 from '/public/officeSofa/sofa3.png';
import sofa4 from '/public/officeSofa/sofa4.png';
import sofa5 from '/public/officeSofa/sofa5.png';
import sofa6 from '/public/officeSofa/sofa6.png';
import sofa7 from '/public/officeSofa/sofa7.png';

import cabinet1 from '/public/officeFile/cabinet.png';
import cabinet2 from '/public/officeFile/cabinet2.png';
import cabinet3 from '/public/officeFile/cabinet3.png';
import cabinet4 from '/public/officeFile/cabinet4.png';
import cabinet5 from '/public/officeFile/cabinet5.png';
import cabinet6 from '/public/officeFile/cabinet6.png';
import cabinet7 from '/public/officeFile/cabinet7.png';

import work1 from '/public/officeWorkStation/work1.png';
import work2 from '/public/officeWorkStation/work2.png';
import work3 from '/public/officeWorkStation/work3.png';
import work4 from '/public/officeWorkStation/work4.png';
import work5 from '/public/officeWorkStation/work5.png';
import work6 from '/public/officeWorkStation/work6.png';
import work7 from '/public/officeWorkStation/work7.png';

import table1 from '/public/officeTable/table1.png';
import table2 from '/public/officeTable/table2.png';
import table3 from '/public/officeTable/table3.png';
import table4 from '/public/officeTable/table4.png';
import table5 from '/public/officeTable/table5.png';
import table6 from '/public/officeTable/table6.png';
import table7 from '/public/officeTable/table7.png';

import bookshelf1 from '/public/officeBookShelf/bookShelf1.png';
import bookshelf2 from '/public/officeBookShelf/bookShelf2.png';
import bookshelf3 from '/public/officeBookShelf/bookShelf3.png';
import bookshelf4 from '/public/officeBookShelf/bookShelf4.png';
import bookshelf5 from '/public/officeBookShelf/bookShelf5.png';
import bookshelf6 from '/public/officeBookShelf/bookShelf6.png';
import bookshelf7 from '/public/officeBookShelf/bookShelf7.png';








type CardData = {
    id:number;
    slug:string;
    image:string;
    title:string;
    name:string;
    price:string;
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

    // office chair
    {
        id:1,
        slug:createSlug('Speacial office Chair'),
        image:chair1.src,
        title:"upto 70% discount",
        name:"Speacial office Chair",
        price:"$250",
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$280",
        moreImg:[chair1.src,chair7.src,chair4.src,chair6.src,],
    },
    {
        id:2,
        slug:createSlug('Simple office Chair'),
        image:chair7.src,
        title:"upto 70% discount",
        name:"Simple office Chair",
        price:"$250",
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$280",
           moreImg:[chair1.src,chair7.src,chair4.src,chair6.src,], 
    },  
    {
        id:3,
        slug:createSlug('Normal office Chair'),
        image:chair2.src,
        title:"upto 70% discount",
        name:"Normal office Chair",
        price:"$250",
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$280",
            moreImg:[chair1.src,chair7.src,chair4.src,chair6.src,],
    }, 
     {
        id:4,
        slug:createSlug('Comfort office Chair'),
        image:chair3.src,
        title:"upto 70% discount",
        name:"Comfort office Chair",
        price:"$250",
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$280",
            moreImg:[chair1.src,chair7.src,chair4.src,chair6.src,],
    }, 
     {
        id:5,
        slug:createSlug('Comfort office Chair two'),
        image:chair4.src,
        title:"upto 70% discount",
        name:"Comfort office Chair Two",
        price:"$250",
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$280",
            moreImg:[chair1.src,chair7.src,chair4.src,chair6.src,],
    },  
    {
        id:6,
        slug:createSlug('Comfort office Chair three'),
        image:chair5.src,
        title:"upto 70% discount",
        name:"Comfort office Chair ",
        price:"$250",
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$280",
            moreImg:[chair1.src,chair7.src,chair4.src,chair6.src,],
    },  
    {
        id:7,
        slug:createSlug('Comfort office Chair 4'),
        image:chair6.src,
        title:"upto 70% discount",
        name:"Comfort office Chair",
        price:"$250",
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$280",
            moreImg:[chair3.src,chair7.src,chair4.src,chair6.src,],
    },  
    {
        id:8,
        slug:createSlug('Comfort office Chair 8'),
        image:chair7.src,
        title:"upto 70% discount",
        name:"Comfort office Chair",
        price:"$250",
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$280",
            moreImg:[chair5.src,chair7.src,chair4.src,chair6.src,],
    },
      {
        id:9,
        slug:createSlug('Comfort office Chair 9'),
        image:chair7.src,
        title:"upto 70% discount",
        name:"Comfort office Chair",
        price:"$250",
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$280",
            moreImg:[chair1.src,chair7.src,chair4.src,chair6.src,],
    },  
    {
        id:10,
        slug:createSlug('Comfort office Chair10'),
        image:chair4.src,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        title:"upto 70% discount",
        name:"Comfort office Chair",
        price:"$250",
        oldPrice:"$280",
        moreImg:[chair1.src,chair7.src,chair4.src,chair6.src,],
    },

    // office sofa
    {
        id:11,
        slug:createSlug('Speacial office sofa'),
        image:sofa1.src,
        title:"upto 70% discount",
        name:"Speacial office sofa",
        price:"$250",
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$280",
        moreImg:[sofa1.src,sofa7.src,sofa4.src,sofa6.src,],
    },
    {
        id:12,
        slug:createSlug('Simple office sofa'),
        image:sofa7.src,
        title:"upto 70% discount",
        name:"Simple office sofa",
        price:"$250",
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$280",
           moreImg:[sofa1.src,sofa7.src,sofa4.src,sofa6.src,], 
    },  
    {
        id:13,
        slug:createSlug('Normal office sofa'),
        image:sofa2.src,
        title:"upto 70% discount",
        name:"Normal office sofa",
        price:"$250",
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$280",
            moreImg:[sofa1.src,sofa7.src,sofa4.src,sofa6.src,],
    }, 
     {
        id:14,
        slug:createSlug('Comfort office sofa'),
        image:sofa3.src,
        title:"upto 70% discount",
        name:"Comfort office sofa",
        price:"$250",
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$280",
            moreImg:[sofa1.src,sofa7.src,sofa4.src,sofa6.src,],
    }, 
     {
        id:15,
        slug:createSlug('Comfort office sofa two'),
        image:sofa4.src,
        title:"upto 70% discount",
        name:"Comfort office sofa Two",
        price:"$250",
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$280",
            moreImg:[sofa1.src,sofa7.src,sofa4.src,sofa6.src,],
    },  
    {
        id:16,
        slug:createSlug('Comfort office sofa three'),
        image:sofa5.src,
        title:"upto 70% discount",
        name:"Comfort office sofa ",
        price:"$250",
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$280",
            moreImg:[sofa1.src,sofa7.src,sofa4.src,sofa6.src,],
    },  
    {
        id:17,
        slug:createSlug('Comfort office sofa 4'),
        image:sofa6.src,
        title:"upto 70% discount",
        name:"Comfort office sofa",
        price:"$250",
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$280",
            moreImg:[sofa3.src,sofa7.src,sofa4.src,sofa6.src,],
    },  
    {
        id:18,
        slug:createSlug('Comfort office sofa 8'),
        image:sofa7.src,
        title:"upto 70% discount",
        name:"Comfort office sofa",
        price:"$250",
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$280",
            moreImg:[sofa5.src,sofa7.src,sofa4.src,sofa6.src,],
    },
      {
        id:19,
        slug:createSlug('Comfort office sofa 9'),
        image:sofa7.src,
        title:"upto 70% discount",
        name:"Comfort office sofa",
        price:"$250",
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$280",
            moreImg:[sofa1.src,sofa7.src,sofa4.src,sofa6.src,],
    },  
    {
        id:20,
        slug:createSlug('Comfort office sofa10'),
        image:sofa4.src,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        title:"upto 70% discount",
        name:"Comfort office sofa",
        price:"$250",
        oldPrice:"$280",
        moreImg:[sofa1.src,sofa7.src,sofa4.src,sofa6.src,],
    },

     // office file cabinet
     {
        id:21,
        slug:createSlug('Speacial office cabinet'),
        image:cabinet1.src,
        title:"upto 70% discount",
        name:"Speacial office cabinet",
        price:"$250",
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$280",
        moreImg:[cabinet1.src,cabinet7.src,cabinet4.src,cabinet6.src,],
    },
    {
        id:22,
        slug:createSlug('Simple office cabinet'),
        image:cabinet7.src,
        title:"upto 70% discount",
        name:"Simple office cabinet",
        price:"$250",
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$280",
           moreImg:[cabinet1.src,cabinet7.src,cabinet4.src,cabinet6.src,], 
    },  
    {
        id:23,
        slug:createSlug('Normal office cabinet'),
        image:cabinet2.src,
        title:"upto 70% discount",
        name:"Normal office cabinet",
        price:"$250",
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$280",
            moreImg:[cabinet1.src,cabinet7.src,cabinet4.src,cabinet6.src,],
    }, 
     {
        id:24,
        slug:createSlug('Comfort office cabinet'),
        image:cabinet3.src,
        title:"upto 70% discount",
        name:"Comfort office cabinet",
        price:"$250",
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$280",
            moreImg:[cabinet1.src,cabinet7.src,cabinet4.src,cabinet6.src,],
    }, 
     {
        id:25,
        slug:createSlug('Comfort office cabinet two'),
        image:cabinet4.src,
        title:"upto 70% discount",
        name:"Comfort office cabinet Two",
        price:"$250",
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$280",
            moreImg:[cabinet1.src,cabinet7.src,cabinet4.src,cabinet6.src,],
    },  
    {
        id:26,
        slug:createSlug('Comfort office cabinet three'),
        image:cabinet5.src,
        title:"upto 70% discount",
        name:"Comfort office cabinet ",
        price:"$250",
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$280",
            moreImg:[cabinet1.src,cabinet7.src,cabinet4.src,cabinet6.src,],
    },  
    {
        id:27,
        slug:createSlug('Comfort office cabinet 4'),
        image:cabinet6.src,
        title:"upto 70% discount",
        name:"Comfort office cabinet",
        price:"$250",
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$280",
            moreImg:[cabinet3.src,cabinet7.src,cabinet4.src,cabinet6.src,],
    },  
    {
        id:28,
        slug:createSlug('Comfort office cabinet 8'),
        image:cabinet7.src,
        title:"upto 70% discount",
        name:"Comfort office cabinet",
        price:"$250",
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$280",
            moreImg:[cabinet5.src,cabinet7.src,cabinet4.src,cabinet6.src,],
    },
      {
        id:29,
        slug:createSlug('Comfort office cabinet 9'),
        image:cabinet7.src,
        title:"upto 70% discount",
        name:"Comfort office cabinet",
        price:"$250",
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$280",
            moreImg:[cabinet1.src,cabinet7.src,cabinet4.src,cabinet6.src,],
    },  
    {
        id:30,
        slug:createSlug('Comfort office cabinet10'),
        image:cabinet4.src,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        title:"upto 70% discount",
        name:"Comfort office cabinet",
        price:"$250",
        oldPrice:"$280",
        moreImg:[cabinet1.src,cabinet7.src,cabinet4.src,cabinet6.src,],
    },

    // office work station
     {
        id:31,
        slug:createSlug('Speacial office work'),
        image:work1.src,
        title:"upto 70% discount",
        name:"Speacial office work station",
        price:"$250",
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$280",
        moreImg:[work1.src,work7.src,work4.src,work6.src,],
    },
    {
        id:32,
        slug:createSlug('Simple office work'),
        image:work7.src,
        title:"upto 70% discount",
        name:"Simple office work station",
        price:"$250",
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$280",
           moreImg:[work1.src,work7.src,work4.src,work6.src,], 
    },  
    {
        id:33,
        slug:createSlug('Normal office work'),
        image:work2.src,
        title:"upto 70% discount",
        name:"Normal office work station",
        price:"$250",
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$280",
            moreImg:[work1.src,work7.src,work4.src,work6.src,],
    }, 
     {
        id:34,
        slug:createSlug('Comfort office work'),
        image:work3.src,
        title:"upto 70% discount",
        name:"Comfort office work station",
        price:"$250",
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$280",
            moreImg:[work1.src,work7.src,work4.src,work6.src,],
    }, 
     {
        id:35,
        slug:createSlug('Comfort office work two'),
        image:work4.src,
        title:"upto 70% discount",
        name:"Comfort office work Two station",
        price:"$250",
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$280",
            moreImg:[work1.src,work7.src,work4.src,work6.src,],
    },  
    {
        id:36,
        slug:createSlug('Comfort office work three'),
        image:work5.src,
        title:"upto 70% discount",
        name:"Comfort office work station",
        price:"$250",
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$280",
            moreImg:[work1.src,work7.src,work4.src,work6.src,],
    },  
    {
        id:37,
        slug:createSlug('Comfort office work 4'),
        image:work6.src,
        title:"upto 70% discount",
        name:"Comfort office work station",
        price:"$250",
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$280",
            moreImg:[work3.src,work7.src,work4.src,work6.src,],
    },  
    {
        id:38,
        slug:createSlug('Comfort office work 8'),
        image:work7.src,
        title:"upto 70% discount",
        name:"Comfort office work station",
        price:"$250",
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$280",
            moreImg:[work5.src,work7.src,work4.src,work6.src,],
    },
      {
        id:39,
        slug:createSlug('Comfort office work 9'),
        image:work7.src,
        title:"upto 70% discount",
        name:"Comfort office work station",
        price:"$250",
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$280",
            moreImg:[work1.src,work7.src,work4.src,work6.src,],
    },  
    {
        id:40,
        slug:createSlug('Comfort office work10'),
        image:work4.src,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        title:"upto 70% discount",
        name:"Comfort office work station",
        price:"$250",
        oldPrice:"$280",
        moreImg:[work1.src,work7.src,work4.src,work6.src,],
    },
    // office table

    {
        id:41,
        slug:createSlug('Speacial office table'),
        image:table1.src,
        title:"upto 70% discount",
        name:"Speacial office table",
        price:"$250",
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$280",
        moreImg:[table1.src,table7.src,table4.src,table6.src,],
    },
    {
        id:42,
        slug:createSlug('Simple office table'),
        image:table7.src,
        title:"upto 70% discount",
        name:"Simple office table",
        price:"$250",
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$280",
           moreImg:[table1.src,table7.src,table4.src,table6.src,], 
    },  
    {
        id:43,
        slug:createSlug('Normal office table'),
        image:table2.src,
        title:"upto 70% discount",
        name:"Normal office table",
        price:"$250",
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$280",
            moreImg:[table1.src,table7.src,table4.src,table6.src,],
    }, 
     {
        id:44,
        slug:createSlug('Comfort office table'),
        image:table3.src,
        title:"upto 70% discount",
        name:"Comfort office table",
        price:"$250",
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$280",
            moreImg:[table1.src,table7.src,table4.src,table6.src,],
    }, 
     {
        id:45,
        slug:createSlug('Comfort office table two'),
        image:table4.src,
        title:"upto 70% discount",
        name:"Comfort office table Two",
        price:"$250",
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$280",
            moreImg:[table1.src,table7.src,table4.src,table6.src,],
    },  
    {
        id:46,
        slug:createSlug('Comfort office table three'),
        image:table5.src,
        title:"upto 70% discount",
        name:"Comfort office table ",
        price:"$250",
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$280",
            moreImg:[table1.src,table7.src,table4.src,table6.src,],
    },  
    {
        id:47,
        slug:createSlug('Comfort office table 4'),
        image:table6.src,
        title:"upto 70% discount",
        name:"Comfort office table",
        price:"$250",
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$280",
            moreImg:[table3.src,table7.src,table4.src,table6.src,],
    },  
    {
        id:48,
        slug:createSlug('Comfort office table 8'),
        image:table7.src,
        title:"upto 70% discount",
        name:"Comfort office table",
        price:"$250",
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$280",
            moreImg:[table5.src,table7.src,table4.src,table6.src,],
    },
      {
        id:49,
        slug:createSlug('Comfort office table 9'),
        image:table7.src,
        title:"upto 70% discount",
        name:"Comfort office table",
        price:"$250",
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$280",
            moreImg:[table1.src,table7.src,table4.src,table6.src,],
    },  
    {
        id:50,
        slug:createSlug('Comfort office table10'),
        image:table4.src,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        title:"upto 70% discount",
        name:"Comfort office table",
        price:"$250",
        oldPrice:"$280",
        moreImg:[table1.src,table7.src,table4.src,table6.src,],
    },

//office book shelf
{
    id:51,
    slug:createSlug('Speacial office bookshelf'),
    image:bookshelf1.src,
    title:"upto 70% discount",
    name:"Speacial office bookshelf",
    price:"$250",
    des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
    oldPrice:"$280",
    moreImg:[bookshelf1.src,bookshelf7.src,bookshelf4.src,bookshelf6.src,],
},
{
    id:52,
    slug:createSlug('Simple office bookshelf'),
    image:bookshelf7.src,
    title:"upto 70% discount",
    name:"Simple office bookshelf",
    price:"$250",
    des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
    oldPrice:"$280",
       moreImg:[bookshelf1.src,bookshelf7.src,bookshelf4.src,bookshelf6.src,], 
},  
{
    id:53,
    slug:createSlug('Normal office bookshelf'),
    image:bookshelf2.src,
    title:"upto 70% discount",
    name:"Normal office bookshelf",
    price:"$250",
    des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
    oldPrice:"$280",
        moreImg:[bookshelf1.src,bookshelf7.src,bookshelf4.src,bookshelf6.src,],
}, 
 {
    id:54,
    slug:createSlug('Comfort office bookshelf'),
    image:bookshelf3.src,
    title:"upto 70% discount",
    name:"Comfort office bookshelf",
    price:"$250",
    des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
    oldPrice:"$280",
        moreImg:[bookshelf1.src,bookshelf7.src,bookshelf4.src,bookshelf6.src,],
}, 
 {
    id:55,
    slug:createSlug('Comfort office bookshelf two'),
    image:bookshelf4.src,
    title:"upto 70% discount",
    name:"Comfort office bookshelf Two",
    price:"$250",
    des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
    oldPrice:"$280",
        moreImg:[bookshelf1.src,bookshelf7.src,bookshelf4.src,bookshelf6.src,],
},  
{
    id:56,
    slug:createSlug('Comfort office bookshelf three'),
    image:bookshelf5.src,
    title:"upto 70% discount",
    name:"Comfort office bookshelf ",
    price:"$250",
    des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
    oldPrice:"$280",
        moreImg:[bookshelf1.src,bookshelf7.src,bookshelf4.src,bookshelf6.src,],
},  
{
    id:57,
    slug:createSlug('Comfort office bookshelf 4'),
    image:bookshelf6.src,
    title:"upto 70% discount",
    name:"Comfort office bookshelf",
    price:"$250",
    des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
    oldPrice:"$280",
        moreImg:[bookshelf3.src,bookshelf7.src,bookshelf4.src,bookshelf6.src,],
},  
{
    id:58,
    slug:createSlug('Comfort office bookshelf 8'),
    image:bookshelf7.src,
    title:"upto 70% discount",
    name:"Comfort office bookshelf",
    price:"$250",
    des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
    oldPrice:"$280",
        moreImg:[bookshelf5.src,bookshelf7.src,bookshelf4.src,bookshelf6.src,],
},
  {
    id:59,
    slug:createSlug('Comfort office bookshelf 9'),
    image:bookshelf7.src,
    title:"upto 70% discount",
    name:"Comfort office bookshelf",
    price:"$250",
    des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
    oldPrice:"$280",
        moreImg:[bookshelf1.src,bookshelf7.src,bookshelf4.src,bookshelf6.src,],
},  
{
    id:60,
    slug:createSlug('Comfort office bookshelf10'),
    image:bookshelf4.src,
    des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
    title:"upto 70% discount",
    name:"Comfort office bookshelf",
    price:"$250",
    oldPrice:"$280",
    moreImg:[bookshelf1.src,bookshelf7.src,bookshelf4.src,bookshelf6.src,],
},


]