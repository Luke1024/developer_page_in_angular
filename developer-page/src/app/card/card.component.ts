import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { getTokenSourceMapRange } from 'typescript';
import { StringDto } from '../models/string-dto';
import { catchError } from "rxjs/operators"
import { PulseDto } from '../models/pulse-dto';
import { MessageServiceService } from '../message-service.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  private storageKey = "local_token"

  private token = ""

  private rootUrl = "http://localhost:8080/input"
  private tokenUrl = this.rootUrl + "/token"
  private pulseUrl = this.rootUrl + "/load"

  private pingingIntervalInSeconds = 15;
  private operationsStorage:string[] = []

  constructor(private http:HttpClient, private messageService:MessageServiceService) { }

  ngOnInit(): void {
    this.messageService.getToken()
    this.runTimer()
  }

  //solve operation storage

  send(code:string){
    this.messageService.send(code);
    this.pingingIntervalInSeconds = 15;
  }

  private runTimer(){
    setInterval(() => {
      this.pingingIntervalInSeconds--;
      if(this.pingingIntervalInSeconds==0){
        this.send("ping")
      }
    },1000)
  }
}
