import { Component, Input, OnInit, Output } from '@angular/core';
import { ContactDto } from '../models/contact-dto';
import { ContactCorrectnessDto } from '../models/contact-correctness-dto';
import { MessageServiceService } from '../message-service/message-service.service';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { debounceTime} from 'rxjs/operators';
import { MainModalMessage } from '../models/main-modal-message';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private messageService:MessageServiceService) { }

  status = false;

  contact = {name:"", email:"", message:""} as ContactDto;

  correctness = {name:"", email:"", message:""} as ContactCorrectnessDto;

  @Output() modalMessage = {title:"", description:""} as MainModalMessage;

  @Output() visible = true;

  ngOnInit(): void {

  }

  onChange() {
    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.contact.email)){
      this.correctness.email = "";
      this.status = true;
    } else {
      this.correctness.email = "You have entered an invalid email address!";
      this.status = false;
    }
  }

  onSubmit() {
    if(this.status){
      this.messageService.saveContact(this.contact).subscribe(response => {
        this.analyzeResponse(response);
      })    
    }
  }

  send() {
    this.messageService.send("contact hover");
  }

  private analyzeResponse(response:any){
    if(response != null){
      if(response.body != null){
        if(response.status==200){
          if(response.body.status){
            this.showResponseMessage();
            return;
          }
        }
      }
    }
    this.showProblemMessage()
  }

  private showResponseMessage() {

  }

  private showProblemMessage() {

  }

  closeModal() {
    this.visible = false;
  }
}