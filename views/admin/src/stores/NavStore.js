import { observable, action, runInAction, configure } from 'mobx';
import { getAdminNav } from '../app_request';
import React from 'react';
import {Divider} from 'antd';

class Store {
	constructor() {

	}
	@observable navData = [];
	@observable columns = (context) =>  ([
		{
			title: '名称',
			dataIndex: 'name',
			key: 'name'
		},
		{
			title: '页面地址',
			dataIndex: 'path',
			key: 'path'
		},
		{
			title: '图标',
			dataIndex: 'icon',
			key: 'icon'
		},
		{
			title: '预览',
			dataIndex: 'icon',
			key: 'img',
			render: (text, record) => (
					<img src={record.icon} style={{width: "30px"}}/>				
			)
		},
		{
			title: 'Action',
			key: 'action',
			width: 180,
			render: (text, record) => (
				<span>
					<a href="javascript:;" onClick={context.editNav.bind(context, record.id)}>Edit</a>
					<Divider type="vertical" />
					<a href="javascript:;" onClick={context.deleteNav.bind(context, record.id)}>Delete</a>
				</span>
			)
		}
	])

	//获取用户信息
	@action getNavListData() {
		getAdminNav().then(rst => {
			runInAction(() => {
				let dataSource = rst.result.map((item, index) => {
					item.key = index + 1;
					return item;
				})
				this.navData = dataSource;
			})
		})
	}
}

const NavStore = new Store();

export default NavStore;