<template>
	<view>
		<view v-show="showSearch" class="hpaddingctn" style="margin-bottom:10rpx;">
      <view class="searchctn" :style="{'background-color':bgcolor}">
        <u--input v-model="searchstr" @input="toggleSearch"
                  :placeholder="searchPlace" prefixIcon="search"
                  prefixIconStyle="font-size: 29px !important;color: #909399" />
      </view>

		</view>

		<block v-if="imgSize==3">
			<block v-for="(item,index) in dataList" :key="item[idName]">
        <view v-show="toggleShow(item.isShow)">
				<view v-if="htitleName" class="htitlestatus" :style="{'background-color':bgcolor}">
					<view @tap="fatherFun(item[idName])" class="htitle" :style="{'color': htitleColor}">
						{{htitleLabel}}{{item[htitleName]}}
					</view>
					<view class="hstatus" :style="{'color': hsColor}">
						{{hsLabel}}{{getSimpleText(item[hsName])}}
					</view>
				</view>
				<view v-show="toggleShow(item.isShow)" :style="{'background-color':bgcolor}"
					:class="'list_item3 itemStyle'+sType+''">
					<view @tap="fatherFun(item[idName])" class="titlectn3" :style="{'color': titleColor}">
						{{titleLabel}}{{item[titleName]}}
					</view>
					<view @tap="fatherFun(item[idName])" v-if="item[imgName]">
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
							<u-button size="mini" :plain="true" type="warning" @tap="opFunction(item[idName])"
								:text="oLabel"></u-button>
						</view>
					</view>
				</view>
			</view>	
			</block>
		</block>
		<block v-if="imgSize==2">
			<block v-for="(item,index) in dataList" :key="item[idName]">
        		    <view v-show="toggleShow(item.isShow)">
				<view v-if="htitleName" class="htitlestatus" :style="{'background-color':bgcolor}">
					<view @tap="fatherFun(item[idName])" class="htitle" :style="{'color': htitleColor}">
						{{htitleLabel}}{{item[htitleName]}}
					</view>
					<view class="hstatus" :style="{'color': hsColor}">
						{{hsLabel}}{{getSimpleText(item[hsName])}}
					</view>
				</view>
				<view v-show="toggleShow(item.isShow)"
					:style="{'flex-direction': (fx?'row-reverse':'row'),'background-color':bgcolor}"
					:class="'list_item2 itemStyle'+sType+' '+ (sshadow ? 'fshadow':'')+''">
					<view @tap="fatherFun(item[idName])" class="item_img2" v-if="item[imgName]">
						<image class="blog_cover2" :src="fileUrl+item[imgName]"></image>
					</view>
					<view class="item_txt2">
						<view @tap="fatherFun(item[idName])" class="titlectn2" :style="{'color': titleColor}">
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
								<u-button size="mini" :plain="true" type="warning" @tap="opFunction(item[idName])"
									:text="oLabel"></u-button>
							</view>
						</view>
						<view class="opctn2" v-if="cbox">
							<view class="opitem">
								<u-checkbox :name="item[idName]+''" class="imglistcheck"></u-checkbox>
							</view>
						</view>
					</view>

				</view>
			    </view>
			</block>
		</block>




		<block v-if="imgSize=='timuresult'">
			<block v-for="(item,index) in dataList" :key="item[idName]">
				<view v-show="toggleShow(item.isShow)"
					:style="{'flex-direction': (fx?'row-reverse':'row'),'background-color':bgcolor}"
					:class="'list_item2 itemStyle'+sType+''">
					<view @tap="fatherFun(item[idName])" class="item_img2" v-if="item[imgName]">
						<image class="blog_cover2" :src="fileUrl+item[imgName]"></image>
					</view>
					<view class="item_txt2">
						<view @tap="fatherFun(item[idName])" class="titlectn2" :style="{'color': titleColor}">
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
								<u-button size="mini" :plain="true" type="warning" @tap="opFunction(item[idName])"
									:text="oLabel"></u-button>
							</view>
						</view>
						<view class="opctn2" v-if="cbox">
							<view class="opitem">
								<u-checkbox :name="item[idName]+''" class="imglistcheck"></u-checkbox>
							</view>
						</view>
					</view>

				</view>
			</block>
		</block>

		<block v-if="imgSize==1">
			<block v-for="(item,index) in dataList" :key="item[idName]">
        <view v-show="toggleShow(item.isShow)">
				<view v-if="htitleName" class="htitlestatus" :style="{'background-color':bgcolor}">
					<view @tap="fatherFun(item[idName])" class="htitle" :style="{'color': htitleColor}">
						{{htitleLabel}}{{item[htitleName]}}
					</view>
					<view class="hstatus" :style="{'color': hsColor}">
						{{hsLabel}}{{getSimpleText(item[hsName])}}
					</view>
				</view>
				<view v-show="toggleShow(item.isShow)"
					:style="{'flex-direction': (fx?'row-reverse':'row'),'background-color':bgcolor}"
					:class="'list_item itemStyle'+sType+''">
					<view @tap="fatherFun(item[idName])" class="item_img" v-if="item[imgName]">
						<image class="blog_cover" :style="{'border-radius': round?'50upx':'0'}"
							:src="fileUrl+item[imgName]"></image>
					</view>
					<view class="item_txt">
						<view @tap="fatherFun(item[idName])" class="titlectn" :style="{'color': titleColor}">
							{{titleLabel}}{{item[titleName]}}
						</view>

						<view v-if="tName" class="tctn" :style="{'color': tColor}">
							{{tLabel}}{{getSimpleText(item[tName])}}
						</view>
						<view v-if="oLabel" class="opctn2">
							<view class="opitem">
								<u-button size="mini" :plain="true" type="warning" @tap="opFunction(item[idName])"
									:text="oLabel"></u-button>
							</view>
						</view>
						<view class="opctn2" v-if="cbox">
							<view class="opitem">
								<u-checkbox :name="item[idName]+''" :checked="item.checked"
									class="imglistcheck"></u-checkbox>
							</view>
						</view>
					</view>
          </view>
				</view>
			</block>
		</block>

		<block v-if="imgSize=='huihua'">
			<block v-for="(item,index) in dataList" :key="item[idName]">
				<view v-show="toggleShow(item.isShow)"
					:style="{'flex-direction': (fx?'row-reverse':'row'),'background-color':bgcolor}"
					:class="'list_item itemStyle'+sType+''">
					<view @tap="fatherFun(item[idName])" class="item_img" v-if="item[imgName]">
						<image class="blog_cover" :style="{'border-radius': round?'50upx':'0'}"
							:src="fileUrl+item[imgName]"></image>
					</view>
					<view class="item_txt">
						<view @tap="fatherFun(item[idName])" class="titlectn" :style="{'color': titleColor}">
							{{titleLabel}}{{item[titleName]}}
						</view>

						<view v-if="tName" class="tctn" :style="{'color': tColor}">
							{{tLabel}}{{getSimpleText(item[tName])}}
						</view>
						<view v-if="oLabel" class="opctn2">
							<view class="opitem">
								<u-button size="mini" :plain="true" type="warning" @tap="opFunction(item[idName])"
									:text="oLabel"></u-button>
							</view>
						</view>
						<view class="opctn2" v-if="cbox">
							<view class="opitem">
								<u-checkbox :name="item[idName]+''" :checked="item.checked"
									class="imglistcheck"></u-checkbox>
							</view>
						</view>
						<view v-if="item.type == 1"
							style="position: absolute;width: 20rpx;height: 20rpx;background-color: red;right: 10rpx;border-radius: 10rpx;">
						</view>
					</view>

				</view>
			</block>
		</block>

		<block v-if="imgSize==10">
			<view :class="'waterfall'+cCount+''">
				<view v-show="toggleShow(item.isShow)" :class="'waterfallitem0 itemStyle'+sType+''"
					v-for="item in dataList">
					<image @tap="fatherFun(item[idName])" class="wimg0" v-if="item[imgName]" mode="widthFix"
						:src="fileUrl+item[imgName]"></image>
					<view @tap="fatherFun(item[idName])" class="wnote0" :style="{'color': titleColor}">
						{{titleLabel}}{{item[titleName]}}</view>
					<view class="wnote0" :style="{'color': sColor}" v-if="sName">
						{{sLabel}}{{getSimpleText(item[sName])}}</view>
					<view class="wprice0" :style="{'color': tColor}" v-if="tName">{{tLabel}}{{item[tName]}}</view>
					<view class="opctn2" v-if="oLabel">
						<view class="opitem">
							<u-button size="mini" :plain="true" type="warning" @tap="opFunction(item[idName])"
								:text="oLabel"></u-button>
						</view>
					</view>
				</view>
			</view>
		</block>

		<block v-if="imgSize==20">
			<view class="u-cell-group">
				<u-cell v-if="item[imgName] && toggleShow(item.isShow)" :icon="fileUrl+item[imgName]"
					@tap="fatherFun(item[idName])" v-for="(item,index) in dataList" :key="item[idName]"
					:title="item[titleName]" :value="item[tName]" :label="getSimpleText(item[sName])"
					:isLink="showArrow"></u-cell>
				<u-cell v-if="imgName==='' && toggleShow(item.isShow)" @tap="fatherFun(item[idName])"
					v-for="(item,index) in dataList" :key="item[idName]" :title="item[titleName]" :value="item[tName]"
					:label="getSimpleText(item[sName])" :isLink="showArrow"></u-cell>
			</view>
			<!-- <view>
				<uni-list>
					<uni-list-item @tap="fatherFun(item[idName])" v-show="toggleShow(item.isShow)" clickable v-for="(item,index) in dataList" :key="item[idName]"
						:title="item[titleName]" :note="getSimpleText(item[sName])" :showArrow="showArrow" :thumb="thumb===null?null:fileUrl+item[thumb]" :thumbSize="thumbSize"
						:rightText="item[rightName]" />
				</uni-list>
			</view> -->
		</block>

		<block v-if="imgSize=='good'">
			<block v-for="(item,index) in dataList" :key="item[idName]">
				<view v-if="htitleName" class="htitlestatus" :style="{'background-color':bgcolor}">
					<view @tap="fatherFun(item[idName])" class="htitle" :style="{'color': htitleColor}">
						{{htitleLabel}}{{item[htitleName]}}
					</view>
					<view class="hstatus" :style="{'color': hsColor}">
						{{hsLabel}}{{getSimpleText(item[hsName])}}
					</view>
				</view>
				<view v-show="toggleShow(item.isShow)"
					:style="{'flex-direction': (fx?'row-reverse':'row'),'background-color':bgcolor}"
					:class="'list_item2 itemStyle'+sType+''">
					<view @tap="fatherFun(item[idName])" class="item_img2" v-if="item[imgName]">
						<image class="blog_cover2" :src="fileUrl+item[imgName]"></image>
					</view>
					<view class="item_txt2">
						<view @tap="fatherFun(item[idName])" class="titlectn2" :style="{'color': titleColor}">
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
								<u-button size="mini" :plain="true" type="warning" @tap="opFunction(item[idName])"
									:text="oLabel"></u-button>
							</view>
						</view>

					</view>
				</view>
			</block>
		</block>

		<block v-if="imgSize=='pubu'">
			<view class="waterfall">
				<view v-show="toggleShow(item.isShow)" @tap="fatherFun(item[idName])" :class="'waterfallitem itemStyle'+sType+''"
					v-for="item in dataList" :key="item[idName]">
					<image v-if="item[imgName]" class="wimg" mode="widthFix" :src="fileUrl+item[imgName]"></image>
					<text class="wnote">{{titleLabel}}{{item[titleName]}}</text>
					<view class="wuserctn">
						<text v-if="sName" class="wname">{{sLabel}}{{getSimpleText(item[sName])}}</text>
						<text v-if="tName" class="wprice">{{tLabel}}{{item[tName]}}</text>
					</view>
				</view>
			</view>
		</block>
		<block v-if="imgSize=='bloglist'">
			<view v-show="toggleShow(item.isShow)" @tap="fatherFun(item.id)" v-for="(item,index) in dataList"
				:key="item.id" :class="'blog_item itemStyle'+sType+''">
				<view class="blog_top">
					<view class="blog_avatar">
						<image class="blogavatar" :src="fileUrl+item.uimg"></image>
					</view>
					<view class="blog_user">
						<text class="busername">{{item.username}}</text>
						<text class="busernote">{{item.ndate}}</text>
					</view>
				</view>
				<view class="blog_note">
					{{item.title}}
				</view>
				<view v-if="item.img">
					<image class="blog_cover" mode="widthFix" :src="fileUrl+item.img"></image>
				</view>
				<view class="blog_op">
					<text>{{item.zan}}赞</text>
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
		name: "imglist",
		props: {
			dataList: {
				type: Array,
				require: false,
				default: () => []
			},
			clickItem: {
				type: Function,
				default: null
			},
			clickOp: {
				type: Function,
				default: null
			},
			//显示checkbox
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
			htitleName: {
				type: String,
				require: false,
				default: null
			},
			htitleLabel: {
				type: String,
				require: false,
				default: ''
			},
			htitleColor: {
				type: String,
				require: false,
				default: '#333'
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
			hsName: {
				type: String,
				require: false,
				default: ''
			},
			hsLabel: {
				type: String,
				require: false,
				default: ''
			},
			sColor: {
				type: String,
				require: false,
				default: ''
			},
			hsColor: {
				type: String,
				require: false,
				default: 'orangered'
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
			//图片的位置true在右边
			fx: {
				type: Boolean,
				require: false,
				default: false
			},
			imgSize: {
				type: [Number, String],
				require: false,
				default: 1
			},
			//列表条目显示类型,带阴影样式啥的
			sType: {
				type: [Number, String],
				require: false,
				default: 3
			},
			//瀑布流每行的个数
			cCount: {
				type: [Number, String],
				require: false,
				default: 2
			},
			//缩略图已废弃
			thumb: {
				type: String,
				require: false,
				default: null
			},
			//缩略图已废弃
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
			sshadow: {
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
			},
			htitlebar: {
				type: Boolean,
				require: false,
				default: false
			},
			bgcolor: {
				type: String,
				require: false,
				default: '#fff !important'
			}
		},
		methods: {
			fatherFun(tid) {
				this.$emit('clickItem', tid)
			},
			opFunction(tid) {
				this.$emit('clickOp', tid)
			},
			getSimpleText: ideautil.getSimpleText,
			toggleShow(ne) {
				if (ne === undefined) {
					return true
				} else {
					return ne
				}

			},
			toggleSearch(e) {
				let fd = uni.itool.FangDou()
				let lis = this.dataList
				if (lis && lis.length) {
					fd(() => {
						for (let i = 0; i < lis.length; i++) {
							console.log(lis[i].isShow)
							lis[i].isShow = true
							this.$set(this.dataList, i, lis[i])
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
								this.$set(this.dataList, i, lis[i])
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
	.list_item3 {
		border-bottom: 1px #eee solid;
		margin-bottom: 20upx;
		padding-bottom: 10upx;
		box-sizing: border-box;

	}

	.titlectn3 {
		padding: 0 0 20upx 10upx;
		font-size: 30upx;
	}

	.blog_cover3 {
		width: 100%;
	}

	.tctn3 {
		padding: 15upx;
		color: #999;
		font-size: 30upx;

	}

	.list_item3 {
		border-bottom: 1px #eee solid;
		margin-bottom: 20upx;
	}

	.sctn3 {
		color: #666;
		font-size: 28upx;
		overflow: hidden;
		line-height: 40upx;
		max-height: 140upx;
		padding: 15upx;
	}







	.list_item2 {
		border-bottom: 1px #eee solid;
		margin-bottom: 20upx;
		display: flex;
		flex-direction: row;
		padding-bottom: 10upx;
	}

	.item_img2 {
		flex: 3;
	}

	.item_txt2 {
		flex: 7;
		display: flex;
		flex-direction: column;
	}

	.blog_cover2 {
		width: 100%;
		height: 180upx;
	}

	.titlectn2 {
		padding: 10upx;
		height: 60upx;
		font-size: 30upx;
		overflow: hidden;
	}

	.sctn2 {
		padding: 10upx;
		height: 80upx;
		font-size: 26upx;
		color: #666;
		overflow: hidden;
	}

	.tctn2 {
		padding: 10upx;
		height: 50upx;
		color: #666;
		overflow: hidden;
	}







	.list_item {
		border-bottom: 1px #eee solid;
		margin-bottom: 20upx;
		display: flex;
		flex-direction: row;
		padding-bottom: 10upx;
	}

	.item_img {
		margin-right: 10upx;
		width: 100rpx;
	}

	.item_txt {
		flex: 7;
		display: flex;
		flex-direction: column;
	}

	.blog_cover {
		width: 100upx;
		height: 100upx;
	}

	.titlectn {
		padding: 10upx;
		height: 60upx;
		font-size: 30upx;
		overflow: hidden;
	}

	.tctn {
		padding: 10upx;
		height: 50upx;
		color: #666;
		overflow: hidden;
	}





	.itemStyle1 {

		box-shadow: 1px 3px 3px #bbb;
		border-radius: 5upx;
		border-bottom: none !important;
		padding: 15upx !important;
	}

.itemStyle2{

}
	.itemStyle3 {

		box-shadow: 1px 3px 3px #bbb;
		border-radius: 5upx;
		border-bottom: none !important;
		padding: 15upx !important;
		background-color: #fff !important;
	}

	.itemStyle4 {

		border-radius: 5upx;
		border-bottom: none !important;
		padding: 15upx !important;
		background-color: #fff !important;
	}









	.gridstyle2 {
		background-color: #fff;
		box-shadow: 1px 3px 3px #bbb;
	}

	.gridstyle1 {
		background-color: rgb(245, 245, 245) !important;
		box-shadow: 1px 3px 3px #bbb;
	}

	.gridstyle3 {
		background-color: rgb(245, 245, 245) !important;
	}

	.gridstyle4 {
		background-color: rgb(255, 255, 255) !important;
		border: 2upx #ddd solid;
	}

	.waterfall2 {
		width: 100%;
		margin: 20upx auto;
		column-gap: 20upx;
		column-count: 2;
	}

	.waterfall1 {
		width: 100%;
		margin: 20upx auto;
		column-gap: 20upx;
		column-count: 1;
	}

	.waterfall3 {
		width: 100%;
		margin: 20upx auto;
		column-gap: 20upx;
		column-count: 3;
	}

	.waterfall4 {
		width: 100%;
		margin: 20upx auto;
		column-gap: 20upx;
		column-count: 4;
	}

	.waterfallitem0 {
		padding: 0;
		margin-bottom: 20upx;
		break-inside: avoid;

		border-radius: 5upx;
	}

	.wimg0 {
		width: 100%;
	}

	.wnote0 {
		font-size: 22upx;
		color: #666;
		line-height: 30upx;
		padding: 10upx;
		max-height: 100upx;
		overflow: hidden;
	}

	.wuserctn0 {
		display: flex;
		height: 50upx;
		align-items: center;
		overflow: hidden;
		justify-content: space-between;
		padding: 10upx;
	}

	.wprice0 {
		color: red;
		font-size: 20upx;
		line-height: 20upx;
		height: 50upx;
		width: 100%;
		overflow: hidden;
		text-align: right;
		padding: 10upx;
	}



	.opctn2 {
		display: flex;
		flex-direction: row-reverse;
		padding: 20upx;
	}

	.opbtn {
		margin: 0 0 0 10upx;
	}

	.opitem {
		margin: 0 0 0 10upx;
	}




	.waterfall {
		width: 100%;
		margin: 20upx auto;
		column-gap: 20upx;
		column-count: 2;

	}

	.waterfallitem {
		padding: 0;
		margin-bottom: 20upx;
		break-inside: avoid;
		background-color: #fff;
		box-shadow: 1px 3px 3px #bbb;
		border-radius: 5upx;
	}

	.wimg {
		width: 100%;
	}

	.wnote {
		font-size: 22upx;
		color: #666;
		line-height: 30upx;
		padding: 10upx;
	}

	.wuserctn {
		display: flex;
		height: 50upx;
		align-items: center;
		overflow: hidden;
		justify-content: space-between;
		padding: 10upx;
	}

	.wface {
		height: 30upx;
		width: 30upx;
	}

	.wname {
		color: #999;
		font-size: 20upx;
		padding-left: 5upx;
		overflow: hidden;
	}

	.wprice {
		color: red;
		font-size: 20upx;
	}


	.blog_top {
		display: flex;
		margin-bottom: 20upx;
	}

	.blog_avatar {
		width: 100upx;
	}

	.blog_user {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.blogavatar {
		width: 80upx;
		height: 80upx;
	}

	.busername {
		font-size: 28upx !important;
		color: #222;
	}

	.busernote {
		font-size: 26upx;
		color: #666;
	}

	.blog_note {
		padding: 0 0 20upx 10upx;
	}

	.blog_cover {
		width: 100%;
	}

	.blog_op {
		padding: 20upx 0 20upx 0;

	}

	.blog_op text {
		color: red;
		font-size: 30upx;
	}

	.blog_item {
		border-bottom: 1px #eee solid;
		margin-bottom: 20upx;
	}

	.htitlestatus {
		display: flex;
		justify-content: space-between;
		border-bottom: 1px #ddd solid;

		padding: 20rpx;
	}

	.htitle {
		flex: 1;
		font-weight: bolder;
		font-size: 32rpx;
	}

	.hstatus {
		font-size: 28rpx;
	}

  .searchctn{
    border-radius: 10rpx;
  }
</style>