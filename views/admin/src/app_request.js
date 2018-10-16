import requestUtil from './utils/request';

export const getAdminNav = ()=>requestUtil.GET(`/admin/nav`);
export const getAdminUser = ()=>requestUtil.GET(`/user`);

