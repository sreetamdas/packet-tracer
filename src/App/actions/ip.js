import checkDHCPPool from "../logic/ip";

export function generate_ip_and_subnet(
	id,
	ip_class = "C",
	subnet = `255.255.255.0`
) {
	const connected = checkDHCPPool(id);
	console.log({ connected });
}

export function assign_ip_and_subnet(id, ip, subnet) {
	return {
		type: "ASSIGN_IP_AND_SUBNET",
		id,
		ip,
		subnet
	};
}

export function assign_ip(id, ip) {
	return {
		type: "ASSIGN_IP",
		id,
		ip
	};
}

export function assign_subnet(id, subnet) {
	return {
		type: "ASSIGN_SUBNET",
		id,
		subnet
	};
}
