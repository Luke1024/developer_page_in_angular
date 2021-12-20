import { Component, HostBinding, OnInit } from '@angular/core';
import { MessageServiceService } from '../message-service.service';
import { Card } from '../models/card';

@Component({
  selector: 'app-card-block',
  templateUrl: './card-block.component.html',
  styleUrls: ['./card-block.component.css']
})
export class CardBlockComponent implements OnInit {

  cards:Card[] = []

  //modal Urls
  imageUrl:string = "";
  image2Url:string = "";
  title:string = "";
  description:string = "";
  appUrl:string = "";
  repoUrl:string = "";

  constructor(private message:MessageServiceService) { }

  ngOnInit(): void {
    //this.messageService.getToken()
    this.cards.push({
      title:"TodoApp",
      tech:"Angular/Spring Boot",
      imgUrl:"assets/images/img1.png",
      img2Url:"assets/images/img2.bmp",
      description:"This is the simplest application that I was able to use to learn proper full-stack development. When I started this app I knew nothing about front-end development so started from vanilla js. I quickly learned that programming client with vanilla js is quite pointless and moved to jquery. Jquery code quickly became quite chaotic. I was aware then that newer frameworks structure code better so I moved to Angular with typescript as the ultimate solution. This was an interesting course in the history of evolution in front-end development for me.",
      appUrl:"https://morning-coast-72770.herokuapp.com/",
      repoUrl:"https://github.com/Luke1024/ToDo_fullStackApp"
    } as Card);
  }

  send(code:string){
    //this.messageService.send(code)
    console.log(code);
  }

  loadModal(card:Card){
    this.modal = "initial";
    this.loadUrls(card);
  }

  closeModal(){
    this.modal = "none";
    this.cleanUrls();
  }

  loadUrls(card:Card){
    this.imageUrl = card.imgUrl;
    this.image2Url = card.img2Url;
    this.title = card.title;
    this.description = card.description;
    this.appUrl = card.appUrl;
    this.repoUrl = card.repoUrl;
  }

  cleanUrls(){
    this.imageUrl = "";
    this.image2Url = "";
    this.title = "";
    this.description = "";
    this.appUrl = "";
    this.repoUrl = "";
  }

  @HostBinding("style.--modal") modal = "none";


}
