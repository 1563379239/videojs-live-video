<template>
	<view class="wrap">
		<view class="box">
			<view class="inner">
				严正声明:斗蛐蛐作为娱乐项目,严禁参与一切赌博相关行为,如有发现作封号处理,望大家共创和谐平台
			</view>
			<!-- <div class="inner">
				<span>严正声明:斗蛐蛐作为娱乐项目,严禁参与一切赌博相关行为,如有发现作封号处理,望大家共创和谐平台</span>
			</div> -->
		</view>
	</view>
</template>
<script>
export default {
	name: 'Marquee',
	props: ['lists'], // 父组件传入数据， 数组形式 [ "连雨不知春去"，"一晴方觉夏深"]
	data() {
		return {
			text: '' ,// 数组文字转化后的字符串,
		};
	},
	methods: {
	}
};
</script>
<style>
.box {
		display: flex;
		white-space: nowrap;
		overflow: hidden;
		position: relative;
		width: 750upx;
		height: 24px;
		/* background: red; */
	}

	.box .inner {
		/* width: 750upx;
		height: 24px; */
		line-height: 24px;
		font-family: sans-serif;
		/* font-weight: bold; */
		white-space: nowrap;
		overflow: hidden;
		position: absolute;
		transform:translateX(63%);
		/* color: white; */
		animation: marquees 30s linear infinite;
	}
	@keyframes marquees {
		from {
			transform:translateX(63%);
		}
		to {
			transform:translateX(-105%);
		}
	}
	/* .box .inner:first-child {

		transform-origin: left;
	}

	.box .inner:last-child {

		transform-origin: right;
	}

	.box .inner span {
		position: absolute;
		animation: marquee 30s linear infinite;
	}
	.box .inner:first-child span {
		animation-delay: 5s;
		left: -150%;
	} */

	
</style>
