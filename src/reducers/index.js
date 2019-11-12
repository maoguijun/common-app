/*
 * @Author: maoguiun
 * @Date: 2019-11-12 16:10:22
 * @LastEditors: maoguiun
 * @LastEditTime: 2019-11-12 16:46:07
 * @FilePath: \common-app\src\reducers\index.js
 */
import { combineReducers } from "redux";
import Counter from "../containers/counter/reducers";

export default combineReducers({ Counter });
