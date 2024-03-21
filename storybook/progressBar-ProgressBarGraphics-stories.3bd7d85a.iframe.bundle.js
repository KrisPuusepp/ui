"use strict";(self.webpackChunk_pixi_ui=self.webpackChunk_pixi_ui||[]).push([[380],{"./src/stories/progressBar/ProgressBarGraphics.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{UseGraphics:()=>UseGraphics,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _pixi_graphics__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@pixi/graphics/lib/index.mjs"),_List__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/List.ts"),_utils_argTypes__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/stories/utils/argTypes.ts"),_ProgressBar__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/ProgressBar.ts"),_utils_helpers_resize__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/utils/helpers/resize.ts"),_utils_color__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/stories/utils/color.ts"),args={fillColor:"#00b1dd",borderColor:"#FFFFFF",backgroundColor:"#fe6048",value:50,width:450,height:35,radius:25,border:3,animate:!0,vertical:!1},UseGraphics=function UseGraphics(_ref){var value=_ref.value,borderColor=_ref.borderColor,backgroundColor=_ref.backgroundColor,fillColor=_ref.fillColor,width=_ref.width,height=_ref.height,radius=_ref.radius,border=_ref.border,animate=_ref.animate,vertical=_ref.vertical,view=new _List__WEBPACK_IMPORTED_MODULE_1__.a({type:"vertical",elementsMargin:10});fillColor=(0,_utils_color__WEBPACK_IMPORTED_MODULE_2__.Lq)(fillColor),borderColor=(0,_utils_color__WEBPACK_IMPORTED_MODULE_2__.Lq)(borderColor),backgroundColor=(0,_utils_color__WEBPACK_IMPORTED_MODULE_2__.Lq)(backgroundColor);var bg=(new _pixi_graphics__WEBPACK_IMPORTED_MODULE_0__.TC).beginFill(borderColor).drawRoundedRect(0,0,width,height,radius).beginFill(backgroundColor).drawRoundedRect(border,border,width-2*border,height-2*border,radius),fill=(new _pixi_graphics__WEBPACK_IMPORTED_MODULE_0__.TC).beginFill(borderColor).drawRoundedRect(0,0,width,height,radius).beginFill(fillColor).drawRoundedRect(border,border,width-2*border,height-2*border,radius),progressBar=new _ProgressBar__WEBPACK_IMPORTED_MODULE_3__.k({bg,fill,progress:value});vertical&&(progressBar.rotation=-Math.PI/2),view.addChild(progressBar);var isFilling=!0;return{view,resize:function resize(){(0,_utils_helpers_resize__WEBPACK_IMPORTED_MODULE_4__.w)(view),view.y+=view.height},update:function update(){animate&&(isFilling?value++:value--,value>150?isFilling=!1:value<-50&&(isFilling=!0),progressBar.progress=value)}}};const __WEBPACK_DEFAULT_EXPORT__={parameters:{storySource:{source:"import { Graphics } from '@pixi/graphics';\nimport { List } from '../../List';\nimport { argTypes, getDefaultArgs } from '../utils/argTypes';\nimport { ProgressBar } from '../../ProgressBar';\nimport { centerElement } from '../../utils/helpers/resize';\nimport type { StoryFn } from '@storybook/types';\nimport { getColor } from '../utils/color';\n\nconst args = {\n    fillColor: '#00b1dd',\n    borderColor: '#FFFFFF',\n    backgroundColor: '#fe6048',\n    value: 50,\n    width: 450,\n    height: 35,\n    radius: 25,\n    border: 3,\n    animate: true,\n    vertical: false\n};\n\nexport const UseGraphics: StoryFn = ({\n    value,\n    borderColor,\n    backgroundColor,\n    fillColor,\n    width,\n    height,\n    radius,\n    border,\n    animate,\n    vertical\n}: any) =>\n{\n    const view = new List({ type: 'vertical', elementsMargin: 10 });\n\n    fillColor = getColor(fillColor);\n    borderColor = getColor(borderColor);\n    backgroundColor = getColor(backgroundColor);\n\n    const bg = new Graphics()\n        .beginFill(borderColor)\n        .drawRoundedRect(0, 0, width, height, radius)\n        .beginFill(backgroundColor)\n        .drawRoundedRect(border, border, width - (border * 2), height - (border * 2), radius);\n\n    const fill = new Graphics()\n        .beginFill(borderColor)\n        .drawRoundedRect(0, 0, width, height, radius)\n        .beginFill(fillColor)\n        .drawRoundedRect(border, border, width - (border * 2), height - (border * 2), radius);\n\n    // Component usage\n    const progressBar = new ProgressBar({\n        bg,\n        fill,\n        progress: value\n    });\n\n    if (vertical)\n    {\n        progressBar.rotation = -Math.PI / 2;\n    }\n\n    view.addChild(progressBar);\n\n    let isFilling = true;\n\n    return {\n        view,\n        resize: () =>\n        {\n            centerElement(view);\n            view.y += view.height;\n        },\n        update: () =>\n        {\n            if (!animate)\n            {\n                return;\n            }\n\n            isFilling ? value++ : value--;\n\n            if (value > 150)\n            {\n                isFilling = false;\n            }\n            else if (value < -50)\n            {\n                isFilling = true;\n            }\n\n            progressBar.progress = value;\n        }\n    };\n};\n\nexport default {\n    title: 'Components/ProgressBar/UseGraphics',\n    argTypes: argTypes(args),\n    args: getDefaultArgs(args)\n};\n",locationsMap:{"use-graphics":{startLoc:{col:36,line:22},endLoc:{col:1,line:97},startBody:{col:36,line:22},endBody:{col:1,line:97}}}}},title:"Components/ProgressBar/UseGraphics",argTypes:(0,_utils_argTypes__WEBPACK_IMPORTED_MODULE_5__.P)(args),args:(0,_utils_argTypes__WEBPACK_IMPORTED_MODULE_5__.V)(args)};var __namedExportsOrder=["UseGraphics"]},"./src/List.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,_toPropertyKey(descriptor.key),descriptor)}}function _setPrototypeOf(o,p){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function _setPrototypeOf(o,p){return o.__proto__=p,o},_setPrototypeOf(o,p)}function _createSuper(Derived){var hasNativeReflectConstruct=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var result,Super=_getPrototypeOf(Derived);if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return function _possibleConstructorReturn(self,call){if(call&&("object"===_typeof(call)||"function"==typeof call))return call;if(void 0!==call)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(self)}(this,result)}}function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}function _getPrototypeOf(o){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)},_getPrototypeOf(o)}function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}__webpack_require__.d(__webpack_exports__,{a:()=>List});var List=function(_Container){!function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),Object.defineProperty(subClass,"prototype",{writable:!1}),superClass&&_setPrototypeOf(subClass,superClass)}(List,_Container);var _super=_createSuper(List);function List(options){var _options$items,_this;return function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,List),function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}(_assertThisInitialized(_this=_super.call(this)),"children",[]),options&&_this.init(options),null==options||null===(_options$items=options.items)||void 0===_options$items||_options$items.forEach((function(item){return _this.addChild(item)})),_this.on("added",(function(){return _this.arrangeChildren()})),_this.on("childAdded",(function(){return _this.arrangeChildren()})),_this}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(List,[{key:"init",value:function init(options){var _this2=this;this.options=options,null!=options&&options.type&&(this.type=options.type),null!=options&&options.children&&options.children.forEach((function(child){return _this2.addChild(child)}))}},{key:"type",get:function get(){return this._type},set:function set(type){this._type=type,this.arrangeChildren()}},{key:"elementsMargin",get:function get(){return this.options.elementsMargin},set:function set(margin){this.options.elementsMargin=margin,this.arrangeChildren()}},{key:"vertPadding",get:function get(){return this.options.vertPadding},set:function set(padding){this.options.vertPadding=padding,this.arrangeChildren()}},{key:"horPadding",get:function get(){return this.options.horPadding},set:function set(padding){this.options.horPadding=padding,this.arrangeChildren()}},{key:"arrangeChildren",value:function arrangeChildren(){var _this$options$horPadd,_this$options,_this$options$vertPad,_this$options2,_this$options$element,_this$options3,_this$parent,_this$options4,_this3=this,x=null!==(_this$options$horPadd=null===(_this$options=this.options)||void 0===_this$options?void 0:_this$options.horPadding)&&void 0!==_this$options$horPadd?_this$options$horPadd:0,y=null!==(_this$options$vertPad=null===(_this$options2=this.options)||void 0===_this$options2?void 0:_this$options2.vertPadding)&&void 0!==_this$options$vertPad?_this$options$vertPad:0,elementsMargin=null!==(_this$options$element=null===(_this$options3=this.options)||void 0===_this$options3?void 0:_this$options3.elementsMargin)&&void 0!==_this$options$element?_this$options$element:0,maxWidth=null===(_this$parent=this.parent)||void 0===_this$parent?void 0:_this$parent.width;null!==(_this$options4=this.options)&&void 0!==_this$options4&&_this$options4.horPadding&&(maxWidth-=this.options.horPadding),this.children.forEach((function(child,id){switch(_this3.type){case"vertical":child.y=y,child.x=x,y+=elementsMargin+child.height;break;case"horizontal":child.x=x,child.y=y,x+=elementsMargin+child.width;break;default:var _this3$options$horPad,_this3$options;if(child.x=x,child.y=y,child.x+child.width>=maxWidth&&id>0)y+=elementsMargin+child.height,x=null!==(_this3$options$horPad=null===(_this3$options=_this3.options)||void 0===_this3$options?void 0:_this3$options.horPadding)&&void 0!==_this3$options$horPad?_this3$options$horPad:0,child.x=x,child.y=y;x+=elementsMargin+child.width}}))}},{key:"removeItem",value:function removeItem(itemID){var child=this.children[itemID];child&&(this.removeChild(child),this.arrangeChildren())}}]),List}(__webpack_require__("./node_modules/@pixi/display/lib/index.mjs").W2)},"./src/stories/utils/color.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Lq:()=>getColor});var pixi_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/pixi.js/lib/index.mjs");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function getColor(color){if("transparent"!==color&&void 0!==color)switch(_typeof(color)){case"string":if(color.startsWith("#")||color.startsWith("0x"))return pixi_js__WEBPACK_IMPORTED_MODULE_0__.P6Y.string2hex(color);if(color.startsWith("rgba("))return function rgba2Hex(_ref){var _ref2=_slicedToArray(_ref,3),r=_ref2[0],g=_ref2[1],b=_ref2[2];return Number("0x".concat(getHex(r)).concat(getHex(g)).concat(getHex(b)))}(color.slice(5,-1).split(",").map((function(v){return parseInt(v,10)})));if(color.startsWith("rgb(")){var _rgbData=color.slice(5,-1).split(",").map((function(v){return parseInt(v,10)}));return pixi_js__WEBPACK_IMPORTED_MODULE_0__.P6Y.rgb2hex(_rgbData)}if(color.startsWith("hsla(")){var _colorData2$map2=_slicedToArray(color.slice(5,-1).split(",").map((function(v){return parseInt(v,10)})),3);return function hsl2Hex(h,s,l){l/=100;var a=s*Math.min(l,1-l)/100,f=function f(n){var k=(n+h/30)%12,color=l-a*Math.max(Math.min(k-3,9-k,1),-1);return Math.round(255*color).toString(16).padStart(2,"0")};return pixi_js__WEBPACK_IMPORTED_MODULE_0__.P6Y.string2hex("#".concat(f(0)).concat(f(8)).concat(f(4)))}(_colorData2$map2[0],_colorData2$map2[1],_colorData2$map2[2])}throw new Error("Unknown color format: ".concat(color));case"number":return color;default:return parseInt(color,16)}}function getHex(n){var hex=n.toString(16);return 1===hex.length?"0".concat(hex):hex}}}]);