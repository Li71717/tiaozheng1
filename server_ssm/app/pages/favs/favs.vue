<template>
	<view>
		
		<u-navbar title="收藏" :border="true" :placeholder="true"   :autoBack="true"></u-navbar>
		<scroll-view :enable-flex="true" class="svcontainer">
			<!-- <u-list @scrolltolower="scrolltolower" >
				<u-list-item v-for="(item,index) in fobjList" :key="item.id">
					<u-cell @click="goodMg(item.id)" :title="item.gname" isLink />
				</u-list-item>
			</u-list> -->
			<imgList :imgSize="1" imgName="img" titleName="gname" @clickItem='goodDetail' :dataList='fobjList' tName='shop' ></imgList>
		</scroll-view>
	</view>
</template>

<script>
	import { listSqlj, listj, findj, savej, fileUrl } from '@/common/config/api.js';
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
			
		},
		onShow() {
			let favs = this.userInfo.favs;
			let sql = `select * from wct_good where id in ( ${favs} )`
			listSqlj({params: { sql: sql }}).then(res => {
				this.fobjList = res
			}).catch(err => {
			 
			})
		},
		methods: {
			...mapActions(['updateUserInfo']),
			goodDetail: yewuutil.toGoodDetail,
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