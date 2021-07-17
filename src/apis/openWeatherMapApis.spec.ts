import { STATUS_CODES } from "../config/constants";
import { getGeoCodings } from "./openWeatherMapApis";

describe("Unit test for open weather map geocoding api", () => {
	it("Should get geo codes for Melbourne.", async () => {
		const response = await getGeoCodings("Melbourne");
		expect(response.status).toBe(STATUS_CODES.OK);
	});
});

export {};
