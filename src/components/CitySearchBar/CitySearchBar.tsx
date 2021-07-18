import React, {
	Fragment,
	FormEvent,
	ChangeEvent,
	MutableRefObject,
} from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import Typography from '../Typography/Typography';
import styles from './CitySearchBar.module.css';

export interface CitySearchBarProps {
	onSubmit: (event: FormEvent) => void;
	loading: boolean;
	onCityNameChange: (event: ChangeEvent<HTMLInputElement>) => void;
	inputRef: MutableRefObject<HTMLInputElement | null>;
	error: string;
	cityName: string;
}

const CitySearchBar: React.FC<CitySearchBarProps> = ({
	onSubmit,
	loading,
	onCityNameChange,
	inputRef,
	error,
	cityName,
}) => {
	return (
		<Fragment>
			<form onSubmit={onSubmit} className={styles.formGeocoding}>
				<TextInput
					onChange={onCityNameChange}
					autoFocus
					className={styles.inputGeocoding}
					defaultValue={cityName}
					placeholder="Enter a city name"
					ref={inputRef}
				/>
				<Button
					label="Search"
					className={styles.submitButton}
					disabled={cityName === ''}
				/>
			</form>
			{error && <Typography text={error} variant="error" />}
			{loading && (
				<Typography text="Loading..." variant="caption" display="block" />
			)}
		</Fragment>
	);
};

export default CitySearchBar;
