<template>
	<view>
		<u-navbar title="信息管理" :border="true" :placeholder="true" @leftClick="goBack"></u-navbar>
		<scroll-view :enable-flex="true" class="svcontainer">
			<view class="formitem">
				<view class="formlabel">标题:</view>
				<input type="text" v-model="fobj.title" class="binput1" />
			</view>
<!--      <ideaselect label="选择分类" showName="title" :datalist="[typelist]" v-model="sobj"></ideaselect>-->
			<view class="formitem">
				<view class="formlabel">文件:</view>
				<fileupload v-model="fobj.img"></fileupload>
			</view>
			<view class="formitem">
				<view class="formlabel">详细信息:</view>
				<view style="border: 1px #ddd solid;">
					<jinEdit :html="editorHtml" @getEditorContxt="getEditorContxt" v-model="fobj.note" height="300px" :uploadFileUrl="uploadUrl" placeholder="请输入内容" @editOk="editOk"></jinEdit>
				</view>
			</view>
			
			
			<view class="formitem">
				<button type="primary" @click="savePosts()">提交</button>
			</view>
			<view class="formitem" v-if="tid">
				<button type="warn" @click="delPosts()">删除</button>
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
	} from '@/common/config/api.js';
	import {
		mapState,
		mapActions
	} from 'vuex';
	import jinEdit from '@/components/jin-edit/jin-edit.vue';


	export default {
		components: {
			jinEdit
		},
		data() {
			return {
				tel: '',
				filelist: [],
				fobj: {
					title: '',
					type: 1,
					note: '',
					img: '',
					table: 'posts'
				},
				tid: null,
				fileUrl: fileUrl,
				uploadUrl: uploadUrl,
				editorCtx:null,
				editorHtml:'',
				totype:1,
        typelist:[{id:1,title:''},{id:2,title:''}],
				sobj:{},
			};
		},
		onLoad(params) {
			if (params.tid && params.tid !== 'undefined') {
				this.tid = params.tid
			}
			this.totype = params.totype || 1
			console.log('tttttttid:' + params.tid + " showdel:" + this.showdel)
      this.fobj.type = params.type || 1
			if (this.tid) {
				findj({
					params: {
						table: 'posts',
						id: this.tid
					}
				}).then(res => {
					this.fobj = res
					this.editorHtml = this.fobj.note
          this.editorCtx.setContents({
						html: this.fobj.note
					})
					
				}).catch(err => {

				})
			}
			
			listj({
				params: {
					table: 'type2'
				}
			}).then(res => {
				this.typelist = res
			}).catch(err => {
			
			})
		},
		methods: {
		
			//...mapActions(['']),
			
			savePosts() {
				this.editorCtx.getContents({
					success: res => {
						this.fobj.note = res.html
						this.fobj.uid = this.userInfo.id
						this.fobj.username = this.userInfo.username
            if(this.sobj.id){
              this.fobj.type = this.sobj.id
              this.fobj.typecn = this.sobj.typecn
            }
						console.log(this.filelist)
						let fdata = this.fobj
						fdata.table = "posts"
						savej({
							params: fdata
						}).then(res => {
              uni.showModal({
              	title: '提示',
              	content: '操作成功',
              	showCancel: false,
              	success: (res) => {
              		if (res.confirm) {
                    if (this.totype==1) {
                      uni.itool.nto({
                        url: './posts?type='+this.fobj.type+'&uid='+this.userInfo.id
                      })
                    }else{
                      uni.itool.nto({
                        url: './postslist?type='+this.fobj.type+'&uid='+this.userInfo.id
                      })
                    }
              		} else if (res.cancel) {

              		}
              	}
              });


							
						}).catch(err => {
						
						})
					} 
				})
				
			},
			comboboxselect(e){
				this.fobj.typeid = e.id
				this.fobj.type = e.title
			},
			delPosts() {
				deletej({
					params: {
						table: 'posts',
						id: this.tid
					}
				}).then(res => {
					uni.itool.nto({
						url: '/pages/posts/postslist?type='+this.fobj.type
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
			}
		},
		computed: {
			...mapState(['userInfo'])
		}
	}
</script>

<style lang="scss">

</style>
