<template>
	<view class="body">
		<view class="page" v-if="lists.length>0">
		    <view class="uni-list" >
				<block v-for="(item,index) in lists" :key="index">
					<view class="item-li">
						<view class="item-li-line1 border-b border-t">
							<view class="item-li-line1-l border-l item-font">
								操作编号:7882323 <space class="item-li-line1-time">2019-07-31 20:20:20</space>
								<space class="item-li-line1-dui">晚上场(第1对)</space>
							</view>
						</view>
						<view class="item-li-line2 border-b">
							<view class="item-li-line2-l flex1 border-l border-r item-font">
								蓝方胜,接8扣,输800积分:
							</view>
						</view>
						<view class="item-li-line3 border-b">
							<view class="item-li-line3-l flex1 border-l item-font">
								操作积分
							</view>
							<view class="item-li-line3-c flex1 border-l item-font">
								开始积分
							</view>
							<view class="item-li-line3-r flex1 border-l  border-r item-font">
								结束积分
							</view>
						</view>
						<view class="item-li-line3 border-b">
							<view class="item-li-line3-l flex1 border-l item-font">
								800
							</view>
							<view class="item-li-line3-c flex1 border-l item-font">
								1000
							</view>
							<view class="item-li-line3-r flex1 border-l  border-r item-font">
								200
							</view>
						</view>
					</view>
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
			
		},
		onLoad:function () {
			uni.startPullDownRefresh();
		},
		onReachBottom:function()
		{//上拉加载更多
			var i = this.lists.length;
			for (var i = 0; i < 2; i++) {
				this.lists.push(i+0);
			}
			
		},
		onPullDownRefresh:function () {
			//下拉刷新
			var all = [];
			for (var i = 0; i < 2; i++) {
				all[i] = i
			}
			this.lists=all;
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
page{
	background-color: #f3f3f3;
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
	background-color: #FFFFFF;
	margin: 10px 10px 0px 10px;
	/* border-bottom: 1px solid #e6e6e6; */
	flex-direction: column;
	color: #666666;
	font-size: 16px;
}
.item-li-line1-layout{
	display: flex;
}

.item-li-line3 span{
	padding-left: 4px;
}

.item-li-line1-l{
	padding-left: 10px;
}
.item-li-line1-time,.item-li-line1-dui{
	margin-left: 10px;
}
.item-li-line1{
	display: flex;
	flex-direction: row;
	text-align: left;
	flex-wrap: nowrap;
}
.item-li-line2{
	display: flex;
	flex-direction: row;
	text-align: left;
}

.item-li-line2-l{
	padding-left: 20px;
	font-size: 17px;
}

.item-li-line2 span{
	
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
