import axios from 'axios';
import { FETCH_WEATHER, FETCH_WEATHER_ERROR } from './types';

const API_KEY  = require('../../config').API_KEY;
const ROOT_URL = `http://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}`;

export default function fetchWeather(coordinates) {
    return function(dispatch){        
        const url = `${ROOT_URL}&lat=${coordinates.latitude}&lon=${coordinates.longitude}`;
        
        axios.get(url)
            .then(response => {
                // Update state
                dispatch({
                    type: FETCH_WEATHER,
                    payload: response
                });
            })
            .catch(err => {
                dispatch(authError(err));
            });
    }
}

export function authError(error) {
    return {
        type: FETCH_WEATHER_ERROR,
        payload: error
    }
}