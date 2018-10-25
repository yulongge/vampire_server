import React, {Component} from 'react';
import styles from './style.less';
import { Form, Input, Button } from 'antd';
import { observer, inject } from 'mobx-react';


const FormItem = Form.Item;
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

@inject("ArticleStore")
@observer
class CreateArticle extends Component {
    render() {
		
        return  <div className={styles.page_create_article}>
                    <Form onSubmit={this.handleSubmit.bind(this)}>
                        <FormItem
                            {...formItemLayout}
                            label="Title"
                        >
						{this.getField("a_title", "Please input your Title!", true)}
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="Desc"
                        >
						{this.getField("a_desc", "Please input your Desc!", true)}
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="Url"
                        >
						{this.getField("a_url", "Please input your Url!", true)}
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="Path"
                        >
						{this.getField("a_path", "Please input your Path!", true, "pages/article_detail/article_detail")}
						</FormItem>
						
						<FormItem
                            {...formItemLayout}
                            label="Icon"
                        >
						{this.getField("a_icon", "Please input your Icon!", true, "https://geyulong.tech/images/mp/article/article4.png")}
                        </FormItem>

                        <FormItem {...tailFormItemLayout}>
                             <Button type="primary" htmlType="submit">Save</Button>
                        </FormItem>
                    </Form>
                </div>
	}

	getField(title, tip, isRequired, defaultValue) {
		const { getFieldDecorator } = this.props.form;
		return getFieldDecorator(title, {
					rules: [{
						required: isRequired, message: tip,	
					}],
					initialValue: defaultValue
				})(
					<Input placeholder={tip}/>
				)
	}
	
	handleSubmit(e) {
		e.preventDefault();
		const _this = this;
		console.log(this.props.ArticleStore, 'handleSubmit')
		this.props.form.validateFields((err, values) => {
			if (!err) {
				console.log('Received values of form: ', values);
				_this.props.ArticleStore.addArticle(values);
			} else {
				throw err;
			}
		})

		
	}
}


export default Form.create()(CreateArticle);