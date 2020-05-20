var SLDS=SLDS||{};SLDS["__internal/chunked/showcase/ui/components/panels/base/example.jsx.js"]=function(e){function t(t){for(var l,a,s=t[0],o=t[1],d=t[2],c=0,f=[];c<s.length;c++)a=s[c],i[a]&&f.push(i[a][0]),i[a]=0;for(l in o)Object.prototype.hasOwnProperty.call(o,l)&&(e[l]=o[l]);for(u&&u(t);f.length;)f.shift()();return r.push.apply(r,d||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],l=!0,s=1;s<n.length;s++){var o=n[s];0!==i[o]&&(l=!1)}l&&(r.splice(t--,1),e=a(a.s=n[0]))}return e}var l={},i={58:0,4:0,5:0,11:0,12:0,17:0,26:0,32:0,35:0,38:0,40:0,45:0,48:0,49:0,53:0,54:0,57:0,60:0,62:0,64:0,65:0,70:0,72:0,73:0,78:0,84:0,85:0,88:0,89:0,95:0,98:0,99:0,105:0,106:0,107:0,108:0,109:0,110:0,114:0,117:0,118:0,129:0,137:0,141:0,143:0,144:0,145:0,150:0,153:0,154:0},r=[];function a(t){if(l[t])return l[t].exports;var n=l[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=l,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},a.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/assets/scripts/bundle/";var s=this.webpackJsonpSLDS___internal_chunked_showcase=this.webpackJsonpSLDS___internal_chunked_showcase||[],o=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var u=o;return r.push([110,0]),n()}({0:function(e,t){e.exports=React},109:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.PanelPlayground=t.Header=t.Container=void 0;var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var l=t[n];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,n,l){return n&&e(t.prototype,n),l&&e(t,l),t}}(),i=n(0),r=d(i),a=d(n(6)),s=d(n(1)),o=d(n(3));function d(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function f(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var p=t.Container=function(e){return r.default.createElement("div",{className:(0,s.default)("slds-panel",e.size&&"slds-size_"+e.size,e.docked&&"slds-panel_docked slds-panel_docked-"+e.docked,"drill-in"===e.invoke&&"slds-is-directional",e.drawer&&"slds-panel_drawer",e.isVisible&&"slds-is-open",e.className),"aria-hidden":!e.isVisible},e.children)},h=t.Header=function(e){var t="close";return"drill-in"===e.invoke&&("left"===e.docked?t="back":"right"===e.docked&&(t="forward")),r.default.createElement("div",{className:(0,s.default)("slds-panel__header",e.customHeader&&"slds-panel__header_custom")},e.customHeader?e.customHeader:[r.default.createElement("h2",{className:"slds-panel__header-title slds-text-heading_small",key:"panel-header-title"},e.title),r.default.createElement(o.default,{key:"panel-header-close-button",className:"slds-panel__close slds-button_icon-small",symbol:t,assistiveText:"Close Filter Panel",title:"Close Filter Panel",onClick:function(){return e.handleVisibility()}})])},b=function(e){return r.default.createElement("div",{className:"slds-panel__body"},e.children)},m=function(e){function t(){return u(this,t),c(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return f(t,i.Component),l(t,[{key:"render",value:function(){var e=this.props,t=e.size,n=e.title,l=e.docked,i=e.invoke,a=e.drawer,s=e.isVisible,o=void 0===s||s,d=e.handleVisibility,u=e.customHeader,c=e.children;return r.default.createElement(p,{docked:l,drawer:a,size:t,invoke:i,isVisible:o},r.default.createElement(h,{title:n,docked:l,invoke:i,customHeader:u,handleVisibility:d}),r.default.createElement(b,null,c))}}]),t}();m.propTypes={size:a.default.oneOf(["small","medium","large","x-large","full"]),docked:a.default.oneOf(["left","right","bottom"]),invoke:a.default.oneOf(["drill-in","toggle"])},t.default=m;t.PanelPlayground=function(e){function t(){u(this,t);var e=c(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.handleVisibility=e.handleVisibility.bind(e),e.state={visible:!0},e}return f(t,i.Component),l(t,[{key:"handleVisibility",value:function(){this.setState({visible:!this.state.visible})}},{key:"render",value:function(){var e=this,t=this.props,n=t.size,l=void 0===n?"medium":n,i=t.title,a=void 0===i?"Panel Header":i,s=t.docked,d=void 0===s?"left":s,u=t.invoke,c=void 0===u?"toggle":u,f=t.drawer;return r.default.createElement("div",{className:"docs-codeblock-example"},r.default.createElement("header",{className:"slds-size_1-of-1 slds-is-relative slds-theme_default slds-border_bottom slds-p-around_small",style:{zIndex:"1"}},r.default.createElement(o.default,{theme:"neutral",selected:this.state.visible,symbol:"filterList",className:"slds-button_icon-border",onClick:function(){return e.handleVisibility()}})),r.default.createElement("div",{style:{backgroundColor:"#fafaf9",position:"relative",height:"600px",overflow:"hidden",display:"flex"}},r.default.createElement(m,{isVisible:this.state.visible,size:l,title:a,docked:d,invoke:c,drawer:f,handleVisibility:this.handleVisibility},"A panel body accepts any layout or component"),r.default.createElement("div",{className:"slds-col slds-p-around_medium"},"Page Content")))}}]),t}()},110:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=r(n(0)),i=n(109);r(i);function r(e){return e&&e.__esModule?e:{default:e}}t.default=l.default.createElement(i.PanelPlayground,null)}});