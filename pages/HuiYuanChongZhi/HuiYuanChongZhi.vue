<template>
	<view class="body" >
		<view class="page" style="border-bottom: 1px solid #FFFFFF;height: 100%;">
		    <view v-if="user" class="uni-list1" >
					<view class="item-li">
						<view class="item-li-line2 border-b border-t">
							<view class="item-li-line2-l flex1 border-l item-font">
								VIP名称:<span class="span01">{{user.name?user.name:''}}</span>
							</view>
							<view class="item-li-line2-c flex1 border-l item-font border-r">
								剩余积分:<span class="span01">{{user.point?user.point:0}}</span>
							</view>
						</view>
						<view class="item-li-line2 border-b">
							<view class="item-li-line2-l flex1 border-l item-font">
								会员名称:<span class="span01">{{user?user.nickName:''}}</span>
							</view>
							<view class="item-li-line2-c flex1 border-l item-font border-r">
								剩余积分:<span class="span01">{{user.totalPoint}}</span>
							</view>
						</view>
						<view class="item-li-line2 border-b">
							<view class="item-li-line2-l flex1 border-l item-font">
								<span class="span01">充值积分:</span>
							</view>
							<view class="item-li-line2-l flex2 border-l border-r item-font flex" style="display: flex; flex-direction: row;">
								<input name="" v-model="point" type="text" value="" class="input center" style="text-align: left;margin-left: 5px;" placeholder="请输入积分"/>
							</view>
						</view>
					</view>
		    </view>
			<view class="item-li-line2">
				<button v-if="type == 1" type="primary" style="line-height: 32px; width: 160px;" @click="addPoint()">给他上分</button>
				<button v-if="type == 2" type="primary" style="line-height: 32px; width: 160px;" @click="addPoint()">给他下分</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				user:'',
				point:'',
				type:''
			}
		},
		methods: {
			addPoint()
			{
				if(!this.point)
				{
					uni.showToast({
						title: '积分不能为空!',
						duration: 2000,
						icon:'none'
					});
					return ;
				}
				this.bus.request({
					url: this.bus.url+'/agent/memberCharge',
					method: 'GET',
					data: {
						agentId:JSON.parse(sessionStorage.getItem('userInfo')).userId,
						// agentId:1,
						userId:this.user.id,
						point:this.point,
						state:this.type,//1-充值,2-退分
						userFlag:JSON.parse(sessionStorage.getItem('userInfo')).userFlag
						},
					success: res => {
						res = res.data;
						if(res.status=='1')
						{
							uni.showToast({
								title: '操作成功!',
								duration: 2000,
								success:function(){
									uni.navigateBack({
										delta: 2
									});
								}
							});
						} else{
							uni.showToast({
								title: '操作失败!',
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
		onLoad:function (parm) {
			this.user = JSON.parse(parm.data);
			//console.log(4444444,parm)
			this.type = parm.type;
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
	background-color: #F8F8F8;
	margin: 10px 10px 0px 10px;
	/* border-bottom: 1px solid #e6e6e6; */
	flex-direction: column;
	color: #666666;
	font-size: 16px;
	margin-top: 16px;
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
	flex-direction: row;
	text-align: center;
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
