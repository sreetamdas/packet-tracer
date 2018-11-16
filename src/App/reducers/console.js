const console = (state = [], action) => {
	switch (action.type) {
		case "SET_CONSOLE_STATE":
			return { ...state, open: action.open };
		default:
			return state;
	}
};

export default console;
