(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/nk-select-file/nk-select-file"],{

/***/ 778:
/*!************************************************************************************************************************************************!*\
  !*** H:/biyesheji2025/workspace/intellijspace/shoppayuser3mgfuwutuijianjiadianweixiu_up_ssm6/app/components/nk-select-file/nk-select-file.vue ***!
  \************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nk_select_file_vue_vue_type_template_id_7bc259a4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nk-select-file.vue?vue&type=template&id=7bc259a4& */ 779);
/* harmony import */ var _nk_select_file_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nk-select-file.vue?vue&type=script&lang=js& */ 781);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _nk_select_file_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _nk_select_file_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _nk_select_file_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nk-select-file.vue?vue&type=style&index=0&lang=scss& */ 783);
/* harmony import */ var _D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 33);

var renderjs





/* normalize component */

var component = Object(_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _nk_select_file_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _nk_select_file_vue_vue_type_template_id_7bc259a4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _nk_select_file_vue_vue_type_template_id_7bc259a4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _nk_select_file_vue_vue_type_template_id_7bc259a4___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "components/nk-select-file/nk-select-file.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 779:
/*!*******************************************************************************************************************************************************************************!*\
  !*** H:/biyesheji2025/workspace/intellijspace/shoppayuser3mgfuwutuijianjiadianweixiu_up_ssm6/app/components/nk-select-file/nk-select-file.vue?vue&type=template&id=7bc259a4& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_nk_select_file_vue_vue_type_template_id_7bc259a4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./nk-select-file.vue?vue&type=template&id=7bc259a4& */ 780);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_nk_select_file_vue_vue_type_template_id_7bc259a4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_nk_select_file_vue_vue_type_template_id_7bc259a4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_nk_select_file_vue_vue_type_template_id_7bc259a4___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_nk_select_file_vue_vue_type_template_id_7bc259a4___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 780:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!H:/biyesheji2025/workspace/intellijspace/shoppayuser3mgfuwutuijianjiadianweixiu_up_ssm6/app/components/nk-select-file/nk-select-file.vue?vue&type=template&id=7bc259a4& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 781:
/*!*************************************************************************************************************************************************************************!*\
  !*** H:/biyesheji2025/workspace/intellijspace/shoppayuser3mgfuwutuijianjiadianweixiu_up_ssm6/app/components/nk-select-file/nk-select-file.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_nk_select_file_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./nk-select-file.vue?vue&type=script&lang=js& */ 782);
/* harmony import */ var _D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_nk_select_file_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_nk_select_file_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_nk_select_file_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_nk_select_file_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_nk_select_file_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 782:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!H:/biyesheji2025/workspace/intellijspace/shoppayuser3mgfuwutuijianjiadianweixiu_up_ssm6/app/components/nk-select-file/nk-select-file.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/*
*	
* {property} 使用 v-model 绑定一个变量来控制组件的开启与关闭
* {property} navBgColor [String] 顶部标题栏背景色
* {property} folderImg [String] 文件夹的图片
* {property} backImg [String] 返回上一级图片
* {property} directionImg [String] 右指向箭头 
* {property} enterImg [String] 进入文件夹箭头
* {property} fileImg [String] 未知文件通用图标，当前仅可识别 pdf、doc/docx、txt
* {property} txtImg [String] txt文件图标
* {property} docImg [String] doc/docx文件图标
* {property} pdfImg [String] pdf文件图标 
* {property} selectedImg [String] 选中状态下的按钮图标
* {property} unselectedImg [String] 未选中状态下的按钮图标
* {property} titel [String] 标题文字，默认 '选择文件'
* {property} titelSize [String,Number] 标题文字大小，默认 36rpx
* {property} titelWeight [String,Number] 标题文字粗细，默认 600
* {property} titelColor [String] 标题文字颜色，默认 #373737
* {property} btnText [String] 底部按钮文字， 默认 '上传'
* {property} btnSize [String,Number] 底部按钮文字大小， 默认 36rpx
* {property} btnHeight [String,Number] 底部按钮高度， 默认 92rpx
* {property} btnBgColor [String] 底部按钮颜色， 默认 #6521e2
* {property} btnTextColor [String] 底部按钮文字颜色， 默认 #fff
* {property} filterArr [Array] 筛选文件类型，示例：['doc','PDF']，不区分大小写
*
* {event} confirm [Function] 点击上传按钮触发的回调事件，会返回选中文件的地址 event = [{name: name, url: path, sizeMB: sizeMb}]
*		name: 文件名  url: 文件地址  sizeMB: 文件大小，单位MB
*/
var _default2 = {
  name: "nk-select-file",
  props: {
    value: {
      type: Boolean,
      default: false
    },
    backImg: {
      type: String,
      default: 'http://ideapic-1255600738.cos.ap-guangzhou.myqcloud.com/nkselect/backImg.png'
    },
    directionImg: {
      type: String,
      default: 'http://ideapic-1255600738.cos.ap-guangzhou.myqcloud.com/nkselect/directionImg.png'
    },
    enterImg: {
      type: String,
      default: 'http://ideapic-1255600738.cos.ap-guangzhou.myqcloud.com/nkselect/enterImg.png'
    },
    folderImg: {
      type: String,
      default: 'http://ideapic-1255600738.cos.ap-guangzhou.myqcloud.com/nkselect/folderImg.png'
    },
    fileImg: {
      type: String,
      default: 'http://ideapic-1255600738.cos.ap-guangzhou.myqcloud.com/nkselect/fileImg.png'
    },
    txtImg: {
      type: String,
      default: 'http://ideapic-1255600738.cos.ap-guangzhou.myqcloud.com/nkselect/txtImg.png'
    },
    docImg: {
      type: String,
      default: 'http://ideapic-1255600738.cos.ap-guangzhou.myqcloud.com/nkselect/docImg.png'
    },
    pdfImg: {
      type: String,
      default: 'http://ideapic-1255600738.cos.ap-guangzhou.myqcloud.com/nkselect/pdfImg.png'
    },
    selectedImg: {
      type: String,
      default: 'http://ideapic-1255600738.cos.ap-guangzhou.myqcloud.com/nkselect/selectedImg.png'
    },
    unselectedImg: {
      type: String,
      default: 'http://ideapic-1255600738.cos.ap-guangzhou.myqcloud.com/nkselect/unselectedImg.png'
    },
    titel: {
      type: String,
      default: '选择文件'
    },
    titelSize: {
      type: [String, Number],
      default: 36
    },
    titelWeight: {
      type: [String, Number],
      default: 600
    },
    titelColor: {
      type: String,
      default: '#373737'
    },
    btnText: {
      type: String,
      default: '上传'
    },
    btnSize: {
      type: [String, Number],
      default: 36
    },
    btnHeight: {
      type: [String, Number],
      default: 92
    },
    btnBgColor: {
      type: String,
      default: '#6521e2'
    },
    btnTextColor: {
      type: String,
      default: '#fff'
    },
    navBgColor: {
      type: String,
      default: '#fff'
    },
    filterArr: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {
      barHeight: '',
      // 状态栏高度
      rootAddress: {},
      // 根目录
      addressBar: [],
      // 地址栏记录栈
      folderArr: [],
      // 文件夹
      fileArr: [],
      // 文件
      selectArr: [],
      // 选中文件集合
      isExit: true,
      // 退出
      isOpen: false,
      inaccessible: false,
      // 无法访问提示
      titelStyle: {
        fontSize: this.titelSize + 'rpx',
        fontWeight: this.titelWeight,
        color: this.titelColor
      },
      btnStyle: {
        height: this.btnHeight + 'rpx',
        backgroundColor: this.btnBgColor,
        color: this.btnTextColor,
        fontSize: this.btnSize + 'rpx'
      },
      filterReg: ''
    };
  },
  watch: {
    value: function value(val) {
      if (val) {
        this.open();
      } else {
        this.close();
      }
    }
  },
  mounted: function mounted() {
    if (Object.prototype.toString.call(this.filterArr) === '[object Array]' && this.filterArr.length > 0) {
      var str = this.filterArr.join("|");
      this.filterReg = new RegExp(str, 'i');
    }
  },
  methods: {
    // 打开组件
    open: function open() {
      this.isOpen = true;
      this.getBarHeight();
      this.getRootDirectory();
    },
    // 关闭组件
    close: function close() {
      var _this = this;
      this.isOpen = false;
      this.rootAddress = {}; // 根目录
      this.addressBar = []; // 地址栏记录栈
      this.folderArr = [];
      this.fileArr = [];
      this.selectArr = []; // 选中文件集合
      this.$emit('input', false);
      // 放到下一个生命周期，因为双向绑定的value修改父组件状态需要时间，且是异步的
      this.$nextTick(function () {
        _this.$emit('change', false);
      });
    },
    // 获取状态栏高度
    getBarHeight: function getBarHeight() {
      var self = this;
      uni.getSystemInfo({
        success: function success(res) {
          self.barHeight = res.statusBarHeight;
        }
      });
    },
    // 获取根目录
    getRootDirectory: function getRootDirectory() {
      this.inaccessible = false;
      // 修改退出状态，以便在点击返回按钮时最后一层返回的是根目录，再点击一次才会退出
      this.isExit = false;
      this.addressBar = [];
      var environment = plus.android.importClass("android.os.Environment");
      environment.getExternalStorageState() === environment.MEDIA_MOUNTED;
      var sdRoot = environment.getExternalStorageDirectory();
      var rootName = plus.android.invoke(sdRoot, "getName");
      this.rootAddress = {
        name: rootName,
        file: sdRoot
      };
      var files = plus.android.invoke(sdRoot, "listFiles");
      if (!(Object.prototype.toString.call(files) === '[object Array]')) {
        uni.showToast({
          icon: 'none',
          title: '请确认授权访问',
          duration: 2000
        });
        return;
      }
      var len = files.length;
      for (var i = 0; i < len; i++) {
        // 过滤隐藏文件
        if (!plus.android.invoke(files[i], "isHidden")) {
          // 判断是文件还是文件夹
          if (plus.android.invoke(files[i], "isDirectory")) {
            var folderName = plus.android.invoke(files[i], "getName");
            this.folderArr.push({
              name: folderName,
              file: files[i]
            });
          } else {
            var fileName = plus.android.invoke(files[i], "getName");
            if (this.filterArr.length > 0) {
              if (fileName.search(this.filterReg) < 0) {
                continue;
              }
            }
            if (fileName.search(/txt/i) > -1) {
              // txt 文件
              this.fileArr.push({
                name: fileName,
                file: files[i],
                type: 'txt',
                select: false
              });
            } else if (fileName.search(/doc|docx/i) > -1) {
              // doc/docx 文件
              this.fileArr.push({
                name: fileName,
                file: files[i],
                type: 'doc',
                select: false
              });
            } else if (fileName.search(/pdf/i) > -1) {
              // pdf 文件
              this.fileArr.push({
                name: fileName,
                file: files[i],
                type: 'pdf',
                select: false
              });
            } else {
              // 其他文件
              this.fileArr.push({
                name: fileName,
                file: files[i],
                type: 'file',
                select: false
              });
            }
          }
        }
      }
      // 排序，不区分大小写
      this.folderArr.sort(function (a, b) {
        return a.name.toUpperCase() > b.name.toUpperCase() ? '1' : '-1';
      });
      this.fileArr.sort(function (a, b) {
        return a.name.toUpperCase() > b.name.toUpperCase() ? '1' : '-1';
      });
      this.rootAddress.folderArr = this.folderArr;
      this.rootAddress.fileArr = this.fileArr;
    },
    // 进入文件夹
    toFolder: function toFolder(event) {
      this.isExit = false; // 地址栈中存在新地址，重置退出状态
      this.folderArr = [];
      this.fileArr = [];
      this.addressBar.push(event);
      var files = plus.android.invoke(event.file, "listFiles");
      if (files == null) {
        this.inaccessible = true;
      }
      var len = files.length;
      for (var i = 0; i < len; i++) {
        // 过滤隐藏文件
        if (!plus.android.invoke(files[i], "isHidden")) {
          // 判断是文件还是文件夹
          if (plus.android.invoke(files[i], "isDirectory")) {
            var folderName = plus.android.invoke(files[i], "getName");
            this.folderArr.push({
              name: folderName,
              file: files[i]
            });
          } else {
            var fileName = plus.android.invoke(files[i], "getName");
            if (this.filterArr.length > 0) {
              if (fileName.search(this.filterReg) < 0) {
                continue;
              }
            }
            if (fileName.search(/txt/i) > -1) {
              // txt 文件
              this.fileArr.push({
                name: fileName,
                file: files[i],
                type: 'txt',
                select: false
              });
            } else if (fileName.search(/doc|docx/i) > -1) {
              // doc/docx 文件
              this.fileArr.push({
                name: fileName,
                file: files[i],
                type: 'doc',
                select: false
              });
            } else if (fileName.search(/pdf/i) > -1) {
              // pdf 文件
              this.fileArr.push({
                name: fileName,
                file: files[i],
                type: 'pdf',
                select: false
              });
            } else {
              // 其他文件
              this.fileArr.push({
                name: fileName,
                file: files[i],
                type: 'file',
                select: false
              });
            }
          }
        }
      }
      // 排序，不区分大小写
      this.folderArr.sort(function (a, b) {
        return a.name.toUpperCase() > b.name.toUpperCase() ? '1' : '-1';
      });
      this.fileArr.sort(function (a, b) {
        return a.name.toUpperCase() > b.name.toUpperCase() ? '1' : '-1';
      });
    },
    // 返回根目录
    backRoot: function backRoot() {
      this.inaccessible = false;
      this.addressBar = [];
      this.folderArr = this.rootAddress.folderArr;
      this.fileArr = this.rootAddress.fileArr;
    },
    // 返回上级文件夹
    backFolder: function backFolder(event, index) {
      this.inaccessible = false;
      var len = this.addressBar.length;
      if (index + 1 == len) {
        // 点击当前文件夹--无事发生
        return;
      } else {
        this.folderArr = [];
        this.fileArr = [];
        this.addressBar.splice(index + 1, len - index + 1);
        var files = plus.android.invoke(event.file, "listFiles");
        var len = files.length;
        for (var i = 0; i < len; i++) {
          // 过滤隐藏文件
          if (!plus.android.invoke(files[i], "isHidden")) {
            // 判断是文件还是文件夹
            if (plus.android.invoke(files[i], "isDirectory")) {
              var folderName = plus.android.invoke(files[i], "getName");
              this.folderArr.push({
                name: folderName,
                file: files[i]
              });
            } else {
              var fileName = plus.android.invoke(files[i], "getName");
              if (this.filterArr.length > 0) {
                if (fileName.search(this.filterReg) < 0) {
                  continue;
                }
              }
              if (fileName.search(/txt/i) > -1) {
                // txt 文件
                this.fileArr.push({
                  name: fileName,
                  file: files[i],
                  type: 'txt',
                  select: false
                });
              } else if (fileName.search(/doc|docx/i) > -1) {
                // doc/docx 文件
                this.fileArr.push({
                  name: fileName,
                  file: files[i],
                  type: 'doc',
                  select: false
                });
              } else if (fileName.search(/pdf/i) > -1) {
                // pdf 文件
                this.fileArr.push({
                  name: fileName,
                  file: files[i],
                  type: 'pdf',
                  select: false
                });
              } else {
                // 其他文件
                this.fileArr.push({
                  name: fileName,
                  file: files[i],
                  type: 'file',
                  select: false
                });
              }
            }
          }
        }
        // 排序，不区分大小写
        this.folderArr.sort(function (a, b) {
          return a.name.toUpperCase() > b.name.toUpperCase() ? '1' : '-1';
        });
        this.fileArr.sort(function (a, b) {
          return a.name.toUpperCase() > b.name.toUpperCase() ? '1' : '-1';
        });
      }
    },
    // 选中文件
    selectFile: function selectFile(index) {
      if (this.fileArr[index].select) {
        // 取消选中
        this.$set(this.fileArr[index], 'select', false);
        var name = this.fileArr[index].name;
        for (var i = 0; i < this.selectArr.length; i++) {
          if (name == this.selectArr[i].name) {
            this.selectArr.splice(i, 1);
            break;
          }
        }
      } else {
        // 选中
        this.$set(this.fileArr[index], 'select', true);

        // 读文件大小  
        var FileInputStream = plus.android.importClass("java.io.FileInputStream");
        var fileSize = new FileInputStream(this.fileArr[index].file);
        var size = fileSize.available();
        var sizeMb = size / 1048576;
        sizeMb = sizeMb.toFixed(4);

        // 获取文件的相对路径
        var Path = plus.android.invoke(this.fileArr[index].file, "getPath");
        this.selectArr.push({
          name: this.fileArr[index].name,
          url: Path,
          sizeMB: sizeMb
        });
      }
    },
    // 点击上传按钮
    uploadBtn: function uploadBtn() {
      this.$emit("confirm", this.selectArr);
      this.close();
    },
    // 点击返回
    backAddress: function backAddress() {
      // 先判断地址栈中是否还有地址
      var len = this.addressBar.length;
      if (len > 1) {
        // 返回上级文件夹
        var index = len - 2;
        var event = this.addressBar[index];
        this.backFolder(event, index);
      } else {
        // 退出文件选择
        if (this.isExit) {
          // 退出文件选择
          this.close();
          // this.$u.toast('在点击一次退出文件选择')
        } else {
          // 返回根目录
          this.isExit = true; // 下一次再点击则退出
          this.backRoot();
          uni.showToast({
            title: '再操作一次退出文件选择',
            icon: 'none',
            duration: 1000
          });
        }
      }
    }
  }
};
exports.default = _default2;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 783:
/*!**********************************************************************************************************************************************************************************!*\
  !*** H:/biyesheji2025/workspace/intellijspace/shoppayuser3mgfuwutuijianjiadianweixiu_up_ssm6/app/components/nk-select-file/nk-select-file.vue?vue&type=style&index=0&lang=scss& ***!
  \**********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_nk_select_file_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./nk-select-file.vue?vue&type=style&index=0&lang=scss& */ 784);
/* harmony import */ var _D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_nk_select_file_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_nk_select_file_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_nk_select_file_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_nk_select_file_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_nk_select_file_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 784:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!H:/biyesheji2025/workspace/intellijspace/shoppayuser3mgfuwutuijianjiadianweixiu_up_ssm6/app/components/nk-select-file/nk-select-file.vue?vue&type=style&index=0&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

}]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/nk-select-file/nk-select-file.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/nk-select-file/nk-select-file-create-component',
    {
        'components/nk-select-file/nk-select-file-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('2')['createComponent'](__webpack_require__(778))
        })
    },
    [['components/nk-select-file/nk-select-file-create-component']]
]);
