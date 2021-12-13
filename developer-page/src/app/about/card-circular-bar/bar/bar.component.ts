import { Component, Host, HostBinding, Input, OnInit } from '@angular/core';
import { BarConfig } from '../../bar-config';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit {

  @Input() barConfig:BarConfig = {} as BarConfig;

  constructor() { }

  @HostBinding("style.--leftrotation") leftrotation:string = "0deg";
  @HostBinding("style.--rightrotation") rightrotation:string = "0deg";
  @HostBinding("style.--blockerzindex") blockerzindex:number = 5;
  @HostBinding("style.--centercolor") centercolor:string = "";
  @HostBinding("style.--barcolor") barcolor:string = "";
  @HostBinding("style.--textcolor") textcolor:string = "";
  @HostBinding("style.--blockercolor") blockercolor:string = "";
  @HostBinding("style.--fadeindelay") fadeInDelay:string = "";
  @HostBinding("style.--fadeinduration") fadeInDuration:string = "";

  progress:string = ""

  percentage:number = 0;
  barAngle:number = 0;

  increaseInterval = 20

  ngOnInit(): void {
    this.bindValues();
    setTimeout(() => this.startAnimation(),this.barConfig.fadeInDelayS*1000);
  }

  private bindValues(){
    this.centercolor = this.barConfig.centerColor;
    this.barcolor = this.barConfig.barColor;
    this.textcolor = this.barConfig.progressTextColor;
    this.blockercolor = this.barConfig.backgroundColor;
    this.fadeInDelay = this.barConfig.fadeInDelayS + "s";
    this.fadeInDuration = this.barConfig.fadeInTimeS + "s";
  }

  private startAnimation(){
    this.computeFrameTime();
    setTimeout(() => this.runAnime(), this.barConfig.animationDelay*1000);
  } 

  private runAnime() {
    let interval = setInterval(() => {
      if(this.percentage<this.barConfig.percentage){
        this.percentage++;
      } else {
        clearInterval(interval);
      }
      this.computeBarAngle(this.percentage);
      this.setPercentage(this.percentage);
      this.setBarAngle(this.barAngle);
    },
    this.increaseInterval)
  }

  private computeFrameTime(){
    this.increaseInterval = (this.barConfig.animationTimeS/this.barConfig.percentage)*1000;
  }

  private computeBarAngle(percentage:number){
    this.barAngle = percentage * 3.6;
  }

  private setPercentage(percentage:number){
    this.progress = percentage + "%";
  }

  private setBarAngle(angle:number){
    if(angle <= 360 && angle >= 0){
      this.setAngle(angle)
    }
  }

  private setAngle(angle:number){
    if(this.barAngle <= 180){
      this.moveLeftHalfCircle(angle);
      this.moveRightHalfCircle(angle);
      this.setRightVisible(false);
    } else {
      this.moveLeftHalfCircle(180);
      this.moveRightHalfCircle(angle);
      this.setRightVisible(true);
    }
  }

  private moveLeftHalfCircle(angle:number){
    this.leftrotation = angle + "deg";
  }

  private moveRightHalfCircle(angle:number){
    this.rightrotation = angle + "deg";
  }

  private setRightVisible(visible:boolean){
    if(visible){
      this.blockerzindex = 2;
    } else {
      this.blockerzindex = 5;
    }
  }
}
