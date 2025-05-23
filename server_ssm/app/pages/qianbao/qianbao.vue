<template>
	<view>
		<u-navbar title="我的钱包" :border="true" :placeholder="true"   :autoBack="true"></u-navbar>
		<scroll-view :enable-flex="true" class="svcontainer">
			<view class="toplogo">
				<image src="http://ideapic-1255600738.cos.ap-guangzhou.myqcloud.com/images/qianbao.png" mode="widthFix"></image>
			</view>
			<view>
				<view class="yetitle">我的余额</view>
				<view class="yecontent">¥{{userInfo.money||0}}</view>
			</view>
			<view class="hpaddingctn">
				<u-button type="primary" text="充值" @click="toCharge" />
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import { listj, findj, savej, fileUrl, saveWxUser, uploadUrl } from '@/common/config/api.js'
	import {mapState, mapActions} from 'vuex'
	import ideaUpload from '@/components/idea-upload/idea-upload.vue'
	import { serverUrl } from '@/common/config/api.js'
	export default {
		components: {ideaUpload},
		data() {
			return {

			}
		},
		onLoad() {
			
		},
		methods: {
			...mapActions(['updateUserInfo']),
			toCharge(){
				uni.itool.nto({
					url:'/pages/qianbao/charge'
				})
			}
		},
		computed: {
			...mapState(['userInfo'])
		}
	}
</script>

<style lang="scss">
	.toplogo{
		text-align: center;
	}
	.toplogo image{
		width: 20%;
		margin-top: 100rpx;
	}
	.yetitle{
		text-align: center;
		font-size: 30rpx;
		padding: 20rpx;
	}
	.yecontent{
		text-align: center;
		font-size: 80rpx;
		padding: 40rpx;
	}
</style>
