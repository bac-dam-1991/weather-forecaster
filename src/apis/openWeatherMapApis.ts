import axios, { CancelToken } from "axios";
import { API_KEY, MESSAGES, URLS } from "../config/constants";
import { IForecastResponse } from "../interfaces/IForecastResponse";
import { IGeoCodingResponse } from "../interfaces/IGeoCodingResponse";
import { allIntervals, IntervalType } from "../types/IncludedInterval";
import { LatLng } from "../types/LatLng";
import { MeasurementUnitType } from "../types/MeasurementUnit";
import { arrayDiff } from "../utility/utility";

export interface IGetGeoCodingConfig {
	countryCode?: string;
}

export const getGeoCodings = async (
	cityName: string,
	config: IGetGeoCodingConfig = {}
): Promise<IGeoCodingResponse[]> => {
	const { countryCode } = config;
	const params = new URLSearchParams();
	if (!API_KEY) {
		throw new Error(MESSAGES.MISSING_API_KEY);
	}
	params.append("appid", API_KEY);
	const qParams = [cityName];
	if (countryCode) {
		qParams.push(countryCode);
	}
	params.append("q", qParams.join(","));
	params.append("limit", "5");
	const response = await axios.get<IGeoCodingResponse[]>(URLS.GEOCODING, {
		params,
	});
	return response.data;
};

export const getForecast = async (
	coordinate: LatLng,
	includedIntervals: IntervalType[],
	measurementUnit: MeasurementUnitType = "metric",
	cancelToken: CancelToken
): Promise<IForecastResponse> => {
	const params = new URLSearchParams();
	if (!API_KEY) {
		throw new Error(MESSAGES.MISSING_API_KEY);
	}
	params.append("appid", API_KEY);
	params.append("lat", coordinate.lat.toString());
	params.append("lon", coordinate.lng.toString());
	const excludedIntervals: IntervalType[] = arrayDiff(
		allIntervals,
		includedIntervals
	);
	params.append("exclude", excludedIntervals.join(","));
	params.append("units", measurementUnit);
	const response = await axios.get<IForecastResponse>(URLS.ONE_CALL, {
		params,
		cancelToken,
	});
	return response.data;
};
