import { useState, useCallback, useRef } from 'react';
import { getForecast } from '../apis/openWeatherMapApis';
import { IForecastResponse } from '../interfaces/IForecastResponse';
import { LatLng } from '../types/LatLng';
import axios, { CancelTokenSource } from 'axios';

export const useGetDailyForecast = () => {
	const [forecasts, setForecasts] = useState<IForecastResponse | null>(null);
	const [error, setError] = useState<string>('');
	const [loading, setLoading] = useState<boolean>(false);
	const cancelTokenSourceRef = useRef<CancelTokenSource>(
		axios.CancelToken.source()
	);

	const getDailyForecast = useCallback(async (coordinate: LatLng) => {
		try {
			setLoading(true);
			const { token } = cancelTokenSourceRef.current;
			const _forecasts = await getForecast(
				coordinate,
				['daily'],
				'metric',
				token
			);
			setForecasts(_forecasts);
		} catch (error) {
			setError(error.message);
		} finally {
			setLoading(false);
		}
	}, []);

	return { loading, error, forecasts, getDailyForecast, cancelTokenSourceRef };
};
