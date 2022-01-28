import { Component, OnInit } from '@angular/core';
import { ContactDto } from '../models/contact-dto';
import { ContactCorrectnessDto } from '../models/contact-correctness-dto';
import { MessageServiceService } from '../message-service/message-service.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private messageService:MessageServiceService) { }

  ngOnInit(): void {
  }

  status = false;

  contact = {name:"", email:"", message:""} as ContactDto;

  correctness = {name:"", email:"", message:""} as ContactCorrectnessDto;

  

  onChange() {
    this.messageService.getContactInfo(this.contact).subscribe(response => {
      if(response != null){
        this.correctness = response;
      }
    })
  }

  onSubmit() {
    if(this.status){
      this.messageService.saveContact(this.contact).subscribe(response => {

      })    
    }
  }

  showSuccesfullMessage(){

  }
}