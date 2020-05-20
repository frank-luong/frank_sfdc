var SLDS=SLDS||{};SLDS["__internal/chunked/showcase/ui/components/map/base/example.jsx.js"]=function(e){function t(t){for(var l,o,r=t[0],i=t[1],d=t[2],u=0,f=[];u<r.length;u++)o=r[u],n[o]&&f.push(n[o][0]),n[o]=0;for(l in i)Object.prototype.hasOwnProperty.call(i,l)&&(e[l]=i[l]);for(c&&c(t);f.length;)f.shift()();return s.push.apply(s,d||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],l=!0,r=1;r<a.length;r++){var i=a[r];0!==n[i]&&(l=!1)}l&&(s.splice(t--,1),e=o(o.s=a[0]))}return e}var l={},n={87:0,4:0,5:0,11:0,12:0,17:0,26:0,32:0,35:0,38:0,40:0,45:0,48:0,49:0,53:0,54:0,57:0,60:0,62:0,64:0,65:0,70:0,72:0,73:0,78:0,84:0,85:0,88:0,89:0,95:0,98:0,99:0,105:0,106:0,107:0,108:0,109:0,110:0,114:0,117:0,118:0,129:0,137:0,141:0,143:0,144:0,145:0,150:0,153:0,154:0},s=[];function o(t){if(l[t])return l[t].exports;var a=l[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=l,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:a})},o.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/assets/scripts/bundle/";var r=this.webpackJsonpSLDS___internal_chunked_showcase=this.webpackJsonpSLDS___internal_chunked_showcase||[],i=r.push.bind(r);r.push=t,r=r.slice();for(var d=0;d<r.length;d++)t(r[d]);var c=i;return s.push([137,0]),a()}({0:function(e,t){e.exports=React},135:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.data=[{title:"Borrego Solar",address:"5189 22nd Street, Oakland, CA 94607"},{title:"CivisSolar, Inc",address:"809 16th Street, Oakland, CA 94607"}]},136:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,a,l){return a&&e(t.prototype,a),l&&e(t,l),t}}(),n=a(0),s=u(n),o=(a(11),u(a(3))),r=a(7),i=a(15),d=u(a(1)),c=a(135);function u(e){return e&&e.__esModule?e:{default:e}}var f=function(e){return s.default.createElement("div",{className:"slds-coordinates slds-size_small slds-medium-size_medium"},s.default.createElement("div",{className:"slds-coordinates__header"},s.default.createElement("h2",{className:"slds-coordinates__title"},e.heading)),s.default.createElement("ul",{className:"slds-coordinates__list"},c.data.map(function(t,a){return s.default.createElement("li",{className:"slds-coordinates__item",key:a},s.default.createElement("span",{className:"slds-assistive-text","aria-live":"polite"},e.selection==a?t.title+" is currently selected":null),s.default.createElement(m,{title:t.title,address:t.address,selected:e.selection==a}))})))},m=function(e){return s.default.createElement("button",{className:"slds-coordinates__item-action slds-button_reset slds-media","aria-pressed":e.selected},s.default.createElement("span",{className:"slds-media__figure"},s.default.createElement(r.StandardIcon,{symbol:"account"})),s.default.createElement("span",{className:"slds-media__body"},s.default.createElement("span",{className:"slds-text-link"},e.title),s.default.createElement("span",null,e.address)))},p=function(e){return s.default.createElement(i.ModalFooter,null,s.default.createElement("button",{className:"slds-button slds-button_brand"},"Open in Google Maps"))},h=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.Component),l(t,[{key:"render",value:function(){return s.default.createElement(i.Modal,{className:"slds-modal_medium","aria-labelledby":"modal-heading-id-01","aria-describedby":"modal-content-id-01"},s.default.createElement(i.ModalHeader,null,s.default.createElement(o.default,{className:"slds-modal__close slds-button_icon-inverse",iconClassName:"slds-button__icon_large",symbol:"close",title:"Close",assistiveText:"Close"}),s.default.createElement("h2",{id:"modal-heading-id-01",className:"slds-text-heading_medium slds-hyphenate"},this.props.heading)),s.default.createElement(i.ModalContent,{id:"modal-content-id-01"},s.default.createElement("div",{className:(0,d.default)("slds-grid",this.props.multipleCoordinates&&"slds-has-coordinates")},this.props.multipleCoordinates&&s.default.createElement(f,{heading:this.props.heading,selection:this.props.selection}),s.default.createElement("div",{className:"slds-col"},s.default.createElement("div",{className:"slds-map"},!this.props.hideMap&&s.default.createElement("iframe",{id:"GoogleMapID",title:"Google Maps iframe",style:{border:"0"},src:"https://www.google.com/maps/embed/v1/place?q=1%20market%2C%20san%20francisco&key=AIzaSyDliLquGXGts9S8YtkWVolSQEJdBL1ZuWc"}))))),this.props.footer&&s.default.createElement(p,null))}}]),t}();t.default=h},137:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.states=t.examples=t.Context=void 0;var l=s(a(0)),n=s(a(136));function s(e){return e&&e.__esModule?e:{default:e}}t.Context=function(e){return l.default.createElement("div",{style:{height:"900px"}},e.children,l.default.createElement("div",{className:"slds-backdrop slds-backdrop_open"}))};t.default=l.default.createElement(n.default,{heading:"Address: 1 Market St, San Francisco, CA 94105"});t.examples=[{id:"single-coordinate",label:"Single Coordinate - With Footer",element:l.default.createElement(n.default,{heading:"Geo Code: 37°48'08.3\"N 122°15'55.2W",footer:!0})},{id:"multiple-coordinates",label:"Multiple Coordinates",element:l.default.createElement(n.default,{heading:"Favorite Solar Companies (2)",multipleCoordinates:!0,footer:!0})}],t.states=[{id:"multiple-coordinates-item-one-selection",label:"First Coordinate Selected",element:l.default.createElement(n.default,{heading:"Favorite Solar Companies (2)",multipleCoordinates:!0,selection:"0",footer:!0})},{id:"multiple-coordinates-item-two-selection",label:"Second Coordinate Selected",element:l.default.createElement(n.default,{heading:"Favorite Solar Companies (2)",multipleCoordinates:!0,selection:"1",footer:!0})}]}});