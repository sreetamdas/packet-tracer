import React from "react";
import Line from "react-progress-line";

export default class Lines extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			coordinates: [],
			moving: false
		};
	}

	static getDerivedStateFromProps(nextProps, prevState) {
		this.setState({
			moving: this.props.movingNodeIndex,
			coordinates: this.props.movingNodeCoordinates
		});
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
							key={dest}
							x0={updated_coordinates[`${nodes.indexOf(node)}`][0]}
							y0={updated_coordinates[`${nodes.indexOf(node)}`][1]}
							x1={updated_coordinates[`${nodes.indexOf(dest)}`][0]}
							y1={updated_coordinates[`${nodes.indexOf(dest)}`][1]}
							borderWidth={3}
							zIndex={-1}
						/>
					))
				)}
			</React.Fragment>
		);
	}
}
