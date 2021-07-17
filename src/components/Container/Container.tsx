import * as React from "react";
import styles from "./Container.module.css";

export interface ContainerProps {}

const Container: React.FC<ContainerProps> = ({ children }) => {
	return <div className={styles.root}>{children}</div>;
};

export default Container;
