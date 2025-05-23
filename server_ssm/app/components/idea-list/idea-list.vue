<template>
	<view>
		<input v-show="showSearch" v-model="searchstr" @input="toggleSearch" type="text" placeholder="输入关键字搜索..." class="searchinput" />
		<uni-list>
			<uni-list-item @click="fatherFun(item.id)" v-show="toggleShow(item.isShow)" clickable v-for="(item,index) in dataList" :key="item[idName]"
				:title="item[titleName]" :note="item[noteName]" :showArrow="showArrow" :thumb="thumb===null?null:fileUrl+item[thumb]" :thumbSize="thumbSize"
				:rightText="item[rightName]" />
		</uni-list>
	</view>
</template>

<script>
	import {
		fileUrl
	} from '@/common/config/api.js';
	import {
		ideautil
	} from '@/common/commontools.js';
	export default {
		props: {
			dataList: {
				type: Array,
				require: false,
				default: []
			},
			idName: {
				type: String,
				require: false,
				default: 'id'
			},
			titleName: {
				type: String,
				require: false,
				default: 'title'
			},
			noteName: {
				type: String,
				require: false,
				default: 'note'
			},
			rightName: {
				type: String,
				require: false,
				default: 'username'
			},
			imgName: {
				type: String,
				require: false,
				default: 'img'
			},
			thumb: {
				type: String,
				require: false,
				default: null
			},
			thumbSize: {
				type: String,
				require: false,
				default: 'medium'
			},
			rightText: {
				type: String,
				require: false,
				default: ''
			},
			showArrow: {
				type: Boolean,
				require: false,
				default: true
			},
			clickItem: {
				type: Function,
				default: null
			},
			showSearch: {
				type: Boolean,
				require: false,
				default: true
			}
		},
		name: "ideaList",
		data() {
			return {
				searchstr: '',
				fileUrl: fileUrl
			};
		},
		mounted() {
			
		},
		computed: {

		},
		methods: {
			fatherFun(tid){
				this.clickItem(tid)
			},
			toggleShow(ne){
				if(ne === undefined){
					return true
				}else{
					return ne
				}
				
			},
			toggleSearch(e) {
				let fd = new ideautil.FangDou()
				let lis = this.dataList
				if (lis && lis.length) {
					fd(() => {
						for (let i = 0; i < lis.length; i++) {
							console.log(lis[i].isShow)
							lis[i].isShow = true
							this.$set(this.dataList,i,lis[i])
						}
						let searchstr = this.searchstr
						if (searchstr) {
							//lis不是数组,遍历只能获取length属性获取长度然后操作
							for (let i = 0; i < lis.length; i++) {
								let title = lis[i][this.titleName];
								let note = lis[i][this.noteName];
								if (title.indexOf(searchstr) != -1 || note.indexOf(searchstr) != -1) {
									lis[i].isShow = true
								} else {
									lis[i].isShow = false
								}
								this.$set(this.dataList,i,lis[i])
							}
						}
					})
				}
			
			}
		},
	}
</script>

<style scoped>
	.searchinput {
		border-bottom: 1px #ddd solid;
		padding: 10upx;
		font-size: 28upx;
		height: 80upx;
	}
</style>
