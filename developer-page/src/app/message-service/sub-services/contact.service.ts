import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ContactDto } from 'src/app/models/contact-dto';
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
      return new Observable(observer => {
        if(this.isTokenActive()){
          contact.token = this.tokenStatus.token;
          this.http.put<boolean>(this.url.contactSaveUrl + "/",contact, {observe:'response'})
          .pipe(catchError(this.handleError("post account"))).subscribe(response => {
            observer.next(this.analyzeResponse(response));
          });
        } else {
          return Observable.arguments(false);
        }
      })
    }

    private analyzeResponse(response:any):boolean{
      if(response != null){
        if(response.status==200){
          return true;
        }
      }
      return false;
    }

    private isTokenActive():boolean {
      return this.tokenStatus.status;
    }

    private handleError<T>(operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
        console.error(error + ` ${operation} failed: ${error.message}`);
        return of(result as T);
    };
  }
  }
