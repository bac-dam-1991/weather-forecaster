import React, { InputHTMLAttributes } from 'react';
import styles from './TextInput.module.css';
import clsx from 'clsx';

export interface TextInputProps
	extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {}

const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
	({ className, ...inputProps }, ref) => {
		return (
			<input
				ref={ref}
				type="text"
				{...inputProps}
				className={clsx(className, styles.textInput)}
			/>
		);
	}
);

export default TextInput;
