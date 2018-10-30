import React from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
export default class Home extends React.Component {
	render() {
		return (
			<div className="full-page white black-bg">
				<div className="container-fluid" style={{ marginTop: "200px" }}>
					<h1 style={{ fontSize: "100px" }}>Packet Tracer</h1>
					<Link to="/app">
						<button>Start New</button>
					</Link>
					<button>Open Existing</button>
				</div>
			</div>
		);
	}
}
