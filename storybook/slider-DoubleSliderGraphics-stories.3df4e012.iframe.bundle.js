"use strict";(self.webpackChunk_pixi_ui=self.webpackChunk_pixi_ui||[]).push([[9738],{"./src/stories/slider/DoubleSliderGraphics.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Double:()=>Double,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var pixi_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/pixi.js/lib/index.mjs"),_pixi_storybook_renderer__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@pixi/storybook-renderer/dist/index.mjs"),_DoubleSlider__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/DoubleSlider.ts"),_List__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/List.ts"),_utils_helpers_resize__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/utils/helpers/resize.ts"),_utils_argTypes__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/stories/utils/argTypes.ts"),args={meshColor:"#a5e34d",fillColor:"#00b1dd",borderColor:"#FFFFFF",backgroundColor:"#fe6048",fontColor:"#FFFFFF",min:0,max:100,value1:15,value2:85,width:450,height:35,radius:25,fontSize:20,border:5,handleBorder:3,showValue:!0,onChange:(0,__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs").XI)("Slider")},Double=function Double(_ref,context){var min=_ref.min,max=_ref.max,value1=_ref.value1,value2=_ref.value2,meshColor=_ref.meshColor,borderColor=_ref.borderColor,backgroundColor=_ref.backgroundColor,fillColor=_ref.fillColor,width=_ref.width,height=_ref.height,radius=_ref.radius,fontSize=_ref.fontSize,fontColor=_ref.fontColor,border=_ref.border,handleBorder=_ref.handleBorder,showValue=_ref.showValue,onChange=_ref.onChange;return new _pixi_storybook_renderer__WEBPACK_IMPORTED_MODULE_1__.M4({context,init:function init(view){var list=new _List__WEBPACK_IMPORTED_MODULE_3__.B({type:"vertical",elementsMargin:10}),bg=(new pixi_js__WEBPACK_IMPORTED_MODULE_0__.A1g).roundRect(0,0,width,height,radius).fill(borderColor).roundRect(border,border,width-2*border,height-2*border,radius).fill(backgroundColor),fill=(new pixi_js__WEBPACK_IMPORTED_MODULE_0__.A1g).roundRect(0,0,width,height,radius).fill(borderColor).roundRect(border,border,width-2*border,height-2*border,radius).fill(fillColor),slider1=(new pixi_js__WEBPACK_IMPORTED_MODULE_0__.A1g).circle(0,0,20+handleBorder).fill(borderColor).circle(0,0,20).fill(meshColor),slider2=(new pixi_js__WEBPACK_IMPORTED_MODULE_0__.A1g).circle(0,0,20+handleBorder).fill(borderColor).circle(0,0,20).fill(meshColor),doubleSlider=new _DoubleSlider__WEBPACK_IMPORTED_MODULE_4__.J({bg,fill,slider1,slider2,min,max,value1,value2,valueTextStyle:{fill:fontColor,fontSize},showValue});doubleSlider.onChange.connect((function(value1,value2){onChange("".concat(value1," - ").concat(value2))})),list.addChild(doubleSlider),view.addChild(list)},resize:function resize(view){return(0,_utils_helpers_resize__WEBPACK_IMPORTED_MODULE_5__.E)(view.children[0])}})};const __WEBPACK_DEFAULT_EXPORT__={parameters:{storySource:{source:"import { Graphics } from 'pixi.js';\nimport { PixiStory, StoryFn } from '@pixi/storybook-renderer';\nimport { DoubleSlider } from '../../DoubleSlider';\nimport { List } from '../../List';\nimport { centerElement } from '../../utils/helpers/resize';\nimport { argTypes, getDefaultArgs } from '../utils/argTypes';\nimport { action } from '@storybook/addon-actions';\n\nconst args = {\n    meshColor: '#a5e34d',\n    fillColor: '#00b1dd',\n    borderColor: '#FFFFFF',\n    backgroundColor: '#fe6048',\n    fontColor: '#FFFFFF',\n    min: 0,\n    max: 100,\n    value1: 15,\n    value2: 85,\n    width: 450,\n    height: 35,\n    radius: 25,\n    fontSize: 20,\n    border: 5,\n    handleBorder: 3,\n    showValue: true,\n    onChange: action('Slider'),\n};\n\nexport const Double: StoryFn<typeof args> = (\n    {\n        min,\n        max,\n        value1,\n        value2,\n        meshColor,\n        borderColor,\n        backgroundColor,\n        fillColor,\n        width,\n        height,\n        radius,\n        fontSize,\n        fontColor,\n        border,\n        handleBorder,\n        showValue,\n        onChange,\n    },\n    context,\n) =>\n    new PixiStory<typeof args>({\n        context,\n        init: (view) => {\n            const list = new List({ type: 'vertical', elementsMargin: 10 });\n\n            const bg = new Graphics()\n                .roundRect(0, 0, width, height, radius)\n                .fill(borderColor)\n                .roundRect(border, border, width - border * 2, height - border * 2, radius)\n                .fill(backgroundColor);\n\n            const fill = new Graphics()\n                .roundRect(0, 0, width, height, radius)\n                .fill(borderColor)\n                .roundRect(border, border, width - border * 2, height - border * 2, radius)\n                .fill(fillColor);\n\n            const slider1 = new Graphics()\n                .circle(0, 0, 20 + handleBorder)\n                .fill(borderColor)\n                .circle(0, 0, 20)\n                .fill(meshColor);\n\n            const slider2 = new Graphics()\n                .circle(0, 0, 20 + handleBorder)\n                .fill(borderColor)\n                .circle(0, 0, 20)\n                .fill(meshColor);\n\n            const doubleSlider = new DoubleSlider({\n                bg,\n                fill,\n                slider1,\n                slider2,\n                min,\n                max,\n                value1,\n                value2,\n                valueTextStyle: {\n                    fill: fontColor,\n                    fontSize,\n                },\n                showValue,\n            });\n\n            doubleSlider.onChange.connect((value1, value2) => {\n                onChange(`${value1} - ${value2}`);\n            });\n\n            list.addChild(doubleSlider);\n            view.addChild(list);\n        },\n        resize: (view) => centerElement(view.children[0]),\n    });\n\nexport default {\n    title: 'Components/Slider/Graphics',\n    argTypes: argTypes(args),\n    args: getDefaultArgs(args),\n};\n",locationsMap:{double:{startLoc:{col:44,line:29},endLoc:{col:6,line:104},startBody:{col:44,line:29},endBody:{col:6,line:104}}}}},title:"Components/Slider/Graphics",argTypes:(0,_utils_argTypes__WEBPACK_IMPORTED_MODULE_6__.U)(args),args:(0,_utils_argTypes__WEBPACK_IMPORTED_MODULE_6__.p)(args)},__namedExportsOrder=["Double"]},"./src/DoubleSlider.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J:()=>DoubleSlider});var typed_signals__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/typed-signals/dist/index.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _defineProperties(e,r){for(var t=0;t<r.length;t++){var o=r[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,_toPropertyKey(o.key),o)}}function _callSuper(t,o,e){return o=_getPrototypeOf(o),function _possibleConstructorReturn(t,e){if(e&&("object"==_typeof(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(t)}(t,_isNativeReflectConstruct()?Reflect.construct(o,e||[],_getPrototypeOf(t).constructor):o.apply(t,e))}function _isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t})()}function _superPropSet(t,e,o,r,p,f){return function _set(e,r,t,o,f){if(!set(e,r,t,o||e)&&f)throw new TypeError("failed to set property");return t}(_getPrototypeOf(f?t.prototype:t),e,o,r,p)}function set(e,r,t,o){return set="undefined"!=typeof Reflect&&Reflect.set?Reflect.set:function(e,r,t,o){var f,i=_superPropBase(e,r);if(i){if((f=Object.getOwnPropertyDescriptor(i,r)).set)return f.set.call(o,t),!0;if(!f.writable)return!1}if(f=Object.getOwnPropertyDescriptor(o,r)){if(!f.writable)return!1;f.value=t,Object.defineProperty(o,r,f)}else _defineProperty(o,r,t);return!0},set(e,r,t,o)}function _superPropGet(t,o,e,r){var p=_get(_getPrototypeOf(1&r?t.prototype:t),o,e);return 2&r&&"function"==typeof p?function(t){return p.apply(e,t)}:p}function _get(){return _get="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,r){var p=_superPropBase(e,t);if(p){var n=Object.getOwnPropertyDescriptor(p,t);return n.get?n.get.call(arguments.length<3?e:r):n.value}},_get.apply(null,arguments)}function _superPropBase(t,o){for(;!{}.hasOwnProperty.call(t,o)&&null!==(t=_getPrototypeOf(t)););return t}function _getPrototypeOf(t){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},_getPrototypeOf(t)}function _setPrototypeOf(t,e){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},_setPrototypeOf(t,e)}function _defineProperty(e,r,t){return(r=_toPropertyKey(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:i+""}var DoubleSlider=function(_SliderBase){function DoubleSlider(options){var _this;return function _classCallCheck(a,n){if(!(a instanceof n))throw new TypeError("Cannot call a class as a function")}(this,DoubleSlider),_defineProperty(_this=_callSuper(this,DoubleSlider,[options]),"onChange",new typed_signals__WEBPACK_IMPORTED_MODULE_0__.HN),_defineProperty(_this,"onUpdate",new typed_signals__WEBPACK_IMPORTED_MODULE_0__.HN),_this.sliderOptions=options,_this.setInitialState(),_this}return function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&_setPrototypeOf(t,e)}(DoubleSlider,_SliderBase),function _createClass(e,r,t){return r&&_defineProperties(e.prototype,r),t&&_defineProperties(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}(DoubleSlider,[{key:"setInitialState",value:function setInitialState(){this.validateValues();var _this$sliderOptions=this.sliderOptions,value1=_this$sliderOptions.value1,value2=_this$sliderOptions.value2;this.updateProgress(value1,value2),this.value2=value2,this.value1=value1}},{key:"updateProgress",value:function updateProgress(){var value1=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.value1,value2=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.value2;this.progressStart=(value1-this.min)/(this.max-this.min)*100,this.progress=(value2-this.min)/(this.max-this.min)*100}},{key:"validateValues",value:function validateValues(){this.sliderOptions.value1||(this.sliderOptions.value1=this.min),this.sliderOptions.value2||(this.sliderOptions.value2=this.sliderOptions.max),this.sliderOptions.value2<this.sliderOptions.value1&&(this.sliderOptions.value2=this.sliderOptions.value1),this.sliderOptions.value1<this.sliderOptions.min&&(this.sliderOptions.value1=this.sliderOptions.min),this.sliderOptions.value1>this.sliderOptions.max&&(this.sliderOptions.value1=this.sliderOptions.max),this.sliderOptions.value2>this.sliderOptions.max&&(this.sliderOptions.value2=this.sliderOptions.max)}},{key:"value1",get:function get(){return this._value1},set:function set(value1){var _this$onUpdate;value1!==this._value1&&(value1<this.min&&(value1=this.min),value1>this._value2&&(value1=this._value2),this._value1=value1,this.updateSlider1(),null===(_this$onUpdate=this.onUpdate)||void 0===_this$onUpdate||_this$onUpdate.emit(this.value1,this.value2))}},{key:"value2",get:function get(){return this._value2},set:function set(value2){var _this$onUpdate2;value2!==this._value2&&(value2<this._value1&&(value2=this._value1),value2>this.max&&(value2=this.max),this._value2=value2,this.updateSlider2(),null===(_this$onUpdate2=this.onUpdate)||void 0===_this$onUpdate2||_this$onUpdate2.emit(this.value1,this.value2))}},{key:"update",value:function update(event){var _this$bg;if(_superPropGet(DoubleSlider,"update",this,3)([event]),this.dragging){var x=event.currentTarget.parent.worldTransform.applyInverse(event.global).x,slider1Dist=Math.abs(x-this._slider1.x-this._slider1.width),slider2Dist=Math.abs(x-this._slider2.x);this.activeValue||(this.slider1&&x<this.slider1.x?this.activeValue="value1":this.slider2&&x>this.slider2.x?this.activeValue="value2":this.activeValue=slider1Dist<slider2Dist?"value1":"value2");var progress=this.validate(x/(null===(_this$bg=this.bg)||void 0===_this$bg?void 0:_this$bg.width)*100);"value1"===this.activeValue?(this.progressStart=progress,this.value1=this.min+(this.max-this.min)/100*progress,this.updateProgress(this.value1,this.value2)):(this.progress=progress,this.value2=this.min+(this.max-this.min)/100*progress,this.updateProgress(this.value1,this.value2))}}},{key:"endUpdate",value:function endUpdate(){_superPropGet(DoubleSlider,"endUpdate",this,3)([]),this.activeValue=null}},{key:"change",value:function change(){var _this$onChange;null===(_this$onChange=this.onChange)||void 0===_this$onChange||_this$onChange.emit(this.value1,this.value2)}},{key:"slider1",get:function get(){return this._slider1},set:function set(value){_superPropSet(DoubleSlider,"slider1",value,this,1,1),this.updateSlider1()}},{key:"slider2",get:function get(){return this._slider2},set:function set(value){_superPropSet(DoubleSlider,"slider2",value,this,1,1),this.updateSlider2()}},{key:"updateSlider1",value:function updateSlider1(){var _this$bg2,_this$bg3,_this$sliderOptions2;if(this.updateProgress(this.value1,this.value2),this._slider1.x=(null===(_this$bg2=this.bg)||void 0===_this$bg2?void 0:_this$bg2.width)/100*this.progressStart-this._slider1.width/2,this._slider1.y=(null===(_this$bg3=this.bg)||void 0===_this$bg3?void 0:_this$bg3.height)/2,this._slider2&&this._slider1.x>this._slider2.x&&(this._slider1.x=this._slider2.x),null!==(_this$sliderOptions2=this.sliderOptions)&&void 0!==_this$sliderOptions2&&_this$sliderOptions2.showValue){var _this$sliderOptions$v,_this$sliderOptions$v2,_this$sliderOptions$v3,_this$sliderOptions$v4;this.value1Text.text="".concat(Math.round(this.value1));var sliderPosX=this._slider1.x+this._slider1.width/2,sliderPosY=this._slider1.y;this.value1Text.x=sliderPosX+(null!==(_this$sliderOptions$v=null===(_this$sliderOptions$v2=this.sliderOptions.valueTextOffset)||void 0===_this$sliderOptions$v2?void 0:_this$sliderOptions$v2.x)&&void 0!==_this$sliderOptions$v?_this$sliderOptions$v:0),this.value1Text.y=sliderPosY+(null!==(_this$sliderOptions$v3=null===(_this$sliderOptions$v4=this.sliderOptions.valueTextOffset)||void 0===_this$sliderOptions$v4?void 0:_this$sliderOptions$v4.y)&&void 0!==_this$sliderOptions$v3?_this$sliderOptions$v3:0)}}},{key:"updateSlider2",value:function updateSlider2(){var _this$bg4,_this$bg5,_this$sliderOptions3;if(this.updateProgress(this.value1,this.value2),this._slider2.x=(null===(_this$bg4=this.bg)||void 0===_this$bg4?void 0:_this$bg4.width)/100*this.progress-this._slider2.width/2,this._slider2.y=(null===(_this$bg5=this.bg)||void 0===_this$bg5?void 0:_this$bg5.height)/2,this._slider2.x<this._slider1.x&&(this._slider2.x=this._slider1.x),null!==(_this$sliderOptions3=this.sliderOptions)&&void 0!==_this$sliderOptions3&&_this$sliderOptions3.showValue){var _this$sliderOptions$v5,_this$sliderOptions$v6,_this$sliderOptions$v7,_this$sliderOptions$v8;this.value2Text.text="".concat(Math.round(this.value2));var sliderPosX=this._slider2.x+this._slider2.width/2,sliderPosY=this._slider2.y;this.value2Text.x=sliderPosX+(null!==(_this$sliderOptions$v5=null===(_this$sliderOptions$v6=this.sliderOptions.valueTextOffset)||void 0===_this$sliderOptions$v6?void 0:_this$sliderOptions$v6.x)&&void 0!==_this$sliderOptions$v5?_this$sliderOptions$v5:0),this.value2Text.y=sliderPosY+(null!==(_this$sliderOptions$v7=null===(_this$sliderOptions$v8=this.sliderOptions.valueTextOffset)||void 0===_this$sliderOptions$v8?void 0:_this$sliderOptions$v8.y)&&void 0!==_this$sliderOptions$v7?_this$sliderOptions$v7:0)}}},{key:"width",get:function get(){return _superPropGet(DoubleSlider,"width",this,1)},set:function set(value){_superPropSet(DoubleSlider,"width",value,this,1,1),this.updateSlider1(),this.updateSlider2()}},{key:"height",get:function get(){return _superPropGet(DoubleSlider,"height",this,1)},set:function set(value){_superPropSet(DoubleSlider,"height",value,this,1,1),this.updateSlider1(),this.updateSlider2()}},{key:"setSize",value:function setSize(value,height){_superPropGet(DoubleSlider,"setSize",this,3)([value,height]),this.updateSlider1(),this.updateSlider2()}}])}(__webpack_require__("./src/SliderBase.ts").t)},"./src/List.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _defineProperties(e,r){for(var t=0;t<r.length;t++){var o=r[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,_toPropertyKey(o.key),o)}}function _callSuper(t,o,e){return o=_getPrototypeOf(o),function _possibleConstructorReturn(t,e){if(e&&("object"==_typeof(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(t)}(t,_isNativeReflectConstruct()?Reflect.construct(o,e||[],_getPrototypeOf(t).constructor):o.apply(t,e))}function _isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t})()}function _getPrototypeOf(t){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},_getPrototypeOf(t)}function _setPrototypeOf(t,e){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},_setPrototypeOf(t,e)}function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:i+""}__webpack_require__.d(__webpack_exports__,{B:()=>List});var List=function(_Container){function List(options){var _options$items,_this;return function _classCallCheck(a,n){if(!(a instanceof n))throw new TypeError("Cannot call a class as a function")}(this,List),function _defineProperty(e,r,t){return(r=_toPropertyKey(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}(_this=_callSuper(this,List),"children",[]),options&&_this.init(options),null==options||null===(_options$items=options.items)||void 0===_options$items||_options$items.forEach((function(item){return _this.addChild(item)})),_this.on("added",(function(){return _this.arrangeChildren()})),_this.on("childAdded",(function(){return _this.arrangeChildren()})),_this}return function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&_setPrototypeOf(t,e)}(List,_Container),function _createClass(e,r,t){return r&&_defineProperties(e.prototype,r),t&&_defineProperties(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}(List,[{key:"init",value:function init(options){var _this2=this;this.options=options,null!=options&&options.type&&(this.type=options.type),null!=options&&options.children&&options.children.forEach((function(child){return _this2.addChild(child)}))}},{key:"type",get:function get(){return this._type},set:function set(type){this._type=type,this.arrangeChildren()}},{key:"elementsMargin",get:function get(){var _this$options$element,_this$options;return null!==(_this$options$element=null===(_this$options=this.options)||void 0===_this$options?void 0:_this$options.elementsMargin)&&void 0!==_this$options$element?_this$options$element:0},set:function set(margin){if(!this.options)throw new Error("List has not been initiated!");this.options.elementsMargin=margin,this.arrangeChildren()}},{key:"padding",get:function get(){var _this$options$padding,_this$options2;return null!==(_this$options$padding=null===(_this$options2=this.options)||void 0===_this$options2?void 0:_this$options2.padding)&&void 0!==_this$options$padding?_this$options$padding:0},set:function set(padding){if(!this.options)throw new Error("List has not been initiated!");this.options.padding=padding,this.options.vertPadding=padding,this.options.horPadding=padding,this.options.leftPadding=padding,this.options.rightPadding=padding,this.options.topPadding=padding,this.options.bottomPadding=padding,this.arrangeChildren()}},{key:"vertPadding",get:function get(){var _ref,_this$options$vertPad,_this$options3;return null!==(_ref=null!==(_this$options$vertPad=null===(_this$options3=this.options)||void 0===_this$options3?void 0:_this$options3.vertPadding)&&void 0!==_this$options$vertPad?_this$options$vertPad:this.padding)&&void 0!==_ref?_ref:0},set:function set(padding){if(!this.options)throw new Error("List has not been initiated!");this.options.vertPadding=padding,this.options.topPadding=padding,this.options.bottomPadding=padding,this.arrangeChildren()}},{key:"horPadding",get:function get(){var _ref2,_this$options$horPadd,_this$options4;return null!==(_ref2=null!==(_this$options$horPadd=null===(_this$options4=this.options)||void 0===_this$options4?void 0:_this$options4.horPadding)&&void 0!==_this$options$horPadd?_this$options$horPadd:this.padding)&&void 0!==_ref2?_ref2:0},set:function set(padding){if(!this.options)throw new Error("List has not been initiated!");this.options.horPadding=padding,this.options.leftPadding=padding,this.options.rightPadding=padding,this.arrangeChildren()}},{key:"leftPadding",get:function get(){var _this$options$leftPad,_this$options5;return null!==(_this$options$leftPad=null===(_this$options5=this.options)||void 0===_this$options5?void 0:_this$options5.leftPadding)&&void 0!==_this$options$leftPad?_this$options$leftPad:this.horPadding},set:function set(padding){if(!this.options)throw new Error("List has not been initiated!");this.options.leftPadding=padding,this.arrangeChildren()}},{key:"rightPadding",get:function get(){var _this$options$rightPa,_this$options6;return null!==(_this$options$rightPa=null===(_this$options6=this.options)||void 0===_this$options6?void 0:_this$options6.rightPadding)&&void 0!==_this$options$rightPa?_this$options$rightPa:this.horPadding},set:function set(padding){if(!this.options)throw new Error("List has not been initiated!");this.options.rightPadding=padding,this.arrangeChildren()}},{key:"topPadding",get:function get(){var _this$options$topPadd,_this$options7;return null!==(_this$options$topPadd=null===(_this$options7=this.options)||void 0===_this$options7?void 0:_this$options7.topPadding)&&void 0!==_this$options$topPadd?_this$options$topPadd:this.vertPadding},set:function set(padding){if(!this.options)throw new Error("List has not been initiated!");this.options.topPadding=padding,this.arrangeChildren()}},{key:"bottomPadding",get:function get(){var _this$options$bottomP,_this$options8;return null!==(_this$options$bottomP=null===(_this$options8=this.options)||void 0===_this$options8?void 0:_this$options8.bottomPadding)&&void 0!==_this$options$bottomP?_this$options$bottomP:this.vertPadding},set:function set(padding){if(!this.options)throw new Error("List has not been initiated!");this.options.bottomPadding=padding,this.arrangeChildren()}},{key:"arrangeChildren",value:function arrangeChildren(){var _this$options$element2,_this$options9,_this$parent,_this3=this,maxHeight=0,x=this.leftPadding,y=this.topPadding,elementsMargin=null!==(_this$options$element2=null===(_this$options9=this.options)||void 0===_this$options9?void 0:_this$options9.elementsMargin)&&void 0!==_this$options$element2?_this$options$element2:0,maxWidth=null===(_this$parent=this.parent)||void 0===_this$parent?void 0:_this$parent.width;this.rightPadding&&(maxWidth-=this.rightPadding),this.children.forEach((function(child,id){switch(_this3.type){case"vertical":child.y=y,child.x=x,y+=elementsMargin+child.height;break;case"horizontal":child.x=x,child.y=y,x+=elementsMargin+child.width;break;default:child.x=x,child.y=y,child.x+child.width>maxWidth&&id>0&&(y+=elementsMargin+maxHeight,x=_this3.leftPadding,child.x=x,child.y=y,maxHeight=0),maxHeight=Math.max(maxHeight,child.height),x+=elementsMargin+child.width}}))}},{key:"removeItem",value:function removeItem(itemID){var child=this.children[itemID];child&&(this.removeChild(child),this.arrangeChildren())}}])}(__webpack_require__("./node_modules/pixi.js/lib/index.mjs").mcf)}}]);