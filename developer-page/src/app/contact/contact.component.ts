import { Component, HostBinding, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { ContactDto } from '../models/contact-dto';
import { BackendConnectorService } from '../message-service/backend-connector-service';
import { MainModalMessage } from '../models/main-modal-message';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private messageService:BackendConnectorService) { }

  isDisabled = false;
  connected = false;
  emailMessage = "";

  contact = {name:"", email:"", message:""} as ContactDto;

  @Output() modalMessage = {title:"", description:""} as MainModalMessage;
  @HostBinding("style.--modal_display") modal = "none";

  ngOnInit(): void {
    this.messageService.connectedStatus.subscribe(next => this.refreshConnectedStatus(next));
  }

  private refreshConnectedStatus(status:boolean) {
    this.connected = status;
    this.onChange();
  }

  onChange() {
    if(this.connected){
      if(this.isEmailOk()){
        this.isDisabled = false;
      } else {    
        this.isDisabled = true;
      }
    } else {
      this.isDisabled = true;
    }
  }

  private isEmailOk():boolean {
    if(this.contact.email.length > 0){
      if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.contact.email)){
        this.emailMessage = ""; 
        return true;
      } else {
        this.emailMessage = "You have entered an invalid email address!";
      }
    } else {
      this.emailMessage = "Email is required."
    }
    return false;
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
    this.messageService.send("contact_hover");
  }

  private showSuccessResponse() {
    this.modalMessage.title = "Message succesfully send.";
    this.showModal();
  }

  private showFailureResponse() {
    this.modalMessage.title = "Message could not be send due to an internal server error.";
    this.showModal();    
  }

  private showModal() {
    this.modal = "initial";
  }

  closeModal() {
    this.modal = "none";
  }
}