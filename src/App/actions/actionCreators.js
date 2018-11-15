export function add_node(id) {
	return {
		type: "ADD_NODE",
		id
	};
}

export function add_connection(first_node, second_node) {
	console.log({ first_node }, { second_node });
	return {
		type: "ADD_CONNECTION",
		first_node,
		second_node
	};
}
