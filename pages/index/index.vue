<template>
	<view class="page">
		<view class="content" id="content">
			<view class="popLayout popLayout11" @touchmove.stop="" style="'height1:'+ height +'px;'" v-show="gameover_pop">
				<view class="popContent">
					<image v-if="popType==1" src="../../static/app/red_win_gif.gif" mode="aspectFill"></image>
					<image v-else-if="popType==2" src="../../static/app/blue_win_gif.gif" mode="aspectFill"></image>
					<image v-else-if="popType==3" src="../../static/app/draw_gif.gif" mode="aspectFill"></image>
				</view>
			</view>
			
			<uni-popup ref="popup2" mode="fixed" type="bottom">
			<view class="popLayout">
				<view class="popContent">
					<view class="" style="flex: 1;"></view>
					<view class="popLayout_main">
						<view class="dashang_view">
							<view class="dashang_type">
								<label class="radio" @click="dashang_type='MT'"><radio :checked="dashang_type=='MT'"/>监板</label>
								<label class="radio" @click="dashang_type='RT'"><radio :checked="dashang_type=='RT'"/>红方草师</label>
								<label class="radio" @click="dashang_type='BT'"><radio :checked="dashang_type=='BT'"/>蓝方草师</label>
							</view>
							<view class="dashang_val" style="width: 100%;">
								<view style="flex: 1;"></view>
								
								<view class="item1-readio"><label class="radio" @click="dashang_val=10"><radio color="red" :checked="dashang_val==10"/>10</label></view>
								<view style="flex: 1;"></view>
								<view class="item1-readio"><label class="radio" @click="dashang_val=20"><radio color="red" :checked="dashang_val==20"/>20</label></view>
								<view style="flex: 1;"></view>
								<view class="item1-readio"><label class="radio" @click="dashang_val=50"><radio color="red" :checked="dashang_val==50"/>50</label></view>
								<view style="flex: 1;"></view>
								<view class="item1-readio"><label class="radio" @click="dashang_val=100"><radio color="red" :checked="dashang_val==100"/>100</label></view>
								<view style="flex: 1;"></view>
							</view>
							<view class="dashang_but">
								<button class="cancel"  type="primary" @click="dashangClose();">取消</button>
								<button class="ok" type="primary" @click="dashang()">打赏</button>
							</view>
						</view>
					</view>
				</view>
			</view>
			</uni-popup>
			<uni-popup ref="popup" mode="fixed" type="bottom">
			    <view class="popLayout2">
			    	<view class="">
			    		<view class="popLayout2_main">
			    			<view class="dashang_view">
			    				<view class="dashang_val" style="width: 100%;">
			    					<view style="flex: 1;"></view>
			    					<view class="item1-readio"><label style="font-size: 16px;">狠心支持一把?</label></view>
			    					<view style="flex: 1;"></view>
			    				</view>
			    				<view class="dashang_but">
			    					<button class="cancel"  type="primary" @click="batClose()">取消</button>
			    					<button class="ok" type="primary" @click="bat()">确定</button>
			    				</view>
			    			</view>
			    		</view>
			    	</view>
			    </view>
			</uni-popup>
			<!-- <view class="statusbar"></view> -->
			<!-- <view id="video0" class="videoLayout" style="height: 480upx;"> -->
				<!-- 直播模块区域 -->
				
			<!-- </view> -->
			
			<!-- <marquee class="marquee" direction="left" behavior="scroll" scrollamount="3">
				严正声明:斗蛐蛐作为娱乐项目,严禁参与一切赌博相关行为,如有发现作封号处理,望大家共创和谐平台!
			</marquee> -->
			<view>
				<web-view src="http://172.16.9.69:8803/" class="webview"></web-view>
			</view>
				<!-- 严正声明:斗蛐蛐作为娱乐项目,严禁参与一切赌博相关行为,如有发现作封号处理,望大家共创和谐平台! -->
			<!-- <video id="my-player1" class="video-js vjs-default-skin vjs-big-play-centered" autoplay="autoplay" preload="metadata" controls="controls" data-setup='{ "html5" : { "nativeTextTracks" : false } }'>
			</video> -->
			<!-- <video id="example-video" width="600" height="300" class="video-js vjs-default-skin" poster="">
				<source src="http://ivi.bupt.edu.cn/hls/cctv1hd.m3u8" type="application/x-mpegURL" >
			</video> -->
			<!-- <video-player class="video-player vjs-custom-skin"
				ref="videoPlayer"
				:playsinline="true"
				:options="playerOptions"
			></video-player> -->
			<my-marquee class="marquee" :lists="marqueelist"></my-marquee>
			<view class="titlelayout"> 
				<view class="titleL">
					<view class="left1">
						第{{dui?dui:0}}对 (共{{total_dui?total_dui:0}}对)&nbsp;{{user_score}}分
					</view>
					
				</view>
				<!-- <view class="changeVideo" @click="refreshVideo()">刷新</view> -->
				<!-- <view class="changeVideo" @click="changeVideo()">切换</view> -->
				<!-- <view class="titleR">
					<view class="titleRBut" @click="refreshVideo">刷新</view>
				</view> -->
				<view class="titleR">
					<view class="titleRBut" @click="dashangOpen();dashang_type='MT';dashang_val=100">打赏</view>
				</view>
				
			</view>
			
			<view class="mainLayout">
					<view class="myUl">
						<view v-for="(item,index) in datalist" :key="index" :class="index==1?'myLi action':'myLi'">
							<view class="myLiL redBg" :class="ctr_li_index==index?'redBgSelect':''">
										<view class="myli_item_l">
											{{getTypeName(item[0].type)}}
										</view> 
										<view class="myli_item_r" >
											<!-- <view v-for="(itemI,i) in item[0].status" :key="i"> -->
											<template v-if="item[0].first == 1">
												<view v-show="item[0].status[0].show &&item[0].status[0].type !=-1" class="myli_item_r_content" 
												:class="(index!=0&&ctr_li_index==index&&item[0].current==1)?'selectLine-l':''" 
												@click="liClick(index,i,'red',item)">
													<view class="myli_item_title" :hidden="item[0].status[0].val==-1">
														{{item[0].status[0].val}}
													</view>
													<view class="myli_item_r_flex">
													</view>
													<view v-if="index!=0&&item[0].status[0].type==0" class="myli_item_but" :hidden="item[0].status[0].val==-1">
														<label class="mybut_jie">放</label> 
													</view>
													<view v-if="index!=0&&item[0].status[0].type==1" class="myli_item_but" :hidden="item[0].status[0].val==-1">
														<label class="mybut_jie">接</label> 
													</view>
												</view>
												<view v-show="item[0].status[1].show &&item[0].status[1].type !=-1" class="myli_item_r_content" 
												:class="(index!=0&&ctr_li_index==index&&item[0].current==2)?'selectLine-l':''"  @click="liClick(index,i,'red',item)">
													<view class="myli_item_title" :hidden="item[0].status[1].val==-1"> 
														{{item[0].status[1].val}}
													</view>
													<view class="myli_item_r_flex">
													</view>
													<view v-if="index!=0&&item[0].status[1].type==0"  class="myli_item_but" :hidden="item[0].status[1].val==-1">
														<label class="mybut_fang">放</label>
													</view>
													<view v-if="index!=0&&item[0].status[1].type==1"  class="myli_item_but" :hidden="item[0].status[1].val==-1">
														<label class="mybut_fang">接</label>
													</view>
												</view>
											</template>
											<template v-else-if="item[0].first == 2">
												<view v-show="item[0].status[1].show &&item[0].status[1].type !=-1" class="myli_item_r_content" 
													:class="(index!=0&&ctr_li_index==index&&item[0].current==2)?'selectLine-l':''"  @click="liClick(index,i,'red',item)">
													<view class="myli_item_title" :hidden="item[0].status[1].val==-1"> 
														{{item[0].status[1].val}}
													</view>
													<view class="myli_item_r_flex">
													</view>
													<view v-if="index!=0&&item[0].status[1].type==0"  class="myli_item_but" :hidden="item[0].status[1].val==-1">
														<label class="mybut_fang">放</label>
													</view>
													<view v-if="index!=0&&item[0].status[1].type==1"  class="myli_item_but" :hidden="item[0].status[1].val==-1">
														<label class="mybut_fang">接</label>
													</view>
												</view>
												<view v-show="item[0].status[0].show &&item[0].status[0].type !=-1" class="myli_item_r_content" 
													:class="(index!=0&&ctr_li_index==index&&item[0].current==1)?'selectLine-l':''" @click="liClick(index,i,'red',item)">
													<view class="myli_item_title" :hidden="item[0].status[0].val==-1">
														{{item[0].status[0].val}}
													</view>
													<view class="myli_item_r_flex">
													</view>
													<view v-if="index!=0&&item[0].status[0].type==0" class="myli_item_but" :hidden="item[0].status[0].val==-1">
														<label class="mybut_jie">放</label> 
													</view>
													<view v-if="index!=0&&item[0].status[0].type==1" class="myli_item_but" :hidden="item[0].status[0].val==-1">
														<label class="mybut_jie">接</label> 
													</view>
												</view>
											</template>
												<!-- <view v-show="!itemI.jie && !itemI.fang" class="myli_item_r_content"  @click="liClick(index,i,'red',item)">
													<view class="myli_item_title" :class="itemI.val==-1?'hidden':''"> 
														{{itemI.val}}
													</view>
													<view class="myli_item_r_flex">
													</view>
													<view class="myli_item_but">
													</view>
												</view> -->
											<!-- </view> -->
										</view>
							</view>	
							
							<view class="myLiR blueBg" :class="ctr_li_index==index?'blueBgSelect':''">
										<view class="myli_item_l">
											{{getTypeName(item[1].type)}}
										</view>
										<view class="myli_item_r" >
											<!-- <view v-for="(itemI,i) in item[1].status" :key="i"> -->
											<template v-if="item[0].first == 1">
												<view v-show="item[1].status[0].show &&item[1].status[0].type !=-1" class="myli_item_r_content" 
												:class="(index!=0&&ctr_li_index==index&&item[0].current==1)?'selectLine-r':''" @click="liClick(index,i,'blue',item)">
													<view class="myli_item_title" :hidden="item[1].status[0].val==-1">
														{{item[1].status[0].val}}
													</view>
													<view class="myli_item_r_flex">
													</view>
													<view v-if="index!=0&&item[1].status[0].type==0" class="myli_item_but" :hidden="item[1].status[1].val==-1">
														<label class="mybut_fang">接</label>
													</view>
													<view v-if="index!=0&&item[1].status[0].type==1" class="myli_item_but" :hidden="item[1].status[0].val==-1">
														<label class="mybut_jie">放</label>
													</view>
												</view>
												<view v-show="item[1].status[1].show &&item[1].status[1].type !=-1"  class="myli_item_r_content" 
												:class="(index!=0&&ctr_li_index==index&&item[0].current==2)?'selectLine-r':''" @click="liClick(index,i,'blue',item)">
													<view class="myli_item_title" :hidden="item[1].status[1].val==-1">
														{{item[1].status[1].val}}
													</view>
													<view class="myli_item_r_flex">
													</view>
													<view v-if="index!=0&&item[1].status[1].type==0" class="myli_item_but"  :hidden="item[1].status[1].val==-1">
														<label class="mybut_fang">接</label>
													</view>
													<view  v-if="index!=0&&item[1].status[1].type==1" class="myli_item_but" :hidden="item[1].status[0].val==-1">
														<label class="mybut_jie">放</label>
													</view>
												</view>
												<!-- <view v-show="!itemI.jie && !itemI.fang"  class="myli_item_r_content" @click="liClick(index,i,'blue',item)">
													<view class="myli_item_title"  :class="itemI.val==-1?'hidden':''">
														{{itemI.val}}
													</view>
													<view class="myli_item_r_flex">
													</view>
													<view class="myli_item_but">
													</view>
												</view> -->
											<!-- </view> -->
											</template>
											<template v-else-if="item[0].first == 2">
												<view v-show="item[1].status[1].show &&item[1].status[1].type !=-1"  class="myli_item_r_content" 
												:class="(index!=0&&ctr_li_index==index&&item[0].current==2)?'selectLine-r':''" @click="liClick(index,i,'blue',item)">
													<view class="myli_item_title" :hidden="item[1].status[1].val==-1">
														{{item[1].status[1].val}}
													</view>
													<view class="myli_item_r_flex">
													</view>
													<view v-if="index!=0&&item[1].status[1].type==0" class="myli_item_but"  :hidden="item[1].status[1].val==-1">
														<label class="mybut_fang">接</label>
													</view>
													<view  v-if="index!=0&&item[1].status[1].type==1" class="myli_item_but" :hidden="item[1].status[0].val==-1">
														<label class="mybut_jie">放</label>
													</view>
												</view>
												<view v-show="item[1].status[0].show &&item[1].status[0].type !=-1" class="myli_item_r_content" 
												:class="(index!=0&&ctr_li_index==index&&item[0].current==1)?'selectLine-r':''" @click="liClick(index,i,'blue',item)">
													<view class="myli_item_title" :hidden="item[1].status[0].val==-1">
														{{item[1].status[0].val}}
													</view>
													<view class="myli_item_r_flex">
													</view>
													<view v-if="index!=0&&item[1].status[0].type==0" class="myli_item_but" :hidden="item[1].status[1].val==-1">
														<label class="mybut_fang">接</label>
													</view>
													<view v-if="index!=0&&item[1].status[0].type==1" class="myli_item_but" :hidden="item[1].status[0].val==-1">
														<label class="mybut_jie">放</label>
													</view>
												</view>
											</template>
												
										</view>
							</view>	
						</view>
					</view>
			</view>
			
			
			
			<view class="mainLayout">
				<view class="myUl">
					<view class="myLi" >
						<view  class="myLiL jifenItemLayout">
							<view class="jifenItem"  v-for="(item,index) in jifenlist" :key="item.jifen" @click="startClick(index,'red',item)">
								<view class="jifenItemImg">
									<image src="../../static/img/xingxing.png" class="JifenImgBut"></image>
								</view>
								<view class="jifenItemText">
									<label class="jifenItemTextStr">{{item.jifen}}</label>
								</view>
							</view>
						</view>	
						
						<view class="myLiR jifenItemLayout">
							<view class="jifenItem"  v-for="(item,index) in jifenlist" :key="item.jifen" @click="startClick(index,'blue',item)">
								<view class="jifenItemImg">
									<image src="../../static/img/xingxing.png" class="JifenImgBut"></image>
								</view>
								<view class="jifenItemText">
									<label class="jifenItemTextStr">{{item.jifen}}</label>
								</view>
							</view>
						</view>	
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import myMarquee from '@/components/my-marquee/my-marquee.vue'
import uniPopup from "@/components/uni-popup/uni-popup.vue"
// import videoCom from "@/components/video/video.vue"
// import videojs from 'video.js';
// import "videojs-flash"
// import 'videojs-contrib-hls'
// import "video.js/dist/video-js.min.css"
// import "vue-video-player/src/custom-theme.css"
import "@/static/videoInit.css"
	// import common from "../../common/jquery.js";
	var video_h = 250
	var video=[null,null];
	var currentWebview;
	var times = 500;
	const datalist_init=[
					[
						{name:'hong',type:10,val:10,first:1,status:[{line:'1',type:0,val:-1,name:'接',showTitle:1,show:0},{line:'2',type:0,val:-1,name:'放',showTitle:0,show:0}]},
						{name:'blue',type:10,val:10,first:1,status:[{line:'1',type:0,val:-1,name:'放',showTitle:1,show:0},{line:'2',type:0,val:-1,name:'接',showTitle:0,show:0}]},
						{isCtr:0}
					],
					[
						{name:'hong',type:8,val:8,first:0,status:[{line:'1',type:0,val:-1,name:'接',showTitle:1,show:0},{line:'2',type:0,val:-1,name:'放',showTitle:0,show:0}]},
						{name:'blue',type:8,val:8,first:0,status:[{line:'1',type:0,val:-1,name:'放',showTitle:1,show:0},{line:'2',type:0,val:-1,name:'接',showTitle:0,show:0}]},
						{isCtr:0}
					],
					[
						{name:'hong',type:7,val:7,first:0,status:[{line:'1',type:0,val:-1,name:'接',showTitle:1,show:0},{line:'2',type:0,val:-1,name:'放',showTitle:0,show:0}]},
						{name:'blue',type:7,val:7,first:0,status:[{line:'1',type:0,val:-1,name:'放',showTitle:1,show:0},{line:'2',type:0,val:-1,name:'接',showTitle:0,show:0}]},
						{isCtr:0}
					],
					[
						{name:'hong',type:6,val:6,first:0,status:[{line:'1',type:0,val:-1,name:'接',showTitle:1,show:0},{line:'2',type:0,val:-1,name:'放',showTitle:0,show:0}]},
						{name:'blue',type:6,val:6,first:0,status:[{line:'1',type:0,val:-1,name:'放',showTitle:1,show:0},{line:'2',type:0,val:-1,name:'接',showTitle:0,show:0}]},
						{isCtr:0}
					],
					[
						{name:'hong',type:5,val:5,first:0,status:[{line:'1',type:0,val:-1,name:'接',showTitle:1,show:0},{line:'2',type:0,val:-1,name:'放',showTitle:0,show:0}]},
						{name:'blue',type:5,val:5,first:0,status:[{line:'1',type:0,val:-1,name:'放',showTitle:1,show:0},{line:'2',type:0,val:-1,name:'接',showTitle:0,show:0}]},
						{isCtr:0}
					],
					[
						{name:'hong',type:4,val:4,first:0,status:[{line:'1',type:0,val:-1,name:'接',showTitle:1,show:0},{line:'2',type:0,val:-1,name:'放',showTitle:0,show:0}]},
						{name:'blue',type:4,val:4,first:0,status:[{line:'1',type:0,val:-1,name:'放',showTitle:1,show:0},{line:'2',type:0,val:-1,name:'接',showTitle:0,show:0}]},
						{isCtr:0}
					],
				];
	const jifenlist_init=[
					// {jifen:10,status:0,type:0,ratio:1},
					// {jifen:20,status:0,type:0,ratio:1},
					{jifen:30,status:0,type:0,ratio:1},
					{jifen:50,status:0,type:0,ratio:1},
					{jifen:100,status:0,type:0,ratio:1},
					{jifen:200,status:0,type:0,ratio:1},
					{jifen:300,status:0,type:0,ratio:1},
					{jifen:500,status:0,type:0,ratio:1},
					{jifen:1000,status:0,type:0,ratio:1},
					{jifen:2000,status:0,type:0,ratio:1},
					{jifen:3000,status:0,type:0,ratio:1},
					{jifen:5000,status:0,type:0,ratio:1}
				];
	
	const jifenlist2_init=[
					{jifen:1,status:0,type:0,ratio:1},
					{jifen:2,status:0,type:0,ratio:1},
					{jifen:5,status:0,type:0,ratio:1},
					{jifen:10,status:0,type:0,ratio:1},
					{jifen:20,status:0,type:0,ratio:1},
					{jifen:50,status:0,type:0,ratio:1},
					{jifen:100,status:0,type:0,ratio:1},
					{jifen:200,status:0,type:0,ratio:1},
					{jifen:500,status:0,type:0,ratio:1}
				];
	
	export default {
		data() {
			return {
				batObj:{},
				v_top:0,
				v_height:0,
				marqueelist:['严正声明:斗蛐蛐作为娱乐项目,严禁参与一切赌博相关行为,如有发现作封号处理,望大家共创和谐平台'],
				popType:0,//1-红方胜利,2-蓝方胜利,3-和局,4-打赏
				datalist: datalist_init.concat(),
				jifenlist:jifenlist_init.concat(),
				dashang_type:'MT',
				dashang_val:100,
				// 允许操作的折扣数 -1代表没有可操作的
				ctr_li_index:-1,
				// 0表示不显示, 1表示显示第一行,2表示显示第二行
				ctr_li_index_line:0,
				// 通信开关
				sockect_run:true,
				// 当前的对数
				dui:1,
				// 总对数
				total_dui:50,
				// 用户编号
				user_id:JSON.parse(sessionStorage.getItem('userInfo')).userId?JSON.parse(sessionStorage.getItem('userInfo')).userId:'',
				// 当前用户剩下的积分
				user_score:0,
				// 场次
				raceId:'',
				// 第几对
				currenNum:'',
				// 第行操作
				raceNumState:0,
				// raceNumId
				raceNumId:0,
				// 打赏对话框
				popType_dashang:false,
				
				//游戏结束显示pop flag
				gameover_pop:false,
				options1: {
					autoplay: true, // 是否自动播放
					muted: false, // 是否静音
					controls: true,
					fluid: true, // 宽高自适应
					sources: [{
						src: 'rtmp://live.hkstv.hk.lxdns.com/live/hks',
						type: 'rtmp/flv'
					}]
				},
				
				height:400,
				video_index:0,
				// liveUrl:['rtmp://139.159.221.9/zxc/live','rtmp://139.159.221.9/zxc2/live'],
				liveUrl:['rtmp://139.159.221.9/zxc1/live','rtmp://139.159.221.9/zxc2/live'],
				
				refresh:[]
				 
			}
		},
		watch: {
			// 如果 `question` 发生改变，这个函数就会运行
			popType: function (newQuestion, oldQuestion) {
			  // var me = this
			  // if(me.popType==1||me.popType==2||me.popType==3)
			  // {
				 //  setTimeout(function () {
					// me.popType = 0;
				 //  },2000);
			  // }
			}
		  },
		onReady() {
			
			// this.player1 = videojs('my-player1', this.options1, function onPlayerReady() {
			// 	debugger
			// 	videojs.log('播放器已经准备好了!')
			// 	this.on('play', function() {
			// 		console.log('开始/恢复播放')
			// 	})
			// 	// this.on('pause', function() {
			// 	// 	console.log('暂停播放')
			// 	// })
			// 	// this.on('ended', function() {
			// 	// 	console.log('结束播放')
			// 	// })
			// })
			// debugger
			// this.player1.play()
			// var player = videojs('example-video');
			// player.play();
			// var view = uni.createSelectorQuery().select("#content");
			// var myPlayer = videojs('example-video');
			// videojs("example-video").ready(function(){
			// 	var myPlayer = this;
			// 	myPlayer.play();
			// });
	// 		var player = videojs('example-video', { "poster": "", "controls": "true" }, function() {
	// 			this.on('play', function() {
	// 				console.log('正在播放');
	// 			});
	// 			//暂停--播放完毕后也会暂停
	// 			this.on('pause', function() {
	// 				console.log("暂停中")
	// 			});
	// 			// 结束
	// 			this.on('ended', function() {
	// 				console.log('结束');
	// 			})
 
	// 		});
	// 		player.play()
			this.receiveMsg();
		},
		onLoad() {
			// common.$('.videoLayout').height(video_h);
			// var ss = uni.createSelectorQuery();
			// var mysize = ss.select('#videoLayout')
			
			// var view = uni.createSelectorQuery().select(".content");
			
			// var view = uni.createSelectorQuery().select(".content");
			// view.boundingClientRect(data_ => {
			// 	//console.log(JSON.stringify(data_))
			// 	this.height = data_.height;
			// }).exec();
			// this.plsyVideo();
		},
		methods: {
			refreshVideo(){
				// this.getLiveUrl(this.refresh[0],that.refresh[1])
				
				if(this.video_index == 0)
				{
					video[0].stop();
					setTimeout(()=>{
						video[0].play();
					},200)
				} else if(this.video_index == 1){
					video[1].stop();
					setTimeout(()=>{
						video[1].play();
					},200)
				}
			},
			changeVideo(){
				// uni.showModal({
				// 	content: 'this.video_index='+this.video_index,
				// 	showCancel: false
				// });
				// uni.showModal({
				// 	content: JSON.stringify(currentWebview),
				// 	showCancel: false
				// });
				if(this.video_index == 0)
				{
					this.video_index = 1;
					// currentWebview.hide(video[0])
					// currentWebview.show(video[1])
					currentWebview.remove(video[0]); 
					video[0].stop();
					// video[0].pause();
					currentWebview.append(video[1]); 
					video[1].play();
					
				
				} else if(this.video_index == 1){
					this.video_index = 0;
					// currentWebview.hide(video[1])
					// currentWebview.show(video[0])
					currentWebview.remove(video[1]);
					video[1].stop();
					// video[1].pause();
					currentWebview.append(video[0]); 
					video[0].play();
				}
			},
			getLiveUrl(top,height)
			{
				// 获取直播地址
				this.bus.request({
					url: this.bus.url+'/liveUrl',
					method: 'GET',
					data: {},
					success: res => { 
						if(res.data.status=='1') 
						{
							this.liveUrl[0] = 'rtmp://58.200.131.2:1935/livetv/hunantv';
							this.liveUrl[1] = 'rtmp://58.200.131.2:1935/livetv/hunantv';
						}
						this.playVideo(top,height);
					},
					fail: () => {
						this.playVideo(top,height);
					}
				})
			},
			playVideo(t,h){
				// #ifdef APP-PLUS
				if(!video[1])
				{
					video[0] = new plus.video.VideoPlayer('video0',{
						// src:'rtmp://58.200.131.2:1935/livetv/hunantv',
						// src:'rtmp://47.97.105.193/zxc/live',
						// src:'rtmp://139.159.221.9/zxc/live',
						src:this.liveUrl[0],
						top:t+'px',  
						left:'0px',  
						// width: '300px',  
						height: h+'px',  
						position:'static',
						muted:false,
						'show-fullscreen-btn':true
					});
					currentWebview = this.$mp.page.$getAppWebview(); 
					currentWebview.append(video[0]); 
					video[0].play();
				}
				if(!video[1])
				{
					video[1] = new plus.video.VideoPlayer('video1',{
						// src:'rtmp://58.200.131.2:1935/livetv/hunantv',
						// src:'rtmp://47.97.105.193/zxc/live',
						// src:'rtmp://139.159.221.9/zxc/live',
						src:this.liveUrl[1],
						top:t+'px',  
						left:'0px',  
						// width: '300px',  
						height: h+'px',  
						position:'static',
						muted:false,
						'show-fullscreen-btn':true
					});
				}
				
				// 
				// currentWebview.append(video[1]); 
				// video[1].play();
				// #endif
			},
			statechange(e){
			            console.log('live-player code:', e.detail.code)
			        },
			errors(e){
				console.error('live-player error:', e.detail.errMsg)
			},
			getTypeName(type)
			{
				var name = '';
				switch (type){
					case 10:
						name='开盆';
						break;
					case 8:
						name='八扣';
						break;
					case 7:
						name='七扣';
						break;
					case 6:
						name='六扣';
						break;
					case 5:
						name='五扣';
						break;
					case 4:
						name='四扣';
						break;
					default:
						break;
				}
				return name;
			},
			liClick(index,i,type,item)
			{
				if(this.ctr_li_index != index)
				{
					return;
				}
				
				if(type=='red')
				{
					// alert('红方'+this.getTypeName(item[0].type))
				} else if(type=='blue')
				{
					// alert('蓝方'+this.getTypeName(item[1].type))
				}
			},
			
			startClick(index,type,item)
			{
				if(this.ctr_li_index == -1)
				{
					return;
				}
				if(JSON.parse(sessionStorage.getItem('userInfo')).proxy==1)
				{
					uni.showToast({
						icon:'none',
						title:'对不起,VIP不能进行该操作!!',
						duration:2000
					})
					return;
				}
				
				if(this.datalist[this.ctr_li_index][2].isCtr)
				{
					uni.showToast({
						icon:'none',
						title:'你已经操作过了!!',
						duration:2000
					})
					return;
				}
				this.$refs.popup.open()
				this.batObj.index = index;
				this.batObj.type = type;
				this.batObj.item = item;
			},
			batClose(){
				this.$refs.popup.close();
			},
			// 押注函数
			bat()
			{
				let index = this.batObj.index;
				let type = this.batObj.type;
				let item = this.batObj.item;
				// if(this.ctr_li_index == -1)
				// {
				// 	return;
				// }
				// if(JSON.parse(sessionStorage.getItem('userInfo')).proxy==1)
				// {
				// 	uni.showToast({
				// 		icon:'none',
				// 		title:'对不起,VIP不能进行该操作!!',
				// 		duration:2000
				// 	})
				// 	return;
				// }
				
				// if(this.datalist[this.ctr_li_index][2].isCtr)
				// {
				// 	uni.showToast({
				// 		icon:'none',
				// 		title:'你已经操作过了!!',
				// 		duration:2000
				// 	})
				// 	return;
				// }
				this.$refs.popup.close();
				var side = 0;
				var point = item.jifen*item.ratio;;
				var kou=0;
				if(type=='red')
				{
					side=1;
					kou = this.datalist[this.ctr_li_index][0].type;
					// alert('红方'+this.getTypeName(this.datalist[this.ctr_li_index][0].type)+' 压'+point)
				} else if(type=='blue')
				{
					side=2;
					kou = this.datalist[this.ctr_li_index][1].type;
					// alert('蓝方'+this.getTypeName(this.datalist[this.ctr_li_index][1].type)+' 压'+point)
				}
				this.sendMsg(side,kou,point)
			},
			receiveMsg() {
				if(!this.sockect_run)
				{
					return;
				}
				var this_=this;
				
				this.bus.request({
					url: this.bus.url+'/race/findQqRaceDetail',
					method: 'GET',
					hideLoading:true,
					data: {userId:JSON.parse(sessionStorage.getItem('userInfo')).userId,userFlag:JSON.parse(sessionStorage.getItem('userInfo')).userFlag},
					success: res => {
						if(res.data.status=='1')
						{
							var data_ = res.data.data;
							// 收到消息的操作--有数据返回
							if(JSON.stringify(data_) != "{}")
							{
								var obj = {};
								// 投注状态 0未开始, 1-可下注,2-停止下注
								obj.bet_state=this.getPram(data_,'bet_state');	
								// 场次
								obj.raceId=this.getPram(data_,'raceId');		
								obj.lan8kou=this.getPram(data_,'lan8kou');	
								// 结果	0初始	1红方胜	2蓝方胜	3平局			
								obj.referee=this.getPram(data_,'referee');
								
										// 第几对
								obj.currenNum=this.getPram(data_,'currenNum',0);	
									// 第行操作
								obj.raceNumState=this.getPram(data_,'raceNumState');	
								// 次场地
								obj.raceNumId=this.getPram(data_,'raceNumId');
								// 共多少对
								obj.totalRaceNum=this.getPram(data_,'totalRaceNum');
								obj.totalPoint = this.getPram(data_,'totalPoint');
								
								//设置值
								// 当前的对数
								this.dui=parseInt(obj.currenNum);
								// 总对数
								this.total_dui=parseInt(obj.totalRaceNum);
								// 当前用户剩下的积分
								this.user_score=parseInt(obj.totalPoint);
								JSON.parse(sessionStorage.getItem('userInfo')).user_score = this.user_score;
								// 场次
								this.raceId=parseInt(obj.raceId);
								// 第几对
								this.currenNum=parseInt(obj.currenNum);
								// 次场地
								this.raceNumId=parseInt(obj.raceNumId);
								
								// 投注状态 0未开始, 1-可下注,2-停止下注
								obj.bet_state=this.getPram(data_,'bet_state');
								if(obj.bet_state == '0')
								{
									this.ctr_li_index=-1;
								}else if(obj.bet_state == '1')
								{
									// 1-可下注 设置页面哪行可以操作
									if(obj.raceNumState == '10')
									{
										this.ctr_li_index=0;
										this.jifenlist=jifenlist_init.concat()
									} else{
										this.ctr_li_index=9-parseInt(obj.raceNumState);
										this.jifenlist=jifenlist2_init.concat()
									}
								} else{
									this.ctr_li_index=-1;
								}
								
								// 设置红方押注信息
								this.setYaZhuList(data_, 'red',obj.referee);
								// 设置蓝方押注信息
								this.setYaZhuList(data_, 'blue',obj.referee);
								
								// 判断游戏是否结束
								var this_ = this;
								switch (obj.referee)
								{
									case '1'://红方胜1
										this.popType = 1;
										this.gameover_pop =(this.showGameOver(data_)>0) 
										break;
									case '2'://蓝方胜
										this.popType = 2;
										this.gameover_pop =(this.showGameOver(data_)>0) 
										break;
									case '3'://平局
										this.popType = 3;
										this.gameover_pop =(this.showGameOver(data_)>0) 
										break;
									default:
										this.gameover_pop = false;
										break;
								}
							}
						}
					},
					fail: () => {
						
					},
					complete: () => {
						setTimeout(function() {
							this_.receiveMsg();
						}, times);
					}
				});
			},
			showGameOver(data_)
			{
				var winTime = this.getPram(data_,'winTime');
				if(winTime)
				{
					winTime = winTime.substring(0,winTime.length-3);
					winTime = parseInt(winTime)
				} else {
					return -1;
				}
				
				var currentTime = this.getPram(data_,'currentTime');
				// //console.log('******currentTime2*************'+(currentTime))
				if(currentTime)
				{
					currentTime = currentTime.substring(0,currentTime.length-3);
					// //console.log('******currentTime2*************'+(currentTime))
					currentTime = parseInt(currentTime)
				} else {
					return -1;
				}
				
				if(currentTime &&　winTime)
				{
					// //console.log('*******************'+(currentTime-winTime))
					if(currentTime-winTime>5 || (currentTime-winTime<0))
					{
						return 0;
					}
				}
				return 1;
			},
			setYaZhuList(data_,type,referee)
			{
				// //console.log('***********>>>>>'+this.showGameOver(data_))
				if(this.showGameOver(data_)==0)
				{
					// //console.log('***222********>>>>>'+this.showGameOver(data_))
					// this.datalist = datalist_init.concat();
					// 
					// // -----------------红方
					// // 开盆
					// this.datalist[0][0].status[0].val=-1;
					// //8扣
					// this.datalist[1][0].status[0].val=-1;
					// //7扣
					// this.datalist[2][0].status[0].val=-1;
					// //6扣
					// this.datalist[3][0].status[0].val=-1;
					// //5扣
					// this.datalist[4][0].status[0].val=-1;
					// //4扣
					// this.datalist[5][0].status[0].val=-1;
					// 
					// // -----------------蓝方
					// // 开盆
					// this.datalist[0][1].status[0].val=-1;
					// //8扣
					// this.datalist[1][1].status[0].val=-1;
					// //7扣
					// this.datalist[2][1].status[0].val=-1;
					// //6扣
					// this.datalist[3][1].status[0].val=-1;
					// //5扣
					// this.datalist[4][1].status[0].val=-1;
					// //4扣
					// this.datalist[5][1].status[0].val=-1;
					
					for (var i = 0; i < this.datalist.length; i++) 
					{
						this.datalist[i][0].status[0].type=0;
						this.datalist[i][0].status[0].val=-1;
						this.datalist[i][0].status[0].showTitle=1;
						this.datalist[i][0].status[0].show=0;
						
						this.datalist[i][0].status[1].type=0;
						this.datalist[i][0].status[1].val=-1;
						this.datalist[i][0].status[1].showTitle=1;
						this.datalist[i][0].status[1].show=0;
						
						this.datalist[i][1].status[0].type=0;
						this.datalist[i][1].status[0].val=-1;
						this.datalist[i][1].status[0].showTitle=1;
						this.datalist[i][1].status[0].show=0;
						
						this.datalist[i][1].status[1].type=0;
						this.datalist[i][1].status[1].val=-1;
						this.datalist[i][1].status[1].showTitle=1;
						this.datalist[i][1].status[1].show=0;
						this.datalist[i][2].isCtr=0;
					}
					
					
					
					
					return;
				}
				
				// 扣的第一行数据
				var valKaipen=0;
				var val8kou=0;
				var val7kou=0;
				var val6kou=0;
				var val5kou=0;
				var val4kou=0;
				
				// 扣的第二行数据
				var val8kouStand=0;
				var val7kouStand=0;
				var val6kouStand=0;
				var val5kouStand=0;
				var val4kouStand=0;
				
				// 表示扣第一行接放按钮状态 1-表示红接  0-表示蓝放
				var receive8=-1;
				var receive7=-1;
				var receive6=-1;
				var receive5=-1;
				var receive4=-1;
				
				receive8=parseInt(this.getPram(data_,'receiveba',-1));
				receive7=parseInt(this.getPram(data_,'receiveqi',-1));
				receive6=parseInt(this.getPram(data_,'receiveliu',-1));
				receive5=parseInt(this.getPram(data_,'receivewu',-1));
				receive4=parseInt(this.getPram(data_,'receivesi',-1));
				
				
				// 表示扣第二行接放按钮状态 1-表示红接  0-表示蓝放
				var receive8Stand=-1;
				var receive7Stand=-1;
				var receive6Stand=-1;
				var receive5Stand=-1;
				var receive4Stand=-1;
				
				receive8Stand=parseInt(this.getPram(data_,'receivebaStand',-1));
				receive7Stand=parseInt(this.getPram(data_,'receiveqiStand',-1));
				receive6Stand=parseInt(this.getPram(data_,'receiveliuStand',-1));
				receive5Stand=parseInt(this.getPram(data_,'receivewuStand',-1));
				receive4Stand=parseInt(this.getPram(data_,'receivesiStand',-1));
				
				
				// 确定指定扣中那个优先
				var show8First=-1;
				var show7First=-1;
				var show6First=-1;
				var show5First=-1;
				var show4First=-1;
				
				show8First=this.getPram(data_,'showbaFirst',0);
				show7First=this.getPram(data_,'showqiFirst',0);
				show6First=this.getPram(data_,'showliuFirst',0);
				show5First=this.getPram(data_,'showwuFirst',0);
				show4First=this.getPram(data_,'showsiFirst',0);
				
				// this.datalist[0][0].status[0].show=1;
				// this.datalist[0][1].status[0].show=1;
				
				if (show8First == 1) {
					this.datalist[1][0].first=1;
					this.datalist[1][1].first=1;
				} else if(show8First == 2) {
					this.datalist[1][0].first=2;
					this.datalist[1][1].first=2;
				} else {
					this.datalist[1][0].first=0;
					this.datalist[1][1].first=0;
				}
				
				if (show7First == 1) {
					this.datalist[2][0].first=1;
					this.datalist[2][1].first=1;
				} else if(show7First == 2) {
					this.datalist[2][0].first=2;
					this.datalist[2][1].first=2;
				} else {
					this.datalist[2][0].first=0;
					this.datalist[2][1].first=0;
				}
				
				if (show6First == 1) {
					this.datalist[3][0].first=1;
					this.datalist[3][1].first=1;
				} else if(show6First == 2) {
					this.datalist[3][0].first=2;
					this.datalist[3][1].first=2;
				} else {
					this.datalist[3][0].first=0;
					this.datalist[3][1].first=0;
				}
				
				if (show5First == 1) {
					this.datalist[4][0].first=1;
					this.datalist[4][1].first=1;
				} else if(show5First == 2) {
					this.datalist[4][0].first=2;
					this.datalist[4][1].first=2;
				} else {
					this.datalist[4][0].first=0;
					this.datalist[4][1].first=0;
				}
				
				if (show4First == 1) {
					this.datalist[5][0].first=1;
					this.datalist[5][1].first=1;
				} else if(show4First == 2) {
					this.datalist[5][0].first=2;
					this.datalist[5][1].first=2;
				} else {
					this.datalist[5][0].first=0;
					this.datalist[5][1].first=0;
				}
				
				
				// 确定指定扣中哪行高亮
				var show8Current=-1;
				var show7Current=-1;
				var show6Current=-1;
				var show5Current=-1;
				var show4Current=-1;
				
				show8Current=parseInt(this.getPram(data_,'showbaCurrent',0));
				show7Current=parseInt(this.getPram(data_,'showqiCurrent',0));
				show6Current=parseInt(this.getPram(data_,'showliuCurrent',0));
				show5Current=parseInt(this.getPram(data_,'showwuCurrent',0));
				show4Current=parseInt(this.getPram(data_,'showsiCurrent',0));
				
				this.datalist[0][0].status[0].show=1;
				this.datalist[0][1].status[0].show=1;
				if (show8Current == 1) {
					this.datalist[1][0].status[0].show=1;
					this.datalist[1][1].status[0].show=1;
					
					//红
					this.datalist[1][0].status[0].current=1;//红放
					this.datalist[1][0].status[1].current=0;//红接
					//蓝
					this.datalist[1][0].current=1;
					this.datalist[1][1].status[0].current=1;//蓝放
					this.datalist[1][1].status[1].current=0;//蓝接
					this.ctr_li_index_line=1;
				} else if(show8Current == 2) {
					this.datalist[1][0].status[0].show=1;
					this.datalist[1][1].status[0].show=1;
					this.datalist[1][0].status[1].show=1;
					this.datalist[1][1].status[1].show=1;
					
					//红
					this.datalist[1][0].status[0].current=0;//红放
					this.datalist[1][0].status[1].current=2;//红接
					//蓝
					this.datalist[1][1].status[0].current=0;//蓝放
					this.datalist[1][1].status[1].current=2;//蓝接
					this.ctr_li_index_line=2;
				} else {
					this.datalist[1][0].status[0].show=0;
					this.datalist[1][0].status[1].show=0;
					this.datalist[1][1].status[0].show=0;
					this.datalist[1][1].status[1].show=0;
					
					//红
					this.datalist[1][0].status[0].current=0;//红放
					this.datalist[1][0].status[1].current=0;//红接
					//蓝
					this.datalist[1][1].status[0].current=0;//蓝放
					this.datalist[1][1].status[1].current=0;//蓝接
				}
				this.datalist[1][0].current=show8Current;
				this.datalist[1][1].current=show8Current;
				
				
				if (show7Current == 1) {
					this.datalist[2][0].status[0].show=1;
					this.datalist[2][1].status[0].show=1;
					
					//红
					this.datalist[2][0].status[0].current=1;//红放
					this.datalist[2][0].status[1].current=0;//红接
					//蓝
					this.datalist[2][1].status[0].current=1;//蓝放
					this.datalist[2][1].status[1].current=0;//蓝接
					this.ctr_li_index_line=1;
				} else if(show7Current == 2) {
					this.datalist[2][0].status[0].show=1;
					this.datalist[2][1].status[0].show=1;
					this.datalist[2][0].status[1].show=1;
					this.datalist[2][1].status[1].show=1;
					
					//红
					this.datalist[2][0].status[0].current=0;//红放
					this.datalist[2][0].status[1].current=2;//红接
					//蓝
					this.datalist[2][1].status[0].current=0;//蓝放
					this.datalist[2][1].status[1].current=2;//蓝接
					this.ctr_li_index_line=2;
				} else {
					this.datalist[2][0].status[0].show=0;
					this.datalist[2][0].status[1].show=0;
					this.datalist[2][1].status[0].show=0;
					this.datalist[2][1].status[1].show=0;
					
					//红
					this.datalist[2][0].status[0].current=0;//红放
					this.datalist[2][0].status[1].current=0;//红接
					//蓝
					this.datalist[2][1].status[0].current=0;//蓝放
					this.datalist[2][1].status[1].current=0;//蓝接
				}
				this.datalist[2][0].current=show7Current;
				this.datalist[2][1].current=show7Current;
				
				if (show6Current == 1) {
					this.datalist[3][0].status[0].show=1;
					this.datalist[3][1].status[0].show=1;
					
					//红
					this.datalist[3][0].status[0].current=1;//红放
					this.datalist[3][0].status[1].current=0;//红接
					//蓝
					this.datalist[3][1].status[0].current=1;//蓝放
					this.datalist[3][1].status[1].current=0;//蓝接
					this.ctr_li_index_line=1;
				} else if(show6Current == 2) {
					this.datalist[3][0].status[0].show=1;
					this.datalist[3][1].status[0].show=1;
					this.datalist[3][0].status[1].show=1;
					this.datalist[3][1].status[1].show=1;
					
					//红
					this.datalist[3][0].status[0].current=0;//红放
					this.datalist[3][0].status[1].current=2;//红接
					//蓝
					this.datalist[3][1].status[0].current=0;//蓝放
					this.datalist[3][1].status[1].current=2;//蓝接
					this.ctr_li_index_line=2;
				} else {
					this.datalist[3][0].status[0].show=0;
					this.datalist[3][0].status[1].show=0;
					this.datalist[3][1].status[0].show=0;
					this.datalist[3][1].status[1].show=0;
					
					//红
					this.datalist[3][0].status[0].current=0;//红放
					this.datalist[3][0].status[1].current=0;//红接
					//蓝
					this.datalist[3][1].status[0].current=0;//蓝放
					this.datalist[3][1].status[1].current=0;//蓝接
				}
				this.datalist[3][0].current=show6Current;
				this.datalist[3][1].current=show6Current;
				
				if (show5Current == 1) {
					this.datalist[4][0].status[0].show=1;
					this.datalist[4][1].status[0].show=1;
					
					//红
					this.datalist[4][0].status[0].current=1;//红放
					this.datalist[4][0].status[1].current=0;//红接
					//蓝
					this.datalist[4][1].status[0].current=1;//蓝放
					this.datalist[4][1].status[1].current=0;//蓝接
					this.ctr_li_index_line=1;
				} else if(show5Current == 2) {
					this.datalist[4][0].status[0].show=1;
					this.datalist[4][1].status[0].show=1;
					this.datalist[4][0].status[1].show=1;
					this.datalist[4][1].status[1].show=1;
					
					//红
					this.datalist[4][0].status[0].current=0;//红放
					this.datalist[4][0].status[1].current=2;//红接
					//蓝
					this.datalist[4][1].status[0].current=0;//蓝放
					this.datalist[4][1].status[1].current=2;//蓝接
					this.ctr_li_index_line=2;
				} else {
					this.datalist[4][0].status[0].show=0;
					this.datalist[4][0].status[1].show=0;
					this.datalist[4][1].status[0].show=0;
					this.datalist[4][1].status[1].show=0;
					
					//红
					this.datalist[4][0].status[0].current=0;//红放
					this.datalist[4][0].status[1].current=0;//红接
					//蓝
					this.datalist[4][1].status[0].current=0;//蓝放
					this.datalist[4][1].status[1].current=0;//蓝接
				}
				this.datalist[4][0].current=show5Current;
				this.datalist[4][1].current=show5Current;
				
				if (show4Current == 1) {
					this.datalist[5][0].status[0].show=1;
					this.datalist[5][1].status[0].show=1;
					
					// //红
					// this.datalist[5][0].status[0].current=1;//红放
					// this.datalist[5][0].status[1].current=0;//红接
					// //蓝
					// this.datalist[5][1].status[0].current=1;//蓝放
					// this.datalist[5][1].status[1].current=0;//蓝接
					this.ctr_li_index_line=1;
				} else if(show4Current == 2) {
					this.datalist[5][0].status[0].show=1;
					this.datalist[5][1].status[0].show=1;
					this.datalist[5][0].status[1].show=1;
					this.datalist[5][1].status[1].show=1;
					
					// //红
					// this.datalist[5][0].status[0].current=0;//红放
					// this.datalist[5][0].status[1].current=2;//红接
					// //蓝
					// this.datalist[5][1].status[0].current=0;//蓝放
					// this.datalist[5][1].status[1].current=2;//蓝接
					this.ctr_li_index_line=2;
				} else {
					this.datalist[5][0].status[0].show=0;
					this.datalist[5][0].status[1].show=0;
					this.datalist[5][1].status[0].show=0;
					this.datalist[5][1].status[1].show=0;
					
					// //红
					// this.datalist[5][0].status[0].current=0;//红放
					// this.datalist[5][0].status[1].current=0;//红接
					// //蓝
					// this.datalist[5][1].status[0].current=0;//蓝放
					// this.datalist[5][1].status[1].current=0;//蓝接
				}
				this.datalist[5][0].current=show4Current;
				this.datalist[5][1].current=show4Current;
				
				
				if(type=='red')
				{
					valKaipen=this.getPram(data_,'hongKaipen',0);
					val8kou=this.getPram(data_,'hong8kou',0);	
					val7kou=this.getPram(data_,'hong7kou',0);
					val6kou=this.getPram(data_,'hong6kou',0);		
					val5kou=this.getPram(data_,'hong5kou',0);		
					val4kou=this.getPram(data_,'hong4kou',0);	
					
					// 开盆
					this.datalist[0][0].status[0].val=valKaipen;
					//8扣
					this.datalist[1][0].status[0].val=val8kou;
					//7扣
					this.datalist[2][0].status[0].val=val7kou;
					//6扣
					this.datalist[3][0].status[0].val=val6kou;
					//5扣
					this.datalist[4][0].status[0].val=val5kou;
					//4扣
					this.datalist[5][0].status[0].val=val4kou;
					
					// ----------------------------------------
					val8kouStand=this.getPram(data_,'hong8kouStand',0);	
					val7kouStand=this.getPram(data_,'hong7kouStand',0);
					val6kouStand=this.getPram(data_,'hong6kouStand',0);		
					val5kouStand=this.getPram(data_,'hong5kouStand',0);		
					val4kouStand=this.getPram(data_,'hong4kouStand',0);
					
					//8扣
					this.datalist[1][0].status[1].val=val8kouStand;
					//7扣
					this.datalist[2][0].status[1].val=val7kouStand;
					//6扣
					this.datalist[3][0].status[1].val=val6kouStand;
					//5扣
					this.datalist[4][0].status[1].val=val5kouStand;
					//4扣
					this.datalist[5][0].status[1].val=val4kouStand;
					
					//设置第一行接放状态
					//8扣
					this.datalist[1][0].status[0].type=parseInt(receive8);
					//7扣
					this.datalist[2][0].status[0].type=parseInt(receive7);
					//6扣
					this.datalist[3][0].status[0].type=parseInt(receive6);
					//5扣
					this.datalist[4][0].status[0].type=parseInt(receive5);
					//4扣
					this.datalist[5][0].status[0].type=parseInt(receive4);
					
					
					//设置第二行接放状态
					//8扣
					this.datalist[1][0].status[1].type=parseInt(receive8Stand);
					//7扣
					this.datalist[2][0].status[1].type=parseInt(receive7Stand);
					//6扣
					this.datalist[3][0].status[1].type=parseInt(receive6Stand);
					//5扣
					this.datalist[4][0].status[1].type=parseInt(receive5Stand);
					//4扣
					this.datalist[5][0].status[1].type=parseInt(receive4Stand);
					
					for (var i = 1; i < 6; i++) {
						if(this.datalist[i][0].status[0].type)
						{
							this.datalist[i][0].status[0].show=1;
						}
						if(this.datalist[i][0].status[1].type)
						{
							this.datalist[i][0].status[1].show=1;
						}
					}
					
				} if(type=='blue') 
				{
					valKaipen=this.getPram(data_,'lanKaipen',0);
					val8kou=this.getPram(data_,'lan8kou',0);	
					val7kou=this.getPram(data_,'lan7kou',0);
					val6kou=this.getPram(data_,'lan6kou',0);		
					val5kou=this.getPram(data_,'lan5kou',0);		
					val4kou=this.getPram(data_,'lan4kou',0);	
					
					// 开盆
					this.datalist[0][1].status[0].val=valKaipen;
					//8扣
					this.datalist[1][1].status[0].val=val8kou;
					//7扣
					this.datalist[2][1].status[0].val=val7kou;
					//6扣
					this.datalist[3][1].status[0].val=val6kou;
					//5扣
					this.datalist[4][1].status[0].val=val5kou;
					//4扣
					this.datalist[5][1].status[0].val=val4kou;
					
					// ----------------------------------------
					val8kouStand=this.getPram(data_,'lan8kouStand',0);	
					val7kouStand=this.getPram(data_,'lan7kouStand',0);
					val6kouStand=this.getPram(data_,'lan6kouStand',0);		
					val5kouStand=this.getPram(data_,'lan5kouStand',0);		
					val4kouStand=this.getPram(data_,'lan4kouStand',0);
					
					//8扣
					this.datalist[1][1].status[1].val=val8kouStand;
					//7扣
					this.datalist[2][1].status[1].val=val7kouStand;
					//6扣
					this.datalist[3][1].status[1].val=val6kouStand;
					//5扣
					this.datalist[4][1].status[1].val=val5kouStand;
					//4扣
					this.datalist[5][1].status[1].val=val4kouStand;
					
					//设置第一行接放状态
					//8扣
					this.datalist[1][1].status[0].type=parseInt(receive8);
					//7扣
					this.datalist[2][1].status[0].type=parseInt(receive7);
					//6扣
					this.datalist[3][1].status[0].type=parseInt(receive6);
					//5扣
					this.datalist[4][1].status[0].type=parseInt(receive5);
					//4扣
					this.datalist[5][1].status[0].type=parseInt(receive4);
					
					//设置第二行接放状态
					//8扣
					this.datalist[1][1].status[1].type=parseInt(receive8Stand);
					//7扣
					this.datalist[2][1].status[1].type=parseInt(receive7Stand);
					//6扣
					this.datalist[3][1].status[1].type=parseInt(receive6Stand);
					//5扣
					this.datalist[4][1].status[1].type=parseInt(receive5Stand);
					//4扣
					this.datalist[5][1].status[1].type=parseInt(receive4Stand);
					
					for (var i = 1; i < 6; i++) {
						if(this.datalist[i][1].status[0].type)
						{
							this.datalist[i][1].status[0].show=1;
						}
						if(this.datalist[i][1].status[1].type)
						{
							this.datalist[i][1].status[1].show=1;
						}
					}
				}
				
				// // 设置接放1
				// receive8=this.getPram(data_,'receiveba',-1);
				// receive7=this.getPram(data_,'receiveqi',-1);
				// receive6=this.getPram(data_,'receiveliu',-1);
				// receive5=this.getPram(data_,'receivewu',-1);
				// receive4=this.getPram(data_,'receivesi',-1);
				// 
				// if(receive8=='1')
				// {
				// 	// 红接
				// 	this.datalist[1][0].status[0].jie=1;
				// 	this.datalist[1][0].status[0].fang=0;
				// 	
				// 	//蓝放
				// 	this.datalist[1][1].status[0].jie=0;
				// 	this.datalist[1][1].status[0].fang=1;
				// 	
				// } else if(receive8=='0'){
				// 	//红放
				// 	this.datalist[1][0].status[0].jie=0;
				// 	this.datalist[1][0].status[0].fang=1;
				// 	
				// 	// 蓝接
				// 	this.datalist[1][1].status[0].jie=1;
				// 	this.datalist[1][1].status[0].fang=0;
				// } else {
				// 	//红 初始化
				// 	this.datalist[1][0].status[0].jie=0;
				// 	this.datalist[1][0].status[0].fang=0;
				// 	
				// 	//蓝 初始化
				// 	this.datalist[1][1].status[0].jie=0;
				// 	this.datalist[1][1].status[0].fang=0;
				// }
				// 
				// if(receive7=='1')
				// {
				// 	// 红接
				// 	this.datalist[2][0].status[0].jie=1;
				// 	this.datalist[2][0].status[0].fang=0;
				// 	
				// 	//蓝放
				// 	this.datalist[2][1].status[0].jie=0;
				// 	this.datalist[2][1].status[0].fang=1;
				// 	
				// } else if(receive7=='0'){
				// 	//红放
				// 	this.datalist[2][0].status[0].jie=0;
				// 	this.datalist[2][0].status[0].fang=1;
				// 	
				// 	// 蓝接
				// 	this.datalist[2][1].status[0].jie=1;
				// 	this.datalist[2][1].status[0].fang=0;
				// } else {
				// 	//红 初始化
				// 	this.datalist[2][0].status[0].jie=0;
				// 	this.datalist[2][0].status[0].fang=0;
				// 	
				// 	//蓝 初始化
				// 	this.datalist[2][1].status[0].jie=0;
				// 	this.datalist[2][1].status[0].fang=0;
				// }
				// 
				// if(receive6=='1')
				// {
				// 	// 红接
				// 	this.datalist[3][0].status[0].jie=1;
				// 	this.datalist[3][0].status[0].fang=0;
				// 	
				// 	//蓝放
				// 	this.datalist[3][1].status[0].jie=0;
				// 	this.datalist[3][1].status[0].fang=1;
				// 	
				// } else if(receive6=='0'){
				// 	//红放
				// 	this.datalist[3][0].status[0].jie=0;
				// 	this.datalist[3][0].status[0].fang=1;
				// 	
				// 	// 蓝接
				// 	this.datalist[3][1].status[0].jie=1;
				// 	this.datalist[3][1].status[0].fang=0;
				// } else {
				// 	//红 初始化
				// 	this.datalist[3][0].status[0].jie=0;
				// 	this.datalist[3][0].status[0].fang=0;
				// 	
				// 	//蓝 初始化
				// 	this.datalist[3][1].status[0].jie=0;
				// 	this.datalist[3][1].status[0].fang=0;
				// }
				// 
				// if(receive5=='1')
				// {
				// 	// 红接
				// 	this.datalist[4][0].status[0].jie=1;
				// 	this.datalist[4][0].status[0].fang=0;
				// 	
				// 	//蓝放
				// 	this.datalist[4][1].status[0].jie=0;
				// 	this.datalist[4][1].status[0].fang=1;
				// 	
				// } else if(receive5=='0'){
				// 	//红放
				// 	this.datalist[4][0].status[0].jie=0;
				// 	this.datalist[4][0].status[0].fang=1;
				// 	
				// 	// 蓝接
				// 	this.datalist[4][1].status[0].jie=1;
				// 	this.datalist[4][1].status[0].fang=0;
				// } else {
				// 	//红 初始化
				// 	this.datalist[4][0].status[0].jie=0;
				// 	this.datalist[4][0].status[0].fang=0;
				// 	
				// 	//蓝 初始化
				// 	this.datalist[4][1].status[0].jie=0;
				// 	this.datalist[4][1].status[0].fang=0;
				// }
				// 
				// if(receive4=='1')
				// {
				// 	// 红接
				// 	this.datalist[5][0].status[0].jie=1;
				// 	this.datalist[5][0].status[0].fang=0;
				// 	
				// 	//蓝放
				// 	this.datalist[5][1].status[0].jie=0;
				// 	this.datalist[5][1].status[0].fang=1;
				// 	
				// } else if(receive4=='0'){
				// 	//红放
				// 	this.datalist[5][0].status[0].jie=0;
				// 	this.datalist[5][0].status[0].fang=1;
				// 	
				// 	// 蓝接
				// 	this.datalist[5][1].status[0].jie=1;
				// 	this.datalist[5][1].status[0].fang=0;
				// } else {
				// 	//红 初始化
				// 	this.datalist[5][0].status[0].jie=0;
				// 	this.datalist[5][0].status[0].fang=0;
				// 	
				// 	//蓝 初始化
				// 	this.datalist[5][1].status[0].jie=0;
				// 	this.datalist[5][1].status[0].fang=0;
				// }
				
				
				// // 设置接放2
				// receive8Stand=this.getPram(data_,'receivebaStand',-1);
				// receive7Stand=this.getPram(data_,'receiveqiStand',-1);
				// receive6Stand=this.getPram(data_,'receiveliuStand',-1);
				// receive5Stand=this.getPram(data_,'receivewuStand',-1);
				// receive4Stand=this.getPram(data_,'receivesiStand',-1);
			},
			receiveCmd(cmd){
				// 命令解析>>>>
				// 压盘操作-可操作
				// 压盘成功操作
				// 积分操作
				// 比赛结果操作
				// 开局初始化数据
			},
			// 押分
			sendMsg(side,kou,point) {
				
				if(parseInt(this.user_score)<point)
				{
					uni.showToast({
						title: '对不起,您的积分不足!!',
						duration: 2000,
						icon:'none'
					});
					return;
				}
				// 0开盆 1红方蓝接  2红接蓝放
				let betReceive=-1;
				if(kou==10 || kou=='10')
				{
					betReceive = 0;
					this.ctr_li_index_line = 1;
				} else{
					betReceive=this.datalist[this.ctr_li_index][0].current;
				}
				
				
				
				//console.log(betReceive+'------AAAA------'+this.datalist[this.ctr_li_index][0].current)
				
				
				
				this.bus.request({
					url: this.bus.url+'/bet/touZhu',
					method: 'GET',
					data: {
						// 用户id
						userId:	JSON.parse(sessionStorage.getItem('userInfo')).userId,
						// 场次id
						raceId:this.raceId,
						// 场次对数id
						raceNumId:this.raceNumId	,
						//  1红方 2蓝方
						side:side,
						// 10开盆8八扣7七扣6六扣5五扣4四扣
						discount:kou,
						//0开盆 1红方蓝接  2红接蓝放
						betReceive:betReceive,
						// 分数
						point:	point,
						which:this.ctr_li_index_line,
						userFlag:JSON.parse(sessionStorage.getItem('userInfo')).userFlag
						},
					success: res => {
						if(res.data.status=='1')
						{
							// this.datalist[this.ctr_li_index][2].isCtr = 1;
						} else {
							uni.showToast({
								title: res.data.errMsg,
								duration: 2000,
								icon:'none'
							});
						}
					},
					fail: () => {
						
					},
					complete: () => {
					}
				});
			},
			
			dashangOpen(){
				this.$refs.popup2.open()
			},
			dashangClose(){
				this.$refs.popup2.close();
			},
			dashang() {
				if((!this.raceId)||(!this.raceNumId))
				{
					uni.showToast({
						title: '游戏还没开始!',
						duration: 3000,
						icon:'none'
					});
					return;
				}
				
				if(parseInt(this.user_score)<this.dashang_val)
				{
					uni.showToast({
						title: '对不起,您的积分不足!!',
						duration: 2000,
						icon:'none'
					});
					return;
				}
				this.bus.request({
					url: this.bus.url+'/point/reward',
					method: 'GET',
					data: {
							// 用户id
							userId:	JSON.parse(sessionStorage.getItem('userInfo')).userId,
							// 监板 MT,红方草师RT,蓝方草师BT
							teacher:this.dashang_type,
							// 分数
							point:	this.dashang_val,
							raceId: this.raceId,
							raceNumId: this.raceNumId,
							userFlag:JSON.parse(sessionStorage.getItem('userInfo')).userFlag
						},
					success: res => {
						
						if(res.data.status=='1')
						{
							uni.showToast({
								title: '打赏成功!',
								duration: 3000,
								icon:'none'
							});
						} else {
							uni.showToast({
								title: res.data.errMsg,
								duration: 3000,
								icon:'none'
							});
						}
					},
					fail: () => {
						
					},
					complete: () => {
						// this.popType_dashang=false;
						this.$refs.popup2.close();
					}
				});
			},
			getPram(data,key,val)
			{
				var ret = '';
				if(val)
				{
					ret = val;
				}
				if(data[key])
				{
					ret = data[key];
				}
				return ret;
			}
		},
		onShow:function () {
			if(video[this.video_index])
			{
				video[this.video_index].play();
			}
		},
		onHide:function () {
			if(video[0])
			{
				video[0].pause();
			}
			if(video[1])
			{
				video[1].pause();
			}
		},onUnload:function(){
			if(video[0])
			{
				video[0].close();
			}
			if(video[1])
			{
				video[1].close();
			}
		},components: {
			myMarquee,
			uniPopup
		}
	}
</script>

<style>
	/* @import url("index.css"); */
	.popLayout{
		margin-bottom: 20px;
		background-color: rgba(0,0,0,0);
		/* width: 100%;
		height: 100%;
		position: absolute;
		z-index: 9999; */
		
		display: flex;
		flex-direction: row;
		justify-content: center;
	}
	.popLayout11{
		position: fixed;
		width: 100%;
		height: 100%;
		bottom: 50px;
		left: 0;
	}
	#content{
		margin-top: 300px;
	}
	#content .uni-popup__wrapper-box{
		background: none!important;
	}
	.popLayout2{
		margin-bottom: 100px;
		background-color: rgba(0,0,0,0);
		/* width: 100%; */
		/* height: 100%;
		position: absolute;*/
		/* z-index: 999999999; */
		display: flex;
		flex-direction: row;
		justify-content: center;
	}
	
	.popContent{
		display: flex;
		flex-direction: column;
		justify-content: center;
		height: 100%;
	}
	
	.popContent2{
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	
	
	
	.statusbar { /* // 状态栏高度 */
	  width: 100%;
	  background-color: rgba(0,0,0,0.5);
	  height: var(--status-bar-height);
	}
	
	.JifenImgBut{
		width: 140upx;
		height: 140upx;
		align-self: center;
	}
	.jifenItemTextStr{
		color: #FF0000;align-self: center;
	}
	.jifenItemText{
		height: 100%;
		width: 100%;
		position: absolute;
		top: 0px;
		display: flex;
		justify-content: center;
	}
	.jifenItem{
		width: 182upx;
		position: relative;
		justify-content:pace-around;
		margin-top: 10upx;
		margin-bottom: 10upx;
	}
	
	.jifenItemImg{
		width: 182upx;display: flex;justify-content: center;
	}
	
	.jifenItemLayout{
		flex-wrap: wrap !important;
	}
	
	.titlelayout{
		margin-top: 22px;
		background-color: #8F8F94;
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap; 
		height: 82upx;
	}
	
	.titleL{
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap; 
		align-self: center;
		width: 100%;
		margin-left: 14upx;
	}
	.left1{
		font-size: 28upx;
		color: #d5d5d5;
	}
	.titleR{
		display: flex;
		flex-direction: row;
		width: 170upx;
		margin-right: 14upx;
	}
	.titleRBut{
		background-color: transparent;
		border: 2px solid #FFFFFF;
		font-size: 28upx;
		color: #FFFFFF;
		line-height: 22px;
		padding: 0px 6px;
		border-radius: 8px;
		align-self: center;
	}
	
	/* 跑马灯字符串-S */
	.marquee{
		position: absolute;
		width: 750upx;
		overflow: hidden;
		color: #b0b0b0;
		font-size: 18px;
	}
	.kaipen{
		margin: 4upx 10upx 4upx 10upx;
	}
	.videoLayout{
		height: 250upx;
	}
	
	.changeVideo{
		width: 60px;
		font-size: 28upx;
		color: #ffff66;
		line-height: 22px;
		text-align: center;
		align-self: center;
		justify-content: center;
		margin-left: 10upx;
		margin-right: 10px;
		/* 
		padding: 0px 8px 0px 8px; */
	}
	
	/*  */
	
	
	.myli_item_l{
		margin: 15upx 25upx 8upx 15upx;
	}
	
	.myli_item_title
	{
		padding-left: 30upx;
	}
	
	.myLi{
		display: flex;
		flex-wrap: nowrap;
	}
	
	.myli_item_r{
		flex: 1;
		margin: 10upx 0upx;
		padding-right: 12px;
	}
	
	.myli_item_r_content{
		display: flex;
		flex-wrap: nowrap;
		width: 100%;
		/* margin: 8upx 3upx; */
		padding: 8upx 0upx 8upx 0upx;
		margin-right: 3upx;
	}
	.myli_item_r_flex{
		flex: 1;
	}
	.myli_item_but{
		width: 120upx;
	}
	
	.mybut_fang,.mybut_jie
	{
		border: 1px solid #FFFFFF;
		border-radius: 20px;
		width: 60upx;
		padding-left: 14px;
		display: inline-block;
		
	}
	
	.mybut_fang
	{
		background-color: red;
	}
	
	.mybut_jie{
		background-color: #DEB887;
	}
	
	.myLiR,.myLiL {
		margin-right: 1px;
		width: 100%;
		display: flex;
		flex-wrap: nowrap; 
		border-bottom: 1px solid #D5D5D5;
	}
	
	.myLiR {
		border-left: 2px solid #D5D5D5;
	}
	
	.myUl{
		color: #FFFFFF;
		font-size: 18px;
	}
	
		
	.mainL{
		width: 100%;
	}
	.redBg{
		background-color: red ;
	}
	.blueBg{
		background-color: blue;
	}
	
	.redBgSelect{
		border-left: 1px solid yellow;
		border-top: 1px solid yellow;
		border-bottom: 1px solid yellow;
		margin-bottom: 1px;
	}
	
	.blueBgSelect{
		border-right: 1px solid yellow;
		border-top: 1px solid yellow;
		border-bottom: 1px solid yellow;
		margin-bottom: 1px;
	}
	
	.mainLayout {
		font-size: 15px;
	}
	.batpop{
		font-size: 16px;
	}
	.popLayout_main{
		margin-bottom: 30px;
	}
	
	.popLayout2_main{
		display: flex;
		flex-direction: column;
	}
		
	.dashang_view{
		background-color: #EFEFEF;
		padding: 20px;
		border-radius: 10px;
		width: 600upx;
		border: 1px solid #D8D8D8;
		box-shadow: 2px 2px 8px #666666;
	}
	.dashang_type{
		display: flex;
		justify-content: space-between;
		/* align-items: center; */
		margin-bottom: 20px;
		margin-top: 20px;
	}
	.dashang_type>label
	{
		/* flex: 1; */
		/* align-self: center; */
		font-size: 16px;
		color: #007AFF;
		font-weight: bold;
	}
	
	.dashang_val{
		display: flex;
		width: 550upx;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 20px;
	}
	.dashang_val>label
	{
		border: 1px solid red;
		flex: 1;
		display: flex;
		flex-direction: row;
		align-self: center;
		font-size: 16px;
		color: red;
		font-weight: bold;
	}
	
	
	
	
	.dashang_but{
		display: flex;
	}
	
	.cancel{
		background-color: #FFFFFF;
		color: #727272;
		border-color: #727272;
	}
	
	.dashang_but button{
		width: 100px;
		height: 40px;
		line-height: 40px;
	}
	
	.myLi.active{
		border: 10px solid yellow;
		color: red;
		margin-top: 2px;
		margin-bottom: 2px;
	}
	.hidden{
		display: none;
	}
	.selectLine-l{
		border: 1px solid yellow;
		border-color: #FFFF00 !important;
		border-bottom-left-radius: 40upx;
		border-top-left-radius: 40upx;
		
		border-bottom-right-radius: 40upx;
		border-top-right-radius: 40upx;
	}
	
	.selectLine-r{
		border: 1px solid yellow;
		border-color: #FFFF00 !important;
		border-bottom-left-radius: 40upx;
		border-top-left-radius: 40upx;
		
		border-bottom-right-radius: 40upx;
		border-top-right-radius: 40upx;
	}
	.webview{
		width: 100%;
		height: 300px;
	}
</style>
