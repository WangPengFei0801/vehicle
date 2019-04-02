// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import routes from './routes';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import store from './vuex/store';
import OperatorUtils from './utils/OperatorUtils';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import config from './config';
import http from './utils/HttpUtils';
import '../static/css/base.css';
import '../static/css/iconfont.css';
// import '../static/uploader/webuploader.min'
Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(http);
window.OperatorUtils = OperatorUtils;
const router = new VueRouter({
  routes
});
const Authorization = OperatorUtils.getData('token')

const requestName = http.http;
/* to即将进入的路由 */
/* from正在离开的路由 */
router.beforeEach((to, from, next) => {
  var toPath = to.path;
  NProgress.start(); // 开启Progress
  if(Authorization){
    requestName.apiGet(HOST,{params:{type:'checkToken'}}).then(function (res) {
      if(!res.data.status){
        OperatorUtils.clear();
        router.push({path:'/login'})
      }
      return false;
    })
  }
  if (OperatorUtils.isLogined(next)) { // 判断是否有token
    if (to.path === '/login') {
      next({path: '/'});
      NProgress.done();
    } else if (to.path === '/') {
      let main = OperatorUtils.getMain();
      next(main);
      NProgress.done();
    } else {
      var currentPath = to.path;
      var arr = [];
      let mainData = OperatorUtils.getData('menuData');
      for (let i of mainData) {
        arr.push(i.MENU_URL);
      }
      if (arr.indexOf(currentPath) > 0) {
        next();
        NProgress.done();
      } else if (arr.indexOf(currentPath) < 0) {
        if (config.blackList.indexOf(currentPath)==-1) {
          next({path: '/404'});
        } else {
          next();
        }
      }
      NProgress.done();
    }
  } else {
    if (config.whiteList.indexOf(to.path) !== -1) { // 在免登录白名单，直接进入
      next();
    } else {
      next('/login'); // 否则全部重定向到登录页
      // NProgress.done();
      // NProgress.done();
    }
    /*    next('/login'); // 否则全部重定向到登录页*/
    /*    next('/login'); // 否则全部重定向到登录页*/
  }
});

router.afterEach(transition => {
  store.dispatch('showLoading', false);
  document.title = config.name + ' -- ' + transition.name;
  NProgress.done();
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  template: '<App/>',
  components: {App}
});


