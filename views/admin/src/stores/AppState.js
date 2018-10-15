import { observable, action, runInAction, useStrict } from 'mobx';
import { delay } from 'lodash';
import { getAppConfig } from '../app_requests';

useStrict(true);

let AppState = observable({
	//获取react-router封装后的history
	history: null,
	initRouter: action.bound(function(router) {
		if (router) {
			this.history = router.history;
			console.log('app init');
		}
	}),

	//管理请求状态
	requesting: false,
	setRequesting: action.bound(function(bool) {
		delay(
			()=>runInAction(
				()=>this.requesting = bool
			), 
			bool?0:300
		);
	}),

	//保存远端初始化配置
	config: null,
	requestConfig: action.bound(function() {
		return getAppConfig().then(rst=>{
			runInAction(
				()=>this.config=rst
			);
		});
	}),

	//弹出提示
	globalAlert: null,
	alert: action.bound(function(msg) {
		this.globalAlert = msg;
	}),
	hideAlert: action.bound(function() {
		this.globalAlert = null;
	}),

});

export default AppState;