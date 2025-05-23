
<template>
	<view>
		<u-navbar title="我的消息" :border="true" :placeholder="true"   :autoBack="true"></u-navbar>
		<scroll-view :enable-flex="true" class="svcontainer">
			<imglist :round="true" imgName="img" :sType="2" :imgSize="1"  :fx="false" titleName="fusername" tName="note" @clickItem="toChatFriend" :dataList="fobjlist"></imglist>
		</scroll-view>
	</view>
</template>

<script>
	import {
		listj,
		listSqlj,
		findj,
		savej,
		deletej,
		fileUrl
	} from '@/common/config/api.js';
	import {
		mapState,
		mapActions
	} from 'vuex';
	import { ideautil, yewuutil } from '@/common/commontools.js';
	export default {
		data() {
			return {
				fileUrl: fileUrl,
				fobjlist: []
			};
		},
		onLoad(params) {

		},
		onShow(){
			this.refresh()
		},
		methods: {
			...mapActions(['updateUserInfo']),

			userDetail(tid) {
				uni.itool.nto({
					url: '/pages/qunzu/userdetail?id=' + tid
				})
			},
			refresh(){
				listj({params: {table: "huihua", uid: this.userInfo.id }}).then(rl => {
          for (let s of rl) {
              if(!uni.itool.getSimpleText(s.note)){
                s.note = '[其他类型]'
              }
          }
					this.fobjlist = rl || []
				}).catch(err => {
				 
				})
			},
			goBack() {
				uni.navigateBack({
					delta: 1
				})
			},
			toChatFriend(id){
				findj({params: {table: 'huihua', id: id}}).then(res => {
					if (res) {
						/*this.toChat(res.fid)
						let msgtype = 1
						if (res.qid) {
							msgtype = 2
						}*/
						savej({params: {table:'huihua',type:0,id:id}}).then(res2 => {
							uni.ytool.toChatUni(res.fid,res.msgtype)
						})

					}
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
