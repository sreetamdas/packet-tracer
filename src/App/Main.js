import React from "react";
import PacketTracer from "./PacketTracer";
import Console from "./components/Console";

class Main extends React.Component {
	render() {
		return (
			<div>
				{/* <PacketTracer {...this.props} /> */}
				<Console {...this.props} />
			</div>
		);
	}
}

export default Main;
