let mysql = require('mysql');

module.exports = {
	// 连接数据库
	connection() {
		console.log('console connecting...');
		let connection = mysql.createConnection({
			host: '39.105.23.61', //'39.105.23.61',
			user: 'root',
			password: '19880729',
			database: 'vampire',
			port: 3306
		});
		connection.connect((err) => {
			if(err) {
				console.error(err, 'connection err');
				return;
			}
			console.log('the database connect success!');
		});
		return connection;
	},

	// 关闭数据库
	close(connection) {
		connection.end((err) => {
			if(err) {
				console.log(err, 'close err');
				return;
			}
			console.log('the database connect is closed!');
		})
	},

	
}