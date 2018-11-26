import { ping } from "../actions/command";

const commands = (params = []) => {
	const args = [],
		flags = [];

	const cmd = params.shift();

	params.forEach((arg, index) => {
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

	switch (cmd) {
		case "ping":
			ping(args[0], args[1]);
		default:
			return false;
	}
};

export default commands;
