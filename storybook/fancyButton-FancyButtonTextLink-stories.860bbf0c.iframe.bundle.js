(self.webpackChunk_pixi_ui=self.webpackChunk_pixi_ui||[]).push([[6971],{"./node_modules/@pixi/storybook-renderer/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{M:()=>PixiStory});var global__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/global/window.js"),global__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(global__WEBPACK_IMPORTED_MODULE_0__),pixi_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/pixi.js/lib/index.mjs"),{window:globalWindow}=global__WEBPACK_IMPORTED_MODULE_0___default();globalWindow.STORYBOOK_ENV="PIXI";var PixiStory=class{constructor(options){this.view=new pixi_js__WEBPACK_IMPORTED_MODULE_1__.mcf,options.context.parameters.pixi.appReady.then((()=>{options.init(this.view)})),void 0!==options.update&&(this.update=ticker=>{options.update(this.view,ticker)}),void 0!==options.resize&&(this.resize=(width,height)=>{options.resize(this.view,width,height)}),void 0!==options.destroy&&(this.destroy=()=>{options.destroy(this.view)})}}},"./node_modules/@storybook/addon-actions/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{XI:()=>action});var external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("storybook/internal/preview-api"),external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_=__webpack_require__("storybook/internal/preview-errors"),external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global"),v4=__webpack_require__("./node_modules/uuid/dist/esm-browser/v4.js"),ADDON_ID="storybook/actions",EVENT_ID=`${ADDON_ID}/action-event`,config={depth:10,clearOnStoryChange:!0,limit:50},findProto=(obj,callback)=>{let proto=Object.getPrototypeOf(obj);return!proto||callback(proto)?proto:findProto(proto,callback)},serializeArg=a=>{if("object"==typeof(e=a)&&e&&findProto(e,(proto=>/^Synthetic(?:Base)?Event$/.test(proto.constructor.name)))&&"function"==typeof e.persist){let e=Object.create(a.constructor.prototype,Object.getOwnPropertyDescriptors(a));e.persist();let viewDescriptor=Object.getOwnPropertyDescriptor(e,"view"),view=viewDescriptor?.value;return"object"==typeof view&&"Window"===view?.constructor.name&&Object.defineProperty(e,"view",{...viewDescriptor,value:Object.create(view.constructor.prototype)}),e}var e;return a},generateId=()=>"object"==typeof crypto&&"function"==typeof crypto.getRandomValues?(0,v4.A)():Date.now().toString(36)+Math.random().toString(36).substring(2);function action(name,options={}){let actionOptions={...config,...options},handler=function(...args){if(options.implicit){let storyRenderer=("__STORYBOOK_PREVIEW__"in external_STORYBOOK_MODULE_GLOBAL_.global?external_STORYBOOK_MODULE_GLOBAL_.global.__STORYBOOK_PREVIEW__:void 0)?.storyRenders.find((render=>"playing"===render.phase||"rendering"===render.phase));if(storyRenderer){let deprecated=!window?.FEATURES?.disallowImplicitActionsInRenderV8,error=new external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_.ImplicitActionsDuringRendering({phase:storyRenderer.phase,name,deprecated});if(!deprecated)throw error;console.warn(error)}}let channel=external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel(),id=generateId(),serializedArgs=args.map(serializeArg),normalizedArgs=args.length>1?serializedArgs:serializedArgs[0],actionDisplayToEmit={id,count:0,data:{name,args:normalizedArgs},options:{...actionOptions,maxDepth:5+(actionOptions.depth||3),allowFunction:actionOptions.allowFunction||!1}};channel.emit(EVENT_ID,actionDisplayToEmit)};return handler.isAction=!0,handler.implicit=options.implicit,handler}},"./src/stories/fancyButton/FancyButtonTextLink.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{TextLink:()=>TextLink,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var pixi_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/pixi.js/lib/index.mjs"),_pixi_storybook_renderer__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@pixi/storybook-renderer/dist/index.mjs"),_FancyButton__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/FancyButton.ts"),_utils_helpers_resize__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/utils/helpers/resize.ts"),_utils_helpers_styles__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/utils/helpers/styles.ts"),_utils_argTypes__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/stories/utils/argTypes.ts");const args={text:"Click me!",textColor:"#FFFFFF",animationDuration:100,disabled:!1,onPress:(0,__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs").XI)("button was pressed! (tap or click!)")},TextLink=({text,textColor,disabled,onPress,animationDuration},context)=>new _pixi_storybook_renderer__WEBPACK_IMPORTED_MODULE_1__.M({context,init:view=>{const button=new _FancyButton__WEBPACK_IMPORTED_MODULE_3__.w({text:new pixi_js__WEBPACK_IMPORTED_MODULE_0__.EYj({text,style:{..._utils_helpers_styles__WEBPACK_IMPORTED_MODULE_4__.a,fill:textColor||_utils_helpers_styles__WEBPACK_IMPORTED_MODULE_4__.a.fill}}),animations:{hover:{props:{scale:{x:1.03,y:1.03},y:0},duration:animationDuration},pressed:{props:{scale:{x:.9,y:.9},y:10},duration:animationDuration}}});disabled&&(button.enabled=!1),button.onPress.connect(onPress),(0,_utils_helpers_resize__WEBPACK_IMPORTED_MODULE_5__.l)(view),view.addChild(button)},resize:_utils_helpers_resize__WEBPACK_IMPORTED_MODULE_5__.l}),__WEBPACK_DEFAULT_EXPORT__={title:"Components/FancyButton/Text Link",argTypes:(0,_utils_argTypes__WEBPACK_IMPORTED_MODULE_6__.U)(args),args:(0,_utils_argTypes__WEBPACK_IMPORTED_MODULE_6__.p)(args)},__namedExportsOrder=["TextLink"]},"./src/stories/utils/argTypes.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}__webpack_require__.d(__webpack_exports__,{U:()=>argTypes,p:()=>getDefaultArgs});var controls={select:{control:{type:"select"}},check:{control:{type:"check"}},color:{control:{type:"color"}},amount:{control:{type:"range"}},type:{control:{type:"radio"}},date:{control:{type:"date"}},switch:{control:{type:"boolean"}}},argTypes=function argTypes(args){var exportArgTypes={};for(var key in args)if("number"==typeof args[key]){var min=0,arg=args[key];key.includes("font")&&(min=1),exportArgTypes[key]=arg>=0?arg>=100?{control:{type:"range",min,max:1e3,step:10}}:arg>10?{control:{type:"range",min,max:100,step:1}}:0!==arg&&arg<1?{control:{type:"range",min:0,max:1,step:.1}}:{control:{type:"range",min,max:10,step:1}}:arg<=-100?{control:{type:"range",min:-1e3,max:1e3,step:10}}:arg<-10?{control:{type:"range",min:-100,max:100,step:10}}:0!==arg&&arg>-1?{control:{type:"range",min:-1,max:0,step:.1}}:{control:{type:"range",min:-10,max:10,step:1}}}else switch(getArgType(key)&&(exportArgTypes[key]=getArgType(key)),_typeof(args[key])){case"object":exportArgTypes[key]=controls.select,Array.isArray(args[key])?exportArgTypes[key].options=args[key]:exportArgTypes[key].options=Object.keys(args).map((function(key){return args[key]}));break;case"boolean":exportArgTypes[key]=controls.switch}return exportArgTypes};function getArgType(type){for(var control in controls)if(type.toLowerCase().indexOf(control)>-1)return controls[control]}var getDefaultArgs=function getDefaultArgs(args){var exportArgs={};for(var key in args)if("object"===_typeof(args[key]))Array.isArray(args[key])&&(exportArgs[key]=args[key][0]);else exportArgs[key]=args[key];return exportArgs}},"./src/utils/helpers/resize.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function centerElement(view,horPos,verPos){var canvas=document.getElementById("storybook-root");view.width>0?view.x=0===horPos?0:horPos?canvas.offsetWidth*horPos-view.width/2:canvas.offsetWidth/2-view.width/2:view.x=canvas.offsetWidth/2,view.height>0?view.y=0===verPos?0:verPos?canvas.offsetHeight*verPos-view.height/2:canvas.offsetHeight/2-view.height/2:view.y=canvas.offsetHeight/2}function centerView(view){var canvas=document.getElementById("storybook-root");view.x=canvas.offsetWidth/2,view.y=canvas.offsetHeight/2}__webpack_require__.d(__webpack_exports__,{E:()=>centerElement,l:()=>centerView})},"./src/utils/helpers/styles.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{a:()=>defaultTextStyle});var defaultTextStyle={fill:16777215,fontSize:42,fontWeight:"bold",dropShadow:{color:0,alpha:.5,distance:0,blur:3,angle:0}}},"./src/utils/helpers/view.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{K:()=>getView,l:()=>getSpriteView});var pixi_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/pixi.js/lib/index.mjs");function getView(view){return"string"==typeof view?pixi_js__WEBPACK_IMPORTED_MODULE_0__.kxk.from(view):view}function getSpriteView(view){return"string"==typeof view?pixi_js__WEBPACK_IMPORTED_MODULE_0__.kxk.from(view):view}},"./node_modules/global/window.js":(module,__unused_webpack_exports,__webpack_require__)=>{var win;win="undefined"!=typeof window?window:void 0!==__webpack_require__.g?__webpack_require__.g:"undefined"!=typeof self?self:{},module.exports=win}}]);