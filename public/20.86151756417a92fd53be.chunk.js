(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"0d7f0986bcd2f33d8a2a":function(e,t,n){"use strict";(function(e){function r(e){return e&&"object"===typeof e&&"default"in e?e.default:e}Object.defineProperty(t,"__esModule",{value:!0});var a,o,c,i,u=r(n("8a2d1b95e05b6a321e74")),s=r(n("7830fb198d99e49e14ff")),f=r(n("ecab4188101df42db36a")),d=r(n("8af190b70a6bc55c6f1b")),l=r(n("83406643bfb209d249f4")),p="bodyAttributes",b="htmlAttributes",h="titleAttributes",y={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},m=(Object.keys(y).map(function(e){return y[e]}),"charset"),v="cssText",g="href",T="http-equiv",O="innerHTML",j="itemprop",w="name",S="property",A="rel",C="src",E={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},P="defaultTitle",k="defer",x="encodeSpecialCharacters",R="onChangeClientState",L="titleTemplate",I=Object.keys(E).reduce(function(e,t){return e[E[t]]=t,e},{}),M=[y.NOSCRIPT,y.SCRIPT,y.STYLE],D="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},N=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},_=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),H=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},B=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},U=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t},Y=function(e){return!1===(!(arguments.length>1&&void 0!==arguments[1])||arguments[1])?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},q=function(e){var t=z(e,y.TITLE),n=z(e,L);if(n&&t)return n.replace(/%s/g,function(){return Array.isArray(t)?t.join(""):t});var r=z(e,P);return t||r||void 0},F=function(e){return z(e,R)||function(){}},K=function(e,t){return t.filter(function(t){return"undefined"!==typeof t[e]}).map(function(t){return t[e]}).reduce(function(e,t){return H({},e,t)},{})},J=function(e,t){return t.filter(function(e){return"undefined"!==typeof e[y.BASE]}).map(function(e){return e[y.BASE]}).reverse().reduce(function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var o=r[a].toLowerCase();if(-1!==e.indexOf(o)&&n[o])return t.concat(n)}return t},[])},W=function(e,t,n){var r={};return n.filter(function(t){return!!Array.isArray(t[e])||("undefined"!==typeof t[e]&&X("Helmet: "+e+' should be of type "Array". Instead found type "'+D(t[e])+'"'),!1)}).map(function(t){return t[e]}).reverse().reduce(function(e,n){var a={};n.filter(function(e){for(var n=void 0,o=Object.keys(e),c=0;c<o.length;c++){var i=o[c],u=i.toLowerCase();-1===t.indexOf(u)||n===A&&"canonical"===e[n].toLowerCase()||u===A&&"stylesheet"===e[u].toLowerCase()||(n=u),-1===t.indexOf(i)||i!==O&&i!==v&&i!==j||(n=i)}if(!n||!e[n])return!1;var s=e[n].toLowerCase();return r[n]||(r[n]={}),a[n]||(a[n]={}),!r[n][s]&&(a[n][s]=!0,!0)}).reverse().forEach(function(t){return e.push(t)});for(var o=Object.keys(a),c=0;c<o.length;c++){var i=o[c],u=l({},r[i],a[i]);r[i]=u}return e},[]).reverse()},z=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},$=(a=Date.now(),function(e){var t=Date.now();t-a>16?(a=t,e(t)):setTimeout(function(){$(e)},0)}),G=function(e){return clearTimeout(e)},V="undefined"!==typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||$:e.requestAnimationFrame||$,Q="undefined"!==typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||G:e.cancelAnimationFrame||G,X=function(e){return console&&"function"===typeof console.warn&&console.warn(e)},Z=null,ee=function(e,t){var n=e.baseTag,r=e.bodyAttributes,a=e.htmlAttributes,o=e.linkTags,c=e.metaTags,i=e.noscriptTags,u=e.onChangeClientState,s=e.scriptTags,f=e.styleTags,d=e.title,l=e.titleAttributes;re(y.BODY,r),re(y.HTML,a),ne(d,l);var p={baseTag:ae(y.BASE,n),linkTags:ae(y.LINK,o),metaTags:ae(y.META,c),noscriptTags:ae(y.NOSCRIPT,i),scriptTags:ae(y.SCRIPT,s),styleTags:ae(y.STYLE,f)},b={},h={};Object.keys(p).forEach(function(e){var t=p[e],n=t.newTags,r=t.oldTags;n.length&&(b[e]=n),r.length&&(h[e]=p[e].oldTags)}),t&&t(),u(e,b,h)},te=function(e){return Array.isArray(e)?e.join(""):e},ne=function(e,t){"undefined"!==typeof e&&document.title!==e&&(document.title=te(e)),re(y.TITLE,t)},re=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute("data-react-helmet"),a=r?r.split(","):[],o=[].concat(a),c=Object.keys(t),i=0;i<c.length;i++){var u=c[i],s=t[u]||"";n.getAttribute(u)!==s&&n.setAttribute(u,s),-1===a.indexOf(u)&&a.push(u);var f=o.indexOf(u);-1!==f&&o.splice(f,1)}for(var d=o.length-1;d>=0;d--)n.removeAttribute(o[d]);a.length===o.length?n.removeAttribute("data-react-helmet"):n.getAttribute("data-react-helmet")!==c.join(",")&&n.setAttribute("data-react-helmet",c.join(","))}},ae=function(e,t){var n=document.head||document.querySelector(y.HEAD),r=n.querySelectorAll(e+"[data-react-helmet]"),a=Array.prototype.slice.call(r),o=[],c=void 0;return t&&t.length&&t.forEach(function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===O)n.innerHTML=t.innerHTML;else if(r===v)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var i="undefined"===typeof t[r]?"":t[r];n.setAttribute(r,i)}n.setAttribute("data-react-helmet","true"),a.some(function(e,t){return c=t,n.isEqualNode(e)})?a.splice(c,1):o.push(n)}),a.forEach(function(e){return e.parentNode.removeChild(e)}),o.forEach(function(e){return n.appendChild(e)}),{oldTags:a,newTags:o}},oe=function(e){return Object.keys(e).reduce(function(t,n){var r="undefined"!==typeof e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r},"")},ce=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,n){return t[E[n]||n]=e[n],t},t)},ie=function(e,t,n){switch(e){case y.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})["data-react-helmet"]=!0,a=ce(n,r),[d.createElement(y.TITLE,a,e)];var e,n,r,a},toString:function(){return function(e,t,n,r){var a=oe(n),o=te(t);return a?"<"+e+' data-react-helmet="true" '+a+">"+Y(o,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+Y(o,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case p:case b:return{toComponent:function(){return ce(t)},toString:function(){return oe(t)}};default:return{toComponent:function(){return function(e,t){return t.map(function(t,n){var r,a=((r={key:n})["data-react-helmet"]=!0,r);return Object.keys(t).forEach(function(e){var n=E[e]||e;if(n===O||n===v){var r=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:r}}else a[n]=t[e]}),d.createElement(e,a)})}(e,t)},toString:function(){return function(e,t,n){return t.reduce(function(t,r){var a=Object.keys(r).filter(function(e){return!(e===O||e===v)}).reduce(function(e,t){var a="undefined"===typeof r[t]?t:t+'="'+Y(r[t],n)+'"';return e?e+" "+a:a},""),o=r.innerHTML||r.cssText||"",c=-1===M.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+a+(c?"/>":">"+o+"</"+e+">")},"")}(e,t,n)}}}},ue=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,a=e.htmlAttributes,o=e.linkTags,c=e.metaTags,i=e.noscriptTags,u=e.scriptTags,s=e.styleTags,f=e.title,d=void 0===f?"":f,l=e.titleAttributes;return{base:ie(y.BASE,t,r),bodyAttributes:ie(p,n,r),htmlAttributes:ie(b,a,r),link:ie(y.LINK,o,r),meta:ie(y.META,c,r),noscript:ie(y.NOSCRIPT,i,r),script:ie(y.SCRIPT,u,r),style:ie(y.STYLE,s,r),title:ie(y.TITLE,{title:d,titleAttributes:l},r)}},se=s(function(e){return{baseTag:J([g],e),bodyAttributes:K(p,e),defer:z(e,k),encode:z(e,x),htmlAttributes:K(b,e),linkTags:W(y.LINK,[A,g],e),metaTags:W(y.META,[w,m,T,S,j],e),noscriptTags:W(y.NOSCRIPT,[O],e),onChangeClientState:F(e),scriptTags:W(y.SCRIPT,[C,O],e),styleTags:W(y.STYLE,[v],e),title:q(e),titleAttributes:K(h,e)}},function(e){Z&&Q(Z),e.defer?Z=V(function(){ee(e,function(){Z=null})}):(ee(e),Z=null)},ue)(function(){return null}),fe=(o=se,i=c=function(e){function t(){return N(this,t),U(this,e.apply(this,arguments))}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!f(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case y.SCRIPT:case y.NOSCRIPT:return{innerHTML:t};case y.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,a=e.newChildProps,o=e.nestedChildren;return H({},r,((t={})[n.type]=[].concat(r[n.type]||[],[H({},a,this.mapNestedChildrenToProps(n,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,a=e.newProps,o=e.newChildProps,c=e.nestedChildren;switch(r.type){case y.TITLE:return H({},a,((t={})[r.type]=c,t.titleAttributes=H({},o),t));case y.BODY:return H({},a,{bodyAttributes:H({},o)});case y.HTML:return H({},a,{htmlAttributes:H({},o)})}return H({},a,((n={})[r.type]=H({},o),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=H({},t);return Object.keys(e).forEach(function(t){var r;n=H({},n,((r={})[t]=e[t],r))}),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return d.Children.forEach(e,function(e){if(e&&e.props){var a=e.props,o=a.children,c=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,n){return t[I[n]||n]=e[n],t},t)}(B(a,["children"]));switch(n.warnOnInvalidChildren(e,o),e.type){case y.LINK:case y.META:case y.NOSCRIPT:case y.SCRIPT:case y.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:c,nestedChildren:o});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:c,nestedChildren:o})}}}),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=B(e,["children"]),r=H({},n);return t&&(r=this.mapChildrenToProps(t,r)),d.createElement(o,r)},_(t,null,[{key:"canUseDOM",set:function(e){o.canUseDOM=e}}]),t}(d.Component),c.propTypes={base:u.object,bodyAttributes:u.object,children:u.oneOfType([u.arrayOf(u.node),u.node]),defaultTitle:u.string,defer:u.bool,encodeSpecialCharacters:u.bool,htmlAttributes:u.object,link:u.arrayOf(u.object),meta:u.arrayOf(u.object),noscript:u.arrayOf(u.object),onChangeClientState:u.func,script:u.arrayOf(u.object),style:u.arrayOf(u.object),title:u.string,titleAttributes:u.object,titleTemplate:u.string},c.defaultProps={defer:!0,encodeSpecialCharacters:!0},c.peek=o.peek,c.rewind=function(){var e=o.rewind();return e||(e=ue({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},i);fe.renderStatic=fe.rewind,t.Helmet=fe}).call(this,n("698d75b157f24ae829cc"))},"222d570590d8079100ee":function(e,t,n){"use strict";n.r(t);var r=n("8af190b70a6bc55c6f1b"),a=n.n(r),o=(n("8a2d1b95e05b6a321e74"),n("d7dd51e1bf6bfc2c9c3d")),c=n("0d7f0986bcd2f33d8a2a"),i=n("a28fc3c963a1d4d1a2e5"),u=n("ab4cb61bcb2dc161defb"),s=n("3ed81f8d24b90b29f580"),f=Object(s.a)(function(){return Promise.all([n.e(0),n.e(8),n.e(3),n.e(7),n.e(17)]).then(n.bind(null,"407bc113946cea67fe11"))}),d=Object(s.a)(function(){return Promise.all([n.e(0),n.e(8),n.e(3),n.e(7),n.e(18)]).then(n.bind(null,"dad75784da18cf82404f"))}),l=n("adc20f99e57c573c589c"),p=n("d95b0cf107403b178365"),b=n("7edf83707012a871cdfb"),h="billbar/Stats/LOAD_STATS",y="billbar/Stats/LOAD_STATS_SUCCESS",m="billbar/Stats/LOAD_STATS_ERROR",v={loading:!1,error:!1,stats:!1},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;return Object(b.a)(e,function(e){switch(t.type){case h:e.loading=!0,e.error=!1;break;case y:e.loading=!1,e.stats=t.stats;break;case m:e.loading=!1,e.error=t.error}})},T=function(e){return e.stat||v},O=n("d782b72bc5b680c7122c"),j=n("f363639bc5c3c97af546");function w(e){return{type:y,stats:e}}var S=regeneratorRuntime.mark(C),A=regeneratorRuntime.mark(E);function C(){var e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return"http://localhost:8080/stats",t.prev=1,t.next=4,Object(O.call)(j.a,"http://localhost:8080/stats");case 4:return e=t.sent,t.next=7,Object(O.put)(w(e));case 7:t.next=13;break;case 9:return t.prev=9,t.t0=t.catch(1),t.next=13,Object(O.put)((n=t.t0,{type:m,error:n}));case 13:case"end":return t.stop()}var n},S,null,[[1,9]])}function E(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(O.takeLatest)(h,C);case 2:case"end":return e.stop()}},A)}var P,k=n("9b123b0b68c7bd03230e");function x(e,t,n,r){P||(P="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var a=e&&e.defaultProps,o=arguments.length-3;if(t||0===o||(t={children:void 0}),1===o)t.children=r;else if(o>1){for(var c=new Array(o),i=0;i<o;i++)c[i]=arguments[i+3];t.children=c}if(t&&a)for(var u in a)void 0===t[u]&&(t[u]=a[u]);else t||(t=a||{});return{$$typeof:P,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}n.d(t,"Stats",function(){return I});var R=x(k.a,{active:"1"}),L=x(c.Helmet,{},void 0,x("title",{},void 0,"Bars | Bill Bar"),x("meta",{name:"description",content:"Description of Stats"}));function I(e){var t=e.stats,n=e.onLoadHandler,o=e.loading,c=e.error;Object(p.a)({key:"stat",reducer:g}),Object(l.a)({key:"stat",saga:E}),0==t&&n(),Object(r.useEffect)(function(){n()},[]);var i={stats:t,loading:o,error:c},u=new Date,s=u.getMonth();u.setMonth(s-1),u.getMonth==s&&u.setDate(0),u.setHours(0,0,0),u.setMilliseconds(0);var b=["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"][s],h=u.getDate()+1;h=h<10?"0".concat(h):h;var y=u.getFullYear();return console.log(u),x("div",{},void 0,R,L,x("div",{className:"container-fluid message message__disclaimer"},void 0,x("div",{className:"row"},void 0,x("div",{className:"col-12"},void 0,"Date Range: ",h," ",b," ",y," to Present"))),x("div",{className:"container-fluid graph__container"},void 0,a.a.createElement(f,i),a.a.createElement(d,i)))}var M=Object(i.b)({stats:Object(i.a)(T,function(e){return e.stats}),loading:Object(i.a)(T,function(e){return e.loading}),error:Object(i.a)(T,function(e){return e.error})});var D=Object(o.connect)(M,function(e){return{onLoadHandler:function(t){void 0!==t&&t.preventDefault&&t.preventDefault(),e({type:h})}}});t.default=Object(u.compose)(D)(I)},"7830fb198d99e49e14ff":function(e,t,n){"use strict";function r(e){return e&&"object"===typeof e&&"default"in e?e.default:e}var a=n("8af190b70a6bc55c6f1b"),o=r(a),c=r(n("a88d2aa2cbd689d523e2"));function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var u=!("undefined"===typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!==typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!==typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if("undefined"!==typeof n&&"function"!==typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!==typeof r)throw new Error("Expected WrappedComponent to be a React component.");var s,f=[];function d(){s=e(f.map(function(e){return e.props})),l.canUseDOM?t(s):n&&(s=n(s))}var l=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.peek=function(){return s},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=s;return s=void 0,f=[],e};var i=a.prototype;return i.shouldComponentUpdate=function(e){return!c(e,this.props)},i.componentWillMount=function(){f.push(this),d()},i.componentDidUpdate=function(){d()},i.componentWillUnmount=function(){var e=f.indexOf(this);f.splice(e,1),d()},i.render=function(){return o.createElement(r,this.props)},a}(a.Component);return i(l,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),i(l,"canUseDOM",u),l}}},a88d2aa2cbd689d523e2:function(e,t){e.exports=function(e,t,n,r){var a=n?n.call(r,e,t):void 0;if(void 0!==a)return!!a;if(e===t)return!0;if("object"!==typeof e||!e||"object"!==typeof t||!t)return!1;var o=Object.keys(e),c=Object.keys(t);if(o.length!==c.length)return!1;for(var i=Object.prototype.hasOwnProperty.bind(t),u=0;u<o.length;u++){var s=o[u];if(!i(s))return!1;var f=e[s],d=t[s];if(!1===(a=n?n.call(r,f,d,s):void 0)||void 0===a&&f!==d)return!1}return!0}},adc20f99e57c573c589c:function(e,t,n){"use strict";var r=n("8af190b70a6bc55c6f1b"),a=n.n(r),o=(n("5ef9de3df8d92ea0e41c"),n("d7dd51e1bf6bfc2c9c3d")),c=n("f2873ecf7390fe7d7c89"),i=n.n(c),u=n("5fa3f8487e09c6182715"),s=n.n(u),f=n("f3b0ff1628e56352bcbf"),d=n.n(f),l=n("a1cf5d6fa4ed65a6ddd5"),p=n.n(l),b=n("6a4f9c383785f9168266"),h=n.n(b),y=n("cc13decd9f9c09598c2f"),m="@@saga-injector/daemon",v="@@saga-injector/once-till-unmount";function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function T(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach(function(t){O(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function O(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var j=["@@saga-injector/restart-on-remount",m,v],w=function(e){return h()(s()(e)&&!p()(e),"(app/utils...) injectSaga: Expected `key` to be a non empty string")},S=function(e){var t={saga:d.a,mode:function(e){return s()(e)&&j.includes(e)}};h()(i()(e,t),"(app/utils...) injectSaga: Expected a valid saga descriptor")};function A(e,t){return function(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>2?arguments[2]:void 0;t||Object(y.a)(e);var o=T({},r,{mode:r.mode||m}),c=o.saga,i=o.mode;w(n),S(o);var u=Reflect.has(e.injectedSagas,n);(!u||u&&i!==m&&i!==v)&&(e.injectedSagas[n]=T({},o,{task:e.runSaga(c,a)}))}}function C(e,t){return function(n){if(t||Object(y.a)(e),w(n),Reflect.has(e.injectedSagas,n)){var r=e.injectedSagas[n];r.mode&&r.mode!==m&&(r.task.cancel(),e.injectedSagas[n]="done")}}}function E(e){return Object(y.a)(e),{injectSaga:A(e,!0),ejectSaga:C(e,!0)}}n.d(t,"a",function(){return P});var P=function(e){var t=e.key,n=e.saga,r=e.mode,c=a.a.useContext(o.ReactReduxContext);a.a.useEffect(function(){var e=E(c.store);return e.injectSaga(t,{saga:n,mode:r}),function(){e.ejectSaga(t)}},[])}},cc13decd9f9c09598c2f:function(e,t,n){"use strict";n.d(t,"a",function(){return d});var r=n("d3a850c4000d77bccc89"),a=n.n(r),o=n("f3b0ff1628e56352bcbf"),c=n.n(o),i=n("f2873ecf7390fe7d7c89"),u=n.n(i),s=n("6a4f9c383785f9168266"),f=n.n(s);function d(e){var t={dispatch:c.a,subscribe:c.a,getState:c.a,replaceReducer:c.a,runSaga:c.a,injectedReducers:a.a,injectedSagas:a.a};f()(u()(e,t),"(app/utils...) injectors: Expected a valid redux store")}},d95b0cf107403b178365:function(e,t,n){"use strict";var r=n("8af190b70a6bc55c6f1b"),a=n.n(r),o=(n("5ef9de3df8d92ea0e41c"),n("d7dd51e1bf6bfc2c9c3d")),c=n("5fa3f8487e09c6182715"),i=n.n(c),u=n("f3b0ff1628e56352bcbf"),s=n.n(u),f=n("a1cf5d6fa4ed65a6ddd5"),d=n.n(f),l=n("6a4f9c383785f9168266"),p=n.n(l),b=n("cc13decd9f9c09598c2f"),h=n("491cc2e27aa2b4221847");function y(e,t){return function(n,r){t||Object(b.a)(e),p()(i()(n)&&!d()(n)&&s()(r),"(app/utils...) injectReducer: Expected `reducer` to be a reducer function"),Reflect.has(e.injectedReducers,n)&&e.injectedReducers[n]===r||(e.injectedReducers[n]=r,e.replaceReducer(Object(h.a)(e.injectedReducers)))}}function m(e){return Object(b.a)(e),{injectReducer:y(e,!0)}}n.d(t,"a",function(){return v});var v=function(e){var t=e.key,n=e.reducer,r=a.a.useContext(o.ReactReduxContext);a.a.useEffect(function(){m(r.store).injectReducer(t,n)},[])}},f363639bc5c3c97af546:function(e,t,n){"use strict";function r(e){return 204===e.status||205===e.status?null:e.json()}function a(e){if(e.status>=200&&e.status<300)return e;var t=new Error(e.statusText);throw t.response=e,t}function o(e,t){return fetch(e,t).then(a).then(r)}n.d(t,"a",function(){return o})}}]);