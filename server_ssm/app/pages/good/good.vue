<template>
	<view>
		<u-navbar title="管理服务" :border="true" :placeholder="true" rightText="新增" @rightClick="goodMg" @leftClick="goBack"></u-navbar>
		<scroll-view :enable-flex="true" class="svcontainer">
			<!-- <u-list @scrolltolower="scrolltolower" >
				<u-list-item v-for="(item,index) in fobjList" :key="item.id">
					<u-cell @click="goodMg(item.id)" :title="item.gname" isLink />
				</u-list-item>
			</u-list> -->
			<imglist imgName="img" imgSize="1" titleName="gname" @clickItem='goodMg' :dataList='fobjList' tName='statecn' ></imglist>
		</scroll-view>
	</view>
</template>

<script>
	import { listj, findj, savej, fileUrl } from '@/common/config/api.js';
	import {mapState, mapActions} from 'vuex';
	import imgList from '@/components/img-list.vue';
	export default {
		data() {
			return {
				fobjList: []
			};
		},
		components:{imgList},
		onLoad(params) {
			let sid = this.userInfo.sid;
			listj({params: {table: 'good', sid: sid}}).then(res => {
				this.fobjList = res
			}).catch(err => {
			 
			})
		},
		onShow() {
			
		},
		methods: {
			...mapActions(['updateUserInfo']),
			goodMg(id){
				console.log("------------------>:aid:"+id)
				uni.itool.nto({
					url:'./goodmg?tid='+id
				})
			},
			goBack(){
				uni.itool.nto({
				    url:'/pages/index/index'
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