<template>
	<view>
		<u-navbar title="服务详情" :border="true" :placeholder="true"   :autoBack="true"></u-navbar>
		<scroll-view :enable-flex="true" class="svcontainer">
			<image v-if="fobj.img" class="showimg" :src="fileUrl+fobj.img" mode="widthFix"></image>
			<view class="formitem">
				<view class="gprice">价格:{{fobj.price}}</view>
			</view>
			<view class="formitem">
				<view class="gtitle">{{fobj.gname}}</view>
			</view>
       <view class="formitem">
        <view @tap="user3Detail" class="gtitle" style="color: #0a66c2;">服务人员:{{fobj.shop}}</view>
      </view>
			<u-parse :content="fobj.note" />
<!--			<view class="hpaddingctn">
				<button @click="toChat" type="default">联系客服</button>
			</view>-->
			<view>
			    <u-divider text="评论列表:"></u-divider>
			</view>
			<imglist :showArrow='false' :showSearch="false"  :dataList="replaylist" :imgSize="20" titleName="ndate" sName="note" tName="username" ></imglist>
			
		
<!--			<view class="hpaddingctn" v-show="showpl">
				<tn-rate v-model="pingfen" :size="54"></tn-rate>
			</view>-->
		
			<view class="hpaddingctn" v-show="showpl">
				<tn-input v-model="rnote" type="textarea" :border="true" :height="100" :autoHeight="true" />
			</view>
			
			<view class="hpaddingctn" v-show="showpl">
				<tn-button @click="replay()" backgroundColor="tn-bg-blue" fontColor="#FFFFFF" width="100%">评论
				</tn-button>
			</view>

<!--      <view class="formitem">
        <u-radio-group v-model="ggid" placement="column">
          <u-radio
              :customStyle="{marginBottom: '15rpx', marginTop: '15rpx'}"
              v-for="(item,index) in guigelist"
              :key="index"
              :label="item.title"
              :name="item.id"
          >
          </u-radio>
        </u-radio-group>
      </view>-->
      <view>
        <u-divider text="服务人员:"></u-divider>
      </view>
      <imglist :show-search="false" @clickItem="user3Detail" img-name="img" :dataList="user3list" :imgSize="10" titleName="fname" sName="note" tName="jn" ></imglist>
			
			<view class="footerctn">
				<navigator url="#" class="gmbtn" @click="goumai()">提交</navigator>
<!--				<navigator url="#" class="carbtn" @click="addCar()">加入购物车</navigator>-->
<!--				<navigator url="#" class="showcarbtn" @click="showCar()">查看购物车</navigator>-->
				<navigator url="#" class="scbtn" @click="toggleFav()">{{favtext}}</navigator>
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
				gid: null,
				fileUrl: fileUrl,
				favtext: "加入收藏",
				fobj: {
          ggid:0
        },
				replaylist: [],
				rnote: '',
				pingfen:0,
				showpl:false,
        guigelist:[],
        ggid:0,
        pprice:0,
        user3list:[]
			};
		},
		onLoad(params) {
			this.gid = params.gid
			if (params.showpl==1) {
				this.showpl = true
			}
			this.fobjDetail()

		},
		methods: {
			...mapActions(['setCar']),
      user3Detail(){
          uni.itool.nto({
              url:'/pages/user3/user3detail?id='+this.fobj.sid
          })
      },
			fobjDetail() {
				findj({params: {table: 'good', id: this.gid}}).then(res => {
					this.fobj = res
					this.fobj.note = ideautil.getHtmlNote(this.fobj.note)
          this.pprice = this.fobj.price
          listj({params: {table: 'user', roletype:3 ,id:this.fobj.sid}}).then(res => {
            this.user3list = res
          })
					this.checkFavs()
					this.listReplay()
					this.putHistory()
          this.getGuigelist()
          if(this.fobj.sid == this.userInfo.id){
            this.showpl = true
          }
				}).catch(err => {
					
				})
			},
      getGuigelist(){
        listj({params: {table: 'guige',pid:this.fobj.id }}).then(res => {
          res.unshift({id:0,title:"单次",price:this.fobj.price})
          for (let s of res) {
              s.title = s.title+" / "+s.price+"元"
          }
        	this.guigelist = res
        })
      },
			putHistory(){
				let id = this.gid
				let hgids = uni.getStorageSync("his_ids")
				if(hgids){
					let flag = ideautil.checkStrInStr(id,hgids)
					if (!flag) {
						hgids += ","+id
					}
				}else{
					hgids = id
				}
				uni.setStorageSync("his_ids",hgids)
			},
			goumai() {
        this.carlist = []
				this.fobj.count = 1
				this.fobj.checked = true
				this.carlist.push(this.fobj)
        this.setCar([this.fobj])
        uni.itool.nto({
            url:'/pages/bill/surebill'
        })
				/*uni.itool.nto({
					url:'../shopcar/shopcar'
				})*/
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
			addCar() {
				let clist = this.carlist
				if (clist && clist.length) {
					let gid = this.fobj.id
					let flag = false
					for (let i = 0; i < clist.length; i++) {
						let cgood = clist[i]
						if (gid == cgood.id) {
							cgood.count+=1
							flag = true
							break
						}
					}
					
					
					if (flag === false) {
						this.fobj.count = 1
						this.fobj.checked = true
						clist.push(this.fobj)
					}else{
						//深度拷贝触发数组的监听改变界面
						clist = clist.splice(0)
					}
				} else{
					this.fobj.count = 1
					this.fobj.checked = true
					clist.push(this.fobj)
				}
				//this.carlist = clist
				this.setCar(clist)
				uni.showToast({
					icon:'none',
					title: '操作成功！'
				})
			},
			showCar(){
				uni.itool.nto({
					url:'/pages/shopcar/shopcar'
				})
			},
			goBack(){
				uni.navigateBack({
					delta:1
				})
			},
			toChat(){
				findj({params: {table: 'user', sid: this.fobj.sid}}).then(res => {
					if (res) {
						let shopuser = res
            uni.ytool.toChatUni(shopuser.id)
					}else{
						uni.showToast({
							icon:'none',
							title: '没有在线的客服!'
						})
					}
					
				}).catch(err => {
				 
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
    watch:{
        ggid:{
            immediate:true,
            deep:true,
            handler(news){
              if(news!=0){
                findj({params: {table: 'guige', id: news}}).then(res => {
                	  this.fobj.price = res.price
                    this.fobj.gname = this.fobj.gname+"("+res.title+")"
                })
              }else{
                this.fobj.price = this.pprice
              }
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
	
	
	.gmbtn{
		flex: 1;
		text-align: center;
		background-color: #e45656;
		color: #fff;
		height: 100%;
		line-height: 100upx;
	}
	.carbtn{
		flex: 1;
		text-align: center;
		background-color: #18b566;
		color: #fff;
		height: 100%;
		line-height: 100upx;
	}
	.scbtn{
		flex: 1;
		text-align: center;
		background-color: #fb8b05;
		color: #fff;
		height: 100%;
		line-height: 100upx;
	}
	.showcarbtn{
		flex: 1;
		text-align: center;
		background-color: #3c9cff;
		color: #fff;
		height: 100%;
		line-height: 100upx;
	}
	
	.showimg{
		width: 100%;
	}
</style>
