import { FETCH_WEATHER, FETCH_WEATHER_ERROR } from '../actions/types';

export default function(state = {}, action){
    switch(action.type){
        case FETCH_WEATHER:
            return  { 
                description: action.payload.data.weather[0].description, 
                icon: action.payload.data.weather[0].icon,
                city: action.payload.data.name 
            };
        case FETCH_WEATHER_ERROR:
            return  action.payload;
    }
    return state;
}

