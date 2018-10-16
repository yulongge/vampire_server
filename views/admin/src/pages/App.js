import React, {Component} from 'react';
import { observer, Provider } from 'mobx-react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import stores from '../stores';
import Home from '../pages/Home';

@observer
export default class App extends Component {
	constructor(props) {
		super(props);	
	}

	render() {
		return <Provider {...stores}>
					<Router>
						<Switch>
							<Route path="/admin" component={Home} />
						</Switch>	
					</Router>	
				</Provider>		
	}
}
