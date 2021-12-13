import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { BarConfig } from '../bar-config';
import { CardConfig } from '../card-config';

@Component({
  selector: 'app-card-circular-bar',
  templateUrl: './card-circular-bar.component.html',
  styleUrls: ['./card-circular-bar.component.css']
})
export class CardCircularBarComponent implements OnInit {

  @Input() cardConfig:CardConfig = {} as CardConfig;
  barConfig:BarConfig = {} as BarConfig; 
  
  constructor() { }

  description = ""

  @HostBinding("style.--textcolor") textColor:string="";
  @HostBinding("style.--card_color") cardColor:string="";
  @HostBinding("style.--description_blur_anime_delay") descriptionBlurAnimeDelay:string="";
  @HostBinding("style.--description_blur_anime_duration") descriptionBlurAnimeDuration:string="";
  @HostBinding("style.--card_anime_delay") cardAnimeDelay:string = "";
  @HostBinding("style.--card_anime_duration") cardAnimeDuration:string="";

  ngOnInit(): void {
    this.barConfig = this.cardConfig.barConfig;

    this.description = this.cardConfig.description;
    this.textColor = this.cardConfig.textColor;
    this.cardColor = this.cardConfig.cardColor;
    this.descriptionBlurAnimeDelay = this.cardConfig.descriptionBlurAnimeDelay;
    this.descriptionBlurAnimeDuration = this.cardConfig.descriptionBlurAnimeDuration;
    this.cardAnimeDelay = this.cardConfig.cardAnimeDelay;
    this.cardAnimeDuration = this.cardConfig.cardAnimeDuration;
  }
}
