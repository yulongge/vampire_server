import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import Login from '../Login';
import Index from '../Index';

const Home = ({ match }) => (
	<Switch>
		<Route exact path={`${match.url}`} component={Index}/>
		<Route exact path={`${match.url}/login`} component={Login}/>
	</Switch>
);

export default Home;

