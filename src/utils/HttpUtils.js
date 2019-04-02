import OperatorUtils from "../utils/OperatorUtils";
import axios from 'axios';
import router from 'vue-router'
import config from '../config';
var layer = null;
layui.use('layer',function(){
  layer=layui.layer
});
const timeoutMsg = () => {
  layer.msg('请求超时，请检查网络')
};
const http = {
  apiGet(url, data) {
    return new Promise((resolve, reject) => {
      axios.get(url, data).then((response) => {
        resolve(response.data);
        return false;
      }, (response) => {
        reject(response);
        return false;
      });
    });
  },
  apiPost(url, dataSet, config) {
    return new Promise((resolve, reject) => {
      dataSet = JSON.stringify(dataSet);
      axios.post(url, dataSet, config).then((response) => {
        resolve(response.data);
        return false;
      }).catch((response) => {
        resolve(response);
        return false;
      });
    });
  },
  apiPostDownload(url, dataSet, config) {
    return new Promise((resolve, reject) => {
      dataSet = JSON.stringify(dataSet);
      axios.post(url, dataSet, config).then((response) => {
        resolve(response);
        return false;
      }).catch((response) => {
        resolve(response);
        return false;
      });
    });
  },
  apiDownload(url, dataSet, config) {
    return new Promise((resolve, reject) => {
      dataSet = JSON.stringify(dataSet);
      axios.post(url, dataSet, config).then((response) => {
        resolve(response.data);
        return false;
      }).catch((response) => {
        resolve(response);
        return false;
      });
    });
  },
  apiDelete(url,data) {
    return new Promise((resolve, reject) => {
      axios.delete(url,data).then((response) => {
        resolve(response.data);
        return false;
      }, (response) => {
        reject(response);
        return false;
      });
    });
  },
  apiPut(url, id, obj) {
    return new Promise((resolve, reject) => {
      axios.put(url + id, obj).then((response) => {
        resolve(response.data);
      }, (response) => {
        reject(response);
      });
    });
  }
};

const HttpUtils = {
  http
};
const appendHeaders = (headers) => {
  let header = {
    Authorization: OperatorUtils.getToken()
  };
  Object.assign(headers, header);
};
HttpUtils.install = function (Vue, options) {
  /*axios设置默认值的方式*/
  axios.defaults.baseURL = HOST;
  axios.defaults.timeout = 1000 * 100;
  axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8';
  axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
  axios.defaults.headers['Authorization'] = OperatorUtils.getData('token');
  //axios.defaults.withCredentials = true;

  // axios添加请求拦截（配置发送请求的信息）
  axios.interceptors.request.use(function (config) {
    // 处理请求之前的配置
    appendHeaders(config.headers);
  /*  layer.load(1,{
      shade:[0.6,'#fff']
    });*/
    return config;
  }, function (error) {
    // 请求失败的处理
    return Promise.reject(error);
  });
  //axios添加响应拦截（配置token失效等）
  axios.interceptors.response.use(function(response){
    switch (response.data.code) {
      case 200:
        break;
      case 117:
        break;
      case 118:
        OperatorUtils.clear();
        break;
      case 119:
        OperatorUtils.clear();
        break;
      default:
          //layer.msg(response.data.message);
          break;
    }
    return response;
  });
  Vue.prototype.$http = http;

};

export default HttpUtils;
