const mysql = require("mysql");

const pool = mysql.createPool({
	host: '39.105.23.61',
	user: 'root',
	password: '19880729',
	database: 'vampire',
	port: 3306
});

const query = (sql, callback) => {
	pool.getConnection((err, conn) => {
		if(err) {
			callback(err, null, null);
		} else {
			conn.query(sql, (qerr, vals, fields) => {
				conn.release();
				callback(qerr, vals, fields);
			})
		}
	})	
}

module.exports = query;
