import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Helmet, HelmetProvider } from "react-helmet-async";
import metadata from "./metadata.json";
import { constructMetaData } from "./utils/constructMetaData";

const root = ReactDOM.createRoot(document.getElementById("root"));
const HelmetContext = {};

root.render(
  <React.StrictMode>
    <HelmetProvider context={HelmetContext}>
      <Helmet title={metadata.title}>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css"></link>
      </Helmet>
      <App />
    </HelmetProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
