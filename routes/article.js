const {
	ARTICLE_LIST, 
	ADDARTICLE, 
	ARTICLE_DETAIL,
	DELETE_ARTICLE
} = require('../sql/article.sql');

const {close} = require('../utils/db');
const query = require('../utils/pool');

module.exports = (app, prefix, connection)=>{
	/**获取文章列表 */
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

	/**创建文章 */
	app.post(`${prefix}/article/create`, function(req, res) {
		console.log(req.body, 'body')
		let errcode = 0,
			errmsg = "success",
			result = {};
		const { a_title, a_desc, a_url,a_path, a_icon, id } = req.body;
		query(ADDARTICLE(a_title, a_desc, a_url,a_path, a_icon, id), (err, vals, fields) => {
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

	/**文章详情 */
	app.get(`${prefix}/article/:id`, function(req, res) {
		let errcode = 0,
			errmsg = "success",
			result = {};
		const { id } = req.params;
		query(ARTICLE_DETAIL(id), (err, vals) => {
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

	/**删除文章 */
	app.post(`${prefix}/article/delete/:id`, function(req, res) {
		let errcode = 0,
			errmsg = "success",
			result = {};
		const { id } = req.params;
		query(DELETE_ARTICLE(id), (err, vals) => {
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