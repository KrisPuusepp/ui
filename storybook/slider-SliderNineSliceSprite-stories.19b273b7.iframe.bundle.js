/*! For license information please see slider-SliderNineSliceSprite-stories.19b273b7.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_pixi_ui=self.webpackChunk_pixi_ui||[]).push([[4863],{"./src/stories/slider/SliderNineSliceSprite.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Single:()=>Single,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _pixi_storybook_renderer__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@pixi/storybook-renderer/dist/index.mjs"),_Slider__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/Slider.ts"),_utils_helpers_resize__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/utils/helpers/resize.ts"),_utils_argTypes__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/stories/utils/argTypes.ts"),_utils_loader__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/stories/utils/loader.ts");const args={fontColor:"#FFFFFF",min:0,max:100,step:1,value:50,fontSize:20,showValue:!0,width:500,height:38,onChange:(0,__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs").XI)("Slider")},Single=({min,max,step,value,fontSize,fontColor,onChange,showValue,width,height},context)=>new _pixi_storybook_renderer__WEBPACK_IMPORTED_MODULE_0__.M({context,init:view=>{(0,_utils_loader__WEBPACK_IMPORTED_MODULE_2__.u)(["slider_bg.png","slider.png","slider_progress.png"]).then((()=>{const singleSlider=new _Slider__WEBPACK_IMPORTED_MODULE_3__.A({bg:"slider_bg.png",fill:"slider_progress.png",slider:"slider.png",nineSliceSprite:{bg:[22,15,22,23],fill:[22,15,22,15]},fillPaddings:{top:2.5,left:5,right:5,bottom:7},min,max,step,value,valueTextStyle:{fill:fontColor,fontSize},showValue,valueTextOffset:{y:-40}});singleSlider.width=width,singleSlider.height=height,singleSlider.onChange.connect((value=>onChange(`${value}`))),view.addChild(singleSlider),(0,_utils_helpers_resize__WEBPACK_IMPORTED_MODULE_4__.E)(view)}))},resize:_utils_helpers_resize__WEBPACK_IMPORTED_MODULE_4__.E}),__WEBPACK_DEFAULT_EXPORT__={title:"Components/Slider/SpriteNineSliceSprite",argTypes:(0,_utils_argTypes__WEBPACK_IMPORTED_MODULE_5__.U)(args),args:(0,_utils_argTypes__WEBPACK_IMPORTED_MODULE_5__.p)(args)},__namedExportsOrder=["Single"]},"./src/Slider.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>Slider});var typed_signals__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/typed-signals/dist/index.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,_toPropertyKey(descriptor.key),descriptor)}}function _get(){return _get="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function _get(target,property,receiver){var base=_superPropBase(target,property);if(base){var desc=Object.getOwnPropertyDescriptor(base,property);return desc.get?desc.get.call(arguments.length<3?target:receiver):desc.value}},_get.apply(this,arguments)}function set(target,property,value,receiver){return set="undefined"!=typeof Reflect&&Reflect.set?Reflect.set:function set(target,property,value,receiver){var desc,base=_superPropBase(target,property);if(base){if((desc=Object.getOwnPropertyDescriptor(base,property)).set)return desc.set.call(receiver,value),!0;if(!desc.writable)return!1}if(desc=Object.getOwnPropertyDescriptor(receiver,property)){if(!desc.writable)return!1;desc.value=value,Object.defineProperty(receiver,property,desc)}else _defineProperty(receiver,property,value);return!0},set(target,property,value,receiver)}function _set(target,property,value,receiver,isStrict){if(!set(target,property,value,receiver||target)&&isStrict)throw new TypeError("failed to set property");return value}function _superPropBase(object,property){for(;!Object.prototype.hasOwnProperty.call(object,property)&&null!==(object=_getPrototypeOf(object)););return object}function _setPrototypeOf(o,p){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function _setPrototypeOf(o,p){return o.__proto__=p,o},_setPrototypeOf(o,p)}function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var result,Super=_getPrototypeOf(Derived);if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return function _possibleConstructorReturn(self,call){if(call&&("object"===_typeof(call)||"function"==typeof call))return call;if(void 0!==call)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(self)}(this,result)}}function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}function _isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t})()}function _getPrototypeOf(o){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)},_getPrototypeOf(o)}function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:String(i)}var Slider=function(_SliderBase){!function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),Object.defineProperty(subClass,"prototype",{writable:!1}),superClass&&_setPrototypeOf(subClass,superClass)}(Slider,_SliderBase);var _super=_createSuper(Slider);function Slider(options){var _options$value,_this;return function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,Slider),_this=_super.call(this,function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({slider1:options.slider,value1:options.value},options)),_defineProperty(_assertThisInitialized(_this),"onUpdate",new typed_signals__WEBPACK_IMPORTED_MODULE_0__.HN),_defineProperty(_assertThisInitialized(_this),"onChange",new typed_signals__WEBPACK_IMPORTED_MODULE_0__.HN),_this.sliderOptions=options,_this.step=options.step||1,_this.value=null!==(_options$value=options.value)&&void 0!==_options$value?_options$value:_this.min,_this.updateSlider(),_this}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(Slider,[{key:"value",get:function get(){return this._value1},set:function set(value){var _this$onUpdate;value!==this._value1&&(value<this.min&&(value=this.min),value>this.max&&(value=this.max),this._value1=value,this.updateSlider(),null===(_this$onUpdate=this.onUpdate)||void 0===_this$onUpdate||_this$onUpdate.emit(this.value))}},{key:"max",get:function get(){return _get(_getPrototypeOf(Slider.prototype),"max",this)},set:function set(value){_set(_getPrototypeOf(Slider.prototype),"max",value,this,!0),this.updateSlider()}},{key:"min",get:function get(){return _get(_getPrototypeOf(Slider.prototype),"min",this)},set:function set(value){_set(_getPrototypeOf(Slider.prototype),"min",value,this,!0),this.updateSlider()}},{key:"step",get:function get(){return _get(_getPrototypeOf(Slider.prototype),"step",this)},set:function set(value){_set(_getPrototypeOf(Slider.prototype),"step",value,this,!0),this.updateSlider()}},{key:"slider",set:function set(value){this.slider1=value,this.updateSlider()}},{key:"update",value:function update(event){var _this$bg;if(_get(_getPrototypeOf(Slider.prototype),"update",this).call(this,event),this.dragging){var positionRatio=event.currentTarget.parent.worldTransform.applyInverse(event.global).x/((null===(_this$bg=this.bg)||void 0===_this$bg?void 0:_this$bg.width)||1),rawValue=this.min+positionRatio*(this.max-this.min);this.value=Math.round(rawValue/this.step)*this.step}}},{key:"change",value:function change(){var _this$onChange;null===(_this$onChange=this.onChange)||void 0===_this$onChange||_this$onChange.emit(this.value)}},{key:"updateSlider",value:function updateSlider(){var _this$value,_this$bg2,_this$bg3,_this$sliderOptions;if(this.progress=((null!==(_this$value=this.value)&&void 0!==_this$value?_this$value:this.min)-this.min)/(this.max-this.min)*100,this._slider1.x=(null===(_this$bg2=this.bg)||void 0===_this$bg2?void 0:_this$bg2.width)/100*this.progress-this._slider1.width/2,this._slider1.y=(null===(_this$bg3=this.bg)||void 0===_this$bg3?void 0:_this$bg3.height)/2,null!==(_this$sliderOptions=this.sliderOptions)&&void 0!==_this$sliderOptions&&_this$sliderOptions.showValue){var _this$sliderOptions$v,_this$sliderOptions$v2,_this$sliderOptions$v3,_this$sliderOptions$v4;this.value1Text.text="".concat(Math.round(this.value));var sliderPosX=this._slider1.x+this._slider1.width/2,sliderPosY=this._slider1.y;this.value1Text.x=sliderPosX+(null!==(_this$sliderOptions$v=null===(_this$sliderOptions$v2=this.sliderOptions.valueTextOffset)||void 0===_this$sliderOptions$v2?void 0:_this$sliderOptions$v2.x)&&void 0!==_this$sliderOptions$v?_this$sliderOptions$v:0),this.value1Text.y=sliderPosY+(null!==(_this$sliderOptions$v3=null===(_this$sliderOptions$v4=this.sliderOptions.valueTextOffset)||void 0===_this$sliderOptions$v4?void 0:_this$sliderOptions$v4.y)&&void 0!==_this$sliderOptions$v3?_this$sliderOptions$v3:0)}}},{key:"width",get:function get(){return _get(_getPrototypeOf(Slider.prototype),"width",this)},set:function set(value){_set(_getPrototypeOf(Slider.prototype),"width",value,this,!0),this.updateSlider()}},{key:"height",get:function get(){return _get(_getPrototypeOf(Slider.prototype),"height",this)},set:function set(value){_set(_getPrototypeOf(Slider.prototype),"height",value,this,!0),this.updateSlider()}},{key:"setSize",value:function setSize(value,height){_get(_getPrototypeOf(Slider.prototype),"setSize",this).call(this,value,height),this.updateSlider()}}]),Slider}(__webpack_require__("./src/SliderBase.ts").t)},"./src/stories/utils/argTypes.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}__webpack_require__.d(__webpack_exports__,{U:()=>argTypes,p:()=>getDefaultArgs});var controls={select:{control:{type:"select"}},check:{control:{type:"check"}},color:{control:{type:"color"}},amount:{control:{type:"range"}},type:{control:{type:"radio"}},date:{control:{type:"date"}},switch:{control:{type:"boolean"}}},argTypes=function argTypes(args){var exportArgTypes={};for(var key in args)if("number"==typeof args[key]){var min=0,arg=args[key];key.includes("font")&&(min=1),exportArgTypes[key]=arg>=0?arg>=100?{control:{type:"range",min,max:1e3,step:10}}:arg>10?{control:{type:"range",min,max:100,step:1}}:0!==arg&&arg<1?{control:{type:"range",min:0,max:1,step:.1}}:{control:{type:"range",min,max:10,step:1}}:arg<=-100?{control:{type:"range",min:-1e3,max:1e3,step:10}}:arg<-10?{control:{type:"range",min:-100,max:100,step:10}}:0!==arg&&arg>-1?{control:{type:"range",min:-1,max:0,step:.1}}:{control:{type:"range",min:-10,max:10,step:1}}}else switch(getArgType(key)&&(exportArgTypes[key]=getArgType(key)),_typeof(args[key])){case"object":exportArgTypes[key]=controls.select,Array.isArray(args[key])?exportArgTypes[key].options=args[key]:exportArgTypes[key].options=Object.keys(args).map((function(key){return args[key]}));break;case"boolean":exportArgTypes[key]=controls.switch}return exportArgTypes};function getArgType(type){for(var control in controls)if(type.toLowerCase().indexOf(control)>-1)return controls[control]}var getDefaultArgs=function getDefaultArgs(args){var exportArgs={};for(var key in args)if("object"===_typeof(args[key]))Array.isArray(args[key])&&(exportArgs[key]=args[key][0]);else exportArgs[key]=args[key];return exportArgs}},"./src/stories/utils/loader.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{u:()=>preload});var pixi_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/pixi.js/lib/index.mjs");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _regeneratorRuntime(){_regeneratorRuntime=function _regeneratorRuntime(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function define(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{define({},"")}catch(t){define=function define(t,e,r){return t[e]=r}}function wrap(t,e,r,n){var i=e&&e.prototype instanceof Generator?e:Generator,a=Object.create(i.prototype),c=new Context(n||[]);return o(a,"_invoke",{value:makeInvokeMethod(t,r,c)}),a}function tryCatch(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=wrap;var h="suspendedStart",l="suspendedYield",f="executing",s="completed",y={};function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}var p={};define(p,a,(function(){return this}));var d=Object.getPrototypeOf,v=d&&d(d(values([])));v&&v!==r&&n.call(v,a)&&(p=v);var g=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(p);function defineIteratorMethods(t){["next","throw","return"].forEach((function(e){define(t,e,(function(t){return this._invoke(e,t)}))}))}function AsyncIterator(t,e){function invoke(r,o,i,a){var c=tryCatch(t[r],t,o);if("throw"!==c.type){var u=c.arg,h=u.value;return h&&"object"==_typeof(h)&&n.call(h,"__await")?e.resolve(h.__await).then((function(t){invoke("next",t,i,a)}),(function(t){invoke("throw",t,i,a)})):e.resolve(h).then((function(t){u.value=t,i(u)}),(function(t){return invoke("throw",t,i,a)}))}a(c.arg)}var r;o(this,"_invoke",{value:function value(t,n){function callInvokeWithMethodAndArg(){return new e((function(e,r){invoke(t,n,e,r)}))}return r=r?r.then(callInvokeWithMethodAndArg,callInvokeWithMethodAndArg):callInvokeWithMethodAndArg()}})}function makeInvokeMethod(e,r,n){var o=h;return function(i,a){if(o===f)throw new Error("Generator is already running");if(o===s){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=maybeInvokeDelegate(c,n);if(u){if(u===y)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===h)throw o=s,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=f;var p=tryCatch(e,r,n);if("normal"===p.type){if(o=n.done?s:l,p.arg===y)continue;return{value:p.arg,done:n.done}}"throw"===p.type&&(o=s,n.method="throw",n.arg=p.arg)}}}function maybeInvokeDelegate(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,maybeInvokeDelegate(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),y;var i=tryCatch(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,y;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,y):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function pushTryEntry(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function resetTryEntry(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function Context(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(pushTryEntry,this),this.reset(!0)}function values(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function next(){for(;++o<e.length;)if(n.call(e,o))return next.value=e[o],next.done=!1,next;return next.value=t,next.done=!0,next};return i.next=i}}throw new TypeError(_typeof(e)+" is not iterable")}return GeneratorFunction.prototype=GeneratorFunctionPrototype,o(g,"constructor",{value:GeneratorFunctionPrototype,configurable:!0}),o(GeneratorFunctionPrototype,"constructor",{value:GeneratorFunction,configurable:!0}),GeneratorFunction.displayName=define(GeneratorFunctionPrototype,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===GeneratorFunction||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,GeneratorFunctionPrototype):(t.__proto__=GeneratorFunctionPrototype,define(t,u,"GeneratorFunction")),t.prototype=Object.create(g),t},e.awrap=function(t){return{__await:t}},defineIteratorMethods(AsyncIterator.prototype),define(AsyncIterator.prototype,c,(function(){return this})),e.AsyncIterator=AsyncIterator,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new AsyncIterator(wrap(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},defineIteratorMethods(g),define(g,u,"Generator"),define(g,a,(function(){return this})),define(g,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function next(){for(;r.length;){var t=r.pop();if(t in e)return next.value=t,next.done=!1,next}return next.done=!0,next}},e.values=values,Context.prototype={constructor:Context,reset:function reset(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(resetTryEntry),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function stop(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function dispatchException(e){if(this.done)throw e;var r=this;function handle(n,o){return a.type="throw",a.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return handle("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return handle(i.catchLoc,!0);if(this.prev<i.finallyLoc)return handle(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return handle(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return handle(i.finallyLoc)}}}},abrupt:function abrupt(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function complete(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function finish(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),resetTryEntry(r),y}},catch:function _catch(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;resetTryEntry(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function delegateYield(e,r,n){return this.delegate={iterator:values(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),y}},e}function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function preload(_x){return _preload.apply(this,arguments)}function _preload(){return _preload=function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}(_regeneratorRuntime().mark((function _callee(assets){return _regeneratorRuntime().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return _context.next=2,pixi_js__WEBPACK_IMPORTED_MODULE_0__.sP.load(assets);case 2:case"end":return _context.stop()}}),_callee)}))),_preload.apply(this,arguments)}},"./src/utils/helpers/resize.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function centerElement(view,horPos,verPos){var canvas=document.getElementById("storybook-root");view.width>0?view.x=0===horPos?0:horPos?canvas.offsetWidth*horPos-view.width/2:canvas.offsetWidth/2-view.width/2:view.x=canvas.offsetWidth/2,view.height>0?view.y=0===verPos?0:verPos?canvas.offsetHeight*verPos-view.height/2:canvas.offsetHeight/2-view.height/2:view.y=canvas.offsetHeight/2}function centerView(view){var canvas=document.getElementById("storybook-root");view.x=canvas.offsetWidth/2,view.y=canvas.offsetHeight/2}__webpack_require__.d(__webpack_exports__,{E:()=>centerElement,l:()=>centerView})},"./src/utils/helpers/view.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{K:()=>getView,l:()=>getSpriteView});var pixi_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/pixi.js/lib/index.mjs");function getView(view){return"string"==typeof view?pixi_js__WEBPACK_IMPORTED_MODULE_0__.kxk.from(view):view}function getSpriteView(view){return"string"==typeof view?pixi_js__WEBPACK_IMPORTED_MODULE_0__.kxk.from(view):view}}}]);