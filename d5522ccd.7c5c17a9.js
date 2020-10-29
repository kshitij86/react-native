(window.webpackJsonp=window.webpackJsonp||[]).push([[771],{1006:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),l=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=l(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),b=l(n),d=o,h=b["".concat(s,".").concat(d)]||b[d]||u[d]||a;return n?r.a.createElement(h,i(i({ref:t},p),{},{components:n})):r.a.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var p=2;p<a;p++)s[p]=n[p];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},843:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return l}));var o=n(2),r=n(7),a=(n(0),n(1006)),s={id:"network",title:"Networking"},i={unversionedId:"network",id:"version-0.60/network",isDocsHomePage:!1,title:"Networking",description:"Many mobile apps need to load resources from a remote URL. You may want to make a POST request to a REST API, or you may need to fetch a chunk of static content from another server.",source:"@site/versioned_docs/version-0.60/network.md",slug:"/network",permalink:"/docs/0.60/network",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/versioned_docs/version-0.60/network.md",version:"0.60",lastUpdatedAt:1603945169,sidebar:"version-0.60/docs",previous:{title:"Using List Views",permalink:"/docs/0.60/using-a-listview"},next:{title:"More Resources",permalink:"/docs/0.60/more-resources"}},c=[{value:"Using Fetch",id:"using-fetch",children:[{value:"Using Other Networking Libraries",id:"using-other-networking-libraries",children:[]}]},{value:"WebSocket Support",id:"websocket-support",children:[]},{value:"Known Issues with <code>fetch</code> and cookie based authentication",id:"known-issues-with-fetch-and-cookie-based-authentication",children:[]}],p={rightToc:c};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Many mobile apps need to load resources from a remote URL. You may want to make a POST request to a REST API, or you may need to fetch a chunk of static content from another server."),Object(a.b)("h2",{id:"using-fetch"},"Using Fetch"),Object(a.b)("p",null,"React Native provides the ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"}),"Fetch API")," for your networking needs. Fetch will seem familiar if you have used ",Object(a.b)("inlineCode",{parentName:"p"},"XMLHttpRequest")," or other networking APIs before. You may refer to MDN's guide on ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch"}),"Using Fetch")," for additional information."),Object(a.b)("h4",{id:"making-requests"},"Making requests"),Object(a.b)("p",null,"In order to fetch content from an arbitrary URL, you can pass the URL to fetch:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),"fetch('https://mywebsite.com/mydata.json');\n")),Object(a.b)("p",null,"Fetch also takes an optional second argument that allows you to customize the HTTP request. You may want to specify additional headers, or make a POST request:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),"fetch('https://mywebsite.com/endpoint/', {\n  method: 'POST',\n  headers: {\n    Accept: 'application/json',\n    'Content-Type': 'application/json'\n  },\n  body: JSON.stringify({\n    firstParam: 'yourValue',\n    secondParam: 'yourOtherValue'\n  })\n});\n")),Object(a.b)("p",null,"Take a look at the ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Request"}),"Fetch Request docs")," for a full list of properties."),Object(a.b)("h4",{id:"handling-the-response"},"Handling the response"),Object(a.b)("p",null,"The above examples show how you can make a request. In many cases, you will want to do something with the response."),Object(a.b)("p",null,"Networking is an inherently asynchronous operation. Fetch methods will return a ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise"}),"Promise")," that makes it straightforward to write code that works in an asynchronous manner:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),"function getMoviesFromApiAsync() {\n  return fetch('https://reactnative.dev/movies.json')\n    .then((response) => response.json())\n    .then((responseJson) => {\n      return responseJson.movies;\n    })\n    .catch((error) => {\n      console.error(error);\n    });\n}\n")),Object(a.b)("p",null,"You can also use the proposed ES2017 ",Object(a.b)("inlineCode",{parentName:"p"},"async"),"/",Object(a.b)("inlineCode",{parentName:"p"},"await")," syntax in a React Native app:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),"async function getMoviesFromApi() {\n  try {\n    let response = await fetch(\n      'https://reactnative.dev/movies.json'\n    );\n    let responseJson = await response.json();\n    return responseJson.movies;\n  } catch (error) {\n    console.error(error);\n  }\n}\n")),Object(a.b)("p",null,"Don't forget to catch any errors that may be thrown by ",Object(a.b)("inlineCode",{parentName:"p"},"fetch"),", otherwise they will be dropped silently."),Object(a.b)("div",{className:"snack-player","data-snack-name":"Fetch Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20FlatList%2C%20ActivityIndicator%2C%20Text%2C%20View%20%20%7D%20from%20'react-native'%3B%0A%0Aexport%20default%20class%20FetchExample%20extends%20React.Component%20%7B%0A%0A%20%20constructor(props)%7B%0A%20%20%20%20super(props)%3B%0A%20%20%20%20this.state%20%3D%7B%20isLoading%3A%20true%7D%0A%20%20%7D%0A%0A%20%20componentDidMount()%7B%0A%20%20%20%20return%20fetch('https%3A%2F%2Freactnative.dev%2Fmovies.json')%0A%20%20%20%20%20%20.then((response)%20%3D%3E%20response.json())%0A%20%20%20%20%20%20.then((responseJson)%20%3D%3E%20%7B%0A%0A%20%20%20%20%20%20%20%20this.setState(%7B%0A%20%20%20%20%20%20%20%20%20%20isLoading%3A%20false%2C%0A%20%20%20%20%20%20%20%20%20%20dataSource%3A%20responseJson.movies%2C%0A%20%20%20%20%20%20%20%20%7D%2C%20function()%7B%0A%0A%20%20%20%20%20%20%20%20%7D)%3B%0A%0A%20%20%20%20%20%20%7D)%0A%20%20%20%20%20%20.catch((error)%20%3D%3E%7B%0A%20%20%20%20%20%20%20%20console.error(error)%3B%0A%20%20%20%20%20%20%7D)%3B%0A%20%20%7D%0A%0A%0A%0A%20%20render()%7B%0A%0A%20%20%20%20if(this.state.isLoading)%7B%0A%20%20%20%20%20%20return(%0A%20%20%20%20%20%20%20%20%3CView%20style%3D%7B%7Bflex%3A%201%2C%20padding%3A%2020%7D%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%3CActivityIndicator%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20)%0A%20%20%20%20%7D%0A%0A%20%20%20%20return(%0A%20%20%20%20%20%20%3CView%20style%3D%7B%7Bflex%3A%201%2C%20paddingTop%3A20%7D%7D%3E%0A%20%20%20%20%20%20%20%20%3CFlatList%0A%20%20%20%20%20%20%20%20%20%20data%3D%7Bthis.state.dataSource%7D%0A%20%20%20%20%20%20%20%20%20%20renderItem%3D%7B(%7Bitem%7D)%20%3D%3E%20%3CText%3E%7Bitem.title%7D%2C%20%7Bitem.releaseYear%7D%3C%2FText%3E%7D%0A%20%20%20%20%20%20%20%20%20%20keyExtractor%3D%7B(%7Bid%7D%2C%20index)%20%3D%3E%20id%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20)%3B%0A%20%20%7D%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true"}),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"By default, iOS will block any request that's not encrypted using ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://hosting.review/web-hosting-glossary/#12"}),"SSL"),". If you need to fetch from a cleartext URL (one that begins with ",Object(a.b)("inlineCode",{parentName:"p"},"http"),") you will first need to ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/0.60/integration-with-existing-apps#test-your-integration"}),"add an App Transport Security exception"),". If you know ahead of time what domains you will need access to, it is more secure to add exceptions only for those domains; if the domains are not known until runtime you can ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/0.60/integration-with-existing-apps#app-transport-security"}),"disable ATS completely"),". Note however that from January 2017, ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://forums.developer.apple.com/thread/48979"}),"Apple's App Store review will require reasonable justification for disabling ATS"),". See ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://developer.apple.com/library/ios/documentation/General/Reference/InfoPlistKeyReference/Articles/CocoaKeys.html#//apple_ref/doc/uid/TP40009251-SW33"}),"Apple's documentation")," for more information.")),Object(a.b)("h3",{id:"using-other-networking-libraries"},"Using Other Networking Libraries"),Object(a.b)("p",null,"The ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest"}),"XMLHttpRequest API")," is built into React Native. This means that you can use third party libraries such as ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/niftylettuce/frisbee"}),"frisbee")," or ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/mzabriskie/axios"}),"axios")," that depend on it, or you can use the XMLHttpRequest API directly if you prefer."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),"var request = new XMLHttpRequest();\nrequest.onreadystatechange = (e) => {\n  if (request.readyState !== 4) {\n    return;\n  }\n\n  if (request.status === 200) {\n    console.log('success', request.responseText);\n  } else {\n    console.warn('error');\n  }\n};\n\nrequest.open('GET', 'https://mywebsite.com/endpoint/');\nrequest.send();\n")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"The security model for XMLHttpRequest is different than on web as there is no concept of ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"http://en.wikipedia.org/wiki/Cross-origin_resource_sharing"}),"CORS")," in native apps.")),Object(a.b)("h2",{id:"websocket-support"},"WebSocket Support"),Object(a.b)("p",null,"React Native also supports ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/WebSocket"}),"WebSockets"),", a protocol which provides full-duplex communication channels over a single TCP connection."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),"var ws = new WebSocket('ws://host.com/path');\n\nws.onopen = () => {\n  // connection opened\n  ws.send('something'); // send a message\n};\n\nws.onmessage = (e) => {\n  // a message was received\n  console.log(e.data);\n};\n\nws.onerror = (e) => {\n  // an error occurred\n  console.log(e.message);\n};\n\nws.onclose = (e) => {\n  // connection closed\n  console.log(e.code, e.reason);\n};\n")),Object(a.b)("h2",{id:"known-issues-with-fetch-and-cookie-based-authentication"},"Known Issues with ",Object(a.b)("inlineCode",{parentName:"h2"},"fetch")," and cookie based authentication"),Object(a.b)("p",null,"The following options are currently not working with ",Object(a.b)("inlineCode",{parentName:"p"},"fetch")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"redirect:manual")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"credentials:omit"))),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Having same name headers on Android will result in only the latest one being present. A temporary solution can be found here: ",Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"https://github.com/facebook/react-native/issues/18837#issuecomment-398779994"}),"https://github.com/facebook/react-native/issues/18837#issuecomment-398779994"),"."),Object(a.b)("li",{parentName:"ul"},"Cookie based authentication is currently unstable. You can view some of the issues raised here: ",Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"https://github.com/facebook/react-native/issues/23185"}),"https://github.com/facebook/react-native/issues/23185")),Object(a.b)("li",{parentName:"ul"},"As a minimum on iOS, when redirected through a ",Object(a.b)("inlineCode",{parentName:"li"},"302"),", if a ",Object(a.b)("inlineCode",{parentName:"li"},"Set-Cookie")," header is present, the cookie is not set properly. Since the redirect cannot be handled manually this might cause a scenario where infinite requests occur if the redirect is the result of an expired session.")))}l.isMDXComponent=!0}}]);