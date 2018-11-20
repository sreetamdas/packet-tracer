import { createStore } from "redux";

import rootReducer from "./reducers/index";

const defaultState = {
	nodes: [],
	connections: [],
	coordinates: [],
	console: {
		open: false,
		id: null
	},
	routers: []
};

const store = createStore(rootReducer, defaultState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

if (module.hot) {
	module.hot.accept("./reducers/", () => {
		const nextRootReducer = require("./reducers/index").default;
		store.replaceReducer(nextRootReducer);
	});
}

export default store;
