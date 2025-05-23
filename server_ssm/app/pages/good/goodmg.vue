<template>
	<view>
		<u-navbar title="服务管理" :border="true" :placeholder="true"   :autoBack="true"></u-navbar>
		<scroll-view :enable-flex="true" class="svcontainer">
			<u--form>
				<u-form-item borderBottom label-width="76" label="服务名称:" prop="gname">
					<u--input border="none" type="text" v-model="fobj.gname" />
				</u-form-item>
				
				<!-- <view class="formitem">
					<view class="formlabel">分类:</view>
					<view class="selectctn">
						<superwei-combox :isJSON="true" v-model="fobj.type" keyName="title"  :candidates="typelist" placeholder="选择分类" @select="comboboxselect"></superwei-combox>
					</view>
					
				</view> -->
				<u-form-item prop="sex" @click="sshow1 = true;hideKeyboard();" borderBottom label-width="76"label="分类:">
					<u--input border="none" type="select" v-model="fobj.type" />
					<u-icon slot="right" name="arrow-right"></u-icon>
					<u-action-sheet :show="sshow1" :actions="typelist" title="请选择分类" description="请选择" @close="sshow1 = false" @select="tSelected1" />
				</u-form-item>
				<u-form-item borderBottom label-width="76" label="价格:" prop="price">
					<u--input type="number" border="none" v-model="fobj.price" />
				</u-form-item>
				
				<view class="formitem">
					<view class="formlabel">封面图:</view>
					<ideaUpload v-model="filelist"></ideaUpload>
				</view>
				
				<view class="formitem">
					<view class="formlabel">详细信息:</view>
					<view style="border: 1px #ddd solid;">
						<jinEdit :html="editorHtml" @getEditorContxt="getEditorContxt" v-model="fobj.note" height="300px" :uploadFileUrl="uploadUrl" placeholder="请输入内容" @editOk="editOk"></jinEdit>
					</view>
				</view>
			</u--form>
			
			
			
			<view class="formitem">
				<button type="primary" @click="saveGood()">提交</button>
			</view>
			<view class="formitem" v-if="tid">
				<button type="warn" @click="delGood()">删除</button>
			</view>

		</scroll-view>
	</view>
</template>

<script>
	import {
		listj,
		findj,
		savej,
		deletej,
		fileUrl,
		uploadUrl
	} from '@/common/config/api.js'
	import {
		mapState,
		mapActions
	} from 'vuex';
	import jinEdit from '@/components/jin-edit/jin-edit.vue'
	import ideaUpload from '@/components/idea-upload/idea-upload.vue'
	import {
		ideautil,
		yewuutil
	} from '@/common/commontools.js'
	export default {
		components: {
			jinEdit,
			ideaUpload
		},
		data() {
			return {
				tel: '',
				typelist: [],
				filelist: [],
				fobj: {
					btype:1,
					gname: '',
					price: 0,
					note: '',
					img: '',
					sid: '',
					shop: '',
					typeid: '',
					type: '',
					table: 'good'
				},
				tid: null,
				fileUrl: fileUrl,
				uploadUrl: uploadUrl,
				editorCtx:null,
				editorHtml:'',
				sshow1:false
			};
		},
		onLoad(params) {
			if (params.tid && params.tid !== 'undefined') {
				this.tid = params.tid

			}
			console.log('tttttttid:' + params.tid + " showdel:" + this.showdel)
			if (this.tid) {
				findj({
					params: {
						table: 'good',
						id: this.tid
					}
				}).then(res => {
					this.fobj = res
					this.filelist.push({url: this.fileUrl + res.img})
					console.log(this.imgfile)
					this.editorHtml = this.fobj.note
					 this.editorCtx.setContents({
						html: this.fobj.note
					})
					
				}).catch(err => {

				})
			}
			
			listj({
				params: {
					table: 'type'
				}
			}).then(res => {
				for (let s of res) {
					s.name = s.title
				}
				this.typelist = res
			}).catch(err => {
			
			})
		},
		methods: {
			//...mapActions(['']),
			hideKeyboard: ideautil.hideKeyboard,
			saveGood() {
				this.editorCtx.getContents({
					success: res => {
						this.fobj.note = res.html
						this.fobj.sid = this.userInfo.id
						this.fobj.shop = this.userInfo.username
            this.fobj.statecn = '待审核'
						console.log(this.filelist)
						//this.fobj.img = this.filelist[0].url.data
						//this.filelist.length?this.fobj.img = this.filelist[0].url.data:this.fobj.img=""
						if (this.filelist.length && this.filelist[0].url.data) {
							this.fobj.img = this.filelist[0].url.data
						}
						let fdata = this.fobj
						fdata.table = "good"
						savej({
							params: fdata
						}).then(res => {
							uni.itool.nto({
								url: './good'
							})
						}).catch(err => {
						
						})
					} 
				})
				
			},
			comboboxselect(e){
				this.fobj.typeid = e.id
				this.fobj.type = e.title
			},
			delGood() {
				deletej({
					params: {
						table: 'good',
						id: this.tid
					}
				}).then(res => {
					uni.itool.nto({
						url: './good'
					})
				}).catch(err => {

				})
			},
			goBack() {
				uni.navigateBack({
					delta: 1
				})
			},
			
			editOk(res) {
				this.fobj.note = res.html
			},
			getEditorContxt(ctx){
				this.editorCtx = ctx
				this.editorCtx.setContents({
					html: this.fobj.note
				})
			},
			tSelected1(e){
				this.fobj.type = e.name
				this.fobj.typeid = e.id
			}
		},
		computed: {
			...mapState(['userInfo'])
		}
	}
</script>

<style lang="scss">

</style>
