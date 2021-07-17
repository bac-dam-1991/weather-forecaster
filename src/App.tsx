import React, { Fragment, useState } from 'react';
import CitySearchBar from './components/CitySearchBar/CitySearchBar';
import CitySearchResultsContainer from './components/CitySearchResultsContainer/CitySearchResultsContainer';
import Container from './components/Container/Container';
import Typography from './components/Typography/Typography';
import { useGetGeoCodings } from './hooks/useGetGeoCoding';
import { IGeoCodingResponse } from './interfaces/IGeoCodingResponse';

export interface AppProps {}

const App: React.FC<AppProps> = () => {
	const inputRef = React.useRef<HTMLInputElement | null>(null);
	const [cityName, setCityName] = React.useState<string>('');
	const { geoCodings, loadGeoCodings, loading, error } = useGetGeoCodings();
	const [selectedGeoCode, setSelectedGeoCode] =
		useState<IGeoCodingResponse | null>(null);

	const handleCityNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const val = event.target.value.trim();
		setCityName(val);
	};

	const handleSelectedGeoCodeChange = (data: IGeoCodingResponse) => {
		setSelectedGeoCode(data);
	};

	const handleSubmit = async (event: React.FormEvent) => {
		event.preventDefault();
		if (!inputRef.current) {
			return;
		}
		await loadGeoCodings(cityName);
		inputRef.current.value = '';
		setCityName('');
	};

	const clearSelectedGeoCode = () => {
		setSelectedGeoCode(null);
	};

	return (
		<Container>
			<Typography text="Weather forecast" variant="heading" />
			{!selectedGeoCode && (
				<Fragment>
					<CitySearchBar
						onSubmit={handleSubmit}
						loading={loading}
						onCityNameChange={handleCityNameChange}
						inputRef={inputRef}
						error={error}
						cityName={cityName}
					/>
					<CitySearchResultsContainer
						geoCodings={geoCodings}
						onSelectedGeoCodeChange={handleSelectedGeoCodeChange}
					/>
				</Fragment>
			)}
			{selectedGeoCode && (
				<Typography
					variant="link"
					text="< Return"
					onClick={clearSelectedGeoCode}
				/>
			)}
		</Container>
	);
};

export default App;
