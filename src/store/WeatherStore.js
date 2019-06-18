import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { changeWeather } from "../reducer/WeatherReducer";

export const createMystore = () =>
  createStore(changeWeather, applyMiddleware(thunk));
