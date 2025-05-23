<template>

	<view class="u-page__item" >
		<u-tabbar :value="tindex" @change="changeIndex($event)" :fixed="true" :placeholder="false"
			activeColor="#d81e06" :safeAreaInsetBottom="false">
			<u-tabbar-item class="myitem" text="首页">
				<image class="u-page__item__slot-icon" slot="active-icon"
					src="https://cdn.uviewui.com/uview/common/bell-selected.png"></image>
				<image class="u-page__item__slot-icon" slot="inactive-icon"
					src="https://cdn.uviewui.com/uview/common/bell.png"></image>
			</u-tabbar-item>
<!--			<u-tabbar-item class="myitem" text="放映厅" icon="photo"></u-tabbar-item>
			<u-tabbar-item class="myitem" text="直播" icon="play-right"></u-tabbar-item>-->
			<u-tabbar-item class="myitem" text="我的" icon="account-fill"></u-tabbar-item>
		</u-tabbar>
	</view>

</template>

<script>
	export default {
		name: "ideatabbar",
		props: {
			tindex: {
				type: [Number,String],
				require: false,
				default: 0
			},
		},
		data() {
			return {
		
			};
		},
		methods:{
			changeIndex(name){
				switch (name){
          case 0:{
            uni.navigateTo({
            	url: '/pages/qunzu/qunzu'
            })
            break
          }
          case 1:{
            uni.navigateTo({
              url: '/pages/me/me'
            })
            break
          }
        }
			}
		},
	}
</script>

<style lang="scss">
	.myitem{
		background-color: #eee;
	}
		.u-page__item {
			&__title {
				padding: 15px;
				font-size: 15px;

				&__slot-title {
					color: $u-primary;
					font-size: 14px;
				}
			}

			&__slot-icon {
				width: 17px;
				height: 17px;
			}
		}
		
		
	
</style>