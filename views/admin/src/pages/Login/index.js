import React, {Component} from 'react';
import { message } from 'antd';
import styles from './style.less';
import { observer, inject } from 'mobx-react';

@inject("UserStore")
@observer
class Login extends Component {
	componentDidMount() {
		
	}
	render() {
		return	<div className={styles.page} ref="loginBg">
					<div className={styles.logoinShade}></div>
					<div className={styles.tip}>
						<span>
							<p>遇见最好的自己 👌👌👌</p>
							<p className="english">As lazy as possible !</p>
						</span>
					</div>
					<div className={styles.login}>
						<div className="logo"></div>
						<div className="con">		
							<span className="item">
								<input ref = "username" className="val" type="text"/>
							</span>
							<span className="item">
								<input ref = "password" className="val" type="password"/>
							</span>

							<span className="login_btn" onClick={this.toLogin.bind(this)}>
								Login			
							</span>		
						</div>
						<div className="entry">
							<span className="item">web</span>
							<span className="item">html5</span>
							<span className="item">小程序</span>
							<span className="item">github</span>
						</div>
			
					</div>
				</div>
	}

	toLogin() {
		const {username, password} = this.refs;
		console.log(username.value, password.value, 'toLogin');
		if(username.value == "" || password.value == "") {
			message.info('username or password is empty!');
			return;
		}

		this.props.UserStore.toLoginAction({username: username.value, password: password.value}).then((res) => {
			console.log(res, 'rest')
			//location.href = "/admin"
		})

		
	}
}

export default Login
