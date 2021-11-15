import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { getTokenSourceMapRange } from 'typescript';
import { StringDto } from '../models/string-dto';
import { catchError } from "rxjs/operators"
import { PulseDto } from '../models/pulse-dto';
import { MessageServiceService } from '../message-service.service';
import { Card } from '../models/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() card:Card = {} as Card

  constructor(private messageService:MessageServiceService) { }

  ngOnInit(): void {}

  send(code:string) {
    this.messageService.send(this.card.title + ' ' + code)
  }
}
