var SLDS=SLDS||{};SLDS["__internal/chunked/showcase/ui/components/color-picker/custom-only/example.jsx.js"]=function(e){function t(t){for(var n,u,a=t[0],l=t[1],c=t[2],p=0,f=[];p<a.length;p++)u=a[p],o[u]&&f.push(o[u][0]),o[u]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);for(i&&i(t);f.length;)f.shift()();return s.push.apply(s,c||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],n=!0,a=1;a<r.length;a++){var l=r[a];0!==o[l]&&(n=!1)}n&&(s.splice(t--,1),e=u(u.s=r[0]))}return e}var n={},o={3:0,4:0,5:0,11:0,12:0,17:0,26:0,32:0,35:0,38:0,40:0,45:0,48:0,49:0,53:0,54:0,57:0,60:0,62:0,64:0,65:0,70:0,72:0,73:0,78:0,84:0,85:0,88:0,89:0,95:0,98:0,99:0,105:0,106:0,107:0,108:0,109:0,110:0,114:0,117:0,118:0,129:0,137:0,141:0,143:0,144:0,145:0,150:0,153:0,154:0},s=[];function u(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.m=e,u.c=n,u.d=function(e,t,r){u.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},u.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},u.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/assets/scripts/bundle/";var a=this.webpackJsonpSLDS___internal_chunked_showcase=this.webpackJsonpSLDS___internal_chunked_showcase||[],l=a.push.bind(a);a.push=t,a=a.slice();for(var c=0;c<a.length;c++)t(a[c]);var i=l;return s.push([59,0]),r()}({0:function(e,t){e.exports=React},59:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.states=void 0;var n=s(r(0)),o=s(r(21));function s(e){return e&&e.__esModule?e:{default:e}}t.default=n.default.createElement(o.default,{hasPredefined:!1});t.states=[{id:"custom-color-picker-open",label:"Open",element:n.default.createElement(o.default,{isOpen:!0,hasPredefined:!1})},{id:"custom-color-picker-open-error",label:"Open with Error",element:n.default.createElement(o.default,{isOpen:!0,hasCustomError:!0,hasPredefined:!1})}]}});