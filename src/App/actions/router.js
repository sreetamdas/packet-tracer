export function add_interface(id) {
	return {
		type: "ADD_INTERFACE",
		id
	};
}

export function add_interface_ip_and_subnet(id, inter_face, ip, subnet) {
	return {
		type: "ADD_INTERFACE_IP_AND_SUBNET",
		id,
		inter_face,
		ip,
		subnet
	};
}
