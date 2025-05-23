<template>
	<view>
		<u-navbar title="优惠券" :border="true" :placeholder="true" @leftClick="goBack" :autoBack="true"></u-navbar>
		
		<scroll-view :enable-flex="true" class="svcontainer">
			<u-tabs :list="typelist" keyName="title" @change="onTabChange"></u-tabs>
			<imgList @clickItem="lingqu" titleLabel="金额:" titleColor="red" :sType="1" :dataList="showlist" :imgSize="1" titleName="total" tLabel="备注:"  tName="note" ></imgList>
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
				alllist:[],
				mylist:[],
				showlist:[],
				tabtitle: '待领取',
				typelist: [{title: '待领取'}, {title: '已领取'}, {title: '已使用'}]
			};
		},
		onLoad(params) {
			this.uploadData()
		},
		onShow() {
			
		},
		methods: {
			onTabChange (item){
				this.tabtitle = item.title
				this.uploadData()
			},
			uploadData (){
				listj({params: {table: 'youhuiquan', typeid:1}}).then(res => {
					this.alllist = res
					listj({params: {table: 'youhuiquan', typeid:2,uid:this.userInfo.id}}).then(mlist => {
						this.mylist = mlist
						this.refreshList()
					})
				})
			},
			refreshList (){
				if (this.tabtitle == '待领取') {
					let lingqulist = []
					for (let i = 0; i < this.alllist.length; i++) {
						let yh = this.alllist[i]
						let flag = true
						for (let j = 0; j < this.mylist.length; j++) {
							let myh = this.mylist[j]
							if (myh.pid == yh.id) {
								flag = false
								break
							}
						}
						if (flag) {
							lingqulist.push(yh)
						}
					}
					this.showlist = lingqulist
				}else if (this.tabtitle == '已领取') {
					listj({params: {table: 'youhuiquan', uid: this.userInfo.id, statecn:'正常' }}).then(res => {
						this.showlist = res
					}).catch(err => {
					 
					})
				}else if (this.tabtitle == '已使用') {
					listj({params: {table: 'youhuiquan', uid: this.userInfo.id, statecn:'已使用' }}).then(res => {
						this.showlist = res
					}).catch(err => {
					 
					})
				}else if (this.tabtitle == '已过期') {//暂时不考虑已过期
					listj({params: {table: 'youhuiquan', uid: this.userInfo.id, statecn:'已过期' }}).then(res => {
						let mylist = res
						let tlist = []
						for (let i = 0; i < mylist; i++) {
							let yhj = mylist[i]
							let ntime = (Date.now()/1000).toFixed(0)
							let etime = yhj.extime*1
							if (ntime>etime) {
								tlist.push(yhj)
							}
						}
					}).catch(err => {
					 
					})
				}
			},
			goBack(){
				uni.itool.nto({ url: '/pages/me/me' })
			},
			lingqu(id){
				findj({params: {table: 'youhuiquan', id:id}}).then(res => {
					let yhj = res
					if (yhj.pid) {
						
					}else{
						findj({params: {table: 'youhuiquan', pid: yhj.id, uid: this.userInfo.id}}).then(r => {
							if (r) {
								uni.showToast({
									title:'已领取'
								})
							}else{
								let pid = yhj.id
								yhj.uid = this.userInfo.id
								yhj.statecn = '正常'
								yhj.username = this.userInfo.username
								yhj.table = "youhuiquan"
								yhj.typeid = 2
								yhj.pid = pid
								yhj.id = null
								savej({params: yhj}).then(r => {
									this.uploadData()
								})
							}
						})
						
					}
					
				}).catch(err => {
				 
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
