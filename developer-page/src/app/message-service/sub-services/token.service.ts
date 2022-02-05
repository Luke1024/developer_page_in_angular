import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { observable, Observable, of, Subject } from 'rxjs';
import { ObserveOnOperator } from 'rxjs/internal/operators/observeOn';
import { catchError } from 'rxjs/operators';
import { StringDto } from 'src/app/models/string-dto';
import { TokenStatus } from '../message-models/token-status';
import { MessageServiceService } from '../message-service.service';
import { UrlService } from './url.service';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private http:HttpClient, private url:UrlService) { }

  getToken():Observable<TokenStatus> {
    return new Observable(observer => {
    var token = localStorage.getItem(this.url.storageKey);
    if(token == null){
        this.http.get<StringDto>(this.url.tokenUrl, {observe:'response'})
        .pipe(catchError(this.handleError<StringDto>("get token")))
        .subscribe(token => {
          observer.next(this.checkToken(token));
        })
    } else {
      observer.next({status:true, token:token});
    }
    })
  }

  pingServer():Observable<boolean> {
    return new Observable(observer => {
       this.http.get<boolean>(this.url.pingUrl, {observe:'response'})
       .pipe(catchError(this.handleError<boolean>("get status")))
       .subscribe(response =>
         observer.next(this.analyzePingResponse(response)));
    })
  }

  private analyzePingResponse(response:any):boolean{
    if(response != null){
      if(response.status==200){
        return true;
      }
    }
    return false;
  }

  resetToken() {
    localStorage.clear();    
  }

  private checkToken(response:any):TokenStatus {
    if(response != null){
      var status = response.status
      if(response.body != null){
        if(status==200){
          if(response.body?.message != null){
            if(response.body.message.length == 15){
              return {status:true, token:this.saveToken(response.body.message)} as TokenStatus
            }
          }
        }
      }
    }
    return {status:false, token:""} as TokenStatus;
  }

  private saveToken(token:string) {
    console.log("Setting token " + token)
    localStorage.setItem(this.url.storageKey, token);
    return token;
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); 
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
  
  
  private log(message: string) {

  }
}
