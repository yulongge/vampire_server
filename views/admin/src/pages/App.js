import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';

export default class App extends Component {
	constructor(props) {
		super(props);	
	}

	render() {
		return <Router>
					<Switch>
						<Route path="/admin" component={Home} />
					</Switch>	
				</Router>		
	}
}
