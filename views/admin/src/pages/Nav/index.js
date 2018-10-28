import React, {Component} from 'react';
import { Table } from 'antd';
import { observer, inject } from 'mobx-react';

@inject("NavStore")
@observer
export default class Nav extends Component {
    constructor(props) {
		super(props);
	}

	componentWillMount() {
		this.props.NavStore.getNavListData();
    }

    render() {
        const { columns, navData } = this.props.NavStore,
			columnsData = columns(this);
        return  <div className="nav_page">
                    <Table dataSource={navData} columns={columnsData} />
                </div>
    }

    editNav(id) {
		console.log(id, 'editArticle');
		// this.props.history.push(`/admin/create_article?id=${id}`, {
		// 	id: id 
		// })
	}

	deleteNav(id) {
		// this.props.ArticleStore.deleteArticleData({id: id}).then(() => {
		// 	console.log(id, 'delete sucess')
		// 	//this.props.history.push(`/admin/article`);
		// 	this.props.ArticleStore.getArticleData();
		// })
	}
}