/*
 * @Author: maoguiun
 * @Date: 2019-11-07 10:08:18
 * @LastEditors: maoguiun
 * @LastEditTime: 2019-11-12 16:48:37
 * @FilePath: \common-app\src\App.js
 */
import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Counter from "./containers/counter/container";
import { Provider } from "react-redux";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const { store } = this.props;
        return (
            <Provider store={store}>
                <div className="App">
                    <Counter />
                </div>
            </Provider>
        );
    }
}

export default App;
