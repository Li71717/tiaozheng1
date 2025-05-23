<template>
	<view>
		<u-navbar title="管理订单" :border="true" @leftClick="goBack" :placeholder="true"></u-navbar>
		
		<scroll-view :enable-flex="true" class="svcontainer">
			<u-tabs :list="typelist" keyName="title" @change="onTabChange"></u-tabs>
			<imgList @clickItem="fobjDetail" :dataList="fobjlist" :imgSize="20" titleName="ndate" sName="gnames" tName="statecn" ></imgList>
			<!-- <u-list>
				<u-list-item v-for="(item,index) in fobjlist">
					<u-cell :name="item.id" @click="fobjDetail" :value="item.statecn" :title="item.ndate" :label="item.gnames" isLink />
				</u-list-item>
			</u-list> -->
		</scroll-view>
	</view>
</template>

<script>
	import { listj, findj, savej, deletej, fileUrl } from '@/common/config/api.js'
	import {mapState, mapActions} from 'vuex'
	import imgList from '@/components/img-list.vue'
	
	
	export default {
		components:{ imgList },
		data() {
			return {
				fobjlist:[],
				tabtitle: null,
				typelist: [{title: '全部'}, 
				{title: '待付款'}, 
				{title: '已付款'}, 
				{title: '已接单'},

				{title: '已完成'},
          {title: '已验收'},
				{title: '已取消'}]
			};
		},
		onLoad(params) {
      this.refreshBill()
		},
		onShow() {
			this.refreshBill()
		},
		methods: {
			...mapActions(['updateUserInfo']),
			onTabChange (item){
				this.tabtitle = null
				if(item.title != '全部'){
					this.tabtitle = item.title
				}
				this.refreshBill()
			},
			refreshBill (){
				listj({params: {table: 'bill', statecn: this.tabtitle,sid:(this.userInfo.id || 0)}}).then(res => {
					this.fobjlist = res
				}).catch(err => {
				 
				})
			},
			fobjDetail (bid){
				uni.itool.nto({
					url: '/pages/bill/billdetailshop?bid='+bid
				})
			},
			goBack() {
				uni.itool.nto({
					url:'/pages/index/index'
				})
			},
		},
		computed: {
			...mapState(['userInfo'])
		}
	}
</script>

<style lang="scss">

</style>
