/*
 * @Author: maoguiun
 * @Date: 2019-11-07 10:08:18
 * @LastEditors: maoguiun
 * @LastEditTime: 2019-11-07 11:58:37
 * @FilePath: \common-app\src\App.js
 */
import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Park from "./containers/park";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
            <Park />
        </div>
    );
}

export default App;
