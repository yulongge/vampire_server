const USER_LIST = "select * from user";

const USER_LOGIN = (username, password) => {
	let sql = `select * from user where username = '${username}' and password = '${password}'`;

	return sql;
}

module.exports = {
	USER_LIST,
	USER_LOGIN
}