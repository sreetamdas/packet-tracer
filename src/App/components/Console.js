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

	setConsoleState = open => {
		this.props.set_console_state(open);
	};

	onOpenModal = () => {
		this.props.set_console_state(true);
	};

	onCloseModal = () => {
		this.props.set_console_state(false);
	};

	render() {
		return (
			<React.Fragment>
				<Modal open={this.props.console.open} onClose={this.onCloseModal}>
					<h2>Simple centered modal</h2>
					<Terminal />
				</Modal>
			</React.Fragment>
		);
	}
}
