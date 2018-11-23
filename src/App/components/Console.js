import React from "react";
import Terminal from "terminal-in-react";
import Modal from "react-modal";

Modal.setAppElement("#console");

export default class Console extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			open: false
		};

		// const { consoleState } = this.props;
		this.onCloseModal = this.onCloseModal.bind(this);
	}

	static getDerivedStateFromProps(nextProps, prevState) {
		console.log("derived");
		if (nextProps.console.open !== prevState.open) {
			return {
				open: nextProps.console.open
			};
		}

		return null;
	}

	componentWillUnmount() {
		console.log("unmounted");
	}

	onCloseModal = () => {
		console.log("unmounting");

		this.props.set_console_state(false);
		console.log("redx");
	};

	render() {
		const { commands } = this.props;

		return (
			<React.Fragment>
				<Modal
					isOpen={this.state.open}
					onRequestClose={this.onCloseModal}
					contentLabel="Example Modal"
					style={{
						overlay: {
							backgroundColor: "rgba(255, 255, 255, 0.3)"
						},
						content: {
							position: "fixed",
							top: "50%",
							left: "50%",
							width: "75%",
							height: "75%",
							transform: "translate(-50%, -50%)"
						}
					}}
				>
					<h2>{this.props.console.id}</h2>
					<Terminal
						color="limegreen"
						prompt="limegreen"
						startState="maximised"
						allowTabs={false}
						showActions={false}
						msg="hello world"
					/>
				</Modal>
			</React.Fragment>
		);
	}
}
