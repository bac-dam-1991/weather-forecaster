import { IFeelsLike } from './IFeelsLike';
import { ITemp } from './ITemp';
import { IWeather } from './IWeather';

export interface IForecast {
	clouds: number;
	dew_point: number;
	dt: number;
	feels_like: IFeelsLike;
	humidity: number;
	moon_phase: number;
	moonrise: number;
	moonset: number;
	pop: number;
	pressure: number;
	rain: number;
	sunrise: number;
	sunset: number;
	temp: ITemp;
	uvi: number;
	weather: IWeather[];
	wind_deg: number;
	wind_gust: number;
	wind_speed: number;
}
