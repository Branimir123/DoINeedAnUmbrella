import React, { Component } from 'react';
import Geolocation from '../containers/geolocation';
import WeatherForecast from '../containers/weather_forecast';

export default class App extends Component {
   state = {
        animateHeading: false
   };

   ready = () => this.setState({ animateHeading: true });

   render() {
     const headingClassNames = !this.state.animateHeading ? "big-heading" : "small-heading";

     return (
       <div className="col-md-12 app-component">
         <div>
             <h1 className={headingClassNames}>Do I need an umbrella?
                 <i className="umbrella fa fa-umbrella" aria-hidden="true" />
             </h1>
         </div>
         <Geolocation isReady={this.ready}/>
         <WeatherForecast />
       </div>
     );
   }
}
