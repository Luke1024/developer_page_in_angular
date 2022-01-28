import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { StringDto } from 'src/app/models/string-dto';
import { TokenStatus } from '../message-models/token-status';
import { UrlList } from '../url-list';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private storageKey = "";
  private tokenUrl="";

  constructor(private http:HttpClient) { }

  public getToken(tokenUrl:string, storageKey:string):Observable<TokenStatus> {
    this.tokenUrl = tokenUrl;
    this.storageKey = storageKey;
    return new Observable(observer => {
      var token = localStorage.getItem(this.storageKey);
      if(token == null){
        this.http.get<StringDto>(this.tokenUrl, {observe:'response'})
        .pipe(catchError(this.handleError<StringDto>("get token")))
        .subscribe(token => {
          observer.next(this.checkToken(token));
        })
      } else {
          observer.next({status:false, message:"", token:token});
      }
    })    
  }

  private checkToken(response:any):TokenStatus {
    if(response != null){
      var status = response.status
      if(response.body != null){
        if(status==200){
          if(response.body?.message != null){
            if(response.body.message.length == 15){
              return {status:true, message:"", token:this.saveToken(response.body.message)} as TokenStatus
            }
          }
        }
      }
    }
    return {status:false, message:"", token:""} as TokenStatus;
  }

  private saveToken(token:string) {
    console.log("Setting token " + token)
    localStorage.setItem(this.storageKey, this.tokenUrl)
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
