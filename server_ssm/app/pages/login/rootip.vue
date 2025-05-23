<template>
	<view>
		<u-navbar bgColor="#62CDF7" title="设置服务端地址" @leftClick="goBack" :border="true" :placeholder="true"   :autoBack="true"></u-navbar>

		<scroll-view :enable-flex="true" class="svcontainer">
			<u--form labelPosition="left" :model="fobj" ref="regform">
				<u-form-item borderBottom label-width="76" label="根域名:" prop="ip">
					<u--input border="none" v-model="fobj.ip" />
				</u-form-item>
				<u-form-item borderBottom label-width="76" label="端口:" prop="duankou">
					<u--input border="none" type="number" v-model="fobj.duankou" />
				</u-form-item>

			</u--form>

			<view class="hpaddingctn">
				<u-button type="primary" text="提交" @click="save" />
			</view>
			
		</scroll-view>
	</view>
</template>

<script>
	import {
		yewuutil
	} from '@/common/commontools.js'
	import {
		mapState
	} from 'vuex'
	export default {
		data() {
			return {
				fobj: {
					ip: 'localhost',
					duankou: '8088'
				},
				rootIp:null
			}
		},
		onLoad(params) {
			let varip = uni.getStorageSync('rootIp')
			if(varip){
				if(varip.indexOf(":")!=-1){
					let ips = varip.split(":")
					this.fobj.ip = ips[0]
					this.fobj.duankou = ips[1]
				}else{
					this.fobj.ip = varip
				}
			}
		},
		methods: {
			save() {
				if (this.fobj.ip && this.fobj.duankou) {
					let nip = this.fobj.ip + ":" + this.fobj.duankou
					uni.setStorageSync("rootIp",nip)
					uni.reLaunch({
						url: '/pages/login/login'
					})
				}
			},
			goBack() {
				yewuutil.toLogin()
			},
			showSex(v) {
				this.fobj.sex = v.detail.value
			},
			sexSelect(e) {
				console.log(e.id)
				this.fobj.sex = e.name
			}
		},
		computed: {
			...mapState(['userInfo'])
		}
	}
</script>

<style lang="scss">

</style>
