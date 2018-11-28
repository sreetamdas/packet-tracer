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
			en: () => this.props.enable_handler(),
			enable: () => this.props.enable_handler(),
			exit: () => this.props.exit_handler(),
			ping: args => this.props.ping_handler(...args),
			ip: args => this.props.ip_handler(...args),
			hostname: args => this.props.hostname_handler(...args),
			sh: args => this.props.show_handler(...args),
			cp: args => this.props.copy_handler(...args),
			write: args => this.props.write_handler(...args),
			conf: args => this.props.configure_handler(...args),
			configure: args => this.props.configure_handler(...args),
			// command pass through handler => match above commands for short literals?
		};
	}

	componentDidMount = () => {
		console.log("commands:", this.commands.conf);
	};

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

	handle_shorts = props => {
		console.log({ props });
		const cmds = Object.keys(this.commands),
			match = cmds.filter(cmd => cmd.includes(props[0]));

		console.log({ cmds }, { match });

		return match.length === 0
			? "no matching command"
			: match.length > 1
			? "ambigious command"
			: match.length === 1
			? match
			: "unhandled error";
	};

	render() {
		// const { commands } = this.props;

		return (
			<React.Fragment>
				{/* <Modal
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
				> */}
				<h2>{this.props.console.id}</h2>
				<Terminal
					commandPassThrough={(cmd, runCommand) => {
						console.log(this.handle_shorts(cmd));
					}}
					commands={this.commands}
					color="yellow"
					prompt="yellow"
					startState="maximised"
					allowTabs={false}
					showActions={false}
					msg="hello world"
				/>
				{/* </Modal> */}
			</React.Fragment>
		);
	}
}
