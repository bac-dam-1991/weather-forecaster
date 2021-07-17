import React from 'react';
import { IGeoCodingResponse } from '../../interfaces/IGeoCodingResponse';
import Typography from '../Typography/Typography';
import styles from './GeoCodePanel.module.css';

export interface GeoCodePanelProps {
	data: IGeoCodingResponse;
}

const GeoCodePanel: React.FC<GeoCodePanelProps> = ({ data }) => {
	const { name, lat, lon, country } = data;

	const city = `${name}, ${country}`;
	const latitude = `Lat: ${lat.toFixed(2)}`;
	const longitude = `Lng: ${lon.toFixed(2)}`;
	return (
		<div className={styles.root}>
			<div>
				<Typography text={city} bold />
			</div>
			<div className={styles.latLngContainer}>
				<Typography text={latitude} variant="caption" italic />
				<Typography text={longitude} variant="caption" italic />
			</div>
		</div>
	);
};

export default GeoCodePanel;
