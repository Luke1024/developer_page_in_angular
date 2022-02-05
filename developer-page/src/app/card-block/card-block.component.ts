import { Component, HostBinding, OnInit } from '@angular/core';
import { MessageServiceService } from '../message-service/message-service.service';
import { Card } from '../models/card';

@Component({
  selector: 'app-card-block',
  templateUrl: './card-block.component.html',
  styleUrls: ['./card-block.component.css']
})
export class CardBlockComponent implements OnInit {

  @HostBinding("style.--modal_display") modal = "none";

  cards:Card[] = []
  cards2:Card[] = []
  cardModal:Card = {} as Card;

  //modal Urls
  imageUrl:string = "";
  image2Url:string = "";
  title:string = "";
  description:string = "";
  appUrl:string = "";
  repoUrl:string = "";

  constructor(private messageService:MessageServiceService) { }

  ngOnInit(): void {
    //this.messageService.getToken()
    let cardToDo = {
      title:"TodoApp",
      tech:"Angular/Spring Boot",
      imgUrl:"assets/images/todo/img1.jpg",
      img2Url:"assets/images/todo/img2.jpg",
      description:"This is the simplest application that I was able to use to learn proper full-stack development. When I started this app I knew nothing about front-end development so started from vanilla js. I quickly learned that programming client with vanilla js is quite pointless and moved to jquery. Jquery code quickly became quite chaotic. I was aware then that newer frameworks structure code better so I moved to Angular with typescript as the ultimate solution. This was an interesting course in the history of evolution in front-end development for me.",
      appUrl:"https://morning-coast-72770.herokuapp.com/",
      appButton:true,
      repoUrl:"https://github.com/Luke1024/ToDo_fullStackApp"
    } as Card;

    let cardTrading = {
      title:"TradingApp",
      tech:"Angular/Spring Boot",
      imgUrl:"assets/images/trading/img1.jpg",
      img2Url:"assets/images/trading/img2.jpg",
      description:"This app is my earlier project (https://github.com/Luke1024/financial-analytics) extremely simplified to actually make it possible to finish it in a reasonable time (or finish at all) and show it as a portfolio project. The idea for this app came to me naturally because I was engaged in trading earlier in my career. This app can simulate trading on the forex market on EUR/USD currency pair. App using external API to update EUR/USD exchange rate in real-time every 5 minutes (limits of free API) and using this data to compute profits and balance of accounts created by a user.",
      appUrl:"https://protected-stream-68029.herokuapp.com/",
      appButton:true,
      repoUrl:"https://github.com/Luke1024/TradingApp"
    } as Card;

    let cardDeveloper = {
      title:"This page",
      tech:"Angular/Spring Boot",
      imgUrl:"assets/images/page/img1.jpg",
      img2Url:"assets/images/page/img2.jpg",
      description:"This page is my first occasion for some fun in CSS and to try some styling. I caught some neumorphic vibe and tried to implement it. This is not the final version but I definitely will try to have more design fun with frontends instead of focusing only on basic functionality. This page has also some user tracking functionality. Yes, I could have used hotjar or google analytics but sometimes it's fun to implement something like this by myself.",
      appUrl:"",
      appButton:false,
      repoUrl:"https://github.com/Luke1024/developer_page_in_angular"
    } as Card;

    let cardCircularBar = {
      title:"Circular progress bar",
      tech:"Angular",
      imgUrl:"assets/images/bar/img1.jpg",
      img2Url:"assets/images/bar/img2.jpg",
      description:"This is what the name implies. Although it is also animated and configurable.",
      appUrl:"",
      appButton:false,
      repoUrl:"https://github.com/Luke1024/Circular_progress_bar_in_angular"
    } as Card;

    this.cards.push(cardDeveloper, cardTrading, cardToDo);
    this.cards2.push(cardCircularBar);
  }

  send(){
    this.messageService.send("projects hover");
  }

  loadModal(card:Card){
    this.cardModal = card;
    this.messageService.send("closing modal: " + this.cardModal.title);
    this.modal = "initial";
  }

  closeModal(){
    this.cardModal = {} as Card;
    this.modal = "none";
    this.messageService.send("")
  }
}
