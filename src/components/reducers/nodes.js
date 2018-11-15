const nodes = (state = [], action) => {
	switch (action.type) {
		case "ADD_NODE":
			console.log("Adding Node");
			return [...state, action.id];
		default:
			return state;
	}
};

export default nodes;
