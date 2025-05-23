<template>
	<view>
		<u-navbar title="服务人员" :border="true" :placeholder="true" @leftClick="goBack"  :autoBack="false"></u-navbar>
		<scroll-view :enable-flex="true" class="svcontainer">
			<imgList :imgSize="2" imgName="img" titleName="fname" @clickItem='user3Detail' :dataList='fobjList' sName='note' ></imgList>
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
			listj({params: {table: 'user',roletype:3}}).then(res => {
				this.fobjList = res
			}).catch(err => {
			 
			})
		},
		methods: {
			
			user3Goods(sid){
				uni.itool.nto({
					url: '/pages/good/goodview?sid='+sid
				})
			},
			user3Detail(id){
				uni.itool.nto({
					url: '/pages/user3/user3detail?id='+id
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
