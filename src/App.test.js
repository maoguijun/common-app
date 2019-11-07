/*
 * @Author: maoguiun
 * @Date: 2019-11-07 10:08:18
 * @LastEditors: maoguiun
 * @LastEditTime: 2019-11-07 12:00:49
 * @FilePath: \common-app\src\App.test.js
 */
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
});
