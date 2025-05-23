<template>
	<view>
		<u-navbar title="地址管理" :border="true" :placeholder="true"   :autoBack="true"></u-navbar>
		<scroll-view :enable-flex="true" class="svcontainer">
			<view class="formitem">
				<view class="formlabel">联系人:</view>
				<input type="text" v-model="lxr" class="binput1" />
			</view>
			<view class="formitem">
				<view class="formlabel">电话:</view>
				<input type="text" v-model="tel" class="binput1" />
			</view>
			<view class="formitem">
				<view class="formlabel">地址:</view>
				<input type="text" v-model="address" class="binput1" />
			</view>
			<view class="formitem">
				<button type="primary" @click="saveAddress()">提交</button>
			</view>
			<view class="formitem" v-if="tid">
				<button type="warn" @click="delAddress()">删除</button>
			</view>
			
		</scroll-view>
	</view>
</template>

<script>
	import { listj, findj, savej, deletej, fileUrl } from '@/common/config/api.js';
	import {mapState, mapActions} from 'vuex'
	export default {
		data() {
			return {
				lxr: '',
				tel: '',
				address: '',
				tid: null
			};
		},
		onLoad(params) {
			if(params.tid && params.tid !== 'undefined'){
				this.tid = params.tid

			}
			console.log('tttttttid:'+params.tid+" showdel:"+this.showdel)
			if(this.tid){
				findj({params: {table: 'address', id: this.tid }}).then(res => {
					let aobj = res;
					let title = aobj.title
					this.lxr = title.split(' ')[0]
					this.tel = title.split(' ')[1]
					this.address = title.split(' ')[2]
				}).catch(err => {
				 
				})
			}
		},
		methods: {
			//...mapActions(['']),
			saveAddress(){
				let title = this.lxr + " "+this.tel + " " + this.address
				let id = this.tid || null
				let uid = this.userInfo.id
				savej({params: {title: title, table: 'address', id: id, uid: uid} }).then(res => {
					uni.itool.nto({
						url:'./address'
					})
				}).catch(err => {
				 
				})
			},
			delAddress(){
				deletej({params: {table: 'address', id: this.tid}}).then(res => {
					uni.itool.nto({
						url:'./address'
					})
				}).catch(err => {
				 
				})
			},
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
