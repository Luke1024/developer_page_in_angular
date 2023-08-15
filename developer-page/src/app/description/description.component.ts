import { ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BackendConnectorService } from '../message-service/backend-connector-service';
import { DescriptionDto } from '../models/description-dto';
import { UrlService } from '../url.service';
import { OfflineDataService } from '../offline-service/offline-data.service';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {
  description:DescriptionDto = {} as DescriptionDto;
  notFoundMessage:string = "Description not found.";
  showNotFoundMessage:boolean = false;

  constructor(private route:ActivatedRoute,
     private connector:BackendConnectorService,
      private urlService:UrlService,
       private offlineData:OfflineDataService,
       private detector:ChangeDetectorRef) { }

  ngOnInit(): void {
    let id = parseInt(this.route.snapshot.paramMap.get('id')!);

    this.description = this.offlineData.getDescriptions(id);
    
  /*
    this.connector.getDescription(id).subscribe(response => {
    if(response.ok){
      if(response.body != null){
        this.description = response.body;
        console.log("Title: " + this.description.title);
        console.log("Button count: " + this.description.buttonDtos.length)
        console.log("Description part counts: " + this.description.descriptionPartDtos.length)
        return;
      }
    }
  })
  */
 }
}
