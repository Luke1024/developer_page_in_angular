import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MessageServiceService } from '../message-service.service';
import { Card } from '../models/card';

@Component({
  selector: 'app-card-modal',
  templateUrl: './card-modal.component.html',
  styleUrls: ['./card-modal.component.css']
})
export class CardModalComponent implements OnInit {

  constructor(private messageService:MessageServiceService) { }

  @Input() card = {} as Card;
  @Output() close = new EventEmitter();

  ngOnInit(): void {

  }

  send(code:string){
    this.messageService.send(code);
  }

  closeModal(){
    this.close.emit();
  }
}
