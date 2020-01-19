<template>
	<view class="body">
		<view v-show="false" class="item-li myfindview" style=" border-radius: 6px; margin-bottom: 10px;margin-top: 10px;">
			<view class="item-li-line2 border-b border-r border-t">
				<view class="item-li-line2-l flex1 border-l item-font">
					<span class="span01">账号:</span>
				</view>
				<view class="item-li-line2-l flex2 border-l item-font flex" style="display: flex; flex-direction: row;">
					<input name="" type="text" value="" class="input center" style="text-align: left;margin-left: 5px;" placeholder="请输入要搜索的账号"/>
				</view>
			</view>
			<view class="item-li-line2 border-b border-r">
				<view class="item-li-line2-l flex1 border-l item-font">
					<span class="span01">姓名:</span>
				</view>
				<view class="item-li-line2-l flex2 border-l item-font flex" style="display: flex; flex-direction: row;">
					<input name="" type="text" value="" class="input center" style="text-align: left;margin-left: 5px;" placeholder="请输入要搜索的姓名"/>
				</view>
			</view>
			
			<view class="item-li-line2-l flex1 border-l border-r border-b item-font" style="display: flex;">	
				<button type="warn" style="line-height: 32px; width: 100px;margin-top: 6px;margin-bottom: 6px;">搜索</button>
				<button type="warn" style="line-height: 32px; width: 100px;margin-top: 6px;margin-bottom: 6px;">刷新</button>
			</view>
		</view>
		<scroll-view scroll-y v-if="lists.length>0" class="list-layout" :style="'height:'+scroll_view_height+'px !important;'">
		<view class="page" style="background-color: rgba(200,200,200,0.1);padding-top: 2px;">
		    <view class="uni-list1" style="background-color: rgba(200,200,200,0.1);padding-top: 2px;">
				<block v-for="(item,index) in lists" :key="index">
					<view class="item-li">
						<view class="item-li-line2 border-t border-b">
							<view class="item-li-line2-l flex1 border-l item-font">
								账号:
							</view>
							<view class="item-li-line2-c flex1 border-l item-font border-r">
								{{item.account}}
							</view>
						</view>
						<view class="item-li-line2 border-b">
							<view class="item-li-line2-l flex1 border-l item-font">
								姓名:{{item.nickName}}
							</view>
							<view class="item-li-line2-c flex1 border-l item-font border-r">
								积分:{{item.totalPoint}}
							</view>
						</view>
						<view class="item-li-line3 border-b border-r">
							<view class="down-line item-li-line3-l flex1 border-l item-font" @click="gotoChongzhi(item,1)">
								上分
							</view>
							<view class="down-line item-li-line3-l flex1 border-l item-font" @click="gotoChongzhi(item,2)">
								下分
							</view>
							<view class="down-line item-li-line3-c flex1 border-l item-font" @click="resetPwd(item)">
								重置密码
							</view>
						</view>
					</view>
				</block>
		    </view>
		</view>
		</scroll-view>
		<view v-if="lists.length == 0" class="nodataLayout">
			<view class="nodataText">还没有记录哦~~</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				lists:[],
				scroll_view_height:0
			}
		},
		onReady() {
			let _this = this
			uni.getSystemInfo({
				success(res) {
					_this.phoneHeight = res.windowHeight
					//console.log(res.windowHeight)
					// 计算组件的高度
					let view = uni.createSelectorQuery().select(".myfindview")
					view.boundingClientRect(data => {
						_this.scroll_view_height = _this.phoneHeight - data.top;
					}).exec()
				}
			});
			
			this.getList((data)=> {
				if(data)
				{
					this.lists = data;
				}
			});
		},
		methods: {
			gotoChongzhi(data,type){
				uni.navigateTo({
					url: '/pages/HuiYuanChongZhi/HuiYuanChongZhi?data='+JSON.stringify(data)+'&type='+type
				});
			},
			resetPwd(data){
				uni.navigateTo({
					url: '/pages/huiYuanChongZhiMiMa/huiYuanChongZhiMiMa?data='+JSON.stringify(data)
				});
			},
			getList(callback)
			{
				this.bus.request({
					url: this.bus.url+'/agent/members',//?agentId=1
					method: 'GET',
					data: {
						agentId:JSON.parse(sessionStorage.getItem('userInfo')).userId,
						userFlag:JSON.parse(sessionStorage.getItem('userInfo')).userFlag
						// agentId:1,
						},
					success: res => {
						res = res.data;
						if(res.status=='1')
						{
							// uni.showToast({
							// 	title: '密码修改成功!',
							// 	duration: 2000
							// });
							callback(res.data)
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
							title:'网络错误!',
							duration: 2000,
							icon:'none'
						});
						callback('')
					},
					complete: () => {
						uni.hideLoading()
					}
				});
			}
		},
		onLoad:function () {
			// uni.startPullDownRefresh();
		},
		onReachBottom:function()
		{//上拉加载更多
			// var current=this.lists.length;
			// var	size=10;
			// var this_ = this;
			// this.getList(current,size,function (data) {
			// 	for (var i = 0; i < data.length; i++) {
			// 		this_.lists.push(data[i]);
			// 	}
			// })
		},
		onPullDownRefresh:function () {
			//下拉刷新
			var current=1;
			var	size= 10;
			if(this.lists.length)
			{
				size=this.lists.length;
			}
			// var this_ = this;
			// this.getList(current,size,function (data) {
			// 	this_.lists=data;
			// })
			this.getList((data)=> {
				if(data)
				{
					this.lists = data;
				}
				uni.stopPullDownRefresh();
			});
			// setTimeout(function () {
			// 	uni.stopPullDownRefresh();
			// }, 1000);
		}
	}
</script>

<style>
	.down-line{
		text-decoration:underline;
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
