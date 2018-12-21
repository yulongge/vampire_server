import React, {Component} from 'react';
import styles from './style.less';
import * as d3 from 'd3';

export default class D3 extends Component {
    constructor(props) {
        super(props);
        console.log(d3, 'd3')
    }

    componentDidMount() {
	   const {BarChart} = d3;
	   console.log(BarChart, 'BarChart')
    }

    render() {
        return  <div className={styles.d3}>
                   D3
                </div>
    }

}