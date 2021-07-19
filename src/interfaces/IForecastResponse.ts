import { IDailyForecast } from "./IDailyForecast";
import { IHourlyForecast } from "./IHourlyForecast";

export interface IForecastResponse {
	daily?: IDailyForecast[];
	hourly?: IHourlyForecast[];
	lat: number;
	lon: number;
	timezone: string;
	timezone_offset: number;
}
