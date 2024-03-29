import { Component, HostBinding, OnInit } from '@angular/core';
import { BackendConnectorService } from '../message-service/backend-connector-service';
import { ProjectMiniatureDto } from '../models/project-miniature-dto';
import { OfflineDataService } from '../offline-service/offline-data.service';

@Component({
  selector: 'app-card-block',
  templateUrl: './card-block.component.html',
  styleUrls: ['./card-block.component.css']
})
export class CardBlockComponent implements OnInit {

  @HostBinding("style.--modal_display") modal = "none";

  miniatures:ProjectMiniatureDto[] = []
  miniaturesMini:ProjectMiniatureDto[] = []

  constructor(private offlineData:OfflineDataService, private backendConnector:BackendConnectorService) { }

  ngOnInit(): void {
    this.miniatures = this.offlineData.getNormalProjects();
    this.miniaturesMini = this.offlineData.getMiniProjects();
  }

    //this.miniatures = this.offlineData.getNormalProjects();
/*
    if(this.backendConnector.connected){
      this.getProjects();
    } else {
      this.backendConnector.connectedStatus.subscribe(next => {
        if(next){
          this.getProjects();
        }
      })
    }
    */
/*
  private getProjects(){
    this.backendConnector.getNormalProjects().subscribe(response => this.miniatures = response);
    this.backendConnector.getMiniProjects().subscribe(response => this.miniaturesMini = response);
  }
*/
  send(){
    //this.backendConnector.send("projects_hover");
  }
}
