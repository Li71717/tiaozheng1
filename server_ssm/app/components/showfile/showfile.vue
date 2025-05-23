<template>
	<view>
		<image @click="downFile()" mode="widthFix" class="timg" v-if="fileType==1" :src="fileUrl+fileName"></image>
		<video @click="downFile()" class="timg" v-if="fileType==2" :src="fileUrl+fileName"></video>
		<audio @click="downFile()" :controls="true" class="tvideo" v-if="fileType==3" :src="fileUrl+fileName"></audio>
		<view @click="downFile()" class="filetext" v-if="fileType==4">{{fileName}}</view>
	</view>
</template>

<script>
	import {
		fileUrl,
		uploadUrl
	} from '@/common/config/api.js';
	import {
		ideautil
	} from '@/common/commontools.js';
	export default {
		name:"showfile",
		props: {
			fileName: {
				type: String,
				require: true,
				default: ''
			}
		},
		data() {
			return {
				fileUrl,
				fileType:this.getFileType(this.fileName)
			};
		},
		watch:{
			fileName:{
				immediate:true,
				deep:true,
				handler(news){
					this.fileName = news
					this.fileType = this.getFileType(this.fileName)
				}
			}
		  },
		methods: {
			downFile(){
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
		width: 100%;
	}
	.tvideo{
		width: 100%;
	}
	.filetext{
		color: #333;
	}
</style>