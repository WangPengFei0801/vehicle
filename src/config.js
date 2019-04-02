module.exports = {
  appId: 'fangtu',
  name: '车驾管理',
  footerText: '车管所',
  logo: '',
  iconFontUrl: '',
  whiteList: ['/login', '/reset'],
  blackList:['/index','/404','/dev/details','/data/violationDetails','/data/driverDetails','/data/vehicleDetails'],
  apiPrefix: '/carAuditApiTest/api',
  //apiPrefix: '/carauditapi/api',//这个是默认的
  devHost: 'http://192.168.8.82:80',//设置服务器地址，跨域
  pubHost: 'http://192.168.8.82:80',
  /*http://192.168.8.74/carauditapi/api //这个是默认的*/
  //http://192.168.8.82/carAuditApiTest
  captchaEnable: true,
  baseBgc:'#909eff',
  urlTransition(name,data){
    var dataBase={};
    dataBase.type=name;
    dataBase.data=data;
    return dataBase;
  },
  getUrlTrans(data){
    var dataBase = {};
    dataBase.params=data;
    return dataBase;
  },
  deleteUrlTrans(name,data){
    var dataReset = {};
    var dataBase={};
    dataBase.type=name;
    dataBase.data=data;
    dataReset.data = dataBase;
    return dataReset;
  },
  getNowFormatDate(date){
    console.log(date);
    var current = new Date(+new Date(date)+8*3600*1000).toISOString().replace(/T/g,' ').replace(/\.[\d]{3}Z/,'')
    return current;
  },
  api: {
    userLogin: '/LogIn',
    userLogout: '/auth/logout',
    captcha: '/auth/captcha?',
    isLogined: '/auth/isLogined',
    dict: '/sys/dict/get?type='
  }
};
