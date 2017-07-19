import React, { Component } from 'react';
import Geolocation from '../containers/geolocation';
import WeatherForecast from '../containers/weather_forecast';

export default class App extends Component {
  render() {
    return (
      <div className="col-md-12 app-component">
        <h1 className="big-heading">Do I need an umbrella?</h1>
        <Geolocation />
        <WeatherForecast />
      </div>
    );  
  }
}
