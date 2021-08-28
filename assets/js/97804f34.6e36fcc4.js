"use strict";(self.webpackChunkrm_controls_tutorial=self.webpackChunkrm_controls_tutorial||[]).push([[48],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return s}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=p(n),s=r,k=u["".concat(c,".").concat(s)]||u[s]||m[s]||i;return n?a.createElement(k,l(l({ref:t},d),{},{components:n})):a.createElement(k,l({ref:t},d))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8197:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return d},default:function(){return u}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),l=["components"],o={},c="\u4ee3\u7801\u89c4\u8303",p={unversionedId:"dev_guide/code_style",id:"dev_guide/code_style",isDocsHomePage:!1,title:"\u4ee3\u7801\u89c4\u8303",description:"\u6211\u4eec\u4f7f\u7528\u5728C++\u5f00\u53d1\u4e2d\u4f7f\u7528 ROS C++ Style guide \uff0c\u5728Python\u5f00\u53d1\u4e2d\uff08\u5f88\u5c11\uff09\u4f7f\u7528 ROS Python Style guide , \u4f60\u8fd8\u53ef\u4ee5\u5c06 rosbestpracitces \u4f5c\u4e3a\u6a21\u7248\u53c2\u8003.",source:"@site/current_docs/dev_guide/code_style.md",sourceDirName:"dev_guide",slug:"/dev_guide/code_style",permalink:"/test-docs/docs/dev_guide/code_style",editUrl:"https://github.com/rm-controls/rm-controls-tutorial/current_docs/dev_guide/code_style.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u5b89\u88c5",permalink:"/test-docs/docs/quick_start/code_configuration"},next:{title:"CLion IDE \u914d\u7f6e",permalink:"/test-docs/docs/dev_guide/ide_config"}},d=[{value:"C++",id:"c",children:[]},{value:"\u4ee3\u7801\u5185\u6587\u6863",id:"\u4ee3\u7801\u5185\u6587\u6863",children:[]},{value:"Exceptions",id:"exceptions",children:[]},{value:"Logging",id:"logging",children:[]},{value:"\u5f03\u7528",id:"\u5f03\u7528",children:[]},{value:"pre-commit \u683c\u5f0f\u68c0\u67e5\u5668",id:"pre-commit-\u683c\u5f0f\u68c0\u67e5\u5668",children:[]},{value:"clang-format \u81ea\u52a8\u4ee3\u7801\u683c\u5f0f\u5316",id:"clang-format-\u81ea\u52a8\u4ee3\u7801\u683c\u5f0f\u5316",children:[{value:"Command Line",id:"command-line",children:[]},{value:"clang-format \u7684\u4f8b\u5916",id:"clang-format-\u7684\u4f8b\u5916",children:[]}]},{value:"clang-tidy Linting",id:"clang-tidy-linting",children:[{value:"clang-tidy\u7684\u4f8b\u5916",id:"clang-tidy\u7684\u4f8b\u5916",children:[]}]},{value:"Credits",id:"credits",children:[]}],m={toc:d};function u(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u4ee3\u7801\u89c4\u8303"},"\u4ee3\u7801\u89c4\u8303"),(0,i.kt)("p",null,"\u6211\u4eec\u4f7f\u7528\u5728C++\u5f00\u53d1\u4e2d\u4f7f\u7528 ",(0,i.kt)("a",{parentName:"p",href:"http://wiki.ros.org/CppStyleGuide"},"ROS C++ Style guide")," \uff0c\u5728Python\u5f00\u53d1\u4e2d\uff08\u5f88\u5c11\uff09\u4f7f\u7528 ",(0,i.kt)("a",{parentName:"p",href:"http://wiki.ros.org/PyStyleGuide"},"ROS Python Style guide")," , \u4f60\u8fd8\u53ef\u4ee5\u5c06 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/leggedrobotics/ros_best_practices"},"ros_best_pracitces")," \u4f5c\u4e3a\u6a21\u7248\u53c2\u8003."),(0,i.kt)("p",null,"\u4e3a\u4e86\u8ba9\u4f60\u7684\u5f00\u53d1\u66f4\u65b9\u4fbf, \u6211\u4eec\u63a8\u8350\u4f60\u4f7f\u7528 \u5e26\u6709ROS\u914d\u7f6e\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"clang-format")," \u548c CLion IDE - \u8be6\u89c1\u4e0b\u65b9."),(0,i.kt)("p",null,"\u6b64\u5916 rm-controls \u6709\u4e00\u4e9b\u989d\u5916\u7684\u6837\u5f0f\u504f\u597d\uff1a"),(0,i.kt)("h2",{id:"c"},"C++"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u6211\u4eec\u4f7f\u7528 C++14"),(0,i.kt)("li",{parentName:"ul"},"\u5c3d\u53ef\u80fd\u4f7f\u7528 C++ \u6807\u51c6\u5e93 (",(0,i.kt)("inlineCode",{parentName:"li"},"std::"),") "),(0,i.kt)("li",{parentName:"ul"},"\u907f\u514d\u4f7f\u7528 C \u98ce\u683c\u7684\u51fd\u6570\uff0c\u6bd4\u5982\uff1a ",(0,i.kt)("inlineCode",{parentName:"li"},"FLT_EPSILON")," \u548c ",(0,i.kt)("inlineCode",{parentName:"li"},"(int)()"),"-  \u800c\u662f\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"li"},"std::numeric_limits<double>::epsilon()")," \u548c ",(0,i.kt)("inlineCode",{parentName:"li"},"static_cast<int>()")),(0,i.kt)("li",{parentName:"ul"},"\u5f53\u529f\u80fd\u5728\u6807\u51c6\u5e93\u4e2d\u4e0d\u53ef\u7528\u65f6\uff0c\u9f13\u52b1\u4f7f\u7528 Boost \u5e93"),(0,i.kt)("li",{parentName:"ul"},"\u5728\u6807\u9898\u4e2d\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"li"},"#pragma once"),' \u800c\u4e0d\u662f "include guards"')),(0,i.kt)("h2",{id:"\u4ee3\u7801\u5185\u6587\u6863"},"\u4ee3\u7801\u5185\u6587\u6863"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u6211\u4eec\u4f7f\u7528 Doxygen \u98ce\u683c\u7684\u6ce8\u91ca"),(0,i.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e\u672a\u6765\u7684\u5de5\u4f5c\uff0c\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"li"},"TODO(username): description")),(0,i.kt)("li",{parentName:"ul"},"\u6dfb\u52a0\u5927\u91cf\u6ce8\u91ca\u4ee5\u89e3\u91ca\u590d\u6742\u7684\u4ee3\u7801\u90e8\u5206"),(0,i.kt)("li",{parentName:"ul"},"\u66f4\u504f\u5411\u4f7f\u7528\u5b8c\u6574\u7684\u3001\u63cf\u8ff0\u6027\u7684\u53d8\u91cf\u540d\u79f0\u800c\u4e0d\u662f\u7b80\u77ed\u7684\u5b57\u6bcd - \u4f8b\u5982 ",(0,i.kt)("inlineCode",{parentName:"li"},"robot_state_")," \u4f18\u4e8e ",(0,i.kt)("inlineCode",{parentName:"li"},"rs_")),(0,i.kt)("li",{parentName:"ul"},"\u5982\u679c\u53d8\u91cf\u7c7b\u578b\u4e0d\u80fd\u4ece\u4e0a\u4e0b\u6587\u4e2d\u7acb\u5373\u53d8\u5f97\u6e05\u6670\uff08\u4f8b\u5982\u4ece ",(0,i.kt)("inlineCode",{parentName:"li"},"make_shared<...>"),"\uff09\uff0c\u907f\u514d\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"li"},"auto"))),(0,i.kt)("h2",{id:"exceptions"},"Exceptions"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u6355\u83b7\u5df2\u77e5\u5f02\u5e38\u5e76\u8be6\u7ec6\u8bb0\u5f55\u5b83\u4eec\u3002 \u907f\u514d\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"li"},"catch (...)")," \u56e0\u4e3a\u5b83\u9690\u85cf\u4e86\u6709\u5173\u53ef\u80fd\u6545\u969c\u7684\u4fe1\u606f\u3002 \u6211\u4eec\u60f3\u77e5\u9053\u662f\u5426\u6709\u95ee\u9898\u3002")),(0,i.kt)("h2",{id:"logging"},"Logging"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u4f7f\u7528ROS logging\u529f\u80fd\u548c\u547d\u540d\u7a7a\u95f4\uff0c\u5982\uff1a ",(0,i.kt)("inlineCode",{parentName:"li"},'ROS_INFO_NAMED(LOGNAME, "Starting listener...'),".",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u8fd9\u4f7f\u5f97\u5728\u547d\u4ee4\u884c\u4e0a\u66f4\u5bb9\u6613\u7406\u89e3\u8f93\u51fa\u6765\u81ea\u54ea\u91cc\uff0c\u5e76\u5141\u8bb8\u5bf9\u7ec8\u7aef\u8f93\u51fa\u7684\u4fe1\u606f\u8fdb\u884c\u66f4\u8be6\u7ec6\u7684\u7b5b\u9009\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u65e5\u5fd7\u547d\u540d\u7a7a\u95f4\u5e94\u8be5\u88ab\u5b9a\u4e49\u4e3a\u4e00\u4e2a ",(0,i.kt)("inlineCode",{parentName:"li"},"const")," \u53d8\u91cf\u3002 \uff08\u4f8b\u5982\uff1a",(0,i.kt)("inlineCode",{parentName:"li"},'constexpr char LOGNAME[] = "robot_state";'),")"),(0,i.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u6587\u4ef6\u540d\u4f5c\u4e3a LOGNAMED \u547d\u540d\u7a7a\u95f4\u662f\u6700\u4f73\u7684\uff0c\u5373 ",(0,i.kt)("inlineCode",{parentName:"li"},"hardware_interface.cpp")," \u5c06\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"li"},'"hardware_interface"')),(0,i.kt)("li",{parentName:"ul"},"\u907f\u514d\u4f7f\u7528\u5305\u540d\u79f0\u4f5c\u4e3a\u547d\u540d\u7a7a\u95f4\uff0c\u56e0\u4e3a\u5b83\u5df2\u7ecf\u4f1a\u88ab logger \u8f93\u51fa\u3002")))),(0,i.kt)("h2",{id:"\u5f03\u7528"},"\u5f03\u7528"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5f03\u7528\u51fd\u6570\u4f7f\u7528 C++14 ",(0,i.kt)("a",{parentName:"li",href:"https://en.cppreference.com/w/cpp/language/attributes/deprecated"}," ",(0,i.kt)("inlineCode",{parentName:"a"},"[[deprecated]]")," ")," \u5c5e\u6027"),(0,i.kt)("li",{parentName:"ul"},"\u6dfb\u52a0\u4e00\u6761\u6709\u7528\u7684\u6d88\u606f\u6765\u63cf\u8ff0\u5982\u4f55\u5904\u7406\u8fd9\u79cd\u60c5\u51b5\uff1a")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'[[deprecated("use bar instead")]] void foo() {}\n')),(0,i.kt)("p",null,"   \u8fd9\u5c06\u5bfc\u81f4\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"     warning: 'foo' is deprecated: use bar instead [-Wdeprecated-declarations] foo(); ^ note: 'foo' has been explicitly marked deprecated here void foo() {} ^\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u6dfb\u52a0\u76f8\u5173\u7684 TODO\uff0c\u63cf\u8ff0\u4f55\u65f6\u5220\u9664\u8be5\u529f\u80fd\uff08\u65e5\u671f\u548c/\u6216 ROS \u7248\u672c\uff09")),(0,i.kt)("h2",{id:"pre-commit-\u683c\u5f0f\u68c0\u67e5\u5668"},"pre-commit \u683c\u5f0f\u68c0\u67e5\u5668"),(0,i.kt)("p",null,"\u5728\u6211\u4eec\u7684\u8bb8\u591a\u5b58\u50a8\u5e93\u4e2d\uff0c\u6709\u4e00\u4e2a\u5728 CI \u4e2d\u8fd0\u884c\u7684 ",(0,i.kt)("a",{parentName:"p",href:"https://pre-commit.com/"},"pre-commit")," \u68c0\u67e5\u3002\n\u4f60\u53ef\u4ee5\u5728\u672c\u5730\u4f7f\u7528\u5b83\u5e76\u5c06\u5176\u8bbe\u7f6e\u4e3a\u5728\u63d0\u4ea4\u4e4b\u524d\u81ea\u52a8\u8fd0\u884c\uff0c\u4ece\u800c\u907f\u514d\u56e0\u4e3a\u683c\u5f0f\u9519\u8bef\u800c\u65e0\u6cd5\u901a\u8fc7CI\u3002\n\u8981\u5b89\u88c5\uff0c\u8bf7\u4f7f\u7528 pip\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"pip3 install pre-commit\n")),(0,i.kt)("p",null,"\u8981\u624b\u52a8\u8fd0\u884c repo \u4e2d\u7684\u6240\u6709\u6587\u4ef6\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"pre-commit run -a\n")),(0,i.kt)("p",null,"\u8981\u5728\u672c\u5730\u5b58\u50a8\u5e93\u4e2d\u63d0\u4ea4\u4e4b\u524d\u81ea\u52a8\u8fd0\u884c pre-commit\uff0c\u8bf7\u5728\u672c\u5730\u4ed3\u5e93\u76ee\u5f55\u4e2d\u8fd0\u884c\u4ee5\u4e0b\u6307\u4ee4\u5b89\u88c5 git hooks\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"pre-commit install\n")),(0,i.kt)("h2",{id:"clang-format-\u81ea\u52a8\u4ee3\u7801\u683c\u5f0f\u5316"},"clang-format \u81ea\u52a8\u4ee3\u7801\u683c\u5f0f\u5316"),(0,i.kt)("p",null,"\u8bf7\u6ce8\u610f\uff0c\u5982\u679c\u60a8\u5982\u4e0a\u6240\u8ff0\u4f7f\u7528\u9884\u63d0\u4ea4\uff0c\u5219\u6bcf\u6b21\u63d0\u4ea4\u4e4b\u524d\u90fd\u4f1a\u81ea\u52a8\u8fd0\u884c clang-format\uff08\u5982\u679c\u5b89\u88c5\u4e86 ",(0,i.kt)("inlineCode",{parentName:"p"},"clang-format-10"),"\uff09\u3002 \u672c\u8282\u4ecb\u7ecd\u5982\u4f55\u624b\u52a8\u4f7f\u7528\u5b83\u3002"),(0,i.kt)("p",null,"\u60a8\u53ef\u4ee5\u901a\u8fc7\u591a\u79cd\u65b9\u5f0f\u8fd0\u884c ",(0,i.kt)("strong",{parentName:"p"},"clang-format"),"\u3002 \u8981\u5728 Ubuntu \u4e0a\u5b89\u88c5\uff0c\u53ea\u9700\u8fd0\u884c\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"sudo apt install clang-format-10\n")),(0,i.kt)("p",null,"\u8bf7\u6ce8\u610f\uff0c\u6211\u4eec\u4f9d\u8d56 clang \u683c\u5f0f\u7248\u672c ",(0,i.kt)("strong",{parentName:"p"},"10"),"\u3002 \u9057\u61be\u7684\u662f\uff0c\u8f83\u65b0\u7684\u7248\u672c\u5e76\u4e0d\u5b8c\u5168\u5411\u540e\u517c\u5bb9\u3002"),(0,i.kt)("p",null,"clang-format \u9700\u8981\u5728 catkin \u5de5\u4f5c\u533a\u7684\u6839\u76ee\u5f55\u4e0b\u6709\u4e00\u4e2a\u914d\u7f6e\u6587\u4ef6\uff0crm-controls \u7684\u6bcf\u4e2a\u4ed3\u5e93\u7684\u6839\u76ee\u5f55\u4e2d\u90fd\u63d0\u4f9b\u4e86\u76f8\u540c\u7684\u914d\u7f6e\u6587\u4ef6\u3002"),(0,i.kt)("h3",{id:"command-line"},"Command Line"),(0,i.kt)("p",null,"\u683c\u5f0f\u5316\u5355\u4e2a\u6587\u4ef6\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"clang-format-10 -i -style=file MY_FLIE_NAME.cpp\n")),(0,i.kt)("p",null,"\u9012\u5f52\u683c\u5f0f\u5316\u6574\u4e2a\u76ee\u5f55\uff0c\u5305\u62ec\u5b50\u6587\u4ef6\u5939\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"find . -name '*.h' -or -name '*.hpp' -or -name '*.cpp' | xargs clang-format-10 -i -style=file $1\n")),(0,i.kt)("h3",{id:"clang-format-\u7684\u4f8b\u5916"},"clang-format \u7684\u4f8b\u5916"),(0,i.kt)("p",null,"\u6709\u65f6\uff0c clang-format \u4f7f\u7528\u7684\u81ea\u52a8\u683c\u5f0f\u5316\u53ef\u80fd\u6ca1\u6709\u610f\u4e49\uff0c\u4f8b\u5982 \u7528\u4e8e\u5728\u5355\u72ec\u7684\u884c\u4e0a\u66f4\u5bb9\u6613\u9605\u8bfb\u7684\u9879\u76ee\u5217\u8868\u3002 \u5b83\u53ef\u4ee5\u7528\u4ee5\u4e0b\u547d\u4ee4\u8986\u76d6\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"// clang-format off\n... some untouched code\n// clang-format on\n")),(0,i.kt)("p",null,"\u4e0d\u8fc7\u8bf7\u8c28\u614e\u4f7f\u7528\u3002"),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u4f7f\u7528\u547d\u4ee4\u884c\u592a\u5934\u75bc\u4e86? \u8bd5\u8bd5 ",(0,i.kt)("a",{parentName:"p",href:"./ide_config"},"CLion IDE \u914d\u7f6e "),"."))),(0,i.kt)("h2",{id:"clang-tidy-linting"},"clang-tidy Linting"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"clang-tidy")," \u662f C++ \u7684 linting \u5de5\u5177\u3002 ",(0,i.kt)("strong",{parentName:"p"},"clang-format")," \u7528\u4e8e\u4fee\u590d\u4ee3\u7801\u683c\u5f0f\n\uff08\u9519\u8bef\u7684\u7f29\u8fdb\u3001\u884c\u957f\u7b49\uff09\uff0c\u800c",(0,i.kt)("strong",{parentName:"p"},"clang-tidy")," \u5c06\u4fee\u590d\u7f16\u7a0b\u9519\u8bef\u4ee5\u4f7f\u60a8\u7684\u4ee3\u7801\n\u66f4\u73b0\u4ee3\uff0c\u66f4\u6613\u8bfb\uff0c\u66f4\u4e0d\u5bb9\u6613\u51fa\u73b0\u5e38\u89c1\u9519\u8bef\u3002"),(0,i.kt)("p",null,"\u60a8\u53ef\u4ee5\u5b89\u88c5 clang-tidy \u548c\u5176\u4ed6\u4e0e clang \u76f8\u5173\u7684\u5de5\u5177\n",(0,i.kt)("inlineCode",{parentName:"p"},"sudo apt install clang-tidy clang-tools")),(0,i.kt)("p",null,"\u4e0e clang-format \u7c7b\u4f3c\uff0cclang-tidy \u4f7f\u7528\u5728\u5411\u4e0a\u904d\u5386\u6e90\u6587\u4ef6\u5939\u5c42\u6b21\u7ed3\u6784\u65f6\u9996\u5148\u627e\u5230\u7684\u914d\u7f6e\u6587\u4ef6 ",(0,i.kt)("inlineCode",{parentName:"p"},".clang-tidy"),"\u3002 \u6240\u6709 rm-controls \u5b58\u50a8\u5e93\u90fd\u5728\u5b58\u50a8\u5e93\u6839\u6587\u4ef6\u4e2d\u63d0\u4f9b\u76f8\u540c\u7684\u6587\u4ef6\u3002"),(0,i.kt)("p",null,"\u4e0e clang-format \u4e0d\u540c\uff0cclang-tidy \u9700\u8981\u77e5\u9053\u7528\u4e8e\u6784\u5efa\u9879\u76ee\u7684\u786e\u5207\u7f16\u8bd1\u5668\u9009\u9879\u3002 \u8981\u63d0\u4f9b\u5b83\u4eec\uff0c\u8bf7\u4f7f\u7528 -DCMAKE_EXPORT_COMPILE_COMMANDS=ON \u914d\u7f6e cmake\uff0ccmake \u5c06\u5728\u5305\u7684\u6784\u5efa\u6587\u4ef6\u5939\u4e2d\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a compile_commands.json \u7684\u6587\u4ef6\u3002 \u6784\u5efa\u5b8c\u6210\u540e\uff0c\u60a8\u53ef\u4ee5\u8fd0\u884c clang-tidy \u6765\u5206\u6790\u60a8\u7684\u4ee3\u7801\uff0c\u751a\u81f3\u53ef\u4ee5\u81ea\u52a8\u4fee\u590d\u95ee\u9898\uff0c\u5982\u4e0b\u6240\u793a\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'for file in $(find $CATKIN_WS/build -name compile_commands.json) ; do\n    run-clang-tidy -fix -header-filter="$CATKIN_WS/.*" -p $(dirname $file)\ndone\n')),(0,i.kt)("p",null,"\u60a8\u8fd8\u53ef\u4ee5\u901a\u8fc7\u6307\u5b9a\u6b63\u5219\u8868\u8fbe\u5f0f\u6765\u5339\u914d\u6587\u4ef6\u540d\uff0c\u5728\u9009\u5b9a\u7684\u6587\u4ef6\u5939\u6216\u5305\u6587\u4ef6\u4e0a\u8fd0\u884c\u5b83\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'run-clang-tidy -fix -header-filter="$CATKIN_WS/.*" -p $CATKIN_WS/build/rm_hw rm_hw\n')),(0,i.kt)("p",null,"\u8bf7\u6ce8\u610f\uff0c\u5982\u679c\u60a8\u6709\u591a\u5c42\u5d4c\u5957\u7684\u201cfor\u201d\u5faa\u73af\u9700\u8981\u8f6c\u6362\uff0cclang-tidy\n\u4e00\u6b21\u53ea\u4f1a\u4fee\u590d\u4e00\u4e2a\u3002 \u6240\u4ee5\u4e00\u5b9a\u8981\u591a\u6b21\u8fd0\u884c\u4e0a\u9762\u7684\u547d\u4ee4\u6765\u8f6c\u6362\u6240\u6709\u4ee3\u7801\u3002"),(0,i.kt)("p",null,"\u5982\u679c\u60a8\u53ea\u5bf9\u8b66\u544a\u611f\u5174\u8da3\uff0cclang-tidy \u4e5f\u53ef\u4ee5\u5728\u6784\u5efa\u671f\u95f4\u76f4\u63a5\u8fd0\u884c\u3002\n\u60a8\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u8fdb\u884c\u7279\u5b9a\u7684 clang-tidy \u6784\u5efa\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"catkin config --cmake-args -DCMAKE_EXPORT_COMPILE_COMMANDS=ON -DCMAKE_CXX_CLANG_TIDY=clang-tidy\ncatkin build\n")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u4f7f\u7528\u547d\u4ee4\u884c\u592a\u5934\u75bc\u4e86? ",(0,i.kt)("a",{parentName:"p",href:"https://www.jetbrains.com/help/clion/clang-tidy-checks-support.html"},"CLion IDE \u81ea\u5e26 clang-tidy"),"\uff0c\u76f4\u63a5\u4f7f\u7528\u5373\u53ef\u3002"))),(0,i.kt)("h3",{id:"clang-tidy\u7684\u4f8b\u5916"},"clang-tidy\u7684\u4f8b\u5916"),(0,i.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7\u4f7f\u7528 ",(0,i.kt)("strong",{parentName:"p"},"NOLINT")," \u6216 ",(0,i.kt)("strong",{parentName:"p"},"NOLINTNEXTLINE")," \u6ce8\u91ca\u6765\u6291\u5236\u4e0d\u9700\u8981\u7684 clang-tidy \u68c0\u67e5\u3002 \u8bf7\u5728\u6ce8\u91ca\u540e\u7684\u62ec\u53f7\u4e2d\u660e\u786e\u6307\u5b9acheck\u7684\u540d\u79f0\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"const IKCallbackFn solution_callback = 0; // NOLINT(modernize-use-nullptr)\n\n// NOLINTNEXTLINE(performance-unnecessary-copy-initialization)\nrobot_state::RobotState robot_state(default_state);\n")),(0,i.kt)("p",null,"\u8bf7\u6ce8\u610f\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"modernize-loop-convert")," \u68c0\u67e5\u53ef\u80fd\u4f1a\u5c06 ",(0,i.kt)("inlineCode",{parentName:"p"},"for (...; ...; ...)")," \u5faa\u73af\u8f6c\u6362\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"for (auto & ... : ...)"),"\u3002\n\u7136\u800c\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"auto")," \u6709\u65f6\u5019\u4e0d\u662f\u4e00\u4e2a\u9ad8\u5ea6\u53ef\u8bfb\u7684\u8868\u8fbe\u5f0f\u3002\n\u5982\u679c\u5b83\u4e0d\u80fd\u7acb\u5373\u4ece\u4e0a\u4e0b\u6587\u4e2d\u53d8\u5f97\u6e05\u6670\uff0c\u8bf7\u660e\u786e\u6307\u5b9a\u53d8\u91cf\u7c7b\u578b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"for (const int & item : container)\n  std::cout << item;\n")),(0,i.kt)("h2",{id:"credits"},"Credits"),(0,i.kt)("p",null,"\u8fd9\u4e2a\u6587\u4ef6\u7ffb\u8bd1\u4fee\u6539\u81ea ",(0,i.kt)("a",{parentName:"p",href:"https://moveit.ros.org/documentation/contributing/code/"},"MoveIt Code Style Guidelines"),"."))}u.isMDXComponent=!0}}]);