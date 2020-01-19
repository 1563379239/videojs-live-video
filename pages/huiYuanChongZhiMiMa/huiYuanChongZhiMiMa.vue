<template>
	<view class="body">
			<view class="face-wapper">
				<!-- <image src="../../static/img/ic_launcher.png" class="face"></image> -->
				<!-- <view class="face">修改密码</view> -->
			</view>
			<view class="info-wapper">
				<image class="words-lbl imgicon" src="../../static/app/tab_user.png" mode="aspectFill"></image>
				<input :disabled="user?true:false" name="username" type="text" value="" v-model="userName" class="input" placeholder="会员账号" placeholder-class="graywords"/>
			</view>
			<view class="info-wapper" style="margin-top: 40upx;">
				<image class="words-lbl imgicon" src="../../static/app/icon_pwd.png" mode="aspectFill"></image>
				<input name="username" type="text" value="" v-model="password1" password="true" class="input" placeholder="新密码" placeholder-class="graywords"/>
			</view>
			
			<view class="info-wapper" style="margin-top: 40upx;">
				<image class="words-lbl imgicon" src="../../static/app/icon_pwd.png" mode="aspectFill"></image>
				<input name="password" type="text" value="" v-model="password2" password="true" class="input" placeholder="确认密码" placeholder-class="graywords"/>
			</view>
			
			<button type="warn"  style="margin-top: 60upx;width: 90%;" @click="reSetPassword()">确认</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				user:'',
				userId:'',
				userName:'',
				password1:'',
				password2:''
			}
		},
		onLoad:function (parm) {
			if(parm&&parm.data)
			{
				this.user = JSON.parse(parm.data);
				//console.log('parm.data='+parm.data);
				this.userId = this.user.id;
				this.userName = this.user.account;
			}
		},
		methods: {
			reSetPassword() {
				if(!this.userName)
				{
					uni.showToast({
						title: '会员账号不能为空!',
						duration: 2000,
						icon:'none'
					});
					return ;
				}
				if(this.password1.length==0 ||this.password2.length==0)
				{
					uni.showToast({
						title: '密码不能为空!',
						duration: 2000,
						icon:'none'
					});
					return ;
				}
				if(this.password1 != this.password2)
				{
					uni.showToast({
						title: '两次输入密码不一致!',
						duration: 2000,
						icon:'none'
					});
					return ;
				}
				this.bus.request({
					url: this.bus.url+'/agent/changeMemberPwd',
					method: 'GET',
					 header:JSON.parse(sessionStorage.getItem('userInfo')).header,
					data: {
						agentId:JSON.parse(sessionStorage.getItem('userInfo')).userId,
						// userId:this.userId,
						account:this.userName,
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
								duration: 2000
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
						uni.showToast({
							title: '网络异常',
							duration: 2000,
							icon:'none'
						});
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
	
	margin-top: 60upx;
	/* margin-bottom: 120upx; */
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
