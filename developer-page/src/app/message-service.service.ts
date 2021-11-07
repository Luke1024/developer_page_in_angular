import { HttpClient } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { PulseDto } from './models/pulse-dto';
import { StringDto } from './models/string-dto';

@Injectable({
  providedIn: 'root'
})
export class MessageServiceService {

  private storageKey = "local_token"

  private token = ""

  private rootUrl = "http://localhost:8080/input"
  private tokenUrl = this.rootUrl + "/token"
  private pulseUrl = this.rootUrl + "/load"

  private operationsStorage:string[] = []

  constructor(private http:HttpClient) { }

  public getToken() {
    var token = localStorage.getItem(this.storageKey);
    if(token == null){
        this.http.get<StringDto>(this.tokenUrl, {observe:'response'})
        .pipe(catchError(this.handleError<StringDto>("get token")))
        .subscribe(token => {
          this.setToken(token);
        })
    } else {
        this.token = token;
    }
  }

  public send(code:string){
    this.operationsStorage.push(code)
    this.sendMessage()
  }

  public sendMessage(){
    if(this.operationsStorage.length > 0){
      if(this.isTokenActive()){
        var code = this.operationsStorage.shift();
        this.postMessage(code as string).subscribe(response => {
          if(response){
            this.sendMessage()
          } else {
            this.operationsStorage.unshift(code as string)
            console.log("problem with message sending")
          }
        });
      }
  }
  }

  private isTokenActive(){
    return this.token.length == 15;
  }

  private postMessage(code:string):Observable<boolean>{
    var pulse = {token:this.token, code:code} as PulseDto
    return this.http.post<boolean>(this.pulseUrl, pulse)
  }

  private setToken(response:any){
    if(response != null){
        var status = response.status
        if(response.body != null){
          if(status==200){
            if(response.body?.message != null){
                console.log("Setting token " + response.body.message)
                this.token = response.body.message
                localStorage.setItem(this.storageKey, this.token)
            }
          }
        }
    }
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