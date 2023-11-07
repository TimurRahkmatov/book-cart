import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import axios from "axios";

// Styles
import "./index.css";

// Redux toolkit
import { Provider } from "react-redux";
import store from './store'

// Toastify
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";


// axios
const key = localStorage.getItem(PrivateToken);
axios.defaults.headers.common["Content-Type"] = "application/json";
if (key) axios.defaults.headers.common["Key"] = key;

// Router
import { BrowserRouter as Router } from "react-router-dom";
import { PrivateToken } from "./constains/PrivateToken.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
    <ToastContainer theme="colored" />
  </Router>
);
