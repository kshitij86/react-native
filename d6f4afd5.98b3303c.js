(window.webpackJsonp=window.webpackJsonp||[]).push([[774],{1006:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var b=o.a.createContext({}),p=function(e){var t=o.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return o.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),d=p(n),u=r,m=d["".concat(c,".").concat(u)]||d[u]||s[u]||a;return n?o.a.createElement(m,i(i({ref:t},b),{},{components:n})):o.a.createElement(m,i({ref:t},b))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var b=2;b<a;b++)c[b]=n[b];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},846:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(2),o=n(7),a=(n(0),n(1006)),c={id:"clipboard",title:"\ud83d\udea7 Clipboard"},i={unversionedId:"clipboard",id:"version-0.61/clipboard",isDocsHomePage:!1,title:"\ud83d\udea7 Clipboard",description:"Deprecated. Use @react-native-community/clipboard instead.",source:"@site/versioned_docs/version-0.61/clipboard.md",slug:"/clipboard",permalink:"/docs/0.61/clipboard",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/versioned_docs/version-0.61/clipboard.md",version:"0.61",lastUpdatedAt:1603945169,sidebar:"version-0.61/api",previous:{title:"BackHandler",permalink:"/docs/0.61/backhandler"},next:{title:"\ud83d\udea7 DatePickerAndroid",permalink:"/docs/0.61/datepickerandroid"}},l=[{value:"Methods",id:"methods",children:[{value:"<code>getString()</code>",id:"getstring",children:[]},{value:"<code>setString()</code>",id:"setstring",children:[]}]}],b={rightToc:l};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"Deprecated.")," Use ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/react-native-community/clipboard"}),"@react-native-community/clipboard")," instead.")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"Clipboard")," gives you an interface for setting and getting content from Clipboard on both Android and iOS"),Object(a.b)("hr",null),Object(a.b)("h1",{id:"reference"},"Reference"),Object(a.b)("h2",{id:"methods"},"Methods"),Object(a.b)("h3",{id:"getstring"},Object(a.b)("inlineCode",{parentName:"h3"},"getString()")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"static getString()\n")),Object(a.b)("p",null,"Get content of string type, this method returns a ",Object(a.b)("inlineCode",{parentName:"p"},"Promise"),", so you can use following code to get clipboard content"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"async _getContent() {\n  var content = await Clipboard.getString();\n}\n")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"setstring"},Object(a.b)("inlineCode",{parentName:"h3"},"setString()")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"static setString(content)\n")),Object(a.b)("p",null,"Set content of string type. You can use following code to set clipboard content"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"_setContent() {\n  Clipboard.setString('hello world');\n}\n")),Object(a.b)("p",null,"@param the content to be stored in the clipboard."))}p.isMDXComponent=!0}}]);