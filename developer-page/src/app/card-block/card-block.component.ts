import { Component, HostBinding, OnInit } from '@angular/core';
import { MessageServiceService } from '../message-service.service';
import { Card } from '../models/card';

@Component({
  selector: 'app-card-block',
  templateUrl: './card-block.component.html',
  styleUrls: ['./card-block.component.css']
})
export class CardBlockComponent implements OnInit {


  constructor(private message:MessageServiceService) { }

  ngOnInit(): void {
    //this.messageService.getToken()
  }

  send(code:string){
    //this.messageService.send(code)
  }

  loadModal(){
    this.modal = "initial";
  }

  closeModal(){
    this.modal = "none";
  }

  @HostBinding("style.--modal") modal = "none";

}
