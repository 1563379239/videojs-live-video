<template>
	<view>
		<div class="box">
			<div class="inner">
				<span>严正声明:斗蛐蛐作为娱乐项目,严禁参与一切赌博相关行为,如有发现作封号处理,望大家共创和谐平台</span>
			</div>
			<div class="inner">
				<span>严正声明:斗蛐蛐作为娱乐项目,严禁参与一切赌博相关行为,如有发现作封号处理,望大家共创和谐平台</span>
			</div>
		</div>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style>
	.box {
		display: flex;
	}

	.box .inner {
		width: 100%;
		height: 100px;
		line-height: 100px;
		font-size: 2em;
		font-family: sans-serif;
		font-weight: bold;
		white-space: nowrap;
		overflow: hidden;
	}

	.box .inner:first-child {
		color: #681A1E;
		transform-origin: left;
	}

	.box .inner:last-child {
		color: #FBF2D5;
		transform-origin: right;
	}

	.box .inner span {
		position: absolute;
		animation: marquee 13s linear infinite;
	}

	.box .inner:first-child span {
		animation-delay: 7s;
		left: -370%;
	}

	@keyframes marquee {
		from {
			left: 370%;
		}

		to {
			left: -370%;
		}
	}
</style>
