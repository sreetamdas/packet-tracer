import React from "react";
import Terminal from "terminal-in-react";
import Modal from "react-responsive-modal";

export default class Console extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false
		};
		this.onOpenModal = this.onOpenModal.bind(this);
		this.onCloseModal = this.onCloseModal.bind(this);
	}
	onOpenModal = () => {
		this.setState({ open: true });
	};

	onCloseModal = () => {
		this.setState({ open: false });
	};

	render() {
		return (
			<React.Fragment>
				<Modal open={this.state.open} onClose={this.onCloseModal} center>
					<h2>Simple centered modal</h2>
					<Terminal />
				</Modal>
			</React.Fragment>
		);
	}
}
