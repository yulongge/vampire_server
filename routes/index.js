let express = require('express');
let db = require('../utils/db');
const {USER_LIST} = require('../sql/user.sql');
let router = express.Router();

let connection = db.connection();
router.get('/', function(req, res, next) {
	//console.log(db.connection(), 'connection');
	connection.query(USER_LIST, (err, res) => {
		if(err) {
			console.log('Select User Error', err.message);
			return;
		}
		console.log(res, 'result')
		
	});
	res.render('index', { title: 'Express'});
})

module.exports = router;