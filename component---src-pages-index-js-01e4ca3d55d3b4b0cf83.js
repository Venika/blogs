/*! For license information please see component---src-pages-index-js-01e4ca3d55d3b4b0cf83.js.LICENSE.txt */
(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[678],{4184:function(t,e){var n;!function(){"use strict";var r={}.hasOwnProperty;function i(){for(var t=[],e=0;e<arguments.length;e++){var n=arguments[e];if(n){var o=typeof n;if("string"===o||"number"===o)t.push(n);else if(Array.isArray(n)){if(n.length){var a=i.apply(null,n);a&&t.push(a)}}else if("object"===o){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){t.push(n.toString());continue}for(var u in n)r.call(n,u)&&n[u]&&t.push(u)}}}return t.join(" ")}t.exports?(i.default=i,t.exports=i):void 0===(n=function(){return i}.apply(e,[]))||(t.exports=n)}()},1879:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return u}});var r=n(7294),i=n(450),o=n(1883);var a=t=>{let{posts:e}=t;return r.createElement("div",null,r.createElement(i.X2,{xs:"1",md:"2",className:"g-4"},e.map((t=>{var e,n;let{node:a}=t;const u=a.frontmatter.title||a.fields.slug,s=null===(e=a.frontmatter.featuredImage)||void 0===e||null===(n=e.childImageSharp)||void 0===n?void 0:n.fluid;return r.createElement(i.JX,{key:a.fields.slug},r.createElement(i.Zb,null,s&&r.createElement(o.rU,{to:a.fields.slug},r.createElement(i.Mo,{top:!0,width:"100%",src:s.src,alt:u})),r.createElement(i.eW,null,r.createElement(i.ll,null,r.createElement(o.rU,{to:a.fields.slug},u)),r.createElement(i._R,null,a.frontmatter.date),r.createElement(i.SK,null,a.excerpt))))}))))};var u=t=>{let{data:e}=t;const n=e.allMarkdownRemark.edges;return r.createElement("div",null,r.createElement("header",null,r.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark"},r.createElement(i.W2,null,r.createElement("a",{className:"navbar-brand",href:"/"},"My Blog")))),r.createElement(i.W2,{className:"py-4"},r.createElement(i.X2,null,r.createElement(i.JX,null,r.createElement("h1",{className:"mb-4"},"Latest Posts"),r.createElement(a,{posts:n})))))}},9590:function(t){var e="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,i="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function o(t,a){if(t===a)return!0;if(t&&a&&"object"==typeof t&&"object"==typeof a){if(t.constructor!==a.constructor)return!1;var u,s,l,c;if(Array.isArray(t)){if((u=t.length)!=a.length)return!1;for(s=u;0!=s--;)if(!o(t[s],a[s]))return!1;return!0}if(n&&t instanceof Map&&a instanceof Map){if(t.size!==a.size)return!1;for(c=t.entries();!(s=c.next()).done;)if(!a.has(s.value[0]))return!1;for(c=t.entries();!(s=c.next()).done;)if(!o(s.value[1],a.get(s.value[0])))return!1;return!0}if(r&&t instanceof Set&&a instanceof Set){if(t.size!==a.size)return!1;for(c=t.entries();!(s=c.next()).done;)if(!a.has(s.value[0]))return!1;return!0}if(i&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(a)){if((u=t.length)!=a.length)return!1;for(s=u;0!=s--;)if(t[s]!==a[s])return!1;return!0}if(t.constructor===RegExp)return t.source===a.source&&t.flags===a.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===a.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===a.toString();if((u=(l=Object.keys(t)).length)!==Object.keys(a).length)return!1;for(s=u;0!=s--;)if(!Object.prototype.hasOwnProperty.call(a,l[s]))return!1;if(e&&t instanceof Element)return!1;for(s=u;0!=s--;)if(("_owner"!==l[s]&&"__v"!==l[s]&&"__o"!==l[s]||!t.$$typeof)&&!o(t[l[s]],a[l[s]]))return!1;return!0}return t!=t&&a!=a}t.exports=function(t,e){try{return o(t,e)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},1385:function(t,e,n){"use strict";n.d(e,{C8:function(){return i},dK:function(){return a},mq:function(){return o}});var r=n(7294),i=r.createContext(),o=r.createContext();function a(t){var e=t.children,n=r.useState(null),a=n[0],u=n[1],s=r.useRef(!1);r.useEffect((function(){return function(){s.current=!0}}),[]);var l=r.useCallback((function(t){s.current||u(t)}),[]);return r.createElement(i.Provider,{value:a},r.createElement(o.Provider,{value:l},e))}},3026:function(t,e,n){"use strict";n.d(e,{r:function(){return m}});var r=n(7294),i=n(1385),o=n(7139),a=n(3935),u=n(804),s=n(9590),l=n.n(s),c=[],f=function(){},p=function(){return Promise.resolve(null)},d=[];function m(t){var e=t.placement,n=void 0===e?"bottom":e,s=t.strategy,m=void 0===s?"absolute":s,h=t.modifiers,E=void 0===h?d:h,v=t.referenceElement,x=t.onFirstUpdate,y=t.innerRef,g=t.children,b=r.useContext(i.C8),S=r.useState(null),k=S[0],O=S[1],C=r.useState(null),w=C[0],R=C[1];r.useEffect((function(){(0,o.k$)(y,k)}),[y,k]);var N=r.useMemo((function(){return{placement:n,strategy:m,onFirstUpdate:x,modifiers:[].concat(E,[{name:"arrow",enabled:null!=w,options:{element:w}}])}}),[n,m,x,E,w]),M=function(t,e,n){void 0===n&&(n={});var i=r.useRef(null),s={onFirstUpdate:n.onFirstUpdate,placement:n.placement||"bottom",strategy:n.strategy||"absolute",modifiers:n.modifiers||c},f=r.useState({styles:{popper:{position:s.strategy,left:"0",top:"0"},arrow:{position:"absolute"}},attributes:{}}),p=f[0],d=f[1],m=r.useMemo((function(){return{name:"updateState",enabled:!0,phase:"write",fn:function(t){var e=t.state,n=Object.keys(e.elements);a.flushSync((function(){d({styles:(0,o.sq)(n.map((function(t){return[t,e.styles[t]||{}]}))),attributes:(0,o.sq)(n.map((function(t){return[t,e.attributes[t]]})))})}))},requires:["computeStyles"]}}),[]),h=r.useMemo((function(){var t={onFirstUpdate:s.onFirstUpdate,placement:s.placement,strategy:s.strategy,modifiers:[].concat(s.modifiers,[m,{name:"applyStyles",enabled:!1}])};return l()(i.current,t)?i.current||t:(i.current=t,t)}),[s.onFirstUpdate,s.placement,s.strategy,s.modifiers,m]),E=r.useRef();return(0,o.LI)((function(){E.current&&E.current.setOptions(h)}),[h]),(0,o.LI)((function(){if(null!=t&&null!=e){var r=(n.createPopper||u.fi)(t,e,h);return E.current=r,function(){r.destroy(),E.current=null}}}),[t,e,n.createPopper]),{state:E.current?E.current.state:null,styles:p.styles,attributes:p.attributes,update:E.current?E.current.update:null,forceUpdate:E.current?E.current.forceUpdate:null}}(v||b,k,N),U=M.state,D=M.styles,T=M.forceUpdate,P=M.update,j=r.useMemo((function(){return{ref:O,style:D.popper,placement:U?U.placement:n,hasPopperEscaped:U&&U.modifiersData.hide?U.modifiersData.hide.hasPopperEscaped:null,isReferenceHidden:U&&U.modifiersData.hide?U.modifiersData.hide.isReferenceHidden:null,arrowProps:{style:D.arrow,ref:R},forceUpdate:T||f,update:P||p}}),[O,R,n,U,D,P,T]);return(0,o.$p)(g)(j)}},3351:function(t,e,n){"use strict";n.d(e,{s:function(){return s}});var r=n(7294),i=n(2473),o=n.n(i),a=n(1385),u=n(7139);function s(t){var e=t.children,n=t.innerRef,i=r.useContext(a.mq),s=r.useCallback((function(t){(0,u.k$)(n,t),(0,u.DL)(i,t)}),[n,i]);return r.useEffect((function(){return function(){return(0,u.k$)(n,null)}}),[]),r.useEffect((function(){o()(Boolean(i),"`Reference` should not be used outside of a `Manager` component.")}),[i]),(0,u.$p)(e)({ref:s})}},7139:function(t,e,n){"use strict";n.d(e,{$p:function(){return i},DL:function(){return o},LI:function(){return s},k$:function(){return a},sq:function(){return u}});var r=n(7294),i=function(t){return Array.isArray(t)?t[0]:t},o=function(t){if("function"==typeof t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return t.apply(void 0,n)}},a=function(t,e){if("function"==typeof t)return o(t,e);null!=t&&(t.current=e)},u=function(t){return t.reduce((function(t,e){var n=e[0],r=e[1];return t[n]=r,t}),{})},s="undefined"!=typeof window&&window.document&&window.document.createElement?r.useLayoutEffect:r.useEffect},3443:function(t,e,n){"use strict";n.d(e,{ZP:function(){return h}});var r=n(4578),i=n(7294),o=n(3935),a=!1,u=i.createContext(null),s="unmounted",l="exited",c="entering",f="entered",p="exiting",d=function(t){function e(e,n){var r;r=t.call(this,e,n)||this;var i,o=n&&!n.isMounting?e.enter:e.appear;return r.appearStatus=null,e.in?o?(i=l,r.appearStatus=c):i=f:i=e.unmountOnExit||e.mountOnEnter?s:l,r.state={status:i},r.nextCallback=null,r}(0,r.Z)(e,t),e.getDerivedStateFromProps=function(t,e){return t.in&&e.status===s?{status:l}:null};var n=e.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(t){var e=null;if(t!==this.props){var n=this.state.status;this.props.in?n!==c&&n!==f&&(e=c):n!==c&&n!==f||(e=p)}this.updateStatus(!1,e)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var t,e,n,r=this.props.timeout;return t=e=n=r,null!=r&&"number"!=typeof r&&(t=r.exit,e=r.enter,n=void 0!==r.appear?r.appear:e),{exit:t,enter:e,appear:n}},n.updateStatus=function(t,e){if(void 0===t&&(t=!1),null!==e)if(this.cancelNextCallback(),e===c){if(this.props.unmountOnExit||this.props.mountOnEnter){var n=this.props.nodeRef?this.props.nodeRef.current:o.findDOMNode(this);n&&function(t){t.scrollTop}(n)}this.performEnter(t)}else this.performExit();else this.props.unmountOnExit&&this.state.status===l&&this.setState({status:s})},n.performEnter=function(t){var e=this,n=this.props.enter,r=this.context?this.context.isMounting:t,i=this.props.nodeRef?[r]:[o.findDOMNode(this),r],u=i[0],s=i[1],l=this.getTimeouts(),p=r?l.appear:l.enter;!t&&!n||a?this.safeSetState({status:f},(function(){e.props.onEntered(u)})):(this.props.onEnter(u,s),this.safeSetState({status:c},(function(){e.props.onEntering(u,s),e.onTransitionEnd(p,(function(){e.safeSetState({status:f},(function(){e.props.onEntered(u,s)}))}))})))},n.performExit=function(){var t=this,e=this.props.exit,n=this.getTimeouts(),r=this.props.nodeRef?void 0:o.findDOMNode(this);e&&!a?(this.props.onExit(r),this.safeSetState({status:p},(function(){t.props.onExiting(r),t.onTransitionEnd(n.exit,(function(){t.safeSetState({status:l},(function(){t.props.onExited(r)}))}))}))):this.safeSetState({status:l},(function(){t.props.onExited(r)}))},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(t,e){e=this.setNextCallback(e),this.setState(t,e)},n.setNextCallback=function(t){var e=this,n=!0;return this.nextCallback=function(r){n&&(n=!1,e.nextCallback=null,t(r))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(t,e){this.setNextCallback(e);var n=this.props.nodeRef?this.props.nodeRef.current:o.findDOMNode(this),r=null==t&&!this.props.addEndListener;if(n&&!r){if(this.props.addEndListener){var i=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],a=i[0],u=i[1];this.props.addEndListener(a,u)}null!=t&&setTimeout(this.nextCallback,t)}else setTimeout(this.nextCallback,0)},n.render=function(){var t=this.state.status;if(t===s)return null;var e=this.props,n=e.children,r=(e.in,e.mountOnEnter,e.unmountOnExit,e.appear,e.enter,e.exit,e.timeout,e.addEndListener,e.onEnter,e.onEntering,e.onEntered,e.onExit,e.onExiting,e.onExited,e.nodeRef,function(t,e){if(null==t)return{};var n,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(e,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return i.createElement(u.Provider,{value:null},"function"==typeof n?n(t,r):i.cloneElement(i.Children.only(n),r))},e}(i.Component);function m(){}d.contextType=u,d.propTypes={},d.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:m,onEntering:m,onEntered:m,onExit:m,onExiting:m,onExited:m},d.UNMOUNTED=s,d.EXITED=l,d.ENTERING=c,d.ENTERED=f,d.EXITING=p;var h=d},2473:function(t){"use strict";var e=function(){};t.exports=e}}]);
//# sourceMappingURL=component---src-pages-index-js-01e4ca3d55d3b4b0cf83.js.map