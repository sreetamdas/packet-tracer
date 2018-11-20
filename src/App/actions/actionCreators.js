export function add_node(id) {
	return {
		type: "ADD_NODE",
		id
	};
}
export function add_switch(id) {
	return {
		type: "ADD_SWITCH",
		id
	};
}
export function add_router(id) {
	return {
		type: "ADD_ROUTER",
		id
	};
}

export function add_connection(first_node, second_node) {
	return {
		type: "ADD_CONNECTION",
		first_node,
		second_node
	};
}

export function add_mac(id, mac) {
	return {
		type: "ADD_MAC",
		id,
		mac
	};
}

export function update_coordinates(id, x, y) {
	return {
		type: "UPDATE_COORDINATES",
		id,
		x,
		y
	};
}

export function set_console_state(open, id = "none") {
	return {
		type: "SET_CONSOLE_STATE",
		open,
		id
	};
}
