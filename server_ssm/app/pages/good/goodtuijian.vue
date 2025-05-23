<template>
	<view>
		<u-navbar :title="title" :border="true" :placeholder="true"   :autoBack="true"></u-navbar>
		<scroll-view :enable-flex="true" class="svcontainer">
			<imgList :imgSize="10" imgName="img" titleName="gname" @clickItem='toGoodDetail' :dataList='fobjList' sName='shop' t-label="价格:" tName="price"></imgList>
		</scroll-view>
	</view>
</template>

<script>
	import { listj, findj, savej, deletej, fileUrl } from '@/common/config/api.js';
	import {mapState, mapActions} from 'vuex';
	import { ideautil, yewuutil } from '@/common/commontools.js';
	import imgList from '@/components/img-list.vue';
	import {listSqlj} from "../../common/config/api";
	export default {
		data() {
			return {
				fobjList:[],
				title:"为我推荐"
			};
		},
		onLoad(params) {
			listj({params: {table: 'user' }}).then(userlist => {
				let tgids = "";
				let sql = "";
				let favs = this.userInfo.favs||"";//获取自己喜欢的收藏的数据

				/**
				 * 计算纬度
				 */
				let weidulist = [];//定义一个纬度数组,用于存放带有纬度的推荐对象
				for(let i=0;i<userlist.length;i++){//遍历用户数据
					let weidu = {};//定义一个纬度对象
					let user = userlist[i];//拿出一个用户数据
					if(user.id == this.userInfo.id){//排除自己
						continue;
					}
					let ufavs = user.favs;//别人的收藏喜欢的东西
					if(ufavs){//如果别人有收藏有数据也就是
						let wd = 0;//默认纬度是零
						ufavs+="";//这里进行容错
						let ufarray = ufavs.split(",");//分割出收藏喜欢的物品id
						if(favs){
							favs+="";//同样的进行容错
							let farray = favs.split(",");//我的收藏
							for(let j=0;j<ufarray.length;j++){//循环对比别人的喜欢,和自己的喜欢想比较,计算出有多少的相似度
								for(let k=0;k<farray.length;k++){
									if(ufarray[j]==farray[k]){
										wd++;
									}
								}
							}
							weidu.favs = ufavs;//最后把别人的喜欢,和相似度存入纬度对象然后加入纬度数组
							weidu.wd = wd;
							weidulist.push(weidu);
						}else{
							tgids = ufavs;
							break;
						}

					}else{
						weidu.wd = 0;
					}
				}

				if(weidulist.length){//如果纬度数组有数据
					weidulist = weidulist.sort(function (o1,o2) {//对纬度数组进行排序
						return o1.wd-o2.wd;
					});

					let len = 5;//这里可以自己定义一个数来取相似度都最接近的前几个
					if(len>weidulist.length){
						len = weidulist.length;
					}

					let wfavs = "";//然后把和自己喜好相似的前几个的喜好对象合并到一起为后面的推荐做准备
					for(let i=0;i<len;i++){
						if(wfavs==""){
							wfavs = weidulist[i]['favs'];
						}else{
							wfavs += ","+weidulist[i]['favs'];
						}
					}

					let wfarray = wfavs.split(",");

					for(let i=0; i<wfarray.length; i++){//这里进行去重复
						for(let j=i+1; j<wfarray.length; j++){
							if(wfarray[i]==wfarray[j]){         //第一个等同于第二个，splice方法删除第二个
								wfarray.splice(j,1);
								j--;
							}
						}
					}

					let favlist = wfarray;

					for(let i=0;i<favlist.length;i++){//然后组装推荐的id集合
						if(tgids==""){
							tgids = favlist[i];
						}else{
							tgids+=","+favlist[i];
						}
					}

					if(!tgids){
						tgids = this.userInfo.tags;
					}

				}
				let tags = this.userInfo.tags;//如果有标签设置,再融入标签推荐
				/*sql = "select * from wct_notice where id in ("+tgids+") or typeid in ("+tags+")";
                if(!tgids || tgids=='undefined'){
                    sql = "select * from wct_notice where typeid in ("+tags+")";
                }*/
				sql = "select * from wct_good order by id desc";
				if (tgids) {
					sql = "select * from wct_good where id in ("+tgids+")";
				}

				if(tags){
					sql = "select * from wct_good where (id in ("+tgids+") or typeid in ("+tags+"))";
				}
				listSqlj({params: {sql: sql }}).then(res => {
					this.fobjList = res
				})
			})
		},
		methods: {
			toGoodDetail:yewuutil.toGoodDetail,
			goBack(){
				uni.navigateBack({
					delta:1
				})
			}
		},
		computed: {
			...mapState(['userInfo'])
		},
		components:{imgList}
	}
</script>

<style lang="scss">

</style>
