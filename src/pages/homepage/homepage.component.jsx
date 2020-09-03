<<<<<<< HEAD
import React, { Component } from 'react';
import axios from 'axios';
import './homepage.styles.css';

class Homepage extends Component {
  state = {
    name: null,
    temp: null,
    feels_like: null,
    cloudType: null,
    windSpeed: null,
    selectedLoc: null,
  };
  async componentDidMount() {
    try {
      const { data } = await axios.get(
        'http://api.openweathermap.org/data/2.5/weather?q=New York City&appid=5465c1bfb6bcb98e4aaaf622503ad48a'
      );
      const {
        name,
        main: { temp, feels_like },
        weather,
        wind: { speed },
      } = data;
      this.setState({
        name,
        temp,
        feels_like,
        cloudType: weather[0].description,
        windSpeed: speed,
      });
=======
import React, { Component } from "react";
import "./homepage.styles.css";
import axios from "axios";

class Homepage extends Component {
  async componentDidMount() {
    try {
      const {
        data: { daily },
      } = await axios.get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=74&lon=40&appid=f8607bd254a4e4eaba1e2214f09f3a12`
      );
      console.log(daily);
      console.log(daily[0]);
>>>>>>> master
    } catch (error) {
      console.error(error);
    }
  }
<<<<<<< HEAD

  convertKtoF(kTemp) {
    return Math.round(((kTemp - 273.15) * 9) / 5 + 32);
  }

  convertMStoMPH(msSpeed) {
    return Math.round(msSpeed * 2.237);
  }

  render() {
    const { name, temp, feels_like, cloudType, windSpeed } = this.state;
    return (
      <div className="homepage">
        <h1>HOMEPAGE</h1>
        <h2>Location:{name}</h2>
        <h3>Actual Temperature: {this.convertKtoF(temp)} degrees</h3>
        <h3>Feels Like: {this.convertKtoF(feels_like)} degrees</h3>
        <h3>How Is It Outside?: {cloudType}</h3>
        <h3>Wind Speed: {this.convertMStoMPH(windSpeed)} MPH</h3>
      </div>
    );
  }
}

=======
  render() {
    return (
      <div className="homepage">
        <h1>HOMEPAGE</h1>
      </div>
    );
  }
}

>>>>>>> master
export default Homepage;
