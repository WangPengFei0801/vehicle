<style scoped>
  .dev-details-box {
    background-color: #f5f7f9;
  }
  .tips {
    color: #cccccc;
    font-size: 40px;
    line-height: 100px;
    width: 500px;
    text-align: center;
    margin: 0 auto;
  }
  .dev-details-box ul {
    width: 100%;
    height: auto;
    border: 1px solid #fcfcfc;
  }
  .dev-details-box ul > li {
    height: auto;
    width: 100%;
    margin-bottom: 20px;
    padding: 20px;

  }
  li > p > span{
    line-height: 30px;
    padding: 4px 10px;
    border-top: 1px solid #ccc;
  }
   li > p > span:nth-child(1){
     width: 20%;
     padding: 4px 10px;
     border-right: 1px solid #ccc;
     text-align: right;
     border-left: 1px solid #ccc;
  }
  li li > p {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
  }
  li li > p > span:nth-child(2){
    width: 80%;
  }
</style>
<template>
  <div>
    <!--<p class="tips" v-show="status">{{msg}}</p>-->

    <!------------------------------>
    <div class="dev-details-box" v-if="responseData">
      <p class="details-title tac font20">{{responseData.devId}}</p>
      <ul>
        <li>
          <p>广告信息</p>
          <ol>
            <li>
              <table class="layui-table">
                <thead>
                <tr>
                  <th>广告名</th>
                  <th>广告商</th>
                  <th>广告类型</th>
                  <th>广告内容</th>
                  <th>租用类型</th>
                  <th>租用开始时间</th>
                  <th>租用结束时间</th>
                  <th>播放开始时间</th>
                  <th>播放结束时间</th>
                  <th>播放次数</th>
                  <th>优先级 </th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(val,index) in responseData.adDatas" :key="index">
                  <td>{{val.adName}}</td>
                  <td>{{val.adCorp}}</td>
                  <td>{{val.adType}}</td>
                  <td>{{val.adContent}}</td>
                  <td>{{val.rentType}}</td>
                  <td>{{val.rentBegin}}</td>
                  <td>{{val.rentEnd}}</td>
                  <td>{{val.playBegin}}</td>
                  <td>{{val.playEnd}}</td>
                  <td>{{val.playCount}}</td>
                  <th>{{val.adPriority}}</th>
                </tr>
                </tbody>
              </table>
            </li>
          </ol>
        </li>
       <li>
          <p>通知信息</p>
        <ol>
          <li>
            <table class="layui-table">
              <thead>
              <tr>
                <th>通知标题</th>
                <th>通告类型</th>
                <th>通告内容</th>
                <th>播放开始时间</th>
                <th>播放结束时间</th>
              </tr>
              </thead>
              <tbody>
              <tr  v-for="(val,index) in responseData.notifyDatas" :key="index">
                <td>{{val.adName}}</td>
                <td>{{val.adCorp}}</td>
                <td>{{val.adContent}}</td>
                <td>{{val.beginTime}}</td>
                <td>{{val.endTime}}</td>
              </tr>
              </tbody>
            </table>
          </li>
        </ol>
        </li>
        <li>
          <ol>
            <li>
              <table class="layui-table">
                <thead>
                  <tr>
                    <th>管理部门</th>
                    <th>部门简称</th>
                    <th>部门全称</th>
                    <th>执收单位编码</th>
                    <th>商户编号</th>
                    <th>商户名称</th>
                    <th>APPID</th>
                    <th>key</th>
                    <th>回调地址</th>
                  </tr>
                </thead>
                <tbody>
                <tr  v-for="(val,index) in responseData.departmentDatas" :key="index">
                  <td v-if="val">{{val.glbm}}</td>
                  <td v-if="val">{{val.shortName}}</td>
                  <td v-if="val">{{val.fullName}}</td>
                  <td v-if="val">{{val.zsdw}}</td>
                  <td v-if="val">{{val.merchantId}}</td>
                  <td v-if="val">{{val.merchantName}}</td>
                  <td v-if="val">{{val.payAppId}}</td>
                  <td v-if="val">{{val.key}}</td>
                  <td v-if="val">{{val.notigyUrl}}</td>
                </tr>
                </tbody>
              </table>
            </li>
          </ol>
        </li>

        <li>
          <p>版本信息</p>
          <ol>
            <li >
            <table class="layui-table">
                <thead>
                  <tr>
                    <th>版本号 </th>
                    <th>版本名 </th>
                    <th>创建时间</th>
                    <th>应用名称</th>
                    <th>备注  </th>
                  </tr>
                </thead>
                <tbody>
                <tr v-for="(val,index) in responseData.verDatas" :key="index">
                  <td>{{val.versionCode}}</td>
                  <td>{{val.versionName}}</td>
                  <td>{{val.createTime}}</td>
                  <td>{{val.appName}}</td>
                  <td>{{val.remark}}</td>
                </tr>
                </tbody>
              </table>
            </li>
          </ol>
        </li>
      <!--  <li>
          <p>功能信息</p>
          <ol>
            <li v-for="(val,index) in responseData.funDatas" :key="index">
              <p><span>功能名称</span><span>{{val.menuName}}</span></p>
              <hr v-if="index>1">
            </li>
          </ol>
        </li>-->
      </ul>
    </div>
  </div>
</template>

<script>
  import config from '@/config';
  import OperatorUtils from '../../utils/OperatorUtils';

  export default {
    name: 'device-details',
    data () {
      return {
        msg: '未获取到参数',
        status: true,
        arr: [{name: '', value: ''}],
        responseData: ''
      };
    },
    beforeCreate(){

    },
    methods: {},
    mounted () {
      //var dev_id = this.$route.params.name;
      /*  if(!dev_id){
          this.status = true;
        }else {
          var _this = this;
          _this.status=false
          var data = config.getUrlTrans({type:'GetDeviceData',devId:'XF_011'});
          _this.$http.apiGet(HOST,data).then(function (res) {
            _this.responseData = res.data;
            console.log(_this.responseData);
          })
        }*/
      var _this = this;
      var data = config.getUrlTrans({type: 'GetDeviceData', devId: 'XF_008'});
      _this.$http.apiGet(HOST, data).then(function (res) {
        _this.responseData = res.data;
        console.log(_this.responseData);
      });
    },
    watch () {
    }
  };
</script>

