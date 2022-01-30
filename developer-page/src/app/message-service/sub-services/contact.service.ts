import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ContactCorrectnessDto } from 'src/app/models/contact-correctness-dto';
import { ContactDto } from 'src/app/models/contact-dto';
import { ContactResponseDto } from 'src/app/models/contact-response-dto';
import { TokenStatus } from '../message-models/token-status';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private tokenStatus:TokenStatus = {status:false, message:"", token:""};
  private contactInfoUrl:string = "";
  private contactSaveUrl:string = "";

  constructor(private http:HttpClient) { }

    public setService(tokenStatus:TokenStatus, contactInfoUrl:string, contactSaveUrl:string){
      this.tokenStatus = tokenStatus;
      this.contactInfoUrl = contactInfoUrl;
      this.contactSaveUrl = contactSaveUrl;
    }

    public getContactInfo(contact:ContactDto):Observable<any> {
    if(this.isTokenActive()){
      return this.http.put<ContactCorrectnessDto>(this.contactInfoUrl + "/" + this.tokenStatus.token, contact, {observe:'response'})
      .pipe(catchError(this.handleError<ContactCorrectnessDto>("account info")))
    } else {
      return Observable.arguments({name:"", email:"", message:""} as ContactCorrectnessDto);
    }
  }

  public saveContact(contact:ContactDto):Observable<ContactResponseDto> {
    if(this.isTokenActive()){
      return this.http.put<ContactResponseDto>(this.contactSaveUrl + "/" + this.tokenStatus.token,contact)
      .pipe(catchError(this.handleError<ContactResponseDto>("post account")))
    } else {
      return Observable.arguments({status:false, message:"Server not responding."} as ContactResponseDto)
    }
  }

  private isTokenActive():boolean {
    return this.tokenStatus.status;
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
