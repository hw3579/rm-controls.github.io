"use strict";(self.webpackChunkrm_controls_docs=self.webpackChunkrm_controls_docs||[]).push([[169],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return k}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),m=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},c=function(e){var t=m(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=m(a),k=r,g=d["".concat(l,".").concat(k)]||d[k]||s[k]||i;return a?n.createElement(g,p(p({ref:t},c),{},{components:a})):n.createElement(g,p({ref:t},c))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,p=new Array(i);p[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,p[1]=o;for(var m=2;m<i;m++)p[m]=a[m];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},9850:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return m},toc:function(){return c},default:function(){return d}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),p=["components"],o={},l="\u5b9e\u65f6\u5185\u6838\u7684\u7f16\u8bd1",m={unversionedId:"digging_deeper/rt_kernel",id:"digging_deeper/rt_kernel",isDocsHomePage:!1,title:"\u5b9e\u65f6\u5185\u6838\u7684\u7f16\u8bd1",description:"RT-Preempt Patch\u662f\u5728Linux\u793e\u533akernel\u7684\u57fa\u7840\u4e0a\uff0c\u52a0\u4e0a\u76f8\u5173\u7684\u8865\u4e01\uff0c\u4ee5\u4f7f\u5f97Linux\u6ee1\u8db3\u786c\u5b9e\u65f6\u7684\u9700\u6c42\u3002\u4e0b\u9762\u662f\u7f16\u8bd1\u914d\u7f6eRT linux\u5185\u6838\u7684\u6d41\u7a0b\uff0c\u4ee5\u5185\u68385.6.19\u4e3a\u4f8b\u3002",source:"@site/current_docs/digging_deeper/rt_kernel.md",sourceDirName:"digging_deeper",slug:"/digging_deeper/rt_kernel",permalink:"/en/digging_deeper/rt_kernel",editUrl:"https://github.com/rm-controls/rm-controls.github.io/tree/master/current_docs/digging_deeper/rt_kernel.md",tags:[],version:"current",lastUpdatedAt:1630219141,formattedLastUpdatedAt:"8/29/2021",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"rm_shooter_controller",permalink:"/en/digging_deeper/controllers/rm_shooter_controllers"}},c=[{value:"\u4e0b\u8f7d\u5185\u6838\u53cart\u8865\u4e01",id:"\u4e0b\u8f7d\u5185\u6838\u53cart\u8865\u4e01",children:[]},{value:"\u914d\u7f6e\u5185\u6838",id:"\u914d\u7f6e\u5185\u6838",children:[]},{value:"\u5185\u6838\u7f16\u8bd1",id:"\u5185\u6838\u7f16\u8bd1",children:[]},{value:"\u9519\u8bef\u5408\u96c6",id:"\u9519\u8bef\u5408\u96c6",children:[]}],s={toc:c};function d(e){var t=e.components,a=(0,r.Z)(e,p);return(0,i.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u5b9e\u65f6\u5185\u6838\u7684\u7f16\u8bd1"},"\u5b9e\u65f6\u5185\u6838\u7684\u7f16\u8bd1"),(0,i.kt)("p",null,"RT-Preempt Patch\u662f\u5728Linux\u793e\u533akernel\u7684\u57fa\u7840\u4e0a\uff0c\u52a0\u4e0a\u76f8\u5173\u7684\u8865\u4e01\uff0c\u4ee5\u4f7f\u5f97Linux\u6ee1\u8db3\u786c\u5b9e\u65f6\u7684\u9700\u6c42\u3002\u4e0b\u9762\u662f\u7f16\u8bd1\u914d\u7f6eRT linux\u5185\u6838\u7684\u6d41\u7a0b\uff0c\u4ee5\u5185\u68385.6.19\u4e3a\u4f8b\u3002"),(0,i.kt)("h2",{id:"\u4e0b\u8f7d\u5185\u6838\u53cart\u8865\u4e01"},"\u4e0b\u8f7d\u5185\u6838\u53cart\u8865\u4e01"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u65b0\u5efa\u6587\u4ef6\u5939\uff0c\u7528\u4e8e\u5b58\u653e\u5185\u6838\u53ca\u8865\u4e01"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir ~/rt-kernel && cd ~/rt-kernel\n")))),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u4f7f\u7528\u5916\u7f51\u8bbf\u95ee\uff0c\u82e5\u65e0\u5916\u7f51\u5219\u4f7f\u7528\u624b\u673a\u70ed\u70b9\u8bbf\u95ee\u3002"))),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u4e0b\u8f7d",(0,i.kt)("a",{parentName:"p",href:"https://mirrors.edge.kernel.org/pub/linux/kernel/projects/rt/"},"rt\u8865\u4e01"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u4e0b\u8f7d",(0,i.kt)("a",{parentName:"p",href:"https://mirrors.edge.kernel.org/pub/linux/kernel/v5.x/"},"\u5185\u6838\u6e90\u7801")))),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u5185\u6838\u7248\u672c\u4e0e\u8865\u4e01\u7248\u672c\u9700\u8981\u4e25\u683c\u5bf9\u5e94"))),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u6253\u8865\u4e01"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get install libncurses-dev #\u5b89\u88c5\u4f9d\u8d56\u9879\ntar -xzvf linux-5.6.19.tar.gz #\u89e3\u538b\u5185\u6838\ngunzip patch-5.6.19-rt12.patch.gz #\u89e3\u538b\u8865\u4e01\ncd linux-5.6.19/\npatch -p1 < ../patch-5.6.19-rt12.patch #\u6253\u8865\u4e01\n")))),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u672c\u6587\u4f7f\u7528\u7684\u5185\u6838\u662f",(0,i.kt)("inlineCode",{parentName:"p"},"linux-5.6.19.tar.gz"),"\uff0crt\u8865\u4e01\u662f",(0,i.kt)("inlineCode",{parentName:"p"},"patch-5.6.19-rt12.patch.gz"),"\u3002"))),(0,i.kt)("h2",{id:"\u914d\u7f6e\u5185\u6838"},"\u914d\u7f6e\u5185\u6838"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u6253\u5f00\u5185\u6838\u914d\u7f6e\u754c\u9762"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"make menuconfig\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u9009General setup\uff0c\u5982\u679c\u5185\u6838\u7248\u672c\u8001\u4e00\u70b9\u6ca1\u6709\u4e0b\u4e00\u6b65\u4e2d\u7684\u9009\u9879\u7684\u8bdd\u9009Processor Type and features"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{parentName:"p",src:"https://ftp.bmp.ovh/imgs/2020/10/489e6a9ff0a684f1.png",alt:"\u56fe1"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u9009Preemption Model (Voluntary Kernel Preemption (Desktop))"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{parentName:"p",src:"https://ftp.bmp.ovh/imgs/2020/10/1b18aa2359246159.png",alt:"\u56fe2"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u9009Fully Preemptible Kernel (RT)\uff0c\u7136\u540e\u4e00\u76f4\u6309esc\u952e\u8fd4\u56de\u81f3\u4e3b\u9875\u9762"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{parentName:"p",src:"https://ftp.bmp.ovh/imgs/2020/10/66924a6b92b55753.png",alt:"\u56fe3"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u9009Kernel hacking"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{parentName:"p",src:"https://ftp.bmp.ovh/imgs/2020/10/e1c825922419dbb8.png",alt:"\u56fe4"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u9009Memory Debugging"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{parentName:"p",src:"https://ftp.bmp.ovh/imgs/2020/10/4b59c4383bb00e15.png",alt:"\u56fe5"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u53d6\u6d88\u9009\u62e9Check for stack overflows\uff0c\u672c\u6765\u5c31\u6ca1\u6709\u9009\u62e9\u53ef\u4ee5\u5ffd\u7565")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u6309\u4e0b\u2018/\u2019\u641c\u7d22DEBUG_INFO"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{parentName:"p",src:"https://ftp.bmp.ovh/imgs/2020/11/0fe2f71cd666f178.png",alt:"\u56fe6"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u6309\u4e0b\u20181\u2019"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{parentName:"p",src:"https://ftp.bmp.ovh/imgs/2020/11/94f53ecb38a69642.png",alt:"\u56fe7"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u5728Compile the kernel with debug info\u9009\u9879\u4e0a\u6309\u4e0b\u2018n\u2019\uff0c\u53d6\u6d88\u7f16\u8bd1\u65f6\u4ea7\u751fdebug\u6587\u4ef6"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{parentName:"p",src:"https://ftp.bmp.ovh/imgs/2020/11/f90a6d57f2800bf1.png",alt:"\u56fe8"})))),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u7f16\u8bd1\u5185\u6838\u4f1a\u4ea7\u751f\u4e00\u4e2a\u6781\u5927\u7684debug\u6587\u4ef6\uff0c\u5b9e\u9645\u5b89\u88c5\u65f6\u65e0\u9700\u4f7f\u7528\u8be5\u6587\u4ef6\uff0c\u6545\u53ef\u76f4\u63a5\u963b\u6b62\u5176\u751f\u6210"))),(0,i.kt)("h2",{id:"\u5185\u6838\u7f16\u8bd1"},"\u5185\u6838\u7f16\u8bd1"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u7f16\u8bd1\u5e76\u5b89\u88c5\u5185\u6838",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"CONFIG_DEBUG_INFO=n #\u963b\u6b62\u7f16\u8bd1\u4ea7debug\u6587\u4ef6\nmake -j`nproc` && make -j`nproc` bindeb-pkg #\u7f16\u8bd1\u5e76\u6253\u5305\n")))),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"'nproc'\u4e3acpu\u7ebf\u7a0b\u6570\uff0c\u4f7f\u7528nproc\u547d\u4ee4\u53ef\u67e5\u770b\uff0c\u5982cpu\u4e3a4\u7ebf\u7a0b\uff0c\u5219make -j'nproc'=make -j4"))),(0,i.kt)("p",null,"\u7136\u540e\u4f60\u5c06\u83b7\u5f97"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"linux-firmware-image-5.6.19-rt12_5.6.19-rt12-1_amd64.deb\nlinux-headers-5.6.19-rt12_5.6.19-rt12-1_amd64.deb\nlinux-image-5.6.19-rt12_5.6.19-rt12-1_amd64.deb\nlinux-libc-dev_5.6.19-rt12-1_amd64.deb\n")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u6b64\u65f6\u53ef\u7528U\u76d8\u62f7\u8d1d.deb\u5305\u81f3\u5176\u4ed6\u8bbe\u5907\u8fdb\u884c\u5b89\u88c5\uff0c\u4e14\u65e0\u9700\u518d\u6b21\u7f16\u8bd1\u3002"))),(0,i.kt)("p",null,"\u8fdb\u5165\u8f6f\u4ef6\u5305\u7684\u6587\u4ef6\u5939\u5e76\u5b89\u88c5\u5185\u6838"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo dpkg -i linux-*.deb\n")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u66f4\u65b0grub\u5e76\u91cd\u542f"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo update-grub\nsudo reboot\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u67e5\u770b\u5185\u6838\u7248\u672c"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"uname -a\n")))),(0,i.kt)("p",null,"\u6b64\u65f6\u53ef\u4ee5\u770b\u5230\u5185\u6838\u7248\u672c\u4e2d\u6709'PREEMPT RT'\u6807\u8bc6"),(0,i.kt)("h2",{id:"\u9519\u8bef\u5408\u96c6"},"\u9519\u8bef\u5408\u96c6"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u65e0\u6cd5\u6253\u5f00\u5185\u6838\u914d\u7f6e\u754c\u9762menuconfig"),(0,i.kt)("p",{parentName:"li"},"Q1:\uff08linux-4.17.2\u5185\u6838\u4e3a\u4f8b\uff09"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"root@simon-virtual-machine:/home/simon/Src/linux-4.17.2# make menuconfig\nYACC scripts/kconfig/zconf.tab.c\n/bin/sh: 1: bison: not found\nscripts/Makefile.lib:196: recipe for target 'scripts/kconfig/zconf.tab.c' failed\nmake[1]: *** [scripts/kconfig/zconf.tab.c] Error 127\nMakefile:528: recipe for target 'menuconfig' failed\nmake: *** [menuconfig] Error 2\n")),(0,i.kt)("p",{parentName:"li"},"A1\uff1a"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"apt-get install bison -y\n")),(0,i.kt)("p",{parentName:"li"},"Q2\uff1a"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"root@simon-virtual-machine:/home/simon/Src/linux-4.17.2# make menuconfig\nYACC scripts/kconfig/zconf.tab.c\nLEX scripts/kconfig/zconf.lex.c\n/bin/sh: 1: flex: not found\nscripts/Makefile.lib:188: recipe for target 'scripts/kconfig/zconf.lex.c' failed\nmake[1]: *** [scripts/kconfig/zconf.lex.c] Error 127\nMakefile:528: recipe for target\n")),(0,i.kt)("p",{parentName:"li"},"A2\uff1a"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get install flex\n")))))}d.isMDXComponent=!0}}]);