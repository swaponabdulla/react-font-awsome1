import React from "react";
import ReactDOM from "react-dom";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import App from "./page/App.js";

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
