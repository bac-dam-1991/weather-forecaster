import * as React from 'react';

export type TypographyVariant =
	| 'heading'
	| 'subheading'
	| 'body'
	| 'caption'
	| 'paragraph';
export interface TypographyProps {
	variant: TypographyVariant;
}

const Typography: React.FC<TypographyProps> = ({ variant, children }) => {
	switch (variant) {
		case 'heading':
			return <h1>{children}</h1>;
		case 'subheading':
			return <h2>{children}</h2>;
		case 'body':
			return <span>{children}</span>;
		case 'caption':
			return <span>{children}</span>;
		case 'paragraph':
			return <p>{children}</p>;
		default:
			return <span>{children}</span>;
	}
};

export default Typography;
