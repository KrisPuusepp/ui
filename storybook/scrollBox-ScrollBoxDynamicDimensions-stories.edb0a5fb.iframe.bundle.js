(self.webpackChunk_pixi_ui=self.webpackChunk_pixi_ui||[]).push([[1662],{"./node_modules/@pixi/storybook-renderer/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{M4:()=>PixiStory});var _chunk_N3U6A7KW_mjs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@pixi/storybook-renderer/dist/chunk-N3U6A7KW.mjs"),global__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/global/window.js"),global__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(global__WEBPACK_IMPORTED_MODULE_1__),_storybook_core_client__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("@storybook/core-client"),pixi_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/pixi.js/lib/index.mjs"),{window:globalWindow}=global__WEBPACK_IMPORTED_MODULE_1___default();globalWindow.STORYBOOK_ENV="PIXI";var api=(0,_storybook_core_client__WEBPACK_IMPORTED_MODULE_2__.start)(_chunk_N3U6A7KW_mjs__WEBPACK_IMPORTED_MODULE_0__.u),PixiStory=(api.forceReRender,api.clientApi.raw,class{constructor(options){this.view=new pixi_js__WEBPACK_IMPORTED_MODULE_3__.mcf,options.context.parameters.pixi.appReady.then((()=>{options.init(this.view)})),void 0!==options.update&&(this.update=ticker=>{options.update(this.view,ticker)}),void 0!==options.resize&&(this.resize=(width,height)=>{options.resize(this.view,width,height)}),void 0!==options.destroy&&(this.destroy=()=>{options.destroy(this.view)})}})},"./src/stories/scrollBox/ScrollBoxDynamicDimensions.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{UseDynamicDimensions:()=>UseDynamicDimensions,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var pixi_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/pixi.js/lib/index.mjs"),_pixi_storybook_renderer__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@pixi/storybook-renderer/dist/index.mjs"),_FancyButton__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/FancyButton.ts"),_ScrollBox__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/ScrollBox.ts"),_utils_helpers_resize__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/utils/helpers/resize.ts"),_utils_helpers_styles__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/utils/helpers/styles.ts"),_utils_argTypes__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/stories/utils/argTypes.ts");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(e,r,t){return(r=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:i+""}(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n}var args={fontColor:"#000000",backgroundColor:"#F5E3A9",itemsAmount:100,type:function _toConsumableArray(r){return function _arrayWithoutHoles(r){if(Array.isArray(r))return _arrayLikeToArray(r)}(r)||function _iterableToArray(r){if("undefined"!=typeof Symbol&&null!=r[Symbol.iterator]||null!=r["@@iterator"])return Array.from(r)}(r)||function _unsupportedIterableToArray(r,a){if(r){if("string"==typeof r)return _arrayLikeToArray(r,a);var t={}.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_arrayLikeToArray(r,a):void 0}}(r)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(__webpack_require__("./src/utils/HelpTypes.ts").q)},UseDynamicDimensions=function UseDynamicDimensions(_ref,context){var fontColor=_ref.fontColor,itemsAmount=_ref.itemsAmount,backgroundColor=_ref.backgroundColor,type=_ref.type;return new _pixi_storybook_renderer__WEBPACK_IMPORTED_MODULE_1__.M4({context,init:function init(view){for(var sizes=[{w:320,h:440},{w:630,h:440},{w:630,h:360},{w:320,h:200}],currentSizeID=0,scrollBox=new _ScrollBox__WEBPACK_IMPORTED_MODULE_3__.Z({background:backgroundColor,elementsMargin:10,width:sizes[currentSizeID].w,height:sizes[currentSizeID].h,radius:20,type,padding:10}),items=[],resizeScrollBox=function resizeScrollBox(){++currentSizeID>=sizes.length&&(currentSizeID=0);var size=sizes[currentSizeID];scrollBox.width=size.w,scrollBox.height=size.h},i=0;i<itemsAmount;i++){var button=new _FancyButton__WEBPACK_IMPORTED_MODULE_4__.w({defaultView:(new pixi_js__WEBPACK_IMPORTED_MODULE_0__.A1g).roundRect(0,0,300,80,20).fill(10871373),hoverView:(new pixi_js__WEBPACK_IMPORTED_MODULE_0__.A1g).roundRect(0,0,300,80,20).fill(16695856),pressedView:(new pixi_js__WEBPACK_IMPORTED_MODULE_0__.A1g).roundRect(0,0,300,80,20).fill(16670792),text:new pixi_js__WEBPACK_IMPORTED_MODULE_0__.EYj({text:"Item ".concat(i+1),style:_objectSpread(_objectSpread({},_utils_helpers_styles__WEBPACK_IMPORTED_MODULE_5__.a),{},{fill:fontColor})})});button.anchor.set(0),button.onPress.connect((function(){return resizeScrollBox()})),items.push(button)}scrollBox.addItems(items),view.addChild(scrollBox)},resize:function resize(view){return(0,_utils_helpers_resize__WEBPACK_IMPORTED_MODULE_6__.E)(view.children[0])}})};const __WEBPACK_DEFAULT_EXPORT__={parameters:{storySource:{source:"import { Graphics, Text } from 'pixi.js';\nimport { PixiStory, StoryFn } from '@pixi/storybook-renderer';\nimport { FancyButton } from '../../FancyButton';\nimport { ScrollBox } from '../../ScrollBox';\nimport { centerElement } from '../../utils/helpers/resize';\nimport { defaultTextStyle } from '../../utils/helpers/styles';\nimport { argTypes, getDefaultArgs } from '../utils/argTypes';\nimport { LIST_TYPE } from '../../utils/HelpTypes';\nimport { ListType } from '../../List';\n\nconst args = {\n    fontColor: '#000000',\n    backgroundColor: '#F5E3A9',\n    itemsAmount: 100,\n    type: [...LIST_TYPE],\n};\n\nexport const UseDynamicDimensions: StoryFn<typeof args & { type:ListType }> = (\n    { fontColor, itemsAmount, backgroundColor, type },\n    context,\n) =>\n    new PixiStory({\n        context,\n        init(view)\n        {\n            const sizes: { w: number; h: number }[] = [\n                { w: 320, h: 440 },\n                { w: 630, h: 440 },\n                { w: 630, h: 360 },\n                { w: 320, h: 200 },\n            ];\n            const elementsWidth = 300;\n            const elementsHeight = 80;\n            const radius = 20;\n            let currentSizeID = 0;\n\n            // Component usage !!!\n            const scrollBox = new ScrollBox({\n                background: backgroundColor,\n                elementsMargin: 10,\n                width: sizes[currentSizeID].w,\n                height: sizes[currentSizeID].h,\n                radius,\n                type,\n                padding: 10,\n            });\n\n            const items = [];\n            const resizeScrollBox = () =>\n            {\n                currentSizeID++;\n\n                if (currentSizeID >= sizes.length)\n                {\n                    currentSizeID = 0;\n                }\n\n                const size = sizes[currentSizeID];\n\n                scrollBox.width = size.w;\n                scrollBox.height = size.h;\n            };\n\n            for (let i = 0; i < itemsAmount; i++)\n            {\n                const button = new FancyButton({\n                    defaultView: new Graphics()\n                        .roundRect(0, 0, elementsWidth, elementsHeight, radius)\n                        .fill(0xa5e24d),\n                    hoverView: new Graphics()\n                        .roundRect(0, 0, elementsWidth, elementsHeight, radius)\n                        .fill(0xfec230),\n                    pressedView: new Graphics()\n                        .roundRect(0, 0, elementsWidth, elementsHeight, radius)\n                        .fill(0xfe6048),\n                    text: new Text({\n                        text: `Item ${i + 1}`,\n                        style: {\n                            ...defaultTextStyle,\n                            fill: fontColor,\n                        },\n                    }),\n                });\n\n                button.anchor.set(0);\n                button.onPress.connect(() => resizeScrollBox());\n\n                items.push(button);\n            }\n\n            scrollBox.addItems(items);\n\n            view.addChild(scrollBox);\n        },\n        resize: (view) => centerElement(view.children[0]),\n    });\n\nexport default {\n    title: 'Components/ScrollBox/Use Dynamic Dimensions',\n    argTypes: argTypes(args),\n    args: getDefaultArgs(args),\n};\n",locationsMap:{"use-dynamic-dimensions":{startLoc:{col:78,line:18},endLoc:{col:6,line:96},startBody:{col:78,line:18},endBody:{col:6,line:96}}}}},title:"Components/ScrollBox/Use Dynamic Dimensions",argTypes:(0,_utils_argTypes__WEBPACK_IMPORTED_MODULE_7__.U)(args),args:(0,_utils_argTypes__WEBPACK_IMPORTED_MODULE_7__.p)(args)},__namedExportsOrder=["UseDynamicDimensions"]},"./src/utils/HelpTypes.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>BUTTON_EVENTS,q:()=>LIST_TYPE});var BUTTON_EVENTS=["onPress","onDown","onUp","onHover","onOut","onUpOut"],LIST_TYPE=["vertical","horizontal","bidirectional"]},"./node_modules/global/window.js":(module,__unused_webpack_exports,__webpack_require__)=>{var win;win="undefined"!=typeof window?window:void 0!==__webpack_require__.g?__webpack_require__.g:"undefined"!=typeof self?self:{},module.exports=win}}]);