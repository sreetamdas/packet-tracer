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

export function ping(src, dest) {
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

const enable = () => {
	console.log("enabling");
	const active = store.getState().active;
	console.log("active :", active);
};

const command = props => {
	return dispatch => {
		return commands(props);
	};
};

export { enable, command };
