<template>
	<view class="body">
		<!-- <view class="nodata" v-if="true">
			还没有记录哦~
		</view> -->
		<view class="r-item" :key="index">
			<view class="header">
				<view>红方合计：{{alldata.hongtotal}}分</view>
				<view>蓝方合计：{{alldata.lantotal}}分</view>
			</view>
		</view>
		<view class="r-item" v-for="(item,index) in lists" :key="index">
			<view class="header">
				<view>{{item.race_desc}}</view>
				<view>{{item.created_time}}</view>
				<view>{{item.winner}}</view>

			</view>
			<view class="txt">
				<!-- <view class="c"></view> -->
				<view class="c">
					<view class="lll">会员：{{item.nick_name}}</view>
					<view>赞红方：</view>
					<view v-if="item.hong_score>0">
						<view v-if="item.referee == 1">赢</view>
						<view v-if="item.referee == 2">输</view>
						<view v-if="item.referee == 3">退</view>
					</view>
					<view class="lll">{{item.hong_score}}分</view>
					<view >赞蓝方：</view>
					<view v-if="item.lan_score>0">
						<view v-if="item.referee == 1">输</view>
						<view v-if="item.referee == 2">赢</view>
						<view v-if="item.referee == 3">退</view>
					</view>
					<view>{{item.lan_score}}分</view>
				</view>
				<!-- <view class="c">
					
				</view> -->
			</view>
			<!-- <view class="table">
				<view class="tr">
					<view class="td">打赏监板 {{item.monitor}}</view>
					<view class="td">打赏红方草师 {{item.hong_monitor}}</view>
					<view class="td">打赏蓝方草师 {{item.lan_monitor}}</view>
				</view>
			
			</view> -->
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				lists: [],
				alldata:null
			}
		},
		onLoad() {
			this.getList(1, 10)
		},
		onReachBottom: function() { //上拉加载更多
			// var current = this.lists.length;
			var current = Math.ceil(this.lists.length/10)+1;
			var size = 10;
			var this_ = this;
			this.getList(current, size, function(data) {
				this_.lists = this_.list.concat(data)
			})
		},
		onPullDownRefresh: function() {
			//下拉刷新
			var current = 1;
			var size = 10;
			if (this.lists.length) {
				size = this.lists.length;
			}
			var this_ = this;
			this.getList(current, size, function(data) {
				this_.lists = data;
			})
			setTimeout(function() {
				uni.stopPullDownRefresh();
			}, 1000);
		},
		methods: {
			getList(current, size, callback) {
				let that = this
				this.bus.request({
					url: this.bus.url + '/point/findYouXiTongjiDaili',
					method: 'GET',
					data: {
						userId: JSON.parse(sessionStorage.getItem('userInfo')).userId,
						current: current,
						size: size
					},
					success: res => {
						this.alldata = res.data.data
						that.lists = this.lists.concat(res.data.data.page.records)
						if (res.data.data.records.length == 0) {
							uni.showToast({
								title: '没有更多了'
							})
						}
					}
				})
			}
		}
	}
</script>

<style>
	page {
		background: white;
	}
	.lll{
		margin-right: 10px;
	}
	.nodata {
		font-size: 36upx;
		text-align: center;
		color: #cccccc;
		font-weight: 600;
		margin-top: 40%;
	}

	* {
		box-sizing: border-box;
	}

	.c view {
		display: inline;
	}

	page {
		background: #f3f5f7;
	}

	.r-item {
		background: white;
		margin-top: 20upx;
	}

	.r-item>view {
		border-bottom: 1upx solid #f3f5f7;
	}

	.header {
		display: flex;
		width: 100%;
		height: 50upx;
		justify-content: space-around;
	}

	.r-item .txt {
		height: 70upx;
		line-height: 70upx;
		display: flex;
		color: #F0AD4E;
		font-size: 30upx;
		font-weight: 600;
	}

	.r-item .txt>view {
		flex: 1;
		line-height: 70rpx;
		text-align: center;
	}

	.r-item .txt view:first-child {
		border-right: 1px solid #f3f5f7;
	}

	.header>view {
		
		text-align: center;
		height: 50upx;
		line-height: 50upx;
		font-size: 32upx;
	}

	.table {
		width: 100%;
		padding: 0 !important;
	}

	.table .tr {
		display: flex;
	}

	.tr .td {
		flex: 1;
		text-align: center;
		border-right: 1px solid #f3f5f7;
		font-size: 32upx;
	}

	.tr .td:last-child {
		border: none;
	}

	.tr:first-child {
		border-bottom: 1px solid #f3f5f7;
	}
</style>
