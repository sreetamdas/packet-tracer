import React from "react";
import store from "../store";

// const { nodes, connections } = this.props;

const checkConnectivity = (first, second) => {
	const { connections } = store.getState();
	if (
		typeof connections[first] === "undefined" &&
		typeof connections[second] === "undefined"
	) {
		return false;
	} else if (
		connections[first].indexOf(second) !== -1 ||
		connections[second].indexOf(first) !== -1
	) {
		return true;
	}
	return false;
};

// store.subscribe(checkConnectivity);

export default checkConnectivity;
