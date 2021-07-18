import React, {
	Fragment,
	FormEvent,
	ChangeEvent,
	MutableRefObject,
} from 'react';
import CitySearchBar from '../components/CitySearchBar/CitySearchBar';
import CitySearchResultsContainer from '../components/CitySearchResultsContainer/CitySearchResultsContainer';
import { IGeoCodingResponse } from '../interfaces/IGeoCodingResponse';

export interface SearchViewProps {
	onSubmit: (event: FormEvent) => void;
	loading: boolean;
	onCityNameChange: (event: ChangeEvent<HTMLInputElement>) => void;
	inputRef: MutableRefObject<HTMLInputElement | null>;
	error: string;
	cityName: string;
	geoCodings: IGeoCodingResponse[];
	onSelectedGeoCodeChange: (data: IGeoCodingResponse) => void;
}

const SearchView: React.FC<SearchViewProps> = ({
	onSubmit,
	loading,
	onCityNameChange,
	inputRef,
	error,
	cityName,
	geoCodings,
	onSelectedGeoCodeChange,
}) => {
	return (
		<Fragment>
			<CitySearchBar
				onSubmit={onSubmit}
				loading={loading}
				onCityNameChange={onCityNameChange}
				inputRef={inputRef}
				error={error}
				cityName={cityName}
			/>
			<CitySearchResultsContainer
				geoCodings={geoCodings}
				onSelectedGeoCodeChange={onSelectedGeoCodeChange}
			/>
		</Fragment>
	);
};

export default SearchView;
