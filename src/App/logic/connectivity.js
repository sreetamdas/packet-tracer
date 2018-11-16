import store from "../store";

// const { nodes, connections } = this.props;

const checkConnectivity = (first, second) => {
	const { connections } = store.getState();
	if (
		typeof connections[first] !== "undefined" &&
		connections[first].indexOf(second) !== -1
	) {
		console.log("1");
		return true;
	} else if (
		typeof connections[second] !== "undefined" &&
		connections[second].indexOf(first) !== -1
	) {
		console.log("2");
		return true;
	} else {
		return false;
	}
};

// store.subscribe(checkConnectivity);

export default checkConnectivity;
