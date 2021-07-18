import * as React from 'react';
import styles from './Container.module.css';
import clsx from 'clsx';

export interface ContainerProps {
	className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className }) => {
	return <div className={clsx(styles.root, className)}>{children}</div>;
};

export default Container;
