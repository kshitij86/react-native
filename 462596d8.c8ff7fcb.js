(window.webpackJsonp=window.webpackJsonp||[]).push([[272],{1006:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),d=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=d(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},p=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=d(n),p=a,m=b["".concat(r,".").concat(p)]||b[p]||u[p]||o;return n?i.a.createElement(m,l(l({ref:t},s),{},{components:n})):i.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var s=2;s<o;s++)r[s]=n[s];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},358:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return d}));var a=n(2),i=n(7),o=(n(0),n(1006)),r={id:"native-modules-ios",title:"Native Modules"},l={unversionedId:"native-modules-ios",id:"version-0.60/native-modules-ios",isDocsHomePage:!1,title:"Native Modules",description:"Sometimes an app needs to access a platform API and React Native doesn't have a corresponding module yet. Maybe you want to reuse some existing Objective-C, Swift or C++ code without having to reimplement it in JavaScript, or write some high performance, multi-threaded code such as for image processing, a database, or any number of advanced extensions.",source:"@site/versioned_docs/version-0.60/native-modules-ios.md",slug:"/native-modules-ios",permalink:"/docs/0.60/native-modules-ios",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/versioned_docs/version-0.60/native-modules-ios.md",version:"0.60",lastUpdatedAt:1603945169,sidebar:"version-0.60/docs",previous:{title:"Out-of-Tree Platforms",permalink:"/docs/0.60/out-of-tree-platforms"},next:{title:"Native UI Components",permalink:"/docs/0.60/native-components-ios"}},c=[{value:"Native Module Setup",id:"native-module-setup",children:[]},{value:"iOS Calendar Module Example",id:"ios-calendar-module-example",children:[]},{value:"Argument Types",id:"argument-types",children:[]},{value:"Callbacks",id:"callbacks",children:[]},{value:"Promises",id:"promises",children:[]},{value:"Threading",id:"threading",children:[]},{value:"Dependency Injection",id:"dependency-injection",children:[]},{value:"Exporting Constants",id:"exporting-constants",children:[{value:"Implementing <code>+ requiresMainQueueSetup</code>",id:"implementing--requiresmainqueuesetup",children:[]},{value:"Enum Constants",id:"enum-constants",children:[]}]},{value:"Sending Events to JavaScript",id:"sending-events-to-javascript",children:[{value:"Optimizing for zero listeners",id:"optimizing-for-zero-listeners",children:[]}]},{value:"Exporting Swift",id:"exporting-swift",children:[]}],s={rightToc:c};function d(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Sometimes an app needs to access a platform API and React Native doesn't have a corresponding module yet. Maybe you want to reuse some existing Objective-C, Swift or C++ code without having to reimplement it in JavaScript, or write some high performance, multi-threaded code such as for image processing, a database, or any number of advanced extensions."),Object(o.b)("p",null,"We designed React Native such that it is possible for you to write real native code and have access to the full power of the platform. This is a more advanced feature and we don't expect it to be part of the usual development process, however it is essential that it exists. If React Native doesn't support a native feature that you need, you should be able to build it yourself."),Object(o.b)("p",null,"This is a more advanced guide that shows how to build a native module. It assumes the reader knows Objective-C or Swift and core libraries (Foundation, UIKit)."),Object(o.b)("h2",{id:"native-module-setup"},"Native Module Setup"),Object(o.b)("p",null,"Native modules are usually distributed as npm packages, except that for them to be native modules they will contain an Xcode library project. To get the basic scaffolding make sure to read ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"native-modules-setup"}),"Native Modules Setup")," guide first."),Object(o.b)("h2",{id:"ios-calendar-module-example"},"iOS Calendar Module Example"),Object(o.b)("p",null,"This guide will use the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.apple.com/library/mac/documentation/DataManagement/Conceptual/EventKitProgGuide/Introduction/Introduction.html"}),"iOS Calendar API")," example. Let's say we would like to be able to access the iOS calendar from JavaScript."),Object(o.b)("p",null,"A native module is an Objective-C class that implements the ",Object(o.b)("inlineCode",{parentName:"p"},"RCTBridgeModule")," protocol. If you are wondering, RCT is an abbreviation of ReaCT."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-objectivec"}),"// CalendarManager.h\n#import <React/RCTBridgeModule.h>\n\n@interface CalendarManager : NSObject <RCTBridgeModule>\n@end\n")),Object(o.b)("p",null,"In addition to implementing the ",Object(o.b)("inlineCode",{parentName:"p"},"RCTBridgeModule")," protocol, your class must also include the ",Object(o.b)("inlineCode",{parentName:"p"},"RCT_EXPORT_MODULE()")," macro. This takes an optional argument that specifies the name that the module will be accessible as in your JavaScript code (more on this later). If you do not specify a name, the JavaScript module name will match the Objective-C class name. If the Objective-C class name begins with RCT, the JavaScript module name will exclude the RCT prefix."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-objectivec"}),'// CalendarManager.m\n#import "CalendarManager.h"\n\n@implementation CalendarManager\n\n// To export a module named CalendarManager\nRCT_EXPORT_MODULE();\n\n// This would name the module AwesomeCalendarManager instead\n// RCT_EXPORT_MODULE(AwesomeCalendarManager);\n\n@end\n')),Object(o.b)("p",null,"React Native will not expose any methods of ",Object(o.b)("inlineCode",{parentName:"p"},"CalendarManager")," to JavaScript unless explicitly told to. This is done using the ",Object(o.b)("inlineCode",{parentName:"p"},"RCT_EXPORT_METHOD()")," macro:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-objectivec"}),'#import "CalendarManager.h"\n#import <React/RCTLog.h>\n\n@implementation CalendarManager\n\nRCT_EXPORT_MODULE();\n\nRCT_EXPORT_METHOD(addEvent:(NSString *)name location:(NSString *)location)\n{\n  RCTLogInfo(@"Pretending to create an event %@ at %@", name, location);\n}\n\n@end\n')),Object(o.b)("p",null,"Now, from your JavaScript file you can call the method like this (after making sure to rebuild):"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"import { NativeModules } from 'react-native';\nvar CalendarManager = NativeModules.CalendarManager;\nCalendarManager.addEvent(\n  'Birthday Party',\n  '4 Privet Drive, Surrey'\n);\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"NOTE"),": JavaScript method names"),Object(o.b)("p",{parentName:"blockquote"},"The name of the method exported to JavaScript is the native method's name up to the first colon. React Native also defines a macro called ",Object(o.b)("inlineCode",{parentName:"p"},"RCT_REMAP_METHOD()")," to specify the JavaScript method's name. This is useful when multiple native methods are the same up to the first colon and would have conflicting JavaScript names.")),Object(o.b)("p",null,"The CalendarManager module is instantiated on the Objective-C side using a ","[CalendarManager new]"," call. The return type of bridge methods is always ",Object(o.b)("inlineCode",{parentName:"p"},"void"),". React Native bridge is asynchronous, so the only way to pass a result to JavaScript is by using callbacks or emitting events (see below)."),Object(o.b)("h2",{id:"argument-types"},"Argument Types"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"RCT_EXPORT_METHOD")," supports all standard JSON object types, such as:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"string (",Object(o.b)("inlineCode",{parentName:"li"},"NSString"),")"),Object(o.b)("li",{parentName:"ul"},"number (",Object(o.b)("inlineCode",{parentName:"li"},"NSInteger"),", ",Object(o.b)("inlineCode",{parentName:"li"},"float"),", ",Object(o.b)("inlineCode",{parentName:"li"},"double"),", ",Object(o.b)("inlineCode",{parentName:"li"},"CGFloat"),", ",Object(o.b)("inlineCode",{parentName:"li"},"NSNumber"),")"),Object(o.b)("li",{parentName:"ul"},"boolean (",Object(o.b)("inlineCode",{parentName:"li"},"BOOL"),", ",Object(o.b)("inlineCode",{parentName:"li"},"NSNumber"),")"),Object(o.b)("li",{parentName:"ul"},"array (",Object(o.b)("inlineCode",{parentName:"li"},"NSArray"),") of any types from this list"),Object(o.b)("li",{parentName:"ul"},"object (",Object(o.b)("inlineCode",{parentName:"li"},"NSDictionary"),") with string keys and values of any type from this list"),Object(o.b)("li",{parentName:"ul"},"function (",Object(o.b)("inlineCode",{parentName:"li"},"RCTResponseSenderBlock"),")")),Object(o.b)("p",null,"But it also works with any type that is supported by the ",Object(o.b)("inlineCode",{parentName:"p"},"RCTConvert")," class (see ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/facebook/react-native/blob/master/React/Base/RCTConvert.h"}),Object(o.b)("inlineCode",{parentName:"a"},"RCTConvert"))," for details). The ",Object(o.b)("inlineCode",{parentName:"p"},"RCTConvert")," helper functions all accept a JSON value as input and map it to a native Objective-C type or class."),Object(o.b)("p",null,"In our ",Object(o.b)("inlineCode",{parentName:"p"},"CalendarManager")," example, we need to pass the event date to the native method. We can't send JavaScript Date objects over the bridge, so we need to convert the date to a string or number. We could write our native function like this:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-objectivec"}),"RCT_EXPORT_METHOD(addEvent:(NSString *)name location:(NSString *)location date:(nonnull NSNumber *)secondsSinceUnixEpoch)\n{\n  NSDate *date = [RCTConvert NSDate:secondsSinceUnixEpoch];\n}\n")),Object(o.b)("p",null,"or like this:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-objectivec"}),"RCT_EXPORT_METHOD(addEvent:(NSString *)name location:(NSString *)location date:(NSString *)ISO8601DateString)\n{\n  NSDate *date = [RCTConvert NSDate:ISO8601DateString];\n}\n")),Object(o.b)("p",null,"But by using the automatic type conversion feature, we can skip the manual conversion step completely, and write:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-objectivec"}),"RCT_EXPORT_METHOD(addEvent:(NSString *)name location:(NSString *)location date:(NSDate *)date)\n{\n  // Date is ready to use!\n}\n")),Object(o.b)("p",null,"You would then call this from JavaScript by using either:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"CalendarManager.addEvent(\n  'Birthday Party',\n  '4 Privet Drive, Surrey',\n  date.getTime()\n); // passing date as number of milliseconds since Unix epoch\n")),Object(o.b)("p",null,"or"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"CalendarManager.addEvent(\n  'Birthday Party',\n  '4 Privet Drive, Surrey',\n  date.toISOString()\n); // passing date as ISO-8601 string\n")),Object(o.b)("p",null,"And both values would get converted correctly to the native ",Object(o.b)("inlineCode",{parentName:"p"},"NSDate"),". A bad value, like an ",Object(o.b)("inlineCode",{parentName:"p"},"Array"),', would generate a helpful "RedBox" error message.'),Object(o.b)("p",null,"As ",Object(o.b)("inlineCode",{parentName:"p"},"CalendarManager.addEvent")," method gets more and more complex, the number of arguments will grow. Some of them might be optional. In this case it's worth considering changing the API a little bit to accept a dictionary of event attributes, like this:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-objectivec"}),'#import <React/RCTConvert.h>\n\nRCT_EXPORT_METHOD(addEvent:(NSString *)name details:(NSDictionary *)details)\n{\n  NSString *location = [RCTConvert NSString:details[@"location"]];\n  NSDate *time = [RCTConvert NSDate:details[@"time"]];\n  ...\n}\n')),Object(o.b)("p",null,"and call it from JavaScript:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"CalendarManager.addEvent('Birthday Party', {\n  location: '4 Privet Drive, Surrey',\n  time: date.getTime(),\n  description: '...'\n});\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"NOTE"),": About array and map"),Object(o.b)("p",{parentName:"blockquote"},"Objective-C doesn't provide any guarantees about the types of values in these structures. Your native module might expect an array of strings, but if JavaScript calls your method with an array containing numbers and strings, you'll get an ",Object(o.b)("inlineCode",{parentName:"p"},"NSArray")," containing a mix of ",Object(o.b)("inlineCode",{parentName:"p"},"NSNumber")," and ",Object(o.b)("inlineCode",{parentName:"p"},"NSString"),". For arrays, ",Object(o.b)("inlineCode",{parentName:"p"},"RCTConvert")," provides some typed collections you can use in your method declaration, such as ",Object(o.b)("inlineCode",{parentName:"p"},"NSStringArray"),", or ",Object(o.b)("inlineCode",{parentName:"p"},"UIColorArray"),". For maps, it is the developer's responsibility to check the value types individually by manually calling ",Object(o.b)("inlineCode",{parentName:"p"},"RCTConvert")," helper methods.")),Object(o.b)("h2",{id:"callbacks"},"Callbacks"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"WARNING")),Object(o.b)("p",{parentName:"blockquote"},"This section is more experimental than others because we don't have a solid set of best practices around callbacks yet.")),Object(o.b)("p",null,"Native modules also supports a unique type of argument- a callback. In most cases it is used to provide the function call result to JavaScript."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-objectivec"}),"RCT_EXPORT_METHOD(findEvents:(RCTResponseSenderBlock)callback)\n{\n  NSArray *events = ...\n  callback(@[[NSNull null], events]);\n}\n")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"RCTResponseSenderBlock")," accepts only one argument - an array of parameters to pass to the JavaScript callback. In this case we use Node's convention to make the first parameter an error object (usually ",Object(o.b)("inlineCode",{parentName:"p"},"null")," when there is no error) and the rest are the results of the function."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"CalendarManager.findEvents((error, events) => {\n  if (error) {\n    console.error(error);\n  } else {\n    this.setState({ events: events });\n  }\n});\n")),Object(o.b)("p",null,"A native module should invoke its callback exactly once. It's okay to store the callback and invoke it later. This pattern is often used to wrap iOS APIs that require delegates - see ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/facebook/react-native/blob/master/React/Modules/RCTAlertManager.m"}),Object(o.b)("inlineCode",{parentName:"a"},"RCTAlertManager"))," for an example. If the callback is never invoked, some memory is leaked. If both ",Object(o.b)("inlineCode",{parentName:"p"},"onSuccess")," and ",Object(o.b)("inlineCode",{parentName:"p"},"onFail")," callbacks are passed, you should only invoke one of them."),Object(o.b)("p",null,"If you want to pass error-like objects to JavaScript, use ",Object(o.b)("inlineCode",{parentName:"p"},"RCTMakeError")," from ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/facebook/react-native/blob/master/React/Base/RCTUtils.h"}),Object(o.b)("inlineCode",{parentName:"a"},"RCTUtils.h")),". Right now this only passes an Error-shaped dictionary to JavaScript, but we would like to automatically generate real JavaScript ",Object(o.b)("inlineCode",{parentName:"p"},"Error")," objects in the future."),Object(o.b)("h2",{id:"promises"},"Promises"),Object(o.b)("p",null,"Native modules can also fulfill a promise, which can simplify your code, especially when using ES2016's ",Object(o.b)("inlineCode",{parentName:"p"},"async/await")," syntax. When the last parameters of a bridged native method are an ",Object(o.b)("inlineCode",{parentName:"p"},"RCTPromiseResolveBlock")," and ",Object(o.b)("inlineCode",{parentName:"p"},"RCTPromiseRejectBlock"),", its corresponding JS method will return a JS Promise object."),Object(o.b)("p",null,"Refactoring the above code to use a promise instead of callbacks looks like this:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-objectivec"}),'RCT_REMAP_METHOD(findEvents,\n                 findEventsWithResolver:(RCTPromiseResolveBlock)resolve\n                 rejecter:(RCTPromiseRejectBlock)reject)\n{\n  NSArray *events = ...\n  if (events) {\n    resolve(events);\n  } else {\n    NSError *error = ...\n    reject(@"no_events", @"There were no events", error);\n  }\n}\n')),Object(o.b)("p",null,"The JavaScript counterpart of this method returns a Promise. This means you can use the ",Object(o.b)("inlineCode",{parentName:"p"},"await")," keyword within an async function to call it and wait for its result:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"async function updateEvents() {\n  try {\n    var events = await CalendarManager.findEvents();\n\n    this.setState({ events });\n  } catch (e) {\n    console.error(e);\n  }\n}\n\nupdateEvents();\n")),Object(o.b)("h2",{id:"threading"},"Threading"),Object(o.b)("p",null,"The native module should not have any assumptions about what thread it is being called on. React Native invokes native modules methods on a separate serial GCD queue, but this is an implementation detail and might change. The ",Object(o.b)("inlineCode",{parentName:"p"},"- (dispatch_queue_t)methodQueue")," method allows the native module to specify which queue its methods should be run on. For example, if it needs to use a main-thread-only iOS API, it should specify this via:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-objectivec"}),"- (dispatch_queue_t)methodQueue\n{\n  return dispatch_get_main_queue();\n}\n")),Object(o.b)("p",null,"Similarly, if an operation may take a long time to complete, the native module should not block and can specify it's own queue to run operations on. For example, the ",Object(o.b)("inlineCode",{parentName:"p"},"RCTAsyncLocalStorage")," module creates its own queue so the React queue isn't blocked waiting on potentially slow disk access:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-objectivec"}),'- (dispatch_queue_t)methodQueue\n{\n  return dispatch_queue_create("com.facebook.React.AsyncLocalStorageQueue", DISPATCH_QUEUE_SERIAL);\n}\n')),Object(o.b)("p",null,"The specified ",Object(o.b)("inlineCode",{parentName:"p"},"methodQueue")," will be shared by all of the methods in your module. If ",Object(o.b)("em",{parentName:"p"},"only one")," of your methods is long-running (or needs to be run on a different queue than the others for some reason), you can use ",Object(o.b)("inlineCode",{parentName:"p"},"dispatch_async")," inside the method to perform that particular method's code on another queue, without affecting the others:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-objectivec"}),"RCT_EXPORT_METHOD(doSomethingExpensive:(NSString *)param callback:(RCTResponseSenderBlock)callback)\n{\n  dispatch_async(dispatch_get_global_queue(DISPATCH_QUEUE_PRIORITY_DEFAULT, 0), ^{\n    // Call long-running code on background thread\n    ...\n    // You can invoke callback from any thread/queue\n    callback(@[...]);\n  });\n}\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"NOTE"),": Sharing dispatch queues between modules"),Object(o.b)("p",{parentName:"blockquote"},"The ",Object(o.b)("inlineCode",{parentName:"p"},"methodQueue")," method will be called once when the module is initialized, and then retained by the bridge, so there is no need to retain the queue yourself, unless you wish to make use of it within your module. However, if you wish to share the same queue between multiple modules then you will need to ensure that you retain and return the same queue instance for each of them; merely returning a queue of the same name for each won't work.")),Object(o.b)("h2",{id:"dependency-injection"},"Dependency Injection"),Object(o.b)("p",null,"The bridge initializes any registered RCTBridgeModules automatically, however you may wish to instantiate your own module instances (so you may inject dependencies, for example)."),Object(o.b)("p",null,"You can do this by creating a class that implements the RCTBridgeDelegate Protocol, initializing an RCTBridge with the delegate as an argument and initialising a RCTRootView with the initialized bridge."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-objectivec"}),"id<RCTBridgeDelegate> moduleInitialiser = [[classThatImplementsRCTBridgeDelegate alloc] init];\n\nRCTBridge *bridge = [[RCTBridge alloc] initWithDelegate:moduleInitialiser launchOptions:nil];\n\nRCTRootView *rootView = [[RCTRootView alloc]\n                        initWithBridge:bridge\n                            moduleName:kModuleName\n                     initialProperties:nil];\n")),Object(o.b)("h2",{id:"exporting-constants"},"Exporting Constants"),Object(o.b)("p",null,"A native module can export constants that are immediately available to JavaScript at runtime. This is useful for communicating static data that would otherwise require a round-trip through the bridge."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-objectivec"}),'- (NSDictionary *)constantsToExport\n{\n  return @{ @"firstDayOfTheWeek": @"Monday" };\n}\n')),Object(o.b)("p",null,"JavaScript can use this value right away, synchronously:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"console.log(CalendarManager.firstDayOfTheWeek);\n")),Object(o.b)("p",null,"Note that the constants are exported only at initialization time, so if you change ",Object(o.b)("inlineCode",{parentName:"p"},"constantsToExport")," values at runtime it won't affect the JavaScript environment."),Object(o.b)("h3",{id:"implementing--requiresmainqueuesetup"},"Implementing ",Object(o.b)("inlineCode",{parentName:"h3"},"+ requiresMainQueueSetup")),Object(o.b)("p",null,"If you override ",Object(o.b)("inlineCode",{parentName:"p"},"- constantsToExport")," then you should also implement ",Object(o.b)("inlineCode",{parentName:"p"},"+ requiresMainQueueSetup")," to let React Native know if your module needs to be initialized on the main thread. Otherwise you will see a warning that in the future your module may be initialized on a background thread unless you explicitly opt out with ",Object(o.b)("inlineCode",{parentName:"p"},"+ requiresMainQueueSetup"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-objectivec"}),"+ (BOOL)requiresMainQueueSetup\n{\n  return YES;  // only do this if your module initialization relies on calling UIKit!\n}\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-Swift"}),'//Swift\n\n// CalendarManager.swift\n\n@objc(CalendarManager)\nclass CalendarManager: NSObject, RCTBridgeModule {\n\nstatic func moduleName() -> String! {\n      return "CalendarManager";\n}\n\nstatic func requiresMainQueueSetup() -> Bool {\n    return true\n}\n')),Object(o.b)("p",null,"If your module does not require access to UIKit, then you should respond to ",Object(o.b)("inlineCode",{parentName:"p"},"+ requiresMainQueueSetup")," with ",Object(o.b)("inlineCode",{parentName:"p"},"NO"),"."),Object(o.b)("h3",{id:"enum-constants"},"Enum Constants"),Object(o.b)("p",null,"Enums that are defined via ",Object(o.b)("inlineCode",{parentName:"p"},"NS_ENUM")," cannot be used as method arguments without first extending RCTConvert."),Object(o.b)("p",null,"In order to export the following ",Object(o.b)("inlineCode",{parentName:"p"},"NS_ENUM")," definition:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-objectivec"}),"typedef NS_ENUM(NSInteger, UIStatusBarAnimation) {\n    UIStatusBarAnimationNone,\n    UIStatusBarAnimationFade,\n    UIStatusBarAnimationSlide,\n};\n")),Object(o.b)("p",null,"You must create a class extension of RCTConvert like so:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-objectivec"}),'@implementation RCTConvert (StatusBarAnimation)\n  RCT_ENUM_CONVERTER(UIStatusBarAnimation, (@{ @"statusBarAnimationNone" : @(UIStatusBarAnimationNone),\n                                               @"statusBarAnimationFade" : @(UIStatusBarAnimationFade),\n                                               @"statusBarAnimationSlide" : @(UIStatusBarAnimationSlide)}),\n                      UIStatusBarAnimationNone, integerValue)\n@end\n')),Object(o.b)("p",null,"You can then define methods and export your enum constants like this:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-objectivec"}),'- (NSDictionary *)constantsToExport\n{\n  return @{ @"statusBarAnimationNone" : @(UIStatusBarAnimationNone),\n            @"statusBarAnimationFade" : @(UIStatusBarAnimationFade),\n            @"statusBarAnimationSlide" : @(UIStatusBarAnimationSlide) };\n};\n\nRCT_EXPORT_METHOD(updateStatusBarAnimation:(UIStatusBarAnimation)animation\n                                completion:(RCTResponseSenderBlock)callback)\n')),Object(o.b)("p",null,"Your enum will then be automatically unwrapped using the selector provided (",Object(o.b)("inlineCode",{parentName:"p"},"integerValue")," in the above example) before being passed to your exported method."),Object(o.b)("h2",{id:"sending-events-to-javascript"},"Sending Events to JavaScript"),Object(o.b)("p",null,"The native module can signal events to JavaScript without being invoked directly. The preferred way to do this is to subclass ",Object(o.b)("inlineCode",{parentName:"p"},"RCTEventEmitter"),", implement ",Object(o.b)("inlineCode",{parentName:"p"},"supportedEvents")," and call ",Object(o.b)("inlineCode",{parentName:"p"},"self sendEventWithName"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-objectivec"}),"// CalendarManager.h\n#import <React/RCTBridgeModule.h>\n#import <React/RCTEventEmitter.h>\n\n@interface CalendarManager : RCTEventEmitter <RCTBridgeModule>\n\n@end\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-objectivec"}),'// CalendarManager.m\n#import "CalendarManager.h"\n\n@implementation CalendarManager\n\nRCT_EXPORT_MODULE();\n\n- (NSArray<NSString *> *)supportedEvents\n{\n  return @[@"EventReminder"];\n}\n\n- (void)calendarEventReminderReceived:(NSNotification *)notification\n{\n  NSString *eventName = notification.userInfo[@"name"];\n  [self sendEventWithName:@"EventReminder" body:@{@"name": eventName}];\n}\n\n@end\n')),Object(o.b)("p",null,"JavaScript code can subscribe to these events by creating a new ",Object(o.b)("inlineCode",{parentName:"p"},"NativeEventEmitter")," instance around your module."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"import { NativeEventEmitter, NativeModules } from 'react-native';\nconst { CalendarManager } = NativeModules;\n\nconst calendarManagerEmitter = new NativeEventEmitter(CalendarManager);\n\nconst subscription = calendarManagerEmitter.addListener(\n  'EventReminder',\n  (reminder) => console.log(reminder.name)\n);\n...\n// Don't forget to unsubscribe, typically in componentWillUnmount\nsubscription.remove();\n")),Object(o.b)("h3",{id:"optimizing-for-zero-listeners"},"Optimizing for zero listeners"),Object(o.b)("p",null,"You will receive a warning if you expend resources unnecessarily by emitting an event while there are no listeners. To avoid this, and to optimize your module's workload (e.g. by unsubscribing from upstream notifications or pausing background tasks), you can override ",Object(o.b)("inlineCode",{parentName:"p"},"startObserving")," and ",Object(o.b)("inlineCode",{parentName:"p"},"stopObserving")," in your ",Object(o.b)("inlineCode",{parentName:"p"},"RCTEventEmitter")," subclass."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-objectivec"}),'@implementation CalendarManager\n{\n  bool hasListeners;\n}\n\n// Will be called when this module\'s first listener is added.\n-(void)startObserving {\n    hasListeners = YES;\n    // Set up any upstream listeners or background tasks as necessary\n}\n\n// Will be called when this module\'s last listener is removed, or on dealloc.\n-(void)stopObserving {\n    hasListeners = NO;\n    // Remove upstream listeners, stop unnecessary background tasks\n}\n\n- (void)calendarEventReminderReceived:(NSNotification *)notification\n{\n  NSString *eventName = notification.userInfo[@"name"];\n  if (hasListeners) { // Only send events if anyone is listening\n    [self sendEventWithName:@"EventReminder" body:@{@"name": eventName}];\n  }\n}\n')),Object(o.b)("h2",{id:"exporting-swift"},"Exporting Swift"),Object(o.b)("p",null,"Swift doesn't have support for macros so exposing it to React Native requires a bit more setup but works relatively the same."),Object(o.b)("p",null,"Let's say we have the same ",Object(o.b)("inlineCode",{parentName:"p"},"CalendarManager")," but as a Swift class:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-swift"}),'// CalendarManager.swift\n\n@objc(CalendarManager)\nclass CalendarManager: NSObject {\n\n  @objc(addEvent:location:date:)\n  func addEvent(name: String, location: String, date: NSNumber) -> Void {\n    // Date is ready to use!\n  }\n\n  @objc\n  func constantsToExport() -> [String: Any]! {\n    return ["someKey": "someValue"]\n  }\n\n}\n')),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"NOTE"),": It is important to use the @objc modifiers to ensure the class and functions are exported properly to the Objective-C runtime.")),Object(o.b)("p",null,"Then create a private implementation file that will register the required information with the React Native bridge:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-objectivec"}),"// CalendarManagerBridge.m\n#import <React/RCTBridgeModule.h>\n\n@interface RCT_EXTERN_MODULE(CalendarManager, NSObject)\n\nRCT_EXTERN_METHOD(addEvent:(NSString *)name location:(NSString *)location date:(nonnull NSNumber *)date)\n\n@end\n")),Object(o.b)("p",null,"For those of you new to Swift and Objective-C, whenever you ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.apple.com/library/prerelease/ios/documentation/Swift/Conceptual/BuildingCocoaApps/MixandMatch.html"}),"mix the two languages in an iOS project"),", you will also need an additional bridging file, known as a bridging header, to expose the Objective-C files to Swift. Xcode will offer to create this header file for you if you add your Swift file to your app through the Xcode ",Object(o.b)("inlineCode",{parentName:"p"},"File>New File")," menu option. You will need to import ",Object(o.b)("inlineCode",{parentName:"p"},"RCTBridgeModule.h")," in this header file."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-objectivec"}),"// CalendarManager-Bridging-Header.h\n#import <React/RCTBridgeModule.h>\n")),Object(o.b)("p",null,"You can also use ",Object(o.b)("inlineCode",{parentName:"p"},"RCT_EXTERN_REMAP_MODULE")," and ",Object(o.b)("inlineCode",{parentName:"p"},"_RCT_EXTERN_REMAP_METHOD")," to alter the JavaScript name of the module or methods you are exporting. For more information see ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/facebook/react-native/blob/master/React/Base/RCTBridgeModule.h"}),Object(o.b)("inlineCode",{parentName:"a"},"RCTBridgeModule")),"."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Important when making third party modules"),": Static libraries with Swift are only supported in Xcode 9 and later. In order for the Xcode project to build when you use Swift in the iOS static library you include in the module, your main app project must contain Swift code and a bridging header itself. If your app project does not contain any Swift code, a workaround can be a single empty .swift file and an empty bridging header.")))}d.isMDXComponent=!0}}]);