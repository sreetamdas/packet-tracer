import { add_router_connection } from "./router";
import store from "../store";

export * from "./ip";
export * from "./router";
export * from "./command";

export function add_node(id) {
	return {
		type: "ADD_NODE",
		id,
	};
}
export function add_switch(id) {
	return {
		type: "ADD_SWITCH",
		id,
	};
}
export function add_router(id, mac = null) {
	return {
		type: "ADD_ROUTER",
		id,
		mac,
	};
}

export function add_connection(first_node, second_node) {
	const nodes = [first_node, second_node];

	if (
		first_node.split("-")[0] === "router" ||
		second_node.split("-")[0] === "router"
	) {
		console.log("here");
		return dispatch => {
			Promise.all([
				store.dispatch(add_line_connection(first_node, second_node)),
				store.dispatch(add_router_connection(first_node, second_node)),
			]);
		};
	}
	return {
		type: "ADD_CONNECTION",
		first_node,
		second_node,
	};
}

export function add_line_connection(first_node, second_node) {
	const nodes = [first_node, second_node];
	// console.log({ });

	return {
		type: "ADD_LINE_CONNECTION",
		first_node,
		second_node,
	};
}

export function add_mac(id, mac) {
	return {
		type: "ADD_MAC",
		id,
		mac,
	};
}

export function update_coordinates(index, x, y) {
	return {
		type: "UPDATE_COORDINATES",
		index,
		x,
		y,
	};
}

export function set_console_state(open, id = "none") {
	return {
		type: "SET_MODAL_STATE",
		open,
		id,
	};
}
