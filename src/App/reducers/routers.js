const routers = (state = [], action) => {
	switch (action.type) {
		case "ADD_ROUTER":
			console.log("Adding Router");
			const mac = "XX:XX:XX:XX:XX:XX".replace(/X/g, () => {
				return "0123456789ABCDEF".charAt(
					Math.floor(Math.random() * 16),
				);
			});
			return {
				...state,
				[action.id]: {
					...state[action.id],
					mac: mac,
					interface: {
						"f0/0": {},
						"f0/1": {},
					},
				},
			};
		case "ADD_INTERFACE":
			console.log("Adding Interface");
			const interfaces = Object.keys(state[action.id].interface).length;

			return {
				...state,
				[action.id]: {
					...state[action.id],
					interface: {
						...state[action.id].interface,
						[`interface-${interfaces + 1}`]: null,
					},
				},
			};
		case "ADD_INTERFACE_IP_AND_SUBNET":
			console.log("interfarse");
			return {
				...state,
				[action.id]: {
					...state[action.id],
					interface: {
						...state[action.id].interface,
						[action.inter_face]: {
							ip: action.ip,
							subnet: action.subnet,
						},
					},
				},
			};
		default:
			return state;
	}
};

export default routers;
