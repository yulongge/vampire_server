const {TOOL_LIST} = require('../sql/tools.sql');
const {close} = require('../utils/db');
const query = require('../utils/pool');

module.exports = (app, prefix, connection)=>{
	app.get(`${prefix}/tools`, function(req, res) {
		let errcode = 0,
			errmsg = "success",
			result = {};
		query(TOOL_LIST, (err, vals, fields) => {
			if(err) {
				errcode = err.code,
				errmsg = err.message,
				result = result
			} else {
				result = vals;
			}
			res.json({
				errcode: errcode,
				errmsg: errmsg,
				result: result
			});
		})
		
	})
}
