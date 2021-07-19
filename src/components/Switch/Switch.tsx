import React, { HTMLAttributes } from 'react';
import styles from './Switch.module.css';
import { v4 as uuid } from 'uuid';
import clsx from 'clsx';

export type AnchorType = 'left' | 'right';
export interface SwitchProps extends HTMLAttributes<HTMLInputElement> {
	label: string;
	anchor?: AnchorType;
}

const Switch: React.FC<SwitchProps> = ({
	label,
	anchor = 'left',
	...inputProps
}) => {
	const id = uuid();

	return (
		<div className={clsx(styles.root, anchor === 'right' && styles.labelRight)}>
			<label htmlFor={id} className={styles.label}>
				{label}
				<input type="checkbox" id={id} hidden {...inputProps} />
				<span className={styles.switch}>
					<span className={styles.slider} />
				</span>
			</label>
		</div>
	);
};

export default Switch;
