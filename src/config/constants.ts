export const URLS = {
	ONE_CALL: 'https://api.openweathermap.org/data/2.5/onecall',
	GEOCODING: 'http://api.openweathermap.org/geo/1.0/direct',
};

export const API_KEY = process.env.REACT_APP_API_KEY;

export const STATUS_CODES = {
	OK: 200,
	UNAUTHORIZED: 401,
	NOT_FOUND: 404,
	INTERNAL_SERVER_ERROR: 500,
};
