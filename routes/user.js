const {USER_LIST} = require('../sql/user.sql');

module.exports = (app, prefix, connection)=>{
	app.get(`${prefix}/user`, function(req, res) {
		let errcode = 0,
			errmsg = "success",
			result = {};
		connection.query(USER_LIST, (err, data) =>  {
			if(err) {
				console.log('Select User Error', err.message);
				errcode = 1;
				errmsg = err.message;
				res.json({
					errcode: errcode,
					errmsg: errmsg,
					result: result
				});
				return;
			}
			console.log(data, 'select data')
			result = data;
			res.json({
				errcode: errcode,
				errmsg: errmsg,
				result: result
			});
		})
		
	})
}