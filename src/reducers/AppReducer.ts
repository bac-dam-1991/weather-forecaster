import { IGeoCodingResponse } from "../interfaces/IGeoCodingResponse";

export interface AppState {
	geoCodes: IGeoCodingResponse | null;
}
export const initialState: AppState = {
	geoCodes: null,
};
export type APP_ACTIONS = "update_geocode";
export type AppAction = {
	type: APP_ACTIONS;
	payload: IGeoCodingResponse;
};
export const appReducer = (state: AppState, action: AppAction): AppState => {
	switch (action.type) {
		case "update_geocode": {
			return {
				...state,
				geoCodes: action.payload,
			};
		}
		default: {
			return { ...state };
		}
	}
};
