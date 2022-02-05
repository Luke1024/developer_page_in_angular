import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ContactDto } from 'src/app/models/contact-dto';
import { ContactResponseDto } from 'src/app/models/contact-response-dto';
import { TokenStatus } from '../message-models/token-status';
import { UrlService } from './url.service';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private tokenStatus:TokenStatus = {status:false, token:""};

  status = new Subject<boolean>()

  constructor(private http:HttpClient, private url:UrlService) { }

    public setTokenStatus(tokenStatus:TokenStatus){
      this.tokenStatus = tokenStatus;
    }

    public saveContact(contact:ContactDto):Observable<boolean> {
      if(this.isTokenActive()){
        contact.token = this.tokenStatus.token;
       return this.http.put<boolean>(this.url.contactSaveUrl + "/",contact)
       .pipe(catchError(this.handleError("post account")))
      } else {
        return Observable.arguments(false);
      }
    }

    private isTokenActive():boolean {
      return this.tokenStatus.status;
    }

     private handleError(operation = 'operation') {
      return (error: any): Observable<boolean> => {
        console.error(error + `${operation} failed: ${error.message}`);
        return Observable.arguments(false);
      };
    }
  }
