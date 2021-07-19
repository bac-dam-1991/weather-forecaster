import { Dataset } from '../components/HourlyForecast/HourlyForecast';
import { IHourlyForecast } from '../interfaces/IHourlyForecast';
import moment from 'moment';

export const generateChartLabelsAndDatasets = (
	hourlyData: IHourlyForecast[]
): [string[], Dataset[]] => {
	const labels = hourlyData.map((hrly) => {
		return moment(hrly.dt * 1000).format('DD/MM hh:mm A');
	});
	const humidityData = hourlyData.map((hrly) => {
		return hrly.humidity;
	});
	const tempData = hourlyData.map((hrly) => {
		return hrly.temp;
	});
	const datasets: Dataset[] = [
		{
			label: 'Humidity',
			data: humidityData,
			fill: false,
			backgroundColor: 'rgb(255, 99, 132)',
			borderColor: 'rgba(255, 99, 132, 0.2)',
		},
		{
			label: 'Temperature',
			data: tempData,
			fill: false,
			backgroundColor: 'rgb(235, 110, 75)',
			borderColor: 'rgba(235, 110, 75, 0.2)',
		},
	];

	return [labels, datasets];
};
