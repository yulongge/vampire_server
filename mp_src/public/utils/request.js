const { server_host, server_port, server_protocal } = require('../app.config.js');

const _request = (method, url, data, success, onfail=null) => {

	const reqData = {};
	wx.request({
		url: `${server_protocal}://${server_host}:${server_port}${url}`,
		data: reqData,
		method: method.toUpperCase(),
		header: {},
		success(res) {
			
		},
		fail(res) {
		
		},
		complete(res) {
		
		}
	})
}

module.exports = {
	request: _request
}
