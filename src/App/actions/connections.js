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
