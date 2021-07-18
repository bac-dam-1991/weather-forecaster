import * as React from 'react';
import styles from './DailyForecastPanel.module.css';
import clsx from 'clsx';
import { IForecast } from '../../interfaces/IForecast';
import Typography from '../Typography/Typography';
import { SPECIAL_CHARS } from '../../config/constants';
import moment from 'moment';
import { generateIconUrl } from '../../utility/utility';

export interface DailyForecastPanelProps {
	index: number;
	data: IForecast;
}

const DailyForecastPanel: React.FC<DailyForecastPanelProps> = ({
	index,
	data,
}) => {
	const { temp, weather, dt: dateTime } = data;

	const tempDay = `Day: ${temp.day}${SPECIAL_CHARS.CELSIUS}`;
	const tempNight = `Night: ${temp.night}${SPECIAL_CHARS.CELSIUS}`;
	const tempMorning = `Morning: ${temp.morn}${SPECIAL_CHARS.CELSIUS}`;
	const date =
		moment().format('DD/MM/YYYY') ===
		moment(dateTime * 1000).format('DD/MM/YYYY')
			? 'Today'
			: moment(dateTime * 1000).format('ddd Do MMM YYYY');

	return (
		<div
			className={clsx(styles.root)}
			style={{ animationDelay: `${index * 100}ms` }}
		>
			<div className={styles.detailsContainer}>
				<Typography text={date} bold />
				<Typography text={weather[0].description} display="block" />
				<div className={styles.tempContainer}>
					<Typography
						className={styles.typography}
						italic
						text={tempMorning}
						variant="caption"
					/>
					<Typography
						className={styles.typography}
						italic
						text={tempDay}
						variant="caption"
					/>
					<Typography
						className={styles.typography}
						italic
						text={tempNight}
						variant="caption"
						align="right"
					/>
				</div>
			</div>
			<div className={styles.imageContainer}>
				<img
					className={styles.image}
					src={generateIconUrl(weather[0].icon)}
					alt={weather[0].description}
				/>
			</div>
		</div>
	);
};

export default DailyForecastPanel;
