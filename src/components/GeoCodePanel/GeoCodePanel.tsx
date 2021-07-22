import React, { HTMLAttributes } from "react";
import { IGeoCodingResponse } from "../../interfaces/IGeoCodingResponse";
import { formatCityName } from "../../utility/utility";
import Typography from "../Typography/Typography";
import styles from "./GeoCodePanel.module.css";

export interface GeoCodePanelProps extends HTMLAttributes<HTMLDivElement> {
	data: IGeoCodingResponse;
}

const GeoCodePanel: React.FC<GeoCodePanelProps> = ({ data, ...divProps }) => {
	const { lat, lon } = data;

	const latitude = `Lat: ${lat.toFixed(2)}`;
	const longitude = `Lng: ${lon.toFixed(2)}`;
	return (
		<div className={styles.root} {...divProps}>
			<div>
				<Typography text={formatCityName(data)} bold />
			</div>
			<div className={styles.latLngContainer}>
				<Typography text={latitude} variant="caption" italic />
				<Typography text={longitude} variant="caption" italic />
			</div>
		</div>
	);
};

export default GeoCodePanel;
