import React, { Component } from 'react';
import { connect } from 'react-redux';

class WeatherForecast extends Component {
    renderAnswer(description) {
        if(description === 'Heavy rain'
            || description === 'Light rain'
            || description === 'thunderstorm'
            || description === "snow"){
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

        const iconHref = weather.icon;
        const weatherDescription = weather.description;
        const city = weather.city;
        const temp = weather.temp;
        const feelsLike = weather.feelsLike;
        const grabTshirt = feelsLike >= 20;
        const grabSweather = feelsLike < 20 && feelsLike >= 10;
        const grabJacket = feelsLike < 10;
        const wind = weather.wind;
        console.log(iconHref);

        return (
            <div>
                {this.renderAnswer(weatherDescription)}
                <img src={iconHref} className="weather-icon" />
                <div>
                    <p className="weather-description"> {weatherDescription} </p>
                    <p className="weather-description"> Temperature is {temp}°C and it feels like {feelsLike}°C. The wind has a speed of {wind} kph.</p>
                    {grabTshirt && <p className="weather-description"> A t-shirt would be OK! </p>}
                    {grabSweather && <p className="weather-description"> You might consider taking a sweater though. It looks a little cold out there. </p>}
                    {grabJacket && <p className="weather-description"> Hey, it's chilling out there. Take your winter jacket! </p>}
                </div>
                <p className="weather-location">We found you in {city}</p>
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
