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
  cards2:Card[] = []
  cardModal:Card = {} as Card;

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
    let card = {
      title:"TodoApp",
      tech:"Angular/Spring Boot",
      imgUrl:"assets/images/img1.png",
      img2Url:"assets/images/img2.bmp",
      description:"This is the simplest application that I was able to use to learn proper full-stack development. When I started this app I knew nothing about front-end development so started from vanilla js. I quickly learned that programming client with vanilla js is quite pointless and moved to jquery. Jquery code quickly became quite chaotic. I was aware then that newer frameworks structure code better so I moved to Angular with typescript as the ultimate solution. This was an interesting course in the history of evolution in front-end development for me.",
      appUrl:"https://morning-coast-72770.herokuapp.com/",
      repoUrl:"https://github.com/Luke1024/ToDo_fullStackApp"
    } as Card;

    this.cards.push(card,card,card);
    this.cards2.push(card);
  }

  send(code:string){
    //this.messageService.send(code)
    console.log(code);
  }

  loadModal(card:Card){
    this.modal = "initial";
    this.cardModal = card;
  }

  closeModal(){
    this.modal = "none";
  }

  @HostBinding("style.--modal_display") modal = "none";


}
