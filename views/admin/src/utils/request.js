const domain = "https://geyulong.tech/vampire_server";

function encodeQuery(url, data = {}) {
	if(!data || !Object.keys(data).length) {
		return url;
	}
	url = url.indexOf("?") === -1 ? `${url}?` : `${url}&`;
	const query = Object.keys(data).map(key => `${key}=${data[key]}`).join("&");

	return `${url}${query}`;
}


function checkStatus({ resp, json}) {

	if(resp.errcode == 0) {
		//console.log('sucess');
	}

	// if(json.errcode == 0) {
	// 	location.href = getUrl() + "#login";
	// 	return;
	// }

	// if(json.errcode == -100) {
	// 	location.href = getUrl() + "#login";
	// 	return;
	// }


	if(json.errcode !=0 ) {
		let msg = json.errmsg ? json.errmsg : '异常错误';
		console.log(json.errmsg, 'request error');
		//Tip.show(json.errmsg)
		//return;
	}

	if(Array.isArray(json)) {
		return json;
	}

	return {
		...json,
		resp_date: Date.now()
	}

}

function FETCH(url, options) {
	url = `${domain}${url}`;
	const headers = {
		'Accept': 'application/json',
		"Content-Type": "application/json"
	};

	return (
		fetch(url, {
			headers: headers,
			credentials: 'include',
			...options
		})
		.then(resp => {
			return resp.json()
				.then(json => ({ resp, json}))
				.catch(error => ({ resp, json: {}, error}));
		})
		.then(checkStatus)
		.catch(err => {
			console.log(err, 'err');
		})
	)
}

function GET(url, data = {}, options = {}) {

	console.log(url, data, 'GET')
	//this.send = () => {

		let _url = encodeQuery(url, data);
		console.log(_url, '_url')
		return FETCH(_url, {
			method: "GET",
			...options
		}).then(res => {
			console.log(res, 'res')
			return res;
		}).catch(err => {
			console.log(err, 'error')
			throw err;
		})
	//}
}

function POST(url, data = {}, options = {}) {
	data = typeof data === 'object' ? JSON.stringify(data) : data;

	this.send = () => {
		return FETCH(url, {
			method: "POST",
			body: params,//typeof data === 'object' ? JSON.stringify(data) : data,
			...options
		})
			.then(resp => {
				return resp;
			})
			.catch(error => {
				throw error;
			})
	}
}



export default {
	GET,
	POST,
}
