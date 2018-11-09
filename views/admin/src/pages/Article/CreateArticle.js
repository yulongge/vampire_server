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

@inject("ArticleStore")
@observer
class CreateArticle extends Component {
	constructor(props) {
		super(props);
	}

	componentWillMount() {
		console.log(this.props, 'props')
		const {search} = this.props.location;
		if(search.length) {
			let searchStr = search.substring(1, search.length);
			let param = searchStr.split("=");
			this.props.ArticleStore.getArticleDetailData({id:param[1]});
		}
    }
    
    componentWillReceiveProps(nextProps) {
        const {search} = nextProps.location;
        const search1 = this.props.location.search;
        console.log(search, search1, search == search, 'search')
        if(search == search1) return;
        console.log(nextProps, 'nextProps')


		if(search.length) {
			let searchStr = search.substring(1, search.length);
            let param = searchStr.split("=");
            console.log(param, 'param')
			this.props.ArticleStore.getArticleDetailData({id:param[1]});
		} else {
            this.props.ArticleStore.getArticleDetailData();
        }
    }

    render() {
        const {articleDetail} = this.props.ArticleStore;
        console.log(articleDetail, articleDetail.a_desc, 'articleDetail')
		
        return  <div className={styles.page_create_article}>
					<Form onSubmit={this.handleSubmit.bind(this)}>
						<FormItem
                            {...formItemLayout}
                        >
						{this.getField("id", "", false, articleDetail.id ? articleDetail.id: '', "hidden")}
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="Title"
                        >
						{this.getField("a_title", "Please input your Title!", true, articleDetail.a_title ? articleDetail.a_title: '')}
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="Desc"
                        >
						{this.getField("a_desc", "Please input your Desc!", true, articleDetail.a_desc ? articleDetail.a_desc: '', "textarea")}
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="Url"
                        >
						{this.getField("a_url", "Please input your Url!", true, articleDetail.a_url ? articleDetail.a_url: '')}
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="Path"
                        >
						{this.getField("a_path", "Please input your Path!", true, articleDetail.a_path ? articleDetail.a_path: "/pages/article_detail/article_detail")}
						</FormItem>
						
						<FormItem
                            {...formItemLayout}
                            label="Icon"
                        >
						{this.getField("a_icon", "Please input your Icon!", true, articleDetail.a_icon ? articleDetail.a_icon: "https://geyulong.tech/images/mp/article/article4.png")}
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
			case "hidden" :
				return getFieldDecorator(title, {
                    rules: [{
                        required: isRequired, message: tip,	
                    }],
                    initialValue: defaultValue
                })(
                    <Input placeholder={tip} type="hidden"/>
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
		console.log(this.props.ArticleStore, 'handleSubmit')
		this.props.form.validateFields((err, values) => {
			let data = {...values};
			if (!err) {
				console.log('Received values of form: ', data);
				_this.props.ArticleStore.addArticle(data).then(() => {
					location.href="/admin/article";
				});
			} else {
				throw err;
			}
		})

		
	}
}


export default Form.create()(CreateArticle);