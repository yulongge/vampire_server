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
			this.props.history.push(`/admin/article`);
		})
	}
}