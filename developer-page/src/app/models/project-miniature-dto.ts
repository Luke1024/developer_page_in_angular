import { logging } from "protractor";

export interface ProjectMiniatureDto {
    id:number;
    title:string;
    technologies:string;
    miniatureUrl:string;
    description:string;
}