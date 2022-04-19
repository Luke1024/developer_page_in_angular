import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  storageKey = "local_token";
  private rootUrl = "http://localhost:8081/input";
  tokenUrl = this.rootUrl + "/auth";
  pulseUrl = this.rootUrl + "/load";
  contactSaveUrl = this.rootUrl + "/contact";
  pingUrl = this.rootUrl + "/status";

  constructor() { }
}
