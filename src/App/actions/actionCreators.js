import { add_router_connection } from "./router";
import store from "../store";

export * from "./ip";
export * from "./router";
export * from "./command";
export * from "./connections";

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
