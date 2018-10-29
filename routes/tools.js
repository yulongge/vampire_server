const {TOOL_LIST, ADDTOOL, TOOL_DETAIL, DELETE_TOOL} = require('../sql/tools.sql');
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

	/**创建工具 */
	app.post(`${prefix}/tool/create`, function(req, res) {
		console.log(req.body, 'body')
		let errcode = 0,
			errmsg = "success",
			result = {};
		const { name, t_desc, t_url, t_icon, id } = req.body;
		query(ADDTOOL(name, t_desc, t_url, t_icon, id), (err, vals, fields) => {
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

	/**工具详情 */
	app.get(`${prefix}/tool/:id`, function(req, res) {
		let errcode = 0,
			errmsg = "success",
			result = {};
		const { id } = req.params;
		query(TOOL_DETAIL(id), (err, vals) => {
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
	app.post(`${prefix}/tool/delete/:id`, function(req, res) {
		let errcode = 0,
			errmsg = "success",
			result = {};
		const { id } = req.params;
		query(DELETE_TOOL(id), (err, vals) => {
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
