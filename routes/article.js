const {ARTICLE_LIST, ADDARTICLE} = require('../sql/article.sql');
const {close} = require('../utils/db');
const query = require('../utils/pool');

module.exports = (app, prefix, connection)=>{
	app.get(`${prefix}/article`, function(req, res) {
		let errcode = 0,
			errmsg = "success",
			result = {};
		query(ARTICLE_LIST, (err, vals, fields) => {
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

	app.post(`${prefix}/article/create`, function(req, res) {
		console.log(req.body, 'body')
		let errcode = 0,
			errmsg = "success",
			result = {};
		query(ADDARTICLE(req.body), (err, vals, fields) => {
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