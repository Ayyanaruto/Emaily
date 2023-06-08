import "materialize-css/dist/css/materialize.min.css"
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import thunk from "redux-thunk"
import App from "./components/App";
import reducers from "./reducers";

import axios from "axios";

window.axios=axios

const element = document.getElementById("root");
const root = ReactDOM.createRoot(element);

const store = createStore(reducers, {}, composeWithDevTools(applyMiddleware(thunk)));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
