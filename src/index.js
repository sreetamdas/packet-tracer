import React from "react";
import { render } from "react-dom";
import "./index.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./components/Home";
import App from "./components/App";

import "./assets/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

import registerServiceWorker from "./registerServiceWorker";

const Root = () => {
	return (
		<React.Fragment>
			<BrowserRouter basename={process.env.PUBLIC_URL}>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/app" component={App} />
					{/* <Route component={NotFound} /> */}
				</Switch>
			</BrowserRouter>
		</React.Fragment>
	);
};

render(<Root />, document.getElementById("root"));
registerServiceWorker();
