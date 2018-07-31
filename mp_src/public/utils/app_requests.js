const {server_prefix} = require('../app.config');

const initApp = (app, paramsWithCode, callback) => request(
	'GET', `${server_prefix}`,
	paramsWithCode,
	callback
);

module.exports = {
	initApp
}
