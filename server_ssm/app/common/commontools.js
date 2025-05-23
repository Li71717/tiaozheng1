import {
	fileUrl
} from '@/common/config/api.js';

const ideautil = {
	str2Date(str){
		let year = Number(str.substr(0, 4))
		let month = Number(str.substr(5, 2)) - 1
		let day = Number(str.substr(8, 2))
		let hour = Number(str.substr(11, 2))
		let minute = Number(str.substr(14, 2))
		let second = Number(str.substr(17, 2))
		return new Date(year, month, day, hour, minute, second)
	},
	getNtime(ntime) {
		ntime = ntime || Date.now()
		let time = new Date(ntime)
		let year = time.getFullYear()
		let month = time.getMonth() + 1
		let day = time.getDate()
		let hour = time.getHours()
		let min = time.getMinutes()
		let second = time.getSeconds()
		if (month*1 < 10) {
			month = "0" + month
		}
	
		if (day*1 < 10) {
			day = "0" + day
		}
	
		if (hour*1 < 10) {
			hour = "0" + hour
		}
	
		if (min*1 < 10) {
			min = "0" + min
		}
	
		if (second*1 < 10) {
			second = "0" + second
		}
	
		return year + "-" + month + "-" + day + " " + hour + ":" + min + ":" +
			second
	},
	getNdate() {
		let ntime = ntime || Date.now()
		let time = new Date(ntime)
		let year = time.getFullYear()
		let month = time.getMonth() + 1
		let day = time.getDate()
		let hour = time.getHours()
		let min = time.getMinutes()
		let second = time.getSeconds()
		if (month*1 < 10) {
			month = "0" + month
		}

		if (day*1 < 10) {
			day = "0" + day
		}

		if (hour*1 < 10) {
			hour = "0" + hour
		}

		if (min*1 < 10) {
			min = "0" + min
		}

		if (second*1 < 10) {
			second = "0" + second
		}

		return year + "-" + month + "-" + day
	},
	findObjById(id, list){
		for (let i = 0; i < list.length; i++) {
			let tid = list[i]['id']
			if (tid == id) {
				return list[i]
			}
		}
		return null
	},
	filterStr4list(str, nodename){
		let nlist = []
		for (let i = 0; i < list.length; i++) {
			let tstr = list[i][nodename]
			if (tstr.indexOf(str) != -1) {
				nlist.push(list[i])
			}
		}
		return nlist
	},
	
	checkStrInList(str, list) {
		for (let i = 0; i < list.length; i++) {
			let tstr = list[i]
			if (tstr == str) {
				return true
			}
		}
		return false
	},
	checkStrInStr(str,str2){
		if(str2 && str){
			str2+=""
			let list = str2.split(",")
			for (let i = 0; i < list.length; i++) {
				let tstr = list[i]
				if (tstr == str) {
					return true
				}
			}
		}
		return false
	},
	removeStrInStr(str,str2){
		let rstr = ""
		if(str2){
			let list = str2.split(",")
			for (let i = 0; i < list.length; i++) {
				let tstr = list[i]
				if (tstr == str) {
					continue
				}
				if (rstr == ""){
					rstr = tstr
				}else{
					rstr += ","+tstr
				}
			}
		}
		return rstr
	},
	getHtmlNote(html) {
		if (html) {
			if (html && html.indexOf("http://") == -1) {
				html = html.replace(/upload/g, fileUrl);
			}else{
				//html = html.replace(/http:\/\/localhost:8088\/upload/g,fileUrl)
				//html = html.replace(/http:\/\/10.0.2.2:8088\/upload/g,fileUrl)
				html = html.replace(/http(.*?)upload/g,fileUrl)
			}
		}
		return html
	},
	FangDou(){
	    let timmer = null;
	    return function(cb){
	        if(timmer){
	            clearInterval(timmer);
	        }
	        timmer = setTimeout(() => {
	            cb.call(this);
	        }, 500);
	
	    }
	
	},
	hideKeyboard(){
		uni.hideKeyboard()
	},
	getSimpleText(html){
		if (html) {
			html+=''
			//匹配html标签的正则表达式，"g"是搜索匹配多个符合的内容
			let re1 = new RegExp("<.+?>","g")
			//执行替换成空字符
			let msg = html.replace(re1,'')
			return msg
		}else{
			return ""
		}
		
	},
	getFileType(str){
		let type = 4
		if (str) {
			let h = str.substring(str.lastIndexOf('.') + 1)
			h = h.toLowerCase()
			if (h=='jpg' || h=='jpeg' || h=='png' || h=='bmp' || h=='gif') {
				type = 1
			}else if (h=='mp4' || h=='3gp') {
				type = 2
			}else if (h=='mp3' || h=='acc'  || h=='ogg') {
				type = 3
			}
		}else{
			type = 0
		}
		
		return type
	},
	chooseLocation(cb){
		// 点击调起地图选择位置
		if (uni.authorize) {
			
			uni.authorize({
				scope: 'scope.userLocation',
				success(res) {
					console.log("choosedian")
					uni.chooseLocation({
						success: function (res) {
							cb && cb(res)
							console.log('位置名称：' + res.name);
							console.log('详细地址：' + res.address);
							console.log('纬度：' + res.latitude);
							console.log('经度：' + res.longitude);
						 }
					});
				},
				fail(err) {
			
				}
			})
		}else{
			uni.chooseLocation({
				success: function (res) {
					cb && cb(res)
					console.log('位置名称：' + res.name);
					console.log('详细地址：' + res.address);
					console.log('纬度：' + res.latitude);
					console.log('经度：' + res.longitude);
				 }
			});
		}
		
	},
	openLocation(longitude,latitude,title) {
		//查看位置需要传经纬度才能执行
		const lat = parseFloat(latitude)
		const log = parseFloat(longitude)
		title = title || ""
		if(uni.authorize){
			uni.authorize({
				scope: 'scope.userLocation',
				success(res) {
					uni.openLocation({
						latitude: lat,
						longitude: log,
						name: title,
						success: function() {

						}
					});
				},
				fail(err) {

				}
			})
		}else{
			uni.openLocation({
				latitude: lat,
				longitude: log,
				name: title,
				success: function() {

				}
			});
		}

	},
	toTxmapLocation(){
		uni.itool.nto({
			url:'/pages/ditui/txchooselocation'
		})
	},

  downloadFileShow(attach){
		if (attach) {
			console.log("下载:"+fileUrl+attach)
			uni.downloadFile({
				url: this.fileUrl+attach, //仅为示例，并非真实的资源
				success: (res) => {
					if (res.statusCode === 200) {
						let tempFilePath = res.tempFilePath
						console.log("tempFilePath:"+tempFilePath)
						
						uni.saveFile({
						  tempFilePath: tempFilePath,
						  success: function (res) {
							let savedFilePath = res.savedFilePath
							uni.showToast({
								icon:'none',
								title: '保存路径为:'+savedFilePath
							})
							setTimeout(()=>{
								uni.openDocument({
									filePath: savedFilePath,
									success: function(rr) {
										console.log('打开文档成功');
									}
								});
							},1000)
							
						  }
						});
					}
				}
			});
		}else{
			uni.showToast({
				icon:'none',
				title: '没有文件'
			})
		}
		
	
	},
	toUnimap(){
		uni.itool.nto({
			url:'/pages/unimap/unimap'
		})
	},
	getAddress(res){
		return new Promise(resolve => {
			let addressobj = {}
			uni.request({
				url:`https://apis.map.qq.com/ws/geocoder/v1/?location=${res.latitude},${res.longitude}&key=SJJBZ-KFYHJ-HJ5F5-FSG6S-DILB6-NRB75`,
				success: lb => {
					addressobj.latitude = res.latitude
					addressobj.longitude = res.longitude
					addressobj.address = lb.data.result.address
					uni.showToast({
						icon:'none',
						title: addressobj.address
					})
					resolve(addressobj)
				},
			})
		});
		
	},
	getPointByAddress(addr){
		return new Promise(resolve => {
			let addressobj = {}
			uni.request({
				url:`https://apis.map.qq.com/ws/geocoder/v1/?address=${addr}&key=SJJBZ-KFYHJ-HJ5F5-FSG6S-DILB6-NRB75`,
				success: lb => {
					addressobj.latitude = lb.data.result.location.lat
					addressobj.longitude = lb.data.result.location.lng
					addressobj.address = lb.data.result.title
					uni.showToast({
						icon:'none',
						title: addressobj.address
					})
					resolve(addressobj)
				},
			})
		});
		
	},
	toUnimapSelect(){
		uni.itool.nto({
			url: '/pages/unimap/unimapchoose'
		});
	},
	getLocation(cb){
		let addressobj = {}
		uni.getLocation({
			type: 'gcj02',
			geocode:true,
			isHighAccuracy:true,
			success: (res) => {
				addressobj.latitude = res.latitude
				addressobj.longitude = res.longitude
				let addr = res.address
				if (addr) {
					addressobj.address = (addr.province||"")+(addr.city||"")+(addr.district||"")+(addr.street||"")+(addr.streetNum||"")
					cb && cb(addressobj)
				}else{
					ideautil.getAddress(res).then((data)=>{
						cb && cb(data)
					})
				}
				
			},
			fail:(res)=>{
				uni.getLocation({
					success: (res) => {
						//ideautil.getAddress(res,cb)
						ideautil.getAddress(res).then((data)=>{
							cb && cb(data)
						})
					}
				});
			}
		});
	},
	saoyisao(cb){
		uni.scanCode({
			success: (res) => {
				console.log(res)
				cb && cb(res.result)
			},
			fail: (res) => {
				console.log(res)
				cb && cb(null)
			}
			
		})
	},
	call(phone) {
		console.log('传入的电话', phone);
		const res = uni.getSystemInfoSync();

		// ios系统默认有个模态框
		if (res.platform == 'ios') {
			uni.makePhoneCall({
				phoneNumber: phone,

				success() {
					console.log('拨打成功了');
				},
				fail() {
					console.log('拨打失败了');
				}
			})
		} else {
			//安卓手机手动设置一个showActionSheet
			uni.showActionSheet({
				itemList: [phone, '呼叫'],
				success: function(res) {
					console.log(res);
					if (res.tapIndex == 1) {
						uni.makePhoneCall({
							phoneNumber: phone,
						})
					}
				}
			})
		}

	},
	nto(obj){
		uni.navigateTo({
			url: obj.url,
			fail: (s) => {
				uni.switchTab({
					url: obj.url,
					fail: (s2) => {
						uni.redirectTo({
							url: obj.url
						})
					}
				})
			}
		})
	}
}

const yewuutil = {
	toIndex(){
		uni.itool.nto({
			url: '/pages/index/index'
		})
	},
	toAddress(){
		uni.itool.nto({
			url: '/pages/address/address'
		})
	},
	toMyBill(){
		uni.itool.nto({
			url: '/pages/bill/bill'
		})
	},
	toMyFavs(){
		uni.itool.nto({
			url: '/pages/favs/favs'
		})
	},
	toShops(){
		uni.itool.nto({
			url: '/pages/shops/shops'
		})
	},
	toMore(){
		uni.itool.nto({
			url: '/pages/me/me'
		})
	},
	toBlog(){
		uni.itool.nto({
			url: '/pages/blog/blog'
		})
	},
	toPosts(){
		uni.itool.nto({
			url: '/pages/posts/posts'
		})
	},
	toGoodDetail(gid, showpl) {
		uni.itool.nto({
			url: "../good/gooddetail?gid=" + gid+"&showpl="+showpl
		})
	},
	toBlogDetail(id) {
		uni.itool.nto({
			url: "../blog/blogdetail?id=" + id
		})
	}
	,
	toHistory(id) {
		uni.itool.nto({
			url: "../history/history"
		})
	},
	toLogin() {
		uni.removeStorageSync("his_ids")
		uni.redirectTo({
			url: "../login/login"
		})
	},
	toMyFriend(){
		uni.itool.nto({
			url:'/pages/qunzu/friends'
		})
	},
	toYzMessage(){
		 uni.itool.nto({
		 	url:'/pages/qunzu/yzmessage'
		 })
	},
	toChat(fid,type){
		type = type || 1
		uni.itool.nto({
			url:`../chati/chati?fid=${fid}&chattype=${type}`
		})
	},
	toChatUni(fid,type){
		type = type || 1
		uni.itool.nto({
			url:`/pages/chat/chat?fid=${fid}&chattype=${type}`
		})
	},
	toHuihua(){
		uni.itool.nto({
			url:`../chat/huihua`
		})
	},
	toQunzu(){
		uni.itool.nto({
			url:'/pages/qunzu/qunzu'
		})
	},
	toBlogList(){
		uni.itool.nto({
			url:'/pages/blog/bloglist'
		})
	},
	toBillqs(){
		uni.itool.nto({
			url:"/pages/bill/billqs"
		})
	},
}








module.exports = {
	ideautil, yewuutil
}
