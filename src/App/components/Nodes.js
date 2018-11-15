import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop } from "@fortawesome/free-solid-svg-icons";
import Draggable from "react-draggable";
import Line from "react-progress-line";
import Modal from "react-modal";

export default class Nodes extends React.Component {
	constructor() {
		super();

		this.handleMovement = this.handleMovement.bind(this);
		this.connectLine = this.connectLine.bind(this);
		this.generateNode = this.generateNode.bind(this);
		this.insertLine = this.insertLine.bind(this);
		this.Nodes = this.Nodes.bind(this);
		this.Lines = this.Lines.bind(this);
		this.state = {
			active: false,
			show: false,
			message: null,
			first_node_in_line: false
			// nodes: [],
			// coordinates: [],
			// connections: []
		};
	}
	componentDidMount() {
		console.log("connections loaded");
	}
	componentDidUpdate() {
		console.log("update");
	}
	handleMovement = (e, data) => {
		const id = data.node.firstChild.id;
		const el = document.getElementById(id);

		if (!el) {
			return false;
		}
		const box = el.getBoundingClientRect();
		const x = box.left + box.width / 2;
		const y = box.bottom - box.height / 2;
		const index = this.props.nodes.indexOf(id);

		// const updated_coordinates = [...this.state.coordinates];
		// updated_coordinates[index] = [x, y];

		this.props.update_coordinates(index, x, y);

		// this.setState({
		// 	coordinates: updated_coordinates
		// });
	};

	connectLine(e) {
		console.log("target:", e.target.id);

		const node = e.target.id;

		if (!this.state.first_node_in_line) {
			// const connections = { ...this.state.connections };
			// if (
			// 	typeof connections[`${node}`] === "undefined" ||
			// 	connections[`${node}`] === null ||
			// 	connections[`${node}`].length === null ||
			// 	connections[`${node}`].length === 0
			// ) {
			// 	connections[`${node}`] = [];
			// }
			this.setState({
				message: "click the next one",
				first_node_in_line: node
				// connections: connections
			});
		} else {
			// const connections = { ...this.state.connections };
			// console.log({ connections });
			// connections[`${this.state.first_node_in_line}`].push(node);
			this.props.add_connection(this.state.first_node_in_line, node);

			this.setState({
				message: "done",
				// connections: connections,
				first_node_in_line: false,
				show: true
			});

			document.removeEventListener("click", this.connectLine);
		}
	}

	toggleConsole = (e, data) => {
		console.log(e.target.id);
		Modal.setAppElement("#console");
	};

	generateNode() {
		const node = Math.random()
			.toString(36)
			.substr(2, 6);

		console.log("gen: ", node);
		this.props.add_node(node);
		this.setState(
			{
				// nodes: [...this.state.nodes, node],
				active: true
			}
			// () => this.props.add_node(node)
		);
	}

	consoleToggleListener = () => {
		const nodes = document.getElementsByClassName("line-node");

		Array.from(nodes).forEach(element => {
			element.addEventListener("dblclick", this.toggleConsole);
		});
	};

	insertLine() {
		const nodes = document.getElementsByClassName("line-node");
		Array.from(nodes).forEach(element => {
			element.addEventListener("dblclick", this.toggleConsole);
			element.addEventListener("click", this.connectLine);
		});
	}

	Nodes() {
		const { nodes } = this.props;
		console.log("nodes");
		return (
			<React.Fragment>
				{nodes.map(
					node => (
						<Draggable onDrag={this.handleMovement} key={node}>
							<div className="shrink">
								<FontAwesomeIcon
									id={node}
									icon={faDesktop}
									size="3x"
									style={{ backgroundColor: "white" }}
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
		const { coordinates, connections, nodes } = this.props;

		console.log("lines");

		if (
			typeof connections === "undefined" ||
			connections === null ||
			connections.length === null ||
			connections.length === 0
		) {
			return null;
		}

		const line_keys = Object.keys(connections);
		const line_values = Object.values(connections);

		return (
			<React.Fragment>
				{line_keys.map((node, index) =>
					line_values[index].map(dest => (
						<Line
							key={dest}
							x0={coordinates[`${nodes.indexOf(node)}`][0]}
							y0={coordinates[`${nodes.indexOf(node)}`][1]}
							x1={coordinates[`${nodes.indexOf(dest)}`][0]}
							y1={coordinates[`${nodes.indexOf(dest)}`][1]}
							borderWidth={3}
							zIndex={-1}
						/>
					))
				)}
			</React.Fragment>
		);
	}

	render() {
		return (
			<div>
				<h1>This is React Lines.</h1>
				<button onClick={this.generateNode}>New Node</button>
				<button onClick={this.insertLine}>Draw Line</button>
				{this.state.message}
				<br />
				line follows:
				<br />
				<div>{this.state.show && this.Lines()}</div>
				<div>{this.state.active && this.Nodes()}</div>
				<div id="console" />
			</div>
		);
	}
}
