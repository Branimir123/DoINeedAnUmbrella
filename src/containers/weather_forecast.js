import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';

class WeatherForecast extends Component {
    renderAnswer(description) {
        if(description == 'shower rain' 
            || description == 'rain' 
            || description == 'thunderstorm' 
            || description == "snow"){
                return <p className="answer-yes">YES</p>;
        }
        else if(!description){
            return;
        }
        else {
            return <p className="answer-no">NO</p>;
        }
    }

    renderWeather(weather){
        if(!weather.icon){
            return;
        }

        const weatherDescription = weather.description;
        const iconSrc = `http://openweathermap.org/img/w/${weather.icon}.png`;
        const city = weather.city;

        return (
            <div>   
                {this.renderAnswer(weatherDescription)}
                <img className="weather-icon" src={iconSrc} alt="icon-img"/>
                <p className="weather-description">Weather: {weatherDescription}</p>
                <p className="weather-location">We found you there: {city}</p>
            </div>
        );
    }

    render() {
       return (
            <div>
                {this.renderWeather(this.props.weather)}       
            </div> 
       );
    }
}

function mapStateToProps({ weather }) {
    return { weather };
}

export default connect(mapStateToProps)(WeatherForecast);
