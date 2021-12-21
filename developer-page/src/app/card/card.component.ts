import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Card } from '../models/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() card:Card = {} as Card;
  @Output() cardEmit = new EventEmitter<Card>();

  constructor() { }

  ngOnInit(): void {
  }

  loadModal(){
    this.cardEmit.emit(this.card);
  }
}
