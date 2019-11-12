/*
 * @Author: maoguiun
 * @Date: 2019-11-12 16:08:17
 * @LastEditors: maoguiun
 * @LastEditTime: 2019-11-12 16:09:55
 * @FilePath: \common-app\src\stores\index.js
 */
import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import rootReducer from "../reducers";

const loggerMiddleware = createLogger();

export default function configureStore(preloadedState) {
    return createStore(
        rootReducer,
        preloadedState,
        applyMiddleware(thunkMiddleware, loggerMiddleware)
    );
}
