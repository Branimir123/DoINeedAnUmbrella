import axios from 'axios';
import { FETCH_WEATHER, FETCH_WEATHER_ERROR } from './types';

const API_KEY  = process.env.API_KEY;
const ROOT_URL = `https://api.apixu.com/v1/current.json?key=${API_KEY}`;

export default function fetchWeather(coordinates) {
    return function(dispatch){        
        const url = `${ROOT_URL}&q=${coordinates.latitude},${coordinates.longitude}`;
        
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