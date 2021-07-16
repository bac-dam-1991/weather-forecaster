import { STATUS_CODES } from '../config/constants';
import { getGeoCoding } from './openWeatherMapApis';

describe('Unit test for open weather map geocoding api', () => {
	it('Should get geo codes for Melbourne.', async () => {
		const response = await getGeoCoding('Melbourne');
		expect(response.status).toBe(STATUS_CODES.OK);
	});
});

export {};
