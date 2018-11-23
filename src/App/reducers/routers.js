const routers = (state = [], action) => {
	switch (action.type) {
		case "ADD_ROUTER":
			console.log("Adding Router");
			const mac = "XX:XX:XX:XX:XX:XX".replace(/X/g, () => {
				return "0123456789ABCDEF".charAt(
					Math.floor(Math.random() * 16)
				);
			});
			return {
				...state,
				[action.id]: {
					...state[action.id],
					mac: mac,
					interface: {}
				}
			};
		case "ADD_INTERFACE":
			console.log("Adding Interface");
			const interfaces = Object.keys(state[action.id].interface);

			return {
				...state,
				[action.id]: {
					...state[action.id],
					interface: {
						...state[action.id].interface,
						[`interface-${interfaces + 1}`]: null
					}
				}
			};
		default:
			return state;
	}
};

export default routers;
