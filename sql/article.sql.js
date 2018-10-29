const ARTICLE_LIST = "select * from mp_article order by id desc";

const ADDARTICLE = (a_title, a_desc, a_url, a_path, a_icon, id) => {
	let addSql = `insert into mp_article(a_title, a_desc, a_url, a_path, a_icon) values (${"'" + a_title + "'"},${"'" + a_desc + "'"},${"'" + a_url + "'"},${"'" + a_path + "'"},${"'" + a_icon + "'"})`;

	if(id.length) {
		addSql = `update mp_article set a_title="${a_title}", a_desc="${a_desc}", a_url="${a_url}", a_path="${a_path}", a_icon="${a_icon}" where id=${id}`;
	}
	console.log(addSql, 'addSql');
	return addSql;
};

const ARTICLE_DETAIL = (id) => {
	let searchSql = `select * from mp_article where id = ${id}`;
	return searchSql;
};

const DELETE_ARTICLE = (id) => {
	let searchSql = `delete from mp_article where id = ${id}`;
	return searchSql;
};

module.exports = {
	ARTICLE_LIST,
	ADDARTICLE,
	ARTICLE_DETAIL,
	DELETE_ARTICLE
}