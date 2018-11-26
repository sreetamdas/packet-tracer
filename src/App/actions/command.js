import checkConnectivity from "../logic/connectivity";

active_interface = (id, interface) => {
	return {
		type: "ACTIVE INTERFACE",
		id,
		interface,
	};
};

ping = (src, dest) => {
	return (dispatch, getState) => {
		const connected = checkConnectivity(src, dest);

		if (connected) {
			dispatch({
				type: "PING",
				src,
				dest,
			});
		}
	};
};

export default { active_interface, ping };
