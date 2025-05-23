<template>
	<view>
		<u-navbar :title="ptitle" :border="true" :placeholder="true"  @leftClick="goBack" :autoBack="false"></u-navbar>
		<scroll-view :enable-flex="true" class="svcontainer">
			<!-- <u-list @scrolltolower="scrolltolower" >
				<u-list-item v-for="(item,index) in fobjList" :key="item.id">
					<u-cell @click="postsMg(item.id)" :title="item.gname" isLink />
				</u-list-item>
			</u-list> -->
			<view class="hpaddingctn">
				<u-button type="primary" text="新增" @click="postsMg()" />
			</view>
			<imglist :imgSize="2" sType="1" titleName="title" @clickItem='postsMg' :dataList='fobjList' tName="username" sName='ndate' ></imglist>
			
		</scroll-view>
	</view>
</template>

<script>
	import { listj, findj, savej, fileUrl } from '@/common/config/api.js';
	import {mapState, mapActions} from 'vuex';
	import imgList from '@/components/img-list.vue';
	import { ideautil, yewuutil } from '@/common/commontools.js';
	export default {
		data() {
			return {
				fobjList: [],
				ftype:1,
				ptitle:"交流互动"
			};
		},
		components:{imgList},
		onLoad(params) {
			let uid = this.userInfo.id
			this.ftype = params.type || 1
			if (this.ftype=="1") {
				this.ptitle = "我的发帖"
			}else{
				this.ptitle = "我的发布"
			}
			listj({params: {table: 'posts', uid: uid, type:this.ftype}}).then(res => {
				this.fobjList = res
			}).catch(err => {
			 
			})
		},
		onShow() {
			
		},
		methods: {
			...mapActions(['updateUserInfo']),
			postsMg(id){
				console.log("------------------>:aid:"+id)
				uni.itool.nto({
					url:'./postsmg?totype=2&type='+this.ftype+'&tid='+id
				})
			},
			goBack(){
				uni.itool.nto({
					url:'/pages/me/me'
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