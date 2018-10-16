const {ADMIN_NAV} = require('../sql/admin/nav.sql');
const query = require('../utils/pool');

module.exports = (app, prefix, connection)=>{
	app.get(`${prefix}/admin/nav`, function(req, res) {
		let errcode = 0,
			errmsg = "success",
			result = {};
		query(ADMIN_NAV, (err, vals, fields) => {
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