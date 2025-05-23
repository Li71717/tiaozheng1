<template>
	<view>
		<u-navbar title="充值" :border="true" :placeholder="true"   :autoBack="true"></u-navbar>
		<scroll-view :enable-flex="true" class="svcontainer">
			<u--form labelPosition="left" ref="cform">
				<u-form-item borderBottom label-width="76" label="充值金额:" prop="money">
					<u--input type="number" border="none" v-model="money" />
				</u-form-item>
				<u-form-item prop="sex" @click="asshow = true;hideKeyboard();" borderBottom label-width="76" label="充值方式:">
					<u--input border="none" type="select" v-model="paytype" />
					<u-icon slot="right" name="arrow-right"></u-icon>
					<u-action-sheet :show="asshow" :actions="[{name:'微信支付',id: 1}, {name:'支付宝', id:2}, {name:'银行卡', id:2}]" title="选择充值方式" description="请选择充值方式" @close="asshow = false" @select="asSelect" />
				</u-form-item>
			</u--form>
			<view class="hpaddingctn">
				<u-button type="primary" text="确定" @click="charge" />
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import { listj, findj, savej, fileUrl, saveWxUser, uploadUrl } from '@/common/config/api.js'
	import {mapState, mapActions} from 'vuex'
	import ideaUpload from '@/components/idea-upload/idea-upload.vue'
	import { ideautil, yewuutil } from '@/common/commontools.js'
	export default {
		components: {ideaUpload},
		data() {
			return {
				asshow:false,
				money:100,
				paytype:"微信支付"
			}
		},
		onLoad() {
			
		},
		methods: {
			...mapActions(['updateUserInfo']),
			hideKeyboard: ideautil.hideKeyboard,
			asSelect(v){
				this.paytype = v.name
			},
			charge(){
				if (this.money>0) {
					let ol = this.userInfo.money || 0
					let nl = ol*1+this.money*1
					this.userInfo.money = nl
					this.updateUserInfo(this.userInfo)
					savej({params: {table: 'user', id: this.userInfo.id, money: nl }}).then(res => {
						uni.itool.nto({
							url:'/pages/me/me'
						})
					})
					
				}
			}
		},
		computed: {
			...mapState(['userInfo'])
		}
	}
</script>

<style lang="scss">

</style>
