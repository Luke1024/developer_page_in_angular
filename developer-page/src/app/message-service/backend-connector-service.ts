import { HttpClient} from '@angular/common/http';
import { Injectable} from '@angular/core';
import { Observable, of, Subject} from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ContactDto } from '../models/contact-dto';
import { DescriptionDto } from '../models/description-dto';
import { ProjectMiniatureDto } from '../models/project-miniature-dto';
import { StringDto } from '../models/string-dto';
import { UrlService } from '../url.service';

@Injectable({
  providedIn: 'root'
})
export class BackendConnectorService {

  connectedStatus = new Subject<boolean>();
  connected:boolean = false;

  private pingTimer = 0;
  private pingInterval = 55;

  //projects storage

  constructor(private http:HttpClient,
    private url:UrlService) { }

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
        this.http.post<boolean>(this.url.getContactSaveUrl() + "/",contact, {observe:'response'})
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
    return this.http.get(this.url.getTokenUrl(), {observe:'response', withCredentials:true}).pipe(catchError(this.handleError("auth")));
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
    return this.http.post<boolean>(this.url.getPulseUrl(),{message:code} as StringDto, {observe:'response', withCredentials:true})
    .pipe(catchError(this.handleError("post action data"))).subscribe();
  }

  private encodeMessage(code:string):string {
    let now = new Date();
    return "s_" + window.scrollY.toFixed(0) + "_w_" + window.innerWidth.toFixed(0) + "_h_" + window.innerHeight.toFixed(0) + "_c_" + code;
  }

  public getNormalProjects():Observable<ProjectMiniatureDto[]>{
    return this.http.get<ProjectMiniatureDto[]>(this.url.getProjectsNormalUrl(), {withCredentials:true})
    .pipe(catchError(this.handleError<ProjectMiniatureDto[]>("get projects normal")));
  }

  public getMiniProjects():Observable<ProjectMiniatureDto[]>{
    return this.http.get<ProjectMiniatureDto[]>(this.url.getProjectsMiniUrl(), {withCredentials:true})
    .pipe(catchError(this.handleError<ProjectMiniatureDto[]>("get projects mini")));
  }

  public getDescription(descriptionId:number):Observable<DescriptionDto>{
    return this.http.get<DescriptionDto>(this.url.getProjectDescriptionUrl() + descriptionId)
    .pipe(catchError(this.handleError<DescriptionDto>("get description " + descriptionId)));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error + ` ${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}