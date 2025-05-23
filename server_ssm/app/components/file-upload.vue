<template>
	<view>
		<image @click="toChooseFile()" mode="widthFix" class="timg" v-if="fileType==1" :src="fileUrl+fileName"></image>
		<video @click="toChooseFile()" class="timg" v-if="fileType==2" :src="fileUrl+fileName"></video>
		<audio @click="toChooseFile()" class="timg" v-if="fileType==3" :src="fileUrl+fileName"></audio>
		<view @click="toChooseFile()" class="filetext" v-if="fileType==4">{{fileName}}</view>
		<view v-if="fileType==0" class="choosefilebtn" @click="toChooseFile()">
			<image class="sficon" mode="widthFix" src="http://ideapic-1255600738.cos.ap-guangzhou.myqcloud.com/images/icons/sfile2.png"></image>
			<view class="sftext">选择文件</view>
		</view>
		<view>
			<nk-select-file btnText="确认选择" v-model="nkshow" @confirm="getPath"></nk-select-file>
		</view>
	</view>
</template>

<script>
	import { fileUrl, uploadUrl } from '@/common/config/api.js';
	import { ideautil } from '@/common/commontools.js';
	import nkSelectFile from "@/components/nk-select-file/nk-select-file.vue"
	export default {
		components:{nkSelectFile},
		name:"file-upload",
		model:{
			prop:'value',
			event:'input'
		},
		props: {
			value: {
				type: String,
				default: ''
			},
			filetypes: {
				type: Array,
				require: false,
				default: ()=>[]
			}
		},
		data() {
			return {
				nkshow:false,
				pathArr: [],
				uploadUrl,
				fileUrl,
				fileName:'',//需要通过watch赋值到data
				fileType:0
			};
		},
		watch:{
			value:{
				immediate:true,
				deep:true,
				handler(news){
					this.fileName = news
					this.fileType = this.getFileType(this.fileName)
					console.log("---------------------------"+this.fileName)
				}
			}
		  },
		methods: {
			getPath(event){
				console.log(event)
				this.pathArr = event
				let fileObj = event[0]
				console.log("selectFile:"+fileObj.url)
				let fpath = fileObj.url
				this.uploadFile(fpath)
			},
			uploadFile(fpath){
				console.log("uploadFile:"+fpath)
				uni.uploadFile({
				    url:uploadUrl,//服务器地址
				    filePath:fpath,//临时文件地址
				    name:"file",//服务器通过该名称获取文件
				    success: (uploadFileRes) => {
						console.log("uploadFileRes:"+JSON.stringify(uploadFileRes))
				    	let fileName = uploadFileRes.data;
						this.$emit('input',fileName)
						console.log(fileName);
				    },
					fail: (err) => {
						console.log(err);
					}
				})
			},
			toChooseFile(){
				let uploadUrl = this.uploadUrl
				let os = uni.getSystemInfoSync()
				let plat = os.uniPlatform
				if(plat === 'mp-weixin'){
					wx.chooseMessageFile({
						count:1,
						success:(res) => {
							const tempFilePaths = res.tempFiles;
							let fpath = tempFilePaths[0].path;
							this.uploadFile(fpath)
						}
					})
				}else if (plat === 'app-plus' || plat === 'app'){
					this.nkshow = true
				}else{
					uni.chooseFile({
						count:1,
						type:'all',
						success:(res) => {
							const tempFilePaths = res.tempFilePaths;
							console.log(tempFilePaths[0]);
							this.uploadFile(tempFilePaths[0])
						}
					})
				}
				
			},
			getFileType:ideautil.getFileType
			
		}
	}
</script>

<style>
	.choosefilebtn{
		height: 100upx;
		width: 200upx;
		text-align: center;
		background-color: #fff;
		border: 1px #ddd solid;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.sficon{
		width: 50upx;
	}
	.sftext{
		color: #666;
	}
	.timg{
		width: 50%;
	}
	.filetext{
		color: #333;
	}

</style>