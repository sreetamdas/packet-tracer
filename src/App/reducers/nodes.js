const nodes = (state = [], action) => {
	switch (action.type) {
		case "ADD_NODE":
			console.log("Adding Node");
			// console.log({ state });
			const mac = "XX:XX:XX:XX:XX:XX".replace(/X/g, () => {
				return "0123456789ABCDEF".charAt(Math.floor(Math.random() * 16));
			});
			return {
				...state,
				[action.id]: {
					...state[action.id],
					mac: mac
				}
			};
		// case "ADD_MAC":
		// 	return {
		// 		...state,
		// 		[action.id]: action.mac
		// 	};
		default:
			return state;
	}
};

export default nodes;
