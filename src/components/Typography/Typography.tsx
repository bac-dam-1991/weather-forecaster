import React from 'react';
import styles from './Typography.module.css';
import clsx from 'clsx';

export type TypographyVariant =
	| 'heading'
	| 'subheading'
	| 'body'
	| 'caption'
	| 'paragraph'
	| 'error'
	| 'link';

export interface TypographyProps {
	variant?: TypographyVariant;
	text: string;
	className?: string;
	bold?: boolean;
	italic?: boolean;
	onClick?: () => void;
}

const Typography: React.FC<TypographyProps> = ({
	variant = 'body',
	text,
	className,
	bold,
	italic,
	onClick,
}) => {
	let children = bold ? <strong>{text}</strong> : text;
	children = italic ? <em>{children}</em> : children;
	switch (variant) {
		case 'heading':
			return <h1 className={clsx(className, styles.heading)}>{children}</h1>;
		case 'subheading':
			return <h2 className={clsx(className, styles.subheading)}>{children}</h2>;
		case 'body':
			return <span className={clsx(className, styles.body)}>{children}</span>;
		case 'caption':
			return (
				<span className={clsx(className, styles.caption)}>{children}</span>
			);
		case 'error':
			return (
				<span className={clsx(styles.error, styles.caption, className)}>
					{children}
				</span>
			);
		case 'paragraph':
			return <p className={clsx(className, styles.body)}>{children}</p>;
		case 'link':
			return (
				<span className={clsx(className, styles.link)} onClick={onClick}>
					{children}
				</span>
			);
		default:
			return <span className={clsx(className, styles.body)}>{children}</span>;
	}
};

export default Typography;
