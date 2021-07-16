import * as React from 'react';
// import styles from './CitySearchBar.module.css';

export interface CitySearchBarProps {}

const CitySearchBar: React.FC<CitySearchBarProps> = () => {
	const inputRef = React.useRef<HTMLInputElement | null>(null);
	const [cityName, setCityName] = React.useState<string>('');

	const handleCityNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setCityName(event.target.value);
	};

	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();
		if (!inputRef.current) {
			return;
		}
		console.log({ cityName });
		inputRef.current.value = '';
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				placeholder="Enter city name"
				defaultValue={cityName}
				ref={inputRef}
				onChange={handleCityNameChange}
			/>
			<input type="submit" value="Search" />
		</form>
	);
};

export default CitySearchBar;
