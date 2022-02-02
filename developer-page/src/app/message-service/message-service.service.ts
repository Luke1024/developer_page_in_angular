import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { ContactDto } from '../models/contact-dto';
import { TokenStatus } from './message-models/token-status';
import { ActionService } from './sub-services/action.service';
import { ContactService } from './sub-services/contact.service';
import { TokenService } from './sub-services/token.service';

@Injectable({
  providedIn: 'root'
})
export class MessageServiceService {

  connectedStatus = new Subject<boolean>();

  private tokenStatus:TokenStatus = {status:false, token:""}

  private storageKey = "local_token";

  private rootUrl = "https://murmuring-caverns-97353.herokuapp.com/input";
  private tokenUrl = this.rootUrl + "/token";
  private pulseUrl = this.rootUrl + "/load";
  private contactSaveUrl = this.rootUrl + "/contact";
  private contactInfoUrl = this.rootUrl + "/contact/info";

  constructor(private http:HttpClient,
     private tokenService:TokenService,
      private actionService:ActionService,
      private contactService:ContactService) { }

  public startMessageService() {
    this.tokenService.getToken(this.tokenUrl, this.storageKey).subscribe(data => {
      this.tokenStatus = data;
      this.ifTokenCorrectUnlockDataCollectingProcesses();
    });
  }

  public send(code:string) {
    this.actionService.send(code);
  }

  public saveContact(contact:ContactDto):Observable<any> {
    return this.contactService.saveContact(contact);
  }

  private ifTokenCorrectUnlockDataCollectingProcesses() {
    if(this.tokenStatus.status){
      this.actionService.setService(this.tokenStatus, this.pulseUrl);
      this.contactService.setService(this.tokenStatus, this.contactInfoUrl);
      this.connectedStatus.next(true);
    }
  }
}