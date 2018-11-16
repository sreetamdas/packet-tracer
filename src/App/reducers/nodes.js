const nodes = (state = [], action) => {
	switch (action.type) {
		case "ADD_NODE":
			console.log("Adding Node");
			console.log({ state });
			return {...state, [action.id]: null};
		case "ADD_MAC":
			return {
				...state,
				[action.id]: action.mac
			};
		default:
			return state;
	}
};

export default nodes;
