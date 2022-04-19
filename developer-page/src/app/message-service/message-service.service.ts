import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Observable, of, pipe, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ContactDto } from '../models/contact-dto';
import { StringDto } from '../models/string-dto';
import { UrlService } from './sub-services/url.service';

@Injectable({
  providedIn: 'root'
})
export class MessageServiceService {

  connected:boolean = false;

  constructor(private http:HttpClient, private url:UrlService) { }

  startMessageService() {
    this.getAuth().subscribe(response => {
      if(this.isResponseTrue(response)){
        this.connected = true;
        console.log("Connected");
      }
    });
  }

  private getAuth():Observable<any> {
    return this.http.get(this.url.tokenUrl, {observe:'response', withCredentials:true});
  }

  private isResponseTrue(response:any){
    if(response != null){
      if(response.status==200){
        return true;
      }
    }
    return false;
  }
  
  public send(code:string) {
    if(this.connected){
      this.sendAction(this.encodeMessage(code));
    }
  }

  private sendAction(code:string){
    return this.http.post<boolean>(this.url.pulseUrl,{message:code} as StringDto, {observe:'response', withCredentials:true})
    .pipe(catchError(this.handleError("post action data"))).subscribe();
  }

  private encodeMessage(code:string):string {
    let now = new Date();
    return " s" + window.scrollY.toFixed(0) + " w" + window.innerWidth.toFixed(0) + "h" + window.innerHeight.toFixed(0) + " c_" + code;
  }

  public saveContact(contact:ContactDto):Observable<boolean> {
    return new Observable(observer => {
      if(this.connected){
        this.http.put<boolean>(this.url.contactSaveUrl + "/",contact, {observe:'response'})
        .pipe(catchError(this.handleError("post account"))).subscribe(response => {
          observer.next(this.isResponseTrue(response));
        });
      } else {
        return observer.next(false);
      }
    })
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error + ` ${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}