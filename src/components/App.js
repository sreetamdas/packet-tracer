import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop } from "@fortawesome/free-solid-svg-icons";
import Draggable from "react-draggable";
import LineTo from "react-lineto";

class App extends React.Component {
	render() {
		return (
			<div>
				<fieldset className="">
					<h1>This is App.</h1>
					{/* <Draggable> */}
					<div className="E1">
						<FontAwesomeIcon icon={faDesktop} size="3x" />
					</div>
					{/* </Draggable> */}
					<h1>iuhweifubwiefciuweciuwefcuwbfciwefcwefc</h1>
					{/* <Draggable> */}
					<div className="E2">
						<FontAwesomeIcon icon={faDesktop} size="3x" />
					</div>
					{/* </Draggable> */}
				</fieldset>
				<LineTo from="E1" to="E2" borderWidth={3} borderColor="red" />
			</div>
		);
	}
}

export default App;
