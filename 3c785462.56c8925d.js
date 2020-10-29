(window.webpackJsonp=window.webpackJsonp||[]).push([[238],{1006:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),b=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=b(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=b(n),u=r,m=d["".concat(c,".").concat(u)]||d[u]||p[u]||o;return n?a.a.createElement(m,i(i({ref:t},s),{},{components:n})):a.a.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},326:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var r=n(2),a=n(7),o=(n(0),n(1006)),c={id:"backhandler",title:"BackHandler"},i={unversionedId:"backhandler",id:"version-0.61/backhandler",isDocsHomePage:!1,title:"BackHandler",description:"Detect hardware button presses for back navigation.",source:"@site/versioned_docs/version-0.61/backhandler.md",slug:"/backhandler",permalink:"/docs/0.61/backhandler",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/versioned_docs/version-0.61/backhandler.md",version:"0.61",lastUpdatedAt:1603945169,sidebar:"version-0.61/api",previous:{title:"\ud83d\udea7 AsyncStorage",permalink:"/docs/0.61/asyncstorage"},next:{title:"\ud83d\udea7 Clipboard",permalink:"/docs/0.61/clipboard"}},l=[{value:"Methods",id:"methods",children:[{value:"<code>addEventListener()</code>",id:"addeventlistener",children:[]},{value:"<code>exitApp()</code>",id:"exitapp",children:[]},{value:"<code>removeEventListener()</code>",id:"removeeventlistener",children:[]}]}],s={rightToc:l};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Detect hardware button presses for back navigation."),Object(o.b)("p",null,"Android: Detect hardware back button presses, and programmatically invoke the default back button functionality to exit the app if there are no listeners or if none of the listeners return true."),Object(o.b)("p",null,"tvOS: Detect presses of the menu button on the TV remote. (Still to be implemented: programmatically disable menu button handling functionality to exit the app if there are no listeners or if none of the listeners return true.)"),Object(o.b)("p",null,"iOS: Not applicable."),Object(o.b)("p",null,"The event subscriptions are called in reverse order (i.e. last registered subscription first), and if one subscription returns true then subscriptions registered earlier will not be called. Beware: If your app shows an opened ",Object(o.b)("inlineCode",{parentName:"p"},"Modal"),", BackHandler will not publish any events (",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/modal#onrequestclose"}),"see ",Object(o.b)("inlineCode",{parentName:"a"},"Modal")," docs"),")."),Object(o.b)("p",null,"Example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"BackHandler.addEventListener('hardwareBackPress', function() {\n  // this.onMainScreen and this.goBack are just examples, you need to use your own implementation here\n  // Typically you would use the navigator here to go to the last state.\n\n  if (!this.onMainScreen()) {\n    this.goBack();\n    return true;\n  }\n  return false;\n});\n")),Object(o.b)("p",null,"Lifecycle example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"  componentDidMount() {\n    this.backHandler = BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);\n  }\n\n  componentWillUnmount() {\n    this.backHandler.remove()\n  }\n\n  handleBackPress = () => {\n    this.goBack(); // works best when the goBack is async\n    return true;\n  }\n")),Object(o.b)("p",null,"Lifecycle alternative:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"  componentDidMount() {\n    this.backHandler = BackHandler.addEventListener('hardwareBackPress', () => {\n      this.goBack(); // works best when the goBack is async\n      return true;\n    });\n  }\n\n  componentWillUnmount() {\n    this.backHandler.remove();\n  }\n")),Object(o.b)("hr",null),Object(o.b)("h1",{id:"reference"},"Reference"),Object(o.b)("h2",{id:"methods"},"Methods"),Object(o.b)("h3",{id:"addeventlistener"},Object(o.b)("inlineCode",{parentName:"h3"},"addEventListener()")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"static addEventListener(eventName, handler)\n")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"exitapp"},Object(o.b)("inlineCode",{parentName:"h3"},"exitApp()")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"static exitApp()\n")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"removeeventlistener"},Object(o.b)("inlineCode",{parentName:"h3"},"removeEventListener()")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"static removeEventListener(eventName, handler)\n")))}b.isMDXComponent=!0}}]);