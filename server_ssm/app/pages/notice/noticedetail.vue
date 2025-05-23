<template>
	<view>
		<u-navbar title="详情" :border="true" :placeholder="true" @leftClick="goBack"></u-navbar>
		<scroll-view :enable-flex="true" class="svcontainer">
			<view class="formitem">
				<view class="formlabel">{{fobj.title}}</view>
			</view>
			<view class="formitem">
				<image class="blockimg" :src="fileUrl+fobj.img" mode="widthFix"></image>
			</view>
			<view class="formitem">
				<view class="formlabel">{{fobj.ndate}}</view>
			</view>
			<view class="formitem">
				<u-parse :content="fobj.note" />
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import { listj, findj, fileUrl } from '@/common/config/api.js';
	import { ideautil } from '@/common/commontools.js';
	import {mapState, mapActions} from 'vuex'
	export default {
		data() {
			return {
				tid: null,
				fileUrl: fileUrl,
				fobj: {}
			};
		},
		onLoad(params) {
			this.tid = params.tid
			this.fobjDetail()
		},
		methods: {
			fobjDetail() {
				findj({params: {table: 'notice', id: this.tid}}).then(res => {
					let note = ideautil.getHtmlNote(res.note)
					res.note = note
					this.fobj = res
				}).catch(err => {
					
				})
			},
			goBack(){
				uni.navigateBack()
			}
		},
		computed: {
		
		}
	}
</script>

<style lang="scss">
	
</style>
