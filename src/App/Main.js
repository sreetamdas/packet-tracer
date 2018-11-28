import React from "react";
import PacketTracer from "./PacketTracer";
import Console from "./components/Console";
import checkConnectivity from "./logic/connectivity";
import commands from "./logic/commands";

class Main extends React.Component {
	render() {
		return (
			<div>
				<PacketTracer {...this.props} />
				{/* <Console
					{...this.props}
					checkConnectivity={checkConnectivity}
					// commands={commands}
				/> */}
			</div>
		);
	}
}

export default Main;
