import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import {observer, inject} from 'mobx-react';
import Slider from "components/slider";
import styles from "./style.less";
import User from '../User';
import Article from '../Article';
import Option from 'components/option';

@inject('AppStateStore')
@observer
export default class Index extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentNav: {}
		}
	}

	componentWillMount() {
		this.props.AppStateStore.getAdminNavData().then(rst => {
			const {match} = this.props,
				matchNav =  rst.filter(item => item.path == match.url);
			let currentNav = rst[0];
			if(matchNav.length) {
				currentNav = matchNav[0];
			}
			this.setState({
				currentNav: currentNav
			})
		});
	}

	toPage(item, url) {
		this.setState({
			currentNav: item
		})
		this.props.history.push(url);
	}

	render() {
		//console.log(this.props, 'render')
		const {navData} = this.props.AppStateStore,
			{currentNav} = this.state;
		return <div className={styles.page_index}>
			<Slider data={navData} toPage={this.toPage.bind(this)}/>
			<div className="main">
				<div className="directory">{currentNav.name}</div>
				<div className="workcenter">
					<Switch>
						<Route exact path="/admin" component={User}/>
						<Route exact path="/admin/user" component={User}/>
						<Route exact path="/admin/article" component={Article}/>
					</Switch>
				</div>
				<Option />
			</div>
		</div>
	}
}
