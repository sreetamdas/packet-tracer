const console = (state = [], action) => {
	switch (action.type) {
		case "OPEN_CONSOLE":
			return { ...state, console_is_open: true };
		default:
			return state;
	}
};

export default console;
