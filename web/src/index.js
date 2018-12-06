import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./containers/App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./redux/reducers";
import { BrowserRouter } from "react-router-dom";
import middleware from "./redux/middleware";

const store = createStore(reducer, middleware);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
