import React from "react";
import ReactLines from "./components/Nodes";
import checkConnectivity from "./logic/connectivity";
class Main extends React.Component {
	render() {
		return (
			<div>
				<ReactLines
					{...this.props}
					checkConnectivity={checkConnectivity}
				/>
			</div>
		);
	}
}

export default Main;
