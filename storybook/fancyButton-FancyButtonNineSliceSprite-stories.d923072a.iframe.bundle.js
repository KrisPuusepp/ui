/*! For license information please see fancyButton-FancyButtonNineSliceSprite-stories.d923072a.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_pixi_ui=self.webpackChunk_pixi_ui||[]).push([[6511],{"./node_modules/@pixi/storybook-renderer/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{M4:()=>PixiStory});var _chunk_N3U6A7KW_mjs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@pixi/storybook-renderer/dist/chunk-N3U6A7KW.mjs"),global__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/global/window.js"),global__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(global__WEBPACK_IMPORTED_MODULE_1__),_storybook_core_client__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("@storybook/core-client"),pixi_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/pixi.js/lib/index.mjs"),{window:globalWindow}=global__WEBPACK_IMPORTED_MODULE_1___default();globalWindow.STORYBOOK_ENV="PIXI";var api=(0,_storybook_core_client__WEBPACK_IMPORTED_MODULE_2__.start)(_chunk_N3U6A7KW_mjs__WEBPACK_IMPORTED_MODULE_0__.u),PixiStory=(api.forceReRender,api.clientApi.raw,class{constructor(options){this.view=new pixi_js__WEBPACK_IMPORTED_MODULE_3__.mcf,options.context.parameters.pixi.appReady.then((()=>{options.init(this.view)})),void 0!==options.update&&(this.update=ticker=>{options.update(this.view,ticker)}),void 0!==options.resize&&(this.resize=(width,height)=>{options.resize(this.view,width,height)}),void 0!==options.destroy&&(this.destroy=()=>{options.destroy(this.view)})}})},"./node_modules/@storybook/addon-actions/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{XI:()=>action});var v4=__webpack_require__("./node_modules/@storybook/addon-actions/node_modules/uuid/dist/esm-browser/v4.js"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global"),preview_errors=__webpack_require__("./node_modules/@storybook/core-events/dist/errors/preview-errors.mjs"),ADDON_ID="storybook/actions",EVENT_ID=`${ADDON_ID}/action-event`,config={depth:10,clearOnStoryChange:!0,limit:50},findProto=(obj,callback)=>{let proto=Object.getPrototypeOf(obj);return!proto||callback(proto)?proto:findProto(proto,callback)},serializeArg=a=>{if("object"==typeof(e=a)&&e&&findProto(e,(proto=>/^Synthetic(?:Base)?Event$/.test(proto.constructor.name)))&&"function"==typeof e.persist){let e=Object.create(a.constructor.prototype,Object.getOwnPropertyDescriptors(a));e.persist();let viewDescriptor=Object.getOwnPropertyDescriptor(e,"view"),view=viewDescriptor?.value;return"object"==typeof view&&"Window"===view?.constructor.name&&Object.defineProperty(e,"view",{...viewDescriptor,value:Object.create(view.constructor.prototype)}),e}var e;return a},generateId=()=>"object"==typeof crypto&&"function"==typeof crypto.getRandomValues?(0,v4.A)():Date.now().toString(36)+Math.random().toString(36).substring(2);function action(name,options={}){let actionOptions={...config,...options},handler=function(...args){if(options.implicit){let storyRenderer=("__STORYBOOK_PREVIEW__"in external_STORYBOOK_MODULE_GLOBAL_.global?external_STORYBOOK_MODULE_GLOBAL_.global.__STORYBOOK_PREVIEW__:void 0)?.storyRenders.find((render=>"playing"===render.phase||"rendering"===render.phase));if(storyRenderer){let deprecated=!window?.FEATURES?.disallowImplicitActionsInRenderV8,error=new preview_errors._U({phase:storyRenderer.phase,name,deprecated});if(!deprecated)throw error;console.warn(error)}}let channel=external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel(),id=generateId(),serializedArgs=args.map(serializeArg),normalizedArgs=args.length>1?serializedArgs:serializedArgs[0],actionDisplayToEmit={id,count:0,data:{name,args:normalizedArgs},options:{...actionOptions,maxDepth:5+(actionOptions.depth||3),allowFunction:actionOptions.allowFunction||!1}};channel.emit(EVENT_ID,actionDisplayToEmit)};return handler.isAction=!0,handler}},"./src/stories/fancyButton/FancyButtonNineSliceSprite.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{UseNineSliceSprite:()=>UseNineSliceSprite,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var pixi_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/pixi.js/lib/index.mjs"),_pixi_storybook_renderer__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@pixi/storybook-renderer/dist/index.mjs"),_FancyButton__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/FancyButton.ts"),_MaskedFrame__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/MaskedFrame.ts"),_utils_helpers_resize__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/utils/helpers/resize.ts"),_utils_helpers_styles__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/utils/helpers/styles.ts"),_utils_argTypes__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./src/stories/utils/argTypes.ts"),_utils_loader__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/stories/utils/loader.ts");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(e,r,t){return(r=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:i+""}(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var args={text:"Click me!",textColor:"#FFFFFF",padding:11,width:300,height:137,defaultTextScale:.99,defaultIconScale:.2,defaultTextAnchorX:.5,defaultTextAnchorY:.5,defaultIconAnchorX:.5,defaultIconAnchorY:.5,anchorX:.5,anchorY:.5,animationDuration:100,disabled:!1,contentFittingMode:["default","fill","none"],onPress:(0,__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs").XI)("button was pressed! (tap or click!)")},UseNineSliceSprite=function UseNineSliceSprite(_ref,context){var text=_ref.text,textColor=_ref.textColor,disabled=_ref.disabled,onPress=_ref.onPress,padding=_ref.padding,anchorX=_ref.anchorX,anchorY=_ref.anchorY,animationDuration=_ref.animationDuration,width=_ref.width,height=_ref.height,defaultTextScale=_ref.defaultTextScale,defaultIconScale=_ref.defaultIconScale,defaultTextAnchorX=_ref.defaultTextAnchorX,defaultTextAnchorY=_ref.defaultTextAnchorY,defaultIconAnchorX=_ref.defaultIconAnchorX,defaultIconAnchorY=_ref.defaultIconAnchorY,contentFittingMode=_ref.contentFittingMode;return new _pixi_storybook_renderer__WEBPACK_IMPORTED_MODULE_1__.M4({context,init:function init(view){(0,_utils_loader__WEBPACK_IMPORTED_MODULE_3__.u)(["button.png","button_hover.png","button_pressed.png","button_disabled.png","avatar-01.png","avatar_mask.png"]).then((function(){var button=new _FancyButton__WEBPACK_IMPORTED_MODULE_4__.w({defaultView:"button.png",hoverView:"button_hover.png",pressedView:"button_pressed.png",disabledView:"button_disabled.png",nineSliceSprite:[150,66,150,66],text:new pixi_js__WEBPACK_IMPORTED_MODULE_0__.EYj({text,style:_objectSpread(_objectSpread({},_utils_helpers_styles__WEBPACK_IMPORTED_MODULE_5__.a),{},{fill:textColor||_utils_helpers_styles__WEBPACK_IMPORTED_MODULE_5__.a.fill})}),padding,textOffset:{x:30,y:-5},iconOffset:{x:-100,y:-7},defaultTextScale,defaultIconScale,defaultTextAnchor:{x:defaultTextAnchorX,y:defaultTextAnchorY},defaultIconAnchor:{x:defaultIconAnchorX,y:defaultIconAnchorY},animations:{hover:{props:{scale:{x:1.03,y:1.03},y:0},duration:animationDuration},pressed:{props:{scale:{x:.9,y:.9},y:10},duration:animationDuration}},contentFittingMode});button.iconView=new _MaskedFrame__WEBPACK_IMPORTED_MODULE_6__.j({target:"avatar-01.png",mask:"avatar_mask.png",borderWidth:10,borderColor:16777215}),button.anchor.set(anchorX,anchorY),disabled&&(button.enabled=!1);var sizes=[{w:width,h:height},{w:300,h:300},{w:600,h:137},{w:600,h:300}];button.width=sizes[0].w,button.height=sizes[0].h;var currentSizeID=0;button.onPress.connect((function(){++currentSizeID>=sizes.length&&(currentSizeID=0);var size=sizes[currentSizeID];button.width=size.w,button.height=size.h})),button.onPress.connect(onPress),(0,_utils_helpers_resize__WEBPACK_IMPORTED_MODULE_7__.l)(view),view.addChild(button)}))},resize:_utils_helpers_resize__WEBPACK_IMPORTED_MODULE_7__.l})};const __WEBPACK_DEFAULT_EXPORT__={parameters:{storySource:{source:"import { Text } from 'pixi.js';\nimport { PixiStory, StoryFn } from '@pixi/storybook-renderer';\nimport { FancyButton } from '../../FancyButton';\nimport { MaskedFrame } from '../../MaskedFrame';\nimport { centerView } from '../../utils/helpers/resize';\nimport { defaultTextStyle } from '../../utils/helpers/styles';\nimport { argTypes, getDefaultArgs } from '../utils/argTypes';\nimport { preload } from '../utils/loader';\nimport { action } from '@storybook/addon-actions';\n\nconst args = {\n    text: 'Click me!',\n    textColor: '#FFFFFF',\n    padding: 11,\n    width: 300,\n    height: 137,\n    defaultTextScale: 0.99,\n    defaultIconScale: 0.2,\n    defaultTextAnchorX: 0.5,\n    defaultTextAnchorY: 0.5,\n    defaultIconAnchorX: 0.5,\n    defaultIconAnchorY: 0.5,\n    anchorX: 0.5,\n    anchorY: 0.5,\n    animationDuration: 100,\n    disabled: false,\n    contentFittingMode: ['default', 'fill', 'none'],\n    onPress: action('button was pressed! (tap or click!)'),\n};\n\nexport const UseNineSliceSprite: StoryFn<\n    typeof args & { contentFittingMode: 'default' | 'fill' | 'none' }\n> = (\n    {\n        text,\n        textColor,\n        disabled,\n        onPress,\n        padding,\n        anchorX,\n        anchorY,\n        animationDuration,\n        width,\n        height,\n        defaultTextScale,\n        defaultIconScale,\n        defaultTextAnchorX,\n        defaultTextAnchorY,\n        defaultIconAnchorX,\n        defaultIconAnchorY,\n        contentFittingMode,\n    },\n    context,\n) =>\n    new PixiStory<typeof args>({\n        context,\n        init: (view) => {\n            const assets = [\n                `button.png`,\n                `button_hover.png`,\n                `button_pressed.png`,\n                `button_disabled.png`,\n                `avatar-01.png`,\n                `avatar_mask.png`,\n            ];\n\n            preload(assets).then(() => {\n                // Component usage !!!\n                const button = new FancyButton({\n                    defaultView: `button.png`,\n                    hoverView: `button_hover.png`,\n                    pressedView: `button_pressed.png`,\n                    disabledView: `button_disabled.png`,\n                    nineSliceSprite: [150, 66, 150, 66],\n                    text: new Text({\n                        text,\n                        style: {\n                            ...defaultTextStyle,\n                            fill: textColor || defaultTextStyle.fill,\n                        },\n                    }),\n                    padding,\n                    textOffset: { x: 30, y: -5 },\n                    iconOffset: { x: -100, y: -7 },\n                    defaultTextScale,\n                    defaultIconScale,\n                    defaultTextAnchor: {\n                        x: defaultTextAnchorX,\n                        y: defaultTextAnchorY,\n                    },\n                    defaultIconAnchor: {\n                        x: defaultIconAnchorX,\n                        y: defaultIconAnchorY,\n                    },\n                    animations: {\n                        hover: {\n                            props: {\n                                scale: { x: 1.03, y: 1.03 },\n                                y: 0,\n                            },\n                            duration: animationDuration,\n                        },\n                        pressed: {\n                            props: {\n                                scale: { x: 0.9, y: 0.9 },\n                                y: 10,\n                            },\n                            duration: animationDuration,\n                        },\n                    },\n                    contentFittingMode,\n                });\n\n                button.iconView = new MaskedFrame({\n                    target: `avatar-01.png`,\n                    mask: `avatar_mask.png`,\n                    borderWidth: 10,\n                    borderColor: 0xffffff,\n                });\n\n                button.anchor.set(anchorX, anchorY);\n\n                if (disabled) {\n                    button.enabled = false;\n                }\n\n                const sizes: { w: number; h: number }[] = [\n                    { w: width, h: height },\n                    { w: 300, h: 300 },\n                    { w: 600, h: 137 },\n                    { w: 600, h: 300 },\n                ];\n\n                button.width = sizes[0].w;\n                button.height = sizes[0].h;\n\n                let currentSizeID = 0;\n\n                button.onPress.connect(() => {\n                    currentSizeID++;\n\n                    if (currentSizeID >= sizes.length) {\n                        currentSizeID = 0;\n                    }\n\n                    const size = sizes[currentSizeID];\n\n                    button.width = size.w;\n                    button.height = size.h;\n                });\n\n                button.onPress.connect(onPress);\n\n                centerView(view);\n\n                view.addChild(button);\n            });\n        },\n        resize: centerView,\n    });\n\nexport default {\n    title: 'Components/FancyButton/Use NineSliceSprite',\n    argTypes: argTypes(args),\n    args: getDefaultArgs(args),\n};\n",locationsMap:{"use-nine-slice-sprite":{startLoc:{col:4,line:33},endLoc:{col:6,line:160},startBody:{col:4,line:33},endBody:{col:6,line:160}}}}},title:"Components/FancyButton/Use NineSliceSprite",argTypes:(0,_utils_argTypes__WEBPACK_IMPORTED_MODULE_8__.U)(args),args:(0,_utils_argTypes__WEBPACK_IMPORTED_MODULE_8__.p)(args)},__namedExportsOrder=["UseNineSliceSprite"]},"./src/MaskedFrame.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{j:()=>MaskedFrame});var pixi_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/pixi.js/lib/index.mjs"),_utils_helpers_view__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/utils/helpers/view.ts");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _defineProperties(e,r){for(var t=0;t<r.length;t++){var o=r[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,_toPropertyKey(o.key),o)}}function _callSuper(t,o,e){return o=_getPrototypeOf(o),function _possibleConstructorReturn(t,e){if(e&&("object"==_typeof(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(t)}(t,_isNativeReflectConstruct()?Reflect.construct(o,e||[],_getPrototypeOf(t).constructor):o.apply(t,e))}function _isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t})()}function _getPrototypeOf(t){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},_getPrototypeOf(t)}function _setPrototypeOf(t,e){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},_setPrototypeOf(t,e)}function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:i+""}var MaskedFrame=function(_Container){function MaskedFrame(options){var _this;return function _classCallCheck(a,n){if(!(a instanceof n))throw new TypeError("Cannot call a class as a function")}(this,MaskedFrame),function _defineProperty(e,r,t){return(r=_toPropertyKey(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}(_this=_callSuper(this,MaskedFrame),"border",new pixi_js__WEBPACK_IMPORTED_MODULE_0__.A1g),null!=options&&options.target&&_this.init(options),_this}return function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&_setPrototypeOf(t,e)}(MaskedFrame,_Container),function _createClass(e,r,t){return r&&_defineProperties(e.prototype,r),t&&_defineProperties(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}(MaskedFrame,[{key:"init",value:function init(_ref){var target=_ref.target,mask=_ref.mask,borderWidth=_ref.borderWidth,borderColor=_ref.borderColor;this.target&&this.removeChild(this.target),this.target=(0,_utils_helpers_view__WEBPACK_IMPORTED_MODULE_1__.K)(target),this.addChild(this.border,this.target),mask&&this.setMask(mask),borderWidth&&this.setBorder(borderWidth,borderColor)}},{key:"setMask",value:function setMask(mask){this.maskData=mask,this._targetMask=(0,_utils_helpers_view__WEBPACK_IMPORTED_MODULE_1__.K)(mask),this.addChild(this._targetMask),this.target.mask=this._targetMask}},{key:"setBorder",value:function setBorder(borderWidth,borderColor){if(this.borderWidth=borderWidth,this.borderColor=borderColor,this.showBorder(),this.maskData){var borderMask="string"==typeof this.maskData?pixi_js__WEBPACK_IMPORTED_MODULE_0__.kxk.from(this.maskData):this.maskData.clone(!0);borderMask.width+=2*borderWidth,borderMask.height+=2*borderWidth,this.mask=borderMask,this.addChild(borderMask),this._targetMask.position.set(borderWidth)}}},{key:"showBorder",value:function showBorder(){var width=2*this.borderWidth;this.border.clear().rect(0,0,this.target.width+width,this.target.height+width).fill(this.borderColor),this.target.x=this.borderWidth,this.target.y=this.borderWidth}},{key:"hideBorder",value:function hideBorder(){this.border.clear()}}])}(pixi_js__WEBPACK_IMPORTED_MODULE_0__.mcf)},"./src/stories/utils/loader.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{u:()=>preload});var pixi_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/pixi.js/lib/index.mjs");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _regeneratorRuntime(){_regeneratorRuntime=function _regeneratorRuntime(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function define(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{define({},"")}catch(t){define=function define(t,e,r){return t[e]=r}}function wrap(t,e,r,n){var i=e&&e.prototype instanceof Generator?e:Generator,a=Object.create(i.prototype),c=new Context(n||[]);return o(a,"_invoke",{value:makeInvokeMethod(t,r,c)}),a}function tryCatch(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=wrap;var h="suspendedStart",l="suspendedYield",f="executing",s="completed",y={};function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}var p={};define(p,a,(function(){return this}));var d=Object.getPrototypeOf,v=d&&d(d(values([])));v&&v!==r&&n.call(v,a)&&(p=v);var g=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(p);function defineIteratorMethods(t){["next","throw","return"].forEach((function(e){define(t,e,(function(t){return this._invoke(e,t)}))}))}function AsyncIterator(t,e){function invoke(r,o,i,a){var c=tryCatch(t[r],t,o);if("throw"!==c.type){var u=c.arg,h=u.value;return h&&"object"==_typeof(h)&&n.call(h,"__await")?e.resolve(h.__await).then((function(t){invoke("next",t,i,a)}),(function(t){invoke("throw",t,i,a)})):e.resolve(h).then((function(t){u.value=t,i(u)}),(function(t){return invoke("throw",t,i,a)}))}a(c.arg)}var r;o(this,"_invoke",{value:function value(t,n){function callInvokeWithMethodAndArg(){return new e((function(e,r){invoke(t,n,e,r)}))}return r=r?r.then(callInvokeWithMethodAndArg,callInvokeWithMethodAndArg):callInvokeWithMethodAndArg()}})}function makeInvokeMethod(e,r,n){var o=h;return function(i,a){if(o===f)throw Error("Generator is already running");if(o===s){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=maybeInvokeDelegate(c,n);if(u){if(u===y)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===h)throw o=s,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=f;var p=tryCatch(e,r,n);if("normal"===p.type){if(o=n.done?s:l,p.arg===y)continue;return{value:p.arg,done:n.done}}"throw"===p.type&&(o=s,n.method="throw",n.arg=p.arg)}}}function maybeInvokeDelegate(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,maybeInvokeDelegate(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),y;var i=tryCatch(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,y;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,y):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function pushTryEntry(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function resetTryEntry(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function Context(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(pushTryEntry,this),this.reset(!0)}function values(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function next(){for(;++o<e.length;)if(n.call(e,o))return next.value=e[o],next.done=!1,next;return next.value=t,next.done=!0,next};return i.next=i}}throw new TypeError(_typeof(e)+" is not iterable")}return GeneratorFunction.prototype=GeneratorFunctionPrototype,o(g,"constructor",{value:GeneratorFunctionPrototype,configurable:!0}),o(GeneratorFunctionPrototype,"constructor",{value:GeneratorFunction,configurable:!0}),GeneratorFunction.displayName=define(GeneratorFunctionPrototype,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===GeneratorFunction||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,GeneratorFunctionPrototype):(t.__proto__=GeneratorFunctionPrototype,define(t,u,"GeneratorFunction")),t.prototype=Object.create(g),t},e.awrap=function(t){return{__await:t}},defineIteratorMethods(AsyncIterator.prototype),define(AsyncIterator.prototype,c,(function(){return this})),e.AsyncIterator=AsyncIterator,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new AsyncIterator(wrap(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},defineIteratorMethods(g),define(g,u,"Generator"),define(g,a,(function(){return this})),define(g,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function next(){for(;r.length;){var t=r.pop();if(t in e)return next.value=t,next.done=!1,next}return next.done=!0,next}},e.values=values,Context.prototype={constructor:Context,reset:function reset(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(resetTryEntry),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function stop(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function dispatchException(e){if(this.done)throw e;var r=this;function handle(n,o){return a.type="throw",a.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return handle("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return handle(i.catchLoc,!0);if(this.prev<i.finallyLoc)return handle(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return handle(i.catchLoc,!0)}else{if(!u)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return handle(i.finallyLoc)}}}},abrupt:function abrupt(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function complete(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function finish(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),resetTryEntry(r),y}},catch:function _catch(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;resetTryEntry(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function delegateYield(e,r,n){return this.delegate={iterator:values(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),y}},e}function asyncGeneratorStep(n,t,e,r,o,a,c){try{var i=n[a](c),u=i.value}catch(n){return void e(n)}i.done?t(u):Promise.resolve(u).then(r,o)}function preload(_x){return _preload.apply(this,arguments)}function _preload(){return _preload=function _asyncToGenerator(n){return function(){var t=this,e=arguments;return new Promise((function(r,o){var a=n.apply(t,e);function _next(n){asyncGeneratorStep(a,r,o,_next,_throw,"next",n)}function _throw(n){asyncGeneratorStep(a,r,o,_next,_throw,"throw",n)}_next(void 0)}))}}(_regeneratorRuntime().mark((function _callee(assets){return _regeneratorRuntime().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return _context.next=2,pixi_js__WEBPACK_IMPORTED_MODULE_0__.sP.load(assets);case 2:case"end":return _context.stop()}}),_callee)}))),_preload.apply(this,arguments)}},"./src/utils/helpers/styles.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{a:()=>defaultTextStyle});var defaultTextStyle={fill:16777215,fontSize:42,fontWeight:"bold",dropShadow:{color:0,alpha:.5,distance:0,blur:3,angle:0}}},"./node_modules/global/window.js":(module,__unused_webpack_exports,__webpack_require__)=>{var win;win="undefined"!=typeof window?window:void 0!==__webpack_require__.g?__webpack_require__.g:"undefined"!=typeof self?self:{},module.exports=win}}]);