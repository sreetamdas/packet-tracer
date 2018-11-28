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
	console.log("enabling");
	const active = store.getState().active;
	console.log("active :", active);
};

export { enable_handler };
