import * as React from 'react';
import styles from './DailyForecastPanel.module.css';
import clsx from 'clsx';

export interface DailyForecastPanelProps {
	index: number;
}

const DailyForecastPanel: React.FC<DailyForecastPanelProps> = ({ index }) => {
	return (
		<div
			className={clsx(styles.root)}
			style={{ animationDelay: `${index * 100}ms` }}
		></div>
	);
};

export default DailyForecastPanel;
