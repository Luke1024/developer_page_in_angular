import { Component, HostListener, OnInit } from '@angular/core';
import { BackendConnectorService } from './message-service/backend-connector-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'developer-page';

  constructor(private message:BackendConnectorService) {}

  ngOnInit(): void {
      this.message.startMessageService();
  }
}
