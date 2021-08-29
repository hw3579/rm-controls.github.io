"use strict";(self.webpackChunkrm_controls_docs=self.webpackChunkrm_controls_docs||[]).push([[813],{3905:function(t,e,r){r.d(e,{Zo:function(){return s},kt:function(){return k}});var n=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var i=n.createContext({}),p=function(t){var e=n.useContext(i),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},s=function(t){var e=p(t.components);return n.createElement(i.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,i=t.parentName,s=c(t,["components","mdxType","originalType","parentName"]),m=p(r),k=a,u=m["".concat(i,".").concat(k)]||m[k]||d[k]||o;return r?n.createElement(u,l(l({ref:e},s),{},{components:r})):n.createElement(u,l({ref:e},s))}));function k(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,l=new Array(o);l[0]=m;var c={};for(var i in e)hasOwnProperty.call(e,i)&&(c[i]=e[i]);c.originalType=t,c.mdxType="string"==typeof t?t:a,l[1]=c;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5735:function(t,e,r){r.r(e),r.d(e,{frontMatter:function(){return c},contentTitle:function(){return i},metadata:function(){return p},toc:function(){return s},default:function(){return m}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),l=["components"],c={},i="\u6574\u4f53\u67b6\u6784",p={unversionedId:"digging_deeper/sdk_docs/architecture",id:"digging_deeper/sdk_docs/architecture",isDocsHomePage:!1,title:"\u6574\u4f53\u67b6\u6784",description:"\u67b6\u6784\u4e0e\u6a21\u5757\u4ecb\u7ecd",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/digging_deeper/sdk_docs/architecture.md",sourceDirName:"digging_deeper/sdk_docs",slug:"/digging_deeper/sdk_docs/architecture",permalink:"/rm-controls-docs/en/digging_deeper/sdk_docs/architecture",editUrl:"https://github.com/rm-controls/rm-controls-docs/tree/master/current_docs/digging_deeper/sdk_docs/architecture.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"rm-controls Code Style Guidelines",permalink:"/rm-controls-docs/en/dev_guide/code_style"},next:{title:"rm_base\u6a21\u5757",permalink:"/rm-controls-docs/en/digging_deeper/sdk_docs/rm_base"}},s=[{value:"\u67b6\u6784\u4e0e\u6a21\u5757\u4ecb\u7ecd",id:"\u67b6\u6784\u4e0e\u6a21\u5757\u4ecb\u7ecd",children:[{value:"\u4f20\u611f\u5668\u3001\u63a7\u5236\u5668\u4e0e\u6267\u884c\u5668",id:"\u4f20\u611f\u5668\u63a7\u5236\u5668\u4e0e\u6267\u884c\u5668",children:[]},{value:"\u611f\u77e5\u90e8\u5206",id:"\u611f\u77e5\u90e8\u5206",children:[]},{value:"\u4efb\u52a1\u8c03\u5ea6\u4e0e\u51b3\u7b56\u90e8\u5206",id:"\u4efb\u52a1\u8c03\u5ea6\u4e0e\u51b3\u7b56\u90e8\u5206",children:[]},{value:"\u8fd0\u52a8\u89c4\u5212\u90e8\u5206",id:"\u8fd0\u52a8\u89c4\u5212\u90e8\u5206",children:[]}]},{value:"ROS Package\u4ecb\u7ecd",id:"ros-package\u4ecb\u7ecd",children:[]}],d={toc:s};function m(t){var e=t.components,r=(0,a.Z)(t,l);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u6574\u4f53\u67b6\u6784"},"\u6574\u4f53\u67b6\u6784"),(0,o.kt)("h2",{id:"\u67b6\u6784\u4e0e\u6a21\u5757\u4ecb\u7ecd"},"\u67b6\u6784\u4e0e\u6a21\u5757\u4ecb\u7ecd"),(0,o.kt)("p",null,"\u6574\u4f53\u7cfb\u7edf\u4ee5 ",(0,o.kt)("inlineCode",{parentName:"p"},"\u673a\u5668\u4eba\u4f20\u611f\u5668->\u611f\u77e5->\u51b3\u7b56->\u89c4\u5212->\u63a7\u5236->\u6267\u884c\u5668")," \u7684\u73af\u8def\u8fdb\u884c\u67b6\u6784\uff0c\u4e0d\u540c\u6a21\u5757\u5177\u4f53\u4ee5ROS Package\u7684\u5f62\u5f0f\u7ef4\u62a4\uff0c\u6a21\u5757\u548c\u5176\u6570\u636e\u6d41\u5982\u4e0b\u56fe\u6240\u793a\n",(0,o.kt)("img",{parentName:"p",src:"https://rm-static.djicdn.com/documents/20758/f42d65d85d97c1547553106539783606.png",alt:null})),(0,o.kt)("h3",{id:"\u4f20\u611f\u5668\u63a7\u5236\u5668\u4e0e\u6267\u884c\u5668"},"\u4f20\u611f\u5668\u3001\u63a7\u5236\u5668\u4e0e\u6267\u884c\u5668"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u4e2d\u5fc3\u6a21\u5757\u96c6\u6210\u4f20\u611f\u5668\u6a21\u5757\uff08\u96f7\u8fbe\u3001\u76f8\u673a\u3001IMU\u7b49\uff09\u3001\u5d4c\u5165\u5f0f\u63a7\u5236\u5e73\u53f0\uff08\u6267\u884c\u5b9e\u65f6\u4efb\u52a1\uff0c\u5982\u95ed\u73af\u63a7\u5236\u548c\u6570\u636e\u91c7\u96c6\u4e0e\u9884\u5904\u7406\uff09\u4e0e\u6267\u884c\u5668\uff08\u7535\u673a\u7b49\uff09\uff0c\u8d1f\u8d23sensing\u548ccontrol\u4e24\u5927\u4efb\u52a1\uff0c\u5177\u4f53ROS Package\u4e3a\u5305\u542b\u5d4c\u5165\u5f0fSDK\u7684",(0,o.kt)("a",{parentName:"li",href:"sdk_docs/roborts_base"},"roborts_base"),"\uff0c\u76f8\u673a\u7684",(0,o.kt)("a",{parentName:"li",href:"sdk_docs/roborts_camera"},"roborts_camera"),"\u4ee5\u53ca\u76f8\u5173\u4f20\u611f\u5668\u9a71\u52a8\u5305")),(0,o.kt)("h3",{id:"\u611f\u77e5\u90e8\u5206"},"\u611f\u77e5\u90e8\u5206"),(0,o.kt)("p",null,"\u611f\u77e5\u90e8\u5206\u5305\u62ec\u673a\u5668\u4eba\u5b9a\u4f4d\u3001\u5730\u56fe\u7684\u7ef4\u62a4\u548c\u62bd\u8c61\u3001\u76ee\u6807\u8bc6\u522b\u4e0e\u8ffd\u8e2a\u7b49"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"localization\u6a21\u5757\u8d1f\u8d23\u673a\u5668\u4eba\u5b9a\u4f4d\uff0c\u8be6\u89c1",(0,o.kt)("a",{parentName:"p",href:"sdk_docs/roborts_localization"},"roborts_localization"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"map\u6a21\u5757\u8d1f\u8d23\u673a\u5668\u4eba\u5730\u56fe\u7ef4\u62a4\uff0c\u76ee\u524d\u91c7\u7528ROS\u5f00\u6e90Package ",(0,o.kt)("a",{parentName:"p",href:"http://wiki.ros.org/map_server"},"map_server"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"costmap\u6a21\u5757\u8d1f\u8d23\u4ee3\u4ef7\u5730\u56fe\u7ef4\u62a4\uff0c\u96c6\u6210\u4e86\u9759\u6001\u5730\u56fe\u5c42\uff0c\u969c\u788d\u7269\u5c42\u548c\u81a8\u80c0\u5c42\uff0c\u4e3b\u8981\u7528\u4e8e\u8fd0\u52a8\u89c4\u5212\u90e8\u5206,\u8be6\u89c1roborts_costmap\uff0c\u540e\u7eed\u5c06\u4f1a\u8ba1\u5212\u66f4\u65b0\u4e3afeature_map\u6a21\u5757\uff0c\u4e0d\u5355\u7eaf\u9488\u5bf9\u89c4\u5212\u4f7f\u7528\u3002")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"detection\u6a21\u5757\u8d1f\u8d23\u76ee\u6807\u8bc6\u522b\u548c\u8ffd\u8e2a\uff0c\u8be6\u89c1",(0,o.kt)("a",{parentName:"p",href:"sdk_docs/roborts_detection"},"roborts_detection"),"\uff0c\u5f53\u524d\u4e3b\u8981\u96c6\u6210\u4e86\u654c\u4eba\u88c5\u7532\u677f\u7684\u8bc6\u522b\u548c\u53d1\u5c04\u5f39\u4e38\u7684\u63a7\u5236\u5668\uff0c\u7531\u4e8e\u5e27\u7387\u9700\u6c42\u6bd4\u8f83\u9ad8\uff0c\u5f53\u524d\u8bc6\u522b\u548c\u63a7\u5236\u662f\u8026\u5408\u7684\uff0c\u540e\u7eed\u5c06\u4f1a\u89e3\u8026\uff0c\u5c06\u63a7\u5236\u8ddf\u968f\u90e8\u5206\u653e\u5230gimbal_executor\u4e2d"))),(0,o.kt)("h3",{id:"\u4efb\u52a1\u8c03\u5ea6\u4e0e\u51b3\u7b56\u90e8\u5206"},"\u4efb\u52a1\u8c03\u5ea6\u4e0e\u51b3\u7b56\u90e8\u5206"),(0,o.kt)("p",null,"\u4efb\u52a1\u8c03\u5ea6\u4e0e\u51b3\u7b56\u90e8\u5206\u5305\u62ec\u8c03\u5ea6\u611f\u77e5\u8f93\u5165\u6a21\u5757\u548c\u8c03\u5ea6\u89c4\u5212\u6267\u884c\u8f93\u51fa\u6a21\u5757\u7684\u63a5\u53e3\uff0c\u4ee5\u53ca\u51b3\u7b56\u7684\u6838\u5fc3\u6846\u67b6\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"decision\u6a21\u5757\u4e3a\u673a\u5668\u4eba\u51b3\u7b56\u6846\u67b6\uff0c\u5b98\u65b9\u63d0\u4f9b\u884c\u4e3a\u6811\uff08BehaviorTree\uff09\u7684\u51b3\u7b56\u6846\u67b6\u3002blackboard\u6a21\u5757\u8c03\u5ea6\u5404\u79cd\u6a21\u5757\u7684\u611f\u77e5\u4efb\u52a1\u83b7\u53d6\u4fe1\u606f\u548c\u88c1\u5224\u7cfb\u7edf\u7684\u6bd4\u8d5b\u4fe1\u606f\uff0cbehavior\u6a21\u5757\u96c6\u6210\u4e86\u79bb\u6563\u52a8\u4f5c\u7a7a\u95f4\u7684\u5404\u79cd\u52a8\u4f5c\u6216\u884c\u4e3a\uff0c\u8be6\u89c1",(0,o.kt)("a",{parentName:"p",href:"sdk_docs/roborts_decision"},"roborts_decision"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"executor\u6a21\u5757\u662fbehavior\u6a21\u5757\u7684\u4f9d\u8d56\uff0c\u5176\u5305\u542b\u5e95\u76d8\u548c\u4e91\u53f0\u5185\u4e0d\u540c\u6a21\u5757\u5185\u4e0d\u540c\u62bd\u8c61\u7a0b\u5ea6\u7684\u673a\u5668\u4eba\u4efb\u52a1\u59d4\u6258\u63a5\u53e3\uff08\u4f8b\u5982\u8c03\u5ea6\u5e95\u76d8\u8fd0\u52a8\u89c4\u5212\u6267\u884c\uff09\uff0c\u8be6\u89c1roborts_decision/executor"))),(0,o.kt)("h3",{id:"\u8fd0\u52a8\u89c4\u5212\u90e8\u5206"},"\u8fd0\u52a8\u89c4\u5212\u90e8\u5206"),(0,o.kt)("p",null,"\u8fd0\u52a8\u89c4\u5212\u90e8\u5206\u662f\u8fd0\u52a8\u89c4\u5212\u529f\u80fd\u6a21\u5757\uff0c\u7531\u51b3\u7b56\u90e8\u5206\u4e2dchassis_executor\u6a21\u5757\u6765\u8c03\u5ea6\u5b8c\u6210\u5bfc\u822a\uff0c\u8be6\u89c1roborts_planning"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"global_planner\u6a21\u5757\u8d1f\u8d23\u673a\u5668\u4eba\u7684\u5168\u5c40\u8def\u5f84\u89c4\u5212\uff0c\u8be6\u89c1",(0,o.kt)("a",{parentName:"p",href:"sdk_docs/roborts_planning_global_planner"},"roborts_planning/global_planner"),"\uff0c\u4f9d\u8d56roborts_costmap")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"local_planner\u6a21\u5757\u8d1f\u8d23\u673a\u5668\u4eba\u7684\u5c40\u90e8\u8f68\u8ff9\u89c4\u5212\u6a21\u5757\uff0c\u8be6\u89c1",(0,o.kt)("a",{parentName:"p",href:"sdk_docs/roborts_planning_local_planner"},"roborts_planning/local_planner"),"\uff0c\u4f9d\u8d56roborts_costmap"))),(0,o.kt)("h2",{id:"ros-package\u4ecb\u7ecd"},"ROS Package\u4ecb\u7ecd"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"Package"),(0,o.kt)("th",{parentName:"tr",align:"center"},"\u529f\u80fd"),(0,o.kt)("th",{parentName:"tr",align:"center"},"\u5185\u90e8\u4f9d\u8d56"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"roborts"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Meta-package"),(0,o.kt)("td",{parentName:"tr",align:"center"},"-")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"rm_base"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u5d4c\u5165\u5f0f\u901a\u4fe1\u63a5\u53e3"),(0,o.kt)("td",{parentName:"tr",align:"center"},"roborts_msgs")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"roborts_camera"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u76f8\u673a\u9a71\u52a8\u5305"),(0,o.kt)("td",{parentName:"tr",align:"center"},"roborts_common")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"roborts_common"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u901a\u7528\u4f9d\u8d56\u5305"),(0,o.kt)("td",{parentName:"tr",align:"center"},"-")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"roborts_decision"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u673a\u5668\u4eba\u51b3\u7b56\u5305"),(0,o.kt)("td",{parentName:"tr",align:"center"},"roborts_common",(0,o.kt)("br",null),"roborts_msgs ",(0,o.kt)("br",null),"roborts_costmap")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"roborts_detection"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u89c6\u89c9\u8bc6\u522b\u7b97\u6cd5\u5305"),(0,o.kt)("td",{parentName:"tr",align:"center"},"roborts_msgs",(0,o.kt)("br",null),"  roborts_common",(0,o.kt)("br",null),"  roborts_camera")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"roborts_localization"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u673a\u5668\u4eba\u5b9a\u4f4d\u7b97\u6cd5\u5305"),(0,o.kt)("td",{parentName:"tr",align:"center"},"-")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"roborts_costmap"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u4ee3\u4ef7\u5730\u56fe\u76f8\u5173\u652f\u6301\u5305"),(0,o.kt)("td",{parentName:"tr",align:"center"},"roborts_common")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"roborts_msgs"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u81ea\u5b9a\u4e49\u6d88\u606f\u7c7b\u578b\u5305"),(0,o.kt)("td",{parentName:"tr",align:"center"},"-")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"roborts_planning"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u8fd0\u52a8\u89c4\u5212\u7b97\u6cd5\u5305"),(0,o.kt)("td",{parentName:"tr",align:"center"},"roborts_common",(0,o.kt)("br",null),"  roborts_msgs",(0,o.kt)("br",null),"roborts_costmap")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"roborts_bringup"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u542f\u52a8\u5305"),(0,o.kt)("td",{parentName:"tr",align:"center"},"roborts_base",(0,o.kt)("br",null),"  roborts_common",(0,o.kt)("br",null),"  roborts_localization",(0,o.kt)("br",null),"  roborts_costmap",(0,o.kt)("br",null),"  roborts_msgs",(0,o.kt)("br",null),"  roborts_planning",(0,o.kt)("br",null))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"roborts_tracking"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u89c6\u89c9\u8ffd\u8e2a\u7b97\u6cd5\u5305"),(0,o.kt)("td",{parentName:"tr",align:"center"},"roborts_msgs")))))}m.isMDXComponent=!0}}]);