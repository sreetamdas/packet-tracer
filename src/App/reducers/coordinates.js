function coordinates(state = [], action) {
	switch (action.type) {
		case "UPDATE_COORDINATES":
			const [element_type, identifier] = [...action.id.split("-")];
			console.log({ element_type });
			return {
				...state,
				[element_type]: {
					...state[element_type],
					[identifier]: [action.x, action.y]
				}
			};

		default:
			return state;
	}
}

export default coordinates;
