import { ViewportScroller } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { PulseDto } from 'src/app/models/pulse-dto';
import { TokenStatus } from '../message-models/token-status';
import { UrlService } from './url.service';

@Injectable({
  providedIn: 'root'
})
export class ActionService {

  serviceStatus = new Subject<boolean>();

  private actionBatchSendEverySeconds = 5;
  private actionTimerValue = this.actionBatchSendEverySeconds;

  private operationsStorage:string[] = [];
  private tokenStatus:TokenStatus = {status:false, token:""};

  constructor(private http:HttpClient, private url:UrlService) {}

  start() {
    this.runBatchTimer()
  }

  public send(code:string) {
    let now = new Date();
    let action = "T:" + now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds() + ":" + now.getMilliseconds() +
     " S:" + window.scrollY.toFixed(0) + " V:" + window.innerWidth.toFixed(0) + ":" + window.innerHeight.toFixed(0) + " C:" + code;
    this.operationsStorage.push(action);
    console.log(this.operationsStorage.length);
  }

  public setTokenStatus(tokenStatus:TokenStatus){
    this.tokenStatus = tokenStatus;
  }

  private runBatchTimer(){
    setInterval(() => {
      this.actionTimerValue--;
      if(this.actionTimerValue==0){
        this.actionTimerValue = this.actionBatchSendEverySeconds;
        this.sendMessagesInBufor();
      }
    },1000)    
  }

  public sendMessagesInBufor(){
    if(this.isTokenActive()){
      this.postMessage(this.operationsStorage).subscribe(response => {
        console.log("post response: " + response);
        if(response){
          this.operationsStorage = [];
          this.serviceStatus.next(true);
        } else {
          console.log("problem with action sending, trying to reload token...");
          this.tokenStatus.status = false; // self blocking
          this.serviceStatus.next(false);
        }
      });
    }
  }

  private isTokenActive(){
    return this.tokenStatus.status;
  }

  private postMessage(code:string[]):Observable<boolean>{
    var pulse = {token:this.tokenStatus.token, actions:code} as PulseDto
    return this.http.post<boolean>(this.url.pulseUrl, pulse).pipe(catchError(this.handleError("post action data")));
  }
  
  private handleError(operation = 'operation') {
    return (error: any): Observable<boolean> => {
      //console.error(error + `${operation} failed: ${error.message}`); 
      return Observable.arguments(false);
    };
  }
}
