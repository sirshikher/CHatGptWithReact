import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { Chat } from "./ChatGpt";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
   < Chat/>
  </StrictMode>,
  rootElement
);
