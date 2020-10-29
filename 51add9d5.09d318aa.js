(window.webpackJsonp=window.webpackJsonp||[]).push([[314],{1006:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},b=Object.keys(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=r.a.createContext({}),p=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},j=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,b=e.originalType,i=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),d=p(n),j=a,u=d["".concat(i,".").concat(j)]||d[j]||O[j]||b;return n?r.a.createElement(u,l(l({ref:t},o),{},{components:n})):r.a.createElement(u,l({ref:t},o))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var b=n.length,i=new Array(b);i[0]=j;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var o=2;o<b;o++)i[o]=n[o];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}j.displayName="MDXCreateElement"},399:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(7),b=(n(0),n(1006)),i={id:"viewtoken",title:"ViewToken Object Type"},l={unversionedId:"viewtoken",id:"viewtoken",isDocsHomePage:!1,title:"ViewToken Object Type",description:"ViewToken object is returned as one of properties in the onViewableItemsChanged callback, for example in FlatList component. It is exported by ViewabilityHelper.js.",source:"@site/../docs/viewtoken.md",slug:"/viewtoken",permalink:"/docs/next/viewtoken",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../docs/viewtoken.md",version:"current",lastUpdatedAt:1599736120,sidebar:"components",previous:{title:"Rect Object Type",permalink:"/docs/next/rect"}},c=[{value:"Example",id:"example",children:[]},{value:"Keys and values",id:"keys-and-values",children:[{value:"<code>index</code>",id:"index",children:[]},{value:"<code>isViewable</code>",id:"isviewable",children:[]},{value:"<code>item</code>",id:"item",children:[]},{value:"<code>key</code>",id:"key",children:[]},{value:"<code>section</code>",id:"section",children:[]}]},{value:"Used by",id:"used-by",children:[]}],o={rightToc:c};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(a.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"ViewToken")," object is returned as one of properties in the ",Object(b.b)("inlineCode",{parentName:"p"},"onViewableItemsChanged")," callback, for example in ",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"flatlist"}),"FlatList")," component. It is exported by ",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/facebook/react-native/blob/master/Libraries/Lists/ViewabilityHelper.js"}),Object(b.b)("inlineCode",{parentName:"a"},"ViewabilityHelper.js")),"."),Object(b.b)("h2",{id:"example"},"Example"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'{\n  item: { key: "key-12" },\n  key: "key-12",\n  index: 11,\n  isViewable: true\n}\n')),Object(b.b)("h2",{id:"keys-and-values"},"Keys and values"),Object(b.b)("h3",{id:"index"},Object(b.b)("inlineCode",{parentName:"h3"},"index")),Object(b.b)("p",null,"Unique numeric identifier assigned to the data element."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Optional"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"number"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Yes")))),Object(b.b)("h3",{id:"isviewable"},Object(b.b)("inlineCode",{parentName:"h3"},"isViewable")),Object(b.b)("p",null,"Specifies if at least some part of list element is visible in the viewport."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Optional"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"boolean"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"No")))),Object(b.b)("h3",{id:"item"},Object(b.b)("inlineCode",{parentName:"h3"},"item")),Object(b.b)("p",null,"Item data"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Optional"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"any"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"No")))),Object(b.b)("h3",{id:"key"},Object(b.b)("inlineCode",{parentName:"h3"},"key")),Object(b.b)("p",null,"Key identifier assigned of the data element extracted to the top level."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Optional"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"No")))),Object(b.b)("h3",{id:"section"},Object(b.b)("inlineCode",{parentName:"h3"},"section")),Object(b.b)("p",null,"Item section data when used with ",Object(b.b)("inlineCode",{parentName:"p"},"SectionList"),"."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Optional"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"any"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Yes")))),Object(b.b)("h2",{id:"used-by"},"Used by"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(a.a)({parentName:"li"},{href:"flatlist"}),Object(b.b)("inlineCode",{parentName:"a"},"FlatList"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(a.a)({parentName:"li"},{href:"sectionlist"}),Object(b.b)("inlineCode",{parentName:"a"},"SectionList"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(a.a)({parentName:"li"},{href:"virtualizedlist"}),Object(b.b)("inlineCode",{parentName:"a"},"VirtualizedList")))))}p.isMDXComponent=!0}}]);