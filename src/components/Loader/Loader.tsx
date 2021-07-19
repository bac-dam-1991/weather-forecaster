import React from "react";
import styles from "./Loader.module.css";
import CloudyImage from "../../assets/img/cloudy.png";
import RainyImage from "../../assets/img/rainy.png";

export interface LoaderProps {}

const Loader: React.FC<LoaderProps> = () => {
	return (
		<div className={styles.root}>
			<div className={styles.container}>
				<div className={styles.front}>
					<img src={CloudyImage} alt="Weather in the day" />
				</div>
				<div className={styles.back}>
					<img src={RainyImage} alt="Weather at night" />
				</div>
			</div>
		</div>
	);
};

export default Loader;
