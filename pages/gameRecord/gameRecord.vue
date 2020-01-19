<template>
	<view class="body">
		<view class="r-item" v-for="(item,index) in lists" :key="index">
			<view class="header">
				<view>编号:{{item.id}}</view>
				<view>{{item.created_time}}</view>
				<view>{{item.race_desc}}</view>
			</view>
			<view class="txt">{{item.remark}}</view>
			<view class="table">
				<view class="tr"><view class="td">操作积分</view><view class="td">开始积分</view><view class="td">结束积分</view></view>
				<view class="tr"><view class="td">{{item.point}}</view><view class="td">{{item.point_start}}</view><view class="td">{{item.point_end}}</view></view>
			</view>
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
		onLoad() {
			this.getList(1,10)
		},
		onReachBottom:function(){//上拉加载更多
			// var current=this.lists.length;
			var current = Math.ceil(this.lists.length/10)+1;
			var	size=10;
			var this_ = this;
			
			this_.getList(current,size)
		},
		onPullDownRefresh:function () {
			//下拉刷新
			var current=1;
			var	size= 10;
			if(this.lists.length)
			{
				size=this.lists.length;
			}
			var this_ = this;
			this.getList(current,size)
			setTimeout(function () {
				uni.stopPullDownRefresh();
			}, 1000);
		},
		methods: {
			
			getList(current,size){
				let that = this
				this.bus.request({
					url: this.bus.url+'/point/findQqUpdownScorePageList',
					method: 'GET',
					data:{
						userId:JSON.parse(sessionStorage.getItem('userInfo')).userId,
						current:current,
						size:size
					},
					success:res=>{
						that.lists = that.lists.concat(res.data.data.records)
						if(res.data.data.records.length == 0){
							uni.showToast({
								title:'没有更多了'
							})
						}
					}
				})
			}
		}
	}
</script>

<style>
*{
	box-sizing: border-box;
}
page{
	background: #f3f5f7;
}
.r-item{
	background: white;
	margin-top: 20upx;
}
.r-item>view{
	border-bottom: 1upx solid #f3f5f7;
}
.header{
	display: flex;
	width: 100%;
	height:50upx;
	justify-content: space-around;
}
.r-item .txt{
	height: 70upx;
	line-height: 70upx;
	color: #F0AD4E;
	font-size: 30upx;
	font-weight: 600;
	text-indent: 40upx;
}
.header>view{
	text-align: center;
	height: 50upx;
	line-height: 50upx;
	font-size: 32upx;
}
.table{
	width: 100%;
	padding: 0!important;
}
.table .tr{
	display: flex;
}
.tr .td{
	flex: 1;
	text-align: center;
	border-right: 1px solid #f3f5f7;
	font-size: 32upx;
}
.tr .td:last-child{
	border: none;
}
.tr:first-child{
	border-bottom: 1px solid #f3f5f7;
}
</style>
