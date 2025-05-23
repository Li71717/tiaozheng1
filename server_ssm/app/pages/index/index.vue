<template>
	<view>
		<!-- <uni-nav-bar statusBar="true" fixed="true" title="首页" shadow></uni-nav-bar> -->
		<u-navbar title="首页" leftIconSize="0" :border="true" :placeholder="true"  :autoBack="true"></u-navbar>
		<scroll-view :enable-flex="true" class="svcontainer">
			<swiper :circular="true" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
				<swiper-item @click="toNotice" v-for="(item,index) in noticelist">
					<image class="swiperimg" :src="fileUrl+item.img"></image>
				</swiper-item>
			</swiper>
<!--			<view class="gridmenu">
				<view class="gridmenuitem">
					<navigator url="/pages/good/goodtuijian">
						<image class="gridmenuicon" src="http://ideapic-1255600738.cos.ap-guangzhou.myqcloud.com/image/my/my17.png"></image>
						<text class="gridmenutitle">推荐</text>
					</navigator>

				</view>
				<view class="gridmenuitem" @click="toShops">
					<image class="gridmenuicon" src="http://ideapic-1255600738.cos.ap-guangzhou.myqcloud.com/image/my/my13.png"></image>
					<text class="gridmenutitle">商家</text>
				</view>
				<view class="gridmenuitem">
          <navigator url="/pages/notice/notice2">
            <image class="gridmenuicon" src="http://ideapic-1255600738.cos.ap-guangzhou.myqcloud.com/image/my/my2.png"></image>
            <text class="gridmenutitle">营销策略</text>
          </navigator>
				</view>
				<view class="gridmenuitem" @click="toGoodNew()">
					<image class="gridmenuicon" src="http://ideapic-1255600738.cos.ap-guangzhou.myqcloud.com/image/my/my9.png"></image>
					<text class="gridmenutitle">新品</text>
				</view>
				<view class="gridmenuitem" @click="toPosts()">
					<image class="gridmenuicon" src="http://ideapic-1255600738.cos.ap-guangzhou.myqcloud.com/image/my/my5.png"></image>
					<text class="gridmenutitle">交流互动</text>
				</view>
			</view>-->
		<view class="formitem" style="display: flex;" v-if="userInfo.roletype=='3' && userInfo.statecn=='通过'">
        <view style="padding: 20rpx;flex: 1;">
          <navigator url="/pages/bill/billshop">
            <u-button type="warning" text="管理订单"></u-button>
          </navigator>
        </view>
        <view style="padding: 20rpx;flex: 1;">
          <navigator url="/pages/good/good">
            <u-button type="success" text="服务发布"></u-button>
          </navigator>
        </view>
			</view>
      <view class="formitem" style="display: flex;" v-if="userInfo.roletype=='3' && userInfo.statecn=='通过'">
        <view style="padding: 20rpx;flex: 1;">
          <navigator url="/pages/bill/billgongzi">
            <u-button type="error" text="工资详情"></u-button>
          </navigator>
        </view>
<!--        <view style="padding: 20rpx;flex: 1;">
          <navigator url="/pages/bill/billshop">
            <u-button type="warning" text="管理订单"></u-button>
          </navigator>
        </view>-->
        <view style="padding: 20rpx;flex: 1;">
          <navigator url="/pages/notice/notice2">
            <u-button type="primary" text="培训资料"></u-button>
          </navigator>
        </view>
      </view>
      <view v-if="userInfo.roletype=='2'" class="formitem" style="display: flex;">

          <view style="padding: 20rpx;flex: 1;">
              <navigator url="/pages/good/goodtuijian">
                  <u-button type="error" text="为我推荐"></u-button>
              </navigator>
          </view>
      </view>
			<u-tabs :list="typelist" keyName="title" @change="refreshGood"></u-tabs>
			<imglist imgName="img" sName="type" tName="price" tLabel="价格:" imgSize="pubu" titleName="gname" :dataList="fobjList" @clickItem="toGoodDetail"></imglist>
      <view>
          <u-divider text="服务人员:"></u-divider>
      </view>
      <imglist @clickItem="user3Detail" img-name="img" :dataList="user3list" :imgSize="10" titleName="fname" sName="note" tName="jn" ></imglist>
		</scroll-view>
	</view>
</template>

<script>
	import { listj, findj, fileUrl } from '@/common/config/api.js'
	import { ideautil, yewuutil } from '@/common/commontools.js'
	import {mapState, mapActions} from 'vuex'
	
	
	export default {
		data() {
			return {
				title: '首页',
				noticelist: [],
				searchstr:'',
				fileUrl: fileUrl,
				fobjList: [],
				typelist: [],
        user3list:[]
			}
		},
		onLoad() {
			let username = this.userInfo && this.userInfo.username
			let passwd = this.userInfo && this.userInfo.passwd
			let openid = this.userInfo && this.userInfo.openid
			
			console.log(`username:${username} passwd ${passwd} openid ${openid}`)
			
			if (openid) {
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
			}
			
			
			listj({params: {table: 'notice', type: 1}}).then(res => {
				if (res.length && res.length > 5) {
					this.noticelist = res.slice(0,5)
				} else{
					this.noticelist = res
				}
				
			})

      listj({params: {table: 'user', roletype:3 }}).then(res => {
      	this.user3list = res
      })
			listj({params: {table: 'good', statecn:'上架中'}}).then(res => {
				this.fobjList = res
			}).catch(err => {
				
			})
			
			listj({params: {table: 'type'}}).then(res => {
				this.typelist = res || []
				this.typelist.unshift({id:0,title:"全部"})
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
			toIndex2(){
				uni.itool.nto({
					url:'/pages/index/indexfenlei'
				})
			},
      user3Detail(id){
        uni.itool.nto({
          url: '/pages/user3/user3detail?id='+id
        })
      },
			refreshGood(index){
				console.log(index);
				let typeid = null
				if(index){
					typeid = index.id==0?null:index.id
				}
				
				listj({params: {table: 'good', gname: this.searchstr,typeid: typeid, statecn:'上架中'}}).then(res => {
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
			toBillShop(){
				uni.itool.nto({
					url:"/pages/bill/billshop"
				})
			},
			toBillqs(){
				uni.itool.nto({
					url:"/pages/bill/billqs"
				})
			},
			toDitui(){
				uni.itool.nto({
					url:'/pages/ditui/ditui'
				})
			},
			toPosts(){
				uni.itool.nto({
					url:'/pages/posts/posts'
				})
			},
			toBrand(){
				uni.itool.nto({
					url:'/pages/brand/brand'
				})
			},
			toGoodNew(){
				uni.itool.nto({
					url:'/pages/good/goodview?stype=新品'
				})
			},
			toGoodSale(){
				uni.itool.nto({
					url:'/pages/good/goodview?stype=热销'
				})
			},
			toGoodTejia(){
				uni.itool.nto({
					url:'/pages/good/goodview?stype=特价'
				})
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
