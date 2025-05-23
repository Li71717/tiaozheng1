<template>
	<view>

		<u-upload
				:fileList="fileList1"
				@afterRead="afterRead"
				@delete="deletePic"
				name="1"
				multiple
				:maxCount="1"
			></u-upload>
	</view>
	
</template>

<script>
	import {uploadUrl, fileUrl } from '@/common/config/api.js';
	export default {
		name:"idea-upload",
		model:{
			prop:'value',
			event:'input'
		},
		props: {
				value: {
					type: Array,
					require: false,
					default: ()=>[]
				}
			},
		data() {
			return {
				uploadUrl,
				fileUrl: fileUrl,
				fileList1:[]
			};
		},
		watch:{
			value:{
				immediate:true,
				deep:true,
				handler(news){
					this.fileList1 = news
				}
			}
		  },
		methods: {
			// 删除图片
			deletePic(event) {
				this[`fileList${event.name}`].splice(event.index, 1)
			},
			// 新增图片
			async afterRead(event) {
				// 当设置 mutiple 为 true 时, file 为数组格式，否则为对象格式
				let lists = [].concat(event.file)
				let fileListLen = this[`fileList${event.name}`].length
				lists.map((item) => {
					this[`fileList${event.name}`].push({
						...item,
						status: 'uploading',
						message: '上传中'
					})
				})
				for (let i = 0; i < lists.length; i++) {
					const result = await this.uploadFilePromise(lists[i].url)
					let item = this[`fileList${event.name}`][fileListLen]
					let imgurl = result.data
					this[`fileList${event.name}`].splice(fileListLen, 1, Object.assign(item, {
						status: 'success',
						message: '',
						url: result,
						fileName:imgurl
					}))
					fileListLen++
					this.$emit("input",this.fileList1)
				}
			},
			uploadFilePromise(url) {
				return new Promise((resolve, reject) => {
					let uploadUrl = this.uploadUrl
					let that = this
					let a = uni.uploadFile({
						url: uploadUrl, // 仅为示例，非真实的接口地址
						filePath: url,
						name: 'file',
						success: (res) => {
							resolve(res)
						},
						complete: (e) => {
							console.log(e)
						}
					});
				})
			}
		},
	}
</script>

<style>

</style>