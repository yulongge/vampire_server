import React, {Component} from 'react';
import { Table } from 'antd';
import { observer, inject } from 'mobx-react';

@inject("ToolStore")
@observer
export default class Tool extends Component {
    constructor(props) {
		super(props);
	}

	componentWillMount() {
		this.props.ToolStore.getToolsListData();
    }

    render() {
        const { columns, toolsData } = this.props.ToolStore,
			columnsData = columns(this);
        return  <div className="tool_page">
                    <Table dataSource={toolsData} columns={columnsData} />
                </div>
    }

    editTool(id) {
		console.log(id, 'editArticle');
		this.props.history.push(`/admin/tool_detail?id=${id}`, {
			id: id 
		})
	}

	deleteTool(id) {
		this.props.ToolStore.deleteToolDetail({id: id}).then(() => {
			console.log(id, 'delete sucess')
			//this.props.history.push(`/admin/article`);
			this.props.ToolStore.getToolsListData();
		})
	}
}