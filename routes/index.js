const {CONFIG} = require('../sql/config.sql');
const {NAV} = require('../sql/nav.sql');
const query = require('../utils/pool');

module.exports = (app, prefix)=>{
	app.get(`${prefix}/`, function(req, res) {
		let errcode = 0,
			errmsg = "success",
			result = {};
		query(CONFIG, (err, vals, fields) => {
			console.log(err, 'query')
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
		
	});

	app.get(`${prefix}/nav`, function(req, res) {
		let errcode = 0,
			errmsg = "success",
			result = {};
		query(NAV, (err, vals, fields) => {
			console.log(err, 'query')
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
