import { ping, enable } from "../actions/command";
import { assign_ip_and_subnet } from "../actions/ip";
import {
	add_interface_ip_and_subnet,
	set_active_interface,
} from "../actions/router";

import store from "../store";

const commands = (params = []) => {
	const args = [],
		flags = [];

	console.log("params:", params);

	const cmd = params.shift();

	params.forEach((arg, index) => {
		// console.log(index);
		if (arg[0] === "-") {
			if (arg[1] === "-") {
				flags.push(arg.slice(2));
			} else {
				flags.push(arg.slice(1));
			}
		} else {
			args.push(arg);
		}
	});
	// separate function?
	switch (cmd) {
		case "en":
		case "enable":
			console.log("enabled");
			enable();
			break;
		case "if":
		case "interface":
			set_active_interface(...args);
			break;
		case "ip":
			if (args[0] === "add" || args[0] === "address") {
				console.log("shifting");
				args.shift();
			}
			const { inter_face, router } = store.getState().active;
			add_interface_ip_and_subnet("", inter_face, "123", "345");
			break;
		case "ping":
			ping(...args);
			break;
		default:
			return false;
	}
};

const handle_shorts = props => {
	const commands = [
		"en",
		"enable",
		"exit",
		"ping",
		"ip",
		"hostname",
		"sh",
		"cp",
		"write",
		"confrr",
		"configure",
	],
	cmd = props.shift();

	console.log("received short:", cmd);


};

export default commands;
