(self.webpackChunk_pixi_ui=self.webpackChunk_pixi_ui||[]).push([[4060],{"./node_modules/@pixi/storybook-renderer/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{M:()=>PixiStory});var global__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/global/window.js"),global__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(global__WEBPACK_IMPORTED_MODULE_0__),pixi_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/pixi.js/lib/index.mjs"),{window:globalWindow}=global__WEBPACK_IMPORTED_MODULE_0___default();globalWindow.STORYBOOK_ENV="PIXI";var PixiStory=class{constructor(options){this.view=new pixi_js__WEBPACK_IMPORTED_MODULE_1__.mcf,options.context.parameters.pixi.appReady.then((()=>{options.init(this.view)})),void 0!==options.update&&(this.update=ticker=>{options.update(this.view,ticker)}),void 0!==options.resize&&(this.resize=(width,height)=>{options.resize(this.view,width,height)}),void 0!==options.destroy&&(this.destroy=()=>{options.destroy(this.view)})}}},"./node_modules/@storybook/addon-actions/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{XI:()=>action});var external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("storybook/internal/preview-api"),external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_=__webpack_require__("storybook/internal/preview-errors"),external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global"),v4=__webpack_require__("./node_modules/uuid/dist/esm-browser/v4.js"),ADDON_ID="storybook/actions",EVENT_ID=`${ADDON_ID}/action-event`,config={depth:10,clearOnStoryChange:!0,limit:50},findProto=(obj,callback)=>{let proto=Object.getPrototypeOf(obj);return!proto||callback(proto)?proto:findProto(proto,callback)},serializeArg=a=>{if("object"==typeof(e=a)&&e&&findProto(e,(proto=>/^Synthetic(?:Base)?Event$/.test(proto.constructor.name)))&&"function"==typeof e.persist){let e=Object.create(a.constructor.prototype,Object.getOwnPropertyDescriptors(a));e.persist();let viewDescriptor=Object.getOwnPropertyDescriptor(e,"view"),view=viewDescriptor?.value;return"object"==typeof view&&"Window"===view?.constructor.name&&Object.defineProperty(e,"view",{...viewDescriptor,value:Object.create(view.constructor.prototype)}),e}var e;return a},generateId=()=>"object"==typeof crypto&&"function"==typeof crypto.getRandomValues?(0,v4.A)():Date.now().toString(36)+Math.random().toString(36).substring(2);function action(name,options={}){let actionOptions={...config,...options},handler=function(...args){if(options.implicit){let storyRenderer=("__STORYBOOK_PREVIEW__"in external_STORYBOOK_MODULE_GLOBAL_.global?external_STORYBOOK_MODULE_GLOBAL_.global.__STORYBOOK_PREVIEW__:void 0)?.storyRenders.find((render=>"playing"===render.phase||"rendering"===render.phase));if(storyRenderer){let deprecated=!window?.FEATURES?.disallowImplicitActionsInRenderV8,error=new external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_.ImplicitActionsDuringRendering({phase:storyRenderer.phase,name,deprecated});if(!deprecated)throw error;console.warn(error)}}let channel=external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel(),id=generateId(),serializedArgs=args.map(serializeArg),normalizedArgs=args.length>1?serializedArgs:serializedArgs[0],actionDisplayToEmit={id,count:0,data:{name,args:normalizedArgs},options:{...actionOptions,maxDepth:5+(actionOptions.depth||3),allowFunction:actionOptions.allowFunction||!1}};channel.emit(EVENT_ID,actionDisplayToEmit)};return handler.isAction=!0,handler.implicit=options.implicit,handler}},"./src/ProgressBar.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{z:()=>ProgressBar});var pixi_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/pixi.js/lib/index.mjs"),_utils_helpers_view__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/utils/helpers/view.ts");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,_toPropertyKey(descriptor.key),descriptor)}}function _get(){return _get="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function _get(target,property,receiver){var base=_superPropBase(target,property);if(base){var desc=Object.getOwnPropertyDescriptor(base,property);return desc.get?desc.get.call(arguments.length<3?target:receiver):desc.value}},_get.apply(this,arguments)}function set(target,property,value,receiver){return set="undefined"!=typeof Reflect&&Reflect.set?Reflect.set:function set(target,property,value,receiver){var desc,base=_superPropBase(target,property);if(base){if((desc=Object.getOwnPropertyDescriptor(base,property)).set)return desc.set.call(receiver,value),!0;if(!desc.writable)return!1}if(desc=Object.getOwnPropertyDescriptor(receiver,property)){if(!desc.writable)return!1;desc.value=value,Object.defineProperty(receiver,property,desc)}else _defineProperty(receiver,property,value);return!0},set(target,property,value,receiver)}function _set(target,property,value,receiver,isStrict){if(!set(target,property,value,receiver||target)&&isStrict)throw new TypeError("failed to set property");return value}function _superPropBase(object,property){for(;!Object.prototype.hasOwnProperty.call(object,property)&&null!==(object=_getPrototypeOf(object)););return object}function _setPrototypeOf(o,p){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function _setPrototypeOf(o,p){return o.__proto__=p,o},_setPrototypeOf(o,p)}function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var result,Super=_getPrototypeOf(Derived);if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return function _possibleConstructorReturn(self,call){if(call&&("object"===_typeof(call)||"function"==typeof call))return call;if(void 0!==call)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(self)}(this,result)}}function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}function _isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t})()}function _getPrototypeOf(o){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)},_getPrototypeOf(o)}function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:String(i)}var ProgressBar=function(_Container){!function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),Object.defineProperty(subClass,"prototype",{writable:!1}),superClass&&_setPrototypeOf(subClass,superClass)}(ProgressBar,_Container);var _super=_createSuper(ProgressBar);function ProgressBar(options){var _this;return function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,ProgressBar),_defineProperty(_assertThisInitialized(_this=_super.call(this)),"progressStart",0),_defineProperty(_assertThisInitialized(_this),"_progress",0),_this.options=options,_this.innerView=new pixi_js__WEBPACK_IMPORTED_MODULE_0__.mcf,_this.addChild(_this.innerView),null!=options&&options.bg&&null!=options&&options.fill&&_this.init(options),_this}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(ProgressBar,[{key:"init",value:function init(_ref){var bg=_ref.bg,fill=_ref.fill,fillPaddings=_ref.fillPaddings,progress=_ref.progress;this.setBackground(bg),this.setFill(fill,fillPaddings),this.progress=progress}},{key:"setBackground",value:function setBackground(bg){var _this$options;this.bg&&this.bg.destroy(),null!==(_this$options=this.options)&&void 0!==_this$options&&_this$options.nineSliceSprite&&("string"==typeof bg?this.bg=new pixi_js__WEBPACK_IMPORTED_MODULE_0__.QL7({texture:pixi_js__WEBPACK_IMPORTED_MODULE_0__.gPd.from(bg),leftWidth:this.options.nineSliceSprite.bg[0],topHeight:this.options.nineSliceSprite.bg[1],rightWidth:this.options.nineSliceSprite.bg[2],bottomHeight:this.options.nineSliceSprite.bg[3]}):console.warn("NineSliceSprite can not be used with views set as Container.")),bg instanceof pixi_js__WEBPACK_IMPORTED_MODULE_0__.A1g&&(this.bg=bg),!this.bg&&("string"==typeof bg||bg instanceof pixi_js__WEBPACK_IMPORTED_MODULE_0__.kxk)&&(this.bg=(0,_utils_helpers_view__WEBPACK_IMPORTED_MODULE_1__.l)(bg)),this.innerView.addChildAt(this.bg,0)}},{key:"setFill",value:function setFill(fill,fillPadding){var _this$options2,_fillPadding$left,_fillPadding$top;if(this.fill&&this.fill.destroy(),this.bg instanceof pixi_js__WEBPACK_IMPORTED_MODULE_0__.kxk&&fill===this.bg)console.warn("Can not use same Sprite instance for bg and fill.");else{null!==(_this$options2=this.options)&&void 0!==_this$options2&&_this$options2.nineSliceSprite&&("string"==typeof fill?this.fill=new pixi_js__WEBPACK_IMPORTED_MODULE_0__.QL7({texture:pixi_js__WEBPACK_IMPORTED_MODULE_0__.gPd.from(fill),leftWidth:this.options.nineSliceSprite.fill[0],topHeight:this.options.nineSliceSprite.fill[1],rightWidth:this.options.nineSliceSprite.fill[2],bottomHeight:this.options.nineSliceSprite.fill[3]}):console.warn("NineSliceSprite can not be used with views set as Container.")),this.fill||(fill instanceof pixi_js__WEBPACK_IMPORTED_MODULE_0__.A1g?this.fill=fill:this.fill=(0,_utils_helpers_view__WEBPACK_IMPORTED_MODULE_1__.l)(fill)),this.innerView.addChildAt(this.fill,1);var offsetX=null!==(_fillPadding$left=null==fillPadding?void 0:fillPadding.left)&&void 0!==_fillPadding$left?_fillPadding$left:0,offsetY=null!==(_fillPadding$top=null==fillPadding?void 0:fillPadding.top)&&void 0!==_fillPadding$top?_fillPadding$top:0;this.fill.x=offsetX,this.fill.y=offsetY,this.fillMask&&(this.fill.mask=null,this.fillMask.destroy());var leftWidth=this.fill.width/2,rightWidth=this.fill.width/2,topHeight=this.fill.height/2,bottomHeight=this.fill.height/2,texture=pixi_js__WEBPACK_IMPORTED_MODULE_0__.gPd.WHITE;this.fill instanceof pixi_js__WEBPACK_IMPORTED_MODULE_0__.kxk&&this.fill.texture&&(texture=this.fill.texture),this.fillMask=new pixi_js__WEBPACK_IMPORTED_MODULE_0__.QL7({texture,leftWidth,topHeight,rightWidth,bottomHeight}),this.fillMask.position.copyFrom(this.fill),this.addChild(this.fillMask),this.fill.mask=this.fillMask}}},{key:"validate",value:function validate(progress){return(progress=Math.round(progress))<0?0:progress>100?100:progress}},{key:"progress",get:function get(){return this._progress},set:function set(progress){this._progress=this.validate(progress),this.fill&&this.fillMask&&(this.fill.mask=null,this.fillMask.width=this.fill.width/100*(this._progress-this.progressStart),this.fillMask.x=this.progressStart/100*this.fill.width+this.fill.x,this.fillMask.height=this.fill.height,this.fill.mask=this.fillMask)}},{key:"width",get:function get(){return _get(_getPrototypeOf(ProgressBar.prototype),"width",this)},set:function set(width){var _this$options3;if(null!==(_this$options3=this.options)&&void 0!==_this$options3&&_this$options3.nineSliceSprite){if(this.bg&&(this.bg.width=width),this.fill){var _this$options$fillPad,_this$options$fillPad2,_this$options$fillPad3,_this$options$fillPad4,leftPadding=null!==(_this$options$fillPad=null===(_this$options$fillPad2=this.options.fillPaddings)||void 0===_this$options$fillPad2?void 0:_this$options$fillPad2.left)&&void 0!==_this$options$fillPad?_this$options$fillPad:0,rightPadding=null!==(_this$options$fillPad3=null===(_this$options$fillPad4=this.options.fillPaddings)||void 0===_this$options$fillPad4?void 0:_this$options$fillPad4.right)&&void 0!==_this$options$fillPad3?_this$options$fillPad3:0;this.fill.width=width-leftPadding-rightPadding,this.fillMask.width=width-leftPadding-rightPadding}this.progress=this._progress}else _set(_getPrototypeOf(ProgressBar.prototype),"width",width,this,!0)}},{key:"height",get:function get(){return _get(_getPrototypeOf(ProgressBar.prototype),"height",this)},set:function set(height){var _this$options4;if(null!==(_this$options4=this.options)&&void 0!==_this$options4&&_this$options4.nineSliceSprite){if(this.bg&&(this.bg.height=height),this.fill){var _this$options$fillPad5,_this$options$fillPad6,_this$options$fillPad7,_this$options$fillPad8,topPadding=null!==(_this$options$fillPad5=null===(_this$options$fillPad6=this.options.fillPaddings)||void 0===_this$options$fillPad6?void 0:_this$options$fillPad6.top)&&void 0!==_this$options$fillPad5?_this$options$fillPad5:0,bottomPadding=null!==(_this$options$fillPad7=null===(_this$options$fillPad8=this.options.fillPaddings)||void 0===_this$options$fillPad8?void 0:_this$options$fillPad8.bottom)&&void 0!==_this$options$fillPad7?_this$options$fillPad7:0;this.fill.height=height-topPadding-bottomPadding,this.fillMask.height=height-topPadding-bottomPadding}this.progress=this._progress}else _set(_getPrototypeOf(ProgressBar.prototype),"height",height,this,!0)}},{key:"setSize",value:function setSize(value,height){var _this$options5;if(null!==(_this$options5=this.options)&&void 0!==_this$options5&&_this$options5.nineSliceSprite){if(this.bg&&this.bg.setSize(value,height),this.fill){var _this$options$fillPad9,_this$options$fillPad10,_this$options$fillPad11,_this$options$fillPad12,_this$options$fillPad13,_this$options$fillPad14,_this$options$fillPad15,_this$options$fillPad16,_value$height,_height;if("object"===_typeof(value))height=null!==(_value$height=value.height)&&void 0!==_value$height?_value$height:value.width,value=value.width;else height=null!==(_height=height)&&void 0!==_height?_height:value;var topPadding=null!==(_this$options$fillPad9=null===(_this$options$fillPad10=this.options.fillPaddings)||void 0===_this$options$fillPad10?void 0:_this$options$fillPad10.top)&&void 0!==_this$options$fillPad9?_this$options$fillPad9:0,bottomPadding=null!==(_this$options$fillPad11=null===(_this$options$fillPad12=this.options.fillPaddings)||void 0===_this$options$fillPad12?void 0:_this$options$fillPad12.bottom)&&void 0!==_this$options$fillPad11?_this$options$fillPad11:0,leftPadding=null!==(_this$options$fillPad13=null===(_this$options$fillPad14=this.options.fillPaddings)||void 0===_this$options$fillPad14?void 0:_this$options$fillPad14.left)&&void 0!==_this$options$fillPad13?_this$options$fillPad13:0,rightPadding=null!==(_this$options$fillPad15=null===(_this$options$fillPad16=this.options.fillPaddings)||void 0===_this$options$fillPad16?void 0:_this$options$fillPad16.right)&&void 0!==_this$options$fillPad15?_this$options$fillPad15:0;this.fill.setSize(value-leftPadding-rightPadding,height-topPadding-bottomPadding),this.fillMask.setSize(value-leftPadding-rightPadding,height-topPadding-bottomPadding)}this.progress=this._progress}else _get(_getPrototypeOf(ProgressBar.prototype),"setSize",this).call(this,value,height)}}]),ProgressBar}(pixi_js__WEBPACK_IMPORTED_MODULE_0__.mcf)},"./src/SliderBase.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{t:()=>SliderBase});var pixi_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/pixi.js/lib/index.mjs"),_ProgressBar__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/ProgressBar.ts"),_utils_helpers_view__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/utils/helpers/view.ts");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,_toPropertyKey(descriptor.key),descriptor)}}function _get(){return _get="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function _get(target,property,receiver){var base=function _superPropBase(object,property){for(;!Object.prototype.hasOwnProperty.call(object,property)&&null!==(object=_getPrototypeOf(object)););return object}(target,property);if(base){var desc=Object.getOwnPropertyDescriptor(base,property);return desc.get?desc.get.call(arguments.length<3?target:receiver):desc.value}},_get.apply(this,arguments)}function _setPrototypeOf(o,p){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function _setPrototypeOf(o,p){return o.__proto__=p,o},_setPrototypeOf(o,p)}function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var result,Super=_getPrototypeOf(Derived);if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return function _possibleConstructorReturn(self,call){if(call&&("object"===_typeof(call)||"function"==typeof call))return call;if(void 0!==call)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(self)}(this,result)}}function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}function _isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t})()}function _getPrototypeOf(o){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)},_getPrototypeOf(o)}function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:String(i)}var SliderBase=function(_ProgressBar){!function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),Object.defineProperty(subClass,"prototype",{writable:!1}),superClass&&_setPrototypeOf(subClass,superClass)}(SliderBase,_ProgressBar);var _super=_createSuper(SliderBase);function SliderBase(options){var _options$min,_options$max,_this;return function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,SliderBase),_defineProperty(_assertThisInitialized(_this=_super.call(this,options)),"dragging",0),_defineProperty(_assertThisInitialized(_this),"_min",0),_defineProperty(_assertThisInitialized(_this),"_max",100),_defineProperty(_assertThisInitialized(_this),"_step",1),_this.settings=options,_this.slider1=options.slider1,_this.slider2=options.slider2,_this.min=null!==(_options$min=options.min)&&void 0!==_options$min?_options$min:0,_this.max=null!==(_options$max=options.max)&&void 0!==_options$max?_options$max:100,_this}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(SliderBase,[{key:"init",value:function init(progressBarOptions){_get(_getPrototypeOf(SliderBase.prototype),"init",this).call(this,progressBarOptions),this.fill&&(this.fill.eventMode="none")}},{key:"slider1",get:function get(){return this._slider1},set:function set(value){if(value&&(this._slider1&&(this.slider1.removeAllListeners(),this.slider1.destroy()),this._slider1=this.createSlider(value),this.settings.showValue&&!this.value1Text)){var _this$settings$valueT,TextClass=null!==(_this$settings$valueT=this.settings.valueTextClass)&&void 0!==_this$settings$valueT?_this$settings$valueT:pixi_js__WEBPACK_IMPORTED_MODULE_0__.EYj;this.value1Text=new TextClass({text:"",style:this.settings.valueTextStyle||{fill:16777215}}),this.value1Text.anchor.set(.5),this.addChild(this.value1Text)}}},{key:"slider2",get:function get(){return this._slider2},set:function set(value){if(value&&(this._slider2&&(this.slider2.removeAllListeners(),this.slider2.destroy()),this._slider2=this.createSlider(value),this.settings.showValue&&!this.value2Text)){var _this$settings$valueT2,TextClass=null!==(_this$settings$valueT2=this.settings.valueTextClass)&&void 0!==_this$settings$valueT2?_this$settings$valueT2:pixi_js__WEBPACK_IMPORTED_MODULE_0__.EYj;this.value2Text=new TextClass({text:"",style:this.settings.valueTextStyle||{fill:16777215}}),this.value2Text.anchor.set(.5),this.addChild(this.value2Text)}}},{key:"setBackground",value:function setBackground(bg){this.bg&&this.bg.removeAllListeners(),_get(_getPrototypeOf(SliderBase.prototype),"setBackground",this).call(this,bg),this.activateBG()}},{key:"activateBG",value:function activateBG(){this.bg.eventMode="static",this.bg.on("pointerdown",this.startUpdate,this).on("globalpointermove",this.update,this).on("pointerup",this.endUpdate,this).on("pointerupoutside",this.endUpdate,this)}},{key:"createSlider",value:function createSlider(sliderData){var _ref,_this$bg,_this2=this,slider=(0,_utils_helpers_view__WEBPACK_IMPORTED_MODULE_1__.K)(sliderData);slider.eventMode="static",slider.on("pointerdown",(function onPointerDown(event){_this2.bg&&(event.currentTarget=_this2.bg),_this2.startUpdate(event)})).on("pointerup",this.endUpdate,this).on("pointerupoutside",this.endUpdate,this),slider.x=slider.width/2;var container=new pixi_js__WEBPACK_IMPORTED_MODULE_0__.mcf;return container.addChild(slider),slider instanceof pixi_js__WEBPACK_IMPORTED_MODULE_0__.kxk&&slider.anchor.set(.5),container.y=null!==(_ref=(null===(_this$bg=this.bg)||void 0===_this$bg?void 0:_this$bg.height)/2)&&void 0!==_ref?_ref:0,this.addChild(container),container}},{key:"startUpdate",value:function startUpdate(event){this.dragging=1;var obj=event.currentTarget;this.startX=obj.parent.worldTransform.applyInverse(event.global).x,this.startUpdateValue1=this._value1,this.startUpdateValue2=this._value2,this.update(event)}},{key:"endUpdate",value:function endUpdate(){this.dragging&&(this.dragging=0,(this.startX||this.startUpdateValue1!==this._value1||this.startUpdateValue2!==this._value2)&&this.change(),this.startUpdateValue1=null,this.startUpdateValue2=null)}},{key:"onClick",value:function onClick(){this.change()}},{key:"update",value:function update(_event){_event.currentTarget.parent.worldTransform.applyInverse(_event.global).x!==this.startX&&(this.startX=null)}},{key:"change",value:function change(){}},{key:"max",get:function get(){return this._max},set:function set(value){this._max=value}},{key:"min",get:function get(){return this._min},set:function set(value){this._min=value}},{key:"step",get:function get(){return this._step},set:function set(value){this._step=value}}]),SliderBase}(_ProgressBar__WEBPACK_IMPORTED_MODULE_2__.z)},"./node_modules/global/window.js":(module,__unused_webpack_exports,__webpack_require__)=>{var win;win="undefined"!=typeof window?window:void 0!==__webpack_require__.g?__webpack_require__.g:"undefined"!=typeof self?self:{},module.exports=win},"./node_modules/typed-signals/dist/Collector.js":(__unused_webpack_module,exports)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Collector=void 0;exports.Collector=class Collector{constructor(signal){this.emit=(...args)=>{signal.emitCollecting(this,args)}}}},"./node_modules/typed-signals/dist/CollectorArray.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.CollectorArray=void 0;const Collector_1=__webpack_require__("./node_modules/typed-signals/dist/Collector.js");class CollectorArray extends Collector_1.Collector{constructor(){super(...arguments),this.result=[]}handleResult(result){return this.result.push(result),!0}getResult(){return this.result}reset(){this.result.length=0}}exports.CollectorArray=CollectorArray},"./node_modules/typed-signals/dist/CollectorLast.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.CollectorLast=void 0;const Collector_1=__webpack_require__("./node_modules/typed-signals/dist/Collector.js");class CollectorLast extends Collector_1.Collector{handleResult(result){return this.result=result,!0}getResult(){return this.result}reset(){delete this.result}}exports.CollectorLast=CollectorLast},"./node_modules/typed-signals/dist/CollectorUntil0.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.CollectorUntil0=void 0;const Collector_1=__webpack_require__("./node_modules/typed-signals/dist/Collector.js");class CollectorUntil0 extends Collector_1.Collector{constructor(){super(...arguments),this.result=!1}handleResult(result){return this.result=result,this.result}getResult(){return this.result}reset(){this.result=!1}}exports.CollectorUntil0=CollectorUntil0},"./node_modules/typed-signals/dist/CollectorWhile0.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.CollectorWhile0=void 0;const Collector_1=__webpack_require__("./node_modules/typed-signals/dist/Collector.js");class CollectorWhile0 extends Collector_1.Collector{constructor(){super(...arguments),this.result=!1}handleResult(result){return this.result=result,!this.result}getResult(){return this.result}reset(){this.result=!1}}exports.CollectorWhile0=CollectorWhile0},"./node_modules/typed-signals/dist/Signal.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Signal=void 0;const SignalConnection_1=__webpack_require__("./node_modules/typed-signals/dist/SignalConnection.js"),SignalLink_1=__webpack_require__("./node_modules/typed-signals/dist/SignalLink.js");exports.Signal=class Signal{constructor(){this.head=new SignalLink_1.SignalLink,this.hasNewLinks=!1,this.emitDepth=0,this.connectionsCount=0}getConnectionsCount(){return this.connectionsCount}hasConnections(){return this.connectionsCount>0}connect(callback,order=0){this.connectionsCount++;const link=this.head.insert(callback,order);return this.emitDepth>0&&(this.hasNewLinks=!0,link.newLink=!0),new SignalConnection_1.SignalConnectionImpl(link,(()=>this.decrementConnectionCount()))}decrementConnectionCount(){this.connectionsCount--}disconnect(callback){for(let link=this.head.next;link!==this.head;link=link.next)if(link.callback===callback)return this.decrementConnectionCount(),link.unlink(),!0;return!1}disconnectAll(){for(;this.head.next!==this.head;)this.head.next.unlink();this.connectionsCount=0}emit(...args){this.emitDepth++;for(let link=this.head.next;link!==this.head;link=link.next)link.isEnabled()&&link.callback&&link.callback.apply(null,args);this.emitDepth--,this.unsetNewLink()}emitCollecting(collector,args){this.emitDepth++;for(let link=this.head.next;link!==this.head;link=link.next)if(link.isEnabled()&&link.callback){const result=link.callback.apply(null,args);if(!collector.handleResult(result))break}this.emitDepth--,this.unsetNewLink()}unsetNewLink(){if(this.hasNewLinks&&0===this.emitDepth){for(let link=this.head.next;link!==this.head;link=link.next)link.newLink=!1;this.hasNewLinks=!1}}}},"./node_modules/typed-signals/dist/SignalConnection.js":(__unused_webpack_module,exports)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.SignalConnectionImpl=void 0;exports.SignalConnectionImpl=class SignalConnectionImpl{constructor(link,parentCleanup){this.link=link,this.parentCleanup=parentCleanup}disconnect(){return null!==this.link&&(this.link.unlink(),this.link=null,this.parentCleanup(),this.parentCleanup=null,!0)}set enabled(enable){this.link&&this.link.setEnabled(enable)}get enabled(){return null!==this.link&&this.link.isEnabled()}}},"./node_modules/typed-signals/dist/SignalConnections.js":(__unused_webpack_module,exports)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.SignalConnections=void 0;exports.SignalConnections=class SignalConnections{constructor(){this.list=[]}add(connection){this.list.push(connection)}disconnectAll(){for(const connection of this.list)connection.disconnect();this.list=[]}getCount(){return this.list.length}isEmpty(){return 0===this.list.length}}},"./node_modules/typed-signals/dist/SignalLink.js":(__unused_webpack_module,exports)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.SignalLink=void 0;class SignalLink{constructor(prev=null,next=null,order=0){this.enabled=!0,this.newLink=!1,this.callback=null,this.prev=null!=prev?prev:this,this.next=null!=next?next:this,this.order=order}isEnabled(){return this.enabled&&!this.newLink}setEnabled(flag){this.enabled=flag}unlink(){this.callback=null,this.next.prev=this.prev,this.prev.next=this.next}insert(callback,order){let after=this.prev;for(;after!==this&&!(after.order<=order);)after=after.prev;const link=new SignalLink(after,after.next,order);return link.callback=callback,after.next=link,link.next.prev=link,link}}exports.SignalLink=SignalLink},"./node_modules/typed-signals/dist/index.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";exports.HN=void 0;var Collector_1=__webpack_require__("./node_modules/typed-signals/dist/Collector.js");var CollectorArray_1=__webpack_require__("./node_modules/typed-signals/dist/CollectorArray.js");var CollectorLast_1=__webpack_require__("./node_modules/typed-signals/dist/CollectorLast.js");var CollectorUntil0_1=__webpack_require__("./node_modules/typed-signals/dist/CollectorUntil0.js");var CollectorWhile0_1=__webpack_require__("./node_modules/typed-signals/dist/CollectorWhile0.js");var Signal_1=__webpack_require__("./node_modules/typed-signals/dist/Signal.js");Object.defineProperty(exports,"HN",{enumerable:!0,get:function(){return Signal_1.Signal}});var SignalConnections_1=__webpack_require__("./node_modules/typed-signals/dist/SignalConnections.js")}}]);