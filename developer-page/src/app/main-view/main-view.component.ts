import { Component, HostListener, OnInit } from '@angular/core';
import { BackendConnectorService } from '../message-service/backend-connector-service';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']
})
export class MainViewComponent implements OnInit {

  constructor(private messageService:BackendConnectorService) { }

  ngOnInit(): void {
  }

}
