export function add_interface(id) {
	return {
		type: "ADD_INTERFACE",
		id,
	};
}

export function add_interface_ip_and_subnet(id, inter_face, ip, subnet) {
	console.log("router actions");
	return {
		type: "ADD_INTERFACE_IP_AND_SUBNET",
		id,
		inter_face,
		ip,
		subnet,
	};
}

export function add_router_connection(first_node, second_node) {
	const nodes = [first_node, second_node];
	// console.log({ });

	return {
		type: "ADD_ROUTER_CONNECTION",
		first_node,
		second_node,
	};
}

const set_active_interface = inter_face => {
	console.log("activating", inter_face);
	return {
		type: "SET_ACTIVE_INTERFACE",
		inter_face,
	};
};

export { set_active_interface };
