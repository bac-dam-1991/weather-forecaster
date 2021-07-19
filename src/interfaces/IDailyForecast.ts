import { IFeelsLike } from "./IFeelsLike";
import { IForecast } from "./IForecast";
import { ITemp } from "./ITemp";

export interface IDailyForecast extends IForecast {
	feels_like: IFeelsLike;
	moon_phase: number;
	moonrise: number;
	moonset: number;
	rain: number;
	sunrise: number;
	sunset: number;
	temp: ITemp;
}
