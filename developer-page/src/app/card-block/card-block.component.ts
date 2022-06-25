import { Component, HostBinding, OnInit } from '@angular/core';
import { BackendConnectorService } from '../message-service/backend-connector-service';
import { ProjectMiniatureDto } from '../models/project-miniature-dto';

@Component({
  selector: 'app-card-block',
  templateUrl: './card-block.component.html',
  styleUrls: ['./card-block.component.css']
})
export class CardBlockComponent implements OnInit {

  @HostBinding("style.--modal_display") modal = "none";

  miniatures:ProjectMiniatureDto[] = []
  miniaturesMini:ProjectMiniatureDto[] = []
  

  constructor(private messageService:BackendConnectorService) { }

  ngOnInit(): void {
    this.messageService.connectedStatus.subscribe(next => {
      if(next){
        this.messageService.getNormalProjects().subscribe(response => this.miniatures = response);
        this.messageService.getMiniProjects().subscribe(response => this.miniaturesMini = response);
      }
    })
  }

  send(){
    this.messageService.send("projects_hover");
  }
}
