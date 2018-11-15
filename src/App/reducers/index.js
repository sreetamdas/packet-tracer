import { combineReducers } from "redux";
// import { routerReducer } from 'react-router-redux';

import nodes from "./nodes";
import console from "./console";
import connections from "./connections";

const rootReducer = combineReducers({ nodes, console, connections });

export default rootReducer;
