import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreators from "./actions/actionCreators";
import Main from "./Main";

function mapStateToProps(state) {
	return {
		nodes: state.nodes,
		connections: state.connections,
		coordinates: state.coordinates,
		console: state.console,
		routers: state.routers
	};
}

function mapDispachToProps(dispatch) {
	return bindActionCreators(actionCreators, dispatch);
}

const App = connect(
	mapStateToProps,
	mapDispachToProps
)(Main);

export default App;
