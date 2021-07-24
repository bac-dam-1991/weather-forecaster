import React from 'react';
import { Line } from 'react-chartjs-2';
import { CHART_CONFIGS } from '../../config/constants';
import styles from './HourlyForecast.module.css';

export interface Dataset {
	label: string;
	data: number[];
	fill: boolean;
	backgroundColor: string;
	borderColor: string;
}

export interface HourlyForecastProps {
	labels: string[];
	datasets: Dataset[];
}

const HourlyForecast: React.FC<HourlyForecastProps> = ({
	datasets,
	labels,
}) => {
	const chartData = {
		labels,
		datasets,
	};

	return (
		<div className={styles.root}>
			<Line
				data={chartData}
				options={CHART_CONFIGS.VERTICAL_CHART}
				type="line"
				className={styles.chart}
				height={1000}
			/>
		</div>
	);
};

export default HourlyForecast;
