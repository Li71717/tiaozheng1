<template>
	<view>
		<u-navbar title="个人信息" :border="true" :placeholder="true"   :autoBack="true"></u-navbar>
		<scroll-view :enable-flex="true" class="svcontainer">
			<view class="formitem">
				<view class="formlabel">选择头像:</view>
				<ideaUpload v-model="filelist"></ideaUpload>
				<!--  #ifdef MP-WEIXIN -->
				<button open-type="chooseAvatar" @chooseavatar="getWxAvatar">设置头像</button>
				<!--  #endif -->
			</view>
			<view class="formitem">
				<view class="formlabel">用户名:</view>
				<input id="nickname-input" @blur="setNickName" type="nickname" v-model="fobj.username" class="binput1" />
			</view>
			<view class="formitem">
				<view class="formlabel">电话号码:</view>
				<input type="tel" v-model="fobj.tel" class="binput1" />
				<!--  #ifdef MP-WEIXIN -->
<!--				<button open-type="getPhoneNumber" @getphonenumber="getPhoneNumber">获取手机号</button>-->
				<!--  #endif -->
			</view>
      <block v-if="fobj.roletype=='3'">
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
			<view class="formitem">
				<view class="formlabel">密码:</view>
				<input type="password" v-model="fobj.passwd" class="binput1" />
			</view>
			<view class="formitem">
				<view class="formlabel">性别:</view>
				<view>
					<radio-group @change="showSex">
						<label class="radio"><radio value="男" :checked="fobj.sex=='男'" />男</label>
						<label class="radio"><radio value="女" :checked="fobj.sex=='女'" />女</label>
					</radio-group>
				</view>
			</view>
			<view class="formitem">
				<button type="primary" @click="updateInfo()">提交</button>
			</view>
			
		</scroll-view>
	</view>
</template>

<script>
	import { listj, findj, savej, fileUrl, saveWxUser, uploadUrl } from '@/common/config/api.js'
	import {mapState, mapActions} from 'vuex'
	import ideaUpload from '@/components/idea-upload/idea-upload.vue'
	import { serverUrl } from '@/common/config/api.js'
	export default {
		components: {ideaUpload},
		data() {
			return {
				fobj: {},
				filelist: [],
				fileUrl: fileUrl,
				uploadUrl: uploadUrl,
				nickname: ''
			}
		},
		onLoad(params) {
			this.fobj = this.userInfo
			setTimeout(()=>{
				this.filelist.push({url: this.fileUrl + this.fobj.img})
			},100)
			
			console.log(this.filelist)
		},
		methods: {
			...mapActions(['updateUserInfo']),
			getUploadImg(imgurl){
				if(imgurl){
					this.fobj.img = imgurl
				}
			},
			getWxAvatar(e){
				let imgurl = e.detail.avatarUrl
				
				
				/* saveWxUser({params: { imgurl: imgurl }}).then(res => {
					this.fobj.img = res
				}).catch(err => {
				 
				}) */
				console.log("upload url:"+this.uploadUrl+" imgurl:"+imgurl)
				uni.uploadFile({
					url: uploadUrl, //仅为示例，非真实的接口地址
					filePath: imgurl,
					name: 'file',
					success: (uploadFileRes) => {
						let img = uploadFileRes.data
						console.log("uploadresult:"+img);
						this.fobj.img = img
						this.filelist = [{url: this.fileUrl+img, fileName:img}]
					}
				});
				
				
			},
			goBack(){
				uni.navigateBack({
					delta:1
				})
			},
			showSex(v){
				this.fobj.sex = v.detail.value
			},
			setNickName(event){
				uni.createSelectorQuery().in(this) // 注意这里要加上 in(this)  
				    .select("#nickname-input")  
				    .fields({  
				        properties: ["value"],  
				    })  
				    .exec((res) => {  
				        const nickName = res?.[0]?.value  
				        console.log('昵称', nickName)
						this.fobj.username = nickName
						if (nickName) {
							findj({params: {table: 'user', username: nickName}}).then(res2 => {
								console.info(res2)
								if (res2 && res2.id!=this.userInfo.id) {
									uni.showToast({
										icon:'error',
										title: '用户名已存在!'
									})
									this.fobj.username = ""
								}
							}).catch(err => {
							 
							})
						}
				    })
			},
			updateInfo() {
				if (this.fobj.username && this.fobj.tel) {
					this.fobj.table = 'user'
					if (this.filelist.length) {
						this.fobj.img = this.filelist[0].fileName
					}
					console.log("userimg======="+this.fobj.img)
					this.updateUserInfo(this.fobj)
					savej({params: this.fobj}).then(res => {
						uni.showToast({
							icon:'error',
							title: '操作成功!'
						})
					}).catch(err => {
					 
					})
				}else{
					uni.showToast({
						icon:'error',
						title:'请检查输入'
					})
				}
				
			},
			getPhoneNumber(e) {
			
				console.log(e.detail.errMsg) // 判断用户是否允许获取手机号
				console.log(e.detail.iv) // 参数 iv
				console.log(e.detail.encryptedData) // 参数encryptedData
				if (e.detail.errMsg == "getPhoneNumber:ok") { // 用户允许或去手机号
					uni.request({
						url: this.serverUrl+"database/getWxPhoneNumber",
						data: {
							code: e.detail.code,
							encryptedData: e.detail.encryptedData,
							iv: e.detail.iv,
							sessionKey: this.session_key,
							openId: this.openId,
						},
						success: (res) => {
							if(res.data.errcode == 0){
								console.info(res.data.phone_info.phoneNumber)
								this.fobj.tel = res.data.phone_info.phoneNumber
							}
						}
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
