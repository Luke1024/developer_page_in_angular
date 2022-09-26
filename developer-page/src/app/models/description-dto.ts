import { ButtonDto } from "./button-dto";
import { DescriptionPartDto } from "./description-part-dto";

export interface DescriptionDto {
    title:string;
    intro:string;
    descriptionPartDtos:DescriptionPartDto[];
    buttonDtos:ButtonDto[];
}