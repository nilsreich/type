!function(t){function e(i){if(s[i])return s[i].exports;var n=s[i]={i:i,l:!1,exports:{}};return t[i].call(n.exports,n,n.exports,e),n.l=!0,n.exports}var s={};e.m=t,e.c=s,e.d=function(t,s,i){e.o(t,s)||Object.defineProperty(t,s,{enumerable:!0,get:i})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,s){if(1&s&&(t=e(t)),8&s)return t;if(4&s&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(e.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&s&&"string"!=typeof t)for(var n in t)e.d(i,n,function(e){return t[e]}.bind(null,n));return i},e.n=function(t){var s=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(s,"a",s),s},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=0)}([function(t,e,s){"use strict";
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */function i(t){let e=M.get(t.type);void 0===e&&(e=new Map,M.set(t.type,e));let s=e.get(t.strings);return void 0===s&&(s=new m(t,t.getTemplateElement()),e.set(t.strings,s)),s}function n(t,e){const{element:{content:s},parts:i}=t,n=document.createTreeWalker(s,k,null,!1);let o=$(i),r=i[o],a=-1,l=0;const c=[];for(let t=null;n.nextNode();){a++;const s=n.currentNode;for(s.previousSibling===t&&(t=null),e.has(s)&&(c.push(s),null===t&&(t=s)),null!==t&&l++;void 0!==r&&r.index===a;)r.index=null===t?r.index-l:-1,r=i[o=$(i,o)]}c.forEach(t=>t.parentNode.removeChild(t))}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
function o(t){return e=>(s,i)=>{Object.defineProperty(s,i,{get(){return t(this.renderRoot,e)},enumerable:!0,configurable:!0})}}s.r(e);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const r=new WeakMap,a=t=>"function"==typeof t&&r.has(t),l=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,c=(t,e,s=null)=>{for(let i=e;i!==s;){const e=i.nextSibling;t.removeChild(i),i=e}},h={},d=`{{lit-${(Math.random()+"").slice(2)}}}`,p=`\x3c!--${d}--\x3e`,u=new RegExp(`${d}|${p}`),f=(()=>{const t=document.createElement("div");return t.setAttribute("style","{{bad value}}"),"{{bad value}}"!==t.getAttribute("style")})();
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */class m{constructor(t,e){this.parts=[],this.element=e;let s=-1,i=0;const n=[],o=e=>{const r=e.content,a=document.createTreeWalker(r,133,null,!1);for(let e,r;a.nextNode();){s++,e=r;const l=r=a.currentNode;if(1===l.nodeType){if(l.hasAttributes()){const e=l.attributes;let n=0;for(let t=0;t<e.length;t++)0<=e[t].value.indexOf(d)&&n++;for(;0<n--;){const e=t.strings[i],n=v.exec(e)[2],o=f&&"style"===n?"style$":/^[a-zA-Z-]*$/.test(n)?n:n.toLowerCase(),r=l.getAttribute(o).split(u);this.parts.push({type:"attribute",index:s,name:n,strings:r}),l.removeAttribute(o),i+=r.length-1}}"TEMPLATE"===l.tagName&&o(l)}else if(3===l.nodeType){const t=l.nodeValue;if(0>t.indexOf(d))continue;const e=l.parentNode,o=t.split(u),r=o.length-1;i+=r;for(let t=0;t<r;t++)e.insertBefore(""===o[t]?y():document.createTextNode(o[t]),l),this.parts.push({type:"node",index:s++});e.insertBefore(""===o[r]?y():document.createTextNode(o[r]),l),n.push(l)}else if(8===l.nodeType)if(l.nodeValue===d){const t=l.parentNode,o=l.previousSibling;null===o||o!==e||o.nodeType!==Node.TEXT_NODE?t.insertBefore(y(),l):s--,this.parts.push({type:"node",index:s++}),n.push(l),null===l.nextSibling?t.insertBefore(y(),l):s--,r=e,i++}else for(let t=-1;-1!==(t=l.nodeValue.indexOf(d,t+1));)this.parts.push({type:"node",index:-1})}};o(e);for(const t of n)t.parentNode.removeChild(t)}}const _=t=>-1!==t.index,y=()=>document.createComment(""),v=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F \x09\x0a\x0c\x0d"'>=\/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */class g{constructor(t,e,s){this._parts=[],this.template=t,this.processor=e,this.options=s}update(t){let e=0;for(const s of this._parts)void 0!==s&&s.setValue(t[e]),e++;for(const t of this._parts)void 0!==t&&t.commit()}_clone(){const t=l?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=this.template.parts;let s=0,i=0;const n=t=>{const o=document.createTreeWalker(t,133,null,!1);for(let t=o.nextNode();s<e.length&&null!==t;){const r=e[s];if(_(r))if(i===r.index){if("node"===r.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(t),this._parts.push(e)}else this._parts.push(...this.processor.handleAttributeExpressions(t,r.name,r.strings,this.options));s++}else i++,"TEMPLATE"===t.nodeName&&n(t.content),t=o.nextNode();else this._parts.push(void 0),s++}};return n(t),l&&(document.adoptNode(t),customElements.upgrade(t)),t
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */}}class b{constructor(t,e,s,i){this.strings=t,this.values=e,this.type=s,this.processor=i}getHTML(){const t=this.strings.length-1;let e="",s=!0;for(let i=0;i<t;i++){const t=this.strings[i];e+=t;const n=t.lastIndexOf(">");!(s=(-1<n||s)&&-1===t.indexOf("<",n+1))&&f&&(e=e.replace(v,(t,e,s,i)=>"style"===s?`${e}style$${i}`:t)),e+=s?p:d}return e+=this.strings[t]}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const w=t=>null===t||"object"!=typeof t&&"function"!=typeof t;class P{constructor(t,e,s){this.dirty=!0,this.element=t,this.name=e,this.strings=s,this.parts=[];for(let t=0;t<s.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new x(this)}_getValue(){const t=this.strings,e=t.length-1;let s="";for(let i=0;i<e;i++){s+=t[i];const e=this.parts[i];if(void 0!==e){const t=e.value;if(null!=t&&(Array.isArray(t)||"string"!=typeof t&&t[Symbol.iterator]))for(const e of t)s+="string"==typeof e?e:e+"";else s+="string"==typeof t?t:t+""}}return s+=t[e]}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class x{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===h||w(t)&&t===this.value||(this.value=t,!a(t)&&(this.committer.dirty=!0))}commit(){for(;a(this.value);){const t=this.value;this.value=h,t(this)}this.value===h||this.committer.commit()}}class N{constructor(t){this.value=void 0,this._pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(y()),this.endNode=t.appendChild(y())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t._insert(this.startNode=y()),t._insert(this.endNode=y())}insertAfterPart(t){t._insert(this.startNode=y()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this._pendingValue=t}commit(){for(;a(this._pendingValue);){const t=this._pendingValue;this._pendingValue=h,t(this)}const t=this._pendingValue;t===h||(w(t)?t!==this.value&&this._commitText(t):t instanceof b?this._commitTemplateResult(t):t instanceof Node?this._commitNode(t):Array.isArray(t)||t[Symbol.iterator]?this._commitIterable(t):void 0===t.then?this._commitText(t):this._commitPromise(t))}_insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}_commitNode(t){this.value===t||(this.clear(),this._insert(t),this.value=t)}_commitText(t){const e=this.startNode.nextSibling;t=null==t?"":t,e===this.endNode.previousSibling&&e.nodeType===Node.TEXT_NODE?e.textContent=t:this._commitNode(document.createTextNode("string"==typeof t?t:t+"")),this.value=t}_commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value&&this.value.template===e)this.value.update(t.values);else{const s=new g(e,t.processor,this.options),i=s._clone();s.update(t.values),this._commitNode(i),this.value=s}}_commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let s,i=0;for(const n of t)void 0===(s=e[i])&&(s=new N(this.options),e.push(s),0==i?s.appendIntoPart(this):s.insertAfterPart(e[i-1])),s.setValue(n),s.commit(),i++;i<e.length&&(e.length=i,this.clear(s&&s.endNode))}_commitPromise(t){this.value=t,t.then(e=>{this.value===t&&(this.setValue(e),this.commit())})}clear(t=this.startNode){c(this.startNode.parentNode,t.nextSibling,this.endNode)}}class S{constructor(t,e,s){if(this.value=void 0,this._pendingValue=void 0,2!==s.length||""!==s[0]||""!==s[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=s}setValue(t){this._pendingValue=t}commit(){for(;a(this._pendingValue);){const t=this._pendingValue;this._pendingValue=h,t(this)}if(this._pendingValue!==h){const t=!!this._pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)),this.value=t,this._pendingValue=h}}}class T extends P{constructor(t,e,s){super(t,e,s),this.single=2===s.length&&""===s[0]&&""===s[1]}_createPart(){return new E(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class E extends x{}let C=!1;try{const e={get capture(){return C=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(t){}class V{constructor(t,e,s){this.value=void 0,this._pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=s,this._boundHandleEvent=(t=>this.handleEvent(t))}setValue(t){this._pendingValue=t}commit(){for(;a(this._pendingValue);){const t=this._pendingValue;this._pendingValue=h,t(this)}if(this._pendingValue!==h){const t=this._pendingValue,e=this.value,s=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive);s&&this.element.removeEventListener(this.eventName,this._boundHandleEvent,this._options),this._options=O(t),null!=t&&(null==e||s)&&this.element.addEventListener(this.eventName,this._boundHandleEvent,this._options),this.value=t,this._pendingValue=h}}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const O=t=>t&&(C?{capture:t.capture,passive:t.passive,once:t.once}:t.capture),A=new class{handleAttributeExpressions(t,e,s,i){const n=e[0];if("."===n){return new T(t,e.slice(1),s).parts}return"@"===n?[new V(t,e.slice(1),i.eventContext)]:"?"===n?[new S(t,e.slice(1),s)]:new P(t,e,s).parts}handleTextExpression(t){return new N(t)}},M=new Map,j=new WeakMap,R=(t,e,s)=>{let n=j.get(e);void 0===n&&(c(e,e.firstChild),j.set(e,n=new N(Object.assign({templateFactory:i},s))),n.appendInto(e)),n.setValue(t),n.commit()},F=(t,...e)=>new b(t,e,"html",A),k=NodeFilter.SHOW_ELEMENT|NodeFilter.SHOW_COMMENT|NodeFilter.SHOW_TEXT,U=t=>{let e=t.nodeType===Node.DOCUMENT_FRAGMENT_NODE?0:1;for(const s=document.createTreeWalker(t,k,null,!1);s.nextNode();)e++;return e},$=(t,e=-1)=>{for(let s=e+1;s<t.length;s++){const e=t[s];if(_(e))return s}return-1},L=(t,e)=>`${t}--${e}`
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */let q=!0;void 0===window.ShadyCSS?q=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected.Please update to at least @webcomponents/webcomponentsjs@2.0.2 and@webcomponents/shadycss@1.3.1."),q=!1);const z=t=>e=>{const s=L(e.type,t);let i=M.get(s);void 0===i&&(i=new Map,M.set(s,i));let n=i.get(e.strings);if(void 0===n){const s=e.getTemplateElement();q&&window.ShadyCSS.prepareTemplateDom(s,t),n=new m(e,s),i.set(e.strings,n)}return n},H=["html","svg"],I=new Set,W=(t,e,s)=>{I.add(s);const i=t.querySelectorAll("style");if(0!==i.length){const o=document.createElement("style");for(let t=0;t<i.length;t++){const e=i[t];e.parentNode.removeChild(e),o.textContent+=e.textContent}if((t=>{H.forEach(e=>{const s=M.get(L(e,t));void 0!==s&&s.forEach(t=>{const{element:{content:e}}=t,s=new Set;Array.from(e.querySelectorAll("style")).forEach(t=>{s.add(t)}),n(t,s)})})})(s),function(t,e,s=null){const{element:{content:i},parts:n}=t;if(null==s)return void i.appendChild(e);const o=document.createTreeWalker(i,k,null,!1);for(let t=$(n),i=0,r=-1;o.nextNode();)for(r++,o.currentNode===s&&(i=U(e),s.parentNode.insertBefore(e,s));-1!==t&&n[t].index===r;){if(0<i){for(;-1!==t;)n[t].index+=i,t=$(n,t);return}t=$(n,t)}}(e,o,e.element.content.firstChild),window.ShadyCSS.prepareTemplateStyles(e.element,s),window.ShadyCSS.nativeShadow){const s=e.element.content.querySelector("style");t.insertBefore(s.cloneNode(!0),t.firstChild)}else{e.element.content.insertBefore(o,e.element.content.firstChild);const t=new Set;t.add(o),n(e,t)}}},B=t=>null!==t,D=t=>t?"":null,X=(t,e)=>e!==t&&(e==e||t==t),G={attribute:!0,type:String,reflect:!1,hasChanged:X},Z=new Promise(t=>t(!0)),J=1,K=4,Q=8;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */class Y extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=Z,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this._finalize();const t=[];for(const[e,s]of this._classProperties){const i=this._attributeNameForProperty(e,s);void 0!==i&&(this._attributeToPropertyMap.set(i,e),t.push(i))}return t}static createProperty(t,e=G){if(!this.hasOwnProperty("_classProperties")){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,e)=>this._classProperties.set(e,t))}if(this._classProperties.set(t,e),this.prototype.hasOwnProperty(t))return;const s="symbol"==typeof t?Symbol():`__${t}`;Object.defineProperty(this.prototype,t,{get(){return this[s]},set(i){const n=this[t];this[s]=i,this._requestPropertyUpdate(t,n,e)},configurable:!0,enumerable:!0})}static _finalize(){if(!this.hasOwnProperty("_finalized")||!this._finalized){const t=Object.getPrototypeOf(this);"function"==typeof t._finalize&&t._finalize(),this._finalized=!0,this._attributeToPropertyMap=new Map;const e=this.properties,s=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const t of s)this.createProperty(t,e[t])}}static _attributeNameForProperty(t,e){const s=void 0!==e&&e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,s=X){return s(t,e)}static _propertyValueFromAttribute(t,e){const s=e&&e.type;if(void 0===s)return t;const i=s===Boolean?B:"function"==typeof s?s:s.fromAttribute;return i?i(t):t}static _propertyValueToAttribute(t,e){if(void 0!==e&&void 0!==e.reflect){return(e.type===Boolean?D:e.type&&e.type.toAttribute||String)(t)}}initialize(){this.renderRoot=this.createRenderRoot(),this._saveInstanceProperties()}_saveInstanceProperties(){for(const[t]of this.constructor._classProperties)if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}}_applyInstanceProperties(){for(const[t,e]of this._instanceProperties)this[t]=e;this._instanceProperties=void 0}createRenderRoot(){return this.attachShadow({mode:"open"})}connectedCallback(){this._updateState&J?void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this):this.requestUpdate()}disconnectedCallback(){}attributeChangedCallback(t,e,s){e!==s&&this._attributeToProperty(t,s)}_propertyToAttribute(t,e,s=G){const i=this.constructor,n=i._propertyValueToAttribute(e,s);if(void 0!==n){const e=i._attributeNameForProperty(t,s);void 0!==e&&(this._updateState|=Q,null===n?this.removeAttribute(e):this.setAttribute(e,n),this._updateState&=~Q)}}_attributeToProperty(t,e){if(!(this._updateState&Q)){const s=this.constructor,i=s._attributeToPropertyMap.get(t);if(void 0!==i){const t=s._classProperties.get(i);this[i]=s._propertyValueFromAttribute(e,t)}}}requestUpdate(t,e){if(void 0!==t){const s=this.constructor._classProperties.get(t)||G;return this._requestPropertyUpdate(t,e,s)}return this._invalidate()}_requestPropertyUpdate(t,e,s){return this.constructor._valueHasChanged(this[t],e,s.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0===s.reflect&&(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,s)),this._invalidate()):this.updateComplete}async _invalidate(){if(!this._hasRequestedUpdate){let t;this._updateState|=K;const e=this._updatePromise;this._updatePromise=new Promise(e=>t=e),await e,this._validate(),t(!this._hasRequestedUpdate)}return this.updateComplete}get _hasRequestedUpdate(){return this._updateState&K}_validate(){if(this._instanceProperties&&this._applyInstanceProperties(),this.shouldUpdate(this._changedProperties)){const t=this._changedProperties;this.update(t),this._markUpdated(),this._updateState&J||(this._updateState|=J,this.firstUpdated(t)),this.updated(t)}else this._markUpdated()}_markUpdated(){this._changedProperties=new Map,this._updateState&=~K}get updateComplete(){return this._updatePromise}shouldUpdate(){return!0}update(){if(void 0!==this._reflectingProperties&&0<this._reflectingProperties.size){for(const[t,e]of this._reflectingProperties)this._propertyToAttribute(t,this[t],e);this._reflectingProperties=void 0}}updated(){}firstUpdated(){}}Y._attributeToPropertyMap=new Map,Y._finalized=!0,Y._classProperties=new Map,Y.properties={};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const tt=t=>(e,s)=>{e.constructor.createProperty(s,t)};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */o((t,e)=>t.querySelector(e)),o((t,e)=>t.querySelectorAll(e));class et extends Y{update(t){super.update(t);const e=this.render();e instanceof b&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this})}render(){}}et.render=((t,e,s)=>{const i=s.scopeName,n=j.has(e);if(R(t,e,Object.assign({templateFactory:z(i)},s)),e instanceof ShadowRoot&&q&&t instanceof b){if(!I.has(i)){const t=j.get(e).value;W(e,t.template,i)}n||window.ShadyCSS.styleElement(e.host)}});var st=function(t,e,s,i){var n,o=arguments.length,r=3>o?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,s,i);else for(var a=t.length-1;0<=a;a--)(n=t[a])&&(r=(3>o?n(r):3<o?n(e,s,r):n(e,s))||r);return 3<o&&r&&Object.defineProperty(e,s,r),r};class it extends et{constructor(){super(),this.foo="foo",this.whales=5,this.addEventListener("click",async()=>{this.whales++,await this.updateComplete,this.dispatchEvent(new CustomEvent("whales",{detail:{whales:this.whales}}))})}render(){return F`
      <style>
        :host {
          display: block;
        }
        :host([hidden]) {
          display: none;
        }
      </style>
      <h4>Foo: ${this.foo}</h4>
      <div>Wale: ${"🐳".repeat(this.whales)}</div>
      <slot></slot>
    `}}st([tt()],it.prototype,"foo",void 0),st([tt({type:Number})],it.prototype,"whales",void 0),customElements.define("my-app",it)}]);