import { ping } from "../actions/command";

// const commands = {
// 	ipconfig: () => {
// 		console.log("ip config ~");
// 	},
// 	merci: () => {
// 		console.log("Danke");
// 	},
// 	ping: args => ping(args[1], args[2]),
// };

function commands(cmd, args = []) {
	console.log("~~~~~~~", cmd);
	console.log("--------", args);
}

export default commands;
