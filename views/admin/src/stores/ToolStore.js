import { observable, action, runInAction, configure } from 'mobx';
import { getToolist, getToolDetail, addTool, deleteTool } from '../app_request';
import React from 'react';
import {Divider} from 'antd';

class Store {
	constructor() {

	}
    @observable toolsData = [];
    @observable toolDetail = {};
	@observable columns = (context) =>  ([
		{
			title: '名称',
			dataIndex: 'name',
			key: 'name'
		},
		{
			title: '描述',
			dataIndex: 't_desc',
			key: 't_desc'
		},
		{
			title: '图标',
			dataIndex: 't_icon',
			key: 't_icon'
		},
		{
			title: '预览',
			dataIndex: 't_icon',
			key: 't_img',
			render: (text, record) => (
				<img src={record.t_icon} style={{width: "80px"}}/>
			)
		},
        {
			title: '页面地址',
			dataIndex: 't_url',
			key: 't_url'
        },
		{
			title: 'Action',
			key: 'action',
			width: 180,
			render: (text, record) => (
				<span>
					<a href="javascript:;" onClick={context.editTool.bind(context, record.id)}>Edit</a>
					<Divider type="vertical" />
					<a href="javascript:;" onClick={context.deleteTool.bind(context, record.id)}>Delete</a>
				</span>
			)
		}
	])

	//获取用户信息
	@action getToolsListData() {
		getToolist().then(rst => {
			runInAction(() => {
				let dataSource = rst.result.map((item, index) => {
					item.key = index + 1;
					return item;
				})
				this.toolsData = dataSource;
			})
		})
    }
    
    @action getToolDetailData(data) {
		getToolDetail(data).then(rst => {
			runInAction(() => {
				this.toolDetail = rst.result[0];
			})
		})
	}

	@action addToolData(data) {
		console.log(data, 'store')
		return addTool(data)
	}

	@action deleteToolDetail(data) {
		console.log(data, 'store')
		return deleteArticle(data)
	}


}

const ToolStore = new Store();

export default ToolStore;