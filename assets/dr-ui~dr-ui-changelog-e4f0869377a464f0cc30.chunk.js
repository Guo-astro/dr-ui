(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"1aPB":function(e){e.exports=JSON.parse('{"Features":["Feedback","LevelIndicator","Note","RelatedPage","Search","Tag","Browser","DemoIframe","GLWrapper","Phone","Video"],"Code":["AndroidLayoutCodeBlock","CodeSnippet","CodeSnippetTitle","CodeToggle","ContextlessAndroidActivityToggle","ContextlessIosViewControllerToggle","Edit","Highlight","NumberedCodeSnippet","ToggleableCodeBlock"],"Layout":["BackToTopButton","GlossaryCard","GlossaryImage","GlossaryPage","GlossarySection","OverviewHeader","NavigationAccordion","NavigationDropdown","PageLayout","ProductMenu","SectionedNavigation","Topbar","TopbarSticker","Card","CardContainer","ExamplesPage"],"Images":["BookImage","BookletImage","ContactImage","ExampleImage","PlaygroundImage","TroubleshootImage"]}')},CVwN:function(e,t,n){"use strict";var r=n("q1tI"),o=n.n(r),c=(n("17x9"),n("TSYQ")),i=n.n(c);function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=p(e);if(t){var o=p(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return s(this,n)}}function s(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(a,e);var t,n,r,c=f(a);function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=c.call(this,e)).activeSidebar=o.a.createRef(),t}return t=a,(n=[{key:"componentDidMount",value:function(){this.scrollToActiveSidebar()}},{key:"scrollToActiveSidebar",value:function(){var e=document.getElementById("dr-ui--page-layout-sidebar");if(e){if(window&&window.location.hash){var t=document.getElementById("".concat(window.location.hash.replace("#",""),"-sidebar"));if(t&&t.offsetTop>0)return void(e.scrollTop=t.offsetTop)}this.activeSidebar.current&&(e.scrollTop=this.activeSidebar.current.offsetTop)}}},{key:"renderHeading",value:function(){var e=this.props,t=e.title;e.includeCount&&(t+=" (".concat(e.items.length,")"));var n=i()("block txt-bold color-gray",{py6:e.hideSubItems,py12:!e.hideSubItems,"color-blue-on-hover":e.url});return e.url?o.a.createElement("a",{id:"".concat(e.id,"-sidebar"),href:e.url,className:n},t):o.a.createElement("div",{className:n},t)}},{key:"renderItems",value:function(){var e=this;if(this.props.hideSubItems)return null;var t=this.props.items.map((function(t){return o.a.createElement("a",{key:t.url,href:t.url,ref:t.active?e.activeSidebar:void 0,className:i()("color-blue-on-hover block mb6",{"txt-bold":t.active})},t.text)}));return o.a.createElement(o.a.Fragment,null,t)}},{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,this.renderHeading(),this.renderItems())}}])&&u(t.prototype,n),r&&u(t,r),a}(o.a.Component);y.defaultProps={includeCount:!0,hideSubItems:!1};var b=y,m=n("1YHt"),d=n.n(m);function h(e){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function w(e,t){return(w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function O(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=E(e);if(t){var o=E(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return S(this,n)}}function S(e,t){return!t||"object"!==h(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function E(e){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var P=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&w(e,t)}(i,e);var t,n,r,c=O(i);function i(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(t=c.call(this,e)).state={filter:""},t}return t=i,(n=[{key:"renderTitle",value:function(){var e=this.props;return e.title?o.a.createElement("div",{className:"txt-l color-blue txt-fancy mb12 block-mm none"},e.title):null}},{key:"renderFilterBar",value:function(){var e=this;return this.props.includeFilterBar?o.a.createElement("div",{className:"mb3"},o.a.createElement(d.a,{onChange:function(t){return e.setState({filter:t},e.filterResults)},value:this.state.filter,id:"filter",type:"text",themeControlWrapper:"bg-white",name:"filter",placeholder:"Filter list"})):null}},{key:"render",value:function(){var e=this.props,t=this.state.filter.toLowerCase().trim(),n=this.props.sections.filter((function(e){return e.items.filter((function(e){return e.text.toLowerCase().indexOf(t)>-1||e.description&&e.description.indexOf(t)>-1})).length>0})).map((function(e){var n=e.items.filter((function(e){return e.text.toLowerCase().indexOf(t)>-1||e.description&&e.description.indexOf(t)>-1}));return{title:e.title,url:e.url,items:n,id:e.id||void 0}}));return o.a.createElement("div",{className:"mx24","data-swiftype-index":"false"},this.renderTitle(),this.renderFilterBar(),n.map((function(t,n){return o.a.createElement(o.a.Fragment,{key:n},o.a.createElement(b,v({includeCount:e.includeCount,hideSubItems:e.hideSubItems},t)))})))}}])&&g(t.prototype,n),r&&g(t,r),i}(o.a.Component);P.defaultProps={includeCount:!0,includeFilterBar:!1,hideSubItems:!1};t.a=P},Kjwm:function(e,t,n){"use strict";var r=n("q1tI"),o=n.n(r),c=(n("17x9"),n("sXgQ")),i=n("TSYQ"),a=n.n(i);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=m(e);if(t){var o=m(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return y(this,n)}}function y(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?b(e):t}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(u,e);var t,n,r,i=p(u);function u(){var e;l(this,u);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return d(b(e=i.call.apply(i,[this].concat(n))),"buildTag",(function(e){var t={theme:e.tag,customLabel:e.customTagProps?e.customTagProps.customLabel:void 0,customTooltipText:e.customTagProps?e.customTagProps.customTooltipText:void 0,customStyles:e.customTagProps?e.customTagProps.customStyles:void 0};return o.a.createElement("span",{className:"flex-child mx6"},o.a.createElement(c.a,t))})),e}return t=u,(n=[{key:"render",value:function(){var e=this.props;return o.a.createElement("div",{className:"flex-parent"},o.a.createElement("a",{href:e.homePage,className:a()("wmax240-ml wmax180-mm txt-fancy txt-l block txt-truncate",{"color-white color-gray-light-on-hover":e.lightText,"color-blue-on-hover":!e.lightText})},e.productName),e.tag&&this.buildTag(e))}}])&&f(t.prototype,n),r&&f(t,r),u}(o.a.PureComponent);h.defaultProps={lightText:!1},t.a=h},PTac:function(e,t,n){"use strict";var r=n("q1tI"),o=n.n(r);n("17x9");function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=s(e);if(t){var o=s(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return f(this,n)}}function f(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var p=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(f,e);var t,n,r,c=l(f);function f(){return i(this,f),c.apply(this,arguments)}return t=f,(n=[{key:"render",value:function(){return o.a.createElement("div",{className:"border-t border-b border--gray-light bg-white","data-swiftype-index":"false"},this.props.children)}}])&&a(t.prototype,n),r&&a(t,r),f}(o.a.PureComponent);t.a=p},hxDh:function(e,t,n){"use strict";var r=n("q1tI"),o=n.n(r),c=(n("17x9"),n("5sBR")),i=n.n(c);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=b(e);if(t){var o=b(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return y(this,n)}}function y(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var m=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(a,e);var t,n,r,c=p(a);function a(){return l(this,a),c.apply(this,arguments)}return t=a,(n=[{key:"render",value:function(){var e=this.props,t=e.color,n=e.icon;return o.a.createElement("div",{className:"bg-".concat(t,"-light round-full color-").concat(t," flex-parent flex-parent--center-main flex-parent--center-cross"),style:{width:50,height:50}},o.a.createElement(i.a,{name:n,size:40}))}}])&&f(t.prototype,n),r&&f(t,r),a}(o.a.Component),d={default:{image:o.a.createElement(m,{icon:"book",color:"gray"}),label:"Note",styles:{background:"#f4f7fb",color:"#425870"}},warning:{image:o.a.createElement(m,{icon:"alert",color:"orange"}),label:"Warning",styles:{background:"#feefe2",color:"#78471c",borderColor:"#ba6e2c"}},error:{image:o.a.createElement(m,{icon:"alert",color:"red"}),label:"Error",styles:{background:"#fbe5e5",color:"#9b3134"}},beta:{image:o.a.createElement(m,{icon:"marker",color:"blue"}),label:"Beta",tooltipText:"This feature is in public beta and is subject to changes.",styles:{background:"#f1f3fd",color:"#0c248d",borderColor:"#0428c8"}},new:{image:o.a.createElement(m,{icon:"plus",color:"green"}),label:"New!",tooltipText:"This feature was released recently.",styles:{background:"#e8f5ee",color:"#15603d",borderColor:"#378645"}},download:{image:o.a.createElement(m,{icon:"arrow-down",color:"purple"}),label:"Download",styles:{background:"#f2effa",color:"#452f92"}},fundamentals:{label:"Fundamentals",tooltipText:"The concepts described here are fundamental to using this product.",styles:{background:"#fff0f7",color:"#cf1c61",borderColor:"#fd8ac0"}}};d.legacy=a({},d.warning),d.legacy.label="Legacy",d.legacy.tooltipText="This feature is no longer in active development.";var h=d;t.a=h},ks1d:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),o=n.n(r),c=(n("17x9"),n("PTac").a),i=n("Kjwm").a,a=n("opRz").a,u=n("CVwN").a,l=n("1aPB");function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=d(e);if(t){var o=d(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return m(this,n)}}function m(e,t){return!t||"object"!==f(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(i,e);var t,n,r,c=b(i);function i(){return s(this,i),c.apply(this,arguments)}return t=i,(n=[{key:"render",value:function(){var e=function(e){return e.toLowerCase()};return o.a.createElement(u,{includeFilterBar:!0,title:"Components",sections:Object.keys(l).map((function(t){return{title:t,url:"#".concat(e(t)),id:"".concat(e(t)),items:l[t].map((function(t){return{text:t,url:"#".concat(e(t))}}))}}))})}}])&&p(t.prototype,n),r&&p(t,r),i}(o.a.Component),v=n("TSYQ"),g=n.n(v),w=n("YIkO"),O=n.n(w);function S(e){return(S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function E(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function P(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function x(e,t){return(x=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function T(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=_(e);if(t){var o=_(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return j(this,n)}}function j(e,t){return!t||"object"!==S(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function _(e){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var C=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&x(e,t)}(i,e);var t,n,r,c=T(i);function i(){return E(this,i),c.apply(this,arguments)}return t=i,(n=[{key:"render",value:function(){var e=this.props.headings.filter((function(e){return 2===e.level||3===e.level})).map((function(e){return{title:e.text,url:"#".concat(e.slug),level:e.level}})),t=e.map((function(e){return e.url.replace("#","")})),n=e.map((function(t,n){var r=e[n+1]||null,c=g()("",{pb6:2===t.level,"mb6 color-gray":3===t.level,mb24:r&&2===r.level&&3===t.level,mb6:r&&2===r.level&&2===t.level});return o.a.createElement("li",{key:n,className:c},o.a.createElement("a",{href:t.url,className:"color-blue-on-hover"},t.title))}));return o.a.createElement("div",{className:"mx24"},o.a.createElement(O.a,{items:t,currentClassName:"txt-bold"},n))}}])&&P(t.prototype,n),r&&P(t,r),i}(o.a.PureComponent),k=n("rXK0"),R=n.n(k);function N(e){return(N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function I(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function B(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function D(e,t){return(D=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function L(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=H(e);if(t){var o=H(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return z(this,n)}}function z(e,t){return!t||"object"!==N(t)&&"function"!=typeof t?F(e):t}function F(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function H(e){return(H=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function W(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var V=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&D(e,t)}(l,e);var t,n,r,u=L(l);function l(){var e;I(this,l);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return W(F(e=u.call.apply(u,[this].concat(n))),"sidebarContent",(function(){var t=e.props.frontMatter,n=t.title,r=t.headings;switch(n){case"Overview":return o.a.createElement(h,null);default:return o.a.createElement(C,{headings:r})}})),e}return t=l,(n=[{key:"render",value:function(){var e=this.props,t=e.children,n=e.location.pathname;return o.a.createElement("div",null,o.a.createElement(c,null,o.a.createElement("div",{className:"limiter"},o.a.createElement("div",{className:"grid"},o.a.createElement("div",{className:"col col--3-mm col--12"},o.a.createElement("div",{className:"ml18-mm pt12"},o.a.createElement(i,{productName:"Dr. UI",homePage:"/dr-ui/"}))),o.a.createElement("div",{className:"col col--5-mm col--12"},o.a.createElement(R.a,{items:[{label:"Components",id:"/dr-ui/",href:"/dr-ui/"},{label:"Changelog",id:"/dr-ui/changelog/",href:"/dr-ui/changelog/"}],activeItem:n,truncateBy:1}))))),o.a.createElement("div",{className:"limiter"},o.a.createElement(a,{sideBarColSize:3,sidebarContentStickyTop:0,sidebarContentStickyTopNarrow:0,sidebarContent:this.sidebarContent()},o.a.createElement("div",{className:"prose"},t))))}}])&&B(t.prototype,n),r&&B(t,r),l}(o.a.Component);t.default=V},opRz:function(e,t,n){"use strict";var r=n("q1tI"),o=n.n(r),c=(n("17x9"),n("t8Fj")),i=n.n(c),a=n("sBL/"),u=n.n(a),l=n("TSYQ"),f=n.n(l);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=d(e);if(t){var o=d(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return m(this,n)}}function m(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(a,e);var t,n,r,c=b(a);function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=c.call(this,e)).state={bottomBoundaryValue:0,stickyEnabled:!1},t.debounceHandleWindowResize=u()((function(){document.body.clientWidth<640?t.setState({topValue:t.props.sidebarContentStickyTopNarrow}):t.setState({topValue:t.props.sidebarContentStickyTop});var e=document.body.clientHeight;t.setState({bottomBoundaryValue:e-150})}),200),t}return t=a,(n=[{key:"componentDidMount",value:function(){var e=this;if(this.debounceHandleWindowResize(),setTimeout((function(){e.setState({stickyEnabled:!0})}),500),window.addEventListener("resize",this.debounceHandleWindowResize),this.props.interactiveClass)for(var t=document.getElementsByClassName(this.props.interactiveClass),n=0;n<t.length;n++)t[n].addEventListener("click",this.debounceHandleWindowResize)}},{key:"componentWillUnmount",value:function(){if(window.removeEventListener("resize",this.debounceHandleWindowResize),this.props.interactiveClass)for(var e=document.getElementsByClassName(this.props.interactiveClass),t=0;t<e.length;t++)e[t].removeEventListener("click",this.debounceHandleWindowResize)}},{key:"render",value:function(){var e=this.props,t=this.state,n="";e.sidebarTitle&&(n=o.a.createElement("div",{className:"txt-l color-blue txt-fancy mb12 block-mm none mx24"},e.sidebarTitle));var r=f()({block:e.sidebarStackedOnNarrowScreens,"none block-mm":!e.sidebarStackedOnNarrowScreens}),c=null;return e.sideBarColSize&&e.sideBarColSize>2&&e.sideBarColSize<7&&(c=e.sideBarColSize),o.a.createElement("div",{className:"grid"},o.a.createElement("div",{className:"col col--4-mm ".concat(c?"col--".concat(c,"-ml"):""," col--12 ").concat(e.sidebarTheme),"data-swiftype-index":"false"},o.a.createElement(i.a,{enabled:t.stickyEnabled,bottomBoundary:t.bottomBoundaryValue,innerZ:3,top:t.topValue},o.a.createElement("div",{className:"pt12-mm pt0 viewport-almost-mm scroll-auto-mm scroll-styled ".concat(r),id:"dr-ui--page-layout-sidebar"},n,e.sidebarContent))),o.a.createElement("div",{id:"docs-content",className:"col col--8-mm ".concat(c?"col--".concat(12-c,"-ml"):""," col--12 mt24-mm mb60 pr0-mm px36-mm")},e.children))}}])&&p(t.prototype,n),r&&p(t,r),a}(o.a.Component);h.defaultProps={sidebarTheme:"bg-gray-faint",sidebarStackedOnNarrowScreens:!1},t.a=h},sXgQ:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var r=n("q1tI"),o=n.n(r),c=(n("17x9"),n("UJnQ")),i=n.n(c),a=n("hxDh");function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=b(e);if(t){var o=b(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return y(this,n)}}function y(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var m=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(u,e);var t,n,r,c=p(u);function u(){return l(this,u),c.apply(this,arguments)}return t=u,(n=[{key:"render",value:function(){var e=a.a[this.props.theme]||{label:this.props.customLabel,tooltipText:this.props.customTooltipText,styles:this.props.customStyles};return o.a.createElement(i.a,{content:e.tooltipText,maxWidth:"small",placement:"top"},o.a.createElement("div",{style:e.styles,className:"txt-s txt-bold round px6 inline-block cursor-default border"},e.label))}}])&&f(t.prototype,n),r&&f(t,r),u}(o.a.Component)}}]);