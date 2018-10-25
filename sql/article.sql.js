const ARTICLE_LIST = "select * from mp_article";

const ADDARTICLE = (a_title, a_desc, a_url,a_path, a_icon) => {
	let addSql = `insert into mp_article(a_title, a_desc, a_url, a_path, a_icon) values (${a_title},${a_desc},${"'" + a_url + "'"},${"'" + a_path + "'"},${"'" + a_icon + "'"})`;
	console.log(addSql, 'addSql');
	return addSql;
};

module.exports = {
	ARTICLE_LIST,
	ADDARTICLE
}