import React, {Component} from 'react';
import Slider from "components/slider";
import styles from "./style.less";
import { getAdminUser } from "../../app_request";

export default class Index extends Component {
	constructor(props) {
		super(props);

	}

	componentWillMount() {
		console.log(getAdminUser, 'getAdminUser')
		getAdminUser();
	}

	render() {
		return <div className={styles.page_index}>
			<Slider />
			<div className="main">
				33
			</div>
		</div>
	}
}
