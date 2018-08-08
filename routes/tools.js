const {TOOL_LIST} = require('../sql/tools.sql');
const {close} = require('../utils/db');

module.exports = (app, prefix, connection)=>{
	app.get(`${prefix}/tools`, function(req, res) {
		let errcode = 0,
			errmsg = "success",
			result = {};
		connection.query(TOOL_LIST, (err, data) =>  {
			if(err) {
				console.log('Select TOOL_LIST ERROR', err.message);
				errcode = 1;
				errmsg = err.message;
				res.json({
					errcode: errcode,
					errmsg: errmsg,
					result: result
				});
				//close(connection);
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
