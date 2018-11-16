import React from "react";
import Terminal from "terminal-in-react";
import Modal from "react-responsive-modal";

export default class Console extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false
		};

		const { consoleState } = this.props;
		this.onOpenModal = this.onOpenModal.bind(this);
		this.onCloseModal = this.onCloseModal.bind(this);
	}

	onOpenModal = () => {
		this.props.setConsoleState(true);
	};

	onCloseModal = () => {
		this.props.setConsoleState(false);
	};

	render() {
		return (
			<React.Fragment>
				<Modal open={consoleState} onClose={this.onCloseModal} center>
					<h2>Simple centered modal</h2>
					<Terminal />
				</Modal>
			</React.Fragment>
		);
	}
}
