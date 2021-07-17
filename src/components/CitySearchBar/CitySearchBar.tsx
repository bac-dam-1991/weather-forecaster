import React, { Fragment } from "react";
import { useGetGeoCodings } from "../../hooks/useGetGeoCoding";
import { IGeoCodingResponse } from "../../interfaces/IGeoCodingResponse";
import Typography from "../Typography/Typography";
// import styles from './CitySearchBar.module.css';

export interface CitySearchBarProps {}

const CitySearchBar: React.FC<CitySearchBarProps> = () => {
	const inputRef = React.useRef<HTMLInputElement | null>(null);
	const [cityName, setCityName] = React.useState<string>("");
	const { geoCodings, loadGeoCodings, loading } = useGetGeoCodings();

	const handleCityNameChange = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		setCityName(event.target.value);
	};

	const handleSubmit = async (event: React.FormEvent) => {
		event.preventDefault();
		if (!inputRef.current) {
			return;
		}
		await loadGeoCodings(cityName);
		inputRef.current.value = "";
	};

	return (
		<Fragment>
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
