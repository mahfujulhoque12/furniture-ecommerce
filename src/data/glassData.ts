import glass1 from '/public/glass/glass1.png';
import glass2 from '/public/glass/glass2.png';
import glass3 from '/public/glass/glass3.png';
import glass4 from '/public/glass/glass4.png';
import glass5 from '/public/glass/glass5.png';
import glass6 from '/public/glass/glass6.png';
import glass7 from '/public/glass/glass7.png';
import glass8 from '/public/glass/glass8.png';
import glass9 from '/public/glass/glass9.png';
import glass10 from '/public/glass/glass10.png';






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
        id:801,
        slug:createSlug('Speacial glass one'),
        image:glass1.src,
        title:"upto 62% discount",
        name:"Buy furniture for your glass",
        price:280,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$380",
        moreImg:[glass1.src,glass7.src,glass4.src,glass6.src,],
    },
    {
        id:802,
        slug:createSlug('Speacial glass two'),
        image:glass2.src,
        title:"upto 62% discount",
        name:"Buy furniture for your glass",
        price:280,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$380",
        moreImg:[glass1.src,glass7.src,glass4.src,glass6.src,],
    }, 

     {
        id:803,
        slug:createSlug('Speacial glass three'),
        image:glass3.src,
        title:"upto 62% discount",
        name:"Buy furniture for your glass",
        price:280,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$380",
        moreImg:[glass4.src,glass7.src,glass4.src,glass6.src,],
    }, 
     {
        id:804,
        slug:createSlug('Speacial glass four'),
        image:glass5.src,
        title:"upto 62% discount",
        name:"Buy furniture for your glass",
        price:280,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$380",
        moreImg:[glass6.src,glass7.src,glass4.src,glass6.src,],
    },  
    {
        id:805,
        slug:createSlug('Speacial glass five'),
        image:glass7.src,
        title:"upto 62% discount",
        name:"Buy furniture for your glass",
        price:280,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$380",
        moreImg:[glass10.src,glass7.src,glass4.src,glass6.src,],
    }, 
     {
        id:806,
        slug:createSlug('Speacial glass six'),
        image:glass4.src,
        title:"upto 62% discount",
        name:"Buy furniture for your glass",
        price:280,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$380",
        moreImg:[glass1.src,glass7.src,glass4.src,glass6.src,],
    },  
    {
        id:807,
        slug:createSlug('Speacial glass seven'),
        image:glass8.src,
        title:"upto 62% discount",
        name:"Buy furniture for your glass",
        price:280,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$380",
        moreImg:[glass1.src,glass7.src,glass4.src,glass6.src,],
    },  
    {
        id:808,
        slug:createSlug('Speacial glass eight'),
        image:glass9.src,
        title:"upto 62% discount",
        name:"Buy furniture for your glass",
        price:280,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$380",
        moreImg:[glass1.src,glass7.src,glass4.src,glass6.src,],
    }, 
     {
        id:809,
        slug:createSlug('Speacial glass nine'),
        image:glass10.src,
        title:"upto 62% discount",
        name:"Buy furniture for your glass",
        price:280,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$380",
        moreImg:[glass1.src,glass7.src,glass4.src,glass6.src,],
    }, 

     {
        id:810,
        slug:createSlug('Speacial glass ten'),
        image:glass6.src,
        title:"upto 62% discount",
        name:"Buy furniture for your glass",
        price:280,
        des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has..",
        oldPrice:"$380",
        moreImg:[glass1.src,glass7.src,glass4.src,glass6.src,],
    },
]