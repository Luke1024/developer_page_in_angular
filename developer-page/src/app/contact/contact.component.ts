import { Component, HostBinding, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { ContactDto } from '../models/contact-dto';
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

  isDisabled = false;
  connected = false;
  emailMessage = "";

  contact = {name:"", email:"", message:""} as ContactDto;

  @Output() modalMessage = {title:"", description:""} as MainModalMessage;
  @HostBinding("style.--modal_display") modal = "none";

  ngOnInit(): void {
    this.messageService.connectedStatus.subscribe(next => {
      this.connected = next;
      this.onChange();
    })
  }

  onChange() {
    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.contact.email)){
      this.emailMessage = "";
      if(this.connected){
        this.isDisabled = false;
      } else this.isDisabled = true;
    } else {
      this.emailMessage = "You have entered an invalid email address!";
      this.isDisabled = true; 
    }
  }

  onSubmit() {
    this.messageService.saveContact(this.contact).subscribe(response => {
      if(response){
        this.showSuccessResponse();
      } else {
        this.showFailureResponse();
      }
    })    
  }

  send() {
    this.messageService.send("contact hover");
  }

  private showSuccessResponse() {
    this.modalMessage.title = "Message succesfully send.";
  }

  private showFailureResponse() {
    this.modalMessage.title = "Message sending failure.";    
  }

  closeModal() {
    this.modal = "none";
  }
}