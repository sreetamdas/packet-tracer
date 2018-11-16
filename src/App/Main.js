import React from "react";
import ReactLines from "./components/Nodes";
import checkConnectivity from "./logic/connectivity";
import generateMAC from "./logic/mac";

class Main extends React.Component {
	render() {
		return (
			<div>
				<ReactLines
					{...this.props}
					checkConnectivity={checkConnectivity}
					generateMAC={generateMAC}
				/>
			</div>
		);
	}
}

export default Main;
