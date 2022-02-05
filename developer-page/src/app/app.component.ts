import { Component, HostListener, OnInit } from '@angular/core';
import { MessageServiceService } from './message-service/message-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'developer-page';

  constructor(private message:MessageServiceService) {}

  ngOnInit(): void {
      this.message.startMessageService();
  }
}
