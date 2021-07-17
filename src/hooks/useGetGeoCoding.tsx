import { useState, useCallback } from "react";
import { getGeoCodings } from "../apis/openWeatherMapApis";
import { MESSAGES, STATUS_CODES } from "../config/constants";
import { IGeoCodingResponse } from "../interfaces/IGeoCodingResponse";

export const useGetGeoCodings = () => {
	const [geoCodings, setGeoCodings] = useState<IGeoCodingResponse[]>([]);
	const [error, setError] = useState<string>("");
	const [loading, setLoading] = useState<boolean>(false);

	const loadGeoCodings = useCallback(async (cityName: string) => {
		try {
			setGeoCodings([]);
			if (!cityName) {
				throw new Error(MESSAGES.CITY_NAME_EMPTY);
			}
			setLoading(true);
			setError("");
			const _geoCodings = await getGeoCodings(cityName);
			if (!_geoCodings.length) {
				throw new Error(MESSAGES.CITY_NOT_FOUND);
			}
			setGeoCodings(_geoCodings);
		} catch (error) {
			setGeoCodings([]);
			if (
				error.response &&
				error.response.status === STATUS_CODES.NOT_FOUND
			) {
				setError(MESSAGES.CITY_NOT_FOUND);
				return;
			}
			setError(error.message);
		} finally {
			setLoading(false);
		}
	}, []);

	return { geoCodings, loadGeoCodings, error, loading };
};
