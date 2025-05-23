<template>
	<view>
		<u-navbar title="联系人" :border="true" :placeholder="true" rightText="新增" @rightClick="fobjMg" @leftClick="goBack"></u-navbar>
		
		<scroll-view :enable-flex="true" class="svcontainer">
			<imglist @clickItem="fobjMg" :dataList="fobjList" :imgSize="20"></imglist>
		</scroll-view>
	</view>
</template>

<script>
	import { listj, findj, savej, fileUrl } from '@/common/config/api.js';
	import {mapState, mapActions} from 'vuex'
	import { ideautil, yewuutil } from '@/common/commontools.js';
	export default {
		components:{},
		data() {
			return {
				fobjList: []
			};
		},
		onLoad(params) {
			let uid = this.userInfo.id;
			listj({params: {table: 'address', uid: this.userInfo.id}}).then(res => {
				this.fobjList = res
			}).catch(err => {
			 
			})
		},
		onShow() {
			
		},
		methods: {
			...mapActions(['updateUserInfo']),
			fobjMg(id){
				console.log("------------------>:aid:"+id)
				uni.itool.nto({
					url:'./addressmg?tid='+id
				})
			},
			goBack(){
				uni.itool.nto({
					url:'/pages/me/me'
				})
			},
			toMore:yewuutil.toMore
		},
		computed: {
			...mapState(['userInfo'])
		}
	}
</script>

<style lang="scss">

</style>