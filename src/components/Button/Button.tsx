import React, { ButtonHTMLAttributes } from 'react';
import styles from './Button.module.css';
import clsx from 'clsx';

export type ButtonVariant = 'primary' | 'secondary';

export type ButtonSize = 'small' | 'standard' | 'large';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	label: string;
	variant?: ButtonVariant;
	className?: string;
	size?: ButtonSize;
}

const Button: React.FC<ButtonProps> = ({
	variant = 'primary',
	label,
	className,
	size = 'standard',
	...buttonProps
}) => {
	const cssClasses = [];

	switch (size) {
		case 'small':
			cssClasses.push(styles.buttonSmall);
			break;
		case 'standard':
			cssClasses.push(styles.buttonStandard);
			break;
		case 'large':
			cssClasses.push(styles.buttonLarge);
			break;
		default:
			break;
	}

	return (
		<button {...buttonProps} className={clsx(cssClasses.join(' '), className)}>
			{label}
		</button>
	);
};

export default Button;
