import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faDesktop,
	faArrowsAlt,
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
		this.Routers = this.Routers.bind(this);
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
	componentDidMount() {
		console.log("connections loaded");
	}
	handleMovement = (e, data) => {
		// console.log("called1");
		const id = data.node.firstChild.id;
		const el = document.getElementById(id);

		if (!el) {
			return false;
		}
		const box = el.getBoundingClientRect();
		const x = box.left + box.width / 2;
		const y = box.bottom - box.height / 2;
		console.log({ id });
		const index = Object.keys(this.props.nodes).indexOf(id);
		console.log({ id });
		this.setState({
			coordinates: [x, y],
			moving: id
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
			id,
			this.state.coordinates[0],
			this.state.coordinates[1]
		);
		this.setState({
			moving: false
		});
	};

	connectLine(e) {
		const node = e.target.id;

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

			const nodes = document.getElementsByClassName("line-node");
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
		this.props.add_router(router);
		// this.setState({
		// 	active: true
		// });
	};

	consoleToggleListener = () => {
		const nodes = document.getElementsByClassName("line-node");
		Array.from(nodes).forEach(element => {
			element.addEventListener("dblclick", this.toggleConsole);
		});
	};

	toggleConsole = e => {
		console.log(e.target.id);
		this.props.set_console_state(true, e.target.id);
	};

	insertLine() {
		this.setState({
			message: "click on the first one"
		});
		const nodes = document.getElementsByClassName("line-node");
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
					node => (
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
									className="line-node"
								/>
							</div>
						</Draggable>
					),
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
			updated_coordinates = this.state.moving
				? {
						...coordinates,
						[this.state.moving.split("-")[0]]: {
							...coordinates[this.state.moving.split("-")[0]],
							[this.state.moving.split("-")[1]]: [
								...this.state.coordinates
							]
						}
				  }
				: { ...coordinates };

		console.log(updated_coordinates);
		console.log(lines_keys);
		console.log(lines_values);

		return (
			<React.Fragment>
				{lines_keys.map((node, index) =>
					lines_values[index].map(dest => (
						<Line
							key={`${node}-${dest}`}
							x0={
								updated_coordinates[node.split("-")[0]][
									node.split("-")[1]
								][0]
							}
							y0={
								updated_coordinates[node.split("-")[0]][
									node.split("-")[1]
								][1]
							}
							x1={
								updated_coordinates[dest.split("-")[0]][
									dest.split("-")[1]
								][0]
							}
							y1={
								updated_coordinates[dest.split("-")[0]][
									dest.split("-")[1]
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

	Routers = () => {
		console.log("here at routers");
		const { routers } = this.props;
		if (Object.keys(routers).length === 0) {
			// typeof routers === "undefined" ||
			// routers === null ||
			// routers.length === null ||
			// routers.length === 0
			console.log("no routers");
			return null;
		}
		console.log("routers");
		return (
			<React.Fragment>
				{Object.keys(routers).map(
					router => (
						<Draggable
							key={router}
							onStop={this.updateCoordinatesInReduxStore}
							onDrag={this.handleMovement}
						>
							<div className="shrink fa-stack fa-2x">
								<FontAwesomeIcon
									id={router}
									icon={faCircle}
									className="fa-stack-2x"
								/>
								<FontAwesomeIcon
									icon={faArrowsAlt}
									className="fa-stack-1x"
									inverse
								/>
							</div>
						</Draggable>
					)
					// this.consoleToggleListener()
				)}
			</React.Fragment>
		);
	};
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
				<div>{this.Routers()}</div>
				<div id="console" />
			</div>
		);
	}
}
