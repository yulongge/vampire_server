import { observable, action, runInAction, configure } from 'mobx';
import { getAdminNav } from "../app_request";

configure({
	enforceActions: "observed"
});

class Store{
	constructor() {

	}

	@observable navData = [];

	//获取导航数据
	@action getAdminNavData() {
		return getAdminNav().then(rst => {
			runInAction(() => {
				//console.log(rst, 'nav data')
				this.navData = rst.result;
			})
			return rst.result;
		})
	}

}

const AppStateStore = new Store();

export default AppStateStore;