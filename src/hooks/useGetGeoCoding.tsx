import { useCallback } from "react";
import { getGeoCodings } from "../apis/openWeatherMapApis";
import { MESSAGES, STATUS_CODES } from "../config/constants";
import { useAppContext } from "../context/AppStateContext";
import { APP_ACTIONS } from "../reducers/AppReducer";

export const useGetGeoCodings = () => {
	const { dispatch, state } = useAppContext();
	const { geoCodingsError, geoCodings, geoCodingsLoading } = state;

	const loadGeoCodings = useCallback(
		async (cityName: string) => {
			try {
				if (!cityName) {
					throw new Error(MESSAGES.CITY_NAME_EMPTY);
				}
				dispatch({ type: APP_ACTIONS.CLEAR_GEO_CODINGS });
				dispatch({ type: APP_ACTIONS.START_GEO_CODINGS_LOADING });
				dispatch({ type: APP_ACTIONS.CLEAR_GEO_CODINGS_ERROR });
				const payload = await getGeoCodings(cityName);
				if (!payload.length) {
					throw new Error(MESSAGES.CITY_NOT_FOUND);
				}
				dispatch({ type: APP_ACTIONS.UPDATE_GEO_CODINGS, payload });
			} catch (error) {
				dispatch({ type: APP_ACTIONS.CLEAR_GEO_CODINGS });
				if (
					error.response &&
					error.response.status === STATUS_CODES.NOT_FOUND
				) {
					dispatch({
						type: APP_ACTIONS.SET_GEO_CODINGS_ERROR,
						payload: MESSAGES.CITY_NOT_FOUND,
					});
					return;
				}
				dispatch({
					type: APP_ACTIONS.SET_GEO_CODINGS_ERROR,
					payload: error.message,
				});
			} finally {
				dispatch({ type: APP_ACTIONS.STOP_GEO_CODINGS_LOADING });
			}
		},
		[dispatch]
	);

	return {
		geoCodings,
		loadGeoCodings,
		error: geoCodingsError,
		loading: geoCodingsLoading,
	};
};
