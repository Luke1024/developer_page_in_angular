import { Component } from '@angular/core';
import { MessageServiceService } from './message-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'developer-page';

  constructor(private messageService:MessageServiceService) {

  }

  ngOnInit(): void {
    this.messageService.getToken()
  }

  send(code:string){
    this.messageService.send(code)
  }
}
