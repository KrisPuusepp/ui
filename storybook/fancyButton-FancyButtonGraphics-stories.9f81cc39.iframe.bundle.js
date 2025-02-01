"use strict";(self.webpackChunk_pixi_ui=self.webpackChunk_pixi_ui||[]).push([[1361],{"./node_modules/@storybook/addon-actions/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{XI:()=>action});var v4=__webpack_require__("./node_modules/@storybook/addon-actions/node_modules/uuid/dist/esm-browser/v4.js"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global"),preview_errors=__webpack_require__("./node_modules/@storybook/core-events/dist/errors/preview-errors.mjs"),ADDON_ID="storybook/actions",EVENT_ID=`${ADDON_ID}/action-event`,config={depth:10,clearOnStoryChange:!0,limit:50},findProto=(obj,callback)=>{let proto=Object.getPrototypeOf(obj);return!proto||callback(proto)?proto:findProto(proto,callback)},serializeArg=a=>{if("object"==typeof(e=a)&&e&&findProto(e,(proto=>/^Synthetic(?:Base)?Event$/.test(proto.constructor.name)))&&"function"==typeof e.persist){let e=Object.create(a.constructor.prototype,Object.getOwnPropertyDescriptors(a));e.persist();let viewDescriptor=Object.getOwnPropertyDescriptor(e,"view"),view=viewDescriptor?.value;return"object"==typeof view&&"Window"===view?.constructor.name&&Object.defineProperty(e,"view",{...viewDescriptor,value:Object.create(view.constructor.prototype)}),e}var e;return a},generateId=()=>"object"==typeof crypto&&"function"==typeof crypto.getRandomValues?(0,v4.A)():Date.now().toString(36)+Math.random().toString(36).substring(2);function action(name,options={}){let actionOptions={...config,...options},handler=function(...args){if(options.implicit){let storyRenderer=("__STORYBOOK_PREVIEW__"in external_STORYBOOK_MODULE_GLOBAL_.global?external_STORYBOOK_MODULE_GLOBAL_.global.__STORYBOOK_PREVIEW__:void 0)?.storyRenders.find((render=>"playing"===render.phase||"rendering"===render.phase));if(storyRenderer){let deprecated=!window?.FEATURES?.disallowImplicitActionsInRenderV8,error=new preview_errors._U({phase:storyRenderer.phase,name,deprecated});if(!deprecated)throw error;console.warn(error)}}let channel=external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel(),id=generateId(),serializedArgs=args.map(serializeArg),normalizedArgs=args.length>1?serializedArgs:serializedArgs[0],actionDisplayToEmit={id,count:0,data:{name,args:normalizedArgs},options:{...actionOptions,maxDepth:5+(actionOptions.depth||3),allowFunction:actionOptions.allowFunction||!1}};channel.emit(EVENT_ID,actionDisplayToEmit)};return handler.isAction=!0,handler}},"./src/stories/fancyButton/FancyButtonGraphics.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{UseGraphics:()=>UseGraphics,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var pixi_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/pixi.js/lib/index.mjs"),_pixi_storybook_renderer__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@pixi/storybook-renderer/dist/index.mjs"),_FancyButton__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/FancyButton.ts"),_MaskedFrame__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/MaskedFrame.ts"),_utils_helpers_resize__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./src/utils/helpers/resize.ts"),_utils_helpers_styles__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/utils/helpers/styles.ts"),_utils_argTypes__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./src/stories/utils/argTypes.ts"),_utils_color__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/stories/utils/color.ts"),_utils_loader__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/stories/utils/loader.ts");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(e,r,t){return(r=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:i+""}(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var args={text:"Click me!",textColor:"#FFFFFF",color:"#A5E24D",hoverColor:"#FEC230",pressedColor:"#FE6048",disabledColor:"#6E6E6E",width:350,height:350,padding:11,radius:50,iconOffsetX:0,iconOffsetY:-30,textOffsetX:0,textOffsetY:140,defaultTextScale:.99,defaultIconScale:.99,defaultTextAnchorX:.5,defaultTextAnchorY:.5,defaultIconAnchorX:.5,defaultIconAnchorY:.5,defaultOffsetY:0,hoverOffsetY:-1,pressedOffsetY:5,disabledOffsetY:0,anchorX:.5,anchorY:.5,animationDuration:100,disabled:!1,action:(0,__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs").XI)("Button")},UseGraphics=function UseGraphics(_ref,context){var width=_ref.width,height=_ref.height,radius=_ref.radius,text=_ref.text,color=_ref.color,hoverColor=_ref.hoverColor,pressedColor=_ref.pressedColor,disabledColor=_ref.disabledColor,disabled=_ref.disabled,padding=_ref.padding,anchorX=_ref.anchorX,anchorY=_ref.anchorY,textColor=_ref.textColor,iconOffsetX=_ref.iconOffsetX,iconOffsetY=_ref.iconOffsetY,textOffsetX=_ref.textOffsetX,textOffsetY=_ref.textOffsetY,defaultTextScale=_ref.defaultTextScale,defaultIconScale=_ref.defaultIconScale,defaultTextAnchorX=_ref.defaultTextAnchorX,defaultTextAnchorY=_ref.defaultTextAnchorY,defaultIconAnchorX=_ref.defaultIconAnchorX,defaultIconAnchorY=_ref.defaultIconAnchorY,defaultOffsetY=_ref.defaultOffsetY,hoverOffsetY=_ref.hoverOffsetY,pressedOffsetY=_ref.pressedOffsetY,disabledOffsetY=_ref.disabledOffsetY,animationDuration=_ref.animationDuration,action=_ref.action;return new _pixi_storybook_renderer__WEBPACK_IMPORTED_MODULE_1__.M4({context,init:function init(view){(0,_utils_loader__WEBPACK_IMPORTED_MODULE_3__.u)(["avatar-01.png"]).then((function(){var fill=(0,_utils_color__WEBPACK_IMPORTED_MODULE_4__.o)(textColor),target=pixi_js__WEBPACK_IMPORTED_MODULE_0__.kxk.from("avatar-01.png"),icon=new _MaskedFrame__WEBPACK_IMPORTED_MODULE_5__.j({target,mask:(new pixi_js__WEBPACK_IMPORTED_MODULE_0__.A1g).circle(target.width/2,target.height/2,target.width/2).fill(0),borderWidth:10,borderColor:fill}),button=new _FancyButton__WEBPACK_IMPORTED_MODULE_6__.w({defaultView:(new pixi_js__WEBPACK_IMPORTED_MODULE_0__.A1g).roundRect(0,0,width,height,radius).fill(color),hoverView:(new pixi_js__WEBPACK_IMPORTED_MODULE_0__.A1g).roundRect(0,0,width,height,radius).fill(hoverColor),pressedView:(new pixi_js__WEBPACK_IMPORTED_MODULE_0__.A1g).roundRect(0,0,width,height,radius).fill(pressedColor),disabledView:(new pixi_js__WEBPACK_IMPORTED_MODULE_0__.A1g).roundRect(0,0,width,height,radius).fill(disabledColor),icon,text:new pixi_js__WEBPACK_IMPORTED_MODULE_0__.EYj({text,style:_objectSpread(_objectSpread({},_utils_helpers_styles__WEBPACK_IMPORTED_MODULE_7__.a),{},{fill})}),padding,offset:{default:{y:defaultOffsetY},hover:{y:hoverOffsetY},pressed:{y:pressedOffsetY},disabled:{y:disabledOffsetY}},textOffset:{x:textOffsetX,y:textOffsetY},iconOffset:{x:iconOffsetX,y:iconOffsetY},defaultTextScale,defaultIconScale,defaultTextAnchor:{x:defaultTextAnchorX,y:defaultTextAnchorY},defaultIconAnchor:{x:defaultIconAnchorX,y:defaultIconAnchorY},animations:{default:{props:{scale:{x:1,y:1},y:defaultOffsetY},duration:animationDuration},hover:{props:{scale:{x:1.03,y:1.03},y:hoverOffsetY},duration:animationDuration},pressed:{props:{scale:{x:.9,y:.9},y:pressedOffsetY},duration:animationDuration}}});disabled&&(button.enabled=!1),button.anchor.set(anchorX,anchorY),button.onPress.connect((function(){return action("onPress")})),button.onDown.connect((function(){return action("onDown")})),button.onUp.connect((function(){return action("onUp")})),button.onHover.connect((function(){return action("onHover")})),button.onOut.connect((function(){return action("onOut")})),button.onUpOut.connect((function(){return action("onUpOut")})),view.addChild(button),(0,_utils_helpers_resize__WEBPACK_IMPORTED_MODULE_8__.l)(view)}))},resize:_utils_helpers_resize__WEBPACK_IMPORTED_MODULE_8__.l})};const __WEBPACK_DEFAULT_EXPORT__={parameters:{storySource:{source:"import { Graphics, Sprite, Text } from 'pixi.js';\nimport { PixiStory, StoryFn } from '@pixi/storybook-renderer';\nimport { FancyButton } from '../../FancyButton';\nimport { MaskedFrame } from '../../MaskedFrame';\nimport { centerView } from '../../utils/helpers/resize';\nimport { defaultTextStyle } from '../../utils/helpers/styles';\nimport { argTypes, getDefaultArgs } from '../utils/argTypes';\nimport { getColor } from '../utils/color';\nimport { preload } from '../utils/loader';\nimport { action } from '@storybook/addon-actions';\n\nconst args = {\n    text: 'Click me!',\n    textColor: '#FFFFFF',\n    color: '#A5E24D',\n    hoverColor: '#FEC230',\n    pressedColor: '#FE6048',\n    disabledColor: '#6E6E6E',\n    width: 350,\n    height: 350,\n    padding: 11,\n    radius: 50,\n    iconOffsetX: 0,\n    iconOffsetY: -30,\n    textOffsetX: 0,\n    textOffsetY: 140,\n    defaultTextScale: 0.99,\n    defaultIconScale: 0.99,\n    defaultTextAnchorX: 0.5,\n    defaultTextAnchorY: 0.5,\n    defaultIconAnchorX: 0.5,\n    defaultIconAnchorY: 0.5,\n    defaultOffsetY: 0,\n    hoverOffsetY: -1,\n    pressedOffsetY: 5,\n    disabledOffsetY: 0,\n    anchorX: 0.5,\n    anchorY: 0.5,\n    animationDuration: 100,\n    disabled: false,\n    action: action('Button'),\n};\n\nexport const UseGraphics: StoryFn<typeof args> = (\n    {\n        width,\n        height,\n        radius,\n        text,\n        color,\n        hoverColor,\n        pressedColor,\n        disabledColor,\n        disabled,\n        padding,\n        anchorX,\n        anchorY,\n        textColor,\n        iconOffsetX,\n        iconOffsetY,\n        textOffsetX,\n        textOffsetY,\n        defaultTextScale,\n        defaultIconScale,\n        defaultTextAnchorX,\n        defaultTextAnchorY,\n        defaultIconAnchorX,\n        defaultIconAnchorY,\n        defaultOffsetY,\n        hoverOffsetY,\n        pressedOffsetY,\n        disabledOffsetY,\n        animationDuration,\n        action,\n    },\n    context,\n) =>\n    new PixiStory<typeof args>({\n        context,\n        init: (view) =>\n        {\n            const assets = [`avatar-01.png`];\n\n            preload(assets).then(() =>\n            {\n                const fill = getColor(textColor);\n                const target = Sprite.from(`avatar-01.png`);\n\n                // Component usage !!!\n                const icon = new MaskedFrame({\n                    target,\n                    mask: new Graphics()\n                        .circle(target.width / 2, target.height / 2, target.width / 2)\n                        .fill(0x000000),\n                    borderWidth: 10,\n                    borderColor: fill,\n                });\n\n                // Component usage !!!\n                const button = new FancyButton({\n                    defaultView: new Graphics().roundRect(0, 0, width, height, radius).fill(color),\n                    hoverView: new Graphics()\n                        .roundRect(0, 0, width, height, radius)\n                        .fill(hoverColor),\n                    pressedView: new Graphics()\n                        .roundRect(0, 0, width, height, radius)\n                        .fill(pressedColor),\n                    disabledView: new Graphics()\n                        .roundRect(0, 0, width, height, radius)\n                        .fill(disabledColor),\n                    icon,\n                    text: new Text({\n                        text,\n                        style: {\n                            ...defaultTextStyle,\n                            fill,\n                        },\n                    }),\n                    padding,\n                    offset: {\n                        default: { y: defaultOffsetY },\n                        hover: { y: hoverOffsetY },\n                        pressed: { y: pressedOffsetY },\n                        disabled: { y: disabledOffsetY },\n                    },\n                    textOffset: {\n                        x: textOffsetX,\n                        y: textOffsetY,\n                    },\n                    iconOffset: {\n                        x: iconOffsetX,\n                        y: iconOffsetY,\n                    },\n                    defaultTextScale,\n                    defaultIconScale,\n                    defaultTextAnchor: {\n                        x: defaultTextAnchorX,\n                        y: defaultTextAnchorY,\n                    },\n                    defaultIconAnchor: {\n                        x: defaultIconAnchorX,\n                        y: defaultIconAnchorY,\n                    },\n                    animations: {\n                        default: {\n                            props: {\n                                scale: { x: 1, y: 1 },\n                                y: defaultOffsetY,\n                            },\n                            duration: animationDuration,\n                        },\n                        hover: {\n                            props: {\n                                scale: { x: 1.03, y: 1.03 },\n                                y: hoverOffsetY,\n                            },\n                            duration: animationDuration,\n                        },\n                        pressed: {\n                            props: {\n                                scale: { x: 0.9, y: 0.9 },\n                                y: pressedOffsetY,\n                            },\n                            duration: animationDuration,\n                        },\n                    },\n                });\n\n                if (disabled)\n                {\n                    button.enabled = false;\n                }\n\n                button.anchor.set(anchorX, anchorY);\n\n                button.onPress.connect(() => action('onPress'));\n                button.onDown.connect(() => action('onDown'));\n                button.onUp.connect(() => action('onUp'));\n                button.onHover.connect(() => action('onHover'));\n                button.onOut.connect(() => action('onOut'));\n                button.onUpOut.connect(() => action('onUpOut'));\n\n                view.addChild(button);\n\n                centerView(view);\n            });\n        },\n        resize: centerView,\n    });\n\nexport default {\n    title: 'Components/FancyButton/Use Graphics',\n    argTypes: argTypes(args),\n    args: getDefaultArgs(args),\n};\n",locationsMap:{"use-graphics":{startLoc:{col:49,line:44},endLoc:{col:6,line:189},startBody:{col:49,line:44},endBody:{col:6,line:189}}}}},title:"Components/FancyButton/Use Graphics",argTypes:(0,_utils_argTypes__WEBPACK_IMPORTED_MODULE_9__.U)(args),args:(0,_utils_argTypes__WEBPACK_IMPORTED_MODULE_9__.p)(args)},__namedExportsOrder=["UseGraphics"]},"./src/stories/utils/color.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{o:()=>getColor});var pixi_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/pixi.js/lib/index.mjs");function getColor(color){if("transparent"!==color&&void 0!==color)return pixi_js__WEBPACK_IMPORTED_MODULE_0__.Q1f.shared.setValue(color).toNumber()}},"./src/utils/helpers/styles.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>defaultTextStyle});var defaultTextStyle={fill:16777215,fontSize:42,fontWeight:"bold",dropShadow:{color:0,alpha:.5,distance:0,blur:3,angle:0}}}}]);