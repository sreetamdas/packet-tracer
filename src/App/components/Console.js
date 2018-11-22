import React from "react";
import Terminal from "terminal-in-react";
import { Modal, Button } from "react-bootstrap";

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
					show={this.props.console.open}
					onHide={this.onCloseModal}
					dialogClassName="custom-modal"
				>
					<Modal.Header closeButton>
						<Modal.Title id="contained-modal-title-lg">
							Modal heading
						</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<h4>{this.props.console.id}</h4>
						<Terminal />
					</Modal.Body>
					<Modal.Footer>
						<Button onClick={this.handleHide}>Close</Button>
					</Modal.Footer>
				</Modal>
			</React.Fragment>
		);
	}
}
