import React from "react";

import ReactLines from "./components/Nodes";
import Console from "./components/Console";

import checkConnectivity from "./logic/connectivity";
import generateMAC from "./logic/mac";

class Main extends React.Component {
	render() {
		return (
			<div>
				<ReactLines {...this.props} checkConnectivity={checkConnectivity} generateMAC={generateMAC} />
				<Console {...this.props} />
			</div>
		);
	}
}

export default Main;
