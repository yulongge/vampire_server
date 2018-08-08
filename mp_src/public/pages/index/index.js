const {getTools} = require('../../utils/app_requests');
const {assign} = require('../../utils/object');

Page({
	onLoad() {
		console.log('index coming...')
		getTools({}, rst => {
			console.log(rst, 'getTools')
		})
	}
})
