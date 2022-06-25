import { Component, OnInit } from '@angular/core';
import { BackendConnectorService } from '../message-service/backend-connector-service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {

  constructor(private messengerService:BackendConnectorService) { }

  ngOnInit(): void {
  }

  send(){
    this.messengerService.send("intro_hover");
  }
}
