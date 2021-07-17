import { useState, useCallback } from 'react';
import { getGeoCodings } from '../apis/openWeatherMapApis';
import { IGeoCodingResponse } from '../interfaces/IGeoCodingResponse';

export const useGetGeoCodings = () => {
	const [geoCodings, setGeoCodings] = useState<IGeoCodingResponse[]>([]);
	const [error, setError] = useState<string>('');
	const [loading, setLoading] = useState<boolean>(false);

	const loadGeoCodings = useCallback(async (cityName: string) => {
		try {
			setLoading(true);
			const _geoCodings = await getGeoCodings(cityName);
			setGeoCodings(_geoCodings);
		} catch (error) {
			setError(error.message);
		} finally {
			setLoading(false);
		}
	}, []);

	return { geoCodings, loadGeoCodings, error, loading };
};
