const USER_LIST = "select user_name, sex, role, pic, openId, login_time, iphone, id, email, age from user";

const USER_LOGIN = (username, password) => {
	let sql = `select * from user where user_name = '${username}' and password = '${password}'`;

	return sql;
}

module.exports = {
	USER_LIST,
	USER_LOGIN
}