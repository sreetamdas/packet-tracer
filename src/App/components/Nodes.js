import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faDesktop,
	faArrowsAlt,
	faExchangeAlt,
	faCircle
} from "@fortawesome/free-solid-svg-icons";
import Draggable from "react-draggable";
import Line from "react-progress-line";
import Modal from "react-responsive-modal";

import { Router, Switch, NewRouter } from "../../assets/icons";

export default class Nodes extends React.Component {
	constructor() {
		super();

		this.generateNode = this.generateNode.bind(this);
		this.generateSwitch = this.generateSwitch.bind(this);
		this.generateRouter = this.generateRouter.bind(this);

		this.connectLine = this.connectLine.bind(this);
		this.insertLine = this.insertLine.bind(this);
		this.handleMovement = this.handleMovement.bind(this);

		this.Nodes = this.Nodes.bind(this);
		// this.Routers = this.Routers.bind(this);
		this.Lines = this.Lines.bind(this);

		this.state = {
			active: false,
			show: false,
			message: null,
			coordinates: [],
			moving: false,
			first_node_in_line: false
		};
	}

	handleMovement = (e, data) => {
		const id = data.node.firstChild.id;
		const el = document.getElementById(id);

		console.log({ id });

		if (!el) {
			console.log("false");
			return false;
		}
		const box = el.getBoundingClientRect();
		const x = box.left + box.width / 2;
		const y = box.bottom - box.height / 2;
		const index = Object.keys(this.props.nodes).indexOf(id);
		this.setState({
			coordinates: [x, y],
			moving: index
		});
	};

	updateCoordinatesInReduxStore = (e, data) => {
		const id = data.node.firstChild.id;
		const el = document.getElementById(id);

		if (!el || this.state.moving === false) {
			return false;
		}
		const index = Object.keys(this.props.nodes).indexOf(id);

		this.props.update_coordinates(
			index,
			this.state.coordinates[0],
			this.state.coordinates[1]
		);
		this.setState({
			moving: false
		});
	};

	connectLine(e, data) {
		const node = e.target.id;
		console.log({ e });
		console.log({ node });
		console.log({ data });

		if (!node) {
			console.log("empty target");
			return null;
		}

		if (!this.state.first_node_in_line) {
			this.setState({
				message: "click the next one",
				first_node_in_line: node
			});
		} else {
			this.props.add_connection(this.state.first_node_in_line, node);

			this.setState({
				message: "done",
				first_node_in_line: false,
				show: true
			});

			const nodes = document.getElementsByClassName("line-element");
			Array.from(nodes).forEach(element => {
				element.addEventListener("dblclick", this.toggleConsole);
				element.removeEventListener("click", this.connectLine);
			});
		}
	}

	generateNode() {
		const gen = Math.random()
				.toString(36)
				.substr(2, 6),
			node = `node-${gen}`;

		console.log("gen: ", node);
		this.props.add_node(node);
		this.setState({
			active: true
		});
	}
	generateSwitch() {
		const gen = Math.random()
				.toString(36)
				.substr(2, 6),
			not_switch = `switch-${gen}`;

		console.log("switch: ", not_switch);
		this.props.add_node(not_switch);
		this.props.add_switch(not_switch);
		// this.setState({
		// 	active: true
		// });
	}
	generateRouter = () => {
		const gen = Math.random()
				.toString(36)
				.substr(2, 6),
			router = `router-${gen}`;

		console.log("router: ", router);
		this.props.add_node(router);
		this.props.add_router(router);
		// this.setState({
		// 	active: true
		// });
	};

	consoleToggleListener = () => {
		const nodes = document.getElementsByClassName("line-element");
		Array.from(nodes).forEach(element => {
			element.addEventListener("dblclick", this.toggleConsole);
		});
	};

	toggleConsole = e => {
		const node = e.target.id;
		console.log(node);
		if (!node) {
			console.log("open console again");
			return false;
		}
		this.props.set_console_state(true, node);
	};

	insertLine() {
		this.setState({
			message: "click on the first one"
		});
		const nodes = document.getElementsByClassName("line-element");
		Array.from(nodes).forEach(element => {
			element.removeEventListener("dblclick", this.toggleConsole);
			element.addEventListener("click", this.connectLine);
		});
	}

	Nodes() {
		const { nodes } = this.props;
		if (Object.keys(nodes).length === 0) {
			// typeof nodes === "undefined" ||
			// nodes === null ||
			// nodes.length === null ||
			// nodes.length === 0
			console.log("no nodes");
			return null;
		}
		console.log("nodes");
		return (
			<React.Fragment>
				{Object.keys(nodes).map(
					node =>
						node.split("-")[0] === "node" ? (
							<Draggable
								key={node}
								onStop={this.updateCoordinatesInReduxStore}
								onDrag={this.handleMovement}
							>
								<div className="shrink">
									<FontAwesomeIcon
										id={node}
										icon={faDesktop}
										size="3x"
										style={{
											backgroundColor: "white"
										}}
										className="line-element"
									/>
								</div>
							</Draggable>
						) : node.split("-")[0] === "router" ? (
							<Draggable
								key={node}
								onStop={this.updateCoordinatesInReduxStore}
								onDrag={this.handleMovement}
							>
								<div
									className="shrink fa-stack fa-2x line-element"
									// id={node}
								>
									<FontAwesomeIcon
										id={node}
										icon={faCircle}
										className="fa-stack-2x"
									/>
									<FontAwesomeIcon
										id={node}
										icon={faArrowsAlt}
										className="fa-stack-1x line-element"
										inverse
									/>
								</div>
							</Draggable>
						) : node.split("-")[0] === "switch" ? (
							<Draggable
								key={node}
								onStop={this.updateCoordinatesInReduxStore}
								onDrag={this.handleMovement}
							>
								<div>
									<Switch id={node} />
								</div>
							</Draggable>
						) : null,
					this.consoleToggleListener()
				)}
			</React.Fragment>
		);
	}

	Lines() {
		const { coordinates, connections } = this.props,
			nodes = Object.keys(this.props.nodes);

		console.log("lines");

		if (
			typeof connections === "undefined" ||
			connections === null ||
			connections.length === null ||
			connections.length === 0
		) {
			return null;
		}

		console.log(this.state.moving);

		const lines_keys = Object.keys(connections),
			lines_values = Object.values(connections),
			updated_coordinates = {
				...coordinates,
				[this.state.moving]: [...this.state.coordinates]
			};

		return (
			<React.Fragment>
				{lines_keys.map((node, index) =>
					lines_values[index].map(dest => (
						<Line
							key={`${node}-${dest}`}
							x0={
								updated_coordinates[
									`${nodes.indexOf(node)}`
								][0]
							}
							y0={
								updated_coordinates[
									`${nodes.indexOf(node)}`
								][1]
							}
							x1={
								updated_coordinates[
									`${nodes.indexOf(dest)}`
								][0]
							}
							y1={
								updated_coordinates[
									`${nodes.indexOf(dest)}`
								][1]
							}
							borderWidth={3}
							zIndex={-1}
						/>
					))
				)}
			</React.Fragment>
		);
	}

	// Routers = () => {
	// 	console.log("here at routers");
	// 	const { routers } = this.props;
	// 	if (Object.keys(routers).length === 0) {
	// 		// typeof routers === "undefined" ||
	// 		// routers === null ||
	// 		// routers.length === null ||
	// 		// routers.length === 0
	// 		console.log("no routers");
	// 		return null;
	// 	}
	// 	console.log("routers");
	// 	return (
	// 		<React.Fragment>
	// 			{Object.keys(routers).map(
	// 				router => (
	// 					<Draggable
	// 						key={router}
	// 						onStop={this.updateCoordinatesInReduxStore}
	// 						onDrag={this.handleMovement}
	// 					>
	// 						<div className="shrink fa-stack fa-2x line-element">
	// 							<FontAwesomeIcon id={router} icon={faCircle} className="fa-stack-2x" />
	// 							<FontAwesomeIcon
	// 								id={router}
	// 								icon={faArrowsAlt}
	// 								className="fa-stack-1x"
	// 								inverse
	// 							/>
	// 						</div>
	// 					</Draggable>
	// 				)
	// 				// this.consoleToggleListener()
	// 			)}
	// 		</React.Fragment>
	// 	);
	// };
	// call reducer on mouse down
	// local state during drag

	render() {
		return (
			<div>
				<h1>This is React Lines.</h1>
				<button onClick={this.generateNode}>New Node</button>
				<button onClick={this.generateSwitch}>New Switch</button>
				<button onClick={this.generateRouter}>New Router</button>
				<button onClick={this.insertLine}>Draw Line</button>
				<button onClick={this.consoleToggleListener}>
					Toggle Console
				</button>
				{this.state.message}
				<br />
				line follows:
				<br />
				<div>{this.state.show && this.Lines()}</div>
				<div>{this.Nodes()}</div>
				<div id="console" />
			</div>
		);
	}
}
