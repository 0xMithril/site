webpackJsonp([4],{"0gMH":function(t,e,n){var i=n("laf/");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n("rjj0")("cfd69166",i,!0,{})},"2NVW":function(t,e,n){"use strict";function i(t){n("ZJEw")}var o=n("5OgL"),r=n("3fVA"),a=n("VU/8"),s=i,l=a(o.a,r.a,!1,s,null,null);e.a=l.exports},"3fVA":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[void 0===t.web3||void 0===t.web3.eth.defaultAccount?n("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[t._m(0),t._v("\n    This Dapp will only work if you have metamask installed are logged in.\n  ")]):100!==t.netId?n("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[t._m(1),t._v("\n       Mineables uses the xDai Network to keep all token mining transactions ultra-cheap! To configure Metamask to point to the xDai Chain network. ( Under 'Networks > Custom RPC', create a new network definition called "),n("strong",[t._v("'xDai Chain'")]),t._v(" using RPC "),n("strong",[t._v("https://dai.poa.network")]),t._v(" )."),n("br"),n("br"),t._v("\n       In order to fund your account with xDai, please do the following:"),n("br"),t._v(" "),n("strong",[t._v("Option A")]),t._v(" "),n("br"),t._v(" "),t._m(2),t._v(" "),n("strong",[t._v("Option B")]),t._v(" "),n("br"),t._v("\n       Hit up @lodge on the "),n("a",{attrs:{target:"_blank",href:"https://discord.gg/yckdJdw"}},[t._v("mineables discord")]),t._v(" "),n("strong",[t._v("#xdai-microdonations")]),t._v(" channel for some xDai and start mining!\n  ")]):t._e()])},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"metamask",attrs:{href:"https://metamask.io",target:"_blank"}},[n("img",{attrs:{src:"/static/icons/metamask.png"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"metamask",attrs:{href:"https://metamask.io",target:"_blank"}},[n("img",{attrs:{src:"/static/icons/metamask.png"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ol",[n("li",[t._v("On Mainnet, swap ETH with DAI. A great place to do this is at "),n("a",{attrs:{target:"_blank",href:"https://uniswap.exchange/swap"}},[t._v("https://uniswap.exchange/swap")])]),t._v(" "),n("li",[t._v("Bridge DAI tokens to xDAI tokens at "),n("a",{attrs:{target:"_blank",href:"https://dai-bridge.poa.network"}},[t._v("https://dai-bridge.poa.network")])])])}],r={render:i,staticRenderFns:o};e.a=r},"5OgL":function(t,e,n){"use strict";e.a={name:"xCheckMetamask",data:function(){return{web3:void 0}},mounted:function(){this.web3=window.web3,this.netId=window.netId}}},"8Scu":function(t,e,n){"use strict";function i(t){n("0gMH")}Object.defineProperty(e,"__esModule",{value:!0});var o=n("sUXh"),r=n("MIH1"),a=n("VU/8"),s=i,l=a(o.a,r.a,!1,s,null,null);e.default=l.exports},DAYN:function(t,e,n){"use strict";function i(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}var o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t};!function(){function e(t,e,n){return void 0==n?t:(t=null==t?{}:t,t[e]=n,t)}function r(t){function n(t){t.parentElement.removeChild(t)}function r(t,e,n){var i=0===n?t.children[0]:t.children[n-1].nextSibling;t.insertBefore(e,i)}function a(t,e){return t.map(function(t){return t.elm}).indexOf(e)}function s(t,e,n){if(!t)return[];var o=t.map(function(t){return t.elm}),r=[].concat(i(e)).map(function(t){return o.indexOf(t)});return n?r.filter(function(t){return-1!==t}):r}function l(t,e){var n=this;this.$nextTick(function(){return n.$emit(t.toLowerCase(),e)})}function c(t){var e=this;return function(n){null!==e.realList&&e["onDrag"+t](n),l.call(e,t,n)}}var u=["Start","Add","Remove","Update","End"],d=["Choose","Sort","Filter","Clone"],h=["Move"].concat(u,d).map(function(t){return"on"+t}),f=null;return{name:"draggable",props:{options:Object,list:{type:Array,required:!1,default:null},value:{type:Array,required:!1,default:null},noTransitionOnDrag:{type:Boolean,default:!1},clone:{type:Function,default:function(t){return t}},element:{type:String,default:"div"},move:{type:Function,default:null},componentData:{type:Object,required:!1,default:null}},data:function(){return{transitionMode:!1,noneFunctionalComponentMode:!1,init:!1}},render:function(t){var n=this.$slots.default;if(n&&1===n.length){var o=n[0];o.componentOptions&&"transition-group"===o.componentOptions.tag&&(this.transitionMode=!0)}var r=n,a=this.$slots.footer;a&&(r=n?[].concat(i(n),i(a)):[].concat(i(a)));var s=null,l=function(t,n){s=e(s,t,n)};if(l("attrs",this.$attrs),this.componentData){var c=this.componentData,u=c.on,d=c.props;l("on",u),l("props",d)}return t(this.element,s,r)},mounted:function(){var e=this;if(this.noneFunctionalComponentMode=this.element.toLowerCase()!==this.$el.nodeName.toLowerCase(),this.noneFunctionalComponentMode&&this.transitionMode)throw new Error("Transition-group inside component is not supported. Please alter element value or remove transition-group. Current element value: "+this.element);var n={};u.forEach(function(t){n["on"+t]=c.call(e,t)}),d.forEach(function(t){n["on"+t]=l.bind(e,t)});var i=o({},this.options,n,{onMove:function(t,n){return e.onDragMove(t,n)}});!("draggable"in i)&&(i.draggable=">*"),this._sortable=new t(this.rootContainer,i),this.computeIndexes()},beforeDestroy:function(){this._sortable.destroy()},computed:{rootContainer:function(){return this.transitionMode?this.$el.children[0]:this.$el},isCloning:function(){return!!this.options&&!!this.options.group&&"clone"===this.options.group.pull},realList:function(){return this.list?this.list:this.value}},watch:{options:{handler:function(t){for(var e in t)-1==h.indexOf(e)&&this._sortable.option(e,t[e])},deep:!0},realList:function(){this.computeIndexes()}},methods:{getChildrenNodes:function(){if(this.init||(this.noneFunctionalComponentMode=this.noneFunctionalComponentMode&&1==this.$children.length,this.init=!0),this.noneFunctionalComponentMode)return this.$children[0].$slots.default;var t=this.$slots.default;return this.transitionMode?t[0].child.$slots.default:t},computeIndexes:function(){var t=this;this.$nextTick(function(){t.visibleIndexes=s(t.getChildrenNodes(),t.rootContainer.children,t.transitionMode)})},getUnderlyingVm:function(t){var e=a(this.getChildrenNodes()||[],t);return-1===e?null:{index:e,element:this.realList[e]}},getUnderlyingPotencialDraggableComponent:function(t){var e=t.__vue__;return e&&e.$options&&"transition-group"===e.$options._componentTag?e.$parent:e},emitChanges:function(t){var e=this;this.$nextTick(function(){e.$emit("change",t)})},alterList:function(t){if(this.list)t(this.list);else{var e=[].concat(i(this.value));t(e),this.$emit("input",e)}},spliceList:function(){var t=arguments,e=function(e){return e.splice.apply(e,t)};this.alterList(e)},updatePosition:function(t,e){var n=function(n){return n.splice(e,0,n.splice(t,1)[0])};this.alterList(n)},getRelatedContextFromMoveEvent:function(t){var e=t.to,n=t.related,i=this.getUnderlyingPotencialDraggableComponent(e);if(!i)return{component:i};var r=i.realList,a={list:r,component:i};if(e!==n&&r&&i.getUnderlyingVm){var s=i.getUnderlyingVm(n);if(s)return o(s,a)}return a},getVmIndex:function(t){var e=this.visibleIndexes,n=e.length;return t>n-1?n:e[t]},getComponent:function(){return this.$slots.default[0].componentInstance},resetTransitionData:function(t){if(this.noTransitionOnDrag&&this.transitionMode){this.getChildrenNodes()[t].data=null;var e=this.getComponent();e.children=[],e.kept=void 0}},onDragStart:function(t){this.context=this.getUnderlyingVm(t.item),t.item._underlying_vm_=this.clone(this.context.element),f=t.item},onDragAdd:function(t){var e=t.item._underlying_vm_;if(void 0!==e){n(t.item);var i=this.getVmIndex(t.newIndex);this.spliceList(i,0,e),this.computeIndexes();var o={element:e,newIndex:i};this.emitChanges({added:o})}},onDragRemove:function(t){if(r(this.rootContainer,t.item,t.oldIndex),this.isCloning)return void n(t.clone);var e=this.context.index;this.spliceList(e,1);var i={element:this.context.element,oldIndex:e};this.resetTransitionData(e),this.emitChanges({removed:i})},onDragUpdate:function(t){n(t.item),r(t.from,t.item,t.oldIndex);var e=this.context.index,i=this.getVmIndex(t.newIndex);this.updatePosition(e,i);var o={element:this.context.element,oldIndex:e,newIndex:i};this.emitChanges({moved:o})},computeFutureIndex:function(t,e){if(!t.element)return 0;var n=[].concat(i(e.to.children)).filter(function(t){return"none"!==t.style.display}),o=n.indexOf(e.related),r=t.component.getVmIndex(o);return-1==n.indexOf(f)&&e.willInsertAfter?r+1:r},onDragMove:function(t,e){var n=this.move;if(!n||!this.realList)return!0;var i=this.getRelatedContextFromMoveEvent(t),r=this.context,a=this.computeFutureIndex(i,t);return o(r,{futureIndex:a}),o(t,{relatedContext:i,draggedContext:r}),n(t,e)},onDragEnd:function(t){this.computeIndexes(),f=null}}}}Array.from||(Array.from=function(t){return[].slice.call(t)});var a=n("Lokx");t.exports=r(a)}()},Lokx:function(t,e,n){var i,o;/**!
 * Sortable
 * @author	RubaXa   <trash@rubaxa.org>
 * @license MIT
 */
!function(r){"use strict";i=r,void 0!==(o="function"==typeof i?i.call(e,n,e,t):i)&&(t.exports=o)}(function(){"use strict";function t(e,n){if(!e||!e.nodeType||1!==e.nodeType)throw"Sortable: `el` must be HTMLElement, and not "+{}.toString.call(e);this.el=e,this.options=n=_({},n),e[Z]=this;var i={group:Math.random(),sort:!0,disabled:!1,store:null,handle:null,scroll:!0,scrollSensitivity:30,scrollSpeed:10,draggable:/[uo]l/i.test(e.nodeName)?"li":">*",ghostClass:"sortable-ghost",chosenClass:"sortable-chosen",dragClass:"sortable-drag",ignore:"a, img",filter:null,preventOnFilter:!0,animation:0,setData:function(t,e){t.setData("Text",e.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:"data-id",delay:0,forceFallback:!1,fallbackClass:"sortable-fallback",fallbackOnBody:!1,fallbackTolerance:0,fallbackOffset:{x:0,y:0},supportPointer:!1!==t.supportPointer};for(var o in i)!(o in n)&&(n[o]=i[o]);ut(n);for(var a in this)"_"===a.charAt(0)&&"function"==typeof this[a]&&(this[a]=this[a].bind(this));this.nativeDraggable=!n.forceFallback&&nt,r(e,"mousedown",this._onTapStart),r(e,"touchstart",this._onTapStart),n.supportPointer&&r(e,"pointerdown",this._onTapStart),this.nativeDraggable&&(r(e,"dragover",this),r(e,"dragenter",this)),lt.push(this._onDragOver),n.store&&this.sort(n.store.get(this))}function e(t,e){"clone"!==t.lastPullMode&&(e=!0),E&&E.state!==e&&(l(E,"display",e?"none":""),e||E.state&&(t.options.group.revertClone?(B.insertBefore(E,T),t._animate(w,E)):B.insertBefore(E,w)),E.state=e)}function n(t,e,n){if(t){n=n||z;do{if(">*"===e&&t.parentNode===n||v(t,e))return t}while(t=i(t))}return null}function i(t){var e=t.host;return e&&e.nodeType?e:t.parentNode}function o(t){t.dataTransfer&&(t.dataTransfer.dropEffect="move"),t.preventDefault()}function r(t,e,n){t.addEventListener(e,n,tt)}function a(t,e,n){t.removeEventListener(e,n,tt)}function s(t,e,n){if(t)if(t.classList)t.classList[n?"add":"remove"](e);else{var i=(" "+t.className+" ").replace(H," ").replace(" "+e+" "," ");t.className=(i+(n?" "+e:"")).replace(H," ")}}function l(t,e,n){var i=t&&t.style;if(i){if(void 0===n)return z.defaultView&&z.defaultView.getComputedStyle?n=z.defaultView.getComputedStyle(t,""):t.currentStyle&&(n=t.currentStyle),void 0===e?n:n[e];e in i||(e="-webkit-"+e),i[e]=n+("string"==typeof n?"":"px")}}function c(t,e,n){if(t){var i=t.getElementsByTagName(e),o=0,r=i.length;if(n)for(;o<r;o++)n(i[o],o);return i}return[]}function u(t,e,n,i,o,r,a,s){t=t||e[Z];var l=z.createEvent("Event"),c=t.options,u="on"+n.charAt(0).toUpperCase()+n.substr(1);l.initEvent(n,!0,!0),l.to=o||e,l.from=r||e,l.item=i||e,l.clone=E,l.oldIndex=a,l.newIndex=s,e.dispatchEvent(l),c[u]&&c[u].call(t,l)}function d(t,e,n,i,o,r,a,s){var l,c,u=t[Z],d=u.options.onMove;return l=z.createEvent("Event"),l.initEvent("move",!0,!0),l.to=e,l.from=t,l.dragged=n,l.draggedRect=i,l.related=o||e,l.relatedRect=r||e.getBoundingClientRect(),l.willInsertAfter=s,t.dispatchEvent(l),d&&(c=d.call(u,l,a)),c}function h(t){t.draggable=!1}function f(){ot=!1}function p(t,e){var n=t.lastElementChild,i=n.getBoundingClientRect();return e.clientY-(i.top+i.height)>5||e.clientX-(i.left+i.width)>5}function g(t){for(var e=t.tagName+t.className+t.src+t.href+t.textContent,n=e.length,i=0;n--;)i+=e.charCodeAt(n);return i.toString(36)}function m(t,e){var n=0;if(!t||!t.parentNode)return-1;for(;t&&(t=t.previousElementSibling);)"TEMPLATE"===t.nodeName.toUpperCase()||">*"!==e&&!v(t,e)||n++;return n}function v(t,e){if(t){e=e.split(".");var n=e.shift().toUpperCase(),i=new RegExp("\\s("+e.join("|")+")(?=\\s)","g");return!(""!==n&&t.nodeName.toUpperCase()!=n||e.length&&((" "+t.className+" ").match(i)||[]).length!=e.length)}return!1}function C(t,e){var n,i;return function(){void 0===n&&(n=arguments,i=this,J(function(){1===n.length?t.call(i,n[0]):t.apply(i,n),n=void 0},e))}}function _(t,e){if(t&&e)for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t}function A(t){return Q&&Q.dom?Q.dom(t).cloneNode(!0):K?K(t).clone(!0)[0]:t.cloneNode(!0)}function b(t){for(var e=t.getElementsByTagName("input"),n=e.length;n--;){var i=e[n];i.checked&&st.push(i)}}function y(t){return J(t,0)}function x(t){return clearTimeout(t)}if("undefined"==typeof window||!window.document)return function(){throw new Error("Sortable.js requires a window with a document")};var w,D,k,E,B,T,S,N,I,M,P,O,R,L,U,Y,$,F,V,j,X={},H=/\s+/g,W=/left|right|inline/,Z="Sortable"+(new Date).getTime(),q=window,z=q.document,G=q.parseInt,J=q.setTimeout,K=q.jQuery||q.Zepto,Q=q.Polymer,tt=!1,et=!1,nt="draggable"in z.createElement("div"),it=function(t){return!navigator.userAgent.match(/(?:Trident.*rv[ :]?11\.|msie)/i)&&(t=z.createElement("x"),t.style.cssText="pointer-events:auto","auto"===t.style.pointerEvents)}(),ot=!1,rt=Math.abs,at=Math.min,st=[],lt=[],ct=C(function(t,e,n){if(n&&e.scroll){var i,o,r,a,s,l,c=n[Z],u=e.scrollSensitivity,d=e.scrollSpeed,h=t.clientX,f=t.clientY,p=window.innerWidth,g=window.innerHeight;if(I!==n&&(N=e.scroll,I=n,M=e.scrollFn,!0===N)){N=n;do{if(N.offsetWidth<N.scrollWidth||N.offsetHeight<N.scrollHeight)break}while(N=N.parentNode)}N&&(i=N,o=N.getBoundingClientRect(),r=(rt(o.right-h)<=u)-(rt(o.left-h)<=u),a=(rt(o.bottom-f)<=u)-(rt(o.top-f)<=u)),r||a||(r=(p-h<=u)-(h<=u),a=(g-f<=u)-(f<=u),(r||a)&&(i=q)),X.vx===r&&X.vy===a&&X.el===i||(X.el=i,X.vx=r,X.vy=a,clearInterval(X.pid),i&&(X.pid=setInterval(function(){if(l=a?a*d:0,s=r?r*d:0,"function"==typeof M)return M.call(c,s,l,t);i===q?q.scrollTo(q.pageXOffset+s,q.pageYOffset+l):(i.scrollTop+=l,i.scrollLeft+=s)},24)))}},30),ut=function(t){function e(t,e){return void 0!==t&&!0!==t||(t=n.name),"function"==typeof t?t:function(n,i){var o=i.options.group.name;return e?t:t&&(t.join?t.indexOf(o)>-1:o==t)}}var n={},i=t.group;i&&"object"==typeof i||(i={name:i}),n.name=i.name,n.checkPull=e(i.pull,!0),n.checkPut=e(i.put),n.revertClone=i.revertClone,t.group=n};try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:function(){et=!1,tt={capture:!1,passive:et}}}))}catch(t){}return t.prototype={constructor:t,_onTapStart:function(t){var e,i=this,o=this.el,r=this.options,a=r.preventOnFilter,s=t.type,l=t.touches&&t.touches[0],c=(l||t).target,d=t.target.shadowRoot&&t.path&&t.path[0]||c,h=r.filter;if(b(o),!w&&!(/mousedown|pointerdown/.test(s)&&0!==t.button||r.disabled)&&!d.isContentEditable&&(c=n(c,r.draggable,o))&&S!==c){if(e=m(c,r.draggable),"function"==typeof h){if(h.call(this,t,c,this))return u(i,d,"filter",c,o,o,e),void(a&&t.preventDefault())}else if(h&&(h=h.split(",").some(function(t){if(t=n(d,t.trim(),o))return u(i,t,"filter",c,o,o,e),!0})))return void(a&&t.preventDefault());r.handle&&!n(d,r.handle,o)||this._prepareDragStart(t,l,c,e)}},_prepareDragStart:function(t,e,n,i){var o,a=this,l=a.el,d=a.options,f=l.ownerDocument;n&&!w&&n.parentNode===l&&(F=t,B=l,w=n,D=w.parentNode,T=w.nextSibling,S=n,Y=d.group,L=i,this._lastX=(e||t).clientX,this._lastY=(e||t).clientY,w.style["will-change"]="all",o=function(){a._disableDelayedDrag(),w.draggable=a.nativeDraggable,s(w,d.chosenClass,!0),a._triggerDragStart(t,e),u(a,B,"choose",w,B,B,L)},d.ignore.split(",").forEach(function(t){c(w,t.trim(),h)}),r(f,"mouseup",a._onDrop),r(f,"touchend",a._onDrop),r(f,"touchcancel",a._onDrop),r(f,"selectstart",a),d.supportPointer&&r(f,"pointercancel",a._onDrop),d.delay?(r(f,"mouseup",a._disableDelayedDrag),r(f,"touchend",a._disableDelayedDrag),r(f,"touchcancel",a._disableDelayedDrag),r(f,"mousemove",a._disableDelayedDrag),r(f,"touchmove",a._disableDelayedDrag),d.supportPointer&&r(f,"pointermove",a._disableDelayedDrag),a._dragStartTimer=J(o,d.delay)):o())},_disableDelayedDrag:function(){var t=this.el.ownerDocument;clearTimeout(this._dragStartTimer),a(t,"mouseup",this._disableDelayedDrag),a(t,"touchend",this._disableDelayedDrag),a(t,"touchcancel",this._disableDelayedDrag),a(t,"mousemove",this._disableDelayedDrag),a(t,"touchmove",this._disableDelayedDrag),a(t,"pointermove",this._disableDelayedDrag)},_triggerDragStart:function(t,e){e=e||("touch"==t.pointerType?t:null),e?(F={target:w,clientX:e.clientX,clientY:e.clientY},this._onDragStart(F,"touch")):this.nativeDraggable?(r(w,"dragend",this),r(B,"dragstart",this._onDragStart)):this._onDragStart(F,!0);try{z.selection?y(function(){z.selection.empty()}):window.getSelection().removeAllRanges()}catch(t){}},_dragStarted:function(){if(B&&w){var e=this.options;s(w,e.ghostClass,!0),s(w,e.dragClass,!1),t.active=this,u(this,B,"start",w,B,B,L)}else this._nulling()},_emulateDragOver:function(){if(V){if(this._lastX===V.clientX&&this._lastY===V.clientY)return;this._lastX=V.clientX,this._lastY=V.clientY,it||l(k,"display","none");var t=z.elementFromPoint(V.clientX,V.clientY),e=t,n=lt.length;if(t&&t.shadowRoot&&(t=t.shadowRoot.elementFromPoint(V.clientX,V.clientY),e=t),e)do{if(e[Z]){for(;n--;)lt[n]({clientX:V.clientX,clientY:V.clientY,target:t,rootEl:e});break}t=e}while(e=e.parentNode);it||l(k,"display","")}},_onTouchMove:function(e){if(F){var n=this.options,i=n.fallbackTolerance,o=n.fallbackOffset,r=e.touches?e.touches[0]:e,a=r.clientX-F.clientX+o.x,s=r.clientY-F.clientY+o.y,c=e.touches?"translate3d("+a+"px,"+s+"px,0)":"translate("+a+"px,"+s+"px)";if(!t.active){if(i&&at(rt(r.clientX-this._lastX),rt(r.clientY-this._lastY))<i)return;this._dragStarted()}this._appendGhost(),j=!0,V=r,l(k,"webkitTransform",c),l(k,"mozTransform",c),l(k,"msTransform",c),l(k,"transform",c),e.preventDefault()}},_appendGhost:function(){if(!k){var t,e=w.getBoundingClientRect(),n=l(w),i=this.options;k=w.cloneNode(!0),s(k,i.ghostClass,!1),s(k,i.fallbackClass,!0),s(k,i.dragClass,!0),l(k,"top",e.top-G(n.marginTop,10)),l(k,"left",e.left-G(n.marginLeft,10)),l(k,"width",e.width),l(k,"height",e.height),l(k,"opacity","0.8"),l(k,"position","fixed"),l(k,"zIndex","100000"),l(k,"pointerEvents","none"),i.fallbackOnBody&&z.body.appendChild(k)||B.appendChild(k),t=k.getBoundingClientRect(),l(k,"width",2*e.width-t.width),l(k,"height",2*e.height-t.height)}},_onDragStart:function(t,e){var n=this,i=t.dataTransfer,o=n.options;n._offUpEvents(),Y.checkPull(n,n,w,t)&&(E=A(w),E.draggable=!1,E.style["will-change"]="",l(E,"display","none"),s(E,n.options.chosenClass,!1),n._cloneId=y(function(){B.insertBefore(E,w),u(n,B,"clone",w)})),s(w,o.dragClass,!0),e?("touch"===e?(r(z,"touchmove",n._onTouchMove),r(z,"touchend",n._onDrop),r(z,"touchcancel",n._onDrop),o.supportPointer&&(r(z,"pointermove",n._onTouchMove),r(z,"pointerup",n._onDrop))):(r(z,"mousemove",n._onTouchMove),r(z,"mouseup",n._onDrop)),n._loopId=setInterval(n._emulateDragOver,50)):(i&&(i.effectAllowed="move",o.setData&&o.setData.call(n,i,w)),r(z,"drop",n),n._dragStartId=y(n._dragStarted))},_onDragOver:function(i){var o,r,a,s,c=this.el,u=this.options,h=u.group,g=t.active,m=Y===h,v=!1,C=u.sort;if(void 0!==i.preventDefault&&(i.preventDefault(),!u.dragoverBubble&&i.stopPropagation()),!w.animated&&(j=!0,g&&!u.disabled&&(m?C||(s=!B.contains(w)):$===this||(g.lastPullMode=Y.checkPull(this,g,w,i))&&h.checkPut(this,g,w,i))&&(void 0===i.rootEl||i.rootEl===this.el))){if(ct(i,u,this.el),ot)return;if(o=n(i.target,u.draggable,c),r=w.getBoundingClientRect(),$!==this&&($=this,v=!0),s)return e(g,!0),D=B,void(E||T?B.insertBefore(w,E||T):C||B.appendChild(w));if(0===c.children.length||c.children[0]===k||c===i.target&&p(c,i)){if(0!==c.children.length&&c.children[0]!==k&&c===i.target&&(o=c.lastElementChild),o){if(o.animated)return;a=o.getBoundingClientRect()}e(g,m),!1!==d(B,c,w,r,o,a,i)&&(w.contains(c)||(c.appendChild(w),D=c),this._animate(r,w),o&&this._animate(a,o))}else if(o&&!o.animated&&o!==w&&void 0!==o.parentNode[Z]){P!==o&&(P=o,O=l(o),R=l(o.parentNode)),a=o.getBoundingClientRect();var _=a.right-a.left,A=a.bottom-a.top,b=W.test(O.cssFloat+O.display)||"flex"==R.display&&0===R["flex-direction"].indexOf("row"),y=o.offsetWidth>w.offsetWidth,x=o.offsetHeight>w.offsetHeight,S=(b?(i.clientX-a.left)/_:(i.clientY-a.top)/A)>.5,N=o.nextElementSibling,I=!1;if(b){var M=w.offsetTop,L=o.offsetTop;I=M===L?o.previousElementSibling===w&&!y||S&&y:o.previousElementSibling===w||w.previousElementSibling===o?(i.clientY-a.top)/A>.5:L>M}else v||(I=N!==w&&!x||S&&x);var U=d(B,c,w,r,o,a,i,I);!1!==U&&(1!==U&&-1!==U||(I=1===U),ot=!0,J(f,30),e(g,m),w.contains(c)||(I&&!N?c.appendChild(w):o.parentNode.insertBefore(w,I?N:o)),D=w.parentNode,this._animate(r,w),this._animate(a,o))}}},_animate:function(t,e){var n=this.options.animation;if(n){var i=e.getBoundingClientRect();1===t.nodeType&&(t=t.getBoundingClientRect()),l(e,"transition","none"),l(e,"transform","translate3d("+(t.left-i.left)+"px,"+(t.top-i.top)+"px,0)"),e.offsetWidth,l(e,"transition","all "+n+"ms"),l(e,"transform","translate3d(0,0,0)"),clearTimeout(e.animated),e.animated=J(function(){l(e,"transition",""),l(e,"transform",""),e.animated=!1},n)}},_offUpEvents:function(){var t=this.el.ownerDocument;a(z,"touchmove",this._onTouchMove),a(z,"pointermove",this._onTouchMove),a(t,"mouseup",this._onDrop),a(t,"touchend",this._onDrop),a(t,"pointerup",this._onDrop),a(t,"touchcancel",this._onDrop),a(t,"pointercancel",this._onDrop),a(t,"selectstart",this)},_onDrop:function(e){var n=this.el,i=this.options;clearInterval(this._loopId),clearInterval(X.pid),clearTimeout(this._dragStartTimer),x(this._cloneId),x(this._dragStartId),a(z,"mouseover",this),a(z,"mousemove",this._onTouchMove),this.nativeDraggable&&(a(z,"drop",this),a(n,"dragstart",this._onDragStart)),this._offUpEvents(),e&&(j&&(e.preventDefault(),!i.dropBubble&&e.stopPropagation()),k&&k.parentNode&&k.parentNode.removeChild(k),B!==D&&"clone"===t.active.lastPullMode||E&&E.parentNode&&E.parentNode.removeChild(E),w&&(this.nativeDraggable&&a(w,"dragend",this),h(w),w.style["will-change"]="",s(w,this.options.ghostClass,!1),s(w,this.options.chosenClass,!1),u(this,B,"unchoose",w,D,B,L),B!==D?(U=m(w,i.draggable))>=0&&(u(null,D,"add",w,D,B,L,U),u(this,B,"remove",w,D,B,L,U),u(null,D,"sort",w,D,B,L,U),u(this,B,"sort",w,D,B,L,U)):w.nextSibling!==T&&(U=m(w,i.draggable))>=0&&(u(this,B,"update",w,D,B,L,U),u(this,B,"sort",w,D,B,L,U)),t.active&&(null!=U&&-1!==U||(U=L),u(this,B,"end",w,D,B,L,U),this.save()))),this._nulling()},_nulling:function(){B=w=D=k=T=E=S=N=I=F=V=j=U=P=O=$=Y=t.active=null,st.forEach(function(t){t.checked=!0}),st.length=0},handleEvent:function(t){switch(t.type){case"drop":case"dragend":this._onDrop(t);break;case"dragover":case"dragenter":w&&(this._onDragOver(t),o(t));break;case"mouseover":this._onDrop(t);break;case"selectstart":t.preventDefault()}},toArray:function(){for(var t,e=[],i=this.el.children,o=0,r=i.length,a=this.options;o<r;o++)t=i[o],n(t,a.draggable,this.el)&&e.push(t.getAttribute(a.dataIdAttr)||g(t));return e},sort:function(t){var e={},i=this.el;this.toArray().forEach(function(t,o){var r=i.children[o];n(r,this.options.draggable,i)&&(e[t]=r)},this),t.forEach(function(t){e[t]&&(i.removeChild(e[t]),i.appendChild(e[t]))})},save:function(){var t=this.options.store;t&&t.set(this)},closest:function(t,e){return n(t,e||this.options.draggable,this.el)},option:function(t,e){var n=this.options;if(void 0===e)return n[t];n[t]=e,"group"===t&&ut(n)},destroy:function(){var t=this.el;t[Z]=null,a(t,"mousedown",this._onTapStart),a(t,"touchstart",this._onTapStart),a(t,"pointerdown",this._onTapStart),this.nativeDraggable&&(a(t,"dragover",this),a(t,"dragenter",this)),Array.prototype.forEach.call(t.querySelectorAll("[draggable]"),function(t){t.removeAttribute("draggable")}),lt.splice(lt.indexOf(this._onDragOver),1),this._onDrop(),this.el=t=null}},r(z,"touchmove",function(e){t.active&&e.preventDefault()}),t.utils={on:r,off:a,css:l,find:c,is:function(t,e){return!!n(t,e,t)},extend:_,throttle:C,closest:n,toggleClass:s,clone:A,index:m,nextTick:y,cancelNextTick:x},t.create=function(e,n){return new t(e,n)},t.version="1.7.0",t})},MIH1:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"container"},[n("x-check-metamask"),t._v(" "),n("h2",{staticClass:"header-text"},[t._v("Virtual GPU Statistics")]),t._v(" "),n("div",{staticClass:"card market-card"},[n("h3",{staticClass:"card-title price-wrap"},[n("h4",{staticClass:"float-left"},[t._v(t._s(t.result.name)+" ")])]),t._v(" "),n("div",{staticClass:"card-body"},[n("img",{staticClass:"card-img-top float-left",attrs:{src:t.result.metadata.image,alt:"Card image cap"}}),t._v(" "),n("p",{staticClass:"card-text"},[t._v("Remaining cycles: "+t._s(t.result.life))]),t._v(" "),t._l(t.result.modifiers,function(e){return n("p",{staticClass:"card-text modifier"},[t._v(t._s(e))])}),t._v(" "),n("br"),t._v(" "),n("span",{staticClass:"uid"},[t._v("uid: "+t._s(t.result.id)+" ")])],2)])],1)},o=[],r={render:i,staticRenderFns:o};e.a=r},ZJEw:function(t,e,n){var i=n("ZxP4");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n("rjj0")("3113b16a",i,!0,{})},ZxP4:function(t,e,n){e=t.exports=n("FZ+f")(!0),e.push([t.i,".metamask{float:left;padding-right:1em}","",{version:3,sources:["/Users/logelj1/Documents/playground/0xMithril/site/site/src/components/CheckMetamask.vue"],names:[],mappings:"AACA,UACE,WAAY,AACZ,iBAAmB,CACpB",file:"CheckMetamask.vue",sourcesContent:["\n.metamask {\n  float: left;\n  padding-right: 1em;\n}\n"],sourceRoot:""}])},"laf/":function(t,e,n){e=t.exports=n("FZ+f")(!0),e.push([t.i,".vrig{padding:20px;background-color:#d0f0e9;border:2px dashed #000}.uid{color:#d3d3d3;float:right}.uid:hover{color:#000}.tengwar{font-family:TengwarAnnatarGlaemscrafu;font-size:110%;line-height:1.5;text-decoration:none;font-weight:400!important}.price{color:#f36236;font-weight:700;font-size:120%}.price-wrap{text-align:right;padding:15px;background-color:#edffff}.card-img-top{max-width:160px;display:block;margin-left:auto;margin-right:auto;width:50%}.float-left{float:left}.no-bullets{list-style-type:none}","",{version:3,sources:["/Users/logelj1/Documents/playground/0xMithril/site/site/src/views/Vgpu.vue"],names:[],mappings:"AACA,MACE,aAAc,AACd,yBAA0B,AAC1B,sBAAyB,CAC1B,AACD,KACE,cAAiB,AACjB,WAAa,CACd,AACD,WACE,UAAa,CACd,AACD,SACE,sCAAuC,AACvC,eAAgB,AAChB,gBAAiB,AACjB,qBAAsB,AACtB,yBAA2B,CAC5B,AACD,OACE,cAAe,AACf,gBAAkB,AAClB,cAAgB,CACjB,AACD,YACE,iBAAkB,AAClB,aAAc,AACd,wBAA0B,CAC3B,AACD,cACE,gBAAiB,AACjB,cAAe,AACf,iBAAkB,AAClB,kBAAmB,AACnB,SAAW,CACZ,AACD,YACE,UAAY,CACb,AACD,YACE,oBAAsB,CACvB",file:"Vgpu.vue",sourcesContent:["\n.vrig {\n  padding: 20px;\n  background-color: #d0f0e9;\n  border: 2px dashed black;\n}\n.uid {\n  color: lightgray;\n  float: right;\n}\n.uid:hover {\n  color: black;\n}\n.tengwar {\n  font-family: TengwarAnnatarGlaemscrafu;\n  font-size: 110%;\n  line-height: 1.5;\n  text-decoration: none;\n  font-weight: 400!important;\n}\n.price {\n  color: #f36236;\n  font-weight: bold;\n  font-size: 120%;\n}\n.price-wrap {\n  text-align: right;\n  padding: 15px;\n  background-color: #edffff;\n}\n.card-img-top {\n  max-width: 160px;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 50%;\n}\n.float-left {\n  float: left;\n}\n.no-bullets {\n  list-style-type: none;\n}\n\n\n"],sourceRoot:""}])},sUXh:function(t,e,n){"use strict";function i(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,n){function i(o,r){try{var a=e[o](r),s=a.value}catch(t){return void n(t)}if(!a.done)return Promise.resolve(s).then(function(t){i("next",t)},function(t){i("throw",t)});t(s)}return i("next")})}}var o=n("DAYN"),r=n.n(o),a=n("2NVW");e.a={name:"Vrig",components:{draggable:r.a,xCheckMetamask:a.a},data:function(){return{id:this.$route.params.id,result:""}},methods:{loadVgpu:function(){function t(t){return e.apply(this,arguments)}var e=i(regeneratorRuntime.mark(function t(e){var n,i,o,r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.vgpuContract.artifactAt(e);case 2:return n=t.sent,i={},i.id=e.toNumber(),i.name=n[0],t.next=8,this.vgpuContract.tokenURI(i.id);case 8:return i.tokenURI=t.sent,t.next=11,fetch(i.tokenURI);case 11:return t.next=13,t.sent.json();case 13:for(i.metadata=t.sent,i.parent=n[1].toNumber(),i.life=parseInt(n[2]),o=n[3],i.modifiers=[],r=0;r<o.length;r++)i.modifiers.push(this.parseModifier(o[r]));this.result=i;case 20:case"end":return t.stop()}},t,this)}));return t}(),parseModifier:function(t){var e=this.parseCommand(t),n=e[0],i=e[2],o=e[3];return 1===i?"[+] Adds "+o+" to "+this.getPositionName(n):2===i?"[-] Subtracts "+o+" from "+this.getPositionName(n):3===i?"[*] Multiplies "+this.getPositionName(n)+" by "+o:4===i?"[/] Divides "+this.getPositionName(n)+" by "+o:5===i?"[+%] Adds "+o+"% to "+this.getPositionName(n):6===i?"[-%] Subtracts "+o+"% from "+this.getPositionName(n):7===i?"Requires "+this.getPositionName(n)+" > "+o:8===i?"Requires "+this.getPositionName(n)+" < "+o:9===i?"Adds "+this.parseExponent(o)+" to "+this.getPositionName(n):void 0},parseCommand:function(t){var e=String(t),n=e.substring(1,3),i=e.substring(3),o=i.substring(0,1),r=i.substring(1,4);return[Number(n),Number(i),Number(o),Number(r)]},getPositionName:function(t){return 0===t?"Experience":1===t?"Life Decrement":2===t?"Execution Cost":3===t?"Socket Count":4===t?"Virtual Hash Rate":5===t?"Accuracy":6===t?"Level":"["+t+"]"},parseExponent:function(t){var e=String(t),n=e.substring(0,1),i=e.substring(1,3);return Number(n)*Math.pow(10,Number(i))}},mounted:function(){function t(){return e.apply(this,arguments)}var e=i(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.loadVgpu(this.id);case 2:case"end":return t.stop()}},t,this)}));return t}()}}});
//# sourceMappingURL=4.14891c87062fd7da6205.js.map