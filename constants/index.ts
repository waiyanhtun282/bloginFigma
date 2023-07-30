import Image from "next/image";
import { Card1, Card2, Card3, Card4, Card5, Card6, Card7, Card8, Card9, Man2, Man3, Man4, ManImg } from "@/public";
type CardType = {
    id:number;
    image:string;
    man:string;
    name:string;
}

type NavType ={
    id:number;
    name:string;
    pageLink:string;
}

type paraArrType = {
    id:number;
    title:string;
    para:string;
}


export const cardArr:CardType[] =[
    {
        id:1,
        image:"/Rectangle1.png",
        man:"/Image6.png",
        name:"Tracey Wilson",

    },
    {
        id:2,
        image:"/Rectangle2.png",
        man:"/Image2.png",
        name:"Jason Francisco",

    },
    {
        id:3,
        image:"/Rectangle3.png",
        man:"/Image4.png",
        name:"Elizabeth Slavin",

    },
    {
        id:4,
        image:"/Rectangle4.png",
        man:"/Image5.png",
        name:"Ernie Smith",

    },
    {
        id:5,
        image:"/Rectangle5.png",
        man:"/Image4.png",
        name:"Eric Smith",

    },
    {
        id:6,
        image:"/Rectangle6.png",
        man:"/Image6.png",
        name:"Tracey Wilson",

    },
    {
        id:7,
        image:"/Rectangle7.png",
        man:"/Image4.png",
        name:"Jason Francisco",

    },
    {
        id:8,
        image:"/Rectangle8.png",
        man:"/Image5.png",
        name:"Elizabeth Slavin",

    },
    {
        id:9,
        image:"/Rectangle9.png",
        man:"/Image2.png",
        name:"Ernie Smith",

    },
   
    
    
    
];


export const nav:NavType[] = [
    {
        id:1,
        name:"Home",
        pageLink:'/',

    },
    {
        id:2,
        name:"Blog",
        pageLink:'/blog',

    },
    {
        id:3,
        name:"SinglePost",
        pageLink:'/single',

    },
    {
        id:4,
        name:"Pages",
        pageLink:'/pages',

    },
    {
        id:5,
        name:"Contact",
        pageLink:'/contact',

    }
];

export const paraArr:paraArrType[]= [
    {
        id:12,
        title:"Pack Lightly and Smartly",
        para:"Packing can be a daunting task, but with some careful planning and smart choices, you can pack light and efficiently. Start by making a packing list and sticking to it, focusing on versatile and comfortable clothing that can be mixed and matched. Invest in quality luggage and packing organizers to maximize space and minimize wrinkles."
    },
    {
        id:13,
        title:"Stay Safe and Healthy",
        para:"Traveling can expose you to new environments and potential health risks, so it's crucial to take precautions to stay safe and healthy. This includes researching any required vaccinations or medications, staying hydrated, washing your hands frequently, and using sunscreen and insect repellent. It's also essential to keep your valuables safe and secure and to be aware of your surroundings at all times."
    },
    {
        id:14,
        title:"Immerse Yourself in the Local Culture",
        para:"One of the most rewarding aspects of traveling is immersing yourself in the local culture and customs. This includes trying local cuisine, attending cultural events and festivals, and interacting with locals. Learning a few phrases in the local language can also go a long way in making connections and showing respect.   "
    },
    {
        
        id:15,
        title:"Capture Memories",
        para:"Finally, don't forget to capture memories of your journey. Whether it's through photographs, journaling, or souvenirs, preserving the moments and experiences of your travels can bring joy and nostalgia for years to come. However, it's also essential to be present in the moment and not let technology distract you from the beauty of your surroundings."
    },
    {
        id:16,
        title:"Conclusion:",
        para:"Traveling is an art form that requires a blend of planning, preparation, and spontaneity. By following these tips and tricks, you can make the most of your journey and create memories that last a lifetime. So pack your bags, embrace the adventure, and enjoy the ride."
    },
]