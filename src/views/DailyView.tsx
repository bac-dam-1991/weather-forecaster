import React, { ChangeEvent, Fragment, useEffect, useState } from 'react';
import Typography from '../components/Typography/Typography';
import { useGetForecast } from '../hooks/useGetForecast';
import { IGeoCodingResponse } from '../interfaces/IGeoCodingResponse';
import { LatLng } from '../types/LatLng';
import axios from 'axios';
import ForecastContainer from '../components/ForecastsContainer/ForecastContainer';
import Loader from '../components/Loader/Loader';
import Switch from '../components/Switch/Switch';
import HourlyForecast, {
	Dataset,
} from '../components/HourlyForecast/HourlyForecast';
import styles from './View.module.css';
import { generateChartLabelsAndDatasets } from '../utility/chart.utility';

export interface DailyViewProps {
	clearSelectedGeoCode: () => void;
	selectedGeoCode: IGeoCodingResponse;
}

const DailyView: React.FC<DailyViewProps> = ({
	clearSelectedGeoCode,
	selectedGeoCode,
}) => {
	const { forecasts, loadForecast, loading } = useGetForecast();
	const [showHourlyView, setShowHourlyView] = useState<boolean>(false);
	const [chartDatasets, setChartDatasets] = useState<Dataset[]>([]);
	const [chartLabels, setChartLabels] = useState<string[]>([]);

	const handleShowHourlyViewChange = (event: ChangeEvent<HTMLInputElement>) => {
		setShowHourlyView(event.target.checked);
	};

	useEffect(() => {
		const { lat, lon: lng } = selectedGeoCode;
		const coordinate: LatLng = {
			lat,
			lng,
		};
		const source = axios.CancelToken.source();
		const { token } = source;
		loadForecast(coordinate, token);
		return () => {
			source.cancel();
		};
	}, [loadForecast, selectedGeoCode]);

	useEffect(() => {
		if (!forecasts) {
			return;
		}
		const { hourly } = forecasts;
		if (!hourly) {
			return;
		}
		const [labels, datasets] = generateChartLabelsAndDatasets(hourly);
		setChartLabels(labels);
		setChartDatasets(datasets);
	}, [forecasts]);

	return (
		<Fragment>
			<div className={styles.marginBottom}>
				<Typography
					variant="link"
					text="< Return"
					onClick={clearSelectedGeoCode}
					display="block"
					className={styles.marginBottom}
				/>
				<Switch label="Hourly View" onChange={handleShowHourlyViewChange} />
			</div>
			{loading && <Loader />}
			{showHourlyView ? (
				<HourlyForecast labels={chartLabels} datasets={chartDatasets} />
			) : (
				forecasts && <ForecastContainer forecasts={forecasts} />
			)}
		</Fragment>
	);
};

export default DailyView;
