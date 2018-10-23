import requestUtil from './utils/request';

//获取后台导航数据
export const getAdminNav = ()=>requestUtil.GET(`/admin/nav`);

//获取用户信息
export const getAdminUser = ()=>requestUtil.GET(`/user`);

//获取文章信息
export const getArticle = ()=>requestUtil.GET(`/article`);

