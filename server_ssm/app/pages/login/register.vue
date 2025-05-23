<template>
	<view>
		<u-navbar title="注册用户" @leftClick="goBack" :border="true" :placeholder="true"   :autoBack="true"></u-navbar>
		<scroll-view :enable-flex="true" class="svcontainer">
			<u--form labelPosition="left" :model="fobj" ref="regform">
				<view class="formitem">
					<view class="formlabel">头像:</view>
					<ideaUpload v-model="filelist"></ideaUpload>
				</view>
				<u-form-item borderBottom label-width="76" label="用户名:" prop="username">
					<u--input border="none" v-model="fobj.username" />
				</u-form-item>
        <ideaselect label="身份" showName="title" :datalist="[typelist]" v-model="sobj"></ideaselect>
        <block v-if="sobj.id==3">
          <ideaslc label="是否接受定制" :datalist="[['是','否']]" v-model="fobj.jsdz"></ideaslc>
          <u-form-item label-width="76" label="姓名:" prop="" borderBottom="1">
            <u--input border="none" type="text" v-model="fobj.fname" />
          </u-form-item>
          <u-form-item label-width="76" label="资格证书号码:" prop="" borderBottom="1">
            <u--input border="none" type="text" v-model="fobj.zgzs" />
          </u-form-item>
          <u-form-item label-width="76" label="身份证:" prop="" borderBottom="1">
            <u--input border="none" type="text" v-model="fobj.idcard" />
          </u-form-item>
          <view class="formitem">
            <u--textarea v-model="fobj.jk" placeholder="健康说明" confirmType="done"></u--textarea>
          </view>
          <view class="formitem">
            <u--textarea v-model="fobj.jn" placeholder="技能说明" confirmType="done"></u--textarea>
          </view>
          <view class="formitem">
            <u--textarea v-model="fobj.note" placeholder="自我描述" confirmType="done"></u--textarea>
          </view>
        </block>

				<u-form-item borderBottom label-width="76" label="电话号码:" prop="tel">
					<u--input border="none" type="number" v-model="fobj.tel" />
				</u-form-item>
				<u-form-item borderBottom label-width="76" label="密码:" prop="passwd">
					<u--input border="none" type="password" v-model="fobj.passwd" />
				</u-form-item>
				<u-form-item borderBottom label-width="76" label="密码重复:" prop="passwd2">
					<u--input border="none" type="password" v-model="fobj.passwd2" />
				</u-form-item>
				<u-form-item prop="sex" @click="sexshow = true;hideKeyboard();" borderBottom label-width="76"label="性别:">
					<u--input border="none" type="select" v-model="fobj.sex" />
					<u-icon slot="right" name="arrow-right"></u-icon>
					<u-action-sheet :show="sexshow" :actions="[{name:'男',id: 1}, {name:'女', id:2}]" title="请选择性别" description="请选择" @close="sexshow = false" @select="sexSelect" />
				</u-form-item>

			</u--form>

			<view class="hpaddingctn">
				<u-button type="primary" text="提交" @click="saveUser" />
			</view>
			
		</scroll-view>
	</view>
</template>

<script>
	import {
		listj,
		savej,
		findj,
		fileUrl,
		uploadUrl
	} from '@/common/config/api.js';
	import {
		ideautil,
		yewuutil
	} from '@/common/commontools.js'
	import {
		mapState,
		mapActions
	} from 'vuex'
	import ideaUpload from '@/components/idea-upload/idea-upload.vue'
	export default {
		components: {
			ideaUpload
		},
		data() {
			return {
        typelist:[{id:2,title:'用户'},{id:3,title:'服务人员'}],
        sobj:{id:2,title:'用户'},
				filelist: [],
				fobj: {
					username: '',
					tel: '',
					passwd: '',
					passwd2: '',
					sex: '女',
					roletype: 2
				},
				uploadUrl: uploadUrl,
				sexshow: false,
				sexshow2:false,
				duser:false,
				rules: {
					username: [{
						required: true,
						message: "请检查用户名",
					}, {
						asyncValidator: (rule, value, callback) => {
							
							if (value) {
								findj({
									params: {
										table: 'user',
										username: value
									}
								}).then(res => {
									if (res) {
										this.duser = true
										callback(new Error('用户名已存在'));
									} else {
										this.duser = false
										callback();
									}
								}).catch(err => {
									callback(new Error('发生错误'));
								})
							} else {
								callback(new Error('请检查用户名'));
							
							}

						},
						//message: "请检查用户名",
						// 触发器可以同时用blur和change
						trigger: ['blur'],
					}],
					passwd2: [{
						validator: (rule, value, callback) => {
							let r = false
							if (this.fobj.passwd && this.fobj.passwd2 && this.fobj.passwd == this.fobj
								.passwd2) {
								r = true
							}

							return r
						},
						message: '请确认密码',
						trigger: ['change', 'blur'],
					}],
					tel: [{
						// 自定义验证函数，见上说明
						validator: (rule, value, callback) => {
							//this.$u.test.mobile 这个为校验是否为手机号的函数自带的
							return this.$u.test.mobile(value)
						},
						message: '请输入正确的电话号码',
						// 触发器可以同时用blur和change
						trigger: ['change', 'blur'],
					}]
				}
			}
		},
		onLoad(params) {

		},
		onReady() {
			this.$refs.regform.setRules(this.rules);
		},
		methods: {
			...mapActions(['updateUserInfo']),
			hideKeyboard: ideautil.hideKeyboard,
			saveUser() {

				this.$refs.regform.validate().then(res => {
					this.filelist.length?this.fobj.img = this.filelist[0].url.data:this.fobj.img=""
					let fdata = this.fobj
					fdata.table = "user"
					if (this.duser) {
						uni.showToast({
							icon:'none',
							title: '用户名已存在!'
						})
						return;
					}
          fdata.roletype = this.sobj.id
					savej({
						params: fdata
					}).then(res => {
						yewuutil.toLogin()
					}).catch(err => {

					})
				}).catch(errors => {
					uni.$u.toast('请检查输入')
				})
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
