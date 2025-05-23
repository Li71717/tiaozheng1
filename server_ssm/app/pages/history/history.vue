<template>
	<view>
		<u-navbar title="浏览历史" :border="true" :placeholder="true"   :autoBack="true"></u-navbar>
		<scroll-view :enable-flex="true" class="svcontainer">
			<!-- <u-list @scrolltolower="scrolltolower" >
				<u-list-item v-for="(item,index) in fobjList" :key="item.id">
					<u-cell @click="goodMg(item.id)" :title="item.gname" isLink />
				</u-list-item>
			</u-list> -->
			<imgList imgName="img" :imgSize="2" titleName="gname" @clickItem='toGoodDetail' :dataList='fobjList' sName='shop' ></imgList>
		</scroll-view>
	</view>
</template>

<script>
	import { listj, findj, savej, fileUrl, listSqlj } from '@/common/config/api.js';
	import {mapState, mapActions} from 'vuex';
	import imgList from '@/components/img-list.vue';
	import { ideautil, yewuutil } from '@/common/commontools.js';
	export default {
		data() {
			return {
				fobjList: []
			};
		},
		components:{imgList},
		onLoad(params) {
			let sid = this.userInfo.sid;
			let ids = uni.getStorageSync("his_ids");
			if (ids) {
				let sql = `select * from wct_good where id in (${ids})`
				listSqlj({params: {sql: sql}}).then(res => {
					this.fobjList = res
				}).catch(err => {
				 
				})
			}else{
				
			}
			
		},
		onShow() {
			
		},
		methods: {
			...mapActions(['updateUserInfo']),
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