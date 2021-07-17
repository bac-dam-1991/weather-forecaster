import React, { Fragment } from 'react';
import { useGetGeoCodings } from '../../hooks/useGetGeoCoding';
import { IGeoCodingResponse } from '../../interfaces/IGeoCodingResponse';
import Button from '../Button/Button';
import GeoCodePanel from '../GeoCodePanel/GeoCodePanel';
import TextInput from '../TextInput/TextInput';
import Typography from '../Typography/Typography';
import styles from './CitySearchBar.module.css';
import { v4 as uuid } from 'uuid';

export interface CitySearchBarProps {}

const CitySearchBar: React.FC<CitySearchBarProps> = () => {
	const inputRef = React.useRef<HTMLInputElement | null>(null);
	const [cityName, setCityName] = React.useState<string>('');
	const { geoCodings, loadGeoCodings, loading, error } = useGetGeoCodings();

	const handleCityNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const val = event.target.value.trim();
		setCityName(val);
	};

	const handleSubmit = async (event: React.FormEvent) => {
		event.preventDefault();
		if (!inputRef.current) {
			return;
		}
		await loadGeoCodings(cityName);
		inputRef.current.value = '';
	};

	return (
		<Fragment>
			<form onSubmit={handleSubmit} className={styles.formGeocoding}>
				<TextInput
					onChange={handleCityNameChange}
					autoFocus
					className={styles.inputGeocoding}
					defaultValue={cityName}
					placeholder="Enter a city name"
					ref={inputRef}
				/>
				<Button label="Search" />
			</form>
			{error && <Typography text={error} variant="error" />}
			{loading ? (
				<Typography text="Loading..." />
			) : (
				<div className={styles.searchResultsContainer}>
					{geoCodings.map((code: IGeoCodingResponse) => {
						return <GeoCodePanel data={code} key={uuid()} />;
					})}
				</div>
			)}
		</Fragment>
	);
};

export default CitySearchBar;
