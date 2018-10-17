import React, {Component} from 'react';
import { observer, inject } from 'mobx-react';
import { Table } from 'antd';

@inject("ArticleStore")
@observer
export default class Article extends Component {
	constructor(props) {
		super(props);
	}

	componentWillMount() {
		this.props.ArticleStore.getArticleData();
	}

	render() {
		const { columns, articleData } = this.props.ArticleStore;
		return 	<div>
					<Table dataSource={articleData} columns={columns} />
				</div>
	}
}