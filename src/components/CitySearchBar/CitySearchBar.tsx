import React, { Fragment } from 'react';
import { useGetGeoCodings } from '../../hooks/useGetGeoCoding';
import { IGeoCodingResponse } from '../../interfaces/IGeoCodingResponse';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import Typography from '../Typography/Typography';
import styles from './CitySearchBar.module.css';

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
				geoCodings.map((code: IGeoCodingResponse) => {
					return <Typography text={code.name} variant="paragraph" />;
				})
			)}
		</Fragment>
	);
};

export default CitySearchBar;
