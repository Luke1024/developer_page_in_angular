import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BackendConnectorService } from '../message-service/backend-connector-service';
import { ProjectMiniatureDto } from '../models/project-miniature-dto';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() miniature:ProjectMiniatureDto = {} as ProjectMiniatureDto;

  constructor(private messageService:BackendConnectorService) { }

  ngOnInit(): void {
  }

  loadModal(){
    this.messageService.send("opening_description_" + this.miniature.title);
  }
}
