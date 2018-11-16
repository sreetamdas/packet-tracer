import store from "../store";
import { add_mac } from "../actions/actionCreators";

const generateMAC = id => {
	const mac = "XX:XX:XX:XX:XX:XX".replace(/X/g, () => {
		return "0123456789ABCDEF".charAt(
			Math.floor(Math.random() * 16)
		);
	});

	store.dispatch(add_mac(id, mac));
	//     {
	//     type: "ADD_MAC",
	//     id,
	//     mac
	// }

	return mac;
};

export default generateMAC;
