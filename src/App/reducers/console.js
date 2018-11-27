const console = (state = [], action) => {
	switch (action.type) {
		case "SET_CONSOLE_STATE":
			return {
				...state,
				open: action.open,
				active: { ...state.active, node: action.id },
			};
		case "SET_ACTIVE_INTERFACE":
			const active_node = state.active.node;
			return {
				...state,
				active: {
					...state.active,
					interface: action.inter_face,
				},
			};
		default:
			return state;
	}
};

export default console;
