import Lockr from 'lockr';//基于vue的localstroge控件
import config from '../config';
import http from './HttpUtils';
import axios from "axios/index";

let isPost = false;
let routerPush = null;

const OperatorUtils = {
  userData: null,
  menuData: null,
  permsData: null,
  token: null,
  main: null,
  postLogined() {
   // console.log('!ispost:'+!isPost);
    if (!isPost) {
      isPost = true;
       //routerPush是在下面的isLogined中定义的，即beforeEach中的next回调
      http.http.apiPost(config.api.isLogined).then((res) => {
        /*res:{"success":true,"data":{}}*/
        if (!res.success) {
          OperatorUtils.clear();//如果登录失败就清除所有的存储
          routerPush('/login');
        }
      });
    }
  },
  isLogined(router) {
    //router是一个函数从路由钩子beforeEach next那里传递过来的
    routerPush = router;
    //console.log('routerPush:'+routerPush)
   // this.postLogined();
    return Lockr.get('token') ? true : false
  },
  setData(name,data){
   Lockr.set(name,data)
  },
  setBaseData(data) {
    layer.msg('!sucess')
    if(!data.token){
      data.token = 'SwyHTEx_RQppr97g4J5lKXtabJecpejuef8AqKYMAJc'
    }
    if(!data.userData){
      data.userData = {
        userName:'小王',
      }
    }
    Lockr.set('token', data.token);
    Lockr.set('userData', data.userData);
    Lockr.set('menuData', data.menuData);

    this.userData = null;
    this.menuData = null;
    this.token = null;
  },
  clearData(name){
    Lockr.rm(name)
  },
  clear() {
    Lockr.set('token', null)
    Lockr.set('userData', null)
    Lockr.set('menuData', null)
    this.userData = null
    this.menuData = null
    this.token = null
    this.main = null
  },
  getData(name){
    return Lockr.get(name)
  },
  getUserData() {
    return this.userData || Lockr.get('userData')
  },
  getMenuData() {
    return this.menuData || Lockr.get('menuData')
  },
  getPermsData() {
    return this.permsData || Lockr.get('permsData')
  },
  getToken() {
    return this.token || Lockr.get('token')
  },
  getMain() {
    if (this.main === null) {
       let main = this.getUserData().main;
      if (main === null || main.length === 0 || main[0] === null) {
        this.main = '/index';
      } else {
        this.main = main[0];
      }
    }else {

    }

    return this.main;
  }
}

export default OperatorUtils
