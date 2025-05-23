<template>
	<view>
		<u-navbar title="商家管理" :border="true" :placeholder="true" @leftClick="goBack"  :autoBack="false"></u-navbar>
		<scroll-view :enable-flex="true" class="svcontainer">
			<imgList :imgSize="2" imgName="img" titleName="sname" @clickItem='shopDetail' :dataList='fobjList' sName='address' ></imgList>
		</scroll-view>
	</view>
</template>

<script>
	import { listj, findj, savej, deletej, fileUrl } from '@/common/config/api.js';
	import {mapState, mapActions} from 'vuex';
	import imgList from '@/components/img-list.vue';
	
	export default {
		components:{imgList},
		data() {
			return {
				fobjList:[]
			};
		},
		onLoad(params) {
			listj({params: {table: 'shop'}}).then(res => {
				this.fobjList = res
			}).catch(err => {
			 
			})
		},
		methods: {
			
			shopGoods(sid){
				uni.itool.nto({
					url: '/pages/good/goodview?sid='+sid
				})
			},
			shopDetail(pid){
				uni.itool.nto({
					url: '/pages/shops/shopdetail?pid='+pid
				})
			},
			goBack(){
				uni.itool.nto({
					url:'/pages/index/index'
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
