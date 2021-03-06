import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/index";

const defaultState = {
	nodes: [],
	connections: [],
	coordinates: [],
	console: {
		open: false,
		id: null,
		active: {},
	},
	routers: [],
	switches: [],
	// active: "this_node",
};

const store = createStore(
	rootReducer,
	defaultState,
	compose(
		applyMiddleware(thunk),
		window.__REDUX_DEVTOOLS_EXTENSION__ &&
			window.__REDUX_DEVTOOLS_EXTENSION__(),
	),
);

if (module.hot) {
	module.hot.accept("./reducers/", () => {
		const nextRootReducer = require("./reducers/index").default;
		store.replaceReducer(nextRootReducer);
	});
}

export default store;
