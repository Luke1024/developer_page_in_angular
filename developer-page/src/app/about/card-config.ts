import { BarConfig } from "./bar-config";

export interface CardConfig {
    description:string;
    textColor:string;
    cardColor:string;
    descriptionBlurAnimeDelay:string;
    descriptionBlurAnimeDuration:string;
    cardAnimeDelay:string;
    cardAnimeDuration:string;
    barConfig:BarConfig;
}