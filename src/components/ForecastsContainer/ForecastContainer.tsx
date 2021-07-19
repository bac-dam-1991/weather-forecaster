import React from "react";
import { IDailyForecast } from "../../interfaces/IDailyForecast";
import { IForecastResponse } from "../../interfaces/IForecastResponse";
import DailyForecastPanel from "../DailyForecastPanel/DailyForecastPanel";
import styles from "./ForecastContainer.module.css";

export interface ForecastContainerProps {
	forecasts: IForecastResponse;
}

const ForecastContainer: React.FC<ForecastContainerProps> = ({ forecasts }) => {
	const { daily } = forecasts;

	return (
		<div className={styles.root}>
			{daily &&
				daily.map((forecast: IDailyForecast, index: number) => {
					return (
						<DailyForecastPanel
							data={forecast}
							index={index}
							key={index}
						/>
					);
				})}
		</div>
	);
};

export default ForecastContainer;
