import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { ROUTES } from '../constants';


function PublicRoute(props) {
	const { component: Component, ...rest } = props;

	const render = props => {

		return <Component {...props} />;
	};

	return <Route {...rest} render={render} />;
}

export default PublicRoute;