import React, {Component} from 'react';
import { Menu, Breadcrumb, Icon } from 'antd';
import styles from './style.less';

export default class extends Component {
	constructor(props) {
		super(props);
		this.state = {
			collapse: true,
		}
	}

	onCollapseChange() {
		this.setState({
			collapse: !this.state.collapse,
		})
	}

	render() {
		const collapse = this.state.collapse;
		return <div className={`${styles.slider_component } ${collapse ? styles.aside_collapse : ''}`}>
			<div className="aside-action" onClick={this.onCollapseChange.bind(this)}>
				{collapse ? <Icon type="right" /> : <Icon type="left" />}
			</div>
			
		</div>
	}
}