<template>
	<view>

		<!-- 顶部自定义导航 -->
		
		<u-navbar title="联系人管理" :border="true" :placeholder="true" @leftClick="goBack"></u-navbar>
		<!-- 页面内容 -->
		<view class="formcontainer">

			<tn-form ref="form" :model="fobj" :errorType="errorType" labelPosition="left" :labelWidth="140"
				labelAlign="left">
				<tn-form-item label="联系人" prop="lxr" :required="true">
					<tn-input v-model="fobj.lxr" type="text" placeholder="必填" :border="false"></tn-input>
				</tn-form-item>
				<tn-form-item label="电话" prop="tel" :required="true">
					<tn-input v-model="fobj.tel" type="text" placeholder="必填" :border="false"></tn-input>
				</tn-form-item>
				<tn-form-item label="地址" prop="address" :required="true">
					<tn-input v-model="fobj.address" type="text" placeholder="必填" :border="false"></tn-input>
				</tn-form-item>
				<view class="hpaddingctn">
					<tn-button @click="saveAddress()" backgroundColor="tn-bg-blue" fontColor="#FFFFFF" width="100%">保存
					</tn-button>
				</view>
				<view class="hpaddingctn" v-if="this.fobj.id">
					<tn-button @click="delAddress()" backgroundColor="tn-bg-red" fontColor="#FFFFFF" width="100%">删除
					</tn-button>
				</view>
			</tn-form>
		</view>

	</view>
</template>

<script>
	import {
		listj,
		findj,
		savej,
		deletej,
		fileUrl
	} from '@/common/config/api.js';
	import {
		mapState,
		mapActions
	} from 'vuex'
	export default {
		data() {
			return {
				errorType: ['message', 'border-bottom', 'toast'],
				fobj: {
					title: '',
					lxr: '',
					tel: '',
					address: '',
					id: null,
					table: 'address'
				},
				rules: {
					lxr: [{
						required: true,
						message: '必填项不能为空',
						trigger: ['blur', 'change']
					}],
					tel: [{
						required: true,
						message: '必填项不能为空',
						trigger: ['blur', 'change']
					}],
					address: [{
						required: true,
						message: '必填项不能为空',
						trigger: ['blur', 'change']
					}]
				}
			}
		},
		onReady() {
			this.$refs.form.setRules(this.rules)
		},
		onLoad(params) {
			if (params.tid && params.tid !== 'undefined') {
				this.fobj.id = params.tid

			}
			if (this.fobj.id) {
				findj({
					params: {
						table: 'address',
						id: this.fobj.id
					}
				}).then(res => {
					let aobj = res;
					let title = aobj.title
					this.fobj.lxr = title.split(' ')[0]
					this.fobj.tel = title.split(' ')[1]
					this.fobj.address = title.split(' ')[2]
				}).catch(err => {

				})
			}
		},

		methods: {

			//...mapActions(['']),
			saveAddress() {
				this.$refs.form.validate(valid => {
				if (valid) {
				  let title = this.fobj.lxr + " " + this.fobj.tel + " " + this.fobj.address
						this.fobj.uid = this.userInfo.id
						this.fobj.title = title
						savej({
							params: this.fobj
						}).then(res => {
							uni.itool.nto({
								url: './address'
							})
						}).catch(err => {

						})
					} else {
						console.log('验证失败');
					}
				});

			},
			delAddress() {
				deletej({
					params: {
						table: 'address',
						id: this.fobj.id
					}
				}).then(res => {
					uni.itool.nto({
						url: './address'
					})
				}).catch(err => {

				})
			},
			goBack() {
				uni.itool.nto({
					url:'/pages/address/address'
				})
			}
		},
		computed: {
			...mapState(['userInfo'])
		}
	}
</script>

<style lang="scss" scoped>



</style>
