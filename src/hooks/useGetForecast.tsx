import { useState, useCallback } from 'react';
import { getForecast } from '../apis/openWeatherMapApis';
import { IForecastResponse } from '../interfaces/IForecastResponse';
import { LatLng } from '../types/LatLng';
import { CancelToken } from 'axios';

export const useGetForecast = () => {
	const [forecasts, setForecasts] = useState<IForecastResponse | null>(null);
	const [error, setError] = useState<string>('');
	const [loading, setLoading] = useState<boolean>(false);

	const loadForecast = useCallback(
		async (coordinate: LatLng, cancelToken: CancelToken) => {
			try {
				setLoading(true);
				const _forecasts = await getForecast(
					coordinate,
					['daily', 'hourly'],
					'metric',
					cancelToken
				);
				setForecasts(_forecasts);
			} catch (error) {
				setError(error.message);
			} finally {
				setLoading(false);
			}
		},
		[]
	);

	return { loading, error, forecasts, loadForecast };
};
