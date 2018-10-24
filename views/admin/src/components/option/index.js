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

                <span className="add_article" onClick={this.toCreateArticle.bind(this)}></span>
            </div>
        </div>
    }

    switchOption() {
        console.log('switch option')
        this.setState({
            isSwitch: !this.state.isSwitch
        })
    }

    toCreateArticle() {
        this.props.history.push("/admin/create_article")
    }

}