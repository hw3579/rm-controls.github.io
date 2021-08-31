"use strict";(self.webpackChunkrm_controls_docs=self.webpackChunkrm_controls_docs||[]).push([[131],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,k=u["".concat(s,".").concat(d)]||u[d]||c[d]||i;return n?r.createElement(k,o(o({ref:t},m),{},{components:n})):r.createElement(k,o({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5134:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return m},default:function(){return u}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={},s="rm_chassis_controllers",p={unversionedId:"digging_deeper/controllers/rm_chassis_controllers",id:"digging_deeper/controllers/rm_chassis_controllers",isDocsHomePage:!1,title:"rm_chassis_controllers",description:"Overview",source:"@site/current_docs/digging_deeper/controllers/rm_chassis_controllers.md",sourceDirName:"digging_deeper/controllers",slug:"/digging_deeper/controllers/rm_chassis_controllers",permalink:"/digging_deeper/controllers/rm_chassis_controllers",editUrl:"https://github.com/rm-controls/rm-controls.github.io/tree/master/current_docs/digging_deeper/controllers/rm_chassis_controllers.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"rm_calibration_controllers",permalink:"/digging_deeper/controllers/rm_calibration_controllers"},next:{title:"rm_gimbal_controllers",permalink:"/digging_deeper/controllers/rm_gimbal_controllers"}},m=[{value:"Overview",id:"overview",children:[{value:"Hardware interface type",id:"hardware-interface-type",children:[]}]},{value:"Installation",id:"installation",children:[{value:"Installation from Packages",id:"installation-from-packages",children:[]},{value:"Building from Source",id:"building-from-source",children:[]}]},{value:"Usage",id:"usage",children:[]},{value:"Launch files",id:"launch-files",children:[]},{value:"ROS API",id:"ros-api",children:[]},{value:"Controller configuration examples",id:"controller-configuration-examples",children:[{value:"Complete description",id:"complete-description",children:[]}]},{value:"Bugs &amp; Feature Requests",id:"bugs--feature-requests",children:[]}],c={toc:m};function u(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"rm_chassis_controllers"},"rm_chassis_controllers"),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"There are four states: raw, follow, gyro and twist. The output torque and speed of each motor of the chassis can be calculated according to the current state of the control, the received speed and pose of the pan/tilt, and the speed and acceleration commands, and the data is returned by the motor to calculate The speed and posture of the chassis are released. The control algorithm involved in the chassis controller is PID algorithm."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Keywords:")," mecanum, swerve, balance, chassis, ROS, RoboMaster"),(0,i.kt)("h4",{id:"license"},"License"),(0,i.kt)("p",null,"The source code is released under a ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rm-controls/rm_controllers/blob/master/rm_chassis_controllers/LICENSE"},"BSD 3-Clause license"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Author: DynamicX")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Affiliation: DynamicX")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Maintainer: DynamicX")),(0,i.kt)("p",null,"The package has been tested under ",(0,i.kt)("a",{parentName:"p",href:"https://www.ros.org/"},"ROS")," Indigo, Melodic and Noetic on respectively Ubuntu 18.04 and 20.04. This is research code, expect that it changes often and any fitness for a particular purpose is disclaimed."),(0,i.kt)("h3",{id:"hardware-interface-type"},"Hardware interface type"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"JointStateInterface")),(0,i.kt)("p",null,"Used to get the position and speed of the chassis joint."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"EffortJointInterface")),(0,i.kt)("p",null,"Used to send the torque command of the chassis joint."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"RoboSateInterface")),(0,i.kt)("p",null,"Used for high-frequency maintenance of the transformation relationship of changing odom to base_link."),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("h3",{id:"installation-from-packages"},"Installation from Packages"),(0,i.kt)("p",null,"To install all packages from the this repository as Debian packages use"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"sudo apt-get install ros-noetic-rm-chassis-controllers\n")),(0,i.kt)("p",null,"Or better, use ",(0,i.kt)("inlineCode",{parentName:"p"},"rosdep"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"sudo rosdep install --from-paths src\n")),(0,i.kt)("h3",{id:"building-from-source"},"Building from Source"),(0,i.kt)("h4",{id:"dependencies"},"Dependencies"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://wiki.ros.org/"},"Robot Operating System (ROS)")," (middleware for robotics),"),(0,i.kt)("li",{parentName:"ul"},"roscpp"),(0,i.kt)("li",{parentName:"ul"},"roslint"),(0,i.kt)("li",{parentName:"ul"},"rm_msgs"),(0,i.kt)("li",{parentName:"ul"},"rm_common"),(0,i.kt)("li",{parentName:"ul"},"pluginlib"),(0,i.kt)("li",{parentName:"ul"},"hardware_interface"),(0,i.kt)("li",{parentName:"ul"},"controller_interface"),(0,i.kt)("li",{parentName:"ul"},"forward_command_controller"),(0,i.kt)("li",{parentName:"ul"},"realtime_tools"),(0,i.kt)("li",{parentName:"ul"},"control_toolbox"),(0,i.kt)("li",{parentName:"ul"},"effort_controllers"),(0,i.kt)("li",{parentName:"ul"},"tf2"),(0,i.kt)("li",{parentName:"ul"},"tf2_geometry_msgs"),(0,i.kt)("li",{parentName:"ul"},"angles"),(0,i.kt)("li",{parentName:"ul"},"imu_sensor_controller"),(0,i.kt)("li",{parentName:"ul"},"robot_localization")),(0,i.kt)("h4",{id:"building"},"Building"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Build this package with catkin build. Clone the latest version from this repository into your catkin workspace.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"catkin_workspace/src\ngit clone https://github.com/rm-controls/rm_controllers.git\nrosdep install --from-paths . --ignore-src\ncatkin build\n")),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"Run the controller with mon launch:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"mon launch rm_chassis_controllers load_controllers.launch\n")),(0,i.kt)("h2",{id:"launch-files"},"Launch files"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"load_controllers.launch:")," It loads tf, robot_localization and some controllers, robot_state_controller, joint_state_controller and chassis controller are included.")),(0,i.kt)("h2",{id:"ros-api"},"ROS API"),(0,i.kt)("h4",{id:"subscribed-topics"},"Subscribed Topics"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"base_imu"))," (",(0,i.kt)("a",{parentName:"p",href:"http://docs.ros.org/en/api/sensor_msgs/html/msg/Imu.html"},"sensor_msgs/Imu"),")"),(0,i.kt)("p",{parentName:"li"},"The inertial measurement unit data of base command.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"command"))," (rm_msgs::ChassisCmd)"),(0,i.kt)("p",{parentName:"li"},"Set the mode, acceleration, and maximum power of the chassis.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"cmd_vel"))," (",(0,i.kt)("a",{parentName:"p",href:"http://docs.ros.org/en/api/geometry_msgs/html/msg/Twist.html"},"geometry_msgs/Twist"),")"),(0,i.kt)("p",{parentName:"li"},"Set the speed of the chassis."))),(0,i.kt)("h4",{id:"published-topics"},"Published Topics"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"state_real"))," (rm_msgs::BalanceState\uff09"),(0,i.kt)("p",{parentName:"li"},"Publish the real state.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"odom")),"(",(0,i.kt)("a",{parentName:"p",href:"http://docs.ros.org/en/api/nav_msgs/html/msg/Odometry.html"},"nav_msgs/Odometry"),")"),(0,i.kt)("p",{parentName:"li"},"Chassis odometer information (speed, position, covariance)."))),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("h5",{id:"common"},"common"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"wheel_radius"))," (double)"),(0,i.kt)("p",{parentName:"li"},"Radius of the wheels.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"wheel_track"))," (double)"),(0,i.kt)("p",{parentName:"li"},"The distance between the center of the left and right wheels on the same side.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"wheel_base"))," (double)"),(0,i.kt)("p",{parentName:"li"},"The distance between the center of the front and rear wheels on the same side.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"twist_angle"))," (double)"),(0,i.kt)("p",{parentName:"li"},"Amplitude of twist at the status of twist.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"enable_odom_tf"))," (bool, default: true)"),(0,i.kt)("p",{parentName:"li"},"Publish to TF directly or not.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"twist_covariance_diagonal"))," (double","[6]",")"),(0,i.kt)("p",{parentName:"li"},"The diagonal covariance matrix of twist.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"publish_rate"))," (double, default: 50)"),(0,i.kt)("p",{parentName:"li"},"Frequency (in Hz) at which the topic is published.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"coeff"))," (double)"),(0,i.kt)("p",{parentName:"li"},"The influence of power loss can be conservatively reduced by adjusting safety factor.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"min_vel"))," (double)"),(0,i.kt)("p",{parentName:"li"},"When the motor speed is lower than the minimum speed, the minimum speed is used to calculate the maximum torque.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"timeout"))," (double)"),(0,i.kt)("p",{parentName:"li"},"Allowed period (in s) between two commands. If the time is exceed this period, the speed of chassis will be set 0."))),(0,i.kt)("h5",{id:"balance"},"Balance"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"joint_left_name")),' (string, default: "joint_left")'),(0,i.kt)("p",{parentName:"li"},"Left wheel joint name or list of joint names.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"joint_right_name")),' (string, default: "joint_right")'),(0,i.kt)("p",{parentName:"li"},"Right wheel joint name or list of joint names.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"com_pitch_offset"))," (double, default: 0)"),(0,i.kt)("p",{parentName:"li"},"The reduction ratio of pitch.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"a"))," (double","[16]",")"),(0,i.kt)("p",{parentName:"li"},"State space expression.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"b"))," (double","[8]",")"),(0,i.kt)("p",{parentName:"li"},"State space expression.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"q"))," (double","[16]",")"),(0,i.kt)("p",{parentName:"li"},"Weight matrix.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"r"))," (double","[4]",")"),(0,i.kt)("p",{parentName:"li"},"Weight matrix."))),(0,i.kt)("h5",{id:"swerve"},"Swerve"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"/modules/left_front/position"))," (double","[2]",")"),(0,i.kt)("p",{parentName:"li"},"The position of left front wheel.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"/modules/left_front/pivot/offset"))," (double)"),(0,i.kt)("p",{parentName:"li"},"The reduction ratio of left front pivot.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"/modules/left_front/wheel/radius"))," (double)"),(0,i.kt)("p",{parentName:"li"},"The radius of left front wheel.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"/modules/right_front/position"))," (double","[2]",")"),(0,i.kt)("p",{parentName:"li"},"The position of right front wheel.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"/modules/left_back/position"))," (double","[2]",")"),(0,i.kt)("p",{parentName:"li"},"The position of left back wheel.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"/modules/right_back/position"))," (double","[2]",")"),(0,i.kt)("p",{parentName:"li"},"The position of right back wheel."))),(0,i.kt)("h2",{id:"controller-configuration-examples"},"Controller configuration examples"),(0,i.kt)("h3",{id:"complete-description"},"Complete description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'chassis_controller:\n    type: rm_chassis_controllers/MecanumController\n    publish_rate: 100\n    enable_odom_tf: true\n    wheel_radius: 0.07625\n    left_front:\n      joint: "left_front_wheel_joint"\n      pid: { p: 0.8, i: 0, d: 0.0, i_max: 0.0, i_min: 0.0, antiwindup: true, publish_state: true }\n    right_front:\n      joint: "right_front_wheel_joint"\n      pid: { p: 0.8, i: 0, d: 0.0, i_max: 0.0, i_min: 0.0, antiwindup: true, publish_state: true }\n    left_back:\n      joint: "left_back_wheel_joint"\n      pid: { p: 0.8, i: 0, d: 0.0, i_max: 0.0, i_min: 0.0, antiwindup: true, publish_state: true }\n    right_back:\n      joint: "right_back_wheel_joint"\n      pid: { p: 0.8, i: 0, d: 0.0, i_max: 0.0, i_min: 0.0, antiwindup: true, publish_state: true }\n    twist_covariance_diagonal: [ 0.001, 0.001, 0.001, 0.001, 0.001, 0.001 ]\n    wheel_base: 0.395\n    wheel_track: 0.374\n    power:\n      coeff: 0.535\n      min_vel: 4.4\n    twist_angular: 0.5233\n    timeout: 0.1\n    pid_follow: { p: 5, i: 0, d: 0.8, i_max: 0.0, i_min: 0.0, antiwindup: true, publish_state: true }\n')),(0,i.kt)("h2",{id:"bugs--feature-requests"},"Bugs & Feature Requests"),(0,i.kt)("p",null,"Please report bugs and request features using the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rm-controls/rm_controllers/issues"},"Issue Tracker"),"."))}u.isMDXComponent=!0}}]);