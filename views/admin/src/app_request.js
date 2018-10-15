import requestUtil from './utils/request';

export const getAdminUser = ()=>requestUtil.GET(`/user`);
