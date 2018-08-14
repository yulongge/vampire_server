const {USER_LIST} = require('../sql/user.sql');
const query = require('../utils/pool');

module.exports = (app, prefix, connection)=>{
	app.get(`${prefix}/user`, function(req, res) {
		let errcode = 0,
			errmsg = "success",
			result = {};
		query(USER_LIST, (err, vals, fields) => {
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
