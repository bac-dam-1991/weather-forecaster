import { IGeoCodingResponse } from "../interfaces/IGeoCodingResponse";

export interface AppState {
	selectedGeoCode: IGeoCodingResponse | null;
	cityName: string;
}
export const initialState: AppState = {
	selectedGeoCode: null,
	cityName: "",
};

export enum APP_ACTIONS {
	UPDATE_GEOCODE,
	CLEAR_GEOCODE,
	UPDATE_CITY_NAME,
	CLEAR_CITY_NAME,
	AUTO_UPDATE_GEOCODE,
}

export type AppAction =
	| {
			type: APP_ACTIONS.UPDATE_GEOCODE;
			payload: IGeoCodingResponse;
	  }
	| { type: APP_ACTIONS.CLEAR_GEOCODE }
	| { type: APP_ACTIONS.UPDATE_CITY_NAME; payload: string }
	| { type: APP_ACTIONS.AUTO_UPDATE_GEOCODE; payload: IGeoCodingResponse }
	| { type: APP_ACTIONS.CLEAR_CITY_NAME };

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
		default: {
			return { ...state };
		}
	}
};
