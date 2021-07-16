import * as React from 'react';

export type TypographyVariant =
	| 'heading'
	| 'subheading'
	| 'body'
	| 'caption'
	| 'paragraph';

export interface TypographyProps {
	variant?: TypographyVariant;
	text: string;
}

const Typography: React.FC<TypographyProps> = ({ variant = 'body', text }) => {
	switch (variant) {
		case 'heading':
			return <h1>{text}</h1>;
		case 'subheading':
			return <h2>{text}</h2>;
		case 'body':
			return <span>{text}</span>;
		case 'caption':
			return <span>{text}</span>;
		case 'paragraph':
			return <p>{text}</p>;
		default:
			return <span>{text}</span>;
	}
};

export default Typography;
