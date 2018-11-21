function coordinates(state = [], action) {
	switch (action.type) {
		case "UPDATE_COORDINATES":
			return {
				...state,
				[action.index]: [action.x, action.y]
			};

		default:
			return state;
	}
}

export default coordinates;
