import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import {observer, inject} from 'mobx-react';
import Slider from "components/slider";
import styles from "./style.less";
import User from '../User';
import Article from '../Article';

@inject('AppStateStore')
@observer
export default class Index extends Component {
	constructor(props) {
		super(props);
	}

	componentWillMount() {
		//console.log(getAdminNav, 'getAdminUser')
		this.props.AppStateStore.getAdminNavData();
	}

	render() {
		console.log(this.props.AppStateStore.navData, 'render')
		const {navData} = this.props.AppStateStore;
		return <div className={styles.page_index}>
			<Slider data={navData}/>
			<div className="main">
				<Switch>
					<Route exact path="/admin" component={User}/>
					<Route exact path="/admin/user" component={User}/>
					<Route exact path="/admin/article" component={Article}/>
				</Switch>
			</div>
		</div>
	}
}
