import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

   //private rootUrl = "https://xcyfqoiwe.xyz/input";
   private rootUrl = "http://localhost:8082";
   private tokenUrl = this.rootUrl + "/input/auth";
   private pulseUrl = this.rootUrl + "/input/load";
   private contactSaveUrl = this.rootUrl + "/input/contact";
 
   private projectsNormalUrl = this.rootUrl + "/projects/normal";
   private projectsMiniUrl = this.rootUrl + "/projects/mini";

   private projectDescriptionUrl = this.rootUrl + "/projects/description/"
   private imageUrl = this.rootUrl + "/projects/images/";

  constructor() { }

  getTokenUrl():string {
    return this.tokenUrl;
  }

  getPulseUrl():string {
    return this.pulseUrl;
  }

  getContactSaveUrl():string {
    return this.contactSaveUrl;
  }

  getProjectsNormalUrl():string {
    return this.projectsNormalUrl;
  }

  getProjectsMiniUrl():string {
    return this.projectsMiniUrl;
  }

  getProjectDescriptionUrl():string {
    return this.projectDescriptionUrl;
  }

  getImageUrl():string {
    return this.imageUrl;
  }
}
