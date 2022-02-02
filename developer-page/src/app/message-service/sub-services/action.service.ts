import { ViewportScroller } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { PulseDto } from 'src/app/models/pulse-dto';
import { TokenStatus } from '../message-models/token-status';

@Injectable({
  providedIn: 'root'
})
export class ActionService {

  private disconnectActionRecordingAfterSeconds = 1800;

  private actionBatchSendEverySeconds = 5;
  private actionTimerValue = this.actionBatchSendEverySeconds;

  private pingingIntervalInSeconds = 60;
  private pingTimerValue = this.pingingIntervalInSeconds;
  private operationsStorage:string[] = [];
  private tokenStatus:TokenStatus = {status:false, token:""};
  private pulseUrl:string = "";

  constructor(private http:HttpClient) {}

  public startActionRecording() {
    this.runBatchTimer()
    this.runPingTimer()
  }

  public send(code:string){
    let now = new Date();
    this.pingTimerValue = this.pingingIntervalInSeconds;
    let action = "T:" + now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds() + ":" + now.getMilliseconds() +
     " S:" + window.scrollY.toFixed(0) + " V:" + window.innerWidth.toFixed(0) + ":" + window.innerHeight.toFixed(0) + " C:" + code;
    this.operationsStorage.push(action);
  }

  public setService(tokenStatus:TokenStatus, pulseUrl:string){
    this.tokenStatus = tokenStatus;
    this.pulseUrl = pulseUrl;
  }

  private runBatchTimer(){
    setInterval(() => {
      this.actionTimerValue--;
      if(this.actionTimerValue==0){
        this.actionTimerValue = this.actionBatchSendEverySeconds;
        this.sendMessagesInBufor();
      }
    })    
  }

  private runPingTimer(){
    setInterval(() => {
    this.pingTimerValue--;
      if(this.pingTimerValue==0){
        this.pingTimerValue = this.pingingIntervalInSeconds;
        this.send("ping");
      }
    },1000)
  }

  public sendMessagesInBufor(){
    if(this.operationsStorage.length > 0){
      if(this.isTokenActive()){
        this.postMessage(this.operationsStorage).subscribe(response => {
          if(response){
            this.operationsStorage = []
          } else {
            console.log("problem with action sending");
          }
        });
      }
    }
  }

  private isTokenActive(){
    return this.tokenStatus.status;
  }

  private postMessage(code:string[]):Observable<boolean>{
    var pulse = {token:this.tokenStatus.token, action:code} as PulseDto
    return this.http.post<boolean>(this.pulseUrl, pulse).pipe(catchError(this.handleError("post action data")));
  }
  
  private handleError(operation = 'operation') {
    return (error: any): Observable<boolean> => {
      console.error(error + `${operation} failed: ${error.message}`); 
      return Observable.arguments(false);
    };
  }
}
