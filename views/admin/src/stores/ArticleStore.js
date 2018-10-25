import { observable, action, runInAction, configure } from 'mobx';
import { getArticle, addArticle } from '../app_request';

class Store {
	constructor() {

	}
	@observable articleData = [];
	@observable columns = [
		{
			title: '标题',
			dataIndex: 'a_title',
			key: 'a_title'
		},
		{
			title: '描述',
			dataIndex: 'a_desc',
			key: 'a_desc'
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
			title: '路径',
			dataIndex: 'a_url',
			key: 'a_url'
		}
		
	]

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
}

const ArticleStore = new Store();

export default ArticleStore;