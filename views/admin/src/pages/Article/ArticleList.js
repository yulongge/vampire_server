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
        const { columns, articleData } = this.props.ArticleStore;
        return  <div>
                    <Table dataSource={articleData} columns={columns} />
                </div>
    }
}