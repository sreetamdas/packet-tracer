import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";

import Home from "./App/Home";
import App from "./App/App";
import store from "./App/store";

import "./assets/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

import registerServiceWorker from "./registerServiceWorker";

const Root = () => {
	return (
		<Provider store={store}>
			<React.Fragment>
				<BrowserRouter basename={process.env.PUBLIC_URL}>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/app" component={App} />
						{/* <Route component={NotFound} /> */}
					</Switch>
				</BrowserRouter>
			</React.Fragment>
		</Provider>
	);
};

render(<Root />, document.getElementById("root"));
registerServiceWorker();
