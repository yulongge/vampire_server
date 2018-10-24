import React, {Component} from 'react';
import styles from './style.less';
import { Form, Input, Button } from 'antd';

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

export default class CreateArticle extends Component {
    render() {
        return  <div className={styles.page_create_article}>
                    <Form>
                        <FormItem
                            {...formItemLayout}
                            label="标题"
                        >
                            <Input placeholder="请输入文章标题" name="title" />
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="描述"
                        >
                            <Input placeholder="请输入描述" name="title" />
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="文章地址"
                        >
                            <Input placeholder="请输入文章地址" name="title" />
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="路径"
                        >
                            <Input defaultValue="pages/article_detail/article_detail" name="title" />
                        </FormItem>

                        <FormItem {...tailFormItemLayout}>
                             <Button type="primary" htmlType="submit">保存</Button>
                        </FormItem>
                    </Form>
                </div>
    }
}