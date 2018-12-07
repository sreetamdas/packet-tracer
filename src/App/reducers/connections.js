function pushNode(state = [], action) {
	return [...state, action.second_node];
}

function connections(state = [], action) {
	switch (action.type) {
		case "ADD_CONNECTION":
			console.log({ action });
			return {
				...state,
				[action.first_node]: pushNode(state[action.first_node], action)
			};
		case "ADD_LINE_CONNECTION":
			console.log({ action });
			return {
				...state,
				[action.first_node]: pushNode(state[action.first_node], action)
			};

		default:
			return state;
	}
}

export default connections;
