import * as React from 'react';
import styles from './DailyForecastPanel.module.css';
import clsx from 'clsx';
import { IForecast } from '../../interfaces/IForecast';
import Typography from '../Typography/Typography';
import { SPECIAL_CHARS } from '../../config/constants';
import moment from 'moment';

export interface DailyForecastPanelProps {
	index: number;
	data: IForecast;
}

const DailyForecastPanel: React.FC<DailyForecastPanelProps> = ({
	index,
	data,
}) => {
	const tempDay = `Day: ${data.temp.day}${SPECIAL_CHARS.CELSIUS}`;
	const tempNight = `Night: ${data.temp.night}${SPECIAL_CHARS.CELSIUS}`;
	const tempMorning = `Morning: ${data.temp.morn}${SPECIAL_CHARS.CELSIUS}`;
	const date =
		moment().format('DD/MM/YYYY') ===
		moment(data.dt * 1000).format('DD/MM/YYYY')
			? 'Today'
			: moment(data.dt * 1000).format('ddd Do MMM YYYY');

	return (
		<div
			className={clsx(styles.root)}
			style={{ animationDelay: `${index * 100}ms` }}
		>
			<Typography text={date} bold display="block" />
			<Typography text="Temperature" bold display="block" variant="caption" />
			<div className={styles.tempContainer}>
				<Typography
					className={styles.typography}
					text={tempMorning}
					variant="caption"
				/>
				<Typography
					className={styles.typography}
					text={tempDay}
					variant="caption"
				/>
				<Typography
					className={styles.typography}
					text={tempNight}
					variant="caption"
					align="right"
				/>
			</div>
		</div>
	);
};

export default DailyForecastPanel;
