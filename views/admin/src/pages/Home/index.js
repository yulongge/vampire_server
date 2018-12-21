import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import Login from '../Login';
import Index from '../Index';
import VampireEditor from '../Editor';
import D3 from '../D3';
import styles from './style.less';

const Home = ({ match }) => (
	<Switch>
		<Route exact path={`${match.url}/`} component={Index}/>
		<Route exact path={`${match.url}/login`} component={Login}/>
		<Route exact path={`${match.url}/editor`} component={VampireEditor}/>
		<Route exact path={`${match.url}/d3`} component={D3}/>
		<Route exact path={`${match.url}/:path`} component={Index}/>
	</Switch>
);

export default Home;

