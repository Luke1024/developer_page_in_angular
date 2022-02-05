import { HttpClient } from '@angular/common/http';
import { Injectable, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Observable, of, pipe, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ContactDto } from '../models/contact-dto';
import { TokenStatus } from './message-models/token-status';
import { ActionService } from './sub-services/action.service';
import { ContactService } from './sub-services/contact.service';
import { TokenService } from './sub-services/token.service';
import { UrlService } from './sub-services/url.service';

@Injectable({
  providedIn: 'root'
})
export class MessageServiceService {

  connectedStatus = new Subject<boolean>();

  reconnectingAttempts = 3;
  reconnectingDelayS = 5; 

  tokenStatus:TokenStatus = {status:false, token:""}

  constructor(private http:HttpClient,
     private tokenService:TokenService,
      private actionService:ActionService,
      private contactService:ContactService) { }

  startMessageService() {
    this.actionService.start();
    console.log("downloading token");
    this.tokenService.getToken().subscribe(status => this.analyzeStatus(status));
    this.actionService.serviceStatus.subscribe(status => this.analyzeConnectionStatus(status));
  }

  downloadTokenOnly() {
    this.tokenService.getToken().subscribe(status => this.analyzeStatus(status));
  }

  private analyzeStatus(status:TokenStatus){
    this.tokenStatus = status;
    if(this.tokenStatus.status){
      this.startCommunicationProcesses();
    } else {
      this.tryToReconnect();
    }
  }

  private analyzeConnectionStatus(status:boolean) {
    if(!status){
      this.tryToReconnect();
    }
  }

  private startCommunicationProcesses() {
    console.log("starting communication processes");
    this.actionService.setTokenStatus(this.tokenStatus);
    this.contactService.setTokenStatus(this.tokenStatus);
    this.connectedStatus.next(true);
  }

  private tryToReconnect() {
    console.log("trying to reconnect");
    this.tokenStatus.status = false;
    this.connectedStatus.next(false);
    setTimeout(() => {
      if(this.reconnectingAttempts > 0) {
        this.reconnectingAttempts--;
        this.executeReconnectingProcedure();
      }
      ;
    },this.reconnectingDelayS*1000);
  }

  private executeReconnectingProcedure() {
    this.tokenService.pingServer().subscribe(response => {
      if(response){
        this.tokenService.resetToken();
        this.downloadTokenOnly();
      } else {
        this.tryToReconnect();
      }
    });
  }

  
  public send(code:string) {
    this.actionService.send(code);
  }

  public saveContact(contact:ContactDto):Observable<any> {
    return new Observable(observer => {
      this.contactService.saveContact(contact).subscribe(response => {
        observer.next(response);
        this.checkContactStatus(response);
      });
    })
  }

  private checkContactStatus(status:boolean) {
    if(!status && this.tokenStatus.status){
  
    }
  }
}