"use strict";(self.webpackChunk_pixi_ui=self.webpackChunk_pixi_ui||[]).push([[789],{"./node_modules/@storybook/addon-actions/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{aD:()=>chunk_OPEUWD42.aD});var chunk_OPEUWD42=__webpack_require__("./node_modules/@storybook/addon-actions/dist/chunk-OPEUWD42.mjs")},"./src/Switcher.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{T:()=>Switcher});var _pixi_display__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@pixi/display/lib/index.mjs"),typed_signals__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/typed-signals/dist/index.js"),_utils_helpers_view__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/utils/helpers/view.ts");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,_toPropertyKey(descriptor.key),descriptor)}}function _setPrototypeOf(o,p){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function _setPrototypeOf(o,p){return o.__proto__=p,o},_setPrototypeOf(o,p)}function _createSuper(Derived){var hasNativeReflectConstruct=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var result,Super=_getPrototypeOf(Derived);if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return function _possibleConstructorReturn(self,call){if(call&&("object"===_typeof(call)||"function"==typeof call))return call;if(void 0!==call)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(self)}(this,result)}}function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}function _getPrototypeOf(o){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)},_getPrototypeOf(o)}function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}var Switcher=function(_Container){!function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),Object.defineProperty(subClass,"prototype",{writable:!1}),superClass&&_setPrototypeOf(subClass,superClass)}(Switcher,_Container);var _super=_createSuper(Switcher);function Switcher(views,triggerEvents,activeViewID){var _this;return function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,Switcher),function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}(_assertThisInitialized(_this=_super.call(this)),"_triggerEvents",new Set(["onPress"])),_this.innerView=new _pixi_display__WEBPACK_IMPORTED_MODULE_0__.W2,_this.addChild(_this.innerView),_this.onChange=new typed_signals__WEBPACK_IMPORTED_MODULE_1__.MZ,views&&(_this.views=views),triggerEvents&&(_this.triggerEvents=triggerEvents),activeViewID&&_this.views.length>0&&(_this.active=activeViewID),_this.setInteractionEvents(),_this}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(Switcher,[{key:"setInteractionEvents",value:function setInteractionEvents(){var _this2=this;this.innerView.eventMode="static",this.innerView.on("pointerdown",(function(){return _this2.handleEvents("onDown")})),this.innerView.on("pointerup",(function(){return _this2.handleEvents("onUp")})),this.innerView.on("pointerupoutside",(function(){return _this2.handleEvents("onUpOut")})),this.innerView.on("pointerout",(function(){return _this2.handleEvents("onOut")})),this.innerView.on("pointertap",(function(){return _this2.handleEvents("onPress")})),this.innerView.on("pointerover",(function(){return _this2.handleEvents("onHover")}))}},{key:"handleEvents",value:function handleEvents(event){this._triggerEvents.has(event)&&this.switch()}},{key:"activeView",get:function get(){if(this.views&&this.views[this.active])return this.views[this.active]}},{key:"views",get:function get(){return this.innerView.children},set:function set(views){var _this3=this;this.innerView.removeChildren(),views.forEach((function(stateView){return _this3.add(stateView)}))}},{key:"add",value:function add(view){var viewInstance=(0,_utils_helpers_view__WEBPACK_IMPORTED_MODULE_2__.X)(view);this.innerView.addChild(viewInstance),viewInstance.visible=!1,1===this.views.length&&(this.active=0)}},{key:"remove",value:function remove(id){this.views[id]&&this.innerView.removeChild(this.views[id])}},{key:"triggerEvents",get:function get(){return Array.from(this._triggerEvents)},set:function set(triggerEvents){this._triggerEvents=new Set(Array.isArray(triggerEvents)?triggerEvents:[triggerEvents])}},{key:"switch",value:function _switch(id){if(void 0===id||id!==this.active){var exID=this.active;if(this.forceSwitch(id),exID!==this.active){var res=this.views.length>2?this.active:1===this.active;this.onChange.emit(res)}}}},{key:"forceSwitch",value:function forceSwitch(id){if(void 0===id||id!==this.active){if(this.activeView&&(this.activeView.visible=!1),void 0!==id&&!this.views[id])throw new Error("View with id ".concat(id," does not exist."));this._active=void 0!==id?id:this.nextActive,void 0!==this._active&&(this.views[this.active].visible=!0)}}},{key:"nextActive",get:function get(){if(0!==this.views.length)return this.active<this.views.length-1?this.active+1:0}},{key:"active",get:function get(){return this._active},set:function set(id){this.switch(id)}}]),Switcher}(_pixi_display__WEBPACK_IMPORTED_MODULE_0__.W2)},"./src/stories/utils/argTypes.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}__webpack_require__.d(__webpack_exports__,{P:()=>argTypes,V:()=>getDefaultArgs});var controls={select:{control:{type:"select"}},check:{control:{type:"check"}},color:{control:{type:"color"}},amount:{control:{type:"range"}},type:{control:{type:"radio"}},date:{control:{type:"date"}},switch:{control:{type:"boolean"}}},argTypes=function argTypes(args){var exportArgTypes={};for(var key in args)if("number"==typeof args[key]){var min=0;key.includes("font")&&(min=1),args[key]>=0?args[key]>=100?exportArgTypes[key]={control:{type:"range",min,max:1e3,step:10}}:args[key]>10?exportArgTypes[key]={control:{type:"range",min,max:100,step:1}}:0!==args[key]&&args[key]<1?exportArgTypes[key]={control:{type:"range",min:0,max:1,step:.1}}:exportArgTypes[key]={control:{type:"range",min,max:10,step:1}}:args[key]<=-100?exportArgTypes[key]={control:{type:"range",min:-1e3,max:1e3,step:10}}:args[key]<-10?exportArgTypes[key]={control:{type:"range",min:-100,max:100,step:10}}:0!==args[key]&&args[key]>-1?exportArgTypes[key]={control:{type:"range",min:-1,max:0,step:.1}}:exportArgTypes[key]={control:{type:"range",min:-10,max:10,step:1}}}else switch(getArgType(key)&&(exportArgTypes[key]=getArgType(key)),_typeof(args[key])){case"object":exportArgTypes[key]=controls.select,Array.isArray(args[key])?exportArgTypes[key].options=args[key]:exportArgTypes[key].options=Object.keys(args).map((function(key){return args[key]}));break;case"boolean":exportArgTypes[key]=controls.switch}return exportArgTypes};function getArgType(type){for(var control in controls)if(type.toLowerCase().indexOf(control)>-1)return controls[control]}var getDefaultArgs=function getDefaultArgs(args){var exportArgs={};for(var key in args)if("object"===_typeof(args[key]))Array.isArray(args[key])&&(exportArgs[key]=args[key][0]);else exportArgs[key]=args[key];return exportArgs}},"./src/utils/helpers/resize.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function centerElement(view,horPos,verPos){var canvas=document.getElementById("storybook-root");view.width>0?view.x=0===horPos?0:horPos?canvas.offsetWidth*horPos-view.width/2:canvas.offsetWidth/2-view.width/2:view.x=canvas.offsetWidth/2,view.height>0?view.y=0===verPos?0:verPos?canvas.offsetHeight*verPos-view.height/2:canvas.offsetHeight/2-view.height/2:view.y=canvas.offsetHeight/2}function centerView(view){var canvas=document.getElementById("storybook-root");view.x=canvas.offsetWidth/2,view.y=canvas.offsetHeight/2}__webpack_require__.d(__webpack_exports__,{C:()=>centerView,w:()=>centerElement})},"./src/utils/helpers/view.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{X:()=>getView});var _pixi_sprite__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@pixi/sprite/lib/index.mjs");function getView(view){return"string"==typeof view?_pixi_sprite__WEBPACK_IMPORTED_MODULE_0__.j.from(view):view}},"./node_modules/typed-signals/dist/Collector.js":(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.Collector=void 0;exports.Collector=class Collector{constructor(signal){this.emit=(...args)=>{signal.emitCollecting(this,args)}}}},"./node_modules/typed-signals/dist/CollectorArray.js":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.CollectorArray=void 0;const Collector_1=__webpack_require__("./node_modules/typed-signals/dist/Collector.js");class CollectorArray extends Collector_1.Collector{constructor(){super(...arguments),this.result=[]}handleResult(result){return this.result.push(result),!0}getResult(){return this.result}reset(){this.result.length=0}}exports.CollectorArray=CollectorArray},"./node_modules/typed-signals/dist/CollectorLast.js":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.CollectorLast=void 0;const Collector_1=__webpack_require__("./node_modules/typed-signals/dist/Collector.js");class CollectorLast extends Collector_1.Collector{handleResult(result){return this.result=result,!0}getResult(){return this.result}reset(){delete this.result}}exports.CollectorLast=CollectorLast},"./node_modules/typed-signals/dist/CollectorUntil0.js":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.CollectorUntil0=void 0;const Collector_1=__webpack_require__("./node_modules/typed-signals/dist/Collector.js");class CollectorUntil0 extends Collector_1.Collector{constructor(){super(...arguments),this.result=!1}handleResult(result){return this.result=result,this.result}getResult(){return this.result}reset(){this.result=!1}}exports.CollectorUntil0=CollectorUntil0},"./node_modules/typed-signals/dist/CollectorWhile0.js":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.CollectorWhile0=void 0;const Collector_1=__webpack_require__("./node_modules/typed-signals/dist/Collector.js");class CollectorWhile0 extends Collector_1.Collector{constructor(){super(...arguments),this.result=!1}handleResult(result){return this.result=result,!this.result}getResult(){return this.result}reset(){this.result=!1}}exports.CollectorWhile0=CollectorWhile0},"./node_modules/typed-signals/dist/Signal.js":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.Signal=void 0;const SignalConnection_1=__webpack_require__("./node_modules/typed-signals/dist/SignalConnection.js"),SignalLink_1=__webpack_require__("./node_modules/typed-signals/dist/SignalLink.js");exports.Signal=class Signal{constructor(){this.head=new SignalLink_1.SignalLink,this.hasNewLinks=!1,this.emitDepth=0,this.connectionsCount=0}getConnectionsCount(){return this.connectionsCount}hasConnections(){return this.connectionsCount>0}connect(callback,order=0){this.connectionsCount++;const link=this.head.insert(callback,order);return this.emitDepth>0&&(this.hasNewLinks=!0,link.newLink=!0),new SignalConnection_1.SignalConnectionImpl(link,(()=>this.decrementConnectionCount()))}decrementConnectionCount(){this.connectionsCount--}disconnect(callback){for(let link=this.head.next;link!==this.head;link=link.next)if(link.callback===callback)return this.decrementConnectionCount(),link.unlink(),!0;return!1}disconnectAll(){for(;this.head.next!==this.head;)this.head.next.unlink();this.connectionsCount=0}emit(...args){this.emitDepth++;for(let link=this.head.next;link!==this.head;link=link.next)link.isEnabled()&&link.callback&&link.callback.apply(null,args);this.emitDepth--,this.unsetNewLink()}emitCollecting(collector,args){this.emitDepth++;for(let link=this.head.next;link!==this.head;link=link.next)if(link.isEnabled()&&link.callback){const result=link.callback.apply(null,args);if(!collector.handleResult(result))break}this.emitDepth--,this.unsetNewLink()}unsetNewLink(){if(this.hasNewLinks&&0===this.emitDepth){for(let link=this.head.next;link!==this.head;link=link.next)link.newLink=!1;this.hasNewLinks=!1}}}},"./node_modules/typed-signals/dist/SignalConnection.js":(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.SignalConnectionImpl=void 0;exports.SignalConnectionImpl=class SignalConnectionImpl{constructor(link,parentCleanup){this.link=link,this.parentCleanup=parentCleanup}disconnect(){return null!==this.link&&(this.link.unlink(),this.link=null,this.parentCleanup(),this.parentCleanup=null,!0)}set enabled(enable){this.link&&this.link.setEnabled(enable)}get enabled(){return null!==this.link&&this.link.isEnabled()}}},"./node_modules/typed-signals/dist/SignalConnections.js":(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.SignalConnections=void 0;exports.SignalConnections=class SignalConnections{constructor(){this.list=[]}add(connection){this.list.push(connection)}disconnectAll(){for(const connection of this.list)connection.disconnect();this.list=[]}getCount(){return this.list.length}isEmpty(){return 0===this.list.length}}},"./node_modules/typed-signals/dist/SignalLink.js":(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.SignalLink=void 0;class SignalLink{constructor(prev=null,next=null,order=0){this.enabled=!0,this.newLink=!1,this.callback=null,this.prev=null!=prev?prev:this,this.next=null!=next?next:this,this.order=order}isEnabled(){return this.enabled&&!this.newLink}setEnabled(flag){this.enabled=flag}unlink(){this.callback=null,this.next.prev=this.prev,this.prev.next=this.next}insert(callback,order){let after=this.prev;for(;after!==this&&!(after.order<=order);)after=after.prev;const link=new SignalLink(after,after.next,order);return link.callback=callback,after.next=link,link.next.prev=link,link}}exports.SignalLink=SignalLink},"./node_modules/typed-signals/dist/index.js":(__unused_webpack_module,exports,__webpack_require__)=>{exports.MZ=void 0;var Collector_1=__webpack_require__("./node_modules/typed-signals/dist/Collector.js");var CollectorArray_1=__webpack_require__("./node_modules/typed-signals/dist/CollectorArray.js");var CollectorLast_1=__webpack_require__("./node_modules/typed-signals/dist/CollectorLast.js");var CollectorUntil0_1=__webpack_require__("./node_modules/typed-signals/dist/CollectorUntil0.js");var CollectorWhile0_1=__webpack_require__("./node_modules/typed-signals/dist/CollectorWhile0.js");var Signal_1=__webpack_require__("./node_modules/typed-signals/dist/Signal.js");Object.defineProperty(exports,"MZ",{enumerable:!0,get:function(){return Signal_1.Signal}});var SignalConnections_1=__webpack_require__("./node_modules/typed-signals/dist/SignalConnections.js")}}]);