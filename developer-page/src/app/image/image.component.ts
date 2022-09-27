import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { DescriptionImageDto } from '../models/description-image-dto';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  
  @Input() image:DescriptionImageDto = {} as DescriptionImageDto;

  @HostBinding("style.--block_width") blockWidth:number=300;

  constructor() { }

  ngOnInit(): void {
    
  }

}
