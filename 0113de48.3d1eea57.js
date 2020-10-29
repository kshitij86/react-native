(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{1006:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return u}));var n=a(0),b=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,b=function(e,t){if(null==e)return{};var a,n,b={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(b[a]=e[a]);return b}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(b[a]=e[a])}return b}var O=b.a.createContext({}),j=function(e){var t=b.a.useContext(O),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},o=function(e){var t=j(e.components);return b.a.createElement(O.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},d=b.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,O=i(e,["components","mdxType","originalType","parentName"]),o=j(a),d=n,u=o["".concat(l,".").concat(d)]||o[d]||p[d]||r;return a?b.a.createElement(u,c(c({ref:t},O),{},{components:a})):b.a.createElement(u,c({ref:t},O))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,l=new Array(r);l[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var O=2;O<r;O++)l[O]=a[O];return b.a.createElement.apply(null,l)}return b.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},104:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return j}));var n=a(2),b=a(7),r=(a(0),a(1006)),l={id:"statusbar",title:"StatusBar"},c={unversionedId:"statusbar",id:"version-0.61/statusbar",isDocsHomePage:!1,title:"StatusBar",description:"Component to control the app status bar.",source:"@site/versioned_docs/version-0.61/statusbar.md",slug:"/statusbar",permalink:"/docs/0.61/statusbar",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/versioned_docs/version-0.61/statusbar.md",version:"0.61",lastUpdatedAt:1603945169,sidebar:"version-0.61/components",previous:{title:"\ud83d\udea7 Slider",permalink:"/docs/0.61/slider"},next:{title:"Switch",permalink:"/docs/0.61/switch"}},i=[{value:"Usage with Navigator",id:"usage-with-navigator",children:[]},{value:"Imperative API",id:"imperative-api",children:[]},{value:"Constants",id:"constants",children:[]},{value:"Props",id:"props",children:[{value:"<code>animated</code>",id:"animated",children:[]},{value:"<code>backgroundColor</code>",id:"backgroundcolor",children:[]},{value:"<code>barStyle</code>",id:"barstyle",children:[]},{value:"<code>hidden</code>",id:"hidden",children:[]},{value:"<code>networkActivityIndicatorVisible</code>",id:"networkactivityindicatorvisible",children:[]},{value:"<code>showHideTransition</code>",id:"showhidetransition",children:[]},{value:"<code>translucent</code>",id:"translucent",children:[]}]},{value:"Methods",id:"methods",children:[{value:"<code>popStackEntry()</code>",id:"popstackentry",children:[]},{value:"<code>pushStackEntry()</code>",id:"pushstackentry",children:[]},{value:"<code>replaceStackEntry()</code>",id:"replacestackentry",children:[]},{value:"<code>setBackgroundColor()</code>",id:"setbackgroundcolor",children:[]},{value:"<code>setBarStyle()</code>",id:"setbarstyle",children:[]},{value:"<code>setHidden()</code>",id:"sethidden",children:[]},{value:"<code>setNetworkActivityIndicatorVisible()</code>",id:"setnetworkactivityindicatorvisible",children:[]},{value:"<code>setTranslucent()</code>",id:"settranslucent",children:[]}]},{value:"Type Definitions",id:"type-definitions",children:[{value:"StatusBarAnimation",id:"statusbaranimation",children:[]},{value:"StatusBarStyle",id:"statusbarstyle",children:[]}]}],O={rightToc:i};function j(e){var t=e.components,a=Object(b.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},O,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Component to control the app status bar."),Object(r.b)("h3",{id:"usage-with-navigator"},"Usage with Navigator"),Object(r.b)("p",null,"It is possible to have multiple ",Object(r.b)("inlineCode",{parentName:"p"},"StatusBar")," components mounted at the same time. The props will be merged in the order the ",Object(r.b)("inlineCode",{parentName:"p"},"StatusBar")," components were mounted."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),'<View>\n  <StatusBar backgroundColor="blue" barStyle="light-content" />\n  <View>\n    <StatusBar hidden={route.statusBarHidden} />\n    ...\n  </View>\n</View>\n')),Object(r.b)("h3",{id:"imperative-api"},"Imperative API"),Object(r.b)("p",null,"For cases where using a component is not ideal, there is also an imperative API exposed as static functions on the component. It is however not recommended to use the static API and the component for the same prop because any value set by the static API will get overridden by the one set by the component in the next render."),Object(r.b)("hr",null),Object(r.b)("h1",{id:"reference"},"Reference"),Object(r.b)("h2",{id:"constants"},"Constants"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"currentHeight")," (Android only) The height of the status bar."),Object(r.b)("h2",{id:"props"},"Props"),Object(r.b)("h3",{id:"animated"},Object(r.b)("inlineCode",{parentName:"h3"},"animated")),Object(r.b)("p",null,"If the transition between status bar property changes should be animated. Supported for backgroundColor, barStyle and hidden."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"bool"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"backgroundcolor"},Object(r.b)("inlineCode",{parentName:"h3"},"backgroundColor")),Object(r.b)("p",null,"The background color of the status bar."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Platform"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/0.61/colors"}),"color")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Android")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"barstyle"},Object(r.b)("inlineCode",{parentName:"h3"},"barStyle")),Object(r.b)("p",null,"Sets the color of the status bar text."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"enum('default', 'light-content', 'dark-content')"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"hidden"},Object(r.b)("inlineCode",{parentName:"h3"},"hidden")),Object(r.b)("p",null,"If the status bar is hidden."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"bool"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"networkactivityindicatorvisible"},Object(r.b)("inlineCode",{parentName:"h3"},"networkActivityIndicatorVisible")),Object(r.b)("p",null,"If the network activity indicator should be visible."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Platform"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"bool"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"iOS")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"showhidetransition"},Object(r.b)("inlineCode",{parentName:"h3"},"showHideTransition")),Object(r.b)("p",null,"The transition effect when showing and hiding the status bar using the ",Object(r.b)("inlineCode",{parentName:"p"},"hidden")," prop. Defaults to 'fade'."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Platform"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"enum('fade', 'slide')"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"iOS")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"translucent"},Object(r.b)("inlineCode",{parentName:"h3"},"translucent")),Object(r.b)("p",null,"If the status bar is translucent. When translucent is set to true, the app will draw under the status bar. This is useful when using a semi transparent status bar color."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Platform"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"bool"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Android")))),Object(r.b)("h2",{id:"methods"},"Methods"),Object(r.b)("h3",{id:"popstackentry"},Object(r.b)("inlineCode",{parentName:"h3"},"popStackEntry()")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"static popStackEntry(entry: any)\n")),Object(r.b)("p",null,"Get and remove the last a StatusBar entry from the stack."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameters:")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"entry"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"any"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Entry returned from ",Object(r.b)("inlineCode",{parentName:"td"},"pushStackEntry"),".")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"pushstackentry"},Object(r.b)("inlineCode",{parentName:"h3"},"pushStackEntry()")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"static pushStackEntry(props: any)\n")),Object(r.b)("p",null,"Push a StatusBar entry onto the stack. The return value should be passed to ",Object(r.b)("inlineCode",{parentName:"p"},"popStackEntry")," when complete."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameters:")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"props"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"any"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Object containing the StatusBar props to use in the stack entry.")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"replacestackentry"},Object(r.b)("inlineCode",{parentName:"h3"},"replaceStackEntry()")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"static replaceStackEntry(entry: any, props: any)\n")),Object(r.b)("p",null,"Replace an existing StatusBar stack entry with new props."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameters:")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"entry"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"any"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Entry returned from ",Object(r.b)("inlineCode",{parentName:"td"},"pushStackEntry")," to replace.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"props"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"any"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Object containing the StatusBar props to use in the replacement stack entry.")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"setbackgroundcolor"},Object(r.b)("inlineCode",{parentName:"h3"},"setBackgroundColor()")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"static setBackgroundColor(color: string, [animated]: boolean)\n")),Object(r.b)("p",null,"Set the background color for the status bar. Android-only"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameters:")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"color"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Background color.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"animated"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Animate the style change.")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"setbarstyle"},Object(r.b)("inlineCode",{parentName:"h3"},"setBarStyle()")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"static setBarStyle(style: StatusBarStyle, [animated]: boolean)\n")),Object(r.b)("p",null,"Set the status bar style"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameters:")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"style"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/0.61/statusbar#statusbarstyle"}),"StatusBarStyle")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Status bar style to set")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"animated"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Animate the style change.")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"sethidden"},Object(r.b)("inlineCode",{parentName:"h3"},"setHidden()")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"static setHidden(hidden: boolean, [animation]: StatusBarAnimation)\n")),Object(r.b)("p",null,"Show or hide the status bar"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameters:")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"hidden"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Hide the status bar.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"animation"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/0.61/statusbar#statusbaranimation"}),"StatusBarAnimation")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Optional animation when changing the status bar hidden property.")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"setnetworkactivityindicatorvisible"},Object(r.b)("inlineCode",{parentName:"h3"},"setNetworkActivityIndicatorVisible()")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"static setNetworkActivityIndicatorVisible(visible: boolean)\n")),Object(r.b)("p",null,"Control the visibility of the network activity indicator. iOS-only."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameters:")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"visible"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Show the indicator.")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"settranslucent"},Object(r.b)("inlineCode",{parentName:"h3"},"setTranslucent()")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"static setTranslucent(translucent: boolean)\n")),Object(r.b)("p",null,"Control the translucency of the status bar. Android-only."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameters:")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"translucent"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Set as translucent.")))),Object(r.b)("h2",{id:"type-definitions"},"Type Definitions"),Object(r.b)("h3",{id:"statusbaranimation"},"StatusBarAnimation"),Object(r.b)("p",null,"Status bar animation"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\\$Enum")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Constants:")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Value"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"none"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No animation")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"fade"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Fade animation")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"slide"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Slide animation")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"statusbarstyle"},"StatusBarStyle"),Object(r.b)("p",null,"Status bar style"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\\$Enum")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Constants:")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Value"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"default"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Default status bar style (dark for iOS, light for Android)")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"light-content"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Dark background, white texts and icons")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"dark-content"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Light background, dark texts and icons (requires API>=23 on Android)")))))}j.isMDXComponent=!0}}]);