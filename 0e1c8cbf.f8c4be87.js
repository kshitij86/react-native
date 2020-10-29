(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{1006:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return m}));var n=a(0),o=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},u=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(a),d=n,m=u["".concat(i,".").concat(d)]||u[d]||b[d]||r;return a?o.a.createElement(m,c(c({ref:t},s),{},{components:a})):o.a.createElement(m,c({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<r;s++)i[s]=a[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},1086:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/git-upgrade-conflict-259c34d993954d886ad788010950c320.png"},1087:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/git-upgrade-output-411aa7509a5c0465f149d7deb8e8b4ad.png"},144:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return p}));var n=a(2),o=a(7),r=(a(0),a(1006)),i={title:"Easier Upgrades Thanks to Git",author:"Nicolas Cuillery",authorTitle:"JavaScript consultant and trainer at Zenika",authorURL:"https://twitter.com/ncuillery",authorImageURL:"https://fr.gravatar.com/userimage/78328995/184460def705a160fd8edadc04f60eaf.jpg?size=128",authorTwitter:"ncuillery",tags:["announcement"]},c={permalink:"/blog/2016/12/05/easier-upgrades",source:"@site/blog/2016-12-05-easier-upgrades.md",description:"Upgrading to new versions of React Native has been difficult. You might have seen something like this before:",date:"2016-12-05T00:00:00.000Z",tags:[{label:"announcement",permalink:"/blog/tags/announcement"}],title:"Easier Upgrades Thanks to Git",readingTime:3.915,truncated:!1,prevItem:{title:"A Monthly Release Cadence: Releasing December and January RC",permalink:"/blog/2017/01/07/monthly-release-cadence"},nextItem:{title:"Introducing Button, Faster Installs with Yarn, and a Public Roadmap",permalink:"/blog/2016/11/08/introducing-button-yarn-and-a-public-roadmap"}},l=[{value:"Usage",id:"usage",children:[]},{value:"How does it work?",id:"how-does-it-work",children:[]},{value:"Why introduce a new global package?",id:"why-introduce-a-new-global-package",children:[]},{value:"Try it out and provide feedback",id:"try-it-out-and-provide-feedback",children:[{value:"Thank you!",id:"thank-you",children:[]}]}],s={rightToc:l};function p(e){var t=e.components,i=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},s,i,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Upgrading to new versions of React Native has been difficult. You might have seen something like this before:"),Object(r.b)("p",null,Object(r.b)("img",{src:a(1086).default})),Object(r.b)("p",null,"None of those options is ideal. By overwriting the file we lose our local changes. By not overwriting we don't get the latest updates."),Object(r.b)("p",null,"Today I am proud to introduce a new tool that helps solve this problem. The tool is called ",Object(r.b)("inlineCode",{parentName:"p"},"react-native-git-upgrade")," and uses Git behind the scenes to resolve conflicts automatically whenever possible."),Object(r.b)("h2",{id:"usage"},"Usage"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"Requirement"),": Git has to be available in the ",Object(r.b)("inlineCode",{parentName:"p"},"PATH"),". Your project doesn't have to be managed by Git.")),Object(r.b)("p",null,"Install ",Object(r.b)("inlineCode",{parentName:"p"},"react-native-git-upgrade")," globally:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"$ npm install -g react-native-git-upgrade\n")),Object(r.b)("p",null,"or, using ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://yarnpkg.com/"}),"Yarn"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"$ yarn global add react-native-git-upgrade\n")),Object(r.b)("p",null,"Then, run it inside your project directory:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"$ cd MyProject\n$ react-native-git-upgrade 0.38.0\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Note: Do ",Object(r.b)("strong",{parentName:"p"},"not")," run 'npm install' to install a new version of ",Object(r.b)("inlineCode",{parentName:"p"},"react-native"),". The tool needs to be able to compare the old and new project template to work correctly. Simply run it inside your app folder as shown above, while still on the old version.")),Object(r.b)("p",null,"Example output:"),Object(r.b)("p",null,Object(r.b)("img",{src:a(1087).default})),Object(r.b)("p",null,"You can also run ",Object(r.b)("inlineCode",{parentName:"p"},"react-native-git-upgrade")," with no arguments to upgrade to the latest version of React Native."),Object(r.b)("p",null,"We try to preserve your changes in Android and iOS build files, so you don't need to run ",Object(r.b)("inlineCode",{parentName:"p"},"react-native link")," after an upgrade."),Object(r.b)("p",null,"We have designed the implementation to be as little intrusive as possible. It is entirely based on a local Git repository created on-the-fly in a temporary directory. It won't interfere with your project repository (no matter what VCS you use: Git, SVN, Mercurial, ... or none). Your sources are restored in case of unexpected errors."),Object(r.b)("h2",{id:"how-does-it-work"},"How does it work?"),Object(r.b)("p",null,"The key step is generating a Git patch. The patch contains all the changes made in the React Native templates between the version your app is using and the new version."),Object(r.b)("p",null,"To obtain this patch, we need to generate an app from the templates embedded in the ",Object(r.b)("inlineCode",{parentName:"p"},"react-native")," package inside your ",Object(r.b)("inlineCode",{parentName:"p"},"node_modules")," directory (these are the same templates the ",Object(r.b)("inlineCode",{parentName:"p"},"react-native init")," commands uses). Then, after the native apps have been generated from the templates in both the current version and the new version, Git is able to produce a patch that is adapted to your project (i.e. containing your app name):"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"[...]\n\ndiff --git a/ios/MyAwesomeApp/Info.plist b/ios/MyAwesomeApp/Info.plist\nindex e98ebb0..2fb6a11 100644\n--- a/ios/MyAwesomeApp/Info.plist\n+++ b/ios/MyAwesomeApp/Info.plist\n@@ -45,7 +45,7 @@\n        <dict>\n            <key>localhost</key>\n            <dict>\n-               <key>NSTemporaryExceptionAllowsInsecureHTTPLoads</key>\n+               <key>NSExceptionAllowsInsecureHTTPLoads</key>\n                <true/>\n            </dict>\n        </dict>\n[...]\n")),Object(r.b)("p",null,"All we need now is to apply this patch to your source files. While the old ",Object(r.b)("inlineCode",{parentName:"p"},"react-native upgrade")," process would have prompted you for any small difference, Git is able to merge most of the changes automatically using its 3-way merge algorithm and eventually leave us with familiar conflict delimiters:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),'        13B07F951A680F5B00A75B9A /* Release */ = {\n            isa = XCBuildConfiguration;\n            buildSettings = {\n                ASSETCATALOG_COMPILER_APPICON_NAME = AppIcon;\n<<<<<<< ours\n                CODE_SIGN_IDENTITY = "iPhone Developer";\n                FRAMEWORK_SEARCH_PATHS = (\n                    "$(inherited)",\n                    "$(PROJECT_DIR)/HockeySDK.embeddedframework",\n                    "$(PROJECT_DIR)/HockeySDK-iOS/HockeySDK.embeddedframework",\n                );\n=======\n                CURRENT_PROJECT_VERSION = 1;\n>>>>>>> theirs\n                HEADER_SEARCH_PATHS = (\n                    "$(inherited)",\n                    /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/include,\n                    "$(SRCROOT)/../node_modules/react-native/React/**",\n                    "$(SRCROOT)/../node_modules/react-native-code-push/ios/CodePush/**",\n                );\n')),Object(r.b)("p",null,"These conflicts are generally easy to reason about. The delimiter ",Object(r.b)("strong",{parentName:"p"},"ours"),' stands for "your team" whereas ',Object(r.b)("strong",{parentName:"p"},"theirs"),' could be seen as "the React Native team".'),Object(r.b)("h2",{id:"why-introduce-a-new-global-package"},"Why introduce a new global package?"),Object(r.b)("p",null,"React Native comes with a global CLI (the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.npmjs.com/package/react-native-cli"}),"react-native-cli")," package) which delegates commands to the local CLI embedded in the ",Object(r.b)("inlineCode",{parentName:"p"},"node_modules/react-native/local-cli")," directory."),Object(r.b)("p",null,"As we mentioned above, the process has to be started from your current React Native version. If we had embedded the implementation in the local-cli, you wouldn't be able to enjoy this feature when using old versions of React Native. For example, you wouldn't be able to upgrade from 0.29.2 to 0.38.0 if this new upgrade code was only released in 0.38.0."),Object(r.b)("p",null,"Upgrading based on Git is a big improvement in developer experience and it is important to make it available to everyone. By using a separate package ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.npmjs.com/package/react-native-git-upgrade"}),"react-native-git-upgrade")," installed globally you can use this new code today no matter what version of React Native your project is using."),Object(r.b)("p",null,"One more reason is the recent ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://twitter.com/martinkonicek/status/800730190141857793"}),"Yeoman wipeout")," by Martin Konicek. We didn't want to get these Yeoman dependencies back into the ",Object(r.b)("inlineCode",{parentName:"p"},"react-native")," package to be able to evaluate the old template in order to create the patch."),Object(r.b)("h2",{id:"try-it-out-and-provide-feedback"},"Try it out and provide feedback"),Object(r.b)("p",null,"As a conclusion, I would say, enjoy the feature and feel free ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/facebook/react-native/issues"}),"to suggest improvements, report issues")," and especially ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/facebook/react-native/pulls"}),"send pull requests"),". Each environment is a bit different and each React Native project is different, and we need your feedback to make this work well for everyone."),Object(r.b)("h3",{id:"thank-you"},"Thank you!"),Object(r.b)("p",null,"I would like to thank the awesome companies ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"http://www.zenika.com"}),"Zenika")," and ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"http://www.groupem6.fr/le-groupe_en/activites/diversifications/m6-web.html"}),"M6 Web")," without whom none of this would have been possible!"))}p.isMDXComponent=!0}}]);