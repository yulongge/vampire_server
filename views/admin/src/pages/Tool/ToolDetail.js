import React, {Component} from 'react';
import styles from './style.less';
import { Form, Input, Button } from 'antd';
import { observer, inject } from 'mobx-react';


const FormItem = Form.Item;
const {TextArea} = Input;
const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
    },
};
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};

@inject("ToolStore")
@observer
class CreateTool extends Component {
	constructor(props) {
		super(props);
	}

	componentWillMount() {
		console.log(this.props, 'props')
		const {search} = this.props.location;
		if(search.length) {
			let searchStr = search.substring(1, search.length);
			let param = searchStr.split("=");
			this.props.ToolStore.getToolDetailData({id:param[1]});
		}
	}

    render() {
        const {toolDetail} = this.props.ToolStore;
        console.log(toolDetail, toolDetail.name, 'articleDetail')
		
        return  <div className={styles.page_create_tool}>
                    <Form onSubmit={this.handleSubmit.bind(this)}>
                        <FormItem
                            {...formItemLayout}
                            label="Title"
                        >
						{this.getField("name", "Please input your Title!", true, toolDetail.name ? toolDetail.name: '')}
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="Desc"
                        >
						{this.getField("t_desc", "Please input your Desc!", true, toolDetail.t_desc ? toolDetail.t_desc: '', "textarea")}
                        </FormItem>
                       
                        <FormItem
                            {...formItemLayout}
                            label="Path"
                        >
						{this.getField("t_url", "Please input your Path!", true, toolDetail.t_url ? toolDetail.t_url: "/pages/eat/eat")}
						</FormItem>
						
						<FormItem
                            {...formItemLayout}
                            label="Icon"
                        >
						{this.getField("t_icon", "Please input your Icon!", true, toolDetail.t_icon ? toolDetail.t_icon: "https://geyulong.tech/images/mp/article/article4.png")}
                        </FormItem>

                        <FormItem {...tailFormItemLayout}>
                             <Button type="primary" htmlType="submit">Save</Button>
                        </FormItem>
                    </Form>
                </div>
	}

	getField(title, tip, isRequired, defaultValue, type) {
        const { getFieldDecorator } = this.props.form;
        switch(type) {
            case "textarea" :
                return getFieldDecorator(title, {
                    rules: [{
                        required: isRequired, message: tip,	
                    }],
                    initialValue: defaultValue
                })(
                    <TextArea rows={4}  placeholder={tip}/>
                )
                break;
            default:
                return getFieldDecorator(title, {
                    rules: [{
                        required: isRequired, message: tip,	
                    }],
                    initialValue: defaultValue
                })(
                    <Input placeholder={tip}/>
                )
        }
		
	}
	
	handleSubmit(e) {
		e.preventDefault();
		const _this = this;
		console.log(this.props.ToolStore, 'handleSubmit')
		this.props.form.validateFields((err, values) => {
			let data = {...values};
			if (!err) {
				console.log('Received values of form: ', data);
				_this.props.ToolStore.addToolData(data).then(() => {
					location.href="/admin/tool";
				});
			} else {
				throw err;
			}
		})

		
	}
}


export default Form.create()(CreateTool);