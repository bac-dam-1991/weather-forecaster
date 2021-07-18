import React from 'react';
import { IForecast } from '../../interfaces/IForecast';
import { IForecastResponse } from '../../interfaces/IForecastResponse';
import DailyForecastPanel from '../DailyForecastPanel/DailyForecastPanel';
import styles from './ForecastContainer.module.css';

export interface ForecastContainerProps {
	forecasts: IForecastResponse;
}

const ForecastContainer: React.FC<ForecastContainerProps> = ({ forecasts }) => {
	return (
		<div className={styles.root}>
			{forecasts.daily.map((forecast: IForecast, index: number) => {
				return <DailyForecastPanel data={forecast} index={index} key={index} />;
			})}
		</div>
	);
};

export default ForecastContainer;
