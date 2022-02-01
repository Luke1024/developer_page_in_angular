import { Component, EventEmitter, HostBinding, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { MainModalMessage } from '../models/main-modal-message';

@Component({
  selector: 'app-main-modal',
  templateUrl: './main-modal.component.html',
  styleUrls: ['./main-modal.component.css']
})
export class MainModalComponent implements OnInit, OnChanges {

  @Input() modalMessage:MainModalMessage = {title:"", description:""} as MainModalMessage;
  @Input() visible:boolean = false;

  @HostBinding("style.--modal_display") modal = "initial";
  @Output() close = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {

    })
  }

  ngOnChanges(changes:SimpleChanges) {
    if(this.visible){
      this.modal = "initial";
    } else {
      this.modal = "none";
    }
  }

  closeModal() {
    this.close.emit();
  }
}
