
import React from 'react'
import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom';

import LoginPage from '../pages/Login';
import PageRegister from '../pages/Register';
const PublicRoute = props => {
	return (
		<Switch>
			<Route path="/register" exact component={PageRegister} />
			<Route path="/login" exact component={LoginPage} />
		</Switch>
	);
}

export default PublicRoute
