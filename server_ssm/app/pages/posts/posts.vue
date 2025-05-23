<template>
	<view>
		<u-navbar :title="title" :border="true" :placeholder="true" @leftClick="goBack"></u-navbar>
		<scroll-view :enable-flex="true" class="svcontainer">
<!--			<u-tabs :list="typelist" keyName="title" @change="onTabChange"></u-tabs>-->
			<imglist :imgSize="2" sType="1" titleName="title" @clickItem='toPostsDetail' :dataList="fobjList" tName="username" sName='ndate' ></imglist>
		</scroll-view>
	</view>
</template>

<script>
	import { listSqlj, listj, findj, savej, fileUrl } from '@/common/config/api.js';
	import {mapState, mapActions} from 'vuex';
	export default {
		data() {
			return {
				fobjList: [],
				ftype:1,
        title:'交流互动',
        typelist:[{id:1,title:''},{id:4,title:''},{id:2,title:''},{id:3,title:''}]
			};
		},
		onLoad(params) {
			this.ftype = params.type || 1
      if(this.ftype=='1'){
        this.title='交流互动'
      }else{
        this.title='校园二手'
      }
      this.refresh()
			//let sql = `select b.*,(select count(pid) from wct_replay r where r.pid=b.id) pinglun,u.img uimg from wct_posts b left join wct_user u on u.id=b.uid where 1=1`

		},
		onShow() {

		},
		methods: {
			...mapActions(['updateUserInfo']),
      refresh(){
        listj({params: {table: "posts", type: this.ftype}}).then(res => {
          this.fobjList = res
        })
      },
			onTabChange (item){
			    if(item.title != '全部'){
					  this.ftype = item.id
			    }
				  this.refresh()
			},
			toPostsDetail(id){
				uni.itool.nto({
					url:'/pages/posts/postsdetail?id='+id
				})
			},
			postsMg(id){
				console.log("------------------>:aid:"+id)
				uni.itool.nto({
					url:`./postsmg?totype=1&tid=${id}&type=${this.ftype}`
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