import { Injectable } from '@angular/core';
import { ProjectMiniatureDto } from '../models/project-miniature-dto';
import { DescriptionDto } from '../models/description-dto';
import { Miniatures } from '../data/miniatures';
import { Descriptions } from '../data/descriptions';

@Injectable({
  providedIn: 'root'
})
export class OfflineDataService {

  private normalProjects:ProjectMiniatureDto[] = [
    this.miniatures.thispage,
    this.miniatures.trading,
    this.miniatures.todo
  ]

  private miniProjects:ProjectMiniatureDto[] = [
    this.miniatures.progress
  ]
  private project1: DescriptionDto = {} as DescriptionDto;
  private project2: DescriptionDto = {} as DescriptionDto;

  constructor(private miniatures:Miniatures, private descriptions:Descriptions) { }

  getNormalProjects(): ProjectMiniatureDto[] {
    return this.normalProjects;
  }

  getMiniProjects(): ProjectMiniatureDto[] {
    return this.miniProjects;
  }

  getDescriptions(id:number):DescriptionDto {
    let description = this.descriptionList.get(id);
    if(description != undefined){
      return description;
    } else return {} as DescriptionDto;
  }

  private descriptionList:Map<number, DescriptionDto> = new Map([
    [1,this.descriptions.todoProjectDescription],
    [2,this.project2]
  ])
}