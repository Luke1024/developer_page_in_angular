import { DescriptionImageDto } from "./description-image-dto";

export interface DescriptionPartDto {
    description:string;
    containImage:boolean;
    imageTop:boolean;
    image:DescriptionImageDto;
}