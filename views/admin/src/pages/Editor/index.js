import React, {Component} from 'react';
import VampireEditor from 'wangeditor';
import styles from './style.less';

export default class Editor extends Component {
    constructor(props) {
        super(props);
        this.state ={
            editorContent: ""
        }
    }

    componentDidMount() {
        const { toolbar, content } = this.refs;
        const editor = new VampireEditor(toolbar, content)
        editor.customConfig.uploadImgShowBase64 = true;
        editor.customConfig.onchange = html => {
            this.setState({
                editorContent: html
            })
        }
        editor.create()
    }

    render() {
        return  <div className={styles.editor_page}>
                    <div className="preview">
                        <div className="phone" dangerouslySetInnerHTML={{__html: this.state.editorContent}}></div>
                    </div>
                    <div className="editorElem">
                        <div className="toolbar" ref="toolbar"></div>
                        <div className="content" ref="content"></div>
                    </div>
                </div>
    }

}