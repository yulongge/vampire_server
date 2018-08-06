import React, {Component} from 'react';
import styles from './style.less';

export default class Login extends Component {
	render() {
		return	<div className={styles.page}>
					<div className={styles.login}>
						<div className="logo"></div>
						<div className="con">
							<span className="item">
								<input className="val" type="text"/>
							</span>
							<span className="item">
								<input className="val" type="password"/>
							</span>

							<span className="login_btn">
			
							</span>
						</div>
			
					</div>
				</div>
	}
}
