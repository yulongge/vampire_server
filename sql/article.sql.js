const ARTICLE_LIST = "select * from mp_article";

const ADDARTICLE = (data) => (
	`insert into mp_article(a_title, a_desc, a_url, a_path, a_icon) values (${data.a_title},${data.a_desc},${data.a_url},${data.a_path},${data.a_icon})`
);

module.exports = {
	ARTICLE_LIST,
	ADDARTICLE
}