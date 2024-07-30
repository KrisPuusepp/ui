"use strict";(self.webpackChunk_pixi_ui=self.webpackChunk_pixi_ui||[]).push([[7380],{"./node_modules/@pixi/sprite/lib/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{j:()=>Sprite});var lib=__webpack_require__("./node_modules/@pixi/core/lib/index.mjs"),display_lib=__webpack_require__("./node_modules/@pixi/display/lib/index.mjs");const tempPoint=new lib.E9,indices=new Uint16Array([0,1,2,0,2,3]);class Sprite extends display_lib.W2{constructor(texture){super(),this._anchor=new lib.AB(this._onAnchorUpdate,this,texture?texture.defaultAnchor.x:0,texture?texture.defaultAnchor.y:0),this._texture=null,this._width=0,this._height=0,this._tintColor=new lib.Il(16777215),this._tintRGB=null,this.tint=16777215,this.blendMode=lib.T$.NORMAL,this._cachedTint=16777215,this.uvs=null,this.texture=texture||lib.xE.EMPTY,this.vertexData=new Float32Array(8),this.vertexTrimmedData=null,this._transformID=-1,this._textureID=-1,this._transformTrimmedID=-1,this._textureTrimmedID=-1,this.indices=indices,this.pluginName="batch",this.isSprite=!0,this._roundPixels=lib.Xd.ROUND_PIXELS}_onTextureUpdate(){this._textureID=-1,this._textureTrimmedID=-1,this._cachedTint=16777215,this._width&&(this.scale.x=lib.P6.sign(this.scale.x)*this._width/this._texture.orig.width),this._height&&(this.scale.y=lib.P6.sign(this.scale.y)*this._height/this._texture.orig.height)}_onAnchorUpdate(){this._transformID=-1,this._transformTrimmedID=-1}calculateVertices(){const texture=this._texture;if(this._transformID===this.transform._worldID&&this._textureID===texture._updateID)return;this._textureID!==texture._updateID&&(this.uvs=this._texture._uvs.uvsFloat32),this._transformID=this.transform._worldID,this._textureID=texture._updateID;const wt=this.transform.worldTransform,a=wt.a,b=wt.b,c=wt.c,d=wt.d,tx=wt.tx,ty=wt.ty,vertexData=this.vertexData,trim=texture.trim,orig=texture.orig,anchor=this._anchor;let w0=0,w1=0,h0=0,h1=0;if(trim?(w1=trim.x-anchor._x*orig.width,w0=w1+trim.width,h1=trim.y-anchor._y*orig.height,h0=h1+trim.height):(w1=-anchor._x*orig.width,w0=w1+orig.width,h1=-anchor._y*orig.height,h0=h1+orig.height),vertexData[0]=a*w1+c*h1+tx,vertexData[1]=d*h1+b*w1+ty,vertexData[2]=a*w0+c*h1+tx,vertexData[3]=d*h1+b*w0+ty,vertexData[4]=a*w0+c*h0+tx,vertexData[5]=d*h0+b*w0+ty,vertexData[6]=a*w1+c*h0+tx,vertexData[7]=d*h0+b*w1+ty,this._roundPixels){const resolution=lib.Xd.RESOLUTION;for(let i=0;i<vertexData.length;++i)vertexData[i]=Math.round(vertexData[i]*resolution)/resolution}}calculateTrimmedVertices(){if(this.vertexTrimmedData){if(this._transformTrimmedID===this.transform._worldID&&this._textureTrimmedID===this._texture._updateID)return}else this.vertexTrimmedData=new Float32Array(8);this._transformTrimmedID=this.transform._worldID,this._textureTrimmedID=this._texture._updateID;const texture=this._texture,vertexData=this.vertexTrimmedData,orig=texture.orig,anchor=this._anchor,wt=this.transform.worldTransform,a=wt.a,b=wt.b,c=wt.c,d=wt.d,tx=wt.tx,ty=wt.ty,w1=-anchor._x*orig.width,w0=w1+orig.width,h1=-anchor._y*orig.height,h0=h1+orig.height;if(vertexData[0]=a*w1+c*h1+tx,vertexData[1]=d*h1+b*w1+ty,vertexData[2]=a*w0+c*h1+tx,vertexData[3]=d*h1+b*w0+ty,vertexData[4]=a*w0+c*h0+tx,vertexData[5]=d*h0+b*w0+ty,vertexData[6]=a*w1+c*h0+tx,vertexData[7]=d*h0+b*w1+ty,this._roundPixels){const resolution=lib.Xd.RESOLUTION;for(let i=0;i<vertexData.length;++i)vertexData[i]=Math.round(vertexData[i]*resolution)/resolution}}_render(renderer){this.calculateVertices(),renderer.batch.setObjectRenderer(renderer.plugins[this.pluginName]),renderer.plugins[this.pluginName].render(this)}_calculateBounds(){const trim=this._texture.trim,orig=this._texture.orig;!trim||trim.width===orig.width&&trim.height===orig.height?(this.calculateVertices(),this._bounds.addQuad(this.vertexData)):(this.calculateTrimmedVertices(),this._bounds.addQuad(this.vertexTrimmedData))}getLocalBounds(rect){return 0===this.children.length?(this._localBounds||(this._localBounds=new display_lib.YZ),this._localBounds.minX=this._texture.orig.width*-this._anchor._x,this._localBounds.minY=this._texture.orig.height*-this._anchor._y,this._localBounds.maxX=this._texture.orig.width*(1-this._anchor._x),this._localBounds.maxY=this._texture.orig.height*(1-this._anchor._y),rect||(this._localBoundsRect||(this._localBoundsRect=new lib.Ae),rect=this._localBoundsRect),this._localBounds.getRectangle(rect)):super.getLocalBounds.call(this,rect)}containsPoint(point){this.worldTransform.applyInverse(point,tempPoint);const width=this._texture.orig.width,height=this._texture.orig.height,x1=-width*this.anchor.x;let y1=0;return tempPoint.x>=x1&&tempPoint.x<x1+width&&(y1=-height*this.anchor.y,tempPoint.y>=y1&&tempPoint.y<y1+height)}destroy(options){if(super.destroy(options),this._texture.off("update",this._onTextureUpdate,this),this._anchor=null,"boolean"==typeof options?options:options?.texture){const destroyBaseTexture="boolean"==typeof options?options:options?.baseTexture;this._texture.destroy(!!destroyBaseTexture)}this._texture=null}static from(source,options){const texture=source instanceof lib.xE?source:lib.xE.from(source,options);return new Sprite(texture)}set roundPixels(value){this._roundPixels!==value&&(this._transformID=-1,this._transformTrimmedID=-1),this._roundPixels=value}get roundPixels(){return this._roundPixels}get width(){return Math.abs(this.scale.x)*this._texture.orig.width}set width(value){const s=lib.P6.sign(this.scale.x)||1;this.scale.x=s*value/this._texture.orig.width,this._width=value}get height(){return Math.abs(this.scale.y)*this._texture.orig.height}set height(value){const s=lib.P6.sign(this.scale.y)||1;this.scale.y=s*value/this._texture.orig.height,this._height=value}get anchor(){return this._anchor}set anchor(value){this._anchor.copyFrom(value)}get tint(){return this._tintColor.value}set tint(value){this._tintColor.setValue(value),this._tintRGB=this._tintColor.toLittleEndianNumber()}get tintValue(){return this._tintColor.toNumber()}get texture(){return this._texture}set texture(value){this._texture!==value&&(this._texture&&this._texture.off("update",this._onTextureUpdate,this),this._texture=value||lib.xE.EMPTY,this._cachedTint=16777215,this._textureID=-1,this._textureTrimmedID=-1,value&&(value.baseTexture.valid?this._onTextureUpdate():value.once("update",this._onTextureUpdate,this)))}}},"./src/stories/progressBar/ProgressBarGraphics.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{UseGraphics:()=>UseGraphics,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _pixi_graphics__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@pixi/graphics/lib/index.mjs"),_List__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/List.ts"),_utils_argTypes__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/stories/utils/argTypes.ts"),_ProgressBar__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/ProgressBar.ts"),_utils_helpers_resize__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/utils/helpers/resize.ts"),_utils_color__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/stories/utils/color.ts"),args={fillColor:"#00b1dd",borderColor:"#FFFFFF",backgroundColor:"#fe6048",value:50,width:450,height:35,radius:25,border:3,animate:!0,vertical:!1},UseGraphics=function UseGraphics(_ref){var value=_ref.value,borderColor=_ref.borderColor,backgroundColor=_ref.backgroundColor,fillColor=_ref.fillColor,width=_ref.width,height=_ref.height,radius=_ref.radius,border=_ref.border,animate=_ref.animate,vertical=_ref.vertical,view=new _List__WEBPACK_IMPORTED_MODULE_1__.a({type:"vertical",elementsMargin:10});fillColor=(0,_utils_color__WEBPACK_IMPORTED_MODULE_2__.Lq)(fillColor),borderColor=(0,_utils_color__WEBPACK_IMPORTED_MODULE_2__.Lq)(borderColor),backgroundColor=(0,_utils_color__WEBPACK_IMPORTED_MODULE_2__.Lq)(backgroundColor);var bg=(new _pixi_graphics__WEBPACK_IMPORTED_MODULE_0__.TC).beginFill(borderColor).drawRoundedRect(0,0,width,height,radius).beginFill(backgroundColor).drawRoundedRect(border,border,width-2*border,height-2*border,radius),fill=(new _pixi_graphics__WEBPACK_IMPORTED_MODULE_0__.TC).beginFill(borderColor).drawRoundedRect(0,0,width,height,radius).beginFill(fillColor).drawRoundedRect(border,border,width-2*border,height-2*border,radius),progressBar=new _ProgressBar__WEBPACK_IMPORTED_MODULE_3__.k({bg,fill,progress:value});vertical&&(progressBar.rotation=-Math.PI/2),view.addChild(progressBar);var isFilling=!0;return{view,resize:function resize(){(0,_utils_helpers_resize__WEBPACK_IMPORTED_MODULE_4__.w)(view),view.y+=view.height},update:function update(){animate&&(isFilling?value++:value--,value>150?isFilling=!1:value<-50&&(isFilling=!0),progressBar.progress=value)}}};const __WEBPACK_DEFAULT_EXPORT__={parameters:{storySource:{source:"import { Graphics } from '@pixi/graphics';\nimport { List } from '../../List';\nimport { argTypes, getDefaultArgs } from '../utils/argTypes';\nimport { ProgressBar } from '../../ProgressBar';\nimport { centerElement } from '../../utils/helpers/resize';\nimport type { StoryFn } from '@storybook/types';\nimport { getColor } from '../utils/color';\n\nconst args = {\n    fillColor: '#00b1dd',\n    borderColor: '#FFFFFF',\n    backgroundColor: '#fe6048',\n    value: 50,\n    width: 450,\n    height: 35,\n    radius: 25,\n    border: 3,\n    animate: true,\n    vertical: false\n};\n\nexport const UseGraphics: StoryFn = ({\n    value,\n    borderColor,\n    backgroundColor,\n    fillColor,\n    width,\n    height,\n    radius,\n    border,\n    animate,\n    vertical\n}: any) =>\n{\n    const view = new List({ type: 'vertical', elementsMargin: 10 });\n\n    fillColor = getColor(fillColor);\n    borderColor = getColor(borderColor);\n    backgroundColor = getColor(backgroundColor);\n\n    const bg = new Graphics()\n        .beginFill(borderColor)\n        .drawRoundedRect(0, 0, width, height, radius)\n        .beginFill(backgroundColor)\n        .drawRoundedRect(border, border, width - (border * 2), height - (border * 2), radius);\n\n    const fill = new Graphics()\n        .beginFill(borderColor)\n        .drawRoundedRect(0, 0, width, height, radius)\n        .beginFill(fillColor)\n        .drawRoundedRect(border, border, width - (border * 2), height - (border * 2), radius);\n\n    // Component usage\n    const progressBar = new ProgressBar({\n        bg,\n        fill,\n        progress: value\n    });\n\n    if (vertical)\n    {\n        progressBar.rotation = -Math.PI / 2;\n    }\n\n    view.addChild(progressBar);\n\n    let isFilling = true;\n\n    return {\n        view,\n        resize: () =>\n        {\n            centerElement(view);\n            view.y += view.height;\n        },\n        update: () =>\n        {\n            if (!animate)\n            {\n                return;\n            }\n\n            isFilling ? value++ : value--;\n\n            if (value > 150)\n            {\n                isFilling = false;\n            }\n            else if (value < -50)\n            {\n                isFilling = true;\n            }\n\n            progressBar.progress = value;\n        }\n    };\n};\n\nexport default {\n    title: 'Components/ProgressBar/UseGraphics',\n    argTypes: argTypes(args),\n    args: getDefaultArgs(args)\n};\n",locationsMap:{"use-graphics":{startLoc:{col:36,line:22},endLoc:{col:1,line:97},startBody:{col:36,line:22},endBody:{col:1,line:97}}}}},title:"Components/ProgressBar/UseGraphics",argTypes:(0,_utils_argTypes__WEBPACK_IMPORTED_MODULE_5__.P)(args),args:(0,_utils_argTypes__WEBPACK_IMPORTED_MODULE_5__.V)(args)};var __namedExportsOrder=["UseGraphics"]},"./src/ProgressBar.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{k:()=>ProgressBar});var _pixi_display__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@pixi/display/lib/index.mjs"),_pixi_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@pixi/core/lib/index.mjs"),_pixi_sprite__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@pixi/sprite/lib/index.mjs"),_utils_helpers_view__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/utils/helpers/view.ts"),_pixi_mesh_extras__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@pixi/mesh-extras/lib/index.mjs"),_pixi_graphics__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@pixi/graphics/lib/index.mjs");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _construct(Parent,args,Class){return _construct=_isNativeReflectConstruct()?Reflect.construct.bind():function _construct(Parent,args,Class){var a=[null];a.push.apply(a,args);var instance=new(Function.bind.apply(Parent,a));return Class&&_setPrototypeOf(instance,Class.prototype),instance},_construct.apply(null,arguments)}function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,_toPropertyKey(descriptor.key),descriptor)}}function _get(){return _get="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function _get(target,property,receiver){var base=_superPropBase(target,property);if(base){var desc=Object.getOwnPropertyDescriptor(base,property);return desc.get?desc.get.call(arguments.length<3?target:receiver):desc.value}},_get.apply(this,arguments)}function set(target,property,value,receiver){return set="undefined"!=typeof Reflect&&Reflect.set?Reflect.set:function set(target,property,value,receiver){var desc,base=_superPropBase(target,property);if(base){if((desc=Object.getOwnPropertyDescriptor(base,property)).set)return desc.set.call(receiver,value),!0;if(!desc.writable)return!1}if(desc=Object.getOwnPropertyDescriptor(receiver,property)){if(!desc.writable)return!1;desc.value=value,Object.defineProperty(receiver,property,desc)}else _defineProperty(receiver,property,value);return!0},set(target,property,value,receiver)}function _set(target,property,value,receiver,isStrict){if(!set(target,property,value,receiver||target)&&isStrict)throw new TypeError("failed to set property");return value}function _superPropBase(object,property){for(;!Object.prototype.hasOwnProperty.call(object,property)&&null!==(object=_getPrototypeOf(object)););return object}function _setPrototypeOf(o,p){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function _setPrototypeOf(o,p){return o.__proto__=p,o},_setPrototypeOf(o,p)}function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var result,Super=_getPrototypeOf(Derived);if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return function _possibleConstructorReturn(self,call){if(call&&("object"===_typeof(call)||"function"==typeof call))return call;if(void 0!==call)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(self)}(this,result)}}function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function _getPrototypeOf(o){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)},_getPrototypeOf(o)}function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}var ProgressBar=function(_Container){!function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),Object.defineProperty(subClass,"prototype",{writable:!1}),superClass&&_setPrototypeOf(subClass,superClass)}(ProgressBar,_Container);var _super=_createSuper(ProgressBar);function ProgressBar(options){var _this;return function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,ProgressBar),_defineProperty(_assertThisInitialized(_this=_super.call(this)),"progressStart",0),_defineProperty(_assertThisInitialized(_this),"_progress",0),_this.options=options,_this.innerView=new _pixi_display__WEBPACK_IMPORTED_MODULE_0__.W2,_this.addChild(_this.innerView),null!=options&&options.bg&&null!=options&&options.fill&&_this.init(options),_this}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(ProgressBar,[{key:"init",value:function init(_ref){var bg=_ref.bg,fill=_ref.fill,fillPaddings=_ref.fillPaddings,progress=_ref.progress;this.setBackground(bg),this.setFill(fill,fillPaddings),this.progress=progress}},{key:"setBackground",value:function setBackground(bg){var _this$options;this.bg&&this.bg.destroy(),null!==(_this$options=this.options)&&void 0!==_this$options&&_this$options.nineSlicePlane&&("string"==typeof bg?this.bg=_construct(_pixi_mesh_extras__WEBPACK_IMPORTED_MODULE_3__.ZT,[_pixi_core__WEBPACK_IMPORTED_MODULE_1__.xE.from(bg)].concat(_toConsumableArray(this.options.nineSlicePlane.bg))):console.warn("NineSlicePlane can not be used with views set as Container.")),bg instanceof _pixi_graphics__WEBPACK_IMPORTED_MODULE_4__.TC&&(this.bg=bg),!this.bg&&("string"==typeof bg||bg instanceof _pixi_sprite__WEBPACK_IMPORTED_MODULE_2__.j)&&(this.bg=(0,_utils_helpers_view__WEBPACK_IMPORTED_MODULE_5__.v)(bg)),this.innerView.addChildAt(this.bg,0)}},{key:"setFill",value:function setFill(fill,fillPadding){var _this$options2,_fillPadding$left,_fillPadding$top;if(this.fill&&this.fill.destroy(),this.bg instanceof _pixi_sprite__WEBPACK_IMPORTED_MODULE_2__.j&&fill===this.bg)console.warn("Can not use same Sprite instance for bg and fill.");else{null!==(_this$options2=this.options)&&void 0!==_this$options2&&_this$options2.nineSlicePlane&&("string"==typeof fill?this.fill=_construct(_pixi_mesh_extras__WEBPACK_IMPORTED_MODULE_3__.ZT,[_pixi_core__WEBPACK_IMPORTED_MODULE_1__.xE.from(fill)].concat(_toConsumableArray(this.options.nineSlicePlane.fill))):console.warn("NineSlicePlane can not be used with views set as Container.")),this.fill||(fill instanceof _pixi_graphics__WEBPACK_IMPORTED_MODULE_4__.TC?this.fill=fill:this.fill=(0,_utils_helpers_view__WEBPACK_IMPORTED_MODULE_5__.v)(fill)),this.innerView.addChildAt(this.fill,1);var offsetX=null!==(_fillPadding$left=null==fillPadding?void 0:fillPadding.left)&&void 0!==_fillPadding$left?_fillPadding$left:0,offsetY=null!==(_fillPadding$top=null==fillPadding?void 0:fillPadding.top)&&void 0!==_fillPadding$top?_fillPadding$top:0;this.fill.x=offsetX,this.fill.y=offsetY,this.fillMask&&(this.fill.mask=null,this.fillMask.destroy());var leftWidth=this.fill.width/2,rightWidth=this.fill.width/2,topHeight=this.fill.height/2,bottomHeight=this.fill.height/2,texture=_pixi_core__WEBPACK_IMPORTED_MODULE_1__.xE.WHITE;this.fill instanceof _pixi_sprite__WEBPACK_IMPORTED_MODULE_2__.j&&this.fill.texture&&(texture=this.fill.texture),this.fillMask=new _pixi_mesh_extras__WEBPACK_IMPORTED_MODULE_3__.ZT(texture,leftWidth,topHeight,rightWidth,bottomHeight),this.fill.addChild(this.fillMask),this.fill.mask=this.fillMask}}},{key:"validate",value:function validate(progress){return(progress=Math.round(progress))<0?0:progress>100?100:progress}},{key:"progress",get:function get(){return this._progress},set:function set(progress){this._progress=this.validate(progress),this.fill&&this.fillMask&&(this.fillMask.width=this.fill.width/100*(this._progress-this.progressStart),this.fillMask.x=this.progressStart/100*this.fill.width,this.fillMask.height=this.fill.height)}},{key:"width",get:function get(){return _get(_getPrototypeOf(ProgressBar.prototype),"width",this)},set:function set(width){var _this$options3;if(null!==(_this$options3=this.options)&&void 0!==_this$options3&&_this$options3.nineSlicePlane){if(this.bg&&(this.bg.width=width),this.fill){var _this$options$fillPad,_this$options$fillPad2,_this$options$fillPad3,_this$options$fillPad4,leftPadding=null!==(_this$options$fillPad=null===(_this$options$fillPad2=this.options.fillPaddings)||void 0===_this$options$fillPad2?void 0:_this$options$fillPad2.left)&&void 0!==_this$options$fillPad?_this$options$fillPad:0,rightPadding=null!==(_this$options$fillPad3=null===(_this$options$fillPad4=this.options.fillPaddings)||void 0===_this$options$fillPad4?void 0:_this$options$fillPad4.right)&&void 0!==_this$options$fillPad3?_this$options$fillPad3:0;this.fill.width=width-leftPadding-rightPadding,this.fillMask.width=width-leftPadding-rightPadding}this.progress=this._progress}else _set(_getPrototypeOf(ProgressBar.prototype),"width",width,this,!0)}},{key:"height",get:function get(){return _get(_getPrototypeOf(ProgressBar.prototype),"height",this)},set:function set(height){var _this$options4;if(null!==(_this$options4=this.options)&&void 0!==_this$options4&&_this$options4.nineSlicePlane){if(this.bg&&(this.bg.height=height),this.fill){var _this$options$fillPad5,_this$options$fillPad6,_this$options$fillPad7,_this$options$fillPad8,topPadding=null!==(_this$options$fillPad5=null===(_this$options$fillPad6=this.options.fillPaddings)||void 0===_this$options$fillPad6?void 0:_this$options$fillPad6.top)&&void 0!==_this$options$fillPad5?_this$options$fillPad5:0,bottomPadding=null!==(_this$options$fillPad7=null===(_this$options$fillPad8=this.options.fillPaddings)||void 0===_this$options$fillPad8?void 0:_this$options$fillPad8.bottom)&&void 0!==_this$options$fillPad7?_this$options$fillPad7:0;this.fill.height=height-topPadding-bottomPadding,this.fillMask.height=height-topPadding-bottomPadding}this.progress=this._progress}else _set(_getPrototypeOf(ProgressBar.prototype),"height",height,this,!0)}}]),ProgressBar}(_pixi_display__WEBPACK_IMPORTED_MODULE_0__.W2)},"./src/stories/utils/color.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Lq:()=>getColor});var pixi_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/pixi.js/lib/index.mjs");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function getColor(color){if("transparent"!==color&&void 0!==color)switch(_typeof(color)){case"string":if(color.startsWith("#")||color.startsWith("0x"))return pixi_js__WEBPACK_IMPORTED_MODULE_0__.P6Y.string2hex(color);if(color.startsWith("rgba("))return function rgba2Hex(_ref){var _ref2=_slicedToArray(_ref,3),r=_ref2[0],g=_ref2[1],b=_ref2[2];return Number("0x".concat(getHex(r)).concat(getHex(g)).concat(getHex(b)))}(color.slice(5,-1).split(",").map((function(v){return parseInt(v,10)})));if(color.startsWith("rgb(")){var _rgbData=color.slice(5,-1).split(",").map((function(v){return parseInt(v,10)}));return pixi_js__WEBPACK_IMPORTED_MODULE_0__.P6Y.rgb2hex(_rgbData)}if(color.startsWith("hsla(")){var _colorData2$map2=_slicedToArray(color.slice(5,-1).split(",").map((function(v){return parseInt(v,10)})),3);return function hsl2Hex(h,s,l){l/=100;var a=s*Math.min(l,1-l)/100,f=function f(n){var k=(n+h/30)%12,color=l-a*Math.max(Math.min(k-3,9-k,1),-1);return Math.round(255*color).toString(16).padStart(2,"0")};return pixi_js__WEBPACK_IMPORTED_MODULE_0__.P6Y.string2hex("#".concat(f(0)).concat(f(8)).concat(f(4)))}(_colorData2$map2[0],_colorData2$map2[1],_colorData2$map2[2])}throw new Error("Unknown color format: ".concat(color));case"number":return color;default:return parseInt(color,16)}}function getHex(n){var hex=n.toString(16);return 1===hex.length?"0".concat(hex):hex}}}]);