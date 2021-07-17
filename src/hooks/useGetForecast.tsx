import { useState, useCallback } from "react";
import { getForecast } from "../apis/openWeatherMapApis";
import { LatLng } from "../types/LatLng";

export const useGetDailyForecast = () => {
	const [forecasts, setForecasts] = useState<Record<string, any>[]>([]);
	const [error, setError] = useState<string>("");
	const [loading, setLoading] = useState<boolean>(false);

	const getDailyForecast = useCallback(async (coordinate: LatLng) => {
		try {
			setLoading(true);
			const _forecasts = await getForecast(coordinate, ["daily"]);
			console.log({ _forecasts });
			setForecasts(_forecasts);
		} catch (error) {
			setError(error.message);
		} finally {
			setLoading(false);
		}
	}, []);

	return { loading, error, forecasts, getDailyForecast };
};
