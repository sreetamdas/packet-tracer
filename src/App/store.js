import { createStore } from "redux";

import rootReducer from "./reducers/index";
import coordinates from './reducers/coordinates'

const defaultState = {
	nodes: [],
	connections: [],
	coordinates: [],
	
};

const store = createStore(
	rootReducer,
	defaultState,
	window.__REDUX_DEVTOOLS_EXTENSION__ &&
		window.__REDUX_DEVTOOLS_EXTENSION__(),
);

if (module.hot) {
	module.hot.accept("./reducers/", () => {
		const nextRootReducer = require("./reducers/index").default;
		store.replaceReducer(nextRootReducer);
	});
}

export default store;
