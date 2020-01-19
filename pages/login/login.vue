<template>
	<view class="body">
			<view class="face-wapper">
				<image src="../../static/img/ic_launcher_round.png" class="face"></image>
			</view>
			
			<view class="info-wapper">
				<label class="words-lbl">账号</label>
				<input name="username" v-model="account" type="text" value="" class="input" placeholder="请输入用户名" placeholder-class="graywords"/>
			</view>
			
			<view class="info-wapper" style="margin-top: 40upx;">
				<label class="words-lbl">密码</label>
				<input name="password" v-model="password"  type="text" value="" password="true" class="input" placeholder="请输入密码" placeholder-class="graywords"/>
			</view>
			
			<button type="primary" @click="login" style="margin-top: 60upx;width: 90%;">登录</button>
	</view>
</template>

<script>
	var debug=false;
	export default {
		data() {
			return {
				account:'',//guest
				password:''//123456
			}
		},
		onLoad() {
			var user = uni.getStorageSync('user');
			if(user)
			{
				var user_ = JSON.parse(user)
				var time_now=parseInt(new Date().getTime()/(1000));
				if(time_now-parseInt(user_.time)<=24*60*60)
				{
					this.account = user_.account;
					this.password = user_.password;
				}
			}
			//跳过登录
			// uni.switchTab({
			// 	url: '/pages/index/index'
			// });
		},
		methods: {
			login() {
				if(debug)
				{
					uni.switchTab({
						url: '/pages/index/index'
					});
					return;
				}
				this.bus.request({
					url: this.bus.url+'/user/login',
					method: 'POST',
					 header:{
					  'content-type':'application/x-www-form-urlencoded',
					},
					data: {account:this.account,password:this.password,isPc:2},
					success: res => {
						// {
						//   "status": "1",
						//   "data": {
						// 	"userId": "5",
						// 	"account": "admin",
						// 	"nickName": "111",
						// 	"token": "5@eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NjUxNDQ1NDcsImlhdCI6MTU2NTE0MDk0NywidXNlcm5hbWUiOiJhZG1pbiJ9.kg9JmBu65I9rhh0bfynVHCXOtFbpPzDT1eHc9kuh25I",
						// 	"point": null,
						// 	"encryptPwd": "009ae02c2630a3e80fa1cdfb2925d5c7cd745cdd7b2404f2f271705529fdaed5",
						// 	"salt": null,
						// 	"roles": null
						//   },
						//   "errCode": "",
						//   "errMsg": ""
						// }
						if(res.data.status=='1')
						{
							let loginInfo = {
								account: this.account,
								password: this.password,
								time: (parseInt(new Date().getTime() / (1000)) + '')
							};
							this.bus.user = res.data.data;
							this.bus.user.header = res.header;
							this.bus.user.name = this.account;
							this.bus.user.proxy = this.bus.user.userFlag ? 1 : 0;
							sessionStorage.setItem('userInfo', JSON.stringify(res.data.data));
							sessionStorage.setItem('user', JSON.stringify(loginInfo));
							sessionStorage.setItem('token', res['header']['x-auth-token']);
							uni.switchTab({
								url: '/pages/index/index'
							});
						} else{
							uni.showToast({
								title: res.data.errMsg,
								duration: 2000,
								icon:'none'
							});
						}
					},
					fail: () => {
						
					},
					complete: () => {
						
					}
				});
			}
			
		}
	}
	
</script>

<style>
@import url("login.css");
</style>
