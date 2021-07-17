import * as React from "react";
import CitySearchBar from "./components/CitySearchBar/CitySearchBar";
import Container from "./components/Container/Container";
import Typography from "./components/Typography/Typography";

export interface AppProps {}

const App: React.FC<AppProps> = () => {
	return (
		<Container>
			<Typography text="Weather forecast" variant="heading" />
			<CitySearchBar />
		</Container>
	);
};

export default App;
