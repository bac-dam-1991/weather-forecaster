import React, { Fragment, FormEvent, MutableRefObject } from "react";
import CitySearchBar from "../components/CitySearchBar/CitySearchBar";
import CitySearchResultsContainer from "../components/CitySearchResultsContainer/CitySearchResultsContainer";
import { useAppContext } from "../context/AppStateContext";
import { IGeoCodingResponse } from "../interfaces/IGeoCodingResponse";
import { APP_ACTIONS } from "../reducers/AppReducer";

export interface SearchViewProps {
	onSubmit: (event: FormEvent) => void;
	loading: boolean;
	inputRef: MutableRefObject<HTMLInputElement | null>;
	error: string;
	geoCodings: IGeoCodingResponse[];
}

const SearchView: React.FC<SearchViewProps> = ({
	onSubmit,
	loading,
	inputRef,
	error,
	geoCodings,
}) => {
	const { dispatch, state } = useAppContext();
	const { cityName } = state;

	const handleCityNameChange = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		const payload = event.target.value.trim();
		dispatch({ type: APP_ACTIONS.UPDATE_CITY_NAME, payload });
	};

	const handleSelectedGeoCodeChange = (payload: IGeoCodingResponse) => {
		dispatch({ type: APP_ACTIONS.UPDATE_GEOCODE, payload });
	};

	return (
		<Fragment>
			<CitySearchBar
				onSubmit={onSubmit}
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
	);
};

export default SearchView;
