"use strict";(self.webpackChunk_pixi_ui=self.webpackChunk_pixi_ui||[]).push([[9481],{"./src/stories/maskedFrame/MaskedFrameGraphics.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{UseGraphics:()=>UseGraphics,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var pixi_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/pixi.js/lib/index.mjs"),_pixi_storybook_renderer__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@pixi/storybook-renderer/dist/index.mjs"),_MaskedFrame__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/MaskedFrame.ts"),_utils_helpers_resize__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/utils/helpers/resize.ts"),_utils_argTypes__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/stories/utils/argTypes.ts"),_utils_loader__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/stories/utils/loader.ts");const args={borderColor:"#FFFFFF",borderWidth:10,radius:250},UseGraphics=({borderColor,radius,borderWidth},context)=>new _pixi_storybook_renderer__WEBPACK_IMPORTED_MODULE_1__.M({context,init:view=>{const assets=["avatar-01.png"];(0,_utils_loader__WEBPACK_IMPORTED_MODULE_2__.u)(assets).then((()=>{const target=pixi_js__WEBPACK_IMPORTED_MODULE_0__.kxk.from("avatar-01.png"),frame=new _MaskedFrame__WEBPACK_IMPORTED_MODULE_3__.j({target,mask:getMask(target.width,target.height,radius),borderWidth,borderColor});view.addChild(frame),(0,_utils_helpers_resize__WEBPACK_IMPORTED_MODULE_4__.E)(view)}))},resize:_utils_helpers_resize__WEBPACK_IMPORTED_MODULE_4__.E});function getMask(width,height,radius){const isCircle=width===height&&radius>=width/2,mask=new pixi_js__WEBPACK_IMPORTED_MODULE_0__.A1g;return isCircle?mask.circle(width/2,height/2,width/2).fill(0):mask.roundRect(0,0,width,height,radius).fill(0),mask}const __WEBPACK_DEFAULT_EXPORT__={title:"Components/MaskedFrame/Use Graphics",argTypes:(0,_utils_argTypes__WEBPACK_IMPORTED_MODULE_5__.U)(args),args:(0,_utils_argTypes__WEBPACK_IMPORTED_MODULE_5__.p)(args)},__namedExportsOrder=["UseGraphics"]}}]);