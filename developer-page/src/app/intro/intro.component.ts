import { Component, OnInit } from '@angular/core';
import { MessageServiceService } from '../message-service/message-service.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {

  constructor(private messengerService:MessageServiceService) { }

  ngOnInit(): void {
  }

  send(){
    this.messengerService.send("intro_hover");
  }
}
