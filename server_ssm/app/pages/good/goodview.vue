<template>
	<view>
		<u-navbar :title="title" :border="true" :placeholder="true"   :autoBack="true"></u-navbar>
		<scroll-view :enable-flex="true" class="svcontainer">
			<imglist :imgSize="10" imgName="img" titleName="gname" @clickItem='toGoodDetail' :dataList='fobjList' sName='shop' tName="price"></imglist>
		</scroll-view>
	</view>
</template>

<script>
	import { listj, findj, savej, deletej, fileUrl } from '@/common/config/api.js';
	import {mapState, mapActions} from 'vuex';
	import { ideautil, yewuutil } from '@/common/commontools.js';
	export default {
		data() {
			return {
				fobjList:[],
				title:"服务列表"
			};
		},
		onLoad(params) {
			let sid = params.sid || null
			let stype = params.stype || null
			let ppid = params.ppid || null
			if (stype) {
				this.title = stype+this.title
			}
			listj({params: {table: 'good', sid: sid, stype: stype, ppid: ppid , statecn:'上架中'}}).then(res => {
				this.fobjList = res
			}).catch(err => {
			 
			})
		},
		methods: {
			toGoodDetail:yewuutil.toGoodDetail,
			goBack(){
				uni.navigateBack({
					delta:1
				})
			}
		},
		computed: {
			...mapState(['userInfo'])
		}
	}
</script>

<style lang="scss">

</style>
