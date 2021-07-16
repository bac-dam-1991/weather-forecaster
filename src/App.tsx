import * as React from 'react';
import CitySearchBar from './components/CitySearchBar/CitySearchBar';

export interface AppProps {}

const App: React.FC<AppProps> = () => {
	return (
		<div>
			<CitySearchBar />
		</div>
	);
};

export default App;
