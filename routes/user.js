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
		console.log(req.body, 'body')
		let errcode = 0,
			errmsg = "success",
			result = {};
		const { password, username } = req.body;
		query(USER_LOGIN(username, password), (err, vals, fields) => {
			console.log(vals, 'user vals')
			if(err) {
				errcode = err.code,
				errmsg = err.message,
				result = result
			} else {
				if(vals.length <=0) {
					result = {};
				} else {
					result = vals;
				}
				
				res.cookie("account", {username: username, lasttime: Date.now()}, {maxAge: 86400});
				//res.redirect('/admin?' + Date.now());
				
			}
			
			res.send({
				errcode: errcode,
				errmsg: errmsg,
				result: {
					...result,
					date: Date.now()
				}
			});
		})
	})
}
