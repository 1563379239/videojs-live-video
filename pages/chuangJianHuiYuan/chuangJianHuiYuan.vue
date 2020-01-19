<template>
	<view class="body" >
		<view class="page" style="border-bottom: 1px solid #FFFFFF;height: 100%;">
		    <view class="uni-list1 flex" >
					<view class="item-li center" style="">
						<!-- <view class="item-li-line2 border-b border-t">
							<view class="item-li-line2-l flex1 border-l item-font">
								<span class="span01">账号</span>
							</view>
							<view class="item-li-line2-l flex2 border-l border-r item-font flex" style="display: flex; flex-direction: row;">
								<input name="zhanghao" v-model="zhanghao" type="text" value="" class="input center" style="text-align: left;margin-left: 5px;" placeholder="请输入账号"/>
							</view>
						</view> -->
						<view class="item-li-line2">
							<view><image src="../../static/app/tab_user.png" mode=""></image></view>
							<input name="xingming" v-model="xingming" type="text" value="" class="input center border-b" style="text-align: left;margin-left: 5px;" placeholder="请输入姓名"/>
						</view>
						<view class="item-li-line2 ">
							<view><image src="../../static/app/tab_phone.png" mode=""></image></view>
							<input name="shouji" v-model="shouji" type="text" value="" class="input center border-b" style="text-align: left;margin-left: 5px;" placeholder="请输入手机号"/>
						</view>
						<view class="item-li-line2 ">
							<view><image src="../../static/app/password.png" mode=""></image></view>
							<input name="mima2" v-model="mima" password="true" type="text" value="" class="input center border-b" style="text-align: left;margin-left: 5px;" placeholder="请输入密码"/>
						</view>
					</view>
		    </view>
			<view class="item-li-line2">
				<button type="warn" size="default" style="line-height: 32px; width: 80px;" @click="creatUser()">保存</button>
			</view>
		</view>
		
		
		
		
		
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				zhanghao:'',
				xingming:'',
				shouji:'',
				mima:'',
			}
		},
		onLoad:function () {
			// this.creatUser();
		},
		methods: {
			creatUser()
			{
				// if(!this.zhanghao)
				// {
				// 	uni.showToast({
				// 		title: '账号不能为空!',
				// 		duration: 2000,
				// 		icon:'none'
				// 	});
				// 	return;
				// }
				if(!this.xingming)
				{
					uni.showToast({
						title: '昵称不能为空!',
						duration: 2000,
						icon:'none'
					});
					return;
				}
				if(!this.mima)
				{
					uni.showToast({
						title: '密码不能为空!',
						duration: 2000,
						icon:'none'
					});
					return;
				}
				// if(!this.zhanghao)
				// {
				// 	uni.showToast({
				// 		title: '账号不能为空!',
				// 		duration: 2000,
				// 		icon:'none'
				// 	});
				// 	return;
				// }
				this.bus.request({
					url: this.bus.url+'/agent/memberAdd',//?agentId=1
					method: 'GET',
					data: {
						agentId:JSON.parse(sessionStorage.getItem('userInfo')).userId,
						// agentId:1,
						agentName:this.zhanghao,
						mobile:this.shouji,
						nickName:this.xingming,
						password:this.mima,
						userFlag:JSON.parse(sessionStorage.getItem('userInfo')).userFlag
						},
					success: res => {
						res = res.data;
						if(res.status=='1')
						{
							// uni.showToast({
							// 	title: '密码修改成功!',
							// 	duration: 2000
							// });
							uni.showToast({
								title: '创建成功!',
								duration: 2000,
								icon:'none'
							});
							uni.navigateBack({
								delta: 2
							});
						} else{
							uni.showToast({
								title: '创建失败!',
								duration: 2000,
								icon:'none'
							});
						}
					},
					fail: () => {
						uni.showToast({
							title:'网络错误!',
							duration: 2000,
							icon:'none'
						});
					},
					complete: () => {
						uni.hideLoading()
					}
				});
			}
		},
	}
</script>

<style>
.jifen{
	display: inline !important;
	width: 100px;
}
.span01{
	margin-left: 10px;
}
.nodataLayout{
	display: flex;
	flex-direction: column;
	height: 100%;
	width: 100%;
	justify-content: center;
	/* background-color: red; */
}
.nodataText{
	margin-top: 50%;
	align-self: center;
	font-size: 18px;
	color: #BBBBBB;
}
page{
	/* background-color: #f3f3f3; */
}
.flex1{
	flex: 1;
}
.flex2{
	flex: 2;
}

.center{
	justify-content: center;
	align-self: center;
}

.border-b{
	border-bottom: 1px solid #e6e6e6;
}
.border-l{
	border-left: 1px solid #e6e6e6;
}
.border-t{
	border-top: 1px solid #e6e6e6;
}
.border-r{
	border-right: 1px solid #e6e6e6;
}
.item-font{
	height: 36px;
	line-height: 36px;
}
.item-li{
	display: flex;
	margin: 10px 10px 0px 10px;
	/* border-bottom: 1px solid #e6e6e6; */
	flex-direction: column;
	color: #666666;
	font-size: 16px;
	margin-top: 16px;
	overflow: hidden;
}

.item-li:last-child{
	margin-bottom: 20px;
}

.item-li-line1-layout{
	display: flex;
}
.item-li-line3 span{
	padding-left: 4px;
}
.item-li-line1{
	display: flex;
	flex-direction: row;
	text-align: center;
	flex-wrap: nowrap;
}
.item-li-line2{
	display: flex;
	margin-top: 40upx;
	align-content: center;
	align-items: center;
}
.item-li-line>view{
	flex: 4;
}
.item-li-line2 image{
	display: inline-block;
	width: 40upx;
	height: 40upx;
	margin-left: 20px;
}
.item-li-line2 input{
	flex: 4;
	height: 80upx;
	text-indent: 20px;
}
.item-li-line3{
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	text-align: center;
}
.item-li-line1-c{
	padding-left: 10px;
}

.item-li-line1-r{
	padding-right: 10px;
	text-align: right;
	align-self: flex-end;
}

.item-li-line2 {
	color: #e3A600;
	font-size: 19px;
}
</style>
