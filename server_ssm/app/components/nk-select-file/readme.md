### select-file 文件选择（安卓）

使用 v-model 绑定一个变量来控制组件的开启与关闭

**属性说明：**

|属性名			|是否必须	|类型			|默认值			|说明								|
|---			|----		|----			|---			|---								|
|filterArr		|否			|Array			|---			|筛选文件类型（不区分大小写）见下方说明			|
|folderImg		|否			|String			|---			|文件夹的图片						    |
|backImg		|否			|String			|---			|返回上一级图片						|
|directionImg	|否			|String			|---		    |右指向箭头							|
|enterImg		|否			|String			|---			|进入文件夹箭头						|
|fileImg		|否			|String			|---			|未知文件通用图标，当前仅可识别 pdf、doc/docx、txt	|
|txtImg			|否			|String			|---			|txt文件图标							|
|docImg			|否			|String			|---			|doc/docx文件图标					|
|pdfImg			|否			|String			|---			|pdf文件图标 						|
|selectedImg	|否			|String			|---			|取消按钮颜色						    |
|unselectedImg	|否			|String			|---			|未选中状态下的按钮图标				|
|titel			|否			|String			|选择文件		|标题文字							|
|titelSize		|否			|String,Number	|36(rpx)		|标题文字大小							|
|titelWeight	|否			|String,Number	|600			|标题文字粗细							|
|titelColor		|否			|String			|#373737		|标题文字颜色							|
|navBgColor		|否			|String			|#fff			|顶部标题栏背景色						|
|btnText		|否			|String			|上传			|底部按钮文字							|
|btnSize		|否			|String,Number	|36(rpx)		|底部按钮文字大小						|
|btnHeight		|否			|String,Number	|92(rpx)		|底部按钮高度							|
|btnBgColor		|否			|String			|#6521e2		|底部按钮颜色							|
|btnTextColor	|否			|String			|#fff			|底部按钮文字颜色						|

**filterArr属性说明**
格式为['zip','RAR']，不区分大小写

**事件说明：**

|事件称名	|说明						|
|---		|----						|
|confirm	|点击上传按钮触发的回调事件，会返回选中文件的地址，参数见下方		|

**confirm参数说明：**

|事件称名	|说明						|
|---		|----						|
|name		|文件名						|
|url		|文件地址					|
|sizeMB		|文件大小					|