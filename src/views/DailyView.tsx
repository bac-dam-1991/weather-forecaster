import React, { Fragment, useEffect } from "react";
import Typography from "../components/Typography/Typography";
import { useGetDailyForecast } from "../hooks/useGetForecast";
import { IGeoCodingResponse } from "../interfaces/IGeoCodingResponse";
import { LatLng } from "../types/LatLng";
import axios from "axios";
import ForecastContainer from "../components/ForecastsContainer/ForecastContainer";
import Loader from "../components/Loader/Loader";

export interface DailyViewProps {
	clearSelectedGeoCode: () => void;
	selectedGeoCode: IGeoCodingResponse;
}

const DailyView: React.FC<DailyViewProps> = ({
	clearSelectedGeoCode,
	selectedGeoCode,
}) => {
	const { forecasts, getDailyForecast, loading } = useGetDailyForecast();

	useEffect(() => {
		const { lat, lon: lng } = selectedGeoCode;
		const coordinate: LatLng = {
			lat,
			lng,
		};
		const source = axios.CancelToken.source();
		const { token } = source;
		getDailyForecast(coordinate, token);
		return () => {
			source.cancel();
		};
	}, [getDailyForecast, selectedGeoCode]);
	return (
		<Fragment>
			<Typography
				variant="link"
				text="< Return"
				onClick={clearSelectedGeoCode}
				display="block"
			/>
			{loading && <Loader />}
			{forecasts && <ForecastContainer forecasts={forecasts} />}
		</Fragment>
	);
};

export default DailyView;
