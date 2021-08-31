"use strict";(self.webpackChunkrm_controls_docs=self.webpackChunkrm_controls_docs||[]).push([[859],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return u}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=p(n),u=a,g=d["".concat(s,".").concat(u)]||d[u]||c[u]||i;return n?r.createElement(g,l(l({ref:t},m),{},{components:n})):r.createElement(g,l({ref:t},m))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3196:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return m},default:function(){return d}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),l=["components"],o={},s="rm_gimbal_controllers",p={unversionedId:"digging_deeper/controllers/rm_gimbal_controllers",id:"digging_deeper/controllers/rm_gimbal_controllers",isDocsHomePage:!1,title:"rm_gimbal_controllers",description:"Overview",source:"@site/current_docs/digging_deeper/controllers/rm_gimbal_controllers.md",sourceDirName:"digging_deeper/controllers",slug:"/digging_deeper/controllers/rm_gimbal_controllers",permalink:"/digging_deeper/controllers/rm_gimbal_controllers",editUrl:"https://github.com/rm-controls/rm-controls.github.io/tree/master/current_docs/digging_deeper/controllers/rm_gimbal_controllers.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"rm_chassis_controllers",permalink:"/digging_deeper/controllers/rm_chassis_controllers"},next:{title:"rm_shooter_controller",permalink:"/digging_deeper/controllers/rm_shooter_controllers"}},m=[{value:"Overview",id:"overview",children:[{value:"License",id:"license",children:[]},{value:"Hardware interface type",id:"hardware-interface-type",children:[]}]},{value:"Installation",id:"installation",children:[{value:"Installation from Packages",id:"installation-from-packages",children:[]},{value:"Building from Source",id:"building-from-source",children:[]}]},{value:"Usage",id:"usage",children:[]},{value:"Launch files",id:"launch-files",children:[]},{value:"ROS API",id:"ros-api",children:[]},{value:"Controller configuration examples",id:"controller-configuration-examples",children:[]},{value:"Bugs &amp; Feature Requests",id:"bugs--feature-requests",children:[]}],c={toc:m};function d(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"rm_gimbal_controllers"},"rm_gimbal_controllers"),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"The rm_gimbal_controllers has three states: RATE, TRACK, and DIRECT. It performs PID control on the yaw joint and pitch joint according to commands. It can also perform moving average filtering based on detection data and calculate, predict and track targets based on the ballistic model."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Keywords:")," ROS, Robomaster, gimbal, bullet solver, moving average filter"),(0,i.kt)("h3",{id:"license"},"License"),(0,i.kt)("p",null,"The source code is released under a ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rm-controls/rm_controllers/blob/master/LICENSE"}," BSD 3-Clause license"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Author: DynamicX",(0,i.kt)("br",null),"\nAffiliation: DynamicX",(0,i.kt)("br",null),"\nMaintainer: DynamicX")),(0,i.kt)("p",null,"The package has been tested under ",(0,i.kt)("a",{parentName:"p",href:"https://www.ros.org/"},"ROS")," Indigo, Melodic and Noetic on respectively Ubuntu 18.04 and 20.04. This is research code, expect that it changes often and any fitness for a particular purpose is disclaimed."),(0,i.kt)("h3",{id:"hardware-interface-type"},"Hardware interface type"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"JointStateInterface")," Used to get the speed and position of gimbal joint."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"EffortJointInterface")," Used to send effort command to gimbal joint ."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"RoboStateInterface")," Used to get the current and historical transform between gimbal and the world coordinate system and the transform between visual target and the world coordinate system.")),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("h3",{id:"installation-from-packages"},"Installation from Packages"),(0,i.kt)("p",null,"To install all packages from the this repository as Debian packages use"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"sudo apt-get install ros-noetic-rm-gimbal-controllers\n")),(0,i.kt)("p",null,"Or better, use ",(0,i.kt)("inlineCode",{parentName:"p"},"rosdep"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"sudo rosdep install --from-paths src\n")),(0,i.kt)("h3",{id:"building-from-source"},"Building from Source"),(0,i.kt)("h4",{id:"dependencies"},"Dependencies"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"roscpp"),(0,i.kt)("li",{parentName:"ul"},"roslint"),(0,i.kt)("li",{parentName:"ul"},"rm_msgs"),(0,i.kt)("li",{parentName:"ul"},"rm_common"),(0,i.kt)("li",{parentName:"ul"},"pluginlib"),(0,i.kt)("li",{parentName:"ul"},"hardware_interface"),(0,i.kt)("li",{parentName:"ul"},"controller_interface"),(0,i.kt)("li",{parentName:"ul"},"forward_command_controller"),(0,i.kt)("li",{parentName:"ul"},"realtime_tools"),(0,i.kt)("li",{parentName:"ul"},"control_toolbox"),(0,i.kt)("li",{parentName:"ul"},"effort_controllers"),(0,i.kt)("li",{parentName:"ul"},"tf2"),(0,i.kt)("li",{parentName:"ul"},"tf2_geometry_msgs"),(0,i.kt)("li",{parentName:"ul"},"angles"),(0,i.kt)("li",{parentName:"ul"},"visualization_msgs"),(0,i.kt)("li",{parentName:"ul"},"dynamic_reconfigure")),(0,i.kt)("h4",{id:"building"},"Building"),(0,i.kt)("p",null,"To build from source, clone the latest version from this repository into your catkin workspace and compile the package using"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"cd catkin_workspace/src\ngit clone https://github.com/rm-controls/rm_controllers.git\ncd ../\nrosdep install --from-paths . --ignore-src\ncatkin build\n")),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"Run the controller with mon launch:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"  mon launch rm_gimbal_controller load_controllers.launch\n")),(0,i.kt)("h2",{id:"launch-files"},"Launch files"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"load_controllers.launch"),": Load the parameters in config files and load tf and robot_state_controller, joint_state_controller, gimbal_controller.")),(0,i.kt)("h2",{id:"ros-api"},"ROS API"),(0,i.kt)("h4",{id:"subscribed-topics"},"Subscribed Topics"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"command"))," (rm_msgs/GimbalCmd)"),(0,i.kt)("p",{parentName:"li"},"Set gimbal mode, pitch and yaw axis rotation speed, tracking target, pointing target and coordinate system.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"/detection"))," (rm_msgs/TargetDetectionArray)"),(0,i.kt)("p",{parentName:"li"},"Receive visual recognition data.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"/<camera_name>/camera_info"))," (CameraInfo)"),(0,i.kt)("p",{parentName:"li"},"Make sure that the detection node receives a new frame of image and sends the prediction data to the detection node."))),(0,i.kt)("h4",{id:"published-topics"},"Published Topics"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"error"))," (rm_msgs/GimbalDesError)\nThe error calculated by the ballistic model to shoot at the current gimbal angle to the target.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"track"))," (rm_msgs/TrackDataArray)\nThe predicted data used for detection node to decide the ROI."))),(0,i.kt)("h5",{id:"bullet-solver"},"Bullet solver"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"model_desire"))," ( ",(0,i.kt)("a",{parentName:"p",href:"http://docs.ros.org/en/api/visualization_msgs/html/msg/Marker.html"},"visualization_msgs/Marker")," )\nUsed to visualize the desired bullet trajectory.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"model_real"))," ( ",(0,i.kt)("a",{parentName:"p",href:"http://docs.ros.org/en/api/visualization_msgs/html/msg/Marker.html"},"visualization_msgs/Marker")," )\nUsed to visualize the trajectory that caculated by ballistic model in the current gimbal angle."))),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"detection_topic")),' (string, default: "/detection")'),(0,i.kt)("p",{parentName:"li"},"The name of the topic where detection node gets predicted data.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"detection_frame")),' (string, default: "detection")'),(0,i.kt)("p",{parentName:"li"},"The name of the frame of detection.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"camera_topic")),' (string, default: "/galaxy_camera/camera_info")'),(0,i.kt)("p",{parentName:"li"},"The name of the topic that is determined that the detection node receives a new frame of image and sends the prediction data to the detection node.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"publish_rate"))," (double)"),(0,i.kt)("p",{parentName:"li"},"Frequency (in Hz) of publishing gimbal error.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"chassis_angular_data_num"))," (double)"),(0,i.kt)("p",{parentName:"li"},"The number of angle data of chassis.Used for chassis angular average filter.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"time_compensation"))," (double)"),(0,i.kt)("p",{parentName:"li"},"Time(in s) of image transmission delay(in s).Used to compensate for the effects of images transimission delay"))),(0,i.kt)("h5",{id:"bullet-solver-1"},"Bullet solver"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Bullet solver is used to get the bullet drop point")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"resistance_coff_qd_10, resistance_coff_qd_15, resistance_coff_qd_16, resistance_coff_qd_18, resistance_coff_qd_30"))," ( ",(0,i.kt)("inlineCode",{parentName:"p"},"double")," )"),(0,i.kt)("p",{parentName:"li"},"The air resistance coefficient used for bullet solver when bullet speed is 10 m/s, 15 m/s, 16 m/s, 18 m/s and 30 m/s.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"g"))," (double)"),(0,i.kt)("p",{parentName:"li"},"Acceleration of gravity.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"delay"))," (double)"),(0,i.kt)("p",{parentName:"li"},"Shooting delay time(in s) after shooter get the shooting command.Used to compensate for the effects of launch delay.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"timeout"))," (double)"),(0,i.kt)("p",{parentName:"li"},"Timeout time((in s)) of bullet solver.Used to judge whether bullet solver can caculate the bullet drop point."))),(0,i.kt)("h5",{id:"moving-average-filter"},"Moving average filter"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Moving average filter is used for filter the target armor center when target is spin.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"is_debug"))," ( ",(0,i.kt)("inlineCode",{parentName:"p"},"bool"),", default: true )"),(0,i.kt)("p",{parentName:"li"},"The debug status.When it is true, debug data will be pulished on the filter topic.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"pos_data_num"))," (double, default: 20)"),(0,i.kt)("p",{parentName:"li"},"The number of armor position data.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"vel_data_num"))," (double, default: 30)"),(0,i.kt)("p",{parentName:"li"},"The number of armor linear velocity data.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"gyro_data_num"))," (double, default: 100)"),(0,i.kt)("p",{parentName:"li"},"The number of target rotation speed data.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"center_data_num"))," (double, default: 50)"),(0,i.kt)("p",{parentName:"li"},"The number of target rotation center position data.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"center_offset_z"))," (double)"),(0,i.kt)("p",{parentName:"li"},"Offset(in meter) on the z axis.Used to compensate for the error of filter result on z axis."))),(0,i.kt)("h2",{id:"controller-configuration-examples"},"Controller configuration examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'gimbal_controller:\n    type: rm_gimbal_controllers/Controller\n    time_compensation: 0.03\n    publish_rate: 100\n    chassis_angular_data_num: 20\n    camera_topic: "/galaxy_camera/camera_info"\n    yaw:\n      joint: "yaw_joint"\n      pid: { p: 8, i: 0, d: 0.4, i_clamp_max: 0.0, i_clamp_min: -0.0, antiwindup: true, publish_state: true }\n    pitch:\n      joint: "pitch_joint"\n      pid: { p: 10, i: 50, d: 0.3, i_clamp_max: 0.4, i_clamp_min: -0.4, antiwindup: true, publish_state: true }\n    bullet_solver:\n      resistance_coff_qd_10: 0.45\n      resistance_coff_qd_15: 0.1\n      resistance_coff_qd_16: 0.7\n      resistance_coff_qd_18: 0.55\n      resistance_coff_qd_30: 3.0\n      g: 9.81\n      delay: 0.1\n      dt: 0.001\n      timeout: 0.001\n      publish_rate: 50\n    moving_average_filter:\n      is_debug: true\n      center_offset_z: 0.05\n      pos_data_num: 20\n      vel_data_num: 30\n      center_data_num: 50\n      gyro_data_num: 100\n')),(0,i.kt)("h2",{id:"bugs--feature-requests"},"Bugs & Feature Requests"),(0,i.kt)("p",null,"Please report bugs and request features using the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rm-controls/rm_controllers/issues"},"Issue Tracker"),"."))}d.isMDXComponent=!0}}]);