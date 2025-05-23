<template>
	<view>
		<u-navbar title="订单详情" :border="true" :placeholder="true" @leftClick="goBack" :autoBack="false"></u-navbar>
		

		<scroll-view :enable-flex="true" class="svcontainer">
			<view class="formitem">
				<view class="formlabel" style="color: red;">总价:{{fobj.total}}元</view>
			</view>
			<view class="formitem">
				<view class="formlabel">服务信息:{{fobj.gnames}}</view>
			</view>
      <view class="formitem" v-if="fobj.ydate">
        <view class="formlabel">预约时间:{{fobj.ydate}}</view>
      </view>
			<view class="formitem">
				<view class="formlabel" style="color: red;">状态:{{fobj.statecn}}</view>
			</view>
			<view class="formitem">
				<view class="formlabel">联系人:{{fobj.address}}</view>
			</view>
<!--			<view class="formitem" v-if="fobj.shop" @tap="toChat">
				<view class="formlabel">服务人员:{{fobj.shop}}</view>
			</view>-->
      <view v-if="fobj.shop" class="formitem" style="display: flex;">
          <view style="padding: 20rpx;flex: 1;">
            <view class="formlabel">服务人员:{{fobj.shop}}</view>
          </view>
          <view style="padding: 20rpx;flex: 1;">
            <u-button @click="toChat" type="error" text="联系TA"></u-button>
          </view>
      </view>
			<view class="formitem">
				<view class="formlabel">订单日期:{{fobj.ndate}}</view>
			</view>
			<view>
				
				<u-popup :closeable="true" @close="popshow=false" :show="popshow" mode="bottom">
					<view class="dialogctn">
						<u--form>
							
							<view class="formitem">
								<view style="margin-bottom: 30upx;" class="formlabel">可用优惠券:</view>
								<u-radio-group placement="column" @change="toggleTotal">
									<u-radio
										:customStyle="{marginBottom: '15px'}"
										v-for="(item, index) in yhqlist"
										:key="index"
										:label="item.total>0?'优惠券金额:'+item.total:'无优惠券/不使用'"
										:name="item.id"
							
									>
									</u-radio>
								</u-radio-group>
							</view>
								
							<view class="formitem">
								<view class="formlabel">支付金额:<text style="color: red;font-size: 40upx;">{{fobj.total}}</text>元</view>
							</view>
							<u-form-item borderBottom label-width="76" label="支付密码:" prop="passwd">
								<u--input border="none" type="password" v-model="passwd" />
							</u-form-item>
							
							<view class="formitem">
								<button type="primary" @click="payBill()">确认支付</button>
							</view>
						</u--form>
					</view>
				</u-popup>
			</view>
			<view class="formitem" v-if="fobj.statecn==='待付款'">
				<u-button type="primary" @click="popshow=true" text="立即付款"></u-button>
				<view class="hpaddingctn">
					<u-button type="error" @click="changeBillStatecn('已取消')" text="取消订单"></u-button>
				</view>
			</view>
			
			<view class="formitem" v-if="fobj.statecn==='已接单'">
<!--				<u-button type="primary" @click="changeBillStatecn('待评价')" text="确认收货"></u-button>-->
			</view>
			
			<view class="hpaddingctn" v-if="fobj.statecn==='已完成'">
				<tn-rate v-model="pingfen" :size="54"></tn-rate>
			</view>
					
			<view class="hpaddingctn" v-if="fobj.statecn==='已完成'">
				<tn-input v-model="rnote" type="textarea" :border="true" :height="100" :autoHeight="true" />
			</view>
			
			<view class="hpaddingctn" v-if="fobj.statecn==='已完成'">
				<tn-button @click="pingjia()" backgroundColor="tn-bg-blue" fontColor="#FFFFFF" width="100%">提交评价
				</tn-button>
			</view>
			<view class="hpaddingctn" v-if="fobj.statecn==='已完成' && !fobj.shstatecn">
				<!--<u-button @click="toShouhou" text="申请售后" type="warning"></u-button>-->
			</view>
			<view class="hpaddingctn" v-if="fobj.shstatecn==='待处理'">
				<text class="">售后详情:</text>
				<view class="formitem">
					<view class="formlabel">描述:{{fobj.shnote}}</view>
				</view>
				<view class="formitem">
					<view class="formlabel">售后方式:{{fobj.shtype}}</view>
				</view>
				<view class="formitem">
					<view class="formlabel" style="color: red;">售后状态:{{fobj.shstatecn}}</view>
				</view>
				<u-button @click="qxShouhou" text="取消售后" type="warning"></u-button>
			</view>
			<view class="formitem" v-if="fobj.pnote">
				<view class="formlabel">客户评论:{{fobj.pnote}}</view>
			</view>
			<view>
				<view @click="toGoodDetail(item.id, 1)" class="caritem" v-for="(item,index) in fobjgoodlist" :key="index">
					<image class="carimg" :src="fileUrl+item.img"></image>
					<view class="carinfo">
						<view class="cartitle">{{item.gname}}</view>
						<view class="carpricectn">
							<view class="carprice">价格:{{item.price}}</view>
						</view>
					</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import {
		listj,
		findj,
		savej,
		listSqlj,
		deletej,
		fileUrl
	} from '@/common/config/api.js';
	import { ideautil, yewuutil } from '@/common/commontools.js';
	import {
		mapState,
		mapActions
	} from 'vuex'
	export default {
		data() {
			return {
				paytotal:0,
				yhq:null,
				yhqlist:[],
				popshow:false,
				fobj: {},
				fobjgoodlist: [],
				fileUrl: fileUrl,
				passwd:'',
				pingfen:0,
				rnote:''
			};
		},
		onLoad(params) {
			let bid = params.bid
			findj({
				params: {
					table: 'bill',
					id: bid
				}
			}).then(res => {
				this.fobj = res
				this.paytotal = this.fobj.total
				let gids = this.fobj.gids;
				let sql = `select * from wct_good where id in (${gids})`;
				listSqlj({
					params: {
						sql: sql
					}
				}).then(glist => {
					this.fobjgoodlist = glist
				}).catch(err => {

				})
			}).catch(err => {})
			this.getYouhuiquan()
		},
		methods: {
			...mapActions(['updateUserInfo']),
      toChat(){
          uni.ytool.toChatUni(this.fobj.sid)
      },
			getYouhuiquan(){
				listj({params: {table: 'youhuiquan',uid:this.userInfo.id, statecn:"正常" }}).then(yhl => {
					let yhlist = []
					for (let i = 0; i < yhl.length; i++) {
						let yhq = yhl[i]
						if (yhq.total<=this.fobj.total) {
							yhlist.push(yhq)
						}
					}
					this.yhqlist = yhlist
					
					this.yhqlist.unshift({id:0,total:0})
				}).catch(err => {
				 
				})
			},
			changeBillStatecn:function(statecn){
				this.fobj.statecn = statecn
				savej({params: {table: 'bill', id: this.fobj.id, statecn: statecn}}).then(res => {
					
				}).catch(err => {
				 
				})
			},
			qxShouhou(){
				this.fobj.shstatecn = '已取消'
				savej({params: {table: 'bill', id: this.fobj.id, shstatecn: this.fobj.shstatecn}}).then(res => {
					
				}).catch(err => {
				 
				})
			},
			
			pingjia:function(){
				this.fobj.statecn = "已验收"
				this.fobj.pnote = this.rnote
				this.fobj.pf = this.pingfen
				savej({params: {table: 'bill',id: this.fobj.id, pf: this.fobj.pf, pnote: this.fobj.pnote, statecn: this.fobj.statecn}}).then(res => {
          this.chargeUser(this.fobj.sid,(this.fobj.tc||0))
          let fdata = {
            table:"replay",
            pid: this.fobj.gids,
            note: this.rnote,
            uid: this.userInfo.id,
            username: this.userInfo.username,
            type: 1
          }
          savej({params: fdata}).then(res => {

          })
				}).catch(err => {
				 
				})
			},

      chargeUser(uid, total){
        findj({params: {table: 'user', id: uid}}).then(tuser => {
          let ol = tuser.money || 0
          let nl = ol*1+total*1
          if(this.userInfo.id == uid){
            this.userInfo.money = nl
            this.updateUserInfo(this.userInfo)
          }
          savej({params: {table: 'user', id: uid, money: nl }}).then(res => {

          })
        })
      },

			goBack() {
				uni.itool.nto({
					url:'/pages/bill/bill'
				})
			},
			toGoodDetail: yewuutil.toGoodDetail,
			
			payBill(){
				let passwd = this.passwd;
				let userpasswd = this.userInfo.passwd
				if(passwd == userpasswd){
					let mymoney = (this.userInfo.money||0)*1
					if (mymoney*1<this.paytotal) {
						uni.showToast({
							icon:'none',
							title: '余额不足!',
							success:()=>{
								setTimeout(()=>{
									uni.itool.nto({
										url:'/pages/qianbao/charge'
									})
								},1500)
							}
						})
					}else{
						mymoney = mymoney-this.paytotal
						savej({params: {table: 'user', id: this.userInfo.id, money: mymoney }}).then(res => {
							this.userInfo.money = mymoney
							this.updateUserInfo(this.userInfo)
							this.billCommit()
						})
					}
					
				}else{
					uni.showToast({
						title: '密码错误',
						icon : 'error'
					})
				}
			},
			billCommit(){
				let statecn = '已付款'
				savej({params: {table: 'bill', statecn: statecn, id: this.fobj.id}}).then(res => {
					this.fobj.statecn = statecn
					this.popshow = false
					
					if (this.yhq) {
						savej({params: {table: 'youhuiquan', id:this.yhq.id, statecn: "已使用" }})
					}
					uni.showToast({
						icon:'none',
						title: '操作成功!'
					})
				}).catch(err => {
				 
				})
			},
			toShouhou(){
				uni.itool.nto({
					url:'billservice?tid='+this.fobj.id
				})
			},
			toggleTotal(n){
				if (n>0) {
					findj({params: {table: 'youhuiquan', id: n}}).then(yhq => {
						this.yhq = yhq
						this.fobj.total=this.paytotal-yhq.total
					}).catch(err => {
					 
					})
				}else{
					this.yhq = null
					this.fobj.total=this.paytotal
				}
				
				
			}
		},
		computed: {
			...mapState(['userInfo'])
		}
	}
</script>

<style lang="scss">
	.caritem {
		display: flex;
		width: 100%;
		height: 200upx;
		background-color: #fafafa;
		align-items: center;
		padding: 10upx;
		margin: 10upx 0;
	}

	.carimg {
		width: 180upx;
		height: 180upx;
		margin-right: 10upx;
	}

	.carinfo {
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		flex: 1;
	}

	.cartitle {
		font-size: 26upx;
	}

	.carpricectn {
		display: flex;
		justify-content: space-between;
		width: 100%;
	}

	.carprice {
		color: red;
		font-size: 25upx;
	}
</style>
