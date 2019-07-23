import React from "react";
import ReactDOM from "react-dom";
import "./app/styles/index.css";
import App from "./app/components/App";
import * as serviceWorker from "./app/services/serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
