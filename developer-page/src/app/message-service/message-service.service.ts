import { HttpClient} from '@angular/common/http';
import { Injectable} from '@angular/core';
import { Observable, of, Subject} from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ContactDto } from '../models/contact-dto';
import { StringDto } from '../models/string-dto';

@Injectable({
  providedIn: 'root'
})
export class MessageServiceService {

  connectedStatus = new Subject<boolean>();
  connected:boolean = false;

  private rootUrl = "https://xcyfqoiwe.xyz/input";
  //private rootUrl = "http://localhost:8081/input";
  private tokenUrl = this.rootUrl + "/auth";
  private pulseUrl = this.rootUrl + "/load";
  private contactSaveUrl = this.rootUrl + "/contact";

  private pingTimer = 0;
  private pingInterval = 55;

  constructor(private http:HttpClient) { }

  startMessageService() {
    this.getAuth().subscribe(response => {
      if(this.isResponseTrue(response)){
        this.connected = true;
        this.connectedStatus.next(true);
        this.runPingTimer();
      }
    });
  }

  public send(code:string) {
    if(this.connected){
      this.resetPingTimer();
      this.sendAction(this.encodeMessage(code));
    }
  }

  public saveContact(contact:ContactDto):Observable<boolean> {
    return new Observable(observer => {
      if(this.connected){
        this.resetPingTimer();
        this.http.post<boolean>(this.contactSaveUrl + "/",contact, {observe:'response'})
        .pipe(catchError(this.handleError("post account"))).subscribe(response => {
          observer.next(this.isResponseTrue(response));
        });
      } else {
        return observer.next(false);
      }
    })
  }

  private resetPingTimer(){
    this.pingTimer = 0;
  }

  private runPingTimer(){
    setInterval(()=>{
      if(this.pingTimer==this.pingInterval) this.send("ping");
      this.pingTimer++;
    },1000);
  }

  private getAuth():Observable<any> {
    return this.http.get(this.tokenUrl, {observe:'response', withCredentials:true}).pipe(catchError(this.handleError("auth")));
  }

  private isResponseTrue(response:any){
    if(response != null){
      if(response.status==200){
        return true;
      }
    }
    return false;
  }

  private sendAction(code:string){
    return this.http.post<boolean>(this.pulseUrl,{message:code} as StringDto, {observe:'response', withCredentials:true})
    .pipe(catchError(this.handleError("post action data"))).subscribe();
  }

  private encodeMessage(code:string):string {
    let now = new Date();
    return "s_" + window.scrollY.toFixed(0) + "_w_" + window.innerWidth.toFixed(0) + "_h_" + window.innerHeight.toFixed(0) + "_c_" + code;
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error + ` ${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}