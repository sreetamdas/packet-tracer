import React from "react";
import Terminal from "terminal-in-react";
import Modal from "react-modal";
// import commands from "../logic/commands";

Modal.setAppElement("#console");

export default class Console extends React.Component {
	constructor(props) {
		super(props);

		this.onCloseModal = this.onCloseModal.bind(this);

		this.state = { open: true };
		// const { consoleState } = this.props;

		this.commands = {
			ping: args => this.props.ping_handler(...args),
			en: () => this.props.enable_handler(),
			enable: () => this.props.enable_handler(),
			ip: args => this.props.ip_handler(...args),
			hostname: args => this.props.hostname_handler(...args),
			show: args => this.props.show_handler(...args),
			copy: args => this.props.copy_handler(...args),
			write: args => this.props.write_handler(...args),
			conf: args => this.props.configure_handler(...args),
			configure: args => this.props.configure_handler(...args),
			exit: () => this.props.exit_handler(),
			// command pass through handler => match above commands for short literals?
		};
	}

	static getDerivedStateFromProps(nextProps, prevState) {
		console.log("derived");
		if (nextProps.console.open !== prevState.open) {
			return {
				open: nextProps.console.open,
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
		// const { commands } = this.props;

		return (
			<React.Fragment>
				<Modal
					isOpen={this.state.open}
					onRequestClose={this.onCloseModal}
					contentLabel="Example Modal"
					style={{
						overlay: {
							backgroundColor: "rgba(255, 255, 255, 0.3)",
						},
						content: {
							position: "fixed",
							top: "50%",
							left: "50%",
							width: "75%",
							height: "75%",
							transform: "translate(-50%, -50%)",
						},
					}}
				>
					<h2>{this.props.console.id}</h2>
					<Terminal
						// commandPassThrough={cmd => this.props.command(cmd)}
						commands={this.commands}
						color="yellow"
						prompt="yellow"
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
