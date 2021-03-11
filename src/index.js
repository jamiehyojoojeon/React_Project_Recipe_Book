import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Router from "./components/router";
import "./style.css";

ReactDOM.render(
  <BrowserRouter basename={"/recipe-book"}>
    <Router />
  </BrowserRouter>,
  document.getElementById("root")
);
