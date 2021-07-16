import * as React from 'react';
import CitySearchBar from './components/CitySearchBar/CitySearchBar';
import Typography from './components/Typography/Typography';

export interface AppProps {}

const App: React.FC<AppProps> = () => {
	return (
		<div>
			<Typography text="Weather forecast" variant="heading" />
			<CitySearchBar />
		</div>
	);
};

export default App;
