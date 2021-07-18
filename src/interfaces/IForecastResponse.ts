import { IForecast } from './IForecast';

export interface IForecastResponse {
	daily: IForecast[];
	lat: number;
	lon: number;
	timezone: string;
	timezone_offset: number;
}
