<template>
	<view>
		<view class="gridlistctn">
			<view @click="fatherFun(item.id)" class="gitem" v-for="item,index in dataList" :key="index">
				<image :src="fileUrl+item.img" mode="widthFix"></image>
				<view>{{item.title}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	import { fileUrl } from '@/common/config/api.js';
	export default {
		name:"grid-menu",
		props: {
			dataList: {
				type: Array,
				require: false,
				default: ()=>[]
			},
			clickItem: {
				type: Function,
				default: null
			}
		},
		data() {
			return {
				fileUrl:fileUrl
			};
		},
		methods: {
			fatherFun(tid){
				this.$emit('clickItem',tid)
			}
		}
	}
</script>

<style lang="scss">
	.gridlistctn{
		display: flex;
		flex-wrap: wrap;
	}
	.gitem{
		width: 25%;
		padding: 20rpx;
		height: 230rpx;
	}
	.gitem image{
		width: 100%;
		border-radius: 50%;
	}
	.gitem view{
		text-align: center;
	}
</style>