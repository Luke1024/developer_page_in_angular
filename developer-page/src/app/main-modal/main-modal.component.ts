import { Component, EventEmitter, HostBinding, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { MainModalMessage } from '../models/main-modal-message';

@Component({
  selector: 'app-main-modal',
  templateUrl: './main-modal.component.html',
  styleUrls: ['./main-modal.component.css']
})
export class MainModalComponent implements OnInit {

  @Input() modalMessage:MainModalMessage = {title:"", description:""} as MainModalMessage;

  @Output() close = new EventEmitter();

  constructor() { }

  ngOnInit(): void {}

  closeModal() {
    this.close.emit();
  }
}
