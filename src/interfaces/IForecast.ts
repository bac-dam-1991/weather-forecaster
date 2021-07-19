import { IWeather } from "./IWeather";

export interface IForecast {
	dt: number;
	pressure: number;
	humidity: number;
	dew_point: number;
	uvi: number;
	clouds: number;
	wind_speed: number;
	wind_deg: number;
	wind_gust: number;
	weather: IWeather[];
	pop: number;
}
