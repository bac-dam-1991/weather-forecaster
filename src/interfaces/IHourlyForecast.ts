import { IForecast } from "./IForecast";

export interface IHourlyForecast extends IForecast {
	temp: number;
	feels_like: number;
	visibility: number;
}
