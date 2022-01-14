import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private scroller:ViewportScroller) { }

  ngOnInit(): void {
  }

  model = "home";

  home(){
    this.scroller.scrollToAnchor("intro");
  }

  portfolio(){
    this.scroller.scrollToAnchor("portfolio");
  }

  about(){
    this.scroller.scrollToAnchor("about");
  }

  contact(){
    this.scroller.scrollToAnchor("contact");
    console.log("navigate");
  }

}
