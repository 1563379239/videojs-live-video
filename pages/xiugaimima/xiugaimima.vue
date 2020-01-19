<template>
	<view class="body">
			<view class="face-wapper">
				<image src="../../static/img/ic_launcher.png" class="face"></image>
			</view>
			<view class="info-wapper">
				<image class="words-lbl imgicon" src="../../static/app/icon_pwd.png" mode="aspectFill"></image>
				<input name="username" type="text" value="" v-model="password1" password="true" class="input" placeholder="原生密码" placeholder-class="graywords"/>
			</view>
			<view class="info-wapper" style="margin-top: 40upx;">
				<image class="words-lbl imgicon" src="../../static/app/icon_pwd.png" mode="aspectFill"></image>
				<input name="username" type="text" value="" v-model="password2" password="true" class="input" placeholder="新密码" placeholder-class="graywords"/>
			</view>
			
			<view class="info-wapper" style="margin-top: 40upx;">
				<image class="words-lbl imgicon" src="../../static/app/icon_pwd.png" mode="aspectFill"></image>
				<input name="password" type="text" value="" v-model="password3" password="true" class="input" placeholder="确认密码" placeholder-class="graywords"/>
			</view>
			
			<button type="warn"  style="margin-top: 60upx;width: 90%;" @click="reSetPassword()">确认</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				password1:'',
				password2:'',
				password3:''
			}
		},
		methods: {
			loginOut() {
				this.bus.request({
					url: this.bus.url+'/user/logout',
					method: 'GET',
					 header:{
					  'content-type':'application/x-www-form-urlencoded',
					},
					data: sessionStorage.getItem('user'),
					success: res => {
						res=res.data;
						if(res.status=='1')
						{
							sessionStorage.removeItem('user')
							uni.redirectTo({
								url: '/pages/login/login'
							});
						} else{
							uni.showToast({
								title: res.errMsg,
								duration: 2000,
								icon:'none'
							});
						}
					},
					fail: () => {
						
					},
					complete: () => {
						uni.hideLoading()
					}
				});
			},
			reSetPassword() {
				if(this.password1.length==0 ||this.password2.length==0 || this.password3.length==0)
				{
					uni.showToast({
						title: '密码不能为空!',
						duration: 2000,
						icon:'none'
					});
					return ;
				}
				if(this.password2 != this.password3)
				{
					uni.showToast({
						title: '两次输入密码不一致!',
						duration: 2000,
						icon:'none'
					});
					return ;
				}
				this.bus.request({
					url: this.bus.url+'/user/changePwd',
					method: 'GET',
					 header:JSON.parse(sessionStorage.getItem('userInfo')).header,
					data: {
						userId:JSON.parse(sessionStorage.getItem('userInfo')).userId,
						oldPassword:this.password1,
						password:this.password2,
						userFlag:JSON.parse(sessionStorage.getItem('userInfo')).userFlag
						},
					success: res => {
						res = res.data;
						if(res.status=='1')
						{
							let logininfo = JSON.parse(sessionStorage.getItem('user'))
							logininfo.password = this.password3
							sessionStorage.setItem('user', JSON.stringify(logininfo));
							uni.showToast({
								title: '密码修改成功!',
								duration: 2000,
							});
							setTimeout(()=>{
								this.loginOut()
							},2000)
						} else{
							uni.showToast({
								title: res.errMsg,
								duration: 2000,
								icon:'none'
							});
						}
					},
					fail: () => {
						
					},
					complete: () => {
						uni.hideLoading()
					}
				});
			}
		}
	}
</script>

<style>
.imgicon{
	width: 50upx;
	height: 50upx;
}	
	
.body {
	border-top: solid 1px #DBDBDA;
	padding: 0 40upx;
}

/* 头像 start */
.face-wapper {
	display: flex;
	flex-direction: row;
	justify-content: center;
	
	margin-top: 120upx;
	margin-bottom: 120upx;
}

.face {
	width: 160upx;
	height: 160upx;
}
/* 头像 end */

/* 注册登录 start */
.info-wapper {
	display: flex;
	flex-direction: row;
	justify-content: center;
	
	border-bottom: solid 1px #DBDBDA;
	
	padding-bottom: 20upx;
}

.words-lbl {
	color: #808080;
}

.input {
	width: 500upx;
	margin-left: 40upx;
}

.graywords {
	color: #EAEAEA;
}

/* 注册登录 end */
</style>
