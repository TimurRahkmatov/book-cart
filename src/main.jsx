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
axios.defaults.headers.common["Content-Type"] = "application/json";

// Router
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
    <ToastContainer theme="colored" />
  </Router>
);
