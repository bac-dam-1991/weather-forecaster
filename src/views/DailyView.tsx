import React, { Fragment, useEffect } from 'react';
import DailyForecastPanel from '../components/DailyForecastPanel/DailyForecastPanel';
import Typography from '../components/Typography/Typography';
import { useGetDailyForecast } from '../hooks/useGetForecast';
import { IForecast } from '../interfaces/IForecast';
import { IGeoCodingResponse } from '../interfaces/IGeoCodingResponse';
import { LatLng } from '../types/LatLng';

export interface DailyViewProps {
	clearSelectedGeoCode: () => void;
	selectedGeoCode: IGeoCodingResponse;
}

const DailyView: React.FC<DailyViewProps> = ({
	clearSelectedGeoCode,
	selectedGeoCode,
}) => {
	const { forecasts, getDailyForecast, loading, cancelTokenSourceRef } =
		useGetDailyForecast();

	useEffect(() => {
		const { lat, lon: lng } = selectedGeoCode;
		const coordinate: LatLng = {
			lat,
			lng,
		};
		getDailyForecast(coordinate);
		const source = cancelTokenSourceRef.current;
		return () => {
			source.cancel();
		};
	}, [getDailyForecast, selectedGeoCode, cancelTokenSourceRef]);
	return (
		<Fragment>
			<Typography
				variant="link"
				text="< Return"
				onClick={clearSelectedGeoCode}
				display="block"
			/>
			{loading && (
				<Typography text="Loading..." variant="caption" display="block" />
			)}
			{forecasts &&
				forecasts.daily.map((forecast: IForecast, index: number) => {
					return (
						<DailyForecastPanel data={forecast} index={index} key={index} />
					);
				})}
		</Fragment>
	);
};

export default DailyView;
