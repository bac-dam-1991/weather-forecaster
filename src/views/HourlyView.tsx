import React, { Fragment } from "react";
import { Line } from "react-chartjs-2";

const data = {
	labels: ["1", "2", "3", "4", "5", "6"],
	datasets: [
		{
			label: "Temperature",
			data: [12, 19, 3, 5, 2, 3],
			fill: false,
			backgroundColor: "rgb(255, 99, 132)",
			borderColor: "rgba(255, 99, 132, 0.2)",
		},
	],
};

const options = {
	indexAxis: "y",
	scales: {
		x: {
			beginAtZero: true,
		},
	},
	maintainAspectratio: false,
};

export interface HourlyViewProps {}

const HourlyView: React.FC<HourlyViewProps> = () => {
	return (
		<Fragment>
			<Line data={data} options={options} type="line" height={500} />
		</Fragment>
	);
};

export default HourlyView;
