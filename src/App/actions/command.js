import checkConnectivity from "../logic/connectivity";
import commands from "../logic/commands";
import store from "../store";

export function active_interface(id, inter_face) {
	return {
		type: "ACTIVE INTERFACE",
		id,
		inter_face,
	};
}

export function ping_handler(src, dest) {
	console.log("~~~", src, dest);
	// console.log(this);
	return (dispatch, getState) => {
		console.log("h3r3");
		// const connected = checkConnectivity(src, dest);

		// if (connected) {
		dispatch({
			type: "PING",
			src,
			dest,
		});
		// }
	};
}

const enable_handler = () => {
	return {
		type: "ENABLE CONSOLE"
	}
};

const exit_handler = () => {
	console.log("exiting")
	return {
		type: "EXIT CONSOLE",

	}
}	

export { enable_handler, exit_handler };
