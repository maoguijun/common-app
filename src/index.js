/*
 * @Author: maoguiun
 * @Date: 2019-11-07 10:08:18
 * @LastEditors: maoguiun
 * @LastEditTime: 2019-11-12 16:42:51
 * @FilePath: \common-app\src\index.js
 */
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import configureStore from "./stores";
const store = configureStore();

ReactDOM.render(<App store={store} />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
