import React from "react";
import { IGeoCodingResponse } from "../../interfaces/IGeoCodingResponse";
import GeoCodePanel from "../GeoCodePanel/GeoCodePanel";
import styles from "./CitySearchResultsContainer.module.css";
import { v4 as uuid } from "uuid";
import { useAppContext } from "../../context/AppStateContext";
import { APP_ACTIONS } from "../../reducers/AppReducer";

export interface CitySearchResultsContainerProps {}

const CitySearchResultsContainer: React.FC<CitySearchResultsContainerProps> =
	() => {
		const { state, dispatch } = useAppContext();
		const { geoCodings } = state;
		return (
			<div className={styles.root}>
				{geoCodings.map((code: IGeoCodingResponse) => {
					return (
						<GeoCodePanel
							data={code}
							key={uuid()}
							onClick={() => {
								dispatch({
									type: APP_ACTIONS.UPDATE_GEOCODE,
									payload: code,
								});
							}}
						/>
					);
				})}
			</div>
		);
	};

export default CitySearchResultsContainer;
