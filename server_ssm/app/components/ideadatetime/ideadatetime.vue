<template>
	<view>
		<u-form-item prop="sex" @click="ssshow3 = true;hideKeyboard();" borderBottom label-width="76" :label="label">
			<u-icon slot="right" name="arrow-right"></u-icon>
			<u--input type="text" :placeholder="label" border="none" v-model="datestr" />
			<u-datetime-picker :minDate="minDate" :mode="mode" @cancel="ssshow3 = false" @confirm="confirmDate" :show="ssshow3">
			</u-datetime-picker>
		</u-form-item>
	</view>
</template>

<script>
	import {
		ideautil
	} from '@/common/commontools.js';
	export default {
		name:"ideadatetime",
		model:{
			prop:'value',
			event:'input'
		},
		props: {
			value: {
				type: String,
				default: ''
			},
			label: {
				type: String,
				require:true,
				default: ''
			},
			mode: {
				type: String,
				require:true,
				default: 'datetime'
			},
			minDate: {
				type: Number,
				require:false,
				default: Date.now()
			},
		},
		data() {
			return {
				ssshow3:false,
				datestr:''
			};
		},
		watch:{
			value:{
				immediate:true,
				deep:true,
				handler(news){
					this.datestr = news
				}
			}
		  },
		methods: {
			hideKeyboard:ideautil.hideKeyboard,
			confirmDate(e){
				let d = uni.$u.timeFormat(e.value, 'yyyy-mm-dd hh:MM');
				if (this.mode=="date") {
					d = uni.$u.timeFormat(e.value, 'yyyy-mm-dd');
				}
				this.datestr = d
				this.$emit('input',d)
				this.ssshow3 = false
			}
		}
	}
</script>

<style>
	
</style>