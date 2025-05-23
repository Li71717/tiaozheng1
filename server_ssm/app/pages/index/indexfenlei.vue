<template>
	<view>
		<!-- <uni-nav-bar statusBar="true" fixed="true" title="首页" shadow></uni-nav-bar> -->
		<u-navbar title="分类" leftIconSize="0" :border="true" :placeholder="true"  :autoBack="true"></u-navbar>
		<scroll-view :enable-flex="true">
			<swiper :circular="true" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
				<swiper-item @click="toNotice" v-for="(item,index) in noticelist">
					<image class="swiperimg" :src="fileUrl+item.img"></image>
				</swiper-item>
			</swiper>
			<view class="fenleictn">
				<view class="fenleilist">
					<view @click="refreshGood(item.id)" v-for="item,index in typelist" :key="item.id" :class="item.style">{{item.title}}</view>			
				</view>
				<view class="fenleicontent">
					<u-tabs :list="ctypelist" keyName="title" @change="refreshGood2"></u-tabs>
					<imgList :sType="1" titleName="gname" titleColor="#333" sName="type" tName="price" tColor="red" tLabel="价格:" imgName="img" imgSize="2" :dataList="fobjList" @clickItem="toGoodDetail" @clickOp="addCarIndex"></imgList>
				</view>
				
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import { listj, findj, fileUrl } from '@/common/config/api.js'
	import { ideautil, yewuutil } from '@/common/commontools.js'
	import {mapState, mapActions} from 'vuex'
	
	import imgList from '@/components/img-list.vue'
	
	
	export default {
		data() {
			return {
				title: '首页',
				noticelist: [],
				searchstr:'',
				fileUrl: fileUrl,
				fobjList: [],
				typelist: [],
				ctypelist:[]
			}
		},
		components:{imgList},
		onLoad() {
			/* let username = this.userInfo && this.userInfo.username
			let passwd = this.userInfo && this.userInfo.passwd
			let openid = this.userInfo && this.userInfo.openid
			
			console.log(`username:${username} passwd ${passwd} openid ${openid}`) */
			
			/* if (openid) {
				findj({params: {table: 'user', openid: openid}}).then(res => {
					if (res) {
						this.updateUserInfo(res)
					} else {
						this.updateUserInfo({})
						yewuutil.toLogin()
					}
				}).catch(err => {
					yewuutil.toLogin()
				})
			}else if (username && passwd) {
				findj({
					params: {
						table: 'user',
						username,
						passwd
					}
				}).then(res => {
					console.log(res)
					if (res) {
						this.updateUserInfo(res)
					} else {
						this.updateUserInfo({})
						yewuutil.toLogin()
					}
				}).catch(err => {
					yewuutil.toLogin()
				})
			}else{
				yewuutil.toLogin()
			} */
			
			
			listj({params: {table: 'notice',type:1}}).then(res => {
				if (res.length && res.length > 5) {
					this.noticelist = res.slice(0,5)
				} else{
					this.noticelist = res
				}
				
			}).catch(err => {
				
			})
			listj({params: {table: 'good', statecn:'上架中'}}).then(res => {
				this.fobjList = res
			}).catch(err => {
				
			})
			
			listj({params: {table: 'type'}}).then(res => {
				this.typelist = res
				this.typelist.unshift({id:0,title:"全部"})
				for (let tobj of this.typelist) {
					tobj.style = "fenleiitem"
				}
			}).catch(err => {
				
			})
		},
		methods: {
			...mapActions(['updateUserInfo', 'logout']),
			async listBlog(){
				let fobjList = await list({params: {table: 'blog'}});
				this.fobjList = fobjList;
			},
			toGoodDetail:yewuutil.toGoodDetail,
			toAddress: yewuutil.toAddress,
			toMyBill: yewuutil.toMyBill,
			toMyFavs: yewuutil.toMyFavs,
			toShops: yewuutil.toShops,
			refreshGood(id){
				let typeid = null
				if(id){
					typeid = id==0?null:id
				}
				for (let i=0;i<this.typelist.length;i++) {
					let tobj = this.typelist[i]
					tobj.style = "fenleiitem"
					if (tobj.id == id) {
						tobj.style = "fenleiitem fenleiitemfocus"
						if(i>0) {
							this.typelist[i-1]['style'] = "fenleiitem randbottom"
						}
						if(i<this.typelist.length-1){
							this.typelist[i+1]['style'] = "fenleiitem randtop"
							i+=1
						}
					}
				}
				
				listj({params: {table: 'good', gname: this.searchstr,typeid: typeid, statecn:'上架中'}}).then(res => {
					this.fobjList = res
					this.refreshCtype(typeid)
				})
			},
			refreshCtype(typeid){
				listj({params: {table: 'type2', pid:typeid}}).then(res => {
					this.ctypelist = res
				})
			},
			refreshGood2(index){
				console.log(index);
				let ctypeid = null
				if(index){
					ctypeid = index.id==0?null:index.id
				}
				
				listj({params: {table: 'good',ctypeid: ctypeid}}).then(res => {
					this.fobjList = res
				})
			},
			/* toGoodDetail(gid){
				uni.itool.nto({
					url:"../good/gooddetail?gid="+gid
				})
			}, */
			toNotice(){
				uni.itool.nto({
					url:"/pages/notice/notice"
				})
			},
			addCarIndex(){
				console.log("---------------------------------")
			}
		},
		watch: {
			searchstr(v){
				console.log(v);
				uni.$u.debounce(this.refreshGood, 500, false)
			}
		},
		computed: {
			...mapState(['userInfo'])
		}
	}
</script>

<style>
	
	.swiperimg{
		width: 100%;
	}
	
	.mainsearch{
		margin-top: 10upx;
	}
</style>
