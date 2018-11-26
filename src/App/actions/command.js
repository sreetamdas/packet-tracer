import checkConnectivity from "../logic/connectivity";

export function active_interface(id, inter_face) {
	return {
		type: "ACTIVE INTERFACE",
		id,
		inter_face,
	};
}

export function ping(src, dest) {
	console.log("~~~", src, dest);
	console.log(this);
	return (dispatch, getState) => {
		console.log("h3r3");
		const connected = checkConnectivity(src, dest);

		if (connected) {
			dispatch({
				type: "PING",
				src,
				dest,
			});
		}
	};
}
