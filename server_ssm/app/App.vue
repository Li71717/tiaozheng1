<script>
	import {mapState, mapActions} from 'vuex'
	export default {
		globalData:{
			targetAddress:null
		},
		data() {
			return {
				username: null,
				passwd: null
			}
		},
		onLaunch: function() {
			console.log('App Launch')
			/* this.username = this.userInfo && this.userInfo.username
			this.passwd = this.userInfo && this.userInfo.passwd
			if(!this.username || !this.passwd){
				uni.navigateTo({
					url: './pages/login/login'
				})
			} */
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		computed: {
			...mapState(['userInfo'])
		}
	}
</script>

<style lang="scss">
	/*每个页面公用的css*/
	@import 'uview-ui/index.scss';
	@import '@/static/css/normal.css';
	@import './tuniao-ui/index.scss';
	@import './tuniao-ui/iconfont.css';
</style>
