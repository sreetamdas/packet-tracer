const switches = (state = [], action) => {
	switch (action.type) {
		case "ADD_SWITCH":
			console.log("Adding Switch");
			const mac = "XX:XX:XX:XX:XX:XX".replace(/X/g, () => {
				return "0123456789ABCDEF".charAt(
					Math.floor(Math.random() * 16)
				);
			});
			return {
				...state,
				[action.id]: {
					...state[action.id],
					mac: mac
				}
			};

		default:
			return state;
	}
};

export default switches;
