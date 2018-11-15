function update_coordinates(state = [], action) {
	return [...state, [action.x, action.y]];
}

function coordinates(state = [], action) {
	switch (action.type) {
		case "UPDATE_COORDINATES":
			return {
				...state,
				[action.id]: [action.x, action.y]
			};

		default:
			return state;
	}
}

export default coordinates;
