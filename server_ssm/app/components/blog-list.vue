<template>
	<view>
		<block v-for="(item,index) in dataList" :key="item.id">
			<view class="blog_item" @tap="fatherFun(item.id)">
				<view class="blog_top">
					<view class="blog_avatar">
						<image class="blogavatar" :src="fileUrl+item.uimg"></image>
					</view>
					<view class="blog_user">
						<text class="busername">{{item.username}}</text>
						<text class="busernote">{{item.ndate}}</text>
					</view>
				</view>
				<view class="blog_note">
					{{item.title}}
				</view>
				<view v-if="item.img">
					<image class="blog_cover" mode="widthFix" :src="fileUrl+item.img"></image>
				</view>
				<view class="blog_op">
					<text>{{item.zan}}赞</text>
				</view>
			</view>
		</block>
		
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
		name:"blog-list",
		props: {
			dataList: {
				type: Array,
				require: false,
				default: []
			},
			clickItem: {
				type: Function,
				default: null
			}
		},
		methods: {
			fatherFun(tid){
				this.$emit('clickItem',tid)
			},
		},
		data() {
			return {
				fileUrl: fileUrl
			};
		}
	}
</script>

<style>

.blog_top{
	display: flex;
	margin-bottom: 20upx;
}
.blog_avatar{
	width: 100upx;
}
.blog_user{
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: center;
}
.blogavatar{
	width: 80upx;
	height: 80upx;
}
.busername{
	font-size: 28upx !important;
	color: #222;
}
.busernote{
	font-size: 26upx;
	color: #666;
}
.blog_note{
	padding: 0 0 20upx 10upx;
}
.blog_cover{
	width: 100%;
}
.blog_op{
	padding: 20upx 0 20upx 0;
	
}
.blog_op text{
	color: red;
	font-size: 30upx;
}

.blog_item{
	border-bottom: 1px #eee solid;
	margin-bottom: 20upx;
}

</style>