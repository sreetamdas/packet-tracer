import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop } from "@fortawesome/free-solid-svg-icons";
import ReactLines from "./components/Nodes";

class App extends React.Component {
	render() {
		return (
			<div>
				<ReactLines />
			</div>
		);
	}
}

export default App;
