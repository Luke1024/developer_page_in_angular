import { Injectable } from "@angular/core";
import { DescriptionDto } from "../models/description-dto";
import { DescriptionImageDto } from "../models/description-image-dto";
import { DescriptionPartDto } from "../models/description-part-dto";

@Injectable({
    providedIn: 'root'
})
export class Descriptions {


    private todoPart1: DescriptionPartDto = {
        description: "This is my first application in which I connected Spring Boot and Angular together.\n" +
            "When I started this app I knew nothing about front-end development. \n" +
            "I started from scratch in pure javascript which become completely inefficient instantly.\n" +
            "Plus is that I now understand fully why frameworks were developed.\n" +
            "Next in line was jQuery. This was much better but lacked efficient code structurization.\n" +
            "Now I was ready to use something completely modern so I used Angular.",
        containImage: true,
        imageTop: true,
        image: {
            width: 800,
            height: 670,
            imageUrl: "assets/images/todo/todo_1.jpg",
            description: ""
        }
    };
    
    private todoPart2: DescriptionPartDto = {
        description: "",
        containImage: true,
        imageTop: true,
        image: {
            width: 800,
            height: 750,
            imageUrl: "assets/images/todo/todo_2.jpg",
            description: "You can create an account to store tasks."
        }
    };
    
    private todoPart3: DescriptionPartDto = {
        description: "",
        containImage: true,
        imageTop: false,
        image: {
            width: 800,
            height: 90,
            imageUrl: "assets/images/todo/todo_3.jpg",
            description: "Backend messages and status codes are shown under the menu." 
        } as DescriptionImageDto
    };
    
    todoProjectDescription: DescriptionDto = {
        title: "TodoApp",
        intro: "My first application using Angular and Spring Boot at the same time.",
        descriptionPartDtos: [this.todoPart1, this.todoPart2, this.todoPart3],
        buttonDtos: [
            {
                buttonDescription: "Open github repository", 
                buttonUrl: "https://github.com/Luke1024/ToDo_fullStackApp"
            }
        ]
    };









    private tradingPart1: DescriptionPartDto = {
        description: "This app is my earlier project (https://github.com/Luke1024/financial-analytics)" +  
         " extremely simplified to actually make it possible to finish it in a reasonable time" +       
          " (or finish at all) and show it as a portfolio project. " +       
          "The idea for this app came to me naturally because I was involved in trading earlier in my career.\n" +       
          "This app can simulate trading on the forex market on EUR/USD currency pair." +       
           " The app is using external API to update EUR/USD exchange rate in real-time every 5 minutes" +       
           " (limits of free API) and uses this data to compute profits and balance of accounts created by a user.",
        containImage: true,
        imageTop: true,
        image: {
            width: 800,
            height: 600,
            imageUrl: "/images/image/8",
            description: "Current market data is downloaded in real-time and plotted on the chart."  
        }
    };  

    private tradingPart2: DescriptionPartDto = {
        description: "",  
        containImage: true,
        imageTop: true,
        image: {
            width: 800,
            height: 600,
            imageUrl: "/images/image/9",  
            description: "It's possible to open multiple accounts and multiple orders within a single account."
        }
    };  

    tradingProjectDescription: DescriptionDto = {
        title: "Trading App",
        intro: "This app is simulating forex trading on EUR/USD currency pair.",
        descriptionPartDtos: [this.tradingPart1, this.tradingPart2],
        buttonDtos: [
            {
                buttonDescription: "Open github repository",
                buttonUrl: "https://github.com/Luke1024/TradingApp"
            }
        ]
    };









    private thisPart1: DescriptionPartDto = {
    description: "This page is my first occasion for some fun in CSS and to try some styling." +
        " I caught some neumorphic vibe and tried to implement it." +
        " This is not the final version but I definitely will try to have more design fun with frontends" +
        " instead of focusing only on basic functionality. This page has also some user tracking functionality." +
        " Yes, I could have used hotjar or google analytics but sometimes it's fun to implement something like this by myself.",
    containImage: true,
    imageTop: true,
    image: {
        width: 800,
        height: 800,
        imageUrl: "/images/image/3",
        description: ""
    }
};

    private thisPart2: DescriptionPartDto = {
        description: "WARNING! Api wchich is exposing endpoint with ",
        containImage: true,
        imageTop: true,
        image: {
            width: 800,
            height: 800,
            imageUrl: "/images/image/4",
            description: ""
        }
    };

    thisPage: DescriptionDto = {
        title:"This page",
        intro:"",
        descriptionPartDtos:[this.thisPart1, this.thisPart2],
        buttonDtos: [
            {
                buttonDescription: "Open github repository with developer page.",
                buttonUrl: "https://github.com/Luke1024/developer_page_in_angular",
            }
        ],
    };









    private progressPart1:DescriptionPartDto = {
        description: "This is what the name implies. Although it is also animated and configurable. " +
        "I had fun with making percentage display looking like lcd screen.",
        containImage: true,
        imageTop: true,
        image: {
            width:800,
            height:800,
            imageUrl:"",
            description:""
        }
    }

    private progressPart2:DescriptionPartDto = {
        description:"",
        containImage:true,
        imageTop:true,
        image: {
            width:800,
            height:800,
            imageUrl:"",
            description:""
        }
    }

    progress:DescriptionDto = {
        title:"Circular progress bar",
        intro:"",
        descriptionPartDtos:[this.progressPart1, this.progressPart2],
        buttonDtos: [
            {
                buttonDescription: "Open github repository",
                buttonUrl:"https://github.com/Luke1024/Circular_progress_bar_in_angular",
            }
        ]
    }
}