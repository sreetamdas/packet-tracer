import React from "react";

import Nodes from "./components/Nodes";
import Console from "./components/Console";

import checkConnectivity from "./logic/connectivity";

export default class PacketTracer extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<React.Fragment>
				<h1>This is Packet Tracer.</h1>
				{/* <Nodes {...this.props} checkConnectivity={checkConnectivity} /> */}
				<Console {...this.props} />
			</React.Fragment>
		);
	}
}
