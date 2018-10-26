import requestUtil from './utils/request';

//获取后台导航数据
export const getAdminNav = ()=>requestUtil.GET(`/admin/nav`);

//获取用户信息
export const getAdminUser = ()=>requestUtil.GET(`/user`);

//获取文章列表
export const getArticle = ()=>requestUtil.GET(`/article`);

//创建新文章
export const addArticle = (data)=>requestUtil.POST(`/article/create`, {...data});

//获取文章详情
export const getArticleDetail = (data)=>requestUtil.GET(`/article/${data.id}`, {...data});

//删除文章详情
export const deleteArticle = (data)=>requestUtil.POST(`/article/delete/${data.id}`, {...data});