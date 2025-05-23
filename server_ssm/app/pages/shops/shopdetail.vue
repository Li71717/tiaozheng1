<template>
	<view>
		<u-navbar :title="fobj.sname" :border="true" :placeholder="true"   :autoBack="true"></u-navbar>
		<scroll-view :enable-flex="true" class="svcontainer">
			
			<!-- <view class="formitem">
				<view class="gtitle">{{fobj.sname}}</view>
			</view> -->
			<view class="formitem">
				<view class="formlabel">地址:{{fobj.address}}</view>
			</view>
			<view class="formitem">
				<view class="formlabel">电话:{{fobj.tel}}</view>
			</view>
			<image class="showimg" :src="fileUrl+fobj.img" mode="widthFix"></image>

			<u-parse :content="fobj.note" />
			
			<imgList :imgSize="20" tName="username" :showSearch="false" :showArrow='false' :dataList='replaylist' titleName="ndate" sName='note'></imgList>
		
		
			<view class="hpaddingctn">
				<u--textarea v-model="rnote" placeholder="发表你的评论吧" confirmType="done"></u--textarea>
			</view>
			
			<view class="hpaddingctn">
				<u-button @click="replay()" text="评论"></u-button>
			</view>
			<view class="footerctn">
				<!-- <navigator url="#" class="carbtn" @click="toggleFav()">{{favtext}}</navigator> -->
				<navigator url="#" class="gmbtn" @click="shopGoods(fobj.id)">服务列表</navigator>
				<!-- <navigator url="#" class="scbtn" @click="shopGoods(fobj.id)"></navigator> -->
			</view>
			
			<tn-tips
			  ref="tips"
			></tn-tips>
		</scroll-view>
	</view>
</template>

<script>
	import { savej, listj, findj, fileUrl } from '@/common/config/api.js'
	import {mapState, mapActions} from 'vuex'
	import { ideautil, yewuutil } from '@/common/commontools.js'
	import imgList from '@/components/img-list.vue'
	export default {
		components:{ imgList  },
		data() {
			return {
				pid: null,
				fileUrl: fileUrl,
				fobj: {},
				replaylist: [],
				rnote: ''
			};
		},
		onLoad(params) {
			this.pid = params.pid
			this.fobjDetail()
		},
		methods: {
			...mapActions(['setCar']),
			fobjDetail() {
				findj({params: {table: 'shop', id: this.pid}}).then(res => {
					this.fobj = res
					this.fobj.note = ideautil.getHtmlNote(this.fobj.note)
					this.checkFavs()
					this.listReplay()
					this.putHistory()
				}).catch(err => {
					
				})
			},

			shopGoods(sid){
				uni.itool.nto({
					url: '/pages/good/goodview?sid='+sid
				})
			},
			toggleFav() {
				let myfavs = this.userInfo.favs
				console.log("favs:"+myfavs)
				if (this.favtext == "加入收藏") {
					if (myfavs && myfavs != '0') {
						myfavs += ","+this.fobj.id
					}else{
						myfavs = this.fobj.id+""
					}
				}else {
					myfavs = ideautil.removeStrInStr(this.fobj.id, myfavs) || "0"
				}
				
				savej({ params: { table: "user", favs: myfavs, id: this.userInfo.id } }).then(res => {
					this.userInfo.favs = myfavs
					this.checkFavs()
				}).catch(err => {
					
				})
			},
			checkFavs() {
				this.favtext = "加入收藏"
				let myfavs = this.userInfo.favs
				let isfav = ideautil.checkStrInStr(this.fobj.id+"",myfavs)
				if (isfav) {
					this.favtext = "移除收藏"
				}
			},
			
			goBack(){
				uni.navigateBack({
					delta:1
				})
			},
			openMap(){
				let latitude = this.fobj.latitude*1
				let longitude = this.fobj.longitude*1
				let address = this.fobj.address
				console.info("latitude:"+latitude+" longitude:"+longitude+" address:"+address)
				uni.openLocation({
					latitude:latitude,
					longitude:longitude,
					address:address,
					success:function(e){
						console.log(e)
					},
					fail:function(e){
						console.log(e)
					}
				})
			},

			listReplay(){
				listj({params: {table: 'replay', pid: this.fobj.id, type: 1}}).then(res => {
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
						type: 1
					}
					savej({params: fdata}).then(res => {
						this.listReplay()
						this.showpl = false
						this.$refs.tips.show({
						  msg: '操作成功!'
						})
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
	
	.gprice{
		font-size: 26upx;
		color:red;
	}
	.gtitle{
		font-size: 26upx;
		padding: 10upx 0;
	}
	.footerctn{
		position: fixed;
		display: flex;
		align-items: center;
		align-content: stretch;
		flex-direction: row-reverse;
		height: 100upx;
		background-color: #ddd;
		left: 0;
		bottom: 0;
		width: 100%;
		justify-content: flex-start;
		z-index: 999;
	}
	
	.gmbtn{
		width: 200upx;
		text-align: center;
		background-color: #e45656;
		color: #fff;
		height: 100%;
		line-height: 100upx;
	}
	.carbtn{
		width: 200upx;
		text-align: center;
		background-color: #18b566;
		color: #fff;
		height: 100%;
		line-height: 100upx;
	}
	.scbtn{
		width: 200upx;
		text-align: center;
		background-color: #fb8b05;
		color: #fff;
		height: 100%;
		line-height: 100upx;
		margin-right: auto;
	}
	
	.showimg{
		width: 100%;
	}
</style>
