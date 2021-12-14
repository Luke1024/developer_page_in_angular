import { Component, OnInit } from '@angular/core';
import { BarConfig } from './bar-config';
import { CardConfig } from './card-config';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  cards:CardConfig[] = []

  java = {
    description: "Java",
    textColor: "orange",
    cardColor: "rgb(40,40,40)",
    descriptionBlurAnimeDelay: "1s",
    descriptionBlurAnimeDuration: "2s",
    cardAnimeDelay: "0s",
    cardAnimeDuration: "2s",
    barConfig:{
      percentage:65,
      animationTimeS:2,
      animationDelay:0,
      centerColor:"rgb(150,150,150)",
      barColor:"rgb(179, 116, 0)",
      progressTextColor:"rgba(0,0,0,0.8)",
      backgroundColor:"rgb(40,40,40)",
      fadeInTimeS:2,
      fadeInDelayS:1
    } as BarConfig,
  }  as CardConfig;

  springBoot = {
    description: "Spring Boot",
    textColor: "green",
    cardColor: "rgb(40,40,40)",
    descriptionBlurAnimeDelay: "1.2s",
    descriptionBlurAnimeDuration: "2s",
    cardAnimeDelay: "0.2s",
    cardAnimeDuration: "2s",
    barConfig:{
      percentage:55,
      animationTimeS:2,
      animationDelay:0.2,
      centerColor:"rgb(150,150,150)",
      barColor:"green",
      progressTextColor:"rgba(0,0,0,0.8)",
      backgroundColor:"rgb(40,40,40)",
      fadeInTimeS:2,
      fadeInDelayS:1.2
    } as BarConfig,
  }  as CardConfig;

  angular = {
    description: "Angular",
    textColor: "red",
    cardColor: "rgb(40,40,40)",
    descriptionBlurAnimeDelay: "1.4s",
    descriptionBlurAnimeDuration: "2s",
    cardAnimeDelay: "0.4s",
    cardAnimeDuration: "2s",
    barConfig:{
      percentage:50,
      animationTimeS:2,
      animationDelay:0.4,
      centerColor:"rgb(150,150,150)",
      barColor:"red",
      progressTextColor:"rgba(0,0,0,0.8)",
      backgroundColor:"rgb(40,40,40)",
      fadeInTimeS:2,
      fadeInDelayS:1.4
    } as BarConfig,
  }  as CardConfig;

  typeScript = {
    description: "TypeScript",
    textColor: "blue",
    cardColor: "rgb(40,40,40)",
    descriptionBlurAnimeDelay: "1.6s",
    descriptionBlurAnimeDuration: "2s",
    cardAnimeDelay: "0.6s",
    cardAnimeDuration: "2s",
    barConfig:{
      percentage:45,
      animationTimeS:2,
      animationDelay:0.6,
      centerColor:"rgb(150,150,150)",
      barColor:"blue",
      progressTextColor:"rgba(0,0,0,0.8)",
      backgroundColor:"rgb(40,40,40)",
      fadeInTimeS:2,
      fadeInDelayS:1.6
    } as BarConfig,
  }  as CardConfig;

  css = {
    description: "CSS",
    textColor: "blue",
    cardColor: "rgb(40,40,40)",
    descriptionBlurAnimeDelay: "1.8s",
    descriptionBlurAnimeDuration: "2s",
    cardAnimeDelay: "0.8s",
    cardAnimeDuration: "2s",
    barConfig:{
      percentage:40,
      animationTimeS:2,
      animationDelay:0.8,
      centerColor:"rgb(150,150,150)",
      barColor:"blue",
      progressTextColor:"rgba(0,0,0,0.8)",
      backgroundColor:"rgb(40,40,40)",
      fadeInTimeS:2,
      fadeInDelayS:1.8
    } as BarConfig,
  }  as CardConfig;

  html = {
    description: "HTML",
    textColor: "red",
    cardColor: "rgb(40,40,40)",
    descriptionBlurAnimeDelay: "2s",
    descriptionBlurAnimeDuration: "2s",
    cardAnimeDelay: "1s",
    cardAnimeDuration: "2s",
    barConfig:{
      percentage:40,
      animationTimeS:2,
      animationDelay:1,
      centerColor:"rgb(150,150,150)",
      barColor:"red",
      progressTextColor:"rgba(0,0,0,0.8)",
      backgroundColor:"rgb(40,40,40)",
      fadeInTimeS:2,
      fadeInDelayS:2
    } as BarConfig,
  }  as CardConfig;

  sql = {
    description: "SQL",
    textColor: "blue",
    cardColor: "rgb(40,40,40)",
    descriptionBlurAnimeDelay: "2.2s",
    descriptionBlurAnimeDuration: "2s",
    cardAnimeDelay: "1.2s",
    cardAnimeDuration: "2s",
    barConfig:{
      percentage:35,
      animationTimeS:2,
      animationDelay:1.2,
      centerColor:"rgb(150,150,150)",
      barColor:"blue",
      progressTextColor:"rgba(0,0,0,0.8)",
      backgroundColor:"rgb(40,40,40)",
      fadeInTimeS:2,
      fadeInDelayS:2.2
    } as BarConfig,
  }  as CardConfig;

  ngOnInit(): void {
    this.cards.push(this.java, this.springBoot, this.angular,
       this.typeScript, this.css, this.html, this.sql);
  }
}
