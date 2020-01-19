import Vue from 'vue'

import App from './App'

Vue.config.productionTip = false

var header = {}

Vue.prototype.bus = new Vue({
	data: {
		user: {
			userId: 5,
			proxy: 0
		},
		login: {},
		url:'http://139.9.122.163:8081',
		//url:'http://122.112.249.112:8081',
		// url: 'http://localhost:8081'
	},
	methods: {
		request(obj) {
			var success = obj.success
			var fail = obj.fail
			var complete = obj.complete

			obj.success = function(res) {
				console.log(JSON.stringify(res))
				if (success) {
					if (res.header) {
						console.log('res.heaeder=========', res.header)
						header = res.header
						// if (uni.getStorageSync('token')) {
						// 	obj.header['x-auth-token'] = uni.getStorageSync('token');
						// }
					}
					success(res)
				}
			}

			obj.fail = function(res) {
				if (fail) {
					console.log('fail---------')
					fail(res)
				}
			}

			obj.complete = function(res) {
				console.log('-----------------------------------------------------------E')
				if (complete) {
					console.log('complete-----', res.header)
					complete(res)
				}
				if (!obj.hideLoading) {
					uni.hideLoading()
				}
			}

			if (!obj.header) {
				// alert(JSON.stringify(header));

				obj.header = header;
				// if (uni.getStorageSync('token')) {
				// 	obj.header['x-auth-token'] = uni.getStorageSync('token');
				// }
			}
			// console.log('header='+JSON.stringify(obj.header))
			// obj.header['content-type']='application/x-www-form-urlencoded';
			console.log('-----------------------------------------------------------S')
			console.log('url=' + obj.url)
			console.log('header=' + JSON.stringify(obj.header))
			console.log('data=' + JSON.stringify(obj.data))
			if (!obj.hideLoading) {
				uni.showLoading({
					title: '加载中'
				})
			}
			uni.request(obj);
		}
	}
})


App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()
