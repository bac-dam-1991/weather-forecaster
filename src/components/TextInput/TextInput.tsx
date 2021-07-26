import React, { InputHTMLAttributes } from "react";
import styles from "./TextInput.module.css";
import clsx from "clsx";

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {}

const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
	({ className, type = "text", ...inputProps }, ref) => {
		return (
			<input
				ref={ref}
				type={type}
				{...inputProps}
				className={clsx(className, styles.textInput)}
			/>
		);
	}
);

export default TextInput;
