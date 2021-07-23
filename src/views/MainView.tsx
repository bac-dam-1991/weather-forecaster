import React, { useEffect, ReactElement, Fragment } from "react";
import Container from "../components/Container/Container";
import Typography from "../components/Typography/Typography";
import { useGetGeoCodings } from "../hooks/useGetGeoCoding";
import { formatCityName } from "../utility/utility";

import styles from "../App.module.css";
import DailyView from "./DailyView";
import { useAppContext } from "../context/AppStateContext";
import { APP_ACTIONS } from "../reducers/AppReducer";
import CitySearchBar from "../components/CitySearchBar/CitySearchBar";
import CitySearchResultsContainer from "../components/CitySearchResultsContainer/CitySearchResultsContainer";

export interface MainViewProps {}

const MainView = (): ReactElement => {
	const inputRef = React.useRef<HTMLInputElement | null>(null);
	const { geoCodings, loadGeoCodings } = useGetGeoCodings();
	const { state, dispatch } = useAppContext();
	const { selectedGeoCode, cityName } = state;

	// If API returns only one location then
	// Immediately go to weather forecast
	useEffect(() => {
		if (geoCodings.length !== 1) {
			return;
		}
		if (!inputRef.current) {
			return;
		}
		inputRef.current.value = "";
		dispatch({
			type: APP_ACTIONS.AUTO_UPDATE_GEOCODE,
			payload: geoCodings[0],
		});
	}, [geoCodings, dispatch]);

	const handleSubmit = async (event: React.FormEvent) => {
		event.preventDefault();
		await loadGeoCodings(cityName);
		if (!inputRef.current) {
			return;
		}
		inputRef.current.value = "";
		dispatch({ type: APP_ACTIONS.CLEAR_CITY_NAME });
	};

	return (
		<Container className={styles.root}>
			<Typography
				text="Weather forecast"
				variant="heading"
				display="block"
			/>
			{selectedGeoCode && (
				<Typography
					text={formatCityName(selectedGeoCode)}
					variant="subheading"
					display="block"
				/>
			)}
			{!selectedGeoCode && (
				<Fragment>
					<CitySearchBar
						onSubmit={handleSubmit}
						inputRef={inputRef}
					/>
					<CitySearchResultsContainer />
				</Fragment>
			)}
			{selectedGeoCode && <DailyView />}
		</Container>
	);
};

export default MainView;
