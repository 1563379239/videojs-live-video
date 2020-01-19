<template>
	<view class="kefuInfo">
		<view class="line1 center">
			<image src="../../static/app/ic_launcher_round.png" class="kefu_img1"></image>
		</view>
		<view class="line2 center" :data-call="tel" @click="callTel">
			咨询电话: {{tel}}
			<image src="../../static/app/icon_phone.png"  class="kefu_call"></image>
		</view>
		<!--<view class="line3 center">
			微信客服: {{wxid}}
		</view>-->
		<view class="blank"></view>
		<view class="line4 center">
			<image :src="qrCode"  class="kefu_qr"></image>
		</view>
		<view class="line5 center">
			当前版本:1.1.0
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tel:'',
				qrCode:'',
				wxid:''
			}
		},
		onLoad() {
			this.getInfo();
		},
		methods: {
			callTel(e){
				var tel = e.currentTarget.dataset.call;
				uni.makePhoneCall({
					phoneNumber: tel 
				});
			},
			getInfo(){
				// 获取直播地址
				this.bus.request({
					url: this.bus.url+'/contact',
					method: 'GET',
					data: {},
					success: res => {
						if(res.data.status=='1')
						{
							// alert(JSON.stringify(res.data.data))
							this.tel=res.data.data.telephone;
							this.qrCode=this.bus.url+res.data.data.wechatCode;
							this.wxid=res.data.data.wechatNum;
						}
						
					},
					fail: () => {
						
					},
					complete: () => {
					}
				});
			},
		}
	}
</script>

<style>
.line1{
	margin-top: 70upx;
	margin-bottom: 50upx;
}	

.line3{
	margin-top: 40upx;
	margin-bottom: 70upx;
}	

.line5{
	margin-top: 40upx;
}
	
.kefu_img1{
	width: 180upx;
	height: 180upx;
}
.kefu_call{
	width: 40upx;
	height: 40upx;
	margin-left: 10upx;
}
.blank{
	width: 100%;
	height: 50upx;
}
.kefu_qr{
	width: 200upx;
	height: 200upx;
}
	
.kefuInfo{
	display: flex;
	width: 100%;
	/* background-color: yellow; */
	flex-direction: column;
	justify-content: center;
	font-size: 18px;
}
	
.center{
	align-self: center;
}
</style>
