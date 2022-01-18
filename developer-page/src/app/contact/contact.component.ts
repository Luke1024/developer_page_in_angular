import { Component, OnInit } from '@angular/core';
import { ContactDto } from '../models/contact-dto';
import { CorrectnessDto } from '../models/correctness-dto';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  status = false;

  contact = {name:"", email:"", message:""} as ContactDto;

  correctness = {name:"", email:"", message:""} as CorrectnessDto;

  onSubmit() {
  
  }
}
