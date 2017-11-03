import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import fetchWeather from '../actions/index';
import { geolocated } from 'react-geolocated';
import { bindActionCreators } from 'redux';

class Geolocation extends Component {
    constructor(props) {
        super(props);

        this.state = { coords: '' };
    }

    render() {
        if(this.props.coords){
            this.props.fetchWeather(this.props.coords);
        }

        if(!this.props.isGeolocationAvailable) {
            return <div className="text text-danger"> Your browser does not support geolocation. </div>
        }
        else if(!this.props.isGeolocationEnabled){
            return <div className="text text-danger"> Your geolocation isn't enabled. Please enable it. </div>
        }
        else if(!this.props.coords){
            return <div className="message-loading">Fetching your location... </div>
        }
        else {
            return <div></div>
        }
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ fetchWeather }, dispatch);
}

const GeolocationHOC = geolocated({
    positionOptions: {
        enableHighAccuracy: false
    },
    userDecisionTimeout: 5000
})(Geolocation);

export default connect(null, mapDispatchToProps)(GeolocationHOC);