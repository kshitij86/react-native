(window.webpackJsonp=window.webpackJsonp||[]).push([[537],{1006:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return m}));var n=a(0),l=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var c=l.a.createContext({}),d=function(e){var t=l.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=d(e.components);return l.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},u=l.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,c=b(e,["components","mdxType","originalType","parentName"]),s=d(a),u=n,m=s["".concat(i,".").concat(u)]||s[u]||p[u]||r;return a?l.a.createElement(m,o(o({ref:t},c),{},{components:a})):l.a.createElement(m,o({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=u;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var c=2;c<r;c++)i[c]=a[c];return l.a.createElement.apply(null,i)}return l.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},1007:function(e,t,a){"use strict";function n(e){var t,a,l="";if("string"==typeof e||"number"==typeof e)l+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(l&&(l+=" "),l+=a);else for(t in e)e[t]&&(l&&(l+=" "),l+=t);return l}t.a=function(){for(var e,t,a=0,l="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(l&&(l+=" "),l+=t);return l}},1008:function(e,t,a){"use strict";var n=a(0),l=a(1009);t.a=function(){var e=Object(n.useContext)(l.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},1009:function(e,t,a){"use strict";var n=a(0),l=Object(n.createContext)(void 0);t.a=l},1010:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=a(1008),i=a(1007),o=a(54),b=a.n(o),c=37,d=39;t.a=function(e){var t=e.block,a=e.children,o=e.defaultValue,s=e.values,p=e.groupId,u=e.className,m=Object(r.a)(),O=m.tabGroupChoices,j=m.setTabGroupChoices,h=Object(n.useState)(o),A=h[0],f=h[1],y=Object(n.useState)(!1),g=y[0],N=y[1];if(null!=p){var C=O[p];null!=C&&C!==A&&s.some((function(e){return e.value===C}))&&f(C)}var w=function(e){f(e),null!=p&&j(p,e)},v=[],D=function(e){e.metaKey||e.altKey||e.ctrlKey||N(!0)},B=function(){N(!1)};return Object(n.useEffect)((function(){return window.addEventListener("keydown",D),window.addEventListener("mousedown",B),function(){window.removeEventListener("keydown",D),window.removeEventListener("mousedown",B)}}),[]),l.a.createElement("div",null,l.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":t},u)},s.map((function(e){var t=e.value,a=e.label;return l.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":A===t,className:Object(i.a)("tabs__item",b.a.tabItem,{"tabs__item--active":A===t}),style:g?{}:{outline:"none"},key:t,ref:function(e){return v.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case d:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case c:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(v,e.target,e),D(e)},onFocus:function(){return w(t)},onClick:function(){w(t),N(!1)},onPointerDown:function(){return N(!1)}},a)}))),l.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},n.Children.toArray(a).filter((function(e){return e.props.value===A}))[0]))}},1011:function(e,t,a){"use strict";var n=a(0),l=a.n(n);t.a=function(e){return l.a.createElement("div",null,e.children)}},1012:function(e,t,a){"use strict";var n=a(6),l=!!n.a.canUseDOM&&navigator.platform.startsWith("Mac"),r=!!n.a.canUseDOM&&navigator.platform.startsWith("Win"),i=l?"ios":"android",o=l?"macos":r?"windows":"linux";t.a={defaultGuide:"quickstart",defaultOs:o,defaultPackageManager:"npm",defaultPlatform:i,defaultSyntax:"functional",getDevNotesTabs:function(e){return void 0===e&&(e=["android","ios","web","windows"]),[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean)},guides:[{label:"Expo CLI Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}]}},619:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return d})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return u}));var n=a(2),l=a(7),r=(a(0),a(1006)),i=a(1010),o=a(1011),b=a(1012),c={id:"modal",title:"Modal"},d={unversionedId:"modal",id:"modal",isDocsHomePage:!1,title:"Modal",description:"The Modal component is a basic way to present content above an enclosing view.",source:"@site/../docs/modal.md",slug:"/modal",permalink:"/docs/next/modal",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../docs/modal.md",version:"current",lastUpdatedAt:1603945169,sidebar:"components",previous:{title:"KeyboardAvoidingView",permalink:"/docs/next/keyboardavoidingview"},next:{title:"Pressable",permalink:"/docs/next/pressable"}},s=[{value:"Example",id:"example",children:[]},{value:"Props",id:"props",children:[{value:"<code>animated</code>",id:"animated",children:[]},{value:"<code>animationType</code>",id:"animationtype",children:[]},{value:"<code>hardwareAccelerated</code>",id:"hardwareaccelerated",children:[]},{value:"<code>onDismiss</code>",id:"ondismiss",children:[]},{value:"<code>onOrientationChange</code>",id:"onorientationchange",children:[]},{value:"<code>onRequestClose</code>",id:"onrequestclose",children:[]},{value:"<code>onShow</code>",id:"onshow",children:[]},{value:"<code>presentationStyle</code>",id:"presentationstyle",children:[]},{value:"<code>statusBarTranslucent</code>",id:"statusbartranslucent",children:[]},{value:"<code>supportedOrientations</code>",id:"supportedorientations",children:[]},{value:"<code>transparent</code>",id:"transparent",children:[]},{value:"<code>visible</code>",id:"visible",children:[]}]}],p={rightToc:s};function u(e){var t=e.components,a=Object(l.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The Modal component is a basic way to present content above an enclosing view."),Object(r.b)("h2",{id:"example"},"Example"),Object(r.b)(i.a,{groupId:"syntax",defaultValue:b.a.defaultSyntax,values:b.a.syntax,mdxType:"Tabs"},Object(r.b)(o.a,{value:"functional",mdxType:"TabItem"},Object(r.b)("div",{className:"snack-player","data-snack-name":"Modal","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useState%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%0A%20%20Alert%2C%0A%20%20Modal%2C%0A%20%20StyleSheet%2C%0A%20%20Text%2C%0A%20%20TouchableHighlight%2C%0A%20%20View%0A%7D%20from%20%22react-native%22%3B%0A%0Aconst%20App%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20%5BmodalVisible%2C%20setModalVisible%5D%20%3D%20useState(false)%3B%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7Bstyles.centeredView%7D%3E%0A%20%20%20%20%20%20%3CModal%0A%20%20%20%20%20%20%20%20animationType%3D%22slide%22%0A%20%20%20%20%20%20%20%20transparent%3D%7Btrue%7D%0A%20%20%20%20%20%20%20%20visible%3D%7BmodalVisible%7D%0A%20%20%20%20%20%20%20%20onRequestClose%3D%7B()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20Alert.alert(%22Modal%20has%20been%20closed.%22)%3B%0A%20%20%20%20%20%20%20%20%20%20setModalVisible(!modalVisible)%3B%0A%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.centeredView%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.modalView%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.modalText%7D%3EHello%20World!%3C%2FText%3E%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CTouchableHighlight%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20style%3D%7B%7B%20...styles.openButton%2C%20backgroundColor%3A%20%22%232196F3%22%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20setModalVisible(!modalVisible)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.textStyle%7D%3EHide%20Modal%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FTouchableHighlight%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%3C%2FModal%3E%0A%0A%20%20%20%20%20%20%3CTouchableHighlight%0A%20%20%20%20%20%20%20%20style%3D%7Bstyles.openButton%7D%0A%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20setModalVisible(true)%3B%0A%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.textStyle%7D%3EShow%20Modal%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FTouchableHighlight%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20centeredView%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%2C%0A%20%20%20%20alignItems%3A%20%22center%22%2C%0A%20%20%20%20marginTop%3A%2022%0A%20%20%7D%2C%0A%20%20modalView%3A%20%7B%0A%20%20%20%20margin%3A%2020%2C%0A%20%20%20%20backgroundColor%3A%20%22white%22%2C%0A%20%20%20%20borderRadius%3A%2020%2C%0A%20%20%20%20padding%3A%2035%2C%0A%20%20%20%20alignItems%3A%20%22center%22%2C%0A%20%20%20%20shadowColor%3A%20%22%23000%22%2C%0A%20%20%20%20shadowOffset%3A%20%7B%0A%20%20%20%20%20%20width%3A%200%2C%0A%20%20%20%20%20%20height%3A%202%0A%20%20%20%20%7D%2C%0A%20%20%20%20shadowOpacity%3A%200.25%2C%0A%20%20%20%20shadowRadius%3A%203.84%2C%0A%20%20%20%20elevation%3A%205%0A%20%20%7D%2C%0A%20%20openButton%3A%20%7B%0A%20%20%20%20backgroundColor%3A%20%22%23F194FF%22%2C%0A%20%20%20%20borderRadius%3A%2020%2C%0A%20%20%20%20padding%3A%2010%2C%0A%20%20%20%20elevation%3A%202%0A%20%20%7D%2C%0A%20%20textStyle%3A%20%7B%0A%20%20%20%20color%3A%20%22white%22%2C%0A%20%20%20%20fontWeight%3A%20%22bold%22%2C%0A%20%20%20%20textAlign%3A%20%22center%22%0A%20%20%7D%2C%0A%20%20modalText%3A%20%7B%0A%20%20%20%20marginBottom%3A%2015%2C%0A%20%20%20%20textAlign%3A%20%22center%22%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-platform":"web","data-snack-supported-platforms":"android,ios","data-snack-theme":"light","data-snack-preview":"true"})),Object(r.b)(o.a,{value:"classical",mdxType:"TabItem"},Object(r.b)("div",{className:"snack-player","data-snack-name":"Modal","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20Component%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%0A%20%20Alert%2C%0A%20%20Modal%2C%0A%20%20StyleSheet%2C%0A%20%20Text%2C%0A%20%20TouchableHighlight%2C%0A%20%20View%0A%7D%20from%20%22react-native%22%3B%0A%0Aclass%20App%20extends%20Component%20%7B%0A%20%20state%20%3D%20%7B%0A%20%20%20%20modalVisible%3A%20false%0A%20%20%7D%3B%0A%0A%20%20setModalVisible%20%3D%20(visible)%20%3D%3E%20%7B%0A%20%20%20%20this.setState(%7B%20modalVisible%3A%20visible%20%7D)%3B%0A%20%20%7D%0A%0A%20%20render()%20%7B%0A%20%20%20%20const%20%7B%20modalVisible%20%7D%20%3D%20this.state%3B%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.centeredView%7D%3E%0A%20%20%20%20%20%20%20%20%3CModal%0A%20%20%20%20%20%20%20%20%20%20animationType%3D%22slide%22%0A%20%20%20%20%20%20%20%20%20%20transparent%3D%7Btrue%7D%0A%20%20%20%20%20%20%20%20%20%20visible%3D%7BmodalVisible%7D%0A%20%20%20%20%20%20%20%20%20%20onRequestClose%3D%7B()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20Alert.alert(%22Modal%20has%20been%20closed.%22)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20this.setModalVisible(!modalVisible)%3B%0A%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.centeredView%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.modalView%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.modalText%7D%3EHello%20World!%3C%2FText%3E%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CTouchableHighlight%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20style%3D%7B%7B%20...styles.openButton%2C%20backgroundColor%3A%20%22%232196F3%22%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20this.setModalVisible(!modalVisible)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.textStyle%7D%3EHide%20Modal%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FTouchableHighlight%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%20%20%3C%2FModal%3E%0A%0A%20%20%20%20%20%20%20%20%3CTouchableHighlight%0A%20%20%20%20%20%20%20%20%20%20style%3D%7Bstyles.openButton%7D%0A%20%20%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20this.setModalVisible(true)%3B%0A%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.textStyle%7D%3EShow%20Modal%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3C%2FTouchableHighlight%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20)%3B%0A%20%20%7D%0A%7D%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20centeredView%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%2C%0A%20%20%20%20alignItems%3A%20%22center%22%2C%0A%20%20%20%20marginTop%3A%2022%0A%20%20%7D%2C%0A%20%20modalView%3A%20%7B%0A%20%20%20%20margin%3A%2020%2C%0A%20%20%20%20backgroundColor%3A%20%22white%22%2C%0A%20%20%20%20borderRadius%3A%2020%2C%0A%20%20%20%20padding%3A%2035%2C%0A%20%20%20%20alignItems%3A%20%22center%22%2C%0A%20%20%20%20shadowColor%3A%20%22%23000%22%2C%0A%20%20%20%20shadowOffset%3A%20%7B%0A%20%20%20%20%20%20width%3A%200%2C%0A%20%20%20%20%20%20height%3A%202%0A%20%20%20%20%7D%2C%0A%20%20%20%20shadowOpacity%3A%200.25%2C%0A%20%20%20%20shadowRadius%3A%203.84%2C%0A%20%20%20%20elevation%3A%205%0A%20%20%7D%2C%0A%20%20openButton%3A%20%7B%0A%20%20%20%20backgroundColor%3A%20%22%23F194FF%22%2C%0A%20%20%20%20borderRadius%3A%2020%2C%0A%20%20%20%20padding%3A%2010%2C%0A%20%20%20%20elevation%3A%202%0A%20%20%7D%2C%0A%20%20textStyle%3A%20%7B%0A%20%20%20%20color%3A%20%22white%22%2C%0A%20%20%20%20fontWeight%3A%20%22bold%22%2C%0A%20%20%20%20textAlign%3A%20%22center%22%0A%20%20%7D%2C%0A%20%20modalText%3A%20%7B%0A%20%20%20%20marginBottom%3A%2015%2C%0A%20%20%20%20textAlign%3A%20%22center%22%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-platform":"web","data-snack-supported-platforms":"android,ios","data-snack-theme":"light","data-snack-preview":"true"}))),Object(r.b)("hr",null),Object(r.b)("h1",{id:"reference"},"Reference"),Object(r.b)("h2",{id:"props"},"Props"),Object(r.b)("h3",{id:"animated"},Object(r.b)("inlineCode",{parentName:"h3"},"animated")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"Deprecated.")," Use the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/modal#animationtype"}),Object(r.b)("inlineCode",{parentName:"a"},"animationType"))," prop instead.")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"animationtype"},Object(r.b)("inlineCode",{parentName:"h3"},"animationType")),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"animationType")," prop controls how the modal animates."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"slide")," slides in from the bottom"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"fade")," fades into view"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"none")," appears without an animation")),Object(r.b)("p",null,"Default is set to ",Object(r.b)("inlineCode",{parentName:"p"},"none"),"."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"enum('none', 'slide', 'fade')"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"hardwareaccelerated"},Object(r.b)("inlineCode",{parentName:"h3"},"hardwareAccelerated")),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"hardwareAccelerated")," prop controls whether to force hardware acceleration for the underlying window."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Platform"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"bool"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Android")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"ondismiss"},Object(r.b)("inlineCode",{parentName:"h3"},"onDismiss")),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"onDismiss")," prop allows passing a function that will be called once the modal has been dismissed."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Platform"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"function"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"iOS")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"onorientationchange"},Object(r.b)("inlineCode",{parentName:"h3"},"onOrientationChange")),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"onOrientationChange")," callback is called when the orientation changes while the modal is being displayed. The orientation provided is only 'portrait' or 'landscape'. This callback is also called on initial render, regardless of the current orientation."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Platform"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"function"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"iOS")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"onrequestclose"},Object(r.b)("inlineCode",{parentName:"h3"},"onRequestClose")),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"onRequestClose")," callback is called when the user taps the hardware back button on Android or the menu button on Apple TV. Because of this required prop, be aware that ",Object(r.b)("inlineCode",{parentName:"p"},"BackHandler")," events will not be emitted as long as the modal is open."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Platform"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"function"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Android, Platform.isTVOS")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"function"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"(Others)")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"onshow"},Object(r.b)("inlineCode",{parentName:"h3"},"onShow")),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"onShow")," prop allows passing a function that will be called once the modal has been shown."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"function"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"presentationstyle"},Object(r.b)("inlineCode",{parentName:"h3"},"presentationStyle")),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"presentationStyle")," prop controls how the modal appears (generally on larger devices such as iPad or plus-sized iPhones). See ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.apple.com/reference/uikit/uimodalpresentationstyle"}),"https://developer.apple.com/reference/uikit/uimodalpresentationstyle")," for details."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"fullScreen")," covers the screen completely"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"pageSheet")," covers portrait-width view centered (only on larger devices)"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"formSheet")," covers narrow-width view centered (only on larger devices)"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"overFullScreen")," covers the screen completely, but allows transparency")),Object(r.b)("p",null,"Default is set to ",Object(r.b)("inlineCode",{parentName:"p"},"overFullScreen")," or ",Object(r.b)("inlineCode",{parentName:"p"},"fullScreen")," depending on ",Object(r.b)("inlineCode",{parentName:"p"},"transparent")," property."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Platform"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"enum('fullScreen', 'pageSheet', 'formSheet', 'overFullScreen')"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"iOS")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"statusbartranslucent"},Object(r.b)("inlineCode",{parentName:"h3"},"statusBarTranslucent")),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"statusBarTranslucent")," prop determines whether your modal should go under the system statusbar."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Platform"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"bool"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Android")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"supportedorientations"},Object(r.b)("inlineCode",{parentName:"h3"},"supportedOrientations")),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"supportedOrientations")," prop allows the modal to be rotated to any of the specified orientations. On iOS, the modal is still restricted by what's specified in your app's Info.plist's UISupportedInterfaceOrientations field. When using ",Object(r.b)("inlineCode",{parentName:"p"},"presentationStyle")," of ",Object(r.b)("inlineCode",{parentName:"p"},"pageSheet")," or ",Object(r.b)("inlineCode",{parentName:"p"},"formSheet"),", this property will be ignored by iOS."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Platform"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"array of enum('portrait', 'portrait-upside-down', 'landscape', 'landscape-left', 'landscape-right')"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"iOS")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"transparent"},Object(r.b)("inlineCode",{parentName:"h3"},"transparent")),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"transparent")," prop determines whether your modal will fill the entire view. Setting this to ",Object(r.b)("inlineCode",{parentName:"p"},"true")," will render the modal over a transparent background."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"bool"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"visible"},Object(r.b)("inlineCode",{parentName:"h3"},"visible")),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"visible")," prop determines whether your modal is visible."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"bool"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No")))))}u.isMDXComponent=!0}}]);