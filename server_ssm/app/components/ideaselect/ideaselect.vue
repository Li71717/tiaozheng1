<template>
	<view>
		<u-form-item borderBottom @click="ssshow3 = true;hideKeyboard();" label-width="76" :label="label">
			<u--input border="none" type="select" v-model="sitem[showName]" />
			<u-icon slot="right" name="arrow-right"></u-icon>
			<u-picker :keyName="showName" :show="ssshow3" ref="uPicker" :columns="datalist" @cancel="ssshow3=false" @confirm="confirmDate"></u-picker>
		</u-form-item>
	</view>
</template>

<script>
	import {
		ideautil
	} from '@/common/commontools.js';
	export default {
		name:"ideaselect",
		model:{
			prop:'value',
			event:'input'
		},
		props: {
			value: {
				type: [String,Object,Number],
				default: ''
			},
			showName: {
				type: String,
				default: 'title'
			},
			isobj: {
				type: Boolean,
				default: true
			},
			label: {
				type: String,
				require:true,
				default: '选择分类'
			},
			datalist: {
				type: Array,
				require:true,
				default: [[]]
			},
		},
		data() {
			return {
				ssshow3:false,
				sitem:{}
			};
		},
		watch:{
		    value:{
				immediate:true,
				deep:true,
		    	handler(news){
					this.sitem = news
				}
			}
		  },
		methods: {
			hideKeyboard:ideautil.hideKeyboard,
			confirmDate(e){
				let d = e.value[0]
				this.$emit('input',d)
				this.ssshow3 = false
			}
		}
	}
</script>

<style>
	
</style>