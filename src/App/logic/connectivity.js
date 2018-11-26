import store from "../store";

// const { nodes } = this.props;

const checkConnectivity = (first, second) => {
	console.log("checking", first, second);
	console.log(store.getState());
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

export default checkConnectivity;
