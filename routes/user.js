const {USER_LIST, USER_LOGIN} = require('../sql/user.sql');
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

	app.post(`${prefix}/admin/login`, function(req, res) {
		let errcode = 0,
			errmsg = "success",
			result = {};
		const { password, username } = req.body;
		query(USER_LOGIN(username, password), (err, vals, fields) => {
			if(err) {
				errcode = err.code,
				errmsg = err.message,
				result = result
			} else {
				result = vals;
				res.cookie("account", {username: userName, lasttime: Date.now()}, {maxAge: 86400});
				//res.redirect('/admin?' + Date.now());
			}
			res.json({
				errcode: errcode,
				errmsg: errmsg,
				result: result
			});
		})
	})
}
