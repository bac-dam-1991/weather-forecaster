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
				dispatch({ type: APP_ACTIONS.START_FETCHING_GEO_CODINGS });
				const payload = await getGeoCodings(cityName);
				if (!payload.length) {
					throw new Error(MESSAGES.CITY_NOT_FOUND);
				}
				dispatch({ type: APP_ACTIONS.UPDATE_GEO_CODINGS, payload });
			} catch (error) {
				let payload = error.message;
				if (
					error.response &&
					error.response.status === STATUS_CODES.NOT_FOUND
				) {
					payload = MESSAGES.CITY_NOT_FOUND;
				}
				dispatch({
					type: APP_ACTIONS.ON_FETCH_GEO_CODINGS_ERROR_THROWN,
					payload,
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
