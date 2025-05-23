(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/chat/chat"],{

/***/ 338:
/*!******************************************************************************************************************************************!*\
  !*** H:/biyesheji2025/workspace/intellijspace/shoppayuser3mgfuwutuijianjiadianweixiu_up_ssm6/app/main.js?{"page":"pages%2Fchat%2Fchat"} ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
__webpack_require__(/*! uni-pages */ 26);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
var _chat = _interopRequireDefault(__webpack_require__(/*! ./pages/chat/chat.vue */ 339));
// @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_chat.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["createPage"]))

/***/ }),

/***/ 339:
/*!***********************************************************************************************************************!*\
  !*** H:/biyesheji2025/workspace/intellijspace/shoppayuser3mgfuwutuijianjiadianweixiu_up_ssm6/app/pages/chat/chat.vue ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chat_vue_vue_type_template_id_bf16e7f4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chat.vue?vue&type=template&id=bf16e7f4& */ 340);
/* harmony import */ var _chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chat.vue?vue&type=script&lang=js& */ 342);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _chat_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chat.vue?vue&type=style&index=0&lang=scss& */ 344);
/* harmony import */ var _D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 33);

var renderjs





/* normalize component */

var component = Object(_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _chat_vue_vue_type_template_id_bf16e7f4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _chat_vue_vue_type_template_id_bf16e7f4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _chat_vue_vue_type_template_id_bf16e7f4___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/chat/chat.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 340:
/*!******************************************************************************************************************************************************!*\
  !*** H:/biyesheji2025/workspace/intellijspace/shoppayuser3mgfuwutuijianjiadianweixiu_up_ssm6/app/pages/chat/chat.vue?vue&type=template&id=bf16e7f4& ***!
  \******************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_template_id_bf16e7f4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./chat.vue?vue&type=template&id=bf16e7f4& */ 341);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_template_id_bf16e7f4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_template_id_bf16e7f4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_template_id_bf16e7f4___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_template_id_bf16e7f4___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 341:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!H:/biyesheji2025/workspace/intellijspace/shoppayuser3mgfuwutuijianjiadianweixiu_up_ssm6/app/pages/chat/chat.vue?vue&type=template&id=bf16e7f4& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    uNavbar: function () {
      return Promise.all(/*! import() | node-modules/uview-ui/components/u-navbar/u-navbar */[__webpack_require__.e("common/vendor"), __webpack_require__.e("node-modules/uview-ui/components/u-navbar/u-navbar")]).then(__webpack_require__.bind(null, /*! uview-ui/components/u-navbar/u-navbar.vue */ 416))
    },
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 342:
/*!************************************************************************************************************************************************!*\
  !*** H:/biyesheji2025/workspace/intellijspace/shoppayuser3mgfuwutuijianjiadianweixiu_up_ssm6/app/pages/chat/chat.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./chat.vue?vue&type=script&lang=js& */ 343);
/* harmony import */ var _D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 343:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!H:/biyesheji2025/workspace/intellijspace/shoppayuser3mgfuwutuijianjiadianweixiu_up_ssm6/app/pages/chat/chat.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 11));
var _api = __webpack_require__(/*! common/config/api.js */ 175);
var _vuex = __webpack_require__(/*! vuex */ 30);
var _api2 = __webpack_require__(/*! common/config/api */ 175);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var _default = {
  computed: _objectSpread({}, (0, _vuex.mapState)(['userInfo'])),
  data: function data() {
    return {
      fileUrl: _api.fileUrl,
      msgtype: 1,
      //文字消息
      textMsg: '',
      lastmsgcount: 0,
      msgcount: 0,
      refreshtimmer: null,
      //消息列表
      isHistoryLoading: false,
      scrollAnimation: false,
      scrollTop: 0,
      scrollToView: '',
      msgList: [],
      msgImgList: [],
      myuid: 0,
      fuser: {},
      //录音相关参数

      //H5不能录音
      RECORDER: uni.getRecorderManager(),
      isVoice: false,
      voiceTis: '按住 说话',
      recordTis: "手指上滑 取消发送",
      recording: false,
      willStop: false,
      initPoint: {
        identifier: 0,
        Y: 0
      },
      recordTimer: null,
      recordLength: 0,
      //播放语音相关参数
      AUDIO: uni.createInnerAudioContext(),
      playMsgid: null,
      VoiceTimer: null,
      // 抽屉参数
      popupLayerClass: '',
      // more参数
      hideMore: true,
      //表情定义
      hideEmoji: true,
      emojiList: [[{
        "url": "1.png",
        alt: "[微笑]"
      }, {
        "url": "2.png",
        alt: "[生气]"
      }, {
        "url": "3.png",
        alt: "[坏笑]"
      }, {
        "url": "4.png",
        alt: "[难受]"
      }, {
        "url": "5.png",
        alt: "[困]"
      }, {
        "url": "6.png",
        alt: "[偷看]"
      }, {
        "url": "7.png",
        alt: "[难过]"
      }, {
        "url": "8.png",
        alt: "[斜眼]"
      }, {
        "url": "9.png",
        alt: "[委屈]"
      }, {
        "url": "10.png",
        alt: "[害羞]"
      }, {
        "url": "11.png",
        alt: "[裂开]"
      }, {
        "url": "12.png",
        alt: "[偷笑]"
      }, {
        "url": "13.png",
        alt: "[痛苦]"
      }, {
        "url": "14.png",
        alt: "[白眼]"
      }, {
        "url": "15.png",
        alt: "[丑]"
      }, {
        "url": "16.png",
        alt: "[哇哇哭]"
      }, {
        "url": "17.png",
        alt: "[笑嘻嘻]"
      }, {
        "url": "18.png",
        alt: "[盯着你]"
      }, {
        "url": "19.png",
        alt: "[啊哈]"
      }, {
        "url": "20.png",
        alt: "[吃瓜]"
      }, {
        "url": "21.png",
        alt: "[哦吼]"
      }, {
        "url": "22.png",
        alt: "[哭死]"
      }, {
        "url": "23.png",
        alt: "[打脸]"
      }, {
        "url": "24.png",
        alt: "[斗鸡眼]"
      }], [{
        "url": "25.png",
        alt: "[发呆]"
      }, {
        "url": "26.png",
        alt: "[憨笑]"
      }, {
        "url": "27.png",
        alt: "[无语]"
      }, {
        "url": "28.png",
        alt: "[鸡贼]"
      }, {
        "url": "29.png",
        alt: "[大无语]"
      }, {
        "url": "30.png",
        alt: "[哭吐了]"
      }, {
        "url": "31.png",
        alt: "[呲牙笑]"
      }, {
        "url": "32.png",
        alt: "[奸笑]"
      }, {
        "url": "33.png",
        alt: "[啊啊啊]"
      }, {
        "url": "34.png",
        alt: "[哈嘿]"
      }, {
        "url": "35.png",
        alt: "[惊讶]"
      }, {
        "url": "36.png",
        alt: "[指你]"
      }, {
        "url": "37.png",
        alt: "[可爱型]"
      }, {
        "url": "38.png",
        alt: "[快哭了]"
      }, {
        "url": "39.png",
        alt: "[抠鼻屎]"
      }, {
        "url": "40.png",
        alt: "[酷酷]"
      }, {
        "url": "41.png",
        alt: "[笑汗]"
      }, {
        "url": "42.png",
        alt: "[算命]"
      }, {
        "url": "43.png",
        alt: "[红脸坏笑]"
      }, {
        "url": "44.png",
        alt: "[委屈死了]"
      }, {
        "url": "45.png",
        alt: "[爆炸]"
      }, {
        "url": "46.png",
        alt: "[吐了]"
      }, {
        "url": "47.png",
        alt: "[么么哒]"
      }, {
        "url": "48.png",
        alt: "[吐血]"
      }], [{
        "url": "49.png",
        alt: "[面无表情]"
      }, {
        "url": "50.png",
        alt: "[捂嘴吐]"
      }, {
        "url": "51.png",
        alt: "[斜眼看]"
      }, {
        "url": "52.png",
        alt: "[花痴]"
      }, {
        "url": "53.png",
        alt: "[被打]"
      }, {
        "url": "54.png",
        alt: "[瞌睡]"
      }, {
        "url": "55.png",
        alt: "[冥想]"
      }, {
        "url": "56.png",
        alt: "[俏皮]"
      }, {
        "url": "57.png",
        alt: "[戳手委屈]"
      }, {
        "url": "58.png",
        alt: "[端庄]"
      }, {
        "url": "59.png",
        alt: "[emmm]"
      }, {
        "url": "60.png",
        alt: "[欢呼]"
      }, {
        "url": "61.png",
        alt: "[笑哭了]"
      }, {
        "url": "62.png",
        alt: "[抱抱]"
      }, {
        "url": "63.png",
        alt: "[闭眼笑]"
      }, {
        "url": "64.png",
        alt: "[捂嘴微笑]"
      }, {
        "url": "65.png",
        alt: "[笑哭2]"
      }, {
        "url": "66.png",
        alt: "[笑嘻嘻]"
      }, {
        "url": "67.png",
        alt: "[笑露齿]"
      }, {
        "url": "68.png",
        alt: "[阴脸笑]"
      }, {
        "url": "69.png",
        alt: "[问号脸]"
      }, {
        "url": "70.png",
        alt: "[拜拜]"
      }, {
        "url": "71.png",
        alt: "[难受2]"
      }, {
        "url": "72.png",
        alt: "[傻笑2]"
      }], [{
        "url": "73.png",
        alt: "[爆炸2]"
      }, {
        "url": "74.png",
        alt: "[二哈]"
      }, {
        "url": "75.png",
        alt: "[二哈吐舌]"
      }, {
        "url": "76.png",
        alt: "[狗狗笑哭]"
      }, {
        "url": "77.png",
        alt: "[狗狗绿帽]"
      }, {
        "url": "78.png",
        alt: "[狗狗张嘴]"
      }, {
        "url": "79.png",
        alt: "[狗狗绿扇]"
      }, {
        "url": "80.png",
        alt: "[狗狗]"
      }, {
        "url": "81.png",
        alt: "[猫咪]"
      }, {
        "url": "82.png",
        alt: "[牛啊]"
      }, {
        "url": "83.png",
        alt: "[爱心]"
      }, {
        "url": "84.png",
        alt: "[心裂开]"
      }, {
        "url": "85.png",
        alt: "[玫瑰花]"
      }, {
        "url": "86.png",
        alt: "[枯萎]"
      }, {
        "url": "87.png",
        alt: "[棒]"
      }, {
        "url": "88.png",
        alt: "[差]"
      }, {
        "url": "89.png",
        alt: "[红药]"
      }, {
        "url": "90.png",
        alt: "[绿药]"
      }, {
        "url": "91.png",
        alt: "[抱拳]"
      }, {
        "url": "92.png",
        alt: "[ok]"
      }, {
        "url": "93.png",
        alt: "[pk]"
      }, {
        "url": "94.png",
        alt: "[绿帽子]"
      }, {
        "url": "95.png",
        alt: "[菜刀]"
      }]],
      //表情图片图床名称 ，由于我上传的第三方图床名称会有改变，所以有此数据来做对应，您实际应用中应该不需要
      onlineEmoji: {
        "1.png": "1.png",
        "2.png": "2.png",
        "3.png": "3.png",
        "4.png": "4.png",
        "5.png": "5.png",
        "6.png": "6.png",
        "7.png": "7.png",
        "8.png": "8.png",
        "9.png": "9.png",
        "10.png": "10.png",
        "11.png": "11.png",
        "12.png": "12.png",
        "13.png": "13.png",
        "14.png": "14.png",
        "15.png": "15.png",
        "16.png": "16.png",
        "17.png": "17.png",
        "18.png": "18.png",
        "19.png": "19.png",
        "20.png": "20.png",
        "21.png": "21.png",
        "22.png": "22.png",
        "23.png": "23.png",
        "24.png": "24.png",
        "25.png": "25.png",
        "26.png": "26.png",
        "27.png": "27.png",
        "28.png": "28.png",
        "29.png": "29.png",
        "30.png": "30.png",
        "31.png": "31.png",
        "32.png": "32.png",
        "33.png": "33.png",
        "34.png": "34.png",
        "35.png": "35.png",
        "36.png": "36.png",
        "37.png": "37.png",
        "38.png": "38.png",
        "39.png": "39.png",
        "40.png": "40.png",
        "41.png": "41.png",
        "42.png": "42.png",
        "43.png": "43.png",
        "44.png": "44.png",
        "45.png": "45.png",
        "46.png": "46.png",
        "47.png": "47.png",
        "48.png": "48.png",
        "49.png": "49.png",
        "50.png": "50.png",
        "51.png": "51.png",
        "52.png": "52.png",
        "53.png": "53.png",
        "54.png": "54.png",
        "55.png": "55.png",
        "56.png": "56.png",
        "57.png": "57.png",
        "58.png": "58.png",
        "59.png": "59.png",
        "60.png": "60.png",
        "61.png": "61.png",
        "62.png": "62.png",
        "63.png": "63.png",
        "64.png": "64.png",
        "65.png": "65.png",
        "66.png": "66.png",
        "67.png": "67.png",
        "68.png": "68.png",
        "69.png": "69.png",
        "70.png": "70.png",
        "71.png": "71.png",
        "72.png": "72.png",
        "73.png": "73.png",
        "74.png": "74.png",
        "75.png": "75.png",
        "76.png": "76.png",
        "77.png": "77.png",
        "78.png": "78.png",
        "79.png": "79.png",
        "80.png": "80.png",
        "81.png": "81.png",
        "82.png": "82.png",
        "83.png": "83.png",
        "84.png": "84.png",
        "85.png": "85.png",
        "86.png": "86.png",
        "87.png": "87.png",
        "88.png": "88.png",
        "89.png": "89.png",
        "90.png": "90.png",
        "91.png": "91.png",
        "92.png": "92.png",
        "93.png": "93",
        "94.png": "94.png",
        "95.png": "95.png"
      },
      //红包相关参数
      windowsState: '',
      redenvelopeData: {
        rid: null,
        //红包ID
        from: null,
        face: null,
        blessing: null,
        money: null
      }
    };
  },
  onLoad: function onLoad(option) {
    var _this = this;
    this.msgtype = option.chattype || 1;
    this.myuid = this.userInfo.id;
    var fid = option.fid;
    if (this.msgtype == "2") {
      (0, _api.findj)({
        params: {
          table: 'qunzu',
          id: fid
        }
      }).then(function (res) {
        res.username = res.title;
        _this.fuser = res;
      });
    } else {
      (0, _api.findj)({
        params: {
          table: 'user',
          id: fid
        }
      }).then(function (res) {
        _this.fuser = res;
      });
    }

    //语音自然播放结束
    this.AUDIO.onEnded(function (res) {
      _this.playMsgid = null;
    });

    //录音开始事件
    this.RECORDER.onStart(function (e) {
      _this.recordBegin(e);
    });
    //录音结束事件
    this.RECORDER.onStop(function (e) {
      _this.recordEnd(e);
    });
  },
  onShow: function onShow() {
    var _this2 = this;
    var addressobj = getApp().globalData.targetAddress;
    if (addressobj) {
      this.textMsg = addressobj.address;
      getApp().globalData.targetAddress = null;
    }
    this.scrollTop = 9999999;
    this.getMsgList();
    clearInterval(this.refreshtimmer);
    this.refreshtimmer = setInterval(function () {
      _this2.getMsgList();
    }, 1000);
  },
  onHide: function onHide() {
    clearInterval(this.refreshtimmer);
    console.log('清除timmer');
  },
  methods: {
    // 接受消息(筛选处理)
    goBack: function goBack() {
      clearInterval(this.refreshtimmer);
      uni.navigateBack();
    },
    screenMsg: function screenMsg(msg) {
      //从长连接处转发给这个方法，进行筛选处理
      /*if (msgtype == 'system') {
      	// 系统消息
      	switch (msg.msgtype) {
      		case '1':
      			this.addSystemTextMsg(msg);
      			break;
      		case 'redEnvelope':
      			this.addSystemRedEnvelopeMsg(msg);
      			break;
      	}*/
      //} else if (msgtype == 'user') {
      // 用户消息
      switch (msg.type) {
        case 'text':
          this.addTextMsg(msg);
          break;
        case 'voice':
          this.addVoiceMsg(msg);
          break;
        case 'img':
          this.addImgMsg(msg);
          break;
        case 'redEnvelope':
          this.addRedEnvelopeMsg(msg);
          break;
      }
      console.log('用户消息');
      //非自己的消息震动
      if (msg.uid != this.myuid) {
        console.log('振动');
        uni.vibrateLong();
      }
      //}
      this.$nextTick(function () {
        // 滚动到底
        this.scrollToView = 'msg' + msg.id;
      });
    },
    //触发滑动到顶部(加载历史信息记录)
    // 加载初始页面消息
    getMsgList: function getMsgList() {
      var _this3 = this;
      if (!this.fuser.id) {
        return;
      }
      var fid = this.fuser.id;
      var uid = this.userInfo.id;
      if (this.msgtype == '2') {
        (0, _api.listj)({
          params: {
            table: "message",
            qid: this.fuser.id,
            sort: "id",
            order: "asc"
          }
        }).then(function (res) {
          /*
          for (let s of res) {
              s.note = unescape(s.note)
          }*/
          var list = res;
          _this3.msgcount = list.length;
          if (_this3.lastmsgcount != _this3.msgcount) {
            _this3.msgList = list;
            _this3.lastmsgcount = _this3.msgcount;
            _this3.$nextTick(function () {
              // 滚动到底
              this.scrollAnimation = true;
              this.scrollToView = 'msg' + list[this.msgcount - 1].id;
            });
          }
        });
      } else {
        var sql = "select * from wct_message u where u.msgtype=1 and (u.uid=" + uid + " or u.fid=" + uid + ") and (u.uid=" + fid + " or u.fid=" + fid + ")";
        (0, _api.listSqlj)({
          params: {
            sql: sql
          }
        }).then(function (res) {
          /*
          for (let s of res) {
          	s.note = unescape(s.note)
          }*/
          var list = res;
          _this3.msgcount = list.length;
          if (_this3.lastmsgcount != _this3.msgcount) {
            _this3.msgList = list;
            _this3.lastmsgcount = _this3.msgcount;
            _this3.$nextTick(function () {
              // 滚动到底
              this.scrollAnimation = true;
              this.scrollToView = 'msg' + list[this.msgcount - 1].id;
            });
          }

          // 滚动到底部
          /*this.$nextTick(function() {
                                this.scrollTop = 9999;
                                this.$nextTick(function() {
                                    this.scrollAnimation = true;
                                });
                             });*/
        });
      }

      // 消息列表
    },
    //处理图片尺寸，如果不处理宽高，新进入页面加载图片时候会闪
    setPicSize: function setPicSize(content) {
      // 让图片最长边等于设置的最大长度，短边等比例缩小，图片控件真实改变，区别于aspectFit方式。
      var maxW = uni.upx2px(350); //350是定义消息图片最大宽度
      var maxH = uni.upx2px(350); //350是定义消息图片最大高度
      if (content.w > maxW || content.h > maxH) {
        var scale = content.w / content.h;
        content.w = scale > 1 ? maxW : maxH * scale;
        content.h = scale > 1 ? maxW / scale : maxH;
      }
      return content;
    },
    //更多功能(点击+弹出) 
    showMore: function showMore() {
      this.isVoice = false;
      this.hideEmoji = true;
      if (this.hideMore) {
        this.hideMore = false;
        this.openDrawer();
      } else {
        this.hideDrawer();
      }
    },
    // 打开抽屉
    openDrawer: function openDrawer() {
      this.popupLayerClass = 'showLayer';
    },
    // 隐藏抽屉
    hideDrawer: function hideDrawer() {
      var _this4 = this;
      this.popupLayerClass = '';
      setTimeout(function () {
        _this4.hideMore = true;
        _this4.hideEmoji = true;
      }, 150);
    },
    // 选择图片发送
    chooseImage: function chooseImage() {
      this.getImage('album');
    },
    //拍照发送
    camera: function camera() {
      this.getImage('camera');
    },
    //发送位置
    handRedEnvelopes: function handRedEnvelopes() {
      uni.itool.nto({
        url: '/pages/unimap/unimapchoose'
      });
      /*uni.itool.nto({
      	url: 'hand/hand'
      });
      this.hideDrawer();*/
    },
    //选照片 or 拍照
    getImage: function getImage(type) {
      var _this5 = this;
      this.hideDrawer();
      uni.chooseImage({
        sourceType: [type],
        sizeType: ['original', 'compressed'],
        //可以指定是原图还是压缩图，默认二者都有
        success: function success(res) {
          var fpath = res.tempFilePaths[0];
          uni.uploadFile({
            url: _api2.uploadUrl,
            //服务器地址
            filePath: fpath,
            //临时文件地址
            name: "file",
            //服务器通过该名称获取文件
            success: function success(uploadFileRes) {
              console.log("uploadFileRes:" + JSON.stringify(uploadFileRes));
              var fileName = uploadFileRes.data;
              console.log("上传成功文件名:" + fileName);
              _this5.sendMsg(fileName, 'img');
            },
            fail: function fail(err) {
              console.log(err);
            }
          });
        }
      });
    },
    // 选择表情
    chooseEmoji: function chooseEmoji() {
      this.hideMore = true;
      if (this.hideEmoji) {
        this.hideEmoji = false;
        this.openDrawer();
      } else {
        this.hideDrawer();
      }
    },
    //添加表情
    addEmoji: function addEmoji(em) {
      this.textMsg += em.alt;
    },
    //获取焦点，如果不是选表情ing,则关闭抽屉
    textareaFocus: function textareaFocus() {
      if (this.popupLayerClass == 'showLayer' && this.hideMore == false) {
        this.hideDrawer();
      }
    },
    // 发送文字消息
    sendText: function sendText() {
      this.hideDrawer(); //隐藏抽屉
      if (!this.textMsg) {
        return;
      }
      var content = this.replaceEmoji(this.textMsg);
      var msg = {
        text: content
      };
      //content = escape(content);//消息加密发送
      this.sendMsg(content, 'text');
      this.textMsg = ''; //清空输入框
    },
    updateHuihua: function updateHuihua(msgobj) {
      var _this6 = this;
      var note = msgobj.note;
      if (msgobj.type == 'location') {
        note = "位置消息";
      } else if (msgobj.type == 'voice') {
        note = "语音消息";
      } else if (msgobj.type == 'img') {
        note = "图片文件消息";
      }
      (0, _api.findj)({
        params: {
          table: "huihua",
          uid: msgobj.uid,
          fid: msgobj.fid,
          msgtype: this.msgtype
        }
      }).then(function (data) {
        if (data) {
          data.note = note;
          data.type = 1;
          data.ndate = null;
        } else {
          data = {};
          data.type = 1;
          data.uid = msgobj.uid;
          data.fid = msgobj.fid;
          data.fusername = msgobj.fusername;
          data.img = msgobj.fimg;
          data.username = msgobj.username;
          data.note = note;
          data.msgtype = _this6.msgtype;
          if (_this6.msgtype == '2') {
            data.qid = _this6.fuser.id;
          }
        }
        data.table = "huihua";
        (0, _api.savej)({
          params: data
        }).then(function (r2) {
          if (_this6.msgtype == '1') {
            (0, _api.findj)({
              params: {
                table: "huihua",
                uid: msgobj.fid,
                fid: msgobj.uid
              }
            }).then(function (data2) {
              if (data2) {
                data2.note = note;
                data2.type = 1;
                data2.ndate = null;
              } else {
                data2 = {};
                data2.type = 1;
                data2.uid = msgobj.fid;
                data2.fid = msgobj.uid;
                data2.fusername = msgobj.username;
                data2.img = msgobj.img;
                data2.username = msgobj.fusername;
                data2.note = note;
                data2.msgtype = _this6.msgtype;
              }
              data2.table = "huihua";
              (0, _api.savej)({
                params: data2
              }).then(function (r4) {});
            });
          }
        });
      });
    },
    //替换表情符号为图片
    replaceEmoji: function replaceEmoji(str) {
      var _this7 = this;
      var replacedStr = str.replace(/\[([^(\]|\[)]*)\]/g, function (item, index) {
        console.log("str: " + str);
        console.log("index: " + index);
        console.log("item: " + item);
        for (var i = 0; i < _this7.emojiList.length; i++) {
          var row = _this7.emojiList[i];
          for (var j = 0; j < row.length; j++) {
            var EM = row[j];
            if (EM.alt == item) {
              //在线表情路径，图文混排必须使用网络路径，请上传一份表情到你的服务器后再替换此路径 
              //比如你上传服务器后，你的100.gif路径为https://www.xxx.com/emoji/100.gif 则替换onlinePath填写为https://www.xxx.com/emoji/
              var onlinePath = 'https://zhoukaiwen.com/img/icon/emojj1/';
              var imgstr = '<img width="32rpx" src="' + onlinePath + _this7.onlineEmoji[EM.url] + '">';
              console.log("imgstr: " + imgstr);
              return imgstr;
            }
          }
        }
      });
      return '<div style="display: flex;align-items: center;word-wrap:break-word;">' + replacedStr + '</div>';
    },
    // 发送消息
    sendMsg: function sendMsg(content, type, alength) {
      var _this8 = this;
      var msg = {};
      if (type == 'text') {
        msg.note = content;
      } else if (type == 'img') {
        msg.attach = content;
      } else if (type == 'voice') {
        msg.attach = content;
        msg.note = alength;
      }
      msg.type = type;
      msg.uid = this.userInfo.id;
      msg.fid = this.fuser.id;
      msg.username = this.userInfo.username;
      msg.img = this.userInfo.img;
      msg.msgtype = this.msgtype;
      msg.table = "message";
      if (this.msgtype == "2") {
        msg.qid = this.fuser.id;
        msg.qtitle = this.fuser.title;
        msg.fusername = this.fuser.title;
        msg.fimg = this.fuser.img;
      } else {
        msg.fusername = this.fuser.username;
        msg.fimg = this.fuser.img;
      }
      (0, _api.savej)({
        params: msg
      }).then(function (res) {
        //this.screenMsg(msg);
        _this8.updateHuihua(msg);
      });
    },
    // 添加文字消息到列表
    addTextMsg: function addTextMsg(msg) {
      this.msgList.push(msg);
    },
    // 添加语音消息到列表
    addVoiceMsg: function addVoiceMsg(msg) {
      this.msgList.push(msg);
    },
    // 添加图片消息到列表
    addImgMsg: function addImgMsg(msg) {
      //msg.msg.content = this.setPicSize(msg.msg.content);
      this.msgImgList.push(msg.attach);
      this.msgList.push(msg);
    },
    addRedEnvelopeMsg: function addRedEnvelopeMsg(msg) {
      this.msgList.push(msg);
    },
    // 添加系统文字消息到列表
    addSystemTextMsg: function addSystemTextMsg(msg) {
      this.msgList.push(msg);
    },
    // 添加系统红包消息到列表
    addSystemRedEnvelopeMsg: function addSystemRedEnvelopeMsg(msg) {
      this.msgList.push(msg);
    },
    // 打开红包
    openRedEnvelope: function openRedEnvelope(msg, index) {
      var _this9 = this;
      var rid = msg.content.rid;
      uni.showLoading({
        title: '加载中...'
      });
      console.log("index: " + index);
      //模拟请求服务器效果
      setTimeout(function () {
        //加载数据
        if (rid == 0) {
          _this9.redenvelopeData = {
            rid: 0,
            //红包ID
            from: "大黑哥",
            face: "https://zhoukaiwen.com/img/qdpz/face/face.jpg",
            blessing: "恭喜发财，大吉大利",
            money: "已领完"
          };
        } else {
          _this9.redenvelopeData = {
            rid: 1,
            //红包ID
            from: "售后客服008",
            face: "https://zhoukaiwen.com/img/qdpz/face/face_2.jpg",
            blessing: "恭喜发财",
            money: "0.01"
          };
          if (!msg.content.isReceived) {
            // {type:"system",msg:{id:8,type:"redEnvelope",content:{text:"你领取了售后客服008的红包"}}},
            _this9.sendSystemMsg({
              text: "你领取了" + (uid == _this9.myuid ? "自己" : msg.username) + "的红包"
            }, 'redEnvelope');
            console.log("this.msgList[index]: " + JSON.stringify(_this9.msgList[index]));
            _this9.msgList[index].msg.content.isReceived = true;
          }
        }
        uni.hideLoading();
        _this9.windowsState = 'show';
      }, 200);
    },
    // 关闭红包弹窗
    closeRedEnvelope: function closeRedEnvelope() {
      var _this10 = this;
      this.windowsState = 'hide';
      setTimeout(function () {
        _this10.windowsState = '';
      }, 200);
    },
    sendSystemMsg: function sendSystemMsg(content, type) {
      var lastid = this.msgList[this.msgList.length - 1].id;
      lastid++;
      var row = {
        type: "system",
        msg: {
          id: lastid,
          type: type,
          content: content
        }
      };
      this.screenMsg(row);
    },
    //领取详情
    toDetails: function toDetails(rid) {
      uni.itool.nto({
        url: 'details/details?rid=' + rid
      });
    },
    // 预览图片
    showPic: function showPic(msg) {
      uni.previewImage({
        indicator: "none",
        current: msg.attacn,
        urls: this.msgImgList
      });
    },
    // 播放语音
    playVoice: function playVoice(msg) {
      this.playMsgid = msg.id;
      this.AUDIO.src = _api.fileUrl + msg.attach;
      this.$nextTick(function () {
        this.AUDIO.play();
      });
    },
    // 录音开始
    voiceBegin: function voiceBegin(e) {
      if (e.touches.length > 1) {
        return;
      }
      this.initPoint.Y = e.touches[0].clientY;
      this.initPoint.identifier = e.touches[0].identifier;
      this.RECORDER.start({
        format: "mp3"
      }); //录音开始,
    },
    //录音开始UI效果
    recordBegin: function recordBegin(e) {
      var _this11 = this;
      this.recording = true;
      this.voiceTis = '松开 结束';
      this.recordLength = 0;
      this.recordTimer = setInterval(function () {
        _this11.recordLength++;
      }, 1000);
    },
    // 录音被打断
    voiceCancel: function voiceCancel() {
      this.recording = false;
      this.voiceTis = '按住 说话';
      this.recordTis = '手指上滑 取消发送';
      this.willStop = true; //不发送录音
      this.RECORDER.stop(); //录音结束
    },
    // 录音中(判断是否触发上滑取消发送)
    voiceIng: function voiceIng(e) {
      if (!this.recording) {
        return;
      }
      var touche = e.touches[0];
      //上滑一个导航栏的高度触发上滑取消发送
      if (this.initPoint.Y - touche.clientY >= uni.upx2px(100)) {
        this.willStop = true;
        this.recordTis = '松开手指 取消发送';
      } else {
        this.willStop = false;
        this.recordTis = '手指上滑 取消发送';
      }
    },
    // 结束录音
    voiceEnd: function voiceEnd(e) {
      if (!this.recording) {
        return;
      }
      this.recording = false;
      this.voiceTis = '按住 说话';
      this.recordTis = '手指上滑 取消发送';
      this.RECORDER.stop(); //录音结束
    },
    //录音结束(回调文件)
    recordEnd: function recordEnd(e) {
      var _this12 = this;
      clearInterval(this.recordTimer);
      if (!this.willStop) {
        console.log("e: " + JSON.stringify(e));
        var min = parseInt(this.recordLength / 60);
        var sec = this.recordLength % 60;
        min = min < 10 ? '0' + min : min;
        sec = sec < 10 ? '0' + sec : sec;
        var alength = min + ':' + sec;
        var fpath = e.tempFilePath;
        uni.uploadFile({
          url: _api2.uploadUrl,
          //服务器地址
          filePath: fpath,
          //临时文件地址
          name: "file",
          //服务器通过该名称获取文件
          success: function success(uploadFileRes) {
            console.log("uploadFileRes:" + JSON.stringify(uploadFileRes));
            var fileName = uploadFileRes.data;
            console.log("上传成功文件名:" + fileName);
            _this12.sendMsg(fileName, 'voice', alength);
          },
          fail: function fail(err) {
            console.log(err);
          }
        });
      } else {
        console.log('取消发送录音');
      }
      this.willStop = false;
    },
    // 切换语音/文字输入
    switchVoice: function switchVoice() {
      this.hideDrawer();
      this.isVoice = this.isVoice ? false : true;
    },
    discard: function discard() {
      return;
    }
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 344:
/*!*********************************************************************************************************************************************************!*\
  !*** H:/biyesheji2025/workspace/intellijspace/shoppayuser3mgfuwutuijianjiadianweixiu_up_ssm6/app/pages/chat/chat.vue?vue&type=style&index=0&lang=scss& ***!
  \*********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./chat.vue?vue&type=style&index=0&lang=scss& */ 345);
/* harmony import */ var _D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_DevTool_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 345:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!H:/biyesheji2025/workspace/intellijspace/shoppayuser3mgfuwutuijianjiadianweixiu_up_ssm6/app/pages/chat/chat.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[338,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/chat/chat.js.map