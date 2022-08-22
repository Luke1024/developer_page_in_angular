import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BackendConnectorService } from '../message-service/backend-connector-service';
import { DescriptionDto } from '../models/description-dto';
import { OfflineDataService } from '../offline-data.service';
import { UrlService } from '../url.service';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {
  description:DescriptionDto = {} as DescriptionDto;

  constructor(private route:ActivatedRoute,
     private connector:BackendConnectorService,
      private urlService:UrlService,
       private offlineData:OfflineDataService) { }

  ngOnInit(): void {
    let id = parseInt(this.route.snapshot.paramMap.get('id')!);
  /*  this.connector.getDescription(id).subscribe(response => {
      this.description = response.message.toString();
    })*/
    this.description = this.offlineData.getDescriptions(id);
  }
}
