<template>
	<view class="body">
		<view class="page" v-if="lists.length>0">
		    <view class="uni-list" style="padding-bottom: 15px;">
				<block v-for="(item,index) in lists" :key="index">
					<view class="item-li">
						<!-- <view class="item-li-line1 border-b border-t">
							<view class="item-li-line1-l flex2 border-l item-font">
								{{item.created_time}}
							</view>
							<view class="item-li-line1-r flex1 border-l border-r item-font">
								上分
							</view>
						</view> -->
						<!-- 类型 1充值 2投注 3退分 4赢 5平局 -->
						<view class="item-li-line2 border-b border-t">
							<view class="item-li-line2-l flex1 border-l border-r item-font" >
								{{item.created_time}}
							</view>
							<!-- <view class="item-li-line2-c flex1 border-l item-font">
								操作分
							</view> -->
							<!-- <view class="item-li-line2-r flex1 border-l  border-r item-font">
								结果分
							</view> -->
						</view>
						<view class="item-li-line2 border-b">
							<view class="item-li-line2-l flex1 border-l item-font">
								操作类型
							</view>
							<!-- <view class="item-li-line2-c flex1 border-l item-font">
								操作分
							</view> -->
							<view class="item-li-line2-r flex1 border-l  border-r item-font">
								操作分数
							</view>
						</view>
						<view class="item-li-line3 border-b">
							<view class="item-li-line3-l flex1 border-l item-font">
								{{ getStatusStr(item.state) }}
							</view>
							<!-- <view class="item-li-line3-c flex1 border-l item-font">
								1000
							</view> -->
							<view class="item-li-line3-r flex1 border-l  border-r item-font">
								{{item.point}}
							</view>
						</view>
					</view>
					
					<!-- <view class="uni-list-cell" hover-class="uni-list-cell-hover">
						<view class="uni-triplex-row">
							<view class="uni-triplex-left">
								<text class="uni-title uni-ellipsis">{{item.created_time}}</text>
								<text class="uni-text">操作类型: {{getStatusStr(item.state) }}</text>
								
								<text class="uni-text-small uni-ellipsis">操作分数: {{item.point}}</text>
							</view>
							<view class="uni-triplex-right">
								<text class="uni-h5"></text>
							</view>
						</view>
					</view> -->
				</block>
		    </view>
		</view>
		<view v-else class="nodataLayout">
			<view class="nodataText">还没有记录哦~~</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				lists:[]
			}
		},
		methods: {
			getStatusStr(status){
				var str='';
				// 1充值 2投注 3退分 4赢 5输 6平局
				switch (status){
					case '1':
						str = '充值';
						break;
					case '2':
						str = '投注';
						break;
					case '3':
						str = '退分';
						break;
					case '4':
						str = '赢';
						break;
					case '5':
						str = '输';
						break;
					case '6':
						str = '平局';
						break;
					case '7':
						str = '持平退分';
						break;
					default:
						break;
				}
				return str;
			},
			getList(current,size,callback)
			{
				this.bus.request({
					url: this.bus.url+'/point/findQqUpdownScorePageList',
					method: 'GET',
					data: {
						userId:JSON.parse(sessionStorage.getItem('userInfo')).userId,
						current:current,
						size:size
						},
					success: res => {
						res = res.data;
						if(res.status=='1')
						{
							// uni.showToast({
							// 	title: '密码修改成功!',
							// 	duration: 2000
							// });
							callback(res.data.records)
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
		},
		onLoad:function () {
			uni.startPullDownRefresh();
		},
		onReachBottom:function()
		{//上拉加载更多
			var current=this.lists.length;
			var	size=10;
			var this_ = this;
			this.getList(current,size,function (data) {
				for (var i = 0; i < data.length; i++) {
					this_.lists.push(data[i]);
				}
			})
		},
		onPullDownRefresh:function () {
			//下拉刷新
			var current=0;
			var	size= 10;
			if(this.lists.length)
			{
				size=this.lists.length;
			}
			var this_ = this;
			this.getList(current,size,function (data) {
				this_.lists=data;
			})
			setTimeout(function () {
				uni.stopPullDownRefresh();
			}, 1000);
		}
	}
</script>

<style>
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


/* ------------------ */
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
.item-li-line1{
	display: flex;
	flex-direction: row;
	text-align: center;
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
</style>
