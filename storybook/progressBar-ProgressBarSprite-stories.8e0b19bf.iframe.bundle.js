/*! For license information please see progressBar-ProgressBarSprite-stories.8e0b19bf.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_pixi_ui=self.webpackChunk_pixi_ui||[]).push([[7681],{"./node_modules/@pixi/storybook-renderer/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{M4:()=>PixiStory});var _chunk_N3U6A7KW_mjs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@pixi/storybook-renderer/dist/chunk-N3U6A7KW.mjs"),global__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/global/window.js"),global__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(global__WEBPACK_IMPORTED_MODULE_1__),_storybook_core_client__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("@storybook/core-client"),pixi_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/pixi.js/lib/index.mjs"),{window:globalWindow}=global__WEBPACK_IMPORTED_MODULE_1___default();globalWindow.STORYBOOK_ENV="PIXI";var api=(0,_storybook_core_client__WEBPACK_IMPORTED_MODULE_2__.start)(_chunk_N3U6A7KW_mjs__WEBPACK_IMPORTED_MODULE_0__.u),PixiStory=(api.forceReRender,api.clientApi.raw,class{constructor(options){this.view=new pixi_js__WEBPACK_IMPORTED_MODULE_3__.mcf,options.context.parameters.pixi.appReady.then((()=>{options.init(this.view)})),void 0!==options.update&&(this.update=ticker=>{options.update(this.view,ticker)}),void 0!==options.resize&&(this.resize=(width,height)=>{options.resize(this.view,width,height)}),void 0!==options.destroy&&(this.destroy=()=>{options.destroy(this.view)})}})},"./src/stories/progressBar/ProgressBarSprite.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Sprite:()=>Sprite,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var pixi_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/pixi.js/lib/index.mjs"),_pixi_storybook_renderer__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@pixi/storybook-renderer/dist/index.mjs"),_List__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/List.ts"),_ProgressBar__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/ProgressBar.ts"),_utils_helpers_resize__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/utils/helpers/resize.ts"),_utils_argTypes__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/stories/utils/argTypes.ts"),_utils_loader__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/stories/utils/loader.ts"),args={value:50,animate:!0,vertical:!1},Sprite=function Sprite(_ref,context){var progressBar,value=_ref.value,animate=_ref.animate,vertical=_ref.vertical,isFilling=!0;return new _pixi_storybook_renderer__WEBPACK_IMPORTED_MODULE_1__.M4({context,init:function init(view){var list=new _List__WEBPACK_IMPORTED_MODULE_2__.B({type:"vertical",elementsMargin:10});(0,_utils_loader__WEBPACK_IMPORTED_MODULE_3__.u)(["slider_bg.png","slider_progress.png"]).then((function(){progressBar=new _ProgressBar__WEBPACK_IMPORTED_MODULE_4__.z({bg:pixi_js__WEBPACK_IMPORTED_MODULE_0__.gPd.from("slider_bg.png"),fill:"slider_progress.png",progress:value,fillPaddings:{top:3,left:4.5}}),list.addChild(progressBar),vertical?(progressBar.rotation=-Math.PI/2,list.y+=list.height/2):list.x+=-list.width/2})),view.addChild(list)},resize:function resize(view){(0,_utils_helpers_resize__WEBPACK_IMPORTED_MODULE_5__.E)(view),vertical&&(view.y+=view.height)},update:function update(){animate&&progressBar&&(isFilling?value++:value--,value>150?isFilling=!1:value<-50&&(isFilling=!0),progressBar&&(progressBar.progress=value))}})};const __WEBPACK_DEFAULT_EXPORT__={parameters:{storySource:{source:"import { Texture } from 'pixi.js';\nimport { PixiStory, StoryFn } from '@pixi/storybook-renderer';\nimport { List } from '../../List';\nimport { ProgressBar } from '../../ProgressBar';\nimport { centerElement } from '../../utils/helpers/resize';\nimport { argTypes, getDefaultArgs } from '../utils/argTypes';\nimport { preload } from '../utils/loader';\n\nconst args = {\n    value: 50,\n    animate: true,\n    vertical: false,\n};\n\nexport const Sprite: StoryFn<typeof args> = ({ value, animate, vertical }, context) =>\n{\n    let isFilling = true;\n    let progressBar: ProgressBar;\n\n    return new PixiStory<typeof args>({\n        context,\n        init: (view) =>\n        {\n            const list = new List({ type: 'vertical', elementsMargin: 10 });\n            const assets = ['slider_bg.png', 'slider_progress.png'];\n\n            preload(assets).then(() =>\n            {\n                // Component usage !!!\n                progressBar = new ProgressBar({\n                    bg: Texture.from('slider_bg.png'),\n                    fill: 'slider_progress.png',\n                    progress: value,\n                    fillPaddings: {\n                        top: 3,\n                        left: 4.5,\n                    },\n                });\n\n                list.addChild(progressBar);\n\n                if (vertical)\n                {\n                    progressBar.rotation = -Math.PI / 2;\n                    list.y += list.height / 2;\n                }\n                else\n                {\n                    list.x += -list.width / 2;\n                }\n            });\n\n            view.addChild(list);\n        },\n\n        resize: (view) =>\n        {\n            centerElement(view);\n            if (vertical)\n            {\n                view.y += view.height;\n            }\n        },\n        update: () =>\n        {\n            if (!animate || !progressBar)\n            {\n                return;\n            }\n\n            isFilling ? value++ : value--;\n\n            if (value > 150)\n            {\n                isFilling = false;\n            }\n            else if (value < -50)\n            {\n                isFilling = true;\n            }\n\n            if (progressBar)\n            {\n                progressBar.progress = value;\n            }\n        },\n    });\n};\n\nexport default {\n    title: 'Components/ProgressBar/Sprite',\n    argTypes: argTypes(args),\n    args: getDefaultArgs(args),\n};\n",locationsMap:{sprite:{startLoc:{col:44,line:15},endLoc:{col:1,line:88},startBody:{col:44,line:15},endBody:{col:1,line:88}}}}},title:"Components/ProgressBar/Sprite",argTypes:(0,_utils_argTypes__WEBPACK_IMPORTED_MODULE_6__.U)(args),args:(0,_utils_argTypes__WEBPACK_IMPORTED_MODULE_6__.p)(args)},__namedExportsOrder=["Sprite"]},"./src/ProgressBar.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{z:()=>ProgressBar});var pixi_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/pixi.js/lib/index.mjs"),_utils_helpers_view__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/utils/helpers/view.ts");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _defineProperties(e,r){for(var t=0;t<r.length;t++){var o=r[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,_toPropertyKey(o.key),o)}}function _callSuper(t,o,e){return o=_getPrototypeOf(o),function _possibleConstructorReturn(t,e){if(e&&("object"==_typeof(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(t)}(t,_isNativeReflectConstruct()?Reflect.construct(o,e||[],_getPrototypeOf(t).constructor):o.apply(t,e))}function _isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t})()}function _superPropGet(t,o,e,r){var p=_get(_getPrototypeOf(1&r?t.prototype:t),o,e);return 2&r&&"function"==typeof p?function(t){return p.apply(e,t)}:p}function _get(){return _get="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,r){var p=_superPropBase(e,t);if(p){var n=Object.getOwnPropertyDescriptor(p,t);return n.get?n.get.call(arguments.length<3?e:r):n.value}},_get.apply(null,arguments)}function _superPropSet(t,e,o,r,p,f){return function _set(e,r,t,o,f){if(!set(e,r,t,o||e)&&f)throw new TypeError("failed to set property");return t}(_getPrototypeOf(f?t.prototype:t),e,o,r,p)}function set(e,r,t,o){return set="undefined"!=typeof Reflect&&Reflect.set?Reflect.set:function(e,r,t,o){var f,i=_superPropBase(e,r);if(i){if((f=Object.getOwnPropertyDescriptor(i,r)).set)return f.set.call(o,t),!0;if(!f.writable)return!1}if(f=Object.getOwnPropertyDescriptor(o,r)){if(!f.writable)return!1;f.value=t,Object.defineProperty(o,r,f)}else _defineProperty(o,r,t);return!0},set(e,r,t,o)}function _superPropBase(t,o){for(;!{}.hasOwnProperty.call(t,o)&&null!==(t=_getPrototypeOf(t)););return t}function _getPrototypeOf(t){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},_getPrototypeOf(t)}function _setPrototypeOf(t,e){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},_setPrototypeOf(t,e)}function _defineProperty(e,r,t){return(r=_toPropertyKey(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:i+""}var ProgressBar=function(_Container){function ProgressBar(options){var _this;return function _classCallCheck(a,n){if(!(a instanceof n))throw new TypeError("Cannot call a class as a function")}(this,ProgressBar),_defineProperty(_this=_callSuper(this,ProgressBar),"progressStart",0),_defineProperty(_this,"_progress",0),_this.options=options,_this.innerView=new pixi_js__WEBPACK_IMPORTED_MODULE_0__.mcf,_this.addChild(_this.innerView),null!=options&&options.bg&&null!=options&&options.fill&&_this.init(options),_this}return function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&_setPrototypeOf(t,e)}(ProgressBar,_Container),function _createClass(e,r,t){return r&&_defineProperties(e.prototype,r),t&&_defineProperties(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}(ProgressBar,[{key:"init",value:function init(_ref){var bg=_ref.bg,fill=_ref.fill,fillPaddings=_ref.fillPaddings,progress=_ref.progress;this.setBackground(bg),this.setFill(fill,fillPaddings),this.progress=progress}},{key:"setBackground",value:function setBackground(bg){var _this$options;this.bg&&this.bg.destroy(),null!==(_this$options=this.options)&&void 0!==_this$options&&_this$options.nineSliceSprite&&("string"==typeof bg?this.bg=new pixi_js__WEBPACK_IMPORTED_MODULE_0__.QL7({texture:pixi_js__WEBPACK_IMPORTED_MODULE_0__.gPd.from(bg),leftWidth:this.options.nineSliceSprite.bg[0],topHeight:this.options.nineSliceSprite.bg[1],rightWidth:this.options.nineSliceSprite.bg[2],bottomHeight:this.options.nineSliceSprite.bg[3]}):bg instanceof pixi_js__WEBPACK_IMPORTED_MODULE_0__.gPd?this.bg=new pixi_js__WEBPACK_IMPORTED_MODULE_0__.QL7({texture:bg,leftWidth:this.options.nineSliceSprite.bg[0],topHeight:this.options.nineSliceSprite.bg[1],rightWidth:this.options.nineSliceSprite.bg[2],bottomHeight:this.options.nineSliceSprite.bg[3]}):console.warn("NineSliceSprite can not be used with views set as Container.\n                    Pass the texture or texture name as instead of the Container extended instance.")),this.bg||(this.bg=(0,_utils_helpers_view__WEBPACK_IMPORTED_MODULE_1__.K)(bg)),this.innerView.addChildAt(this.bg,0)}},{key:"setFill",value:function setFill(fill,fillPadding){var _this$options2,_fillPadding$left,_fillPadding$top;if(this.fill&&this.fill.destroy(),this.bg instanceof pixi_js__WEBPACK_IMPORTED_MODULE_0__.kxk&&fill===this.bg)console.warn("Can not use same Sprite instance for bg and fill.");else{null!==(_this$options2=this.options)&&void 0!==_this$options2&&_this$options2.nineSliceSprite?"string"==typeof fill||fill instanceof pixi_js__WEBPACK_IMPORTED_MODULE_0__.gPd?this.fill=new pixi_js__WEBPACK_IMPORTED_MODULE_0__.QL7({texture:"string"==typeof fill?pixi_js__WEBPACK_IMPORTED_MODULE_0__.gPd.from(fill):fill,leftWidth:this.options.nineSliceSprite.fill[0],topHeight:this.options.nineSliceSprite.fill[1],rightWidth:this.options.nineSliceSprite.fill[2],bottomHeight:this.options.nineSliceSprite.fill[3]}):(console.warn("NineSliceSprite can not be used with views set as Container.\n                    Pass the texture or texture name as instead of the Container extended instance."),this.fill=(0,_utils_helpers_view__WEBPACK_IMPORTED_MODULE_1__.K)(fill)):this.fill=(0,_utils_helpers_view__WEBPACK_IMPORTED_MODULE_1__.K)(fill),this.innerView.addChildAt(this.fill,1);var offsetX=null!==(_fillPadding$left=null==fillPadding?void 0:fillPadding.left)&&void 0!==_fillPadding$left?_fillPadding$left:0,offsetY=null!==(_fillPadding$top=null==fillPadding?void 0:fillPadding.top)&&void 0!==_fillPadding$top?_fillPadding$top:0;this.fill.x=offsetX,this.fill.y=offsetY,this.fillMask&&(this.fill.mask=null,this.fillMask.destroy());var leftWidth=this.fill.width/2,rightWidth=this.fill.width/2,topHeight=this.fill.height/2,bottomHeight=this.fill.height/2,texture=pixi_js__WEBPACK_IMPORTED_MODULE_0__.gPd.WHITE;this.fill instanceof pixi_js__WEBPACK_IMPORTED_MODULE_0__.kxk&&this.fill.texture&&(texture=this.fill.texture),this.fillMask=new pixi_js__WEBPACK_IMPORTED_MODULE_0__.QL7({texture,leftWidth,topHeight,rightWidth,bottomHeight}),this.fillMask.position.copyFrom(this.fill),this.addChild(this.fillMask),this.fill.mask=this.fillMask}}},{key:"validate",value:function validate(progress){return(progress=Math.round(progress))<0?0:progress>100?100:progress}},{key:"progress",get:function get(){return this._progress},set:function set(progress){this._progress=this.validate(progress),this.fill&&this.fillMask&&(this.fill.mask=null,this.fillMask.width=this.fill.width/100*(this._progress-this.progressStart),this.fillMask.x=this.progressStart/100*this.fill.width+this.fill.x,this.fillMask.height=this.fill.height,this.fill.mask=this.fillMask)}},{key:"width",get:function get(){return _superPropGet(ProgressBar,"width",this,1)},set:function set(width){var _this$options3;if(null!==(_this$options3=this.options)&&void 0!==_this$options3&&_this$options3.nineSliceSprite){if(this.bg&&(this.bg.width=width),this.fill){var _this$options$fillPad,_this$options$fillPad2,_this$options$fillPad3,_this$options$fillPad4,leftPadding=null!==(_this$options$fillPad=null===(_this$options$fillPad2=this.options.fillPaddings)||void 0===_this$options$fillPad2?void 0:_this$options$fillPad2.left)&&void 0!==_this$options$fillPad?_this$options$fillPad:0,rightPadding=null!==(_this$options$fillPad3=null===(_this$options$fillPad4=this.options.fillPaddings)||void 0===_this$options$fillPad4?void 0:_this$options$fillPad4.right)&&void 0!==_this$options$fillPad3?_this$options$fillPad3:0;this.fill.width=width-leftPadding-rightPadding,this.fillMask.width=width-leftPadding-rightPadding}this.progress=this._progress}else _superPropSet(ProgressBar,"width",width,this,1,1)}},{key:"height",get:function get(){return _superPropGet(ProgressBar,"height",this,1)},set:function set(height){var _this$options4;if(null!==(_this$options4=this.options)&&void 0!==_this$options4&&_this$options4.nineSliceSprite){if(this.bg&&(this.bg.height=height),this.fill){var _this$options$fillPad5,_this$options$fillPad6,_this$options$fillPad7,_this$options$fillPad8,topPadding=null!==(_this$options$fillPad5=null===(_this$options$fillPad6=this.options.fillPaddings)||void 0===_this$options$fillPad6?void 0:_this$options$fillPad6.top)&&void 0!==_this$options$fillPad5?_this$options$fillPad5:0,bottomPadding=null!==(_this$options$fillPad7=null===(_this$options$fillPad8=this.options.fillPaddings)||void 0===_this$options$fillPad8?void 0:_this$options$fillPad8.bottom)&&void 0!==_this$options$fillPad7?_this$options$fillPad7:0;this.fill.height=height-topPadding-bottomPadding,this.fillMask.height=height-topPadding-bottomPadding}this.progress=this._progress}else _superPropSet(ProgressBar,"height",height,this,1,1)}},{key:"setSize",value:function setSize(value,height){var _this$options5;if(null!==(_this$options5=this.options)&&void 0!==_this$options5&&_this$options5.nineSliceSprite){if(this.bg&&this.bg.setSize(value,height),this.fill){var _this$options$fillPad9,_this$options$fillPad10,_this$options$fillPad11,_this$options$fillPad12,_this$options$fillPad13,_this$options$fillPad14,_this$options$fillPad15,_this$options$fillPad16,_value$height,_height;if("object"===_typeof(value))height=null!==(_value$height=value.height)&&void 0!==_value$height?_value$height:value.width,value=value.width;else height=null!==(_height=height)&&void 0!==_height?_height:value;var topPadding=null!==(_this$options$fillPad9=null===(_this$options$fillPad10=this.options.fillPaddings)||void 0===_this$options$fillPad10?void 0:_this$options$fillPad10.top)&&void 0!==_this$options$fillPad9?_this$options$fillPad9:0,bottomPadding=null!==(_this$options$fillPad11=null===(_this$options$fillPad12=this.options.fillPaddings)||void 0===_this$options$fillPad12?void 0:_this$options$fillPad12.bottom)&&void 0!==_this$options$fillPad11?_this$options$fillPad11:0,leftPadding=null!==(_this$options$fillPad13=null===(_this$options$fillPad14=this.options.fillPaddings)||void 0===_this$options$fillPad14?void 0:_this$options$fillPad14.left)&&void 0!==_this$options$fillPad13?_this$options$fillPad13:0,rightPadding=null!==(_this$options$fillPad15=null===(_this$options$fillPad16=this.options.fillPaddings)||void 0===_this$options$fillPad16?void 0:_this$options$fillPad16.right)&&void 0!==_this$options$fillPad15?_this$options$fillPad15:0;this.fill.setSize(value-leftPadding-rightPadding,height-topPadding-bottomPadding),this.fillMask.setSize(value-leftPadding-rightPadding,height-topPadding-bottomPadding)}this.progress=this._progress}else _superPropGet(ProgressBar,"setSize",this,3)([value,height])}}])}(pixi_js__WEBPACK_IMPORTED_MODULE_0__.mcf)},"./src/stories/utils/loader.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{u:()=>preload});var pixi_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/pixi.js/lib/index.mjs");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _regeneratorRuntime(){_regeneratorRuntime=function _regeneratorRuntime(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function define(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{define({},"")}catch(t){define=function define(t,e,r){return t[e]=r}}function wrap(t,e,r,n){var i=e&&e.prototype instanceof Generator?e:Generator,a=Object.create(i.prototype),c=new Context(n||[]);return o(a,"_invoke",{value:makeInvokeMethod(t,r,c)}),a}function tryCatch(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=wrap;var h="suspendedStart",l="suspendedYield",f="executing",s="completed",y={};function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}var p={};define(p,a,(function(){return this}));var d=Object.getPrototypeOf,v=d&&d(d(values([])));v&&v!==r&&n.call(v,a)&&(p=v);var g=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(p);function defineIteratorMethods(t){["next","throw","return"].forEach((function(e){define(t,e,(function(t){return this._invoke(e,t)}))}))}function AsyncIterator(t,e){function invoke(r,o,i,a){var c=tryCatch(t[r],t,o);if("throw"!==c.type){var u=c.arg,h=u.value;return h&&"object"==_typeof(h)&&n.call(h,"__await")?e.resolve(h.__await).then((function(t){invoke("next",t,i,a)}),(function(t){invoke("throw",t,i,a)})):e.resolve(h).then((function(t){u.value=t,i(u)}),(function(t){return invoke("throw",t,i,a)}))}a(c.arg)}var r;o(this,"_invoke",{value:function value(t,n){function callInvokeWithMethodAndArg(){return new e((function(e,r){invoke(t,n,e,r)}))}return r=r?r.then(callInvokeWithMethodAndArg,callInvokeWithMethodAndArg):callInvokeWithMethodAndArg()}})}function makeInvokeMethod(e,r,n){var o=h;return function(i,a){if(o===f)throw Error("Generator is already running");if(o===s){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=maybeInvokeDelegate(c,n);if(u){if(u===y)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===h)throw o=s,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=f;var p=tryCatch(e,r,n);if("normal"===p.type){if(o=n.done?s:l,p.arg===y)continue;return{value:p.arg,done:n.done}}"throw"===p.type&&(o=s,n.method="throw",n.arg=p.arg)}}}function maybeInvokeDelegate(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,maybeInvokeDelegate(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),y;var i=tryCatch(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,y;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,y):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function pushTryEntry(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function resetTryEntry(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function Context(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(pushTryEntry,this),this.reset(!0)}function values(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function next(){for(;++o<e.length;)if(n.call(e,o))return next.value=e[o],next.done=!1,next;return next.value=t,next.done=!0,next};return i.next=i}}throw new TypeError(_typeof(e)+" is not iterable")}return GeneratorFunction.prototype=GeneratorFunctionPrototype,o(g,"constructor",{value:GeneratorFunctionPrototype,configurable:!0}),o(GeneratorFunctionPrototype,"constructor",{value:GeneratorFunction,configurable:!0}),GeneratorFunction.displayName=define(GeneratorFunctionPrototype,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===GeneratorFunction||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,GeneratorFunctionPrototype):(t.__proto__=GeneratorFunctionPrototype,define(t,u,"GeneratorFunction")),t.prototype=Object.create(g),t},e.awrap=function(t){return{__await:t}},defineIteratorMethods(AsyncIterator.prototype),define(AsyncIterator.prototype,c,(function(){return this})),e.AsyncIterator=AsyncIterator,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new AsyncIterator(wrap(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},defineIteratorMethods(g),define(g,u,"Generator"),define(g,a,(function(){return this})),define(g,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function next(){for(;r.length;){var t=r.pop();if(t in e)return next.value=t,next.done=!1,next}return next.done=!0,next}},e.values=values,Context.prototype={constructor:Context,reset:function reset(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(resetTryEntry),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function stop(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function dispatchException(e){if(this.done)throw e;var r=this;function handle(n,o){return a.type="throw",a.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return handle("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return handle(i.catchLoc,!0);if(this.prev<i.finallyLoc)return handle(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return handle(i.catchLoc,!0)}else{if(!u)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return handle(i.finallyLoc)}}}},abrupt:function abrupt(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function complete(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function finish(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),resetTryEntry(r),y}},catch:function _catch(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;resetTryEntry(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function delegateYield(e,r,n){return this.delegate={iterator:values(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),y}},e}function asyncGeneratorStep(n,t,e,r,o,a,c){try{var i=n[a](c),u=i.value}catch(n){return void e(n)}i.done?t(u):Promise.resolve(u).then(r,o)}function preload(_x){return _preload.apply(this,arguments)}function _preload(){return _preload=function _asyncToGenerator(n){return function(){var t=this,e=arguments;return new Promise((function(r,o){var a=n.apply(t,e);function _next(n){asyncGeneratorStep(a,r,o,_next,_throw,"next",n)}function _throw(n){asyncGeneratorStep(a,r,o,_next,_throw,"throw",n)}_next(void 0)}))}}(_regeneratorRuntime().mark((function _callee(assets){return _regeneratorRuntime().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return _context.next=2,pixi_js__WEBPACK_IMPORTED_MODULE_0__.sP.load(assets);case 2:case"end":return _context.stop()}}),_callee)}))),_preload.apply(this,arguments)}},"./node_modules/global/window.js":(module,__unused_webpack_exports,__webpack_require__)=>{var win;win="undefined"!=typeof window?window:void 0!==__webpack_require__.g?__webpack_require__.g:"undefined"!=typeof self?self:{},module.exports=win}}]);