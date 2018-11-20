const routers = (state = [], action) => {
	switch (action.type) {
		case "ADD_ROUTER":
			console.log("Adding Router");
			console.log({ state });
			const mac = "XX:XX:XX:XX:XX:XX".replace(/X/g, () => {
				return "0123456789ABCDEF".charAt(Math.floor(Math.random() * 16));
			});
			return {
				...state,
				[action.id]: {
					...[(action.id = null)],
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

export default routers;
