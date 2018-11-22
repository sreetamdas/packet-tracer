import store from "../store";
import checkConnectivity from "./connectivity";

const checkDHCPPool = node => {
	const { routers } = store.getState();

	let connected_routers = [];
	Object.keys(routers).forEach(router => {
		if (checkConnectivity(node, router)) {
			console.log("connected");
			connected_routers.push(router);
		}
	});

	if (connected_routers.length === 0) {
		console.log("Not connected to any routers");
		return false;
	}

	return connected_routers;
};

export default checkDHCPPool;
