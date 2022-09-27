import { Injectable } from '@angular/core';
import { ButtonDto } from './models/button-dto';
import { DescriptionDto } from './models/description-dto';
import { DescriptionImageDto } from './models/description-image-dto';
import { DescriptionPartDto } from './models/description-part-dto';
import { ProjectMiniatureDto } from './models/project-miniature-dto';

@Injectable({
  providedIn: 'root'
})
export class OfflineDataService {

  private normalProjects:ProjectMiniatureDto[] = [
    {
      id:1,
      title:"TodoApp",
      technologies:"Angular/Spring Boot",
      miniatureUrl:"assets/images/todo/todo_2.jpg",
      description:"Epic project with epic technologies."
    } as ProjectMiniatureDto,
  ]

  private miniProjects:ProjectMiniatureDto[] = [

  ]
/*
  constructor() { }

  getNormalProjects(): ProjectMiniatureDto[] {
    return this.normalProjects;
  }

  getMiniProjects(): ProjectMiniatureDto[] {
    return this.miniProjects;
  }

  getDescriptions(id:number):DescriptionDto {
    let description = this.descriptions.get(id);
    if(description != undefined){
      return description;
    } else return {} as DescriptionDto;
  }
*/
private loremipsumShort = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Proin tortor purus platea sit eu id nisi litora libero. Neque vulputate consequat ac amet augue blandit maximus aliquet congue. Pharetra vestibulum posuere ornare faucibus fusce dictumst orci aenean eu facilisis ut volutpat commodo senectus purus himenaeos fames primis convallis nisi."
private loremipsumLong = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra enim libero facilisis nostra nam molestie nunc commodo dictum litora ut ultricies porttitor enim. Augue malesuada fringilla aptent ut interdum consequat est. Risus iaculis lacinia curae porta eu.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra enim libero facilisis nostra nam molestie nunc commodo dictum litora ut ultricies porttitor enim. Augue malesuada fringilla aptent ut interdum consequat est. Risus iaculis lacinia curae porta eu.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra enim libero facilisis nostra nam molestie nunc commodo dictum litora ut ultricies porttitor enim. Augue malesuada fringilla aptent ut interdum consequat est. Risus iaculis lacinia curae porta eu.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra enim libero facilisis nostra nam molestie nunc commodo dictum litora ut ultricies porttitor enim. Augue malesuada fringilla aptent ut interdum consequat est. Risus iaculis lacinia curae porta eu.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra enim libero facilisis nostra nam molestie nunc commodo dictum litora ut ultricies porttitor enim. Augue malesuada fringilla aptent ut interdum consequat est. Risus iaculis lacinia curae porta eu.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra enim libero facilisis nostra nam molestie nunc commodo dictum litora ut ultricies porttitor enim. Augue malesuada fringilla aptent ut interdum consequat est. Risus iaculis lacinia curae porta eu.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra enim libero facilisis nostra nam molestie nunc commodo dictum litora ut ultricies porttitor enim. Augue malesuada fringilla aptent ut interdum consequat est. Risus iaculis lacinia curae porta eu.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra enim libero facilisis nostra nam molestie nunc commodo dictum litora ut ultricies porttitor enim. Augue malesuada fringilla aptent ut interdum consequat est. Risus iaculis lacinia curae porta eu.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra enim libero facilisis nostra nam molestie nunc commodo dictum litora ut ultricies porttitor enim. Augue malesuada fringilla aptent ut interdum consequat est. Risus iaculis lacinia curae porta eu.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra enim libero facilisis nostra nam molestie nunc commodo dictum litora ut ultricies porttitor enim. Augue malesuada fringilla aptent ut interdum consequat est. Risus iaculis lacinia curae porta eu.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra enim libero facilisis nostra nam molestie nunc commodo dictum litora ut ultricies porttitor enim. Augue malesuada fringilla aptent ut interdum consequat est. Risus iaculis lacinia curae porta eu.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra enim libero facilisis nostra nam molestie nunc commodo dictum litora ut ultricies porttitor enim. Augue malesuada fringilla aptent ut interdum consequat est. Risus iaculis lacinia curae porta eu.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra enim libero facilisis nostra nam molestie nunc commodo dictum litora ut ultricies porttitor enim. Augue malesuada fringilla aptent ut interdum consequat est. Risus iaculis lacinia curae porta eu.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra enim libero facilisis nostra nam molestie nunc commodo dictum litora ut ultricies porttitor enim. Augue malesuada fringilla aptent ut interdum consequat est. Risus iaculis lacinia curae porta eu.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra enim libero facilisis nostra nam molestie nunc commodo dictum litora ut ultricies porttitor enim. Augue malesuada fringilla aptent ut interdum consequat est. Risus iaculis lacinia curae porta eu.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra enim libero facilisis nostra nam molestie nunc commodo dictum litora ut ultricies porttitor enim. Augue malesuada fringilla aptent ut interdum consequat est. Risus iaculis lacinia curae porta eu.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra enim libero facilisis nostra nam molestie nunc commodo dictum litora ut ultricies porttitor enim. Augue malesuada fringilla aptent ut interdum consequat est. Risus iaculis lacinia curae porta eu.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra enim libero facilisis nostra nam molestie nunc commodo dictum litora ut ultricies porttitor enim. Augue malesuada fringilla aptent ut interdum consequat est. Risus iaculis lacinia curae porta eu.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra enim libero facilisis nostra nam molestie nunc commodo dictum litora ut ultricies porttitor enim. Augue malesuada fringilla aptent ut interdum consequat est. Risus iaculis lacinia curae porta eu.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra enim libero facilisis nostra nam molestie nunc commodo dictum litora ut ultricies porttitor enim. Augue malesuada fringilla aptent ut interdum consequat est. Risus iaculis lacinia curae porta eu.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra enim libero facilisis nostra nam molestie nunc commodo dictum litora ut ultricies porttitor enim. Augue malesuada fringilla aptent ut interdum consequat est. Risus iaculis lacinia curae porta eu.";

/*

private project1:DescriptionDto = {
  title:"Epic eternal app",
  descriptionPartDtos:[
    {
      description:this.loremipsumLong,
      containImage:true,
      imageTop:true,
      image:{
        width:600,
        height:500,
        imageUrl:"assets/images/todo/todo_1.jpg",
        description:this.loremipsumShort 
      } as DescriptionImageDto          
    } as DescriptionPartDto,
    {
      description:this.loremipsumLong,
      containImage:true,
      imageTop:false,
      image:{
        width:800,
        height:600,
        imageUrl:"assets/images/todo/todo_2.jpg",
        description:this.loremipsumShort 
      } as DescriptionImageDto
    } as DescriptionPartDto],
  buttons:[
    {
      buttonDescription:"ToDo epic project",
      buttonUrl:"https://www.google.com/"
    } as ButtonDto,
    {
      buttonDescription:"ToDo epic project 2",
      buttonUrl:"https://www.google.com/"
    } as ButtonDto,
    {
      buttonDescription:"ToDo epic project 3",
      buttonUrl:"https://www.google.com/"
    } as ButtonDto] } as DescriptionDto;




private project2:DescriptionDto = {
  title:"Epic eternal app",
  description:[
    {
    description:this.loremipsumLong,
    containImage:true,
    imageTop:true,
    image:{
      width:800,
      height:600,
      imageUrl:"assets/images/todo/todo_1.jpg",
      description:this.loremipsumShort } as DescriptionImageDto          
    } as DescriptionPartDto,
  {

  } as DescriptionPartDto],
  buttons:[
    {
      buttonDescription:"ToDo epic project",
      buttonUrl:"https://www.google.com/"
    } as ButtonDto,
    {
      buttonDescription:"ToDo epic project 2",
      buttonUrl:"https://www.google.com/"
    } as ButtonDto,
    {
      buttonDescription:"ToDo epic project 3",
      buttonUrl:"https://www.google.com/"
    } as ButtonDto
  ] 
} as DescriptionDto;




private descriptions:Map<number, DescriptionDto> = new Map([
    [1,this.project1],
    [2,this.project2]
  ])


      /*
        title:"TodoApp",
        description:this.loremipsumLong,
        images:[{ 
          width:1000,
          height:500,
          imageUrl:"assets/images/todo/todo_1.jpg",
          description:this.loremipsumShort
        } as DescriptionImageDto, {
          width:700,
          height:500,
          imageUrl:"assets/images/todo/todo_2.jpg",
          description:this.loremipsumShort
        } as DescriptionImageDto],
        buttons:[
          {buttonDescription:"ToDo epic project",
          buttonUrl:"https://www.google.com/",
        } as ButtonDto,
        {buttonDescription:"ToDo epic project 2",
        buttonUrl:"https://www.google.com/",
      } as ButtonDto,
      {buttonDescription:"ToDo epic project 3",
      buttonUrl:"https://www.google.com/",
    } as ButtonDto,
    {buttonDescription:"ToDo epic project 4",
    buttonUrl:"https://www.google.com/",
  } as ButtonDto]
  } as DescriptionDto],
    [2, {} as DescriptionDto]
  ])*/
}