import React, {Component} from 'react';
import Slider from "components/slider";
import styles from "./style.less";



export default class Index extends Component {
	render() {
		return <div className={styles.page_index}>
			<Slider />
		</div>
	}
}
