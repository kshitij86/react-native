(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{1006:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),b=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=b(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=b(n),d=a,m=p["".concat(r,".").concat(d)]||p[d]||u[d]||o;return n?i.a.createElement(m,l(l({ref:t},s),{},{components:n})):i.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var s=2;s<o;s++)r[s]=n[s];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1007:function(e,t,n){"use strict";function a(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}t.a=function(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(i&&(i+=" "),i+=t);return i}},1008:function(e,t,n){"use strict";var a=n(0),i=n(1009);t.a=function(){var e=Object(a.useContext)(i.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},1009:function(e,t,n){"use strict";var a=n(0),i=Object(a.createContext)(void 0);t.a=i},1010:function(e,t,n){"use strict";var a=n(0),i=n.n(a),o=n(1008),r=n(1007),l=n(54),c=n.n(l),s=37,b=39;t.a=function(e){var t=e.block,n=e.children,l=e.defaultValue,p=e.values,u=e.groupId,d=e.className,m=Object(o.a)(),v=m.tabGroupChoices,h=m.setTabGroupChoices,f=Object(a.useState)(l),O=f[0],j=f[1],g=Object(a.useState)(!1),w=g[0],N=g[1];if(null!=u){var T=v[u];null!=T&&T!==O&&p.some((function(e){return e.value===T}))&&j(T)}var y=function(e){j(e),null!=u&&h(u,e)},V=[],C=function(e){e.metaKey||e.altKey||e.ctrlKey||N(!0)},k=function(){N(!1)};return Object(a.useEffect)((function(){return window.addEventListener("keydown",C),window.addEventListener("mousedown",k),function(){window.removeEventListener("keydown",C),window.removeEventListener("mousedown",k)}}),[]),i.a.createElement("div",null,i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(r.a)("tabs",{"tabs--block":t},d)},p.map((function(e){var t=e.value,n=e.label;return i.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===t,className:Object(r.a)("tabs__item",c.a.tabItem,{"tabs__item--active":O===t}),style:w?{}:{outline:"none"},key:t,ref:function(e){return V.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case b:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case s:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(V,e.target,e),C(e)},onFocus:function(){return y(t)},onClick:function(){y(t),N(!1)},onPointerDown:function(){return N(!1)}},n)}))),i.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter((function(e){return e.props.value===O}))[0]))}},1011:function(e,t,n){"use strict";var a=n(0),i=n.n(a);t.a=function(e){return i.a.createElement("div",null,e.children)}},1012:function(e,t,n){"use strict";var a=n(6),i=!!a.a.canUseDOM&&navigator.platform.startsWith("Mac"),o=!!a.a.canUseDOM&&navigator.platform.startsWith("Win"),r=i?"ios":"android",l=i?"macos":o?"windows":"linux";t.a={defaultGuide:"quickstart",defaultOs:l,defaultPackageManager:"npm",defaultPlatform:r,defaultSyntax:"functional",getDevNotesTabs:function(e){return void 0===e&&(e=["android","ios","web","windows"]),[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean)},guides:[{label:"Expo CLI Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}]}},189:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return u}));var a=n(2),i=n(7),o=(n(0),n(1006)),r=n(1010),l=n(1011),c=(n(1012),{id:"building-for-tv",title:"Building For TV Devices",hide_table_of_contents:!0}),s={unversionedId:"building-for-tv",id:"version-0.62/building-for-tv",isDocsHomePage:!1,title:"Building For TV Devices",description:"TV devices support has been implemented with the intention of making existing React Native applications work on Apple TV and Android TV, with few or no changes needed in the JavaScript code for the applications.",source:"@site/versioned_docs/version-0.62/building-for-tv.md",slug:"/building-for-tv",permalink:"/docs/0.62/building-for-tv",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/versioned_docs/version-0.62/building-for-tv.md",version:"0.62",lastUpdatedAt:1603945169,sidebar:"version-0.62/docs",previous:{title:"Integration with Existing Apps",permalink:"/docs/0.62/integration-with-existing-apps"},next:{title:"Out-of-Tree Platforms",permalink:"/docs/0.62/out-of-tree-platforms"}},b=[{value:"Build changes",id:"build-changes",children:[]},{value:"Code changes",id:"code-changes",children:[]},{value:"Build changes",id:"build-changes-1",children:[]},{value:"Code changes",id:"code-changes-1",children:[]}],p={rightToc:b};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"TV devices support has been implemented with the intention of making existing React Native applications work on Apple TV and Android TV, with few or no changes needed in the JavaScript code for the applications."),Object(o.b)(r.a,{groupId:"tv",defaultValue:"androidtv",values:[{label:"Android TV",value:"androidtv"},{label:"\ud83d\udea7 tvOS",value:"tvos"}],mdxType:"Tabs"},Object(o.b)(l.a,{value:"androidtv",mdxType:"TabItem"},Object(o.b)("h2",{id:"build-changes"},"Build changes"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("em",{parentName:"li"},"Native layer"),": To run React Native project on Android TV make sure to make the following changes to ",Object(o.b)("inlineCode",{parentName:"li"},"AndroidManifest.xml"))),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml"}),'  \x3c!-- Add custom banner image to display as Android TV launcher icon --\x3e\n <application\n  ...\n  android:banner="@drawable/tv_banner"\n  >\n    ...\n    <intent-filter>\n      ...\n      \x3c!-- Needed to properly create a launch intent when running on Android TV --\x3e\n      <category android:name="android.intent.category.LEANBACK_LAUNCHER"/>\n    </intent-filter>\n    ...\n  </application>\n')),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("em",{parentName:"li"},"JavaScript layer"),": Support for Android TV has been added to ",Object(o.b)("inlineCode",{parentName:"li"},"Platform.android.js"),". You can check whether code is running on Android TV by doing")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"var Platform = require('Platform');\nvar running_on_android_tv = Platform.isTV;\n")),Object(o.b)("h2",{id:"code-changes"},"Code changes"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("em",{parentName:"p"},"Access to touchable controls"),": When running on Android TV the Android framework will automatically apply a directional navigation scheme based on relative position of focusable elements in your views. The ",Object(o.b)("inlineCode",{parentName:"p"},"Touchable")," mixin has code added to detect focus changes and use existing methods to style the components properly and initiate the proper actions when the view is selected using the TV remote, so ",Object(o.b)("inlineCode",{parentName:"p"},"TouchableWithoutFeedback"),", ",Object(o.b)("inlineCode",{parentName:"p"},"TouchableHighlight"),", ",Object(o.b)("inlineCode",{parentName:"p"},"TouchableOpacity")," and ",Object(o.b)("inlineCode",{parentName:"p"},"TouchableNativeFeedback")," will work as expected. In particular:"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"onFocus")," will be executed when the touchable view goes into focus"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"onBlur")," will be executed when the touchable view goes out of focus"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"onPress"),' will be executed when the touchable view is actually selected by pressing the "select" button on the TV remote.'))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("em",{parentName:"p"},"TV remote/keyboard input"),": A new native class, ",Object(o.b)("inlineCode",{parentName:"p"},"ReactAndroidTVRootViewHelper"),", sets up key events handlers for TV remote events. When TV remote events occur, this class fires a JS event. This event will be picked up by instances of the ",Object(o.b)("inlineCode",{parentName:"p"},"TVEventHandler")," JavaScript object. Application code that needs to implement custom handling of TV remote events can create an instance of ",Object(o.b)("inlineCode",{parentName:"p"},"TVEventHandler")," and listen for these events, as in the following code:"))),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"var TVEventHandler = require('TVEventHandler');\n\nclass Game2048 extends React.Component {\n  _tvEventHandler: any;\n\n  _enableTVEventHandler() {\n    this._tvEventHandler = new TVEventHandler();\n    this._tvEventHandler.enable(this, function(cmp, evt) {\n      if (evt && evt.eventType === 'right') {\n        cmp.setState({ board: cmp.state.board.move(2) });\n      } else if (evt && evt.eventType === 'up') {\n        cmp.setState({ board: cmp.state.board.move(1) });\n      } else if (evt && evt.eventType === 'left') {\n        cmp.setState({ board: cmp.state.board.move(0) });\n      } else if (evt && evt.eventType === 'down') {\n        cmp.setState({ board: cmp.state.board.move(3) });\n      } else if (evt && evt.eventType === 'playPause') {\n        cmp.restartGame();\n      }\n    });\n  }\n\n  _disableTVEventHandler() {\n    if (this._tvEventHandler) {\n      this._tvEventHandler.disable();\n      delete this._tvEventHandler;\n    }\n  }\n\n  componentDidMount() {\n    this._enableTVEventHandler();\n  }\n\n  componentWillUnmount() {\n    this._disableTVEventHandler();\n  }\n}\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("em",{parentName:"p"},"Dev Menu support"),": On the simulator, cmd-M will bring up the developer menu, similar to Android. To bring it up on a real Android TV device, press the menu button or long press the fast-forward button on the remote. (Please do not shake the Android TV device, that will not work :) )")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("em",{parentName:"p"},"Known issues"),":"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"TextInput")," components do not work for now (i.e. they cannot receive focus automatically, see ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/facebook/react-native/pull/16500#issuecomment-629285638"}),"this comment"),").",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"It is however possible to use a ref to manually trigger ",Object(o.b)("inlineCode",{parentName:"li"},"inputRef.current.focus()"),"."),Object(o.b)("li",{parentName:"ul"},"You can wrap your input inside a ",Object(o.b)("inlineCode",{parentName:"li"},"TouchableWithoutFeedback")," component and trigger focus in the ",Object(o.b)("inlineCode",{parentName:"li"},"onFocus")," event of that touchable. This enables opening the keyboard via the arrow keys."),Object(o.b)("li",{parentName:"ul"},"The keyboard might reset its state after each keypress (this might only happen inside the Android TV emulator)."))),Object(o.b)("li",{parentName:"ul"},"The content of ",Object(o.b)("inlineCode",{parentName:"li"},"Modal")," components cannot receive focus, see ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/facebook/react-native/issues/24448"}),"this issue")," for details."))))),Object(o.b)(l.a,{value:"tvos",mdxType:"TabItem"},Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Deprecated.")," Use ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/react-native-community/react-native-tvos"}),"react-native-tvos")," instead. For the details please check the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://reactnative.dev/blog/#moving-apple-tv-to-react-native-tvos"}),"0.62 release blog post"),".")),Object(o.b)("h2",{id:"build-changes-1"},"Build changes"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("em",{parentName:"p"},"Native layer"),": React Native Xcode projects all now have Apple TV build targets, with names ending in the string '-tvOS'.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("em",{parentName:"p"},"react-native init"),": New React Native projects created with ",Object(o.b)("inlineCode",{parentName:"p"},"react-native init")," will have Apple TV target automatically created in their XCode projects.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("em",{parentName:"p"},"JavaScript layer"),": Support for Apple TV has been added to ",Object(o.b)("inlineCode",{parentName:"p"},"Platform.ios.js"),". You can check whether code is running on AppleTV by doing"))),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"var Platform = require('Platform');\nvar running_on_tv = Platform.isTV;\n\n// If you want to be more specific and only detect devices running tvOS\n// (but no Android TV devices) you can use:\nvar running_on_apple_tv = Platform.isTVOS;\n")),Object(o.b)("h2",{id:"code-changes-1"},"Code changes"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("em",{parentName:"p"},"General support for tvOS"),": Apple TV specific changes in native code are all wrapped by the TARGET_OS_TV define. These include changes to suppress APIs that are not supported on tvOS (e.g. web views, sliders, switches, status bar, etc.), and changes to support user input from the TV remote or keyboard.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("em",{parentName:"p"},"Common codebase"),": Since tvOS and iOS share most Objective-C and JavaScript code in common, most documentation for iOS applies equally to tvOS.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("em",{parentName:"p"},"Access to touchable controls"),": When running on Apple TV, the native view class is ",Object(o.b)("inlineCode",{parentName:"p"},"RCTTVView"),", which has additional methods to make use of the tvOS focus engine. The ",Object(o.b)("inlineCode",{parentName:"p"},"Touchable")," mixin has code added to detect focus changes and use existing methods to style the components properly and initiate the proper actions when the view is selected using the TV remote, so ",Object(o.b)("inlineCode",{parentName:"p"},"TouchableWithoutFeedback"),", ",Object(o.b)("inlineCode",{parentName:"p"},"TouchableHighlight")," and ",Object(o.b)("inlineCode",{parentName:"p"},"TouchableOpacity")," will work as expected. In particular:"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"onFocus")," will be executed when the touchable view goes into focus"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"onBlur")," will be executed when the touchable view goes out of focus"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"onPress"),' will be executed when the touchable view is actually selected by pressing the "select" button on the TV remote.'))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("em",{parentName:"p"},"TV remote/keyboard input"),": A new native class, ",Object(o.b)("inlineCode",{parentName:"p"},"RCTTVRemoteHandler"),", sets up gesture recognizers for TV remote events. When TV remote events occur, this class fires notifications that are picked up by ",Object(o.b)("inlineCode",{parentName:"p"},"RCTTVNavigationEventEmitter")," (a subclass of ",Object(o.b)("inlineCode",{parentName:"p"},"RCTEventEmitter"),"), that fires a JS event. This event will be picked up by instances of the ",Object(o.b)("inlineCode",{parentName:"p"},"TVEventHandler")," JavaScript object. Application code that needs to implement custom handling of TV remote events can create an instance of ",Object(o.b)("inlineCode",{parentName:"p"},"TVEventHandler")," and listen for these events, as in the following code:"))),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"var TVEventHandler = require('TVEventHandler');\n\nclass Game2048 extends React.Component {\n  _tvEventHandler: any;\n\n  _enableTVEventHandler() {\n    this._tvEventHandler = new TVEventHandler();\n    this._tvEventHandler.enable(this, function(cmp, evt) {\n      if (evt && evt.eventType === 'right') {\n        cmp.setState({ board: cmp.state.board.move(2) });\n      } else if (evt && evt.eventType === 'up') {\n        cmp.setState({ board: cmp.state.board.move(1) });\n      } else if (evt && evt.eventType === 'left') {\n        cmp.setState({ board: cmp.state.board.move(0) });\n      } else if (evt && evt.eventType === 'down') {\n        cmp.setState({ board: cmp.state.board.move(3) });\n      } else if (evt && evt.eventType === 'playPause') {\n        cmp.restartGame();\n      }\n    });\n  }\n\n  _disableTVEventHandler() {\n    if (this._tvEventHandler) {\n      this._tvEventHandler.disable();\n      delete this._tvEventHandler;\n    }\n  }\n\n  componentDidMount() {\n    this._enableTVEventHandler();\n  }\n\n  componentWillUnmount() {\n    this._disableTVEventHandler();\n  }\n}\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("em",{parentName:"p"},"Dev Menu support"),": On the simulator, cmd-D will bring up the developer menu, similar to iOS. To bring it up on a real Apple TV device, make a long press on the play/pause button on the remote. (Please do not shake the Apple TV device, that will not work :) )")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("em",{parentName:"p"},"TV remote animations"),": ",Object(o.b)("inlineCode",{parentName:"p"},"RCTTVView")," native code implements Apple-recommended parallax animations to help guide the eye as the user navigates through views. The animations can be disabled or adjusted with new optional view properties.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("em",{parentName:"p"},"Back navigation with the TV remote menu button"),": The ",Object(o.b)("inlineCode",{parentName:"p"},"BackHandler")," component, originally written to support the Android back button, now also supports back navigation on the Apple TV using the menu button on the TV remote.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("em",{parentName:"p"},"TabBarIOS behavior"),": The ",Object(o.b)("inlineCode",{parentName:"p"},"TabBarIOS")," component wraps the native ",Object(o.b)("inlineCode",{parentName:"p"},"UITabBar")," API, which works differently on Apple TV. To avoid jittery re-rendering of the tab bar in tvOS (see ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/facebook/react-native/issues/15081"}),"this issue"),"), the selected tab bar item can only be set from Javascript on initial render, and is controlled after that by the user through native code.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("em",{parentName:"p"},"Known issues"),":"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/facebook/react-native/issues/12793"}),"ListView scrolling"),". The issue can be worked around by setting ",Object(o.b)("inlineCode",{parentName:"li"},"removeClippedSubviews")," to false in ListView and similar components. For more discussion of this issue, see ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/facebook/react-native/pull/12944"}),"this PR"),".")))))))}u.isMDXComponent=!0}}]);