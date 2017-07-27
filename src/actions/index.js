import axios from 'axios';

const API_KEY = '7d9a91db3efa8a2bd42b17280f1c3b7f'
// ex6 template string:
const ROOT_URL = 'http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=' + API_KEY;
//ajax request on redux
//npm install --save redux-promise
// used for query
//npm install --save axios

// use azios to make ajax request
// the middle ware aumatically dtect the payload used is a promise, it stops and wait for promise resovem
// and took data to payload. no need to take care of async, promise, callback
// middleware can stop, modify log action before it hit reducer -gate keeper

//popular middle ware foe redux: redux-promise to help us handle ajax request inside our application
// hook it up in index.js

// action creator

export const FETCH_WEATHER = 'FETCH_WEATHER'
export function fetchWeather(city) {
	// addition query string
	const url = `${ROOT_URL}&q=${city},us`;
	const request = axios.get(url); // return a promise

	return {
		type: FETCH_WEATHER,
		payload: request
	}
}
