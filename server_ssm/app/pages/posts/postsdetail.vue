<template>
	<view>
		<u-navbar title="详细信息" :border="true" :placeholder="true" @leftClick="goBack"></u-navbar>
		<scroll-view :enable-flex="true" class="svcontainer">
			<image v-if="fobj.img" style="width: 100%;" :src="fileUrl+fobj.img" mode="widthFix"></image>
			<view class="formitem">
				<view class="gprice">标题:{{fobj.title}}</view>
			</view>
			<view class="formitem">
				<view class="gtitle">{{fobj.username}}</view>
			</view>
			<view class="formitem">
				<u-parse :content="fobj.note" />
			</view>
			
			<!-- <view class="formitem">
				<view @click="toggleFav">
					<image :src="faviconurl" style="width: 60upx;height: 60upx;" mode="heightFix"></image>
					<text>{{this.fobj.favcount}}</text>
				</view>
			</view> -->
			
			<view class="hpaddingctn">
				<u-button @click="toChat()" text="私信"></u-button>
			</view>
			
			<imgList imgSize="20" tName="username" :showSearch="false" :showArrow='false' :dataList='replaylist' titleName="ndate" sName='note'></imgList>
		
		
			<view class="hpaddingctn">
				<u--textarea v-model="rnote" placeholder="发表你的评论吧" confirmType="done"></u--textarea>
			</view>
			
			<view class="hpaddingctn">
				<u-button @click="replay()" text="评论"></u-button>
			</view>
			
		</scroll-view>
	</view>
</template>

<script>
	import { savej, listj, findj, fileUrl } from '@/common/config/api.js';
	import {mapState, mapActions} from 'vuex';
	import { ideautil, yewuutil } from '@/common/commontools.js';
	import imgList from '@/components/img-list.vue';
	export default {
		components:{ imgList },
		data() {
			return {
				id: null,
				fileUrl: fileUrl,
				favtext: "加入收藏",
				fobj: {},
				replaylist: [],
				rnote: '',
				pingfen:0,
				favblur:'http://ideapic-1255600738.cos.ap-guangzhou.myqcloud.com/images/icons/favblur.png',
				favfocus:'http://ideapic-1255600738.cos.ap-guangzhou.myqcloud.com/images/icons/favfocus.png',
				faviconurl:''
			};
		},
		onLoad(params) {
			this.id = params.id
			this.fobjDetail()
		},
		methods: {
			...mapActions(['setCar']),
			toPosts: yewuutil.toPosts,
			fobjDetail() {
				findj({params: {table: 'posts', id: this.id}}).then(res => {
					this.fobj = res
					this.checkFavs()
					this.listReplay()
				}).catch(err => {
					
				})
			},
			toggleFav() {
				let myfavs = this.userInfo.favs
				let favcount = this.fobj.favcount || 0
				console.log("favs:"+myfavs)
				if (this.faviconurl == this.favblur) {
					if (myfavs && myfavs != '0') {
						myfavs += ","+this.fobj.id
					}else{
						myfavs = this.fobj.id+""
					}
					favcount += 1
				}else {
					myfavs = ideautil.removeStrInStr(this.fobj.id, myfavs) || "0"
					favcount -= 1
				}
				this.fobj.favcount = favcount
				savej({ params: { table: "user", favs: myfavs, id: this.userInfo.id } }).then(res => {
					this.userInfo.favs = myfavs
					this.checkFavs()
					savej({params: {table: "posts",id: this.fobj.id, favcount: this.fobj.favcount }}).then(res => {
						
					}).catch(err => {
					 
					})
				}).catch(err => {
					
				})
			},
			checkFavs() {
				this.faviconurl = this.favblur
				let myfavs = this.userInfo.favs
				let isfav = ideautil.checkStrInStr(this.fobj.id+"",myfavs)
				if (isfav) {
					this.faviconurl = this.favfocus
				}
			},
			
			goBack(){
				uni.itool.nto({
					url: '/pages/posts/posts?type='+this.fobj.type
				})
			},
			toChat(){
				uni.ytool.toChatUni(this.fobj.uid)
			},
			listReplay(){
				listj({params: {table: 'replay', pid: this.fobj.id, type: 3}}).then(res => {
					this.replaylist = res
				}).catch(err => {
				 
				})
			},
			replay(){
				if(this.rnote){
					let fdata = {
						table:"replay",
						pid: this.fobj.id,
						note: this.rnote,
						uid: this.userInfo.id,
						username: this.userInfo.username,
						type: 3
					}
					savej({params: fdata}).then(res => {
						this.listReplay()
						this.rnote = ""
					}).catch(err => {
					 
					})
				}
			}
		},
		computed: {
			...mapState(['carlist', 'userInfo'])
		}
	}
</script>

<style lang="scss">
	
</style>
