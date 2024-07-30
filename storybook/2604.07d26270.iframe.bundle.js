"use strict";(self.webpackChunk_pixi_ui=self.webpackChunk_pixi_ui||[]).push([[2604],{"./node_modules/@storybook/addon-actions/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{aD:()=>chunk_AY7I2SME.aD});var chunk_AY7I2SME=__webpack_require__("./node_modules/@storybook/addon-actions/dist/chunk-AY7I2SME.mjs")},"./src/Input.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>Input});var _pixi_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@pixi/core/lib/index.mjs"),_pixi_display__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@pixi/display/lib/index.mjs"),_pixi_graphics__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@pixi/graphics/lib/index.mjs"),_pixi_mesh_extras__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@pixi/mesh-extras/lib/index.mjs"),_pixi_sprite__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@pixi/sprite/lib/index.mjs"),_pixi_text__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@pixi/text/lib/index.mjs"),typed_signals__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/typed-signals/dist/index.js"),_utils_helpers_view__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/utils/helpers/view.ts");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _construct(Parent,args,Class){return _construct=_isNativeReflectConstruct()?Reflect.construct.bind():function _construct(Parent,args,Class){var a=[null];a.push.apply(a,args);var instance=new(Function.bind.apply(Parent,a));return Class&&_setPrototypeOf(instance,Class.prototype),instance},_construct.apply(null,arguments)}function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,_toPropertyKey(descriptor.key),descriptor)}}function set(target,property,value,receiver){return set="undefined"!=typeof Reflect&&Reflect.set?Reflect.set:function set(target,property,value,receiver){var desc,base=_superPropBase(target,property);if(base){if((desc=Object.getOwnPropertyDescriptor(base,property)).set)return desc.set.call(receiver,value),!0;if(!desc.writable)return!1}if(desc=Object.getOwnPropertyDescriptor(receiver,property)){if(!desc.writable)return!1;desc.value=value,Object.defineProperty(receiver,property,desc)}else _defineProperty(receiver,property,value);return!0},set(target,property,value,receiver)}function _set(target,property,value,receiver,isStrict){if(!set(target,property,value,receiver||target)&&isStrict)throw new TypeError("failed to set property");return value}function _get(){return _get="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function _get(target,property,receiver){var base=_superPropBase(target,property);if(base){var desc=Object.getOwnPropertyDescriptor(base,property);return desc.get?desc.get.call(arguments.length<3?target:receiver):desc.value}},_get.apply(this,arguments)}function _superPropBase(object,property){for(;!Object.prototype.hasOwnProperty.call(object,property)&&null!==(object=_getPrototypeOf(object)););return object}function _setPrototypeOf(o,p){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function _setPrototypeOf(o,p){return o.__proto__=p,o},_setPrototypeOf(o,p)}function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var result,Super=_getPrototypeOf(Derived);if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return function _possibleConstructorReturn(self,call){if(call&&("object"===_typeof(call)||"function"==typeof call))return call;if(void 0!==call)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(self)}(this,result)}}function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function _getPrototypeOf(o){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)},_getPrototypeOf(o)}function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}var Input=function(_Container){!function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),Object.defineProperty(subClass,"prototype",{writable:!1}),superClass&&_setPrototypeOf(subClass,superClass)}(Input,_Container);var _super=_createSuper(Input);function Input(options){var _this;return function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,Input),_defineProperty(_assertThisInitialized(_this=_super.call(this)),"editing",!1),_defineProperty(_assertThisInitialized(_this),"tick",0),_defineProperty(_assertThisInitialized(_this),"activation",!1),_defineProperty(_assertThisInitialized(_this),"handleActivationBinding",_this.handleActivation.bind(_assertThisInitialized(_this))),_defineProperty(_assertThisInitialized(_this),"onKeyUpBinding",_this.onKeyUp.bind(_assertThisInitialized(_this))),_defineProperty(_assertThisInitialized(_this),"stopEditingBinding",_this.stopEditing.bind(_assertThisInitialized(_this))),_defineProperty(_assertThisInitialized(_this),"onInputBinding",_this.onInput.bind(_assertThisInitialized(_this))),_defineProperty(_assertThisInitialized(_this),"paddingTop",0),_defineProperty(_assertThisInitialized(_this),"paddingRight",0),_defineProperty(_assertThisInitialized(_this),"paddingBottom",0),_defineProperty(_assertThisInitialized(_this),"paddingLeft",0),_this.options=options,_this.options=options,_this.padding=options.padding,_this.cursor="text",_this.interactive=!0,_this.on("pointertap",(function(){_this.activation=!0,_pixi_core__WEBPACK_IMPORTED_MODULE_0__.P6.isMobile.any&&_this.handleActivation()})),_pixi_core__WEBPACK_IMPORTED_MODULE_0__.P6.isMobile.any?window.addEventListener("touchstart",_this.handleActivationBinding):_pixi_core__WEBPACK_IMPORTED_MODULE_0__.P6.isMobile.any||(window.addEventListener("click",_this.handleActivationBinding),window.addEventListener("keyup",_this.onKeyUpBinding),window.addEventListener("input",_this.onInputBinding)),_this.onEnter=new typed_signals__WEBPACK_IMPORTED_MODULE_6__.MZ,_this.onChange=new typed_signals__WEBPACK_IMPORTED_MODULE_6__.MZ,_pixi_core__WEBPACK_IMPORTED_MODULE_0__.vB.shared.add((function(delta){return _this.update(delta)})),options.bg?_this.bg=options.bg:console.error("Input: bg is not defined, please define it."),_this}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(Input,[{key:"onInput",value:function onInput(e){this.lastInputData=e.data}},{key:"onKeyUp",value:function onKeyUp(e){var key=e.key;"Backspace"===key?this._delete():"Escape"===key||"Enter"===key?this.stopEditing():1===key.length?this._add(key):this.lastInputData&&1===this.lastInputData.length&&this._add(this.lastInputData)}},{key:"init",value:function init(){var _options$textStyle,_options$TextClass,_options$value,options=this.options,defaultTextStyle={fill:0,align:"center"};this.options.textStyle=null!==(_options$textStyle=options.textStyle)&&void 0!==_options$textStyle?_options$textStyle:defaultTextStyle,this.options.TextClass=null!==(_options$TextClass=options.TextClass)&&void 0!==_options$TextClass?_options$TextClass:_pixi_text__WEBPACK_IMPORTED_MODULE_5__.xv;var textStyle=_objectSpread(_objectSpread({},defaultTextStyle),options.textStyle);this.inputField=new this.options.TextClass("",textStyle),this._cursor=new _pixi_sprite__WEBPACK_IMPORTED_MODULE_4__.j(_pixi_core__WEBPACK_IMPORTED_MODULE_0__.xE.WHITE),"tint"in options.textStyle?this._cursor.tint=options.textStyle.tint:this._cursor.tint=Number(options.textStyle.fill)||0,this._cursor.anchor.set(.5),this._cursor.width=2,this._cursor.height=.8*this.inputField.height,this._cursor.alpha=0,this.placeholder=new this.options.TextClass(options.placeholder,null!=textStyle?textStyle:defaultTextStyle),this.placeholder.visible=!!options.placeholder,this.addChild(this.inputField,this.placeholder,this._cursor),this.value=null!==(_options$value=options.value)&&void 0!==_options$value?_options$value:"",this.align()}},{key:"bg",get:function get(){return this._bg},set:function set(bg){var _this$options,_this$options2;this._bg&&this._bg.destroy(),null!==(_this$options=this.options)&&void 0!==_this$options&&_this$options.nineSlicePlane&&("string"==typeof bg?this._bg=_construct(_pixi_mesh_extras__WEBPACK_IMPORTED_MODULE_3__.ZT,[_pixi_core__WEBPACK_IMPORTED_MODULE_0__.xE.from(bg)].concat(_toConsumableArray(this.options.nineSlicePlane))):console.warn("NineSlicePlane can not be used with views set as Container.")),this._bg||(this._bg=(0,_utils_helpers_view__WEBPACK_IMPORTED_MODULE_7__.X)(bg)),this._bg.cursor="text",this._bg.interactive=!0,this.addChildAt(this._bg,0),this.inputField||this.init(),this.inputMask&&(this.inputField.mask=null,this._cursor.mask=null,this.inputMask.destroy()),null!==(_this$options2=this.options)&&void 0!==_this$options2&&_this$options2.nineSlicePlane&&"string"==typeof bg?this.inputMask=_construct(_pixi_mesh_extras__WEBPACK_IMPORTED_MODULE_3__.ZT,[_pixi_core__WEBPACK_IMPORTED_MODULE_0__.xE.from(bg)].concat(_toConsumableArray(this.options.nineSlicePlane))):bg instanceof _pixi_sprite__WEBPACK_IMPORTED_MODULE_4__.j?this.inputMask=new _pixi_sprite__WEBPACK_IMPORTED_MODULE_4__.j(bg.texture):bg instanceof _pixi_graphics__WEBPACK_IMPORTED_MODULE_2__.TC?this.inputMask=bg.clone():this.inputMask=(0,_utils_helpers_view__WEBPACK_IMPORTED_MODULE_7__.X)(bg),this.inputField.mask=this.inputMask,this._cursor.mask=this.inputMask,this.addChildAt(this.inputMask,0)}},{key:"_add",value:function _add(key){this.editing&&(this.options.maxLength&&this.value.length>=this.options.maxLength||(this.value=this.value+key,this.onChange.emit(this.value)))}},{key:"_delete",value:function _delete(){if(this.editing&&0!==this.value.length){var array=this.value.split("");array.pop(),this.value=array.join(""),this.onChange.emit(this.value)}}},{key:"_startEditing",value:function _startEditing(){this.options.cleanOnFocus&&(this.value=""),this.tick=0,this.editing=!0,this.placeholder.visible=!1,this._cursor.alpha=1,_pixi_core__WEBPACK_IMPORTED_MODULE_0__.P6.isMobile.any&&this.createInputField(),this.align()}},{key:"createInputField",value:function createInputField(){var _this$input,_this$input2;this.input&&(this.input.removeEventListener("blur",this.stopEditingBinding),this.input.removeEventListener("keyup",this.onKeyUpBinding),this.input.removeEventListener("input",this.onInputBinding),null===(_this$input=this.input)||void 0===_this$input||_this$input.blur(),null===(_this$input2=this.input)||void 0===_this$input2||_this$input2.remove(),this.input=null);var input=document.createElement("input");document.body.appendChild(input),input.style.position="fixed",input.style.left="".concat(this.getGlobalPosition().x,"px"),input.style.top="".concat(this.getGlobalPosition().y,"px"),input.style.opacity="0.0000001",input.style.width="".concat(this._bg.width,"px"),input.style.height="".concat(this._bg.height,"px"),input.style.border="none",input.style.outline="none",input.style.background="white",_pixi_core__WEBPACK_IMPORTED_MODULE_0__.P6.isMobile.android.device?setTimeout((function(){input.focus(),input.click()}),100):(input.focus(),input.click()),input.addEventListener("blur",this.stopEditingBinding),input.addEventListener("keyup",this.onKeyUpBinding),input.addEventListener("input",this.onInputBinding),this.input=input,this.align()}},{key:"handleActivation",value:function handleActivation(){this.stopEditing(),this.activation&&(this._startEditing(),this.activation=!1)}},{key:"stopEditing",value:function stopEditing(){if(this.editing){var _this$input3,_this$input4;if(this._cursor.alpha=0,this.editing=!1,""===this.inputField.text&&(this.placeholder.visible=!0),0===this.value.length&&(this.placeholder.visible=!0),_pixi_core__WEBPACK_IMPORTED_MODULE_0__.P6.isMobile.any)null===(_this$input3=this.input)||void 0===_this$input3||_this$input3.blur(),null===(_this$input4=this.input)||void 0===_this$input4||_this$input4.remove(),this.input=null;this.align(),this.onEnter.emit(this.value)}}},{key:"update",value:function update(dt){this.editing&&(this.tick+=.1*dt,this._cursor.alpha=Math.round(.5*Math.sin(this.tick)+.5))}},{key:"align",value:function align(){if(this._bg){var align=this.getAlign();this.inputField.anchor.set(align,.5),this.inputField.x=this._bg.width*align+(1===align?-this.paddingRight:this.paddingLeft),this.inputField.y=this._bg.height/2+this.paddingTop-this.paddingBottom,this.placeholder.anchor.set(align,.5),this.placeholder.x=this._bg.width*align+(1===align?-this.paddingRight:this.paddingLeft),this.placeholder.y=this._bg.height/2,this._cursor.x=this.getCursorPosX(),this._cursor.y=this.inputField.y}}},{key:"getAlign",value:function getAlign(){var maxWidth=.95*this._bg.width,paddings=this.paddingLeft+this.paddingRight-10;if(this.inputField.width+paddings>maxWidth)return this.editing?1:0;switch(this.options.align){case"left":default:return 0;case"center":return.5;case"right":return 1}}},{key:"getCursorPosX",value:function getCursorPosX(){switch(this.getAlign()){case 0:return this.inputField.x+this.inputField.width;case.5:return this.inputField.x+.5*this.inputField.width;case 1:return this.inputField.x;default:return 0}}},{key:"value",get:function get(){return this.inputField.text},set:function set(text){this.inputField.text=text,0!==text.length?this.placeholder.visible=!1:this.placeholder.visible=!this.editing,this.align()}},{key:"padding",get:function get(){return[this.paddingTop,this.paddingRight,this.paddingBottom,this.paddingLeft]},set:function set(value){var _value$,_ref,_value$2,_ref2,_value$3,_ref3,_ref4,_value$4;if("number"==typeof value&&(this.paddingTop=value,this.paddingRight=value,this.paddingBottom=value,this.paddingLeft=value),Array.isArray(value))this.paddingTop=null!==(_value$=value[0])&&void 0!==_value$?_value$:0,this.paddingRight=null!==(_ref=null!==(_value$2=value[1])&&void 0!==_value$2?_value$2:value[0])&&void 0!==_ref?_ref:0,this.paddingBottom=null!==(_ref2=null!==(_value$3=value[2])&&void 0!==_value$3?_value$3:value[0])&&void 0!==_ref2?_ref2:0,this.paddingLeft=null!==(_ref3=null!==(_ref4=null!==(_value$4=value[3])&&void 0!==_value$4?_value$4:value[1])&&void 0!==_ref4?_ref4:value[0])&&void 0!==_ref3?_ref3:0;else if("object"===_typeof(value)){var _value$top,_value$right,_value$bottom,_value$left;this.paddingTop=null!==(_value$top=value.top)&&void 0!==_value$top?_value$top:0,this.paddingRight=null!==(_value$right=value.right)&&void 0!==_value$right?_value$right:0,this.paddingBottom=null!==(_value$bottom=value.bottom)&&void 0!==_value$bottom?_value$bottom:0,this.paddingLeft=null!==(_value$left=value.left)&&void 0!==_value$left?_value$left:0}}},{key:"destroy",value:function destroy(options){this.off("pointertap"),_pixi_core__WEBPACK_IMPORTED_MODULE_0__.P6.isMobile.any?window.removeEventListener("touchstart",this.handleActivationBinding):_pixi_core__WEBPACK_IMPORTED_MODULE_0__.P6.isMobile.any||(window.removeEventListener("click",this.handleActivationBinding),window.removeEventListener("keyup",this.onKeyUpBinding),window.removeEventListener("input",this.onInputBinding)),_get(_getPrototypeOf(Input.prototype),"destroy",this).call(this,options)}},{key:"width",get:function get(){return _get(_getPrototypeOf(Input.prototype),"width",this)},set:function set(width){var _this$options3;null!==(_this$options3=this.options)&&void 0!==_this$options3&&_this$options3.nineSlicePlane?(this._bg&&(this._bg.width=width),this.inputMask&&(this.inputMask.width=width-this.paddingLeft-this.paddingRight,this.inputMask.x=this.paddingLeft),this.align()):_set(_getPrototypeOf(Input.prototype),"width",width,this,!0)}},{key:"height",get:function get(){return _get(_getPrototypeOf(Input.prototype),"height",this)},set:function set(height){var _this$options4;null!==(_this$options4=this.options)&&void 0!==_this$options4&&_this$options4.nineSlicePlane?(this._bg&&(this._bg.height=height),this.inputMask&&(this.inputMask.height=height-this.paddingTop-this.paddingBottom,this.inputMask.y=this.paddingTop),this.align()):_set(_getPrototypeOf(Input.prototype),"height",height,this,!0)}}]),Input}(_pixi_display__WEBPACK_IMPORTED_MODULE_1__.W2)}}]);