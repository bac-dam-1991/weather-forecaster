import { STATUS_CODES } from '../config/constants';
import { getGeoCoding } from './openWeatherMapApis';

describe('Unit test for open weather map geocoding api', () => {
	it('Should get geo code', async () => {
		const response = await getGeoCoding('melbourne');
		expect(response.status).toBe(STATUS_CODES.OK);
	});
});

export {};
