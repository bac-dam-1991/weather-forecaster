import React from 'react';
import { IGeoCodingResponse } from '../../interfaces/IGeoCodingResponse';
import GeoCodePanel from '../GeoCodePanel/GeoCodePanel';
import styles from './CitySearchResultsContainer.module.css';
import { v4 as uuid } from 'uuid';

export interface CitySearchResultsContainerProps {
	geoCodings: IGeoCodingResponse[];
	onSelectedGeoCodeChange: (data: IGeoCodingResponse) => void;
}

const CitySearchResultsContainer: React.FC<CitySearchResultsContainerProps> = ({
	geoCodings,
	onSelectedGeoCodeChange,
}) => {
	return (
		<div className={styles.root}>
			{geoCodings.map((code: IGeoCodingResponse) => {
				return (
					<GeoCodePanel
						data={code}
						key={uuid()}
						onClick={() => {
							onSelectedGeoCodeChange(code);
						}}
					/>
				);
			})}
		</div>
	);
};

export default CitySearchResultsContainer;
