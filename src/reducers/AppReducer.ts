import { IGeoCodingResponse } from "../interfaces/IGeoCodingResponse";

export interface AppState {
	selectedGeoCode: IGeoCodingResponse | null;
	cityName: string;
	geoCodings: IGeoCodingResponse[];
	geoCodingsError: string;
	geoCodingsLoading: boolean;
}
export const initialState: AppState = {
	selectedGeoCode: null,
	cityName: "",
	geoCodings: [],
	geoCodingsError: "",
	geoCodingsLoading: false,
};

export enum APP_ACTIONS {
	UPDATE_GEOCODE,
	CLEAR_GEOCODE,
	UPDATE_CITY_NAME,
	CLEAR_CITY_NAME,
	AUTO_UPDATE_GEOCODE,
	CLEAR_GEO_CODINGS,
	UPDATE_GEO_CODINGS,
	START_GEO_CODINGS_LOADING,
	STOP_GEO_CODINGS_LOADING,
	CLEAR_GEO_CODINGS_ERROR,
	SET_GEO_CODINGS_ERROR,
	START_FETCHING_GEO_CODINGS,
	ON_FETCH_GEO_CODINGS_ERROR_THROWN,
}

export type AppAction =
	| {
			type: APP_ACTIONS.UPDATE_GEOCODE;
			payload: IGeoCodingResponse;
	  }
	| { type: APP_ACTIONS.CLEAR_GEOCODE }
	| { type: APP_ACTIONS.UPDATE_CITY_NAME; payload: string }
	| { type: APP_ACTIONS.AUTO_UPDATE_GEOCODE; payload: IGeoCodingResponse }
	| { type: APP_ACTIONS.CLEAR_CITY_NAME }
	| { type: APP_ACTIONS.CLEAR_GEO_CODINGS }
	| { type: APP_ACTIONS.START_GEO_CODINGS_LOADING }
	| { type: APP_ACTIONS.STOP_GEO_CODINGS_LOADING }
	| { type: APP_ACTIONS.CLEAR_GEO_CODINGS_ERROR }
	| { type: APP_ACTIONS.SET_GEO_CODINGS_ERROR; payload: string }
	| { type: APP_ACTIONS.UPDATE_GEO_CODINGS; payload: IGeoCodingResponse[] }
	| { type: APP_ACTIONS.START_FETCHING_GEO_CODINGS }
	| { type: APP_ACTIONS.ON_FETCH_GEO_CODINGS_ERROR_THROWN; payload: string };

export const appReducer = (state: AppState, action: AppAction): AppState => {
	switch (action.type) {
		case APP_ACTIONS.UPDATE_GEOCODE: {
			return {
				...state,
				selectedGeoCode: action.payload,
			};
		}
		case APP_ACTIONS.CLEAR_GEOCODE: {
			return {
				...state,
				selectedGeoCode: null,
			};
		}
		case APP_ACTIONS.UPDATE_CITY_NAME: {
			return {
				...state,
				cityName: action.payload,
			};
		}
		case APP_ACTIONS.AUTO_UPDATE_GEOCODE: {
			return {
				...state,
				selectedGeoCode: action.payload,
				cityName: "",
			};
		}
		case APP_ACTIONS.CLEAR_CITY_NAME: {
			return {
				...state,
				cityName: "",
			};
		}
		case APP_ACTIONS.CLEAR_GEO_CODINGS: {
			return {
				...state,
				geoCodings: [],
			};
		}
		case APP_ACTIONS.UPDATE_GEO_CODINGS: {
			return {
				...state,
				geoCodings: action.payload,
			};
		}
		case APP_ACTIONS.START_GEO_CODINGS_LOADING: {
			return {
				...state,
				geoCodingsLoading: true,
			};
		}
		case APP_ACTIONS.STOP_GEO_CODINGS_LOADING: {
			return {
				...state,
				geoCodingsLoading: false,
			};
		}
		case APP_ACTIONS.CLEAR_GEO_CODINGS_ERROR: {
			return {
				...state,
				geoCodingsError: "",
			};
		}
		case APP_ACTIONS.SET_GEO_CODINGS_ERROR: {
			return {
				...state,
				geoCodingsError: action.payload,
			};
		}
		case APP_ACTIONS.START_FETCHING_GEO_CODINGS: {
			return {
				...state,
				geoCodings: [],
				geoCodingsLoading: true,
				geoCodingsError: "",
			};
		}
		case APP_ACTIONS.ON_FETCH_GEO_CODINGS_ERROR_THROWN: {
			return {
				...state,
				geoCodings: [],
				geoCodingsError: action.payload,
			};
		}
		default: {
			return { ...state };
		}
	}
};
