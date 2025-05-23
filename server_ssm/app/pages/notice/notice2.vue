<template>
	<view>
		<u-navbar title="培训资料" :border="true" :placeholder="true" @leftClick="goBack()"  :autoBack="false"></u-navbar>
		<scroll-view :enable-flex="true" class="svcontainer">
			<!-- <ideaList thumbSize="lg" thumb='img' @clickItem="toNoticeDetail" :dataList="fobjlist" noteName="ndate" ></ideaList> -->
			<imglist imgName="img" :sType="2" :imgSize="2"  :fx="false" titleName="title" sName="ndate" @clickItem="toNoticeDetail" :dataList="fobjlist"></imglist>
			
		</scroll-view>
	</view>
</template>

<script>
	import {
		listj,
		findj,
		savej,
		deletej,
		fileUrl
	} from '@/common/config/api.js';
	import {
		mapState,
		mapActions
	} from 'vuex';


	export default {
		components:{ },
		data() {
			return {
				fileUrl: fileUrl,
				fobjlist: []
			};
		},
		onLoad(params) {
			listj({
				params: {
					table: 'notice',
          type:2
				}
			}).then(res => {
				this.fobjlist = res
			}).catch(err => {

			})
		},
		methods: {
			toNoticeDetail(tid) {
				uni.itool.nto({
					url: '/pages/notice/noticedetail?tid=' + tid
				})
			},
			goBack() {
				uni.itool.nto({
					url:'/pages/index/index'
				})
			}
		},
		computed: {

		}
	}
</script>

<style lang="scss">
	
</style>
