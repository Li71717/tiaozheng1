<template>
	<view>
		<u-navbar title="订单详情" @leftClick="goBack" :border="true" :placeholder="true"></u-navbar>
		

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
				<view class="formlabel" @tap="toChat">联系人:{{fobj.address}}</view>
			</view>
			<view class="formitem">
				<view class="formlabel">订单日期:{{fobj.ndate}}</view>
			</view>

			<view>
				
				<u-popup :closeable="true" @close="popshow=false" :show="popshow" mode="bottom">
					<view class="dialogctn">
						<form>
							<u-form-item borderBottom label-width="76" label=":" prop="kdgs">
								<u--input border="none" v-model="fobj.kdgs" />
							</u-form-item>
							<u-form-item borderBottom label-width="76" label=":" prop="kddh">
								<u--input border="none" v-model="fobj.kddh" />
							</u-form-item>
						</form>
						<view class="formitem">
							<view class="hpaddingctn">
								<u-button type="primary" text="" @click="fahuo()" />
							</view>
						</view>
					</view>
				</u-popup>
			</view>
			<view class="formitem" v-if="fobj.statecn==='已接单'">
<!--				<u-button type="primary" @click="popshow=true" text="立即发货"></u-button>-->
<!--				<view class="hpaddingctn">
					<u-button type="error" @click="changeBillStatecn('已取消')" text="取消订单"></u-button>
				</view>-->
        <view class="formitem" style="display: flex;">
<!--            <view style="padding: 20rpx;flex: 1;">
              <u-button @click="changeBillStatecn('已取消')" type="warning" text="取消订单"></u-button>
            </view>-->
            <view style="padding: 20rpx;flex: 1;">
              <u-button @click="changeBillStatecn('已完成')" type="success" text="已完成"></u-button>
            </view>
        </view>
			</view>

      <view class="formitem" v-if="fobj.statecn==='已付款'">
        <!--				<u-button type="primary" @click="popshow=true" text="立即发货"></u-button>-->
        <!--				<view class="hpaddingctn">
                  <u-button type="error" @click="changeBillStatecn('已取消')" text="取消订单"></u-button>
                </view>-->

<!--          <view style="padding: 20rpx;flex: 1;">
            <u-button @click="changeBillStatecn('已接单')" type="success" text="已接单"></u-button>
          </view>-->
          <view  style="display: flex;">
            <view style="padding: 20rpx;flex: 1;">
              <u-button @click="changeBillStatecn('已接单')" type="warning" text="已接单"></u-button>
            </view>
            <view style="padding: 20rpx;flex: 1;">
              <u-button @click="changeBillStatecn('已取消')" type="success" text="婉拒订单"></u-button>
            </view>
          </view>
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
				popshow:false,
				fobj: {},
				fobjgoodlist: [],
				fileUrl: fileUrl,
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
				this.fobj.table = "bill"
				let gids = this.fobj.gids
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
		},
		methods: {
			...mapActions(['updateUserInfo']),
      toChat(){
        uni.ytool.toChatUni(this.fobj.uid)
      },
			changeBillStatecn:function(statecn){
				this.fobj.statecn = statecn
				savej({params: {table: 'bill', id: this.fobj.id, statecn: statecn}}).then(res => {
					if(statecn == '已完成'){

              findj({params: {table: 'user', id: this.fobj.sid}}).then(tuser => {
                let ol = tuser.money || 0
                let tc = ((this.fobj.total*1)*0.9).toFixed(0)
                let nl = (ol*1)+(tc*1)
                if(this.userInfo.id == this.fobj.sid){
                  this.userInfo.money = nl
                  this.updateUserInfo(this.userInfo)
                }
                savej({params: {table: 'user', id: this.fobj.sid, money: nl }}).then(res => {

                })
              })

					}
				}).catch(err => {
				 
				})
			},
			doShouhou(statecn){
				this.fobj.shstatecn = statecn
				savej({params: {table: 'bill', id: this.fobj.id, shstatecn: this.fobj.shstatecn}}).then(res => {
					
				}).catch(err => {
				 
				})
			},
			
			pingjia:function(){
				this.fobj.statecn = "已完成"
				this.fobj.pnote = this.rnote
				this.fobj.pf = this.pingfen
				savej({params: {table: 'bill',id: this.fobj.id, pf: this.fobj.pf, pnote: this.fobj.pnote, statecn: this.fobj.statecn}}).then(res => {
					
				}).catch(err => {
				 
				})
			},

			goBack() {
				uni.itool.nto({
					url:'/pages/bill/billshop'
				})
			},
			toGoodDetail: yewuutil.toGoodDetail,
			
			fahuo(){
				let passwd = this.passwd;
				let userpasswd = this.userInfo.passwd
				
				this.fobj.statecn = '已接单'
				savej({params: {table: 'bill', statecn: this.fobj.statecn, id: this.fobj.id,kdgs:this.fobj.kdgs,kddh:this.fobj.kddh}}).then(res => {
					this.popshow = false
				}).catch(err => {
				 
				})
				
			},
			toShouhou(){
				uni.itool.nto({
					url:'billservice?tid='+this.fobj.id
				})
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
