import React, { Fragment } from 'react';
import { Line } from 'react-chartjs-2';
import { CHART_CONFIGS } from '../../config/constants';
import styles from './HourlyForecast.module.css';

export interface HourlyForecastProps {
	labels: string[];
	data: number[];
}

const HourlyForecast: React.FC<HourlyForecastProps> = ({ labels, data }) => {
	const chartData = {
		labels,
		datasets: [
			{
				label: 'Temperature',
				data,
				fill: false,
				backgroundColor: 'rgb(255, 99, 132)',
				borderColor: 'rgba(255, 99, 132, 0.2)',
			},
		],
	};

	return (
		<Fragment>
			<Line
				data={chartData}
				options={CHART_CONFIGS.VERTICAL_CHART}
				type="line"
				className={styles.chart}
				height={500}
			/>
		</Fragment>
	);
};

export default HourlyForecast;
