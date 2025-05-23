<template>
	<view>
		<u-navbar title="工资详情" :border="true" @leftClick="goBack" :placeholder="true"></u-navbar>
		
		<scroll-view :enable-flex="true" class="svcontainer">
			<view style="text-align: center;font-size: 40rpx;color: red;">工资提成:{{gztotal}}元</view>
			<imglist tLabel="提成:" :dataList="fobjlist" :imgSize="20" titleName="ndate" sName="gnames" tName="tc" ></imglist>
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
        gztotal:0,
				tabtitle: '已完成',
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
        let total = 0
				listj({params: {table: 'bill', statecn: this.tabtitle,sid:(this.userInfo.id || 0)}}).then(res => {
          for (let s of res) {
            s.tc = ((s.total*1)*0.9).toFixed(0)
            total += s.tc*1
          }
          this.gztotal = total
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
