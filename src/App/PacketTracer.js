import React from "react";

import Nodes from "./components/Nodes";
// import Lines from "./components/Lines";
import Console from "./components/Console";

import checkConnectivity from "./logic/connectivity";
import generateMAC from "./logic/mac";

import { Router, Switch } from "../assets/icons";

export default class PacketTracer extends React.Component {
	constructor(props) {
		super(props);

		this.handleMovingNode = this.handleMovingNode.bind(this);

		this.state = {
			coordinates: [],
			moving: false
		};
	}

	handleMovingNode = (index, x, y) => {
		this.setState({
			moving: index,
			coordinates: [x, y]
		});
	};
	render() {
		return (
			<React.Fragment>
				<h1>This is Packet Tracer.</h1>
				<Nodes
					{...this.props}
					checkConnectivity={checkConnectivity}
					generateMAC={generateMAC}
					handleMovingNode={this.handleMovingNode}
				/>
				{/*<Lines
					{...this.props}
					movingNodeIndex={this.state.moving}
					movingNodeCoordinates={this.state.coordinates}
				/>*/}
				<Console {...this.props} />
				<Router />
				<Switch />
				<div id="console" />
			</React.Fragment>
		);
	}
}
