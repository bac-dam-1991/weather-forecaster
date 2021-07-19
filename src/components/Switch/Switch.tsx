import React from 'react';
import styles from './Switch.module.css';
import { v4 as uuid } from 'uuid';

export interface SwitchProps {
	label: string;
}

const Switch: React.FC<SwitchProps> = ({ label }) => {
	const id = uuid();

	return (
		<div className={styles.root}>
			<label htmlFor={id}>{label}</label>
			<input type="checkbox" id={id} />
			<span className={styles.switchContainer}>
				<span className={styles.switch} />
			</span>
		</div>
	);
};

export default Switch;
