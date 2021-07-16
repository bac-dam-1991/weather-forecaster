import axios from 'axios';
import { API_KEY, URLS } from '../config/constants';

export interface IGetGeoCodingConfig {
	countryCode?: string;
}

export const getGeoCoding = (
	cityName: string,
	config: IGetGeoCodingConfig = {}
) => {
	const { countryCode } = config;
	const params = new URLSearchParams();
	if (API_KEY) {
		params.append('appid', API_KEY);
	}
	const qParams = [cityName];
	if (countryCode) {
		qParams.push(countryCode);
	}
	params.append('q', qParams.join(','));
	params.append('limit', '5');
	return axios.get(URLS.GEOCODING, { params });
};
