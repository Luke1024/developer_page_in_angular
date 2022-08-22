import { ButtonDto } from "./button-dto";
import { DescriptionImageDto } from "./description-image-dto";

export interface DescriptionDto {
    title:string;
    description:string;
    images:DescriptionImageDto[];
    buttons:ButtonDto[];
}