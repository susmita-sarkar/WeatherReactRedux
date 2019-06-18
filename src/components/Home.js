import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { geolocated } from "react-geolocated";
import { connect } from "react-redux";
import { fetchWeather } from "../action/WeatherAction";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: 0,
      long: 0
    };
  }
  fetchWeather = () => this.props.fetchWeather(this.state.lat, this.state.long);
  CityChange = e => {
    if (e.target.name === "Ban") {
      this.setState({ lat: 12.9716, long: 77.5946 }, this.fetchWeather);
    } else if (e.target.name === "Del") {
      this.setState({ lat: 28.7041, long: 77.1025 }, this.fetchWeather);
    } else if (e.target.name === "Mum") {
      this.setState({ lat: 19.076, long: 72.8777 }, this.fetchWeather);
    } else {
      this.setState(
        {
          lat: this.props.coords.latitude,
          long: this.props.coords.longitude
        },
        this.fetchWeather
      );
    }
  };

  render() {
    return (
      <div>
        <button name="Ban" onClick={this.CityChange}>
          Bangalore
        </button>
        <button name="Del" onClick={this.CityChange}>
          Delhi
        </button>
        <button name="Mum" onClick={this.CityChange}>
          Mumbai
        </button>
        <button name="loc" onClick={this.CityChange}>
          Get your location
        </button>

        <div>Temperature:{this.props.WeatherArr.main.temp}</div>
        <div>Humidity:{this.props.WeatherArr.main.humidity}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    WeatherArr: state.WeatherArr
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchWeather
    },
    dispatch
  );

const wrappedGeo = geolocated({
  positionOptions: {
    enableHighAccuracy: true
  },
  userDecisionTimeout: 5000
})(Home);

const hoc = connect(
  mapStateToProps,
  mapDispatchToProps
);

const newComponent = hoc(wrappedGeo);

export default newComponent;
