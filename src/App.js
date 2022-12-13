import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages";
import SignInPage from "./pages/signin";

function App() {
	return (
		<Switch>
			<Route exact path="/" component={Home} />
			<Route exact path="/signin" component={SignInPage} />
		</Switch>
	);
}

export default App;
