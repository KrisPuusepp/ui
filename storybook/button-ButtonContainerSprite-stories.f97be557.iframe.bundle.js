(self.webpackChunk_pixi_ui=self.webpackChunk_pixi_ui||[]).push([[2226],{"./node_modules/@pixi/storybook-renderer/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{M4:()=>PixiStory});var _chunk_N3U6A7KW_mjs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@pixi/storybook-renderer/dist/chunk-N3U6A7KW.mjs"),global__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/global/window.js"),global__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(global__WEBPACK_IMPORTED_MODULE_1__),_storybook_core_client__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("@storybook/core-client"),pixi_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/pixi.js/lib/index.mjs"),{window:globalWindow}=global__WEBPACK_IMPORTED_MODULE_1___default();globalWindow.STORYBOOK_ENV="PIXI";var api=(0,_storybook_core_client__WEBPACK_IMPORTED_MODULE_2__.start)(_chunk_N3U6A7KW_mjs__WEBPACK_IMPORTED_MODULE_0__.u),PixiStory=(api.forceReRender,api.clientApi.raw,class{constructor(options){this.view=new pixi_js__WEBPACK_IMPORTED_MODULE_3__.mcf,options.context.parameters.pixi.appReady.then((()=>{options.init(this.view)})),void 0!==options.update&&(this.update=ticker=>{options.update(this.view,ticker)}),void 0!==options.resize&&(this.resize=(width,height)=>{options.resize(this.view,width,height)}),void 0!==options.destroy&&(this.destroy=()=>{options.destroy(this.view)})}})},"./node_modules/@storybook/addon-actions/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{XI:()=>action});var v4=__webpack_require__("./node_modules/@storybook/addon-actions/node_modules/uuid/dist/esm-browser/v4.js"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global"),preview_errors=__webpack_require__("./node_modules/@storybook/core-events/dist/errors/preview-errors.mjs"),ADDON_ID="storybook/actions",EVENT_ID=`${ADDON_ID}/action-event`,config={depth:10,clearOnStoryChange:!0,limit:50},findProto=(obj,callback)=>{let proto=Object.getPrototypeOf(obj);return!proto||callback(proto)?proto:findProto(proto,callback)},serializeArg=a=>{if("object"==typeof(e=a)&&e&&findProto(e,(proto=>/^Synthetic(?:Base)?Event$/.test(proto.constructor.name)))&&"function"==typeof e.persist){let e=Object.create(a.constructor.prototype,Object.getOwnPropertyDescriptors(a));e.persist();let viewDescriptor=Object.getOwnPropertyDescriptor(e,"view"),view=viewDescriptor?.value;return"object"==typeof view&&"Window"===view?.constructor.name&&Object.defineProperty(e,"view",{...viewDescriptor,value:Object.create(view.constructor.prototype)}),e}var e;return a},generateId=()=>"object"==typeof crypto&&"function"==typeof crypto.getRandomValues?(0,v4.A)():Date.now().toString(36)+Math.random().toString(36).substring(2);function action(name,options={}){let actionOptions={...config,...options},handler=function(...args){if(options.implicit){let storyRenderer=("__STORYBOOK_PREVIEW__"in external_STORYBOOK_MODULE_GLOBAL_.global?external_STORYBOOK_MODULE_GLOBAL_.global.__STORYBOOK_PREVIEW__:void 0)?.storyRenders.find((render=>"playing"===render.phase||"rendering"===render.phase));if(storyRenderer){let deprecated=!window?.FEATURES?.disallowImplicitActionsInRenderV8,error=new preview_errors._U({phase:storyRenderer.phase,name,deprecated});if(!deprecated)throw error;console.warn(error)}}let channel=external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel(),id=generateId(),serializedArgs=args.map(serializeArg),normalizedArgs=args.length>1?serializedArgs:serializedArgs[0],actionDisplayToEmit={id,count:0,data:{name,args:normalizedArgs},options:{...actionOptions,maxDepth:5+(actionOptions.depth||3),allowFunction:actionOptions.allowFunction||!1}};channel.emit(EVENT_ID,actionDisplayToEmit)};return handler.isAction=!0,handler}},"./src/stories/button/ButtonContainerSprite.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ButtonContainerSprite:()=>ButtonContainerSprite,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var pixi_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/pixi.js/lib/index.mjs"),_pixi_storybook_renderer__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@pixi/storybook-renderer/dist/index.mjs"),_Button__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/Button.ts"),_utils_helpers_resize__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/utils/helpers/resize.ts"),_utils_argTypes__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/stories/utils/argTypes.ts"),args={color:"#A5E24D",size:150,radius:150,disabled:!1,action:(0,__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs").XI)("Button")},ButtonContainerSprite=function ButtonContainerSprite(_ref,context){var size=_ref.size,color=_ref.color,disabled=_ref.disabled,radius=_ref.radius,action=_ref.action;return new _pixi_storybook_renderer__WEBPACK_IMPORTED_MODULE_1__.M4({context,init:function init(view){var button=new _Button__WEBPACK_IMPORTED_MODULE_3__.E;button.enabled=!disabled,button.onPress.connect((function(){return action("onPress")})),button.onDown.connect((function(){return action("onDown")})),button.onUp.connect((function(){return action("onUp")})),button.onHover.connect((function(){return action("onHover")})),button.onOut.connect((function(){return action("onOut")})),button.onUpOut.connect((function(){return action("onUpOut")}));var buttonView=new pixi_js__WEBPACK_IMPORTED_MODULE_0__.mcf,buttonBg=(new pixi_js__WEBPACK_IMPORTED_MODULE_0__.A1g).roundRect(0,0,size,size,radius).fill(color),text=new pixi_js__WEBPACK_IMPORTED_MODULE_0__.EYj({text:"🤙",style:{fontSize:70}});text.anchor.set(.5),text.x=buttonBg.width/2,text.y=buttonBg.height/2,buttonView.addChild(buttonBg,text),button.addChild(buttonView),view.addChild(button),(0,_utils_helpers_resize__WEBPACK_IMPORTED_MODULE_4__.E)(button)},resize:function resize(view){return(0,_utils_helpers_resize__WEBPACK_IMPORTED_MODULE_4__.E)(view.children[0])}})};const __WEBPACK_DEFAULT_EXPORT__={parameters:{storySource:{source:"import { Container, Graphics, Text } from 'pixi.js';\nimport { PixiStory, StoryFn } from '@pixi/storybook-renderer';\nimport { ButtonContainer } from '../../Button';\nimport { centerElement } from '../../utils/helpers/resize';\nimport { argTypes, getDefaultArgs } from '../utils/argTypes';\nimport { action } from '@storybook/addon-actions';\n\nconst args = {\n    color: '#A5E24D',\n    size: 150,\n    radius: 150,\n    disabled: false,\n    action: action('Button'),\n};\n\nexport const ButtonContainerSprite: StoryFn<typeof args> = (\n    { size, color, disabled, radius, action },\n    context,\n) =>\n    new PixiStory<typeof args>({\n        context,\n        init(view) {\n            // Component usage !!!\n            const button = new ButtonContainer();\n\n            button.enabled = !disabled;\n\n            button.onPress.connect(() => action('onPress'));\n            button.onDown.connect(() => action('onDown'));\n            button.onUp.connect(() => action('onUp'));\n            button.onHover.connect(() => action('onHover'));\n            button.onOut.connect(() => action('onOut'));\n            button.onUpOut.connect(() => action('onUpOut'));\n\n            const buttonView = new Container();\n            const buttonBg = new Graphics().roundRect(0, 0, size, size, radius).fill(color);\n            const text = new Text({ text: '🤙', style: { fontSize: 70 } });\n\n            text.anchor.set(0.5);\n            text.x = buttonBg.width / 2;\n            text.y = buttonBg.height / 2;\n\n            buttonView.addChild(buttonBg, text);\n\n            button.addChild(buttonView);\n            view.addChild(button);\n\n            centerElement(button);\n        },\n        resize: (view) => centerElement(view.children[0]),\n    });\n\nexport default {\n    title: 'Components/Button/Button Container Sprite',\n    argTypes: argTypes(args),\n    args: getDefaultArgs(args),\n};\n",locationsMap:{"button-container-sprite":{startLoc:{col:59,line:16},endLoc:{col:6,line:51},startBody:{col:59,line:16},endBody:{col:6,line:51}}}}},title:"Components/Button/Button Container Sprite",argTypes:(0,_utils_argTypes__WEBPACK_IMPORTED_MODULE_5__.U)(args),args:(0,_utils_argTypes__WEBPACK_IMPORTED_MODULE_5__.p)(args)},__namedExportsOrder=["ButtonContainerSprite"]},"./src/Button.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{$:()=>Button,E:()=>ButtonContainer});var lib=__webpack_require__("./node_modules/pixi.js/lib/index.mjs"),dist=__webpack_require__("./node_modules/typed-signals/dist/index.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _defineProperties(e,r){for(var t=0;t<r.length;t++){var o=r[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,_toPropertyKey(o.key),o)}}function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:i+""}function Button_typeof(o){return Button_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},Button_typeof(o)}function Button_classCallCheck(a,n){if(!(a instanceof n))throw new TypeError("Cannot call a class as a function")}function Button_defineProperties(e,r){for(var t=0;t<r.length;t++){var o=r[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,Button_toPropertyKey(o.key),o)}}function Button_createClass(e,r,t){return r&&Button_defineProperties(e.prototype,r),t&&Button_defineProperties(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function Button_toPropertyKey(t){var i=function Button_toPrimitive(t,r){if("object"!=Button_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=Button_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==Button_typeof(i)?i:i+""}function _callSuper(t,o,e){return o=_getPrototypeOf(o),function _possibleConstructorReturn(t,e){if(e&&("object"==Button_typeof(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(t)}(t,_isNativeReflectConstruct()?Reflect.construct(o,e||[],_getPrototypeOf(t).constructor):o.apply(t,e))}function _isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t})()}function _getPrototypeOf(t){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},_getPrototypeOf(t)}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&_setPrototypeOf(t,e)}function _setPrototypeOf(t,e){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},_setPrototypeOf(t,e)}var Button=function(_ButtonEvents){function Button(view){var _this;return Button_classCallCheck(this,Button),_this=_callSuper(this,Button),view&&(_this.view=view,_this.enabled=!0),_this}return _inherits(Button,_ButtonEvents),Button_createClass(Button,[{key:"view",get:function get(){return this._view},set:function set(view){!!this._view&&this.disconnectEvents(this._view),this._view=view,this.connectEvents(this._view)}},{key:"enabled",get:function get(){return"static"===this.view.eventMode},set:function set(enabled){this.view?(this.view.eventMode=enabled?"static":"auto",this.view.cursor=enabled?"pointer":"default",!enabled&&this.isDown&&this.processUp()):console.error("Button view is not set. Please set it before enabling the button.")}}])}(function(){return function _createClass(e,r,t){return r&&_defineProperties(e.prototype,r),t&&_defineProperties(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}((function ButtonEvents(){!function _classCallCheck(a,n){if(!(a instanceof n))throw new TypeError("Cannot call a class as a function")}(this,ButtonEvents),this.onPress=new dist.HN,this.onDown=new dist.HN,this.onUp=new dist.HN,this.onHover=new dist.HN,this.onOut=new dist.HN,this.onUpOut=new dist.HN}),[{key:"connectEvents",value:function connectEvents(view){lib.FrL.any?(view.on("pointerdown",this.processDown,this),view.on("pointerup",this.processUp,this),view.on("pointerupoutside",this.processUpOut,this),view.on("pointerout",this.processOut,this),view.on("pointertap",this.processPress,this),view.on("pointerover",this.processOver,this)):(view.on("mousedown",this.processDown,this),view.on("mouseup",this.processUp,this),view.on("mouseupoutside",this.processUpOut,this),view.on("mouseout",this.processOut,this),view.on("click",this.processPress,this),view.on("mouseover",this.processOver,this))}},{key:"disconnectEvents",value:function disconnectEvents(view){lib.FrL.any?(view.off("pointerdown",this.processDown,this),view.off("pointerup",this.processUp,this),view.off("pointerupoutside",this.processUpOut,this),view.off("pointerout",this.processOut,this),view.off("pointertap",this.processPress,this),view.off("pointerover",this.processOver,this)):(view.off("mousedown",this.processDown,this),view.off("mouseup",this.processUp,this),view.off("mouseupoutside",this.processUpOut,this),view.off("mouseout",this.processOut,this),view.off("click",this.processPress,this),view.off("mouseover",this.processOver,this))}},{key:"processDown",value:function processDown(e){this._isDown=!0,this.onDown.emit(this,e),this.down(e)}},{key:"processUp",value:function processUp(e){this._isDown&&(this.onUp.emit(this,e),this.up(e)),this._isDown=!1}},{key:"processUpOut",value:function processUpOut(e){this._isDown&&(this.onUp.emit(this,e),this.onUpOut.emit(this,e),this.up(e),this.upOut(e)),this._isDown=!1}},{key:"processOut",value:function processOut(e){this._isMouseIn&&(this._isMouseIn=!1,this.onOut.emit(this,e),this.out(e))}},{key:"processPress",value:function processPress(e){this._isDown=!1,this.onPress.emit(this,e),this.press(e)}},{key:"processOver",value:function processOver(e){lib.FrL.any||(this._isMouseIn=!0,this.onHover.emit(this,e),this.hover(e))}},{key:"down",value:function down(_e){}},{key:"up",value:function up(_e){}},{key:"upOut",value:function upOut(_e){}},{key:"out",value:function out(_e){}},{key:"press",value:function press(_e){}},{key:"hover",value:function hover(_e){}},{key:"isDown",get:function get(){return this._isDown}}])}()),ButtonContainer=function(_Container){function ButtonContainer(view){var _this2;return Button_classCallCheck(this,ButtonContainer),(_this2=_callSuper(this,ButtonContainer)).button=new Button(_this2),_this2.button.enabled=!0,view&&_this2.addChild(view),_this2.onPress=_this2.button.onPress,_this2.onDown=_this2.button.onDown,_this2.onUp=_this2.button.onUp,_this2.onHover=_this2.button.onHover,_this2.onOut=_this2.button.onOut,_this2.onUpOut=_this2.button.onUpOut,_this2}return _inherits(ButtonContainer,_Container),Button_createClass(ButtonContainer,[{key:"enabled",get:function get(){return this.button.enabled},set:function set(enabled){this.button.enabled=enabled}}])}(lib.mcf)},"./src/stories/utils/argTypes.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}__webpack_require__.d(__webpack_exports__,{U:()=>argTypes,p:()=>getDefaultArgs});var controls={select:{control:{type:"select"}},check:{control:{type:"check"}},color:{control:{type:"color"}},amount:{control:{type:"range"}},type:{control:{type:"radio"}},date:{control:{type:"date"}},switch:{control:{type:"boolean"}}},argTypes=function argTypes(args){var exportArgTypes={};for(var key in args)if("number"==typeof args[key]){var min=0,arg=args[key];key.includes("font")&&(min=1),exportArgTypes[key]=arg>=0?arg>=100?{control:{type:"range",min,max:1e3,step:10}}:arg>10?{control:{type:"range",min,max:100,step:1}}:0!==arg&&arg<1?{control:{type:"range",min:0,max:1,step:.1}}:{control:{type:"range",min,max:10,step:1}}:arg<=-100?{control:{type:"range",min:-1e3,max:1e3,step:10}}:arg<-10?{control:{type:"range",min:-100,max:100,step:10}}:0!==arg&&arg>-1?{control:{type:"range",min:-1,max:0,step:.1}}:{control:{type:"range",min:-10,max:10,step:1}}}else switch(getArgType(key)&&(exportArgTypes[key]=getArgType(key)),_typeof(args[key])){case"object":exportArgTypes[key]=controls.select,Array.isArray(args[key])?exportArgTypes[key].options=args[key]:exportArgTypes[key].options=Object.keys(args).map((function(key){return args[key]}));break;case"boolean":exportArgTypes[key]=controls.switch}return exportArgTypes};function getArgType(type){for(var control in controls)if(type.toLowerCase().indexOf(control)>-1)return controls[control]}var getDefaultArgs=function getDefaultArgs(args){var exportArgs={};for(var key in args)if("object"===_typeof(args[key]))Array.isArray(args[key])&&(exportArgs[key]=args[key][0]);else exportArgs[key]=args[key];return exportArgs}},"./src/utils/helpers/resize.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function centerElement(view,horPos,verPos){var canvas=document.getElementById("storybook-root");view.width>0?view.x=0===horPos?0:horPos?canvas.offsetWidth*horPos-view.width/2:canvas.offsetWidth/2-view.width/2:view.x=canvas.offsetWidth/2,view.height>0?view.y=0===verPos?0:verPos?canvas.offsetHeight*verPos-view.height/2:canvas.offsetHeight/2-view.height/2:view.y=canvas.offsetHeight/2}function centerView(view){var canvas=document.getElementById("storybook-root");view.x=canvas.offsetWidth/2,view.y=canvas.offsetHeight/2}__webpack_require__.d(__webpack_exports__,{E:()=>centerElement,l:()=>centerView})},"./node_modules/global/window.js":(module,__unused_webpack_exports,__webpack_require__)=>{var win;win="undefined"!=typeof window?window:void 0!==__webpack_require__.g?__webpack_require__.g:"undefined"!=typeof self?self:{},module.exports=win},"./node_modules/typed-signals/dist/Collector.js":(__unused_webpack_module,exports)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Collector=void 0;exports.Collector=class Collector{constructor(signal){this.emit=(...args)=>{signal.emitCollecting(this,args)}}}},"./node_modules/typed-signals/dist/CollectorArray.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.CollectorArray=void 0;const Collector_1=__webpack_require__("./node_modules/typed-signals/dist/Collector.js");class CollectorArray extends Collector_1.Collector{constructor(){super(...arguments),this.result=[]}handleResult(result){return this.result.push(result),!0}getResult(){return this.result}reset(){this.result.length=0}}exports.CollectorArray=CollectorArray},"./node_modules/typed-signals/dist/CollectorLast.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.CollectorLast=void 0;const Collector_1=__webpack_require__("./node_modules/typed-signals/dist/Collector.js");class CollectorLast extends Collector_1.Collector{handleResult(result){return this.result=result,!0}getResult(){return this.result}reset(){delete this.result}}exports.CollectorLast=CollectorLast},"./node_modules/typed-signals/dist/CollectorUntil0.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.CollectorUntil0=void 0;const Collector_1=__webpack_require__("./node_modules/typed-signals/dist/Collector.js");class CollectorUntil0 extends Collector_1.Collector{constructor(){super(...arguments),this.result=!1}handleResult(result){return this.result=result,this.result}getResult(){return this.result}reset(){this.result=!1}}exports.CollectorUntil0=CollectorUntil0},"./node_modules/typed-signals/dist/CollectorWhile0.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.CollectorWhile0=void 0;const Collector_1=__webpack_require__("./node_modules/typed-signals/dist/Collector.js");class CollectorWhile0 extends Collector_1.Collector{constructor(){super(...arguments),this.result=!1}handleResult(result){return this.result=result,!this.result}getResult(){return this.result}reset(){this.result=!1}}exports.CollectorWhile0=CollectorWhile0},"./node_modules/typed-signals/dist/Signal.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Signal=void 0;const SignalConnection_1=__webpack_require__("./node_modules/typed-signals/dist/SignalConnection.js"),SignalLink_1=__webpack_require__("./node_modules/typed-signals/dist/SignalLink.js");exports.Signal=class Signal{constructor(){this.head=new SignalLink_1.SignalLink,this.hasNewLinks=!1,this.emitDepth=0,this.connectionsCount=0}getConnectionsCount(){return this.connectionsCount}hasConnections(){return this.connectionsCount>0}connect(callback,order=0){this.connectionsCount++;const link=this.head.insert(callback,order);return this.emitDepth>0&&(this.hasNewLinks=!0,link.newLink=!0),new SignalConnection_1.SignalConnectionImpl(link,(()=>this.decrementConnectionCount()))}decrementConnectionCount(){this.connectionsCount--}disconnect(callback){for(let link=this.head.next;link!==this.head;link=link.next)if(link.callback===callback)return this.decrementConnectionCount(),link.unlink(),!0;return!1}disconnectAll(){for(;this.head.next!==this.head;)this.head.next.unlink();this.connectionsCount=0}emit(...args){this.emitDepth++;for(let link=this.head.next;link!==this.head;link=link.next)link.isEnabled()&&link.callback&&link.callback.apply(null,args);this.emitDepth--,this.unsetNewLink()}emitCollecting(collector,args){this.emitDepth++;for(let link=this.head.next;link!==this.head;link=link.next)if(link.isEnabled()&&link.callback){const result=link.callback.apply(null,args);if(!collector.handleResult(result))break}this.emitDepth--,this.unsetNewLink()}unsetNewLink(){if(this.hasNewLinks&&0===this.emitDepth){for(let link=this.head.next;link!==this.head;link=link.next)link.newLink=!1;this.hasNewLinks=!1}}}},"./node_modules/typed-signals/dist/SignalConnection.js":(__unused_webpack_module,exports)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.SignalConnectionImpl=void 0;exports.SignalConnectionImpl=class SignalConnectionImpl{constructor(link,parentCleanup){this.link=link,this.parentCleanup=parentCleanup}disconnect(){return null!==this.link&&(this.link.unlink(),this.link=null,this.parentCleanup(),this.parentCleanup=null,!0)}set enabled(enable){this.link&&this.link.setEnabled(enable)}get enabled(){return null!==this.link&&this.link.isEnabled()}}},"./node_modules/typed-signals/dist/SignalConnections.js":(__unused_webpack_module,exports)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.SignalConnections=void 0;exports.SignalConnections=class SignalConnections{constructor(){this.list=[]}add(connection){this.list.push(connection)}disconnectAll(){for(const connection of this.list)connection.disconnect();this.list=[]}getCount(){return this.list.length}isEmpty(){return 0===this.list.length}}},"./node_modules/typed-signals/dist/SignalLink.js":(__unused_webpack_module,exports)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.SignalLink=void 0;class SignalLink{constructor(prev=null,next=null,order=0){this.enabled=!0,this.newLink=!1,this.callback=null,this.prev=null!=prev?prev:this,this.next=null!=next?next:this,this.order=order}isEnabled(){return this.enabled&&!this.newLink}setEnabled(flag){this.enabled=flag}unlink(){this.callback=null,this.next.prev=this.prev,this.prev.next=this.next}insert(callback,order){let after=this.prev;for(;after!==this&&!(after.order<=order);)after=after.prev;const link=new SignalLink(after,after.next,order);return link.callback=callback,after.next=link,link.next.prev=link,link}}exports.SignalLink=SignalLink},"./node_modules/typed-signals/dist/index.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";exports.HN=void 0;var Collector_1=__webpack_require__("./node_modules/typed-signals/dist/Collector.js");var CollectorArray_1=__webpack_require__("./node_modules/typed-signals/dist/CollectorArray.js");var CollectorLast_1=__webpack_require__("./node_modules/typed-signals/dist/CollectorLast.js");var CollectorUntil0_1=__webpack_require__("./node_modules/typed-signals/dist/CollectorUntil0.js");var CollectorWhile0_1=__webpack_require__("./node_modules/typed-signals/dist/CollectorWhile0.js");var Signal_1=__webpack_require__("./node_modules/typed-signals/dist/Signal.js");Object.defineProperty(exports,"HN",{enumerable:!0,get:function(){return Signal_1.Signal}});var SignalConnections_1=__webpack_require__("./node_modules/typed-signals/dist/SignalConnections.js")}}]);