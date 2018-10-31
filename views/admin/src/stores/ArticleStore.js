import { observable, action, runInAction, configure } from 'mobx';
import { getArticle, addArticle, getArticleDetail, deleteArticle, getToken } from '../app_request';
import React from 'react';
import {Divider} from 'antd';
import { updateLocale } from 'moment';

class Store {
	constructor() {

	}
	@observable articleData = [];
	@observable articleDetail = {};
	@observable columns = (context) =>  ([
		{
			title: '标题',
			dataIndex: 'a_title',
			key: 'a_title',
			width: 150
		},
		{
			title: '描述',
			dataIndex: 'a_desc',
			key: 'a_desc',
			width: 200
		},
		{
			title: '文章地址',
			dataIndex: 'a_url',
			key: 'a_address'
		},
		{
			title: '图片',
			dataIndex: 'a_icon',
			key: 'a_icon'
		},
		{
			title: '预览',
			dataIndex: 'a_icon',
			key: 'a_img',
			render: (text, record) => (
				<img src={record.a_icon} style={{width: "200px", height: "100px"}}/>
			)
		},
		{
			title: '路径',
			dataIndex: 'a_path',
			key: 'a_path',
			width: 150
		},
		{
			title: 'Action',
			key: 'action',
			width: 180,
			render: (text, record) => (
				<span>
					<a href="javascript:;" onClick={context.editArticle.bind(context, record.id)}>Edit</a>
					<Divider type="vertical" />
					<a href="javascript:;" onClick={context.deleteArticle.bind(context, record.id)}>Delete</a>
					<Divider type="vertical" />
					<a href="javascript:;" onClick={context.downloadQcord.bind(context, record.id)}>DownloadQcord</a>

				</span>
			)
		}
		
	])

	//获取文章列表
	@action getArticleData() {
		getArticle().then(rst => {
			runInAction(() => {
				let dataSource = rst.result.map((item, index) => {
					item.key = index + 1;
					return item;
				})
				this.articleData = dataSource;
			})
		})
	}

	@action addArticle(data) {
		console.log(data, 'store')
		return addArticle(data)
	}

	@action getArticleDetailData(data) {
		if(!data) {
			this.articleDetail = {};
			return;
		}
		getArticleDetail(data).then(rst => {
			runInAction(() => {
				this.articleDetail = rst.result[0];
			})
		})
	}

	@action deleteArticleData(data) {
		console.log(data, 'store')
		return deleteArticle(data)
	}

	@action getTokenData(data) {
		console.log(data, 'getTokenData')
		return getToken(data);
	}
}

const ArticleStore = new Store();

export default ArticleStore;