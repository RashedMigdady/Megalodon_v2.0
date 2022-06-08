import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/reducer/index";
import { ToastProvider } from 'react-toast-notifications';

ReactDOM.render(
  <Router>
    <ToastProvider placement='bottom-left'>
      <Provider store={store}>
        <App />
      </Provider>
    </ToastProvider>
  </Router>,
  document.getElementById("root")
);
