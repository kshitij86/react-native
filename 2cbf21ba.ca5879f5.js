(window.webpackJsonp=window.webpackJsonp||[]).push([[176],{1006:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return d}));var o=a(0),n=a.n(o);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=n.a.createContext({}),l=function(e){var t=n.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},u=function(e){var t=l(e.components);return n.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},h=n.a.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(a),h=o,d=u["".concat(i,".").concat(h)]||u[h]||b[h]||r;return a?n.a.createElement(d,c(c({ref:t},p),{},{components:a})):n.a.createElement(d,c({ref:t},p))}));function d(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<r;p++)i[p]=a[p];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}h.displayName="MDXCreateElement"},265:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return l}));var o=a(2),n=a(7),r=(a(0),a(1006)),i={title:"React Native at F8 and Open Source Podcast",author:"Christoph Nakazawa",authorTitle:"Engineer at Facebook",authorURL:"https://twitter.com/cpojer",authorImageURL:"https://avatars2.githubusercontent.com/u/13352?s=460&v=4",authorTwitter:"cpojer",tags:["announcement"]},c={permalink:"/blog/2019/05/01/react-native-at-f8-and-podcast",source:"@site/blog/2019-05-01-react-native-at-f8-and-podcast.md",description:"This week, Eli White gave a talk at F8 2019 about React Native in Facebook's Android and iOS applications. We are excited to share what we've been up to for the past two years and what we're doing next.",date:"2019-05-01T00:00:00.000Z",tags:[{label:"announcement",permalink:"/blog/tags/announcement"}],title:"React Native at F8 and Open Source Podcast",readingTime:2.075,truncated:!1,prevItem:{title:"React Native Open Source Update June 2019",permalink:"/blog/2019/06/12/react-native-open-source-update"},nextItem:{title:"Releasing React Native 0.59",permalink:"/blog/2019/03/12/releasing-react-native-059"}},s=[{value:"React Radio Podcast about Open Source",id:"react-radio-podcast-about-open-source",children:[]}],p={rightToc:s};function l(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"This week, ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://twitter.com/Eli_White"}),"Eli White")," gave a talk at ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://developers.facebook.com/videos/2019/mobile-innovation-with-react-native-componentkit-and-litho/"}),"F8 2019")," about React Native in Facebook's Android and iOS applications. We are excited to share what we've been up to for the past two years and what we're doing next."),Object(r.b)("p",null,"Check out the video on ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://developers.facebook.com/videos/2019/mobile-innovation-with-react-native-componentkit-and-litho/"}),"Facebook's developer website"),":"),Object(r.b)("a",{href:"https://developers.facebook.com/videos/2019/mobile-innovation-with-react-native-componentkit-and-litho/"},Object(r.b)("img",{src:"/blog/assets/eli-at-f8.png",alt:"F8 Talk about React Native"})),Object(r.b)("h4",{id:"highlights-from-the-talk"},"Highlights from the talk:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"We spent 2017 and 2018 focused on React Native's largest product, Facebook's Marketplace. We collaborated with the Marketplace team to improve quality and add delight to the product. At this point, Marketplace is one of the highest quality products in the Facebook app both on Android and iOS."),Object(r.b)("li",{parentName:"ul"},"Marketplace's performance was a big challenge as well, especially on mid-end Android devices. We cut startup time by more than 50% over the last year with more improvements on the way! The biggest improvements are being built into React Native and will be coming to the community later this year."),Object(r.b)("li",{parentName:"ul"},"We have the confidence that we can build the high quality and performant apps that Facebook needs with React Native. This confidence has let us invest in bigger bets, like ",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://www.youtube.com/watch?v=UcqRXTriUVI&app=desktop"}),"rethinking the core of React Native"),"."),Object(r.b)("li",{parentName:"ul"},"Microsoft supports and uses React Native for Windows, enabling people to use their expertise and codebase to render to Microsofts's Universal Windows Platform. Check out Microsoft Build next week to ",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://mybuild.techcommunity.microsoft.com/sessions/77321"}),"hear them talk about that more"),".")),Object(r.b)("h3",{id:"react-radio-podcast-about-open-source"},"React Radio Podcast about Open Source"),Object(r.b)("p",null,"Eli's talk concludes by talking about our recent open source work. We gave ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/blog/2019/03/01/react-native-open-source-update"}),"an update on our progress in March")," and recently ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://twitter.com/dabit3"}),"Nader Dabit")," and ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://twitter.com/GantLaborde"}),"Gant Laborde")," invited Christoph for a chat on their podcast, ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://devchat.tv/react-native-radio/react-native-open-source-the-react-native-community-feat-christoph-nakazawa/"}),"React Native Radio"),", to chat about React Native in open source."),Object(r.b)("h4",{id:"highlights-from-the-podcast"},"Highlights from the podcast:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"We talked about how the React Native team at Facebook thinks about open source and how we are building a sustainable community that scales for a project of React Native's ",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://octoverse.github.com/projects#repositories"}),"size"),"."),Object(r.b)("li",{parentName:"ul"},"We are on track to remove multiple modules as part of the ",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://github.com/facebook/react-native/issues/23313"}),"Lean Core")," effort. Many modules like WebView and the React Native CLI have received more than 100 Pull Requests since they were extracted."),Object(r.b)("li",{parentName:"ul"},"Next, we'll be focusing on overhauling the React Native website and documentation. Stay tuned!")),Object(r.b)("p",null,"You'll find the episode in your favorite podcasting app soon or you can listen to the recording right here:"),Object(r.b)("audio",{controls:!0,style:{display:"block",margin:"0 auto"},src:"https://media.devchat.tv/reactnativeradio/React_Native_Radio_Episode_121.mp3"}," "," "," Audio is unsupported in this browser."," "," "))}l.isMDXComponent=!0}}]);