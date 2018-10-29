const TOOL_LIST = "select * from mp_tool order by id desc";


const ADDTOOL = (name, t_desc, t_url, t_icon, id) => {
	let addSql = `insert into mp_tool(name, t_desc, t_url, t_icon) values (${"'" + name + "'"},${"'" + t_desc + "'"},${"'" + t_url + "'"},${"'" + t_icon + "'"})`;
	if(id>=0) {
		addSql = `update mp_tool set name="${name}", t_desc="${t_desc}", t_url="${t_url}", t_icon="${t_icon}" where id=${id}`;
	}
	console.log(addSql, 'addSql');
	return addSql;
};

const TOOL_DETAIL = (id) => {
	let searchSql = `select * from mp_tool where id = ${id}`;
	return searchSql;
};

const DELETE_TOOL = (id) => {
	let searchSql = `delete from mp_tool where id = ${id}`;
	return searchSql;
};

module.exports = {
	TOOL_LIST,
	ADDTOOL,
	TOOL_DETAIL,
	DELETE_TOOL
}
