import * as React from 'react';
import CitySearchBar from './components/CitySearchBar/CitySearchBar';
import DailyForecastPanel from './components/DailyForecastPanel/DailyForecastPanel';
import Typography from './components/Typography/Typography';

export interface AppProps {}

const App: React.FC<AppProps> = () => {
	return (
		<div>
			<Typography text="Weather forecast" variant="heading" />
			<CitySearchBar />
			{[1, 2, 3].map((num: number, index: number) => {
				return <DailyForecastPanel index={index} />;
			})}
		</div>
	);
};

export default App;
