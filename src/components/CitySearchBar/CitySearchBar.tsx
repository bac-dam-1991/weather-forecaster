import React, {
	Fragment,
	FormEvent,
	ChangeEvent,
	MutableRefObject,
} from "react";
import { useAppContext } from "../../context/AppStateContext";
import { APP_ACTIONS } from "../../reducers/AppReducer";
import Button from "../Button/Button";
import Loader from "../Loader/Loader";
import TextInput from "../TextInput/TextInput";
import Typography from "../Typography/Typography";
import styles from "./CitySearchBar.module.css";

export interface CitySearchBarProps {
	onSubmit: (event: FormEvent) => void;
	inputRef: MutableRefObject<HTMLInputElement | null>;
}

const CitySearchBar: React.FC<CitySearchBarProps> = ({
	onSubmit,
	inputRef,
}) => {
	const { state, dispatch } = useAppContext();
	const {
		cityName,
		geoCodingsError: error,
		geoCodingsLoading: loading,
	} = state;

	const handleCityNameChange = (event: ChangeEvent<HTMLInputElement>) => {
		const payload = event.target.value.trim();
		dispatch({ type: APP_ACTIONS.UPDATE_CITY_NAME, payload });
	};

	return (
		<Fragment>
			<form onSubmit={onSubmit} className={styles.formGeocoding}>
				<TextInput
					onChange={handleCityNameChange}
					autoFocus
					className={styles.inputGeocoding}
					defaultValue={cityName}
					placeholder="Enter a city name"
					ref={inputRef}
				/>
				<Button
					label="Search"
					className={styles.submitButton}
					disabled={cityName.length < 2}
				/>
			</form>
			{error && <Typography text={error} variant="error" />}
			{loading && <Loader />}
		</Fragment>
	);
};

export default CitySearchBar;
