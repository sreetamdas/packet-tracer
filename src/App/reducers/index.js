import { combineReducers } from "redux";
// import { routerReducer } from 'react-router-redux';

import nodes from "./nodes";
import console from "./console";
import connections from "./connections";
import coordinates from "./coordinates";

const rootReducer = combineReducers({
	nodes,
	console,
	connections,
	coordinates
});

export default rootReducer;
