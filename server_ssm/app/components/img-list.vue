<template>
	<view>
		<view v-show="showSearch" class="hpaddingctn">
			<u--input v-model="searchstr" @input="toggleSearch" :placeholder="searchPlace" prefixIcon="search" prefixIconStyle="font-size: 29px !important;color: #909399" />
		</view>
		
		<block v-if="imgSize==3">
			<block v-for="(item,index) in dataList" :key="item.id">
				<view v-show="toggleShow(item.isShow)" :class="'list_item3 itemStyle'+sType+''" >
					<view @tap="fatherFun(item.id)" class="titlectn3" :style="{'color': titleColor}">
						{{titleLabel}}{{item[titleName]}}
					</view>
					<view @tap="fatherFun(item.id)" v-if="item[imgName]">
						<image class="blog_cover3" mode="widthFix" :src="fileUrl+item[imgName]"></image>
					</view>
					<view v-if="sName" class="sctn3" :style="{'color': sColor}">
						{{sLabel}}{{getSimpleText(item[sName])}}
					</view>
					<view v-if="tName" class="tctn3" :style="{'color': tColor}">
						{{tLabel}}{{item[tName]}}
					</view>
					<view class="opctn2" v-if="oLabel">
						<view class="opitem">
							<u-button size="mini" :plain="true" type="warning" @tap="opFunction(item.id)" :text="oLabel"></u-button>
						</view>
					</view>
				</view>
			</block>
		</block>
		<block v-if="imgSize==2">
			<block v-for="(item,index) in dataList" :key="item.id">
				<view v-show="toggleShow(item.isShow)" :style="{'flex-direction': fx?'row-reverse':'row'}" :class="'list_item2 itemStyle'+sType+''" >
					<view @tap="fatherFun(item.id)" class="item_img2" v-if="item[imgName]">
						<image class="blog_cover2" :src="fileUrl+item[imgName]"></image>
					</view>
					<view class="item_txt2">
						<view @tap="fatherFun(item.id)" class="titlectn2" :style="{'color': titleColor}">
							{{titleLabel}}{{item[titleName]}}
						</view>
						<view class="sctn2" :style="{'color': sColor}">
							{{sLabel}}{{getSimpleText(item[sName])}}	
						</view>
						<view :style="{'color': tColor}" v-if="tName" class="tctn2">
							{{tLabel}}{{item[tName]}}
						</view>
						<view class="opctn2" v-if="oLabel">
							<view class="opitem">
								<u-button size="mini" :plain="true" type="warning" @tap="opFunction(item.id)" :text="oLabel"></u-button>
							</view>
						</view>
						<view class="opctn2" v-if="cbox">
							<view class="opitem">
								<checkbox class="imglistcheck"></checkbox>
							</view>
						</view>
					</view>
					
				</view>
			</block>
		</block>

		<block v-if="imgSize=='timuresult'">
			<block v-for="(item,index) in dataList" :key="item.id">
				<view v-show="toggleShow(item.isShow)" :style="{'flex-direction': fx?'row-reverse':'row'}" :class="'list_item2 itemStyle'+sType+''" >
					<view @tap="fatherFun(item.id)" class="item_img2" v-if="item[imgName]">
						<image class="blog_cover2" :src="fileUrl+item[imgName]"></image>
					</view>
					<view class="item_txt2">
						<view @tap="fatherFun(item.id)" class="titlectn2" :style="{'color': titleColor}">
							{{titleLabel}}{{item[titleName]}}
						</view>
						<view class="sctn2" :style="{'color': sColor}">
							{{sLabel}}{{getSimpleText(item[sName])}}
						</view>
						<view :style="{'color': item[tName]=='答对'?'green':'red'}" v-if="tName" class="tctn2">
							{{tLabel}}{{item[tName]}}
						</view>
						<view class="opctn2" v-if="oLabel">
							<view class="opitem">
								<u-button size="mini" :plain="true" type="warning" @tap="opFunction(item.id)" :text="oLabel"></u-button>
							</view>
						</view>
						<view class="opctn2" v-if="cbox">
							<view class="opitem">
								<checkbox class="imglistcheck"></checkbox>
							</view>
						</view>
					</view>

				</view>
			</block>
		</block>
		
		<block v-if="imgSize==1">
			<block v-for="(item,index) in dataList" :key="item.id">
				<view v-show="toggleShow(item.isShow)" :style="{'flex-direction': fx?'row-reverse':'row'}" :class="'list_item itemStyle'+sType+''" >
					<view @tap="fatherFun(item.id)" class="item_img" v-if="item[imgName]">
						<image class="blog_cover" :style="{'border-radius': round?'50upx':'0'}" :src="fileUrl+item[imgName]"></image>
					</view>
					<view class="item_txt">
						<view  @tap="fatherFun(item.id)" class="titlectn" :style="{'color': titleColor}">
							{{titleLabel}}{{item[titleName]}}
						</view>
						
						<view v-if="tName" class="tctn" :style="{'color': tColor}">
							{{tLabel}}{{getSimpleText(item[tName])}}
						</view>
						<view v-if="oLabel" class="opctn2">
							<view class="opitem">
								<u-button size="mini" :plain="true" type="warning" @tap="opFunction(item.id)" :text="oLabel"></u-button>
							</view>
						</view>
						<view class="opctn2" v-if="cbox">
							<view class="opitem">
								<checkbox :value="item.id+''" :checked="item.checked" class="imglistcheck"></checkbox>
							</view>
						</view>
					</view>
					
				</view>
			</block>
		</block>
		
		
		<block v-if="imgSize==10">
			<view :class="'waterfall'+cCount+''">
				<view v-show="toggleShow(item.isShow)"  :class="'waterfallitem0 gridstyle'+sType+''" v-for="item in dataList">
					<image @tap="fatherFun(item.id)" class="wimg0" v-if="item[imgName]" mode="widthFix" :src="fileUrl+item[imgName]"></image>
					<view @tap="fatherFun(item.id)" class="wnote0" :style="{'color': titleColor}">{{titleLabel}}{{item[titleName]}}</view>
					<view class="wnote0" :style="{'color': sColor}" v-if="sName">{{sLabel}}{{getSimpleText(item[sName])}}</view>
					<view class="wprice0" :style="{'color': tColor}" v-if="tName">{{tLabel}}{{item[tName]}}</view>
					<view class="opctn2" v-if="oLabel">
						<view class="opitem">
							<u-button size="mini" :plain="true" type="warning" @tap="opFunction(item.id)" :text="oLabel"></u-button>
						</view>
					</view>
				</view>
			</view>
		</block>
		
		<block v-if="imgSize==20">
			<view class="u-cell-group">
				<u-cell v-if="item[imgName] && toggleShow(item.isShow)"  :icon="fileUrl+item[imgName]" @tap="fatherFun(item.id)" v-for="(item,index) in dataList" :key="item.id" :title="item[titleName]" :value="item[tName]" :label="getSimpleText(item[sName])" :isLink="showArrow"></u-cell>
				<u-cell v-if="imgName==='' && toggleShow(item.isShow)" @tap="fatherFun(item.id)" v-for="(item,index) in dataList" :key="item.id" :title="item[titleName]" :value="item[tName]" :label="getSimpleText(item[sName])" :isLink="showArrow"></u-cell>
			</view>
			<!-- <view>
				<uni-list>
					<uni-list-item @tap="fatherFun(item.id)" v-show="toggleShow(item.isShow)" clickable v-for="(item,index) in dataList" :key="item[idName]"
						:title="item[titleName]" :note="getSimpleText(item[sName])" :showArrow="showArrow" :thumb="thumb===null?null:fileUrl+item[thumb]" :thumbSize="thumbSize"
						:rightText="item[rightName]" />
				</uni-list>
			</view> -->
		</block>
		
		<block v-if="imgSize=='good'">
			<block v-for="(item,index) in dataList" :key="item.id">
				<view v-show="toggleShow(item.isShow)" :style="{'flex-direction': fx?'row-reverse':'row'}" :class="'list_item2 itemStyle'+sType+''" >
					<view @tap="fatherFun(item.id)" class="item_img2" v-if="item[imgName]">
						<image class="blog_cover2" :src="fileUrl+item[imgName]"></image>
					</view>
					<view class="item_txt2">
						<view @tap="fatherFun(item.id)" class="titlectn2" :style="{'color': titleColor}">
							{{titleLabel}}{{item[titleName]}}
						</view>
						<view class="sctn2" :style="{'color': sColor}">
							{{sLabel}}{{getSimpleText(item[sName])}}	
						</view>
						<view :style="{'color': tColor}" v-if="tName" class="tctn2">
							{{tLabel}}{{item[tName]}}
						</view>
						<view class="opctn2" v-if="oLabel">
							<view class="opitem">
								<u-button size="mini" :plain="true" type="warning" @tap="opFunction(item.id)" :text="oLabel"></u-button>
							</view>
						</view>
						
					</view>
				</view>
			</block>
		</block>
		
		<block v-if="imgSize=='pubu'">
			<view class="waterfall">
				<view v-show="toggleShow(item.isShow)" @tap="fatherFun(item.id)" class="waterfallitem" v-for="item in dataList" :key="item.id">
					<image v-if="item[imgName]" class="wimg" mode="widthFix" :src="fileUrl+item[imgName]"></image>
					<text class="wnote">{{titleLabel}}{{item[titleName]}}</text>
					<view class="wuserctn">
						<text class="wname">{{sLabel}}{{getSimpleText(item[sName])}}</text>
						<text class="wprice">{{tLabel}}{{item[tName]}}</text>
					</view>
				</view>
			</view>
		</block>
	</view>
</template>

<script>
	import {
		fileUrl
	} from '@/common/config/api.js';
	import {
		ideautil
	} from '@/common/commontools.js';
	export default {
		name:"img-list",
		props: {
			dataList: {
				type: Array,
				require: false,
				default: ()=>[]
			},
			clickItem: {
				type: Function,
				default: null
			},
			clickOp: {
				type: Function,
				default: null
			},
			cbox: {
				type: String,
				require: false,
				default: null
			},
			idName: {
				type: String,
				require: false,
				default: 'id'
			},
			titleName: {
				type: String,
				require: false,
				default: 'title'
			},
			titleLabel: {
				type: String,
				require: false,
				default: ''
			},
			titleColor: {
				type: String,
				require: false,
				default: ''
			},
			searchPlace: {
				type: String,
				require: false,
				default: '请输入关键字'
			},
			sName: {
				type: String,
				require: false,
				default: ''
			},
			sLabel: {
				type: String,
				require: false,
				default: ''
			},
			sColor: {
				type: String,
				require: false,
				default: ''
			},
			tName: {
				type: String,
				require: false,
				default: ''
			},
			tLabel: {
				type: String,
				require: false,
				default: ''
			},
			tColor: {
				type: String,
				require: false,
				default: ''
			},
			imgName: {
				type: String,
				require: false,
				default: ''
			},
			fx: {
				type: Boolean,
				require: false,
				default: false
			},
			imgSize: {
				type: [Number,String],
				require: false,
				default: 1
			},
			sType: {
				type: [Number,String],
				require: false,
				default: 2
			},
			cCount: {
				type: [Number,String],
				require: false,
				default: 2
			},
			thumb: {
				type: String,
				require: false,
				default: null
			},
			thumbSize: {
				type: String,
				require: false,
				default: 'medium'
			},
			showArrow: {
				type: Boolean,
				require: false,
				default: true
			},
			showSearch: {
				type: Boolean,
				require: false,
				default: true
			},
			oLabel: {
				type: String,
				require: false,
				default: ''
			},
			oColor: {
				type: String,
				require: false,
				default: ''
			},
			round: {
				type: Boolean,
				require: false,
				default: false
			}
		},
		methods: {
			fatherFun(tid){
				this.$emit('clickItem',tid)
			},
			opFunction(tid){
				this.$emit('clickOp',tid)
			},
			getSimpleText:ideautil.getSimpleText,
			toggleShow(ne){
				if(ne === undefined){
					return true
				}else{
					return ne
				}
				
			},
			toggleSearch(e) {
				let fd = new ideautil.FangDou()
				let lis = this.dataList
				if (lis && lis.length) {
					fd(() => {
						for (let i = 0; i < lis.length; i++) {
							console.log(lis[i].isShow)
							lis[i].isShow = true
							this.$set(this.dataList,i,lis[i])
						}
						let searchstr = this.searchstr
						if (searchstr) {
							//lis不是数组,遍历只能获取length属性获取长度然后操作
							for (let i = 0; i < lis.length; i++) {
								let title = lis[i][this.titleName] || '';
								let note = lis[i][this.sName] || '';
								if (title.indexOf(searchstr) != -1 || note.indexOf(searchstr) != -1) {
									lis[i].isShow = true
								} else {
									lis[i].isShow = false
								}
								this.$set(this.dataList,i,lis[i])
							}
						}
					})
				}
			
			}
		},
		data() {
			return {
				fileUrl: fileUrl,
				searchstr: '',
			};
		}
	}
</script>

<style>
	
.list_item3{
	border-bottom: 1px #eee solid;
	margin-bottom: 20upx;
	padding-bottom: 10upx;
	box-sizing: border-box;
	
}
.titlectn3{
	padding: 0 0 20upx 10upx;
	font-size: 30upx;
}
.blog_cover3{
	width: 100%;
}
.tctn3{
	padding: 15upx;
	color: #999;
	font-size: 30upx;
	
}

.list_item3{
	border-bottom: 1px #eee solid;
	margin-bottom: 20upx;
}

.sctn3{
	color: #666;
	font-size: 28upx;
	overflow: hidden;
	line-height: 40upx;
	max-height: 140upx;
	padding: 15upx;
}







.list_item2{
	border-bottom: 1px #eee solid;
	margin-bottom: 20upx;
	display: flex;
	flex-direction: row;
	padding-bottom: 10upx;
}

.item_img2{
	flex: 3;
}
.item_txt2{
	flex: 7;
	display: flex;
	flex-direction: column;
}
.blog_cover2{
	width: 100%;
	height: 180upx;
}
.titlectn2{
	padding: 10upx;
	height: 60upx;
	font-size: 30upx;
	overflow: hidden;
}

.sctn2{
	padding: 10upx;
	height: 80upx;
	font-size: 26upx;
	color: #666;
	overflow: hidden;
}
.tctn2{
	padding: 10upx;
	height: 50upx;
	color: #666;
	overflow: hidden;
}







.list_item{
	border-bottom: 1px #eee solid;
	margin-bottom: 20upx;
	display: flex;
	flex-direction: row;
	padding-bottom: 10upx;
}

.item_img{
	margin-right: 10upx;
}
.item_txt{
	flex: 7;
	display: flex;
	flex-direction: column;
}
.blog_cover{
	width: 100upx;
	height: 100upx;
}
.titlectn{
	padding: 10upx;
	height: 60upx;
	font-size: 30upx;
	overflow: hidden;
}

.tctn{
	padding: 10upx;
	height: 50upx;
	color: #666;
	overflow: hidden;
}





.itemStyle1{
	background-color: #fff;
	box-shadow: 1px 3px 3px #bbb;
	border-radius: 5upx;
	border-bottom:none !important;
	padding: 15upx !important;
}
.itemStyle2{

}
.itemStyle3{
	background-color: #fff;
	box-shadow: 1px 3px 3px #bbb;
	border-radius: 5upx;
	border-bottom:none !important;
	padding: 15upx !important;
	background-color: rgb(243, 243, 243) !important;
}
.itemStyle4{
	background-color: #fff;
	border-radius: 5upx;
	border-bottom:none !important;
	padding: 15upx !important;
	background-color: rgb(245, 245, 245) !important;
}









.gridstyle2{
	background-color: #fff;
	box-shadow: 1px 3px 3px #bbb;
}
.gridstyle1{
	background-color: rgb(245, 245, 245) !important;
	box-shadow: 1px 3px 3px #bbb;
}
.gridstyle3{
	background-color: rgb(245, 245, 245) !important;
}
.gridstyle4{
	background-color: rgb(255, 255, 255) !important;
	border: 2upx #ddd solid;
}
.waterfall2{
	width: 100%;
	margin: 20upx auto;
	column-gap: 20upx;
	column-count: 2;
}
.waterfall1{
	width: 100%;
	margin: 20upx auto;
	column-gap: 20upx;
	column-count: 1;
}
.waterfall3{
	width: 100%;
	margin: 20upx auto;
	column-gap: 20upx;
	column-count: 3;
}
.waterfall4{
	width: 100%;
	margin: 20upx auto;
	column-gap: 20upx;
	column-count: 4;
}
.waterfallitem0{
	padding: 0;
	margin-bottom: 20upx;
	break-inside: avoid;
	
	border-radius: 5upx;
}
.wimg0{
	width: 100%;
}
.wnote0{
	font-size: 22upx;
	color: #666;
	line-height: 30upx;
	padding: 10upx;
	max-height: 100upx;
	overflow: hidden;
}
.wuserctn0{
	display: flex;
	height: 50upx;
	align-items: center;
	overflow: hidden;
	justify-content: space-between;
	padding: 10upx;
}

.wprice0{
	color: red;
	font-size: 20upx;
	line-height: 20upx;
	height: 50upx;
	width: 100%;
	overflow: hidden;
	text-align: right;
	padding: 10upx;
}



.opctn2{
	display: flex;
	flex-direction: row-reverse;
	padding: 20upx;
}
.opbtn{
	margin: 0 0 0 10upx;
}
.opitem{
	margin: 0 0 0 10upx;
}




.waterfall{
		width: 100%;
		margin: 20upx auto;
		column-gap: 20upx;
		column-count: 2;
		
	}
	.waterfallitem{
		padding: 0;
		margin-bottom: 20upx;
		break-inside: avoid;
		background-color: #fff;
		box-shadow: 1px 3px 3px #bbb;
		border-radius: 5upx;
	}
	.wimg{
		width: 100%;
	}
	.wnote{
		font-size: 22upx;
		color: #666;
		line-height: 30upx;
		padding: 10upx;
	}
	.wuserctn{
		display: flex;
		height: 50upx;
		align-items: center;
		overflow: hidden;
		justify-content: space-between;
		padding: 10upx;
	}
	.wface{
		height: 30upx;
		width: 30upx;
	}
	.wname{
		color: #999;
		font-size: 20upx;
		padding-left: 5upx;
		overflow: hidden;
	}
	.wprice{
		color: red;
		font-size: 20upx;
	}
	
</style>