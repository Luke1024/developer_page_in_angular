import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MessageServiceService } from '../message-service/message-service.service';
import { Card } from '../models/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() card:Card = {} as Card;
  @Output() cardEmit = new EventEmitter<Card>();

  constructor(private messageService:MessageServiceService) { }

  ngOnInit(): void {
  }

  loadModal(){
    this.messageService.send("opening card: " + this.card.title);
    this.cardEmit.emit(this.card);
  }
}
