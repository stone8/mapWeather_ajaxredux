import React, { Component } from 'react';
import { connect } from 'react-redux'
import Chart from '../components/chart'
import GoogleMap from '../components/google_map'

const API_KEY = "AIzaSyCyaV4ziMjSTHimDEHroDTykFHumkC28rU"

class WeatherList extends Component {

//single city, single row:
	renderWeather(cityData) {
		const temps = cityData.list.map(weather => weather.main.temp)
		const pressures = cityData.list.map(weather => weather.main.pressure)
		const humidity = cityData.list.map(weather => weather.main.humidity)

		

		const { lon, lat } = cityData.city.coord;
		console.log("long: ", lon);
		console.log("lat: ", lat)

		return (
			<tr key={cityData.city.name}>
				<td><GoogleMap lon={lon} lat={lat} /></td>
				<td><Chart data={temps} color="orange" units="K" /></td>
				<td><Chart data={pressures} color="green" units="hpa"/></td>
				<td><Chart data={humidity} color="blue" units="%"/></td>
			</tr>
		)
	}

	render() {
		return (
			<table className="table table-hover">
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature (k)</th>
						<th>Pressure (hPa) </th>
						<th>Humidity (%) </th>
					</tr>
				</thead>
				<tbody>
					{this.props.weather.map(this.renderWeather)}
				</tbody>
			</table>

		)
	}
}
/* same as below
function mapStateToProps(state) {
	return {weather: state:weather}
}*/

function mapStateToProps({weather}) {
	return {weather}
}
//export connected version
export default connect(mapStateToProps)(WeatherList)