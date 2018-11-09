import React, {Component} from 'react';
import { Table } from 'antd';
import { observer, inject } from 'mobx-react';

@inject("ArticleStore")
@observer
export default class ArticleList extends Component {
    constructor(props) {
		super(props);
	}

	componentWillMount() {
		this.props.ArticleStore.getArticleData();
    }
    
    render() {
		const { columns, articleData } = this.props.ArticleStore,
			columnsData = columns(this);
        return  <div>
                    <Table dataSource={articleData} columns={columnsData} />
                </div>
	}
	
	editArticle(id) {
		console.log(id, 'editArticle');
		this.props.history.push(`/admin/create_article?id=${id}`, {
			id: id 
		})
	}

	deleteArticle(id) {
		this.props.ArticleStore.deleteArticleData({id: id}).then(() => {
			console.log(id, 'delete sucess')
			//this.props.history.push(`/admin/article`);
			this.props.ArticleStore.getArticleData();
		})
	}

	downloadQcord(id) {
		console.log(id, 'id');
		const params = {
			grant_type: "client_credential",
			appid: "wxbd972aeb302cee02",
			secret: "d2ca3cb63f409153bcf0f98556e57a71"
		}
		this.props.ArticleStore.getTokenData(params).then(res => {
			console.log(res, 'getToken')
		})
	}
}