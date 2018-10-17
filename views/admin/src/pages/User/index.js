import React, {Component} from 'react';
import { observer,inject } from 'mobx-react';
import{ Table } from 'antd';

@inject("UserStore")
@observer
export default class User extends Component {
	constructor(props) {
		super(props);
	}

	componentWillMount() {
		this.props.UserStore.getAdminUserData();
	}

	render() {
		console.log(this.props.UserStore.userData, 'render user data')
		const { columns, userData } = this.props.UserStore;
		return 	<div>
					<Table dataSource={userData} columns={columns} />
				</div>
	}
}