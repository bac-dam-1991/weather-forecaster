import React, { useEffect, ReactElement } from "react";
import Container from "../components/Container/Container";
import Typography from "../components/Typography/Typography";
import { useGetGeoCodings } from "../hooks/useGetGeoCoding";
import { IGeoCodingResponse } from "../interfaces/IGeoCodingResponse";
import { formatCityName } from "../utility/utility";

import styles from "../App.module.css";
import DailyView from "./DailyView";
import SearchView from "./SearchView";
import { useAppContext } from "../context/AppStateContext";
import { APP_ACTIONS } from "../reducers/AppReducer";

export interface MainViewProps {}

const MainView = (): ReactElement => {
	const inputRef = React.useRef<HTMLInputElement | null>(null);
	const { geoCodings, loadGeoCodings, loading, error } = useGetGeoCodings();
	const { state, dispatch } = useAppContext();
	const { selectedGeoCode, cityName } = state;

	const handleCityNameChange = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		const payload = event.target.value.trim();
		dispatch({ type: APP_ACTIONS.UPDATE_CITY_NAME, payload });
	};

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

	const handleSelectedGeoCodeChange = (payload: IGeoCodingResponse) => {
		dispatch({ type: APP_ACTIONS.UPDATE_GEOCODE, payload });
	};

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
				<SearchView
					onSubmit={handleSubmit}
					loading={loading}
					onCityNameChange={handleCityNameChange}
					inputRef={inputRef}
					error={error}
					cityName={cityName}
					geoCodings={geoCodings}
					onSelectedGeoCodeChange={handleSelectedGeoCodeChange}
				/>
			)}
			{selectedGeoCode && <DailyView />}
		</Container>
	);
};

export default MainView;
