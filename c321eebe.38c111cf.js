(window.webpackJsonp=window.webpackJsonp||[]).push([[700],{1006:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return u}));var i=n(0),a=n.n(i);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,r=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,u=d["".concat(r,".").concat(m)]||d[m]||b[m]||o;return n?a.a.createElement(u,s(s({ref:t},l),{},{components:n})):a.a.createElement(u,s({ref:t},l))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var l=2;l<o;l++)r[l]=n[l];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},778:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var i=n(2),a=n(7),o=(n(0),n(1006)),r={id:"communication-ios",title:"Communication between native and React Native"},s={unversionedId:"communication-ios",id:"version-0.60/communication-ios",isDocsHomePage:!1,title:"Communication between native and React Native",description:"In Integrating with Existing Apps guide and Native UI Components guide we learn how to embed React Native in a native component and vice versa. When we mix native and React Native components, we'll eventually find a need to communicate between these two worlds. Some ways to achieve that have been already mentioned in other guides. This article summarizes available techniques.",source:"@site/versioned_docs/version-0.60/communication-ios.md",slug:"/communication-ios",permalink:"/docs/0.60/communication-ios",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/versioned_docs/version-0.60/communication-ios.md",version:"0.60",lastUpdatedAt:1603945169,sidebar:"version-0.60/docs",previous:{title:"Running On Simulator",permalink:"/docs/0.60/running-on-simulator-ios"},next:{title:"App Extensions",permalink:"/docs/0.60/app-extensions"}},c=[{value:"Introduction",id:"introduction",children:[]},{value:"Properties",id:"properties",children:[{value:"Passing properties from native to React Native",id:"passing-properties-from-native-to-react-native",children:[]},{value:"Passing properties from React Native to native",id:"passing-properties-from-react-native-to-native",children:[]},{value:"Limits of properties",id:"limits-of-properties",children:[]}]},{value:"Other ways of cross-language interaction (events and native modules)",id:"other-ways-of-cross-language-interaction-events-and-native-modules",children:[{value:"Calling React Native functions from native (events)",id:"calling-react-native-functions-from-native-events",children:[]},{value:"Calling native functions from React Native (native modules)",id:"calling-native-functions-from-react-native-native-modules",children:[]}]},{value:"Layout computation flow",id:"layout-computation-flow",children:[{value:"Layout of a native component embedded in React Native",id:"layout-of-a-native-component-embedded-in-react-native",children:[]},{value:"Layout of a React Native component embedded in native",id:"layout-of-a-react-native-component-embedded-in-native",children:[]}]}],l={rightToc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(i.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"In ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/0.60/integration-with-existing-apps"}),"Integrating with Existing Apps guide")," and ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/0.60/native-components-ios"}),"Native UI Components guide")," we learn how to embed React Native in a native component and vice versa. When we mix native and React Native components, we'll eventually find a need to communicate between these two worlds. Some ways to achieve that have been already mentioned in other guides. This article summarizes available techniques."),Object(o.b)("h2",{id:"introduction"},"Introduction"),Object(o.b)("p",null,"React Native is inspired by React, so the basic idea of the information flow is similar. The flow in React is one-directional. We maintain a hierarchy of components, in which each component depends only on its parent and its own internal state. We do this with properties: data is passed from a parent to its children in a top-down manner. If an ancestor component relies on the state of its descendant, one should pass down a callback to be used by the descendant to update the ancestor."),Object(o.b)("p",null,"The same concept applies to React Native. As long as we are building our application purely within the framework, we can drive our app with properties and callbacks. But, when we mix React Native and native components, we need some specific, cross-language mechanisms that would allow us to pass information between them."),Object(o.b)("h2",{id:"properties"},"Properties"),Object(o.b)("p",null,"Properties are the simplest way of cross-component communication. So we need a way to pass properties both from native to React Native, and from React Native to native."),Object(o.b)("h3",{id:"passing-properties-from-native-to-react-native"},"Passing properties from native to React Native"),Object(o.b)("p",null,"In order to embed a React Native view in a native component, we use ",Object(o.b)("inlineCode",{parentName:"p"},"RCTRootView"),". ",Object(o.b)("inlineCode",{parentName:"p"},"RCTRootView")," is a ",Object(o.b)("inlineCode",{parentName:"p"},"UIView")," that holds a React Native app. It also provides an interface between native side and the hosted app."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"RCTRootView")," has an initializer that allows you to pass arbitrary properties down to the React Native app. The ",Object(o.b)("inlineCode",{parentName:"p"},"initialProperties")," parameter has to be an instance of ",Object(o.b)("inlineCode",{parentName:"p"},"NSDictionary"),". The dictionary is internally converted into a JSON object that the top-level JS component can reference."),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-objectivec"}),'NSArray *imageList = @[@"http://foo.com/bar1.png",\n                       @"http://foo.com/bar2.png"];\n\nNSDictionary *props = @{@"images" : imageList};\n\nRCTRootView *rootView = [[RCTRootView alloc] initWithBridge:bridge\n                                                 moduleName:@"ImageBrowserApp"\n                                          initialProperties:props];\n')),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport { View, Image } from 'react-native';\n\nexport default class ImageBrowserApp extends React.Component {\n  renderImage(imgURI) {\n    return <Image source={{ uri: imgURI }} />;\n  }\n  render() {\n    return <View>{this.props.images.map(this.renderImage)}</View>;\n  }\n}\n")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"RCTRootView")," also provides a read-write property ",Object(o.b)("inlineCode",{parentName:"p"},"appProperties"),". After ",Object(o.b)("inlineCode",{parentName:"p"},"appProperties")," is set, the React Native app is re-rendered with new properties. The update is only performed when the new updated properties differ from the previous ones."),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-objectivec"}),'NSArray *imageList = @[@"http://foo.com/bar3.png",\n                       @"http://foo.com/bar4.png"];\n\nrootView.appProperties = @{@"images" : imageList};\n')),Object(o.b)("p",null,"It is fine to update properties anytime. However, updates have to be performed on the main thread. You use the getter on any thread."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"Note:"))," Currently, there is a known issue where setting appProperties during the bridge startup, the change can be lost. See ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/facebook/react-native/issues/20115"}),"https://github.com/facebook/react-native/issues/20115")," for more information.")),Object(o.b)("p",null,"There is no way to update only a few properties at a time. We suggest that you build it into your own wrapper instead."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"Note:"))," Currently, JS function ",Object(o.b)("inlineCode",{parentName:"p"},"componentWillUpdateProps")," of the top level RN component will not be called after a prop update. However, you can access the new props in ",Object(o.b)("inlineCode",{parentName:"p"},"componentDidMount")," function.")),Object(o.b)("h3",{id:"passing-properties-from-react-native-to-native"},"Passing properties from React Native to native"),Object(o.b)("p",null,"The problem exposing properties of native components is covered in detail in ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/0.60/native-components-ios#properties"}),"this article"),". In short, export properties with ",Object(o.b)("inlineCode",{parentName:"p"},"RCT_CUSTOM_VIEW_PROPERTY")," macro in your custom native component, then use them in React Native as if the component was an ordinary React Native component."),Object(o.b)("h3",{id:"limits-of-properties"},"Limits of properties"),Object(o.b)("p",null,"The main drawback of cross-language properties is that they do not support callbacks, which would allow us to handle bottom-up data bindings. Imagine you have a small RN view that you want to be removed from the native parent view as a result of a JS action. There is no way to do that with props, as the information would need to go bottom-up."),Object(o.b)("p",null,"Although we have a flavor of cross-language callbacks (",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/0.60/native-modules-ios#callbacks"}),"described here"),"), these callbacks are not always the thing we need. The main problem is that they are not intended to be passed as properties. Rather, this mechanism allows us to trigger a native action from JS, and handle the result of that action in JS."),Object(o.b)("h2",{id:"other-ways-of-cross-language-interaction-events-and-native-modules"},"Other ways of cross-language interaction (events and native modules)"),Object(o.b)("p",null,"As stated in the previous chapter, using properties comes with some limitations. Sometimes properties are not enough to drive the logic of our app and we need a solution that gives more flexibility. This chapter covers other communication techniques available in React Native. They can be used for internal communication (between JS and native layers in RN) as well as for external communication (between RN and the 'pure native' part of your app)."),Object(o.b)("p",null,"React Native enables you to perform cross-language function calls. You can execute custom native code from JS and vice versa. Unfortunately, depending on the side we are working on, we achieve the same goal in different ways. For native - we use events mechanism to schedule an execution of a handler function in JS, while for React Native we directly call methods exported by native modules."),Object(o.b)("h3",{id:"calling-react-native-functions-from-native-events"},"Calling React Native functions from native (events)"),Object(o.b)("p",null,"Events are described in detail in ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/0.60/native-components-ios#events"}),"this article"),". Note that using events gives us no guarantees about execution time, as the event is handled on a separate thread."),Object(o.b)("p",null,"Events are powerful, because they allow us to change React Native components without needing a reference to them. However, there are some pitfalls that you can fall into while using them:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"As events can be sent from anywhere, they can introduce spaghetti-style dependencies into your project."),Object(o.b)("li",{parentName:"ul"},"Events share namespace, which means that you may encounter some name collisions. Collisions will not be detected statically, which makes them hard to debug."),Object(o.b)("li",{parentName:"ul"},"If you use several instances of the same React Native component and you want to distinguish them from the perspective of your event, you'll likely need to introduce identifiers and pass them along with events (you can use the native view's ",Object(o.b)("inlineCode",{parentName:"li"},"reactTag")," as an identifier).")),Object(o.b)("p",null,"The common pattern we use when embedding native in React Native is to make the native component's RCTViewManager a delegate for the views, sending events back to JavaScript via the bridge. This keeps related event calls in one place."),Object(o.b)("h3",{id:"calling-native-functions-from-react-native-native-modules"},"Calling native functions from React Native (native modules)"),Object(o.b)("p",null,"Native modules are Objective-C classes that are available in JS. Typically one instance of each module is created per JS bridge. They can export arbitrary functions and constants to React Native. They have been covered in detail in ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/0.60/native-modules-ios#content"}),"this article"),"."),Object(o.b)("p",null,"The fact that native modules are singletons limits the mechanism in the context of embedding. Let's say we have a React Native component embedded in a native view and we want to update the native, parent view. Using the native module mechanism, we would export a function that not only takes expected arguments, but also an identifier of the parent native view. The identifier would be used to retrieve a reference to the parent view to update. That said, we would need to keep a mapping from identifiers to native views in the module."),Object(o.b)("p",null,"Although this solution is complex, it is used in ",Object(o.b)("inlineCode",{parentName:"p"},"RCTUIManager"),", which is an internal React Native class that manages all React Native views."),Object(o.b)("p",null,"Native modules can also be used to expose existing native libraries to JS. The ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/facebook/react-native/tree/master/Libraries/Geolocation"}),"Geolocation library")," is a living example of the idea."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"Warning")),": All native modules share the same namespace. Watch out for name collisions when creating new ones.")),Object(o.b)("h2",{id:"layout-computation-flow"},"Layout computation flow"),Object(o.b)("p",null,"When integrating native and React Native, we also need a way to consolidate two different layout systems. This section covers common layout problems and provides a brief description of mechanisms to address them."),Object(o.b)("h3",{id:"layout-of-a-native-component-embedded-in-react-native"},"Layout of a native component embedded in React Native"),Object(o.b)("p",null,"This case is covered in ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/0.60/native-components-ios#styles"}),"this article"),". To summarize, as all our native react views are subclasses of ",Object(o.b)("inlineCode",{parentName:"p"},"UIView"),", most style and size attributes will work like you would expect out of the box."),Object(o.b)("h3",{id:"layout-of-a-react-native-component-embedded-in-native"},"Layout of a React Native component embedded in native"),Object(o.b)("h4",{id:"react-native-content-with-fixed-size"},"React Native content with fixed size"),Object(o.b)("p",null,"The simplest scenario is when we have a React Native app with a fixed size, which is known to the native side. In particular, a full-screen React Native view falls into this case. If we want a smaller root view, we can explicitly set RCTRootView's frame."),Object(o.b)("p",null,"For instance, to make an RN app 200 (logical) pixels high, and the hosting view's width wide, we could do:"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-objectivec"}),"// SomeViewController.m\n\n- (void)viewDidLoad\n{\n  [...]\n  RCTRootView *rootView = [[RCTRootView alloc] initWithBridge:bridge\n                                                   moduleName:appName\n                                            initialProperties:props];\n  rootView.frame = CGRectMake(0, 0, self.view.width, 200);\n  [self.view addSubview:rootView];\n}\n")),Object(o.b)("p",null,"When we have a fixed size root view, we need to respect its bounds on the JS side. In other words, we need to ensure that the React Native content can be contained within the fixed-size root view. The easiest way to ensure this is to use flexbox layout. If you use absolute positioning, and React components are visible outside the root view's bounds, you'll get overlap with native views, causing some features to behave unexpectedly. For instance, 'TouchableHighlight' will not highlight your touches outside the root view's bounds."),Object(o.b)("p",null,"It's totally fine to update root view's size dynamically by re-setting its frame property. React Native will take care of the content's layout."),Object(o.b)("h4",{id:"react-native-content-with-flexible-size"},"React Native content with flexible size"),Object(o.b)("p",null,"In some cases we'd like to render content of initially unknown size. Let's say the size will be defined dynamically in JS. We have two solutions to this problem."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"You can wrap your React Native view in a ",Object(o.b)("inlineCode",{parentName:"li"},"ScrollView")," component. This guarantees that your content will always be available and it won't overlap with native views."),Object(o.b)("li",{parentName:"ol"},"React Native allows you to determine, in JS, the size of the RN app and provide it to the owner of the hosting ",Object(o.b)("inlineCode",{parentName:"li"},"RCTRootView"),". The owner is then responsible for re-laying out the subviews and keeping the UI consistent. We achieve this with ",Object(o.b)("inlineCode",{parentName:"li"},"RCTRootView"),"'s flexibility modes.")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"RCTRootView")," supports 4 different size flexibility modes:"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-objectivec"}),"// RCTRootView.h\n\ntypedef NS_ENUM(NSInteger, RCTRootViewSizeFlexibility) {\n  RCTRootViewSizeFlexibilityNone = 0,\n  RCTRootViewSizeFlexibilityWidth,\n  RCTRootViewSizeFlexibilityHeight,\n  RCTRootViewSizeFlexibilityWidthAndHeight,\n};\n")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"RCTRootViewSizeFlexibilityNone")," is the default value, which makes a root view's size fixed (but it still can be updated with ",Object(o.b)("inlineCode",{parentName:"p"},"setFrame:"),"). The other three modes allow us to track React Native content's size updates. For instance, setting mode to ",Object(o.b)("inlineCode",{parentName:"p"},"RCTRootViewSizeFlexibilityHeight")," will cause React Native to measure the content's height and pass that information back to ",Object(o.b)("inlineCode",{parentName:"p"},"RCTRootView"),"'s delegate. An arbitrary action can be performed within the delegate, including setting the root view's frame, so the content fits. The delegate is called only when the size of the content has changed."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"Warning:"))," Making a dimension flexible in both JS and native leads to undefined behavior. For example - don't make a top-level React component's width flexible (with ",Object(o.b)("inlineCode",{parentName:"p"},"flexbox"),") while you're using ",Object(o.b)("inlineCode",{parentName:"p"},"RCTRootViewSizeFlexibilityWidth")," on the hosting ",Object(o.b)("inlineCode",{parentName:"p"},"RCTRootView"),".")),Object(o.b)("p",null,"Let's look at an example."),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-objectivec"}),'// FlexibleSizeExampleView.m\n\n- (instancetype)initWithFrame:(CGRect)frame\n{\n  [...]\n\n  _rootView = [[RCTRootView alloc] initWithBridge:bridge\n  moduleName:@"FlexibilityExampleApp"\n  initialProperties:@{}];\n\n  _rootView.delegate = self;\n  _rootView.sizeFlexibility = RCTRootViewSizeFlexibilityHeight;\n  _rootView.frame = CGRectMake(0, 0, self.frame.size.width, 0);\n}\n\n#pragma mark - RCTRootViewDelegate\n- (void)rootViewDidChangeIntrinsicSize:(RCTRootView *)rootView\n{\n  CGRect newFrame = rootView.frame;\n  newFrame.size = rootView.intrinsicContentSize;\n\n  rootView.frame = newFrame;\n}\n')),Object(o.b)("p",null,"In the example we have a ",Object(o.b)("inlineCode",{parentName:"p"},"FlexibleSizeExampleView")," view that holds a root view. We create the root view, initialize it and set the delegate. The delegate will handle size updates. Then, we set the root view's size flexibility to ",Object(o.b)("inlineCode",{parentName:"p"},"RCTRootViewSizeFlexibilityHeight"),", which means that ",Object(o.b)("inlineCode",{parentName:"p"},"rootViewDidChangeIntrinsicSize:")," method will be called every time the React Native content changes its height. Finally, we set the root view's width and position. Note that we set there height as well, but it has no effect as we made the height RN-dependent."),Object(o.b)("p",null,"You can checkout full source code of the example ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/facebook/react-native/blob/master/RNTester/RNTester/NativeExampleViews/FlexibleSizeExampleView.m"}),"here"),"."),Object(o.b)("p",null,"It's fine to change root view's size flexibility mode dynamically. Changing flexibility mode of a root view will schedule a layout recalculation and the delegate ",Object(o.b)("inlineCode",{parentName:"p"},"rootViewDidChangeIntrinsicSize:")," method will be called once the content size is known."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"Note:"))," React Native layout calculation is performed on a separate thread, while native UI view updates are done on the main thread. This may cause temporary UI inconsistencies between native and React Native. This is a known problem and our team is working on synchronizing UI updates coming from different sources.")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"Note:"))," React Native does not perform any layout calculations until the root view becomes a subview of some other views. If you want to hide React Native view until its dimensions are known, add the root view as a subview and make it initially hidden (use ",Object(o.b)("inlineCode",{parentName:"p"},"UIView"),"'s ",Object(o.b)("inlineCode",{parentName:"p"},"hidden")," property). Then change its visibility in the delegate method.")))}p.isMDXComponent=!0}}]);