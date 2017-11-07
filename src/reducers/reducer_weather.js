import { FETCH_WEATHER, FETCH_WEATHER_ERROR } from '../actions/types';

export default function(state = {}, action){
    switch(action.type){
        case FETCH_WEATHER:
            return  { 
                description: action.payload.data.current.condition.text,
                icon: action.payload.data.current.condition.icon,
                city: action.payload.data.location.region,
                temp: action.payload.data.current.temp_c,
                feelsLike: action.payload.data.current.feelslike_c,
                wind: action.payload.data.current.wind_kph,
                precip: action.payload.data.current.precip_mm
            };
        case FETCH_WEATHER_ERROR:
            return  action.payload;
    }
    return state;
}

