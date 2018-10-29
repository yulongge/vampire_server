import React, {Component} from 'react';
import styles from './style.less';

export default class Option extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSwitch: false
        }
    }

    render() {
        const {isSwitch} = this.state;
        return <div className={styles.option_component}>
            <div className={`option ${isSwitch ? 'active' : ''}`} >
                <span className="switch" onClick={this.switchOption.bind(this)}></span>

                <span className="new_option add_article" onClick={this.toTargetPage.bind(this, "article")}></span>
                <span className="new_option add_tool" onClick={this.toTargetPage.bind(this, 'tool')}></span>
                <span className="new_option add_nav" onClick={this.toTargetPage.bind(this, 'nav')}></span>

            </div>
        </div>
    }

    switchOption() {
        console.log('switch option')
        this.setState({
            isSwitch: !this.state.isSwitch
        })
    }

    toTargetPage(type) {
        let url = "";
        switch(type) {
            case "article" :
                url = "/admin/create_article";
                break;
            case "tool" :
                url = "/admin/tool_detail";
                break;
            case "nav" :
                url = "/admin/nav_detail";
                break;
            default: 
                url = "/admin/create_article"
		}
		this.setState({
            isSwitch: !this.state.isSwitch
        })
        this.props.history.push(url)
    }

}