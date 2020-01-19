<template>
	<view>
		<view class="statusbar"></view>
		<view class="myInfo" style="font-size: 10px;">
			<image src="../../static/app/header.png" class="icon"></image>
			<view class="name">{{name}}({{userId}})</view>
			<view class="jifen">积分:{{user_score?user_score:0}}</view>
		</view>
		
		<view class="">
			<uni-list>
				<!-- <uni-list-item @click="gotoPage(1)" title="游戏记录" thumb="../../static/app/icon_score.png"></uni-list-item> 暂不开发 -->
				<!-- <uni-list-item v-if="proxy==0"  @click="gotoPage(2)" title="积分统计" thumb="../../static/app/icon_score.png"></uni-list-item><!-- 游戏统计 --> 
				<!-- <uni-list-item v-if="proxy==0"  @click="gotoPage(3)" title="积分记录" thumb="../../static/app/icon_list.png"></uni-list-item><!-- 上下分记录 --> 
				<uni-list-item v-if="proxy==0" @click="gotoPage(13)" title="游戏记录" thumb="../../static/app/record.png"></uni-list-item>
				<uni-list-item v-if="proxy==0" @click="gotoPage(14)" title="游戏统计" thumb="../../static/app/tongji2.png"></uni-list-item>
				<uni-list-item v-if="proxy==0" @click="gotoPage(15)" title="上下分记录" thumb="../../static/app/tongji.png"></uni-list-item>
				<!-- <uni-list-item v-show="proxy==1" @click="gotoPage(8)" title="会员管理" thumb="../../static/app/icon_score.png"></uni-list-item> -->
				<uni-collapse v-if="proxy==1" >
				    <uni-collapse-item title="会员管理" thumb="../../static/app/icon_score.png">
				        <uni-list class="my-uni-list">
				            <uni-list-item uni-list-style2="uni-list-style2" class="myli-item" @click="gotoPage(8)" title="会员查询"></uni-list-item>
							<uni-list-item uni-list-style2="uni-list-style2" class="myli-item" @click="gotoPage(9)" title="创建会员"></uni-list-item>
							<!-- <uni-list-item uni-list-style2="uni-list-style2" class="myli-item" @click="gotoPage(11)" title="会员充值"></uni-list-item>
							<uni-list-item uni-list-style2="uni-list-style2" class="myli-item" @click="gotoPage(10)" title="重置密码"></uni-list-item> -->
						</uni-list>
				    </uni-collapse-item>
				</uni-collapse>
				<uni-list-item v-if="proxy==1" @click="gotoPage(18)" title="VIP游戏统计" thumb="../../static/app/tongji.png"></uni-list-item>
				<uni-list-item v-if="proxy==1" @click="gotoPage(12)" title="会员积分流水" thumb="../../static/app/icon_list.png"></uni-list-item>
				<uni-list-item v-if="proxy==1" @click="gotoPage(16)" title="会员上下分记录" thumb="../../static/app/huiyuan.png"></uni-list-item>
				<uni-list-item v-if="proxy==1" @click="gotoPage(17)" title="VIP上下分记录" thumb="../../static/app/daili.png"></uni-list-item>
				<uni-list-item @click="gotoPage(4)" title="游戏协议" thumb="../../static/app/icon_protocol.png"></uni-list-item>
				<uni-list-item @click="gotoPage(5)" title="修改密码" thumb="../../static/app/icon_pwd.png"></uni-list-item>
				<uni-list-item @click="gotoPage(6)" title="联系我们" thumb="../../static/app/icon_phone.png"></uni-list-item>

				
			</uni-list>
			
		</view>
		<view class="but">
			<button type="warn" @click="gotoPage(7)">登出</button>
		</view>
	</view>
	
</template>

<script>
import uniList from '@/components/uni-list/uni-list.vue'
import uniListItem from '@/components/uni-list-item/uni-list-item.vue'
import uniCollapse from "@/components/uni-collapse/uni-collapse.vue"
import uniCollapseItem from "@/components/uni-collapse-item/uni-collapse-item.vue"
	export default {
		data() {
			return {
				userId:JSON.parse(sessionStorage.getItem('userInfo')).userId,
				user_score:JSON.parse(sessionStorage.getItem('userInfo')).user_score,
				name:JSON.parse(sessionStorage.getItem('userInfo')).name,
				proxy:JSON.parse(sessionStorage.getItem('userInfo')).proxy, 
				// proxy:0
			}
		},
		methods: {
			gotoPage(action)
			{
				switch (action){
					case 1://游戏记录
						uni.navigateTo({
							url: '/pages/youxiajilu/youxiajilu'
						});
						break;
					case 2://游戏统计
						uni.navigateTo({
							url: '/pages/youxitongji/youxitongji'
						});
						break;
					case 3://上下分记录
						uni.navigateTo({
							url: '/pages/shangxiafenjilu/shangxiafenjilu'
						});
						break;
					case 4://游戏协议
						uni.navigateTo({
							url: '/pages/xieyi/xieyi'
						});
						break;
					case 5://修改密码
						uni.navigateTo({
							url: '/pages/xiugaimima/xiugaimima'
						});
						break;
					case 6://联系我们
						uni.switchTab({
							url: '/pages/callcenter/callcenter'
						});
						break;
					case 7://登出
						this.loginOut()
						break;
						
					case 8://会员查询
						uni.navigateTo({
							url: '/pages/huiYuanChaXun/huiYuanChaXun'
						});
						break;
						
					case 9://创建会员
						uni.navigateTo({
							url: '/pages/chuangJianHuiYuan/chuangJianHuiYuan'
						});
						break;
						
					case 10://重置密码
						uni.navigateTo({
							url: '/pages/huiYuanChongZhiMiMa/huiYuanChongZhiMiMa'
						});
						break;
					
					case 11://会员充值
						uni.navigateTo({
							url: '/pages/HuiYuanChongZhi/HuiYuanChongZhi'
						});
						break;
					
					case 12://会员积分流水
						uni.navigateTo({
							url: '/pages/huiYuanJiFenLiuShui/huiYuanJiFenLiuShui'
						});
						break;
					case 13://游戏记录
						uni.navigateTo({
							url: '/pages/gameRecord/gameRecord'
						});
						break;
					case 14://游戏统计
						uni.navigateTo({
							url: '/pages/youxitongji1/youxitongji1'
						});
						break;
					case 15://上下分记录
						uni.navigateTo({
							url: '/pages/centRecord/centRecord'
						});
						break;
					case 16://子会员上下分记录
						uni.navigateTo({
							url: '/pages/childrecord/childrecord'
						});
						break;
					case 17://VIP上下分记录
						uni.navigateTo({
							url: '/pages/dlcentRecord/dlcentRecord'
						});
						break;
					case 18://VIP游戏统计
						uni.navigateTo({
							url: '/pages/vipyouxitongji/vipyouxitongji'
						});
						break;
						
					default:
						break;
				}
			},
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
			}
		},components: {
			uniList,
			uniListItem,
			uniCollapse,uniCollapseItem
		},
		onShow() {
			
			this.userId = JSON.parse(sessionStorage.getItem('userInfo')).userId;
			this.user_score = JSON.parse(sessionStorage.getItem('userInfo')).user_score;
			this.name = JSON.parse(sessionStorage.getItem('userInfo')).name;
			// this.proxy = JSON.parse(sessionStorage.getItem('userInfo')).proxy;
			// uni.showToast({
			// 	title: JSON.stringify(JSON.parse(sessionStorage.getItem('userInfo'))),
			// 	duration: 20000,
			// 	icon:'none'
			// });
		}
	}
</script>

<style>
	.statusbar { // 状态栏高度
	  width: 100%;
	  background-color: rgba(0,0,0,0.5);
	  height: var(--status-bar-height);
	}
/* @import url("me.css"); */
.icon{
	width: 200upx;
	height: 200upx;
	align-self: center;
	margin-bottom: 20upx;
}

.myInfo{
	padding: 30upx 0px 30upx 0upx;
	background-color: #BEBEBE;
	display: flex;
	width: 100%;
	flex-direction: column;
	justify-content: center;
}

.name{
	align-self: center;
	font-size: 20px;
	margin-bottom: 10upx;
}

.jifen{
	align-self: center;
	font-size: 20px;
}

.but{
	margin: 60upx 0upx 30upx 0upx;
}

.but button{
	width: 80%;
}
.myli-item{
	border-bottom: 1px solid #c8c7cc;
	padding-left: 30upx;
}

</style>
