import React from "react";
import ReactDOM from "react-dom/client";
import store from "./redux/store"; 
import { Provider } from "react-redux";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root")); // ✅ Use createRoot()
root.render(
  <Provider store={store}> {/* Wrap App inside Provider */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
