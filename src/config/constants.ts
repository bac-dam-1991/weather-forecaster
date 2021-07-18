export const URLS = {
	ONE_CALL: 'https://api.openweathermap.org/data/2.5/onecall',
	GEOCODING: 'http://api.openweathermap.org/geo/1.0/direct',
	ICON: 'http://openweathermap.org/img/wn/',
};

export const API_KEY = process.env.REACT_APP_API_KEY;

export const STATUS_CODES = {
	OK: 200,
	UNAUTHORIZED: 401,
	NOT_FOUND: 404,
	INTERNAL_SERVER_ERROR: 500,
};

export const DURATIONS = {
	ERROR_TIMEOUT: 5000,
};

export const MESSAGES = {
	CITY_NOT_FOUND: 'No city found matching provided city name.',
	CITY_NAME_EMPTY: 'City name cannot be empty.',
};

export const SPECIAL_CHARS = {
	CELSIUS: '℃',
};
