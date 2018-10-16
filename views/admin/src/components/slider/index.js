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
		const {data} = this.props;
		console.log(this.props.data.length, 'collapse')
		return <div className={`${styles.slider_component } ${collapse ? styles.aside_collapse : styles.aside_open}`}>
			<div className="aside-action" onClick={this.onCollapseChange.bind(this)}>
				<div className="arrow">
					<span className="icon"></span>
				</div>
			</div>
			<div className="nav">
				{
					data.map((item, index) => {
						return <div className="item" key={index}>
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