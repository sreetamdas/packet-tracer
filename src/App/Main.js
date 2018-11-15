import React from "react";
import ReactLines from "./components/Nodes";

class Main extends React.Component {
	render() {
		return (
			<div>
				<ReactLines {...this.props} />
			</div>
		);
	}
}

export default Main;
