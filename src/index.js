import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { Chat } from "./ChatGpt";
import "./styles.css";

const env = require('dotenv');
env.config();

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <div className="container">
    < Chat/>
    </div>
  </StrictMode>,
  rootElement
);
