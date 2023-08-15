import { Injectable } from "@angular/core";
import { ProjectMiniatureDto } from "../models/project-miniature-dto"

@Injectable({
    providedIn: 'root'
})
export class Miniatures {

    todo:ProjectMiniatureDto = {
        id:1,
        title:"TodoApp",
        technologies:"Angular/Spring Boot",
        miniatureUrl:"assets/images/todo/todo_2.jpg",
      } as ProjectMiniatureDto;

    trading:ProjectMiniatureDto = {
        id:2,
        title:"TradingApp",
        technologies:"Angular/Spring Boot",
        miniatureUrl:"assets/images/trading/trading_1.jpg",
      } as ProjectMiniatureDto;

    thispage:ProjectMiniatureDto = {
        id:3,
        title:"This page",
        technologies:"Angular",
        miniatureUrl:"assets/images/page/this_page_1.jpg"
    } as ProjectMiniatureDto;

    progress:ProjectMiniatureDto = {
        id:4,
        title:"Circular progress bar",
        technologies:"Angular",
        miniatureUrl:"assets/images/progress/circular_bar_2.jpg"
    } as ProjectMiniatureDto;

    messenger:ProjectMiniatureDto = {
        id:5,
        title:"Messenger",
        technologies:"Angular/Spring Boot",
        miniatureUrl:"assets/images/messenger/messenger_2.jpg"
    } as ProjectMiniatureDto;
}