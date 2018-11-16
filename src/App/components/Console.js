import React from "react";
import Terminal from "terminal-in-react";
import Modal from "react-responsive-modal";

export default class Console extends React.Component {
	constructor(props) {
		super(props);

		// const { consoleState } = this.props;
		this.onOpenModal = this.onOpenModal.bind(this);
		this.onCloseModal = this.onCloseModal.bind(this);
	}

	componentWillUnmount() {
		console.log("unmounted");
	}

	setConsoleState = open => {
		this.props.set_console_state(open);
	};

	onOpenModal = () => {
		this.props.set_console_state(true);
	};

	closingModal = () => {
		console.log("unmounted3");
	};

	onCloseModal = () => {
		console.log("unmounting");
		this.props.set_console_state(false);
	};

	render() {
		return (
			<React.Fragment>
				<Modal
					open={this.props.console.open}
					onExited={this.closingModal}
					onClose={this.onCloseModal}
					animationDuration={0}
				>
					<h2>{this.props.console.id}</h2>
					<Terminal />
				</Modal>
			</React.Fragment>
		);
	}
}
