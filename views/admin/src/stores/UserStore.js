import { observable, action, runInAction, configure } from 'mobx';
import { getAdminUser } from '../app_request';

class Store {
	constructor() {

	}
	@observable userData = [];
	@observable columns = [
		{
			title: '姓名',
			dataIndex: 'user_name',
			key: 'user_name'
		},
		{
			title: '性别',
			dataIndex: 'sex',
			key: 'sex'
		},
		{
			title: '年龄',
			dataIndex: 'age',
			key: 'age'
		},
		{
			title: '电话',
			dataIndex: 'iphone',
			key: 'iphone'
		},
		{
			title: '邮箱',
			dataIndex: 'email',
			key: 'email'
		},
	]

	//获取用户信息
	@action getAdminUserData() {
		getAdminUser().then(rst => {
			runInAction(() => {
				let dataSource = rst.result.map((item, index) => {
					item.key = index + 1;
					return item;
				})
				this.userData = dataSource;
			})
		})
	}
}

const UserStore = new Store();

export default UserStore;