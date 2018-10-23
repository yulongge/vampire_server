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
		const collapse = this.state.collapse,
			{data} = this.props;

		return 	<div className={`${styles.slider_component } ${collapse ? styles.aside_collapse : styles.aside_open}`}>
					<div className="aside-action" onClick={this.onCollapseChange.bind(this)}>
						<span className="icon"></span>
					</div>
					<div className="nav">
						{
							data.map((item, index) => {
								return <div className="item" key={index} onClick={this.props.toPage.bind(this, item, item.path)}>
									<span className="icon">
										<img src={item.icon} />
									</span>
									<span className="name">{item.name}</span>
									
								</div>
							})
						}
					</div>
				</div>
	}
}