"use strict";(self.webpackChunk_pixi_ui=self.webpackChunk_pixi_ui||[]).push([[9738],{"./src/stories/slider/DoubleSliderGraphics.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Double:()=>Double,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var pixi_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/pixi.js/lib/index.mjs"),_pixi_storybook_renderer__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@pixi/storybook-renderer/dist/index.mjs"),_DoubleSlider__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/DoubleSlider.ts"),_List__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/List.ts"),_utils_helpers_resize__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/utils/helpers/resize.ts"),_utils_argTypes__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/stories/utils/argTypes.ts");const args={meshColor:"#a5e34d",fillColor:"#00b1dd",borderColor:"#FFFFFF",backgroundColor:"#fe6048",fontColor:"#FFFFFF",min:0,max:100,value1:15,value2:85,width:450,height:35,radius:25,fontSize:20,border:5,handleBorder:3,showValue:!0,onChange:(0,__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs").XI)("Slider")},Double=({min,max,value1,value2,meshColor,borderColor,backgroundColor,fillColor,width,height,radius,fontSize,fontColor,border,handleBorder,showValue,onChange},context)=>new _pixi_storybook_renderer__WEBPACK_IMPORTED_MODULE_1__.M({context,init:view=>{const list=new _List__WEBPACK_IMPORTED_MODULE_3__.B({type:"vertical",elementsMargin:10}),bg=(new pixi_js__WEBPACK_IMPORTED_MODULE_0__.A1g).roundRect(0,0,width,height,radius).fill(borderColor).roundRect(border,border,width-2*border,height-2*border,radius).fill(backgroundColor),fill=(new pixi_js__WEBPACK_IMPORTED_MODULE_0__.A1g).roundRect(0,0,width,height,radius).fill(borderColor).roundRect(border,border,width-2*border,height-2*border,radius).fill(fillColor),slider1=(new pixi_js__WEBPACK_IMPORTED_MODULE_0__.A1g).circle(0,0,20+handleBorder).fill(borderColor).circle(0,0,20).fill(meshColor),slider2=(new pixi_js__WEBPACK_IMPORTED_MODULE_0__.A1g).circle(0,0,20+handleBorder).fill(borderColor).circle(0,0,20).fill(meshColor),doubleSlider=new _DoubleSlider__WEBPACK_IMPORTED_MODULE_4__.J({bg,fill,slider1,slider2,min,max,value1,value2,valueTextStyle:{fill:fontColor,fontSize},showValue});doubleSlider.onChange.connect(((value1,value2)=>{onChange(`${value1} - ${value2}`)})),list.addChild(doubleSlider),view.addChild(list)},resize:view=>(0,_utils_helpers_resize__WEBPACK_IMPORTED_MODULE_5__.E)(view.children[0])}),__WEBPACK_DEFAULT_EXPORT__={title:"Components/Slider/Graphics",argTypes:(0,_utils_argTypes__WEBPACK_IMPORTED_MODULE_6__.U)(args),args:(0,_utils_argTypes__WEBPACK_IMPORTED_MODULE_6__.p)(args)},__namedExportsOrder=["Double"]},"./src/DoubleSlider.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J:()=>DoubleSlider});var typed_signals__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/typed-signals/dist/index.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,_toPropertyKey(descriptor.key),descriptor)}}function set(target,property,value,receiver){return set="undefined"!=typeof Reflect&&Reflect.set?Reflect.set:function set(target,property,value,receiver){var desc,base=_superPropBase(target,property);if(base){if((desc=Object.getOwnPropertyDescriptor(base,property)).set)return desc.set.call(receiver,value),!0;if(!desc.writable)return!1}if(desc=Object.getOwnPropertyDescriptor(receiver,property)){if(!desc.writable)return!1;desc.value=value,Object.defineProperty(receiver,property,desc)}else _defineProperty(receiver,property,value);return!0},set(target,property,value,receiver)}function _set(target,property,value,receiver,isStrict){if(!set(target,property,value,receiver||target)&&isStrict)throw new TypeError("failed to set property");return value}function _get(){return _get="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function _get(target,property,receiver){var base=_superPropBase(target,property);if(base){var desc=Object.getOwnPropertyDescriptor(base,property);return desc.get?desc.get.call(arguments.length<3?target:receiver):desc.value}},_get.apply(this,arguments)}function _superPropBase(object,property){for(;!Object.prototype.hasOwnProperty.call(object,property)&&null!==(object=_getPrototypeOf(object)););return object}function _setPrototypeOf(o,p){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function _setPrototypeOf(o,p){return o.__proto__=p,o},_setPrototypeOf(o,p)}function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var result,Super=_getPrototypeOf(Derived);if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return function _possibleConstructorReturn(self,call){if(call&&("object"===_typeof(call)||"function"==typeof call))return call;if(void 0!==call)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(self)}(this,result)}}function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}function _isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t})()}function _getPrototypeOf(o){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)},_getPrototypeOf(o)}function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:String(i)}var DoubleSlider=function(_SliderBase){!function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),Object.defineProperty(subClass,"prototype",{writable:!1}),superClass&&_setPrototypeOf(subClass,superClass)}(DoubleSlider,_SliderBase);var _super=_createSuper(DoubleSlider);function DoubleSlider(options){var _this;return function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,DoubleSlider),_defineProperty(_assertThisInitialized(_this=_super.call(this,options)),"onChange",new typed_signals__WEBPACK_IMPORTED_MODULE_0__.HN),_defineProperty(_assertThisInitialized(_this),"onUpdate",new typed_signals__WEBPACK_IMPORTED_MODULE_0__.HN),_this.sliderOptions=options,_this.setInitialState(),_this}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(DoubleSlider,[{key:"setInitialState",value:function setInitialState(){this.validateValues();var _this$sliderOptions=this.sliderOptions,value1=_this$sliderOptions.value1,value2=_this$sliderOptions.value2;this.updateProgress(value1,value2),this.value2=value2,this.value1=value1}},{key:"updateProgress",value:function updateProgress(){var value1=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.value1,value2=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.value2;this.progressStart=(value1-this.min)/(this.max-this.min)*100,this.progress=(value2-this.min)/(this.max-this.min)*100}},{key:"validateValues",value:function validateValues(){this.sliderOptions.value1||(this.sliderOptions.value1=this.min),this.sliderOptions.value2||(this.sliderOptions.value2=this.sliderOptions.max),this.sliderOptions.value2<this.sliderOptions.value1&&(this.sliderOptions.value2=this.sliderOptions.value1),this.sliderOptions.value1<this.sliderOptions.min&&(this.sliderOptions.value1=this.sliderOptions.min),this.sliderOptions.value1>this.sliderOptions.max&&(this.sliderOptions.value1=this.sliderOptions.max),this.sliderOptions.value2>this.sliderOptions.max&&(this.sliderOptions.value2=this.sliderOptions.max)}},{key:"value1",get:function get(){return this._value1},set:function set(value1){var _this$onUpdate;value1!==this._value1&&(value1<this.min&&(value1=this.min),value1>this._value2&&(value1=this._value2),this._value1=value1,this.updateSlider1(),null===(_this$onUpdate=this.onUpdate)||void 0===_this$onUpdate||_this$onUpdate.emit(this.value1,this.value2))}},{key:"value2",get:function get(){return this._value2},set:function set(value2){var _this$onUpdate2;value2!==this._value2&&(value2<this._value1&&(value2=this._value1),value2>this.max&&(value2=this.max),this._value2=value2,this.updateSlider2(),null===(_this$onUpdate2=this.onUpdate)||void 0===_this$onUpdate2||_this$onUpdate2.emit(this.value1,this.value2))}},{key:"update",value:function update(event){var _this$bg;if(_get(_getPrototypeOf(DoubleSlider.prototype),"update",this).call(this,event),this.dragging){var x=event.currentTarget.parent.worldTransform.applyInverse(event.global).x,slider1Dist=Math.abs(x-this._slider1.x-this._slider1.width),slider2Dist=Math.abs(x-this._slider2.x);this.activeValue||(this.slider1&&x<this.slider1.x?this.activeValue="value1":this.slider2&&x>this.slider2.x?this.activeValue="value2":this.activeValue=slider1Dist<slider2Dist?"value1":"value2");var progress=this.validate(x/(null===(_this$bg=this.bg)||void 0===_this$bg?void 0:_this$bg.width)*100);"value1"===this.activeValue?(this.progressStart=progress,this.value1=this.min+(this.max-this.min)/100*progress,this.updateProgress(this.value1,this.value2)):(this.progress=progress,this.value2=this.min+(this.max-this.min)/100*progress,this.updateProgress(this.value1,this.value2))}}},{key:"endUpdate",value:function endUpdate(){_get(_getPrototypeOf(DoubleSlider.prototype),"endUpdate",this).call(this),this.activeValue=null}},{key:"change",value:function change(){var _this$onChange;null===(_this$onChange=this.onChange)||void 0===_this$onChange||_this$onChange.emit(this.value1,this.value2)}},{key:"slider1",get:function get(){return this._slider1},set:function set(value){_set(_getPrototypeOf(DoubleSlider.prototype),"slider1",value,this,!0),this.updateSlider1()}},{key:"slider2",get:function get(){return this._slider2},set:function set(value){_set(_getPrototypeOf(DoubleSlider.prototype),"slider2",value,this,!0),this.updateSlider2()}},{key:"updateSlider1",value:function updateSlider1(){var _this$bg2,_this$bg3,_this$sliderOptions2;if(this.updateProgress(this.value1,this.value2),this._slider1.x=(null===(_this$bg2=this.bg)||void 0===_this$bg2?void 0:_this$bg2.width)/100*this.progressStart-this._slider1.width/2,this._slider1.y=(null===(_this$bg3=this.bg)||void 0===_this$bg3?void 0:_this$bg3.height)/2,this._slider2&&this._slider1.x>this._slider2.x&&(this._slider1.x=this._slider2.x),null!==(_this$sliderOptions2=this.sliderOptions)&&void 0!==_this$sliderOptions2&&_this$sliderOptions2.showValue){var _this$sliderOptions$v,_this$sliderOptions$v2,_this$sliderOptions$v3,_this$sliderOptions$v4;this.value1Text.text="".concat(Math.round(this.value1));var sliderPosX=this._slider1.x+this._slider1.width/2,sliderPosY=this._slider1.y;this.value1Text.x=sliderPosX+(null!==(_this$sliderOptions$v=null===(_this$sliderOptions$v2=this.sliderOptions.valueTextOffset)||void 0===_this$sliderOptions$v2?void 0:_this$sliderOptions$v2.x)&&void 0!==_this$sliderOptions$v?_this$sliderOptions$v:0),this.value1Text.y=sliderPosY+(null!==(_this$sliderOptions$v3=null===(_this$sliderOptions$v4=this.sliderOptions.valueTextOffset)||void 0===_this$sliderOptions$v4?void 0:_this$sliderOptions$v4.y)&&void 0!==_this$sliderOptions$v3?_this$sliderOptions$v3:0)}}},{key:"updateSlider2",value:function updateSlider2(){var _this$bg4,_this$bg5,_this$sliderOptions3;if(this.updateProgress(this.value1,this.value2),this._slider2.x=(null===(_this$bg4=this.bg)||void 0===_this$bg4?void 0:_this$bg4.width)/100*this.progress-this._slider2.width/2,this._slider2.y=(null===(_this$bg5=this.bg)||void 0===_this$bg5?void 0:_this$bg5.height)/2,this._slider2.x<this._slider1.x&&(this._slider2.x=this._slider1.x),null!==(_this$sliderOptions3=this.sliderOptions)&&void 0!==_this$sliderOptions3&&_this$sliderOptions3.showValue){var _this$sliderOptions$v5,_this$sliderOptions$v6,_this$sliderOptions$v7,_this$sliderOptions$v8;this.value2Text.text="".concat(Math.round(this.value2));var sliderPosX=this._slider2.x+this._slider2.width/2,sliderPosY=this._slider2.y;this.value2Text.x=sliderPosX+(null!==(_this$sliderOptions$v5=null===(_this$sliderOptions$v6=this.sliderOptions.valueTextOffset)||void 0===_this$sliderOptions$v6?void 0:_this$sliderOptions$v6.x)&&void 0!==_this$sliderOptions$v5?_this$sliderOptions$v5:0),this.value2Text.y=sliderPosY+(null!==(_this$sliderOptions$v7=null===(_this$sliderOptions$v8=this.sliderOptions.valueTextOffset)||void 0===_this$sliderOptions$v8?void 0:_this$sliderOptions$v8.y)&&void 0!==_this$sliderOptions$v7?_this$sliderOptions$v7:0)}}},{key:"width",get:function get(){return _get(_getPrototypeOf(DoubleSlider.prototype),"width",this)},set:function set(value){_set(_getPrototypeOf(DoubleSlider.prototype),"width",value,this,!0),this.updateSlider1(),this.updateSlider2()}},{key:"height",get:function get(){return _get(_getPrototypeOf(DoubleSlider.prototype),"height",this)},set:function set(value){_set(_getPrototypeOf(DoubleSlider.prototype),"height",value,this,!0),this.updateSlider1(),this.updateSlider2()}},{key:"setSize",value:function setSize(value,height){_get(_getPrototypeOf(DoubleSlider.prototype),"setSize",this).call(this,value,height),this.updateSlider1(),this.updateSlider2()}}]),DoubleSlider}(__webpack_require__("./src/SliderBase.ts").t)}}]);