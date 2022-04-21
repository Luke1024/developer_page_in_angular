import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { MessageServiceService } from '../message-service/message-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private scroller:ViewportScroller, 
    private messageService:MessageServiceService) { }

  ngOnInit(): void {}

  model = "home";

  hover(){
    this.messageService.send("navbar_hover")
  }

  home(){
    this.messageService.send("intro_button_click");
    this.scroller.scrollToAnchor("intro");
  }

  portfolio(){
    this.messageService.send("portfolio_button_click");
    this.scroller.scrollToAnchor("portfolio");
  }

  about(){
    this.messageService.send("about_button_click");
    this.scroller.scrollToAnchor("about");
  }

  contact(){
    this.messageService.send("contact_button_click");
    this.scroller.scrollToAnchor("contact");
  }
}
