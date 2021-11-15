import { Component, OnInit } from '@angular/core';
import { Card } from '../models/card';

@Component({
  selector: 'app-card-block',
  templateUrl: './card-block.component.html',
  styleUrls: ['./card-block.component.css']
})
export class CardBlockComponent implements OnInit {

  cards:Card[] = [{
    title:"ToDoApp",
    text:"This is the simplest application that I was able to use to learn proper full-stack development. When I started this app I knew nothing about front-end development so started from vanilla js. I quickly learned that programming client with vanilla js is quite pointless and moved to jquery. Jquery code quickly became quite chaotic. I was aware then that better frameworks structure code better so I moved to Angular with typescript as the ultimate solution. This was an interesting course in the history of evolution in front-end development for me.",
    img:"assets/images/img1.png",
    app:"https://morning-coast-72770.herokuapp.com/",
    repo:"https://github.com/Luke1024/ToDo_fullStackApp"},
    {
      title:"TradingApp",
      text:"This app is my earlier project '<a href='https://github.com/Luke1024/financial-analytics'>https://github.com/Luke1024/financial-analytics</a>' extremely simplified to actually make it possible to finish it in a reasonable time (or finish at all) and show it as a portfolio project. The idea for this app came to me naturally because I was engaged in trading earlier in my career. This app can simulate trading on the forex market on EUR/USD currency pair. App using external API to update EUR/USD exchange rate in real-time every 5 minutes (limits of free API) and using this data to compute profits and balance of accounts created by a user.",
      img:"assets/images/img2.bmp",
      app:"https://protected-stream-68029.herokuapp.com/",
      repo:"https://github.com/Luke1024/ToDo_fullStackApp"}]


  constructor() { 

  }

  ngOnInit(): void {
  }

}
