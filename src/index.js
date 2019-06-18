import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import Home from "./components/Home";
import { Provider } from "react-redux";

import { createMystore } from "./store/WeatherStore";

const store = createMystore();

ReactDOM.render(
  <Provider store={store}>
    <Home />
  </Provider>,
  document.getElementById("root")
);
serviceWorker.unregister();
