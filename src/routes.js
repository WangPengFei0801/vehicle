import {Main} from 'pages/layout/';
/*登录和错误提示页面*/
const Err404Page = resolve => require(['pages/error/404'], resolve);
const Err401Page = resolve => require(['pages/error/401'], resolve);
const LoginPage = resolve => require(['pages/login'], resolve);
/*主页*/
const IndexPage = resolve => require(['pages/index/index'], resolve);
/*系统管理*/
const UserPage = resolve => require(['pages/system/user'], resolve);
const RolePage = resolve => require(['pages/system/role'], resolve);
const ResPage = resolve => require(['pages/system/res'], resolve);
const DepartmentPage = resolve => require(['pages/system/department'],resolve);
/*设备管理*/
const DeviceFuncDev = resolve => require(['pages/device/devFunc'],resolve);
const DeviceDetailPage = resolve => require(['pages/device/deviceDetail'],resolve);
const DevicePage = resolve => require(['pages/system/device'],resolve);
/*模块和资源 modules*/
const IconPage = resolve => require(['pages/modules/icon'], resolve);
const ResourcePage = resolve => require(['pages/modules/resource'], resolve);
/*驾驶证业务*/
const DriverPage =  resolve => require(['pages/controls/driver'],resolve);
/*行驶证业务*/
const VehiclesPage = resolve => require(['pages/controls/vehicles'],resolve);
const VehiclesDetailsPage = resolve => require(['pages/controls/vehicleDetails'],resolve);
/*违章控制*/
const ViolationPage = resolve => require(['pages/controls/violation'],resolve);
const violationDetailsPage = resolve => require(['pages/controls/violationDetails'],resolve);
/*版本控制*/
const VersionPage  = resolve => require(['pages/controls/version'],resolve)
/*安全管理*/
const SystemPage = resolve => require(['pages/safe/parameters'],resolve);
/*更改密码*/
const ChangePasswordPage = resolve => require(['pages/password/password'],resolve);
/*邮件*/
const emailPage = resolve => require(['pages/mail/mail'],resolve);
/*投放管理*/
const AdvertisingPage = resolve => require(['pages/bulletin/advertising'],resolve);
const AnnouncementPage = resolve => require(['pages/bulletin/announcement'],resolve);
/*接口管理*/
const portMangerPage = resolve => require(['pages/port/portManger'],resolve);
/*应用授权*/
const authorizationPage = resolve => require(['pages/port/authorization'],resolve);
/*基础信息*/
const basicPortPage = resolve => require(['pages/port/basicPort'],resolve);
const routes = [
  {
    path: '/',
    component: Main,
    hidden: true,
    name: '首页',
    children: [
      {path: '/index', component: IndexPage, name: '首页'},
      /*错误提示*/
      {path: '/404', component: Err404Page, hidden: true, name: '找不到页面'},
      {path:'/401',component:Err401Page,hidden:true,name:'无权限访问'},
      /*系统管理*/
      {path: '/system/res', component: ResPage, name: '权限菜单'},
      {path: '/system/role', component: RolePage, name: '角色管理'},
      {path: '/system/user', component: UserPage, name: '用户管理'},
      {path:'/department/info',component:DepartmentPage,name:'部门信息'},
      /*设备管理*/
      {path: '/system/device', component: DevicePage, name: '设备管理'},
      {path:'/system/Func',component:DeviceFuncDev,name:'功能配置'},
      /*设备详情*/
      {path:'/dev/details',component:DeviceDetailPage,name:'设备管理 / 设备详情'},
      /*菜单和资源配置*/
       {path: '/icon/set', component: IconPage, name: '字体图标'},
      {path: '/resource', component: ResourcePage, name: '菜单分配'},
      /*驾驶证业务 drivers*/
       {path:'/data/drivers',component:DriverPage,name:'驾驶证业务'},
      /*行驶证业务 vehicles*/
      {path:'/data/vehicles',component:VehiclesPage,name:'行驶证业务'},
      {path:'/data/vehicleDetails',component:VehiclesDetailsPage,name:'行驶证 / 行驶证详情'},
      /*违章管理*/
       {path:'/data/violation',component:ViolationPage,name:'违章管理'},
      {path:'/data/violationDetails',component:violationDetailsPage,name:'违章管理 / 违章详情'},
      /*版本控制*/
      {path:'/version/control',component:VersionPage,name:'版本控制'},
      /*安全管理*/
      {path:'/safe/parameters',component:SystemPage,name:'系统管理'},
      /*更换密码*/
      {path:'/password/password',component:ChangePasswordPage,name:'修改密码'},
      /*邮政平台*/
      {path:'/dev/ad',component:AdvertisingPage,name:'设备广告'},
      /*投放管理*/
      {path:'/dev/announcement',component:AnnouncementPage,name:'设备公告'},
      /*六合一接口*/
      {path:'/api/liuheyi',component:portMangerPage,name:'六合一接口'},
      /*应用授权*/
      {path:'/api/auth',component:authorizationPage,name:'应用授权'},
      /*邮政管理*/
      {path:'/mail/mailDriver',component:emailPage,name:'邮政平台'},
      {path:'/api/Base',component:basicPortPage,name:'基础接口信息'}
      /*基础接口*/
    ]
  },
  {
    path: '/login',
    name: '登录',
    component: LoginPage,
    meta:{
      keepAlive:false
    }
  },
  {path: '*', redirect: '/404', hidden: true}
];

export default routes;
