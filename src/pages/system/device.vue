<style scoped>
  .content-top {
    margin-top: 40px;
    background: #fff;
    margin-bottom: 20px;
  }
  .content-bottom {
    box-shadow:0 1px 4px 1px rgba(29, 29, 39, 0.15);
    background-color: #fff;
    padding: 10px;
    position: relative;
  }
  .content-bottom-left {
    position: absolute;
    top: 32px;
    left: 20px;
    z-index: 999;
  }
  #dev_ad_table .normal-btn,
  #dev_ad_table .role-normal-btn{
    padding: 6px;
  }
  #dev_ad tbody td {
    padding:4px;
    font-size: 12px;
  }
  #dev_ad tbody td input {
    height: 28px;
  }
  #dev_users {
    width: 15px;
    height: 15px;
  }
  #container {
  }
  #to_list_pane {
    z-index: 666;
    background: #fff;
    font-size: 13px;
    position: absolute;
    width: 100%;
    padding: 15px 0;
    display: none;
  }
.dev-shops-title p,
.dev-certigier-title p,
.dev-params-title p{
  display: inline-block;
  margin-right: 136px;
  line-height: 22px;
  margin-top: 14px;
  margin-bottom: 10px;
}
  .dev-certigier-title p{
    margin-right: 150px;
  }
  .dev-params-title p{
    margin-right: 320px;
    margin-top: 0;
  }
  .dev-certigier-title p:last-child,
  .dev-params-title p:last-child{
    margin-right: 0;
  }
  .dev-shops-title p:first-child {
    padding-left: 14px;
    margin-right: 120px;
  }
  .dev-shops-box li input,
  .dev-certigier-box li input,
  .dev-params-box li input{
    border-bottom: 1px solid #999;
    padding-left: 15px;
  }
  .dev-shops-box li i,
  .dev-certigier-box li i,
  .dev-params-box li i{
    font-size: 20px;
    margin-left: 30px;
  }
  .dev-shops-box li input:first-child {
    margin-right: 50px;
  }
  .dev-certigier-box li input {
    margin-right: 90px;
  }
  .dev-certigier-box li input:nth-child(2){
    margin-right: 76px;
  }
  .dev-certigier-box li input:last-child,
  .dev-params-box li input:last-child{
    margin-right: 0;
  }
  .dev-params-box li input:first-child {
    margin-right: 226px;
  }
  #dev_params_des {
    width: 200px;
    border-bottom: 1px solid #666;
    line-height: 29px;
    margin-left: 20px;
    padding-left: 10px;
  }
</style>
<style>
  #area .layui-input-inline:nth-of-type(3) {
    margin-right: 0;
  }
  .device-content-bottom .layui-table-tool {
    padding-left: 123px;
    padding-top: 12px;
  }
  .dev-content .layui-layer-page .layui-layer-content {
    overflow: auto!important;
  }
  #to_list_pane div {
    line-height: 22px;
    font-size: 12px;
  }
  #to_list_pane div:hover {
    background:#ccc;
    cursor: pointer;
  }
  #concat_device tbody .layui-table-cell {
    line-height: 24px;
    height: 24px;
  }
</style>
<template>
  <div>
    <div class="content dev-content">
      <div class="content-top clearfix">
        <div class="current-page">
          <p><i class="iconfont mr-4">&#xe615;</i>设备配置</p>
        </div>
        <form action="" class="layui-form layui-form-pane fl pl20">
          <div class="layui-form-item mr-14">
            <div class="layui-inline">
              <label class="layui-form-label">设备编号</label>
              <div class="layui-input-block">
                <input type="text" placeholder="输入区分大小写" class="layui-input" v-model="searchFormData.dev_id">
              </div>
            </div>
          </div>
          <div class="layui-form-item ml0">
            <div class="layui-inline mr2">
              <label class="layui-form-label">录入时间</label>
              <div class="layui-input-block">
                <input type="text" name="start-date" id="start_date" class="layui-input" readonly v-model="searchFormData.start_time">
              </div>
            </div>
          </div>
          <pre class="d_i_b mt8 ml-6 mr-6">至</pre>
          <div class="layui-form-item mr-14">
            <div class="layui-inline">
              <input type="text" name="end-date" id="end_date"  class="layui-input" readonly v-model="searchFormData.end_time">
            </div>
          </div>
          <button class="layui-btn layui-btn-sm vt" id="search"><i class="layui-icon">&#xe615;</i>搜索</button>
          <button class="layui-btn layui-btn-sm layui-btn-primary vt" @click="reset($event)"><i class="layui-icon">&#xe669;</i>重置</button>
        </form>
      </div>
      <div class="content-bottom device-content-bottom">
        <div class="content-bottom-left">
          <div class="layui-btn-group">
            <button @click.stop="add($event)" class="layui-btn bgc-009688 layui-btn-sm">添加</button>
            <button @click.stop="concat_device($event)" class="bgc-009688 layui-btn layui-btn-sm">关联用户</button>
          </div>
        </div>
        <table class="layui-hide" lay-filter="device_table" id="device_table"></table>
        <script type="text/html" id="concat_device_table_toolbar">
            <div class="layui-btn-container">
                <div class="layui-btn-group">
                    <button style="border-left: 1px solid rgba(255, 255, 255, .5);" lay-event="concat-about" class="bgc-009688 layui-btn layui-btn-sm">查看关联</button>
                    <button class="layui-btn layui-btn-sm bgc-009688" lay-event="dev-depart">配置部门</button>
                    <button class="layui-btn layui-btn-sm bgc-009688" lay-event="dev-ad">配置广告</button>
                    <button class="layui-btn layui-btn-sm bgc-009688" lay-event="dev-an">配置公告</button>
                    <button class="layui-btn layui-btn-sm bgc-009688" lay-event="dev-func">配置功能</button>
                    <button class="layui-btn layui-btn-sm bgc-009688" lay-event="dev-params">配置参数</button>
                    <button class="layui-btn layui-btn-sm bgc-009688" lay-event="dev-update">版本更新</button>
                    <button class="layui-btn layui-btn-sm bgc-009688" lay-event="dev-auth">配置授权</button>
                    <button class="layui-btn layui-btn-sm bgc-009688" lay-event="dev-shop">配置商品</button>
                    <button class="layui-btn layui-btn-sm bgc-009688" lay-event="dev-certigier">授权人</button>
                </div>
            </div>
        </script>
      </div>
      <!--配置功能-->
      <div  id="dev_function" class="hide">
        <p class="col-red">提示：请在下方的表格中选择要配置的功能</p>
        <table class="layui-hide" lay-filter="dev_function_table" id="dev_function_table"></table>
      </div>
      <div id="container"></div>
    </div>
    <div id="add_device" style="display: none;">
      <form action="" class="layui-form layui-form-pane">
        <div class="layui-form-item display_block">
          <label class="layui-form-label">设备编号</label>
          <div class="layui-input-block w-auto">
            <input type="text" name="serial-number" required lay-verify="dev_id" v-model="addFormData.devId"  placeholder="请输入设备的编号"
                    class="layui-input">
          </div>
        </div>
        <div class="layui-form-item-special">
          <div id="area"></div>
        </div>
        <div class="layui-form-item display_block pore">
          <label class="layui-form-label">具体地址</label>
          <div class="layui-input-block w-auto por">
            <input type="text" id="add_dev_address"  lay-verify="address" v-model="addFormData.address" placeholder="填写后，请在下方的地址栏中选择地址"
                    class="layui-input">
          </div>
          <div id="to_list_pane" class="poa"></div>
        </div>
        <div class="layui-form-item d_i_b mr-30">
          <label class="layui-form-label">部门</label>
          <div class="layui-input-block">
            <input type="text" name="address"  lay-verify="department" v-model="addFormData.compnay" placeholder="请输入合法的部门"  class="layui-input">
          </div>
        </div>
          <div class="layui-form-item d_i_b ml-30">
            <label class="layui-form-label">设备权限</label>
            <div class="layui-input-block">
              <select name="interest" lay-filter="add_device_status" v-model="addFormData.dataState">
                <option value="">请选择</option>
                <option value="0">禁用</option>
                <option value="1" selected="">启用</option>
              </select>
            </div>
        </div>
        <div class="layui-form-item layui-form-text display_block">
          <label class="layui-form-label">备注</label>
          <div class="layui-input-block display_block w-auto">
            <textarea placeholder="您可以在这里输入一些说明备注" class="layui-textarea" v-model="addFormData.remark"></textarea>
          </div>
        </div>
        <div>
          <span class="province-show hide"></span><span class="city-show hide"></span><span class="area-show hide"></span>
        </div>
      </form>
      <div id="map_container"></div>
    </div>
    <div id="edit_device" style="display: none;">
      <form action="" class="layui-form layui-form-pane">
        <div class="layui-form-item display_block">
          <label class="layui-form-label">设备编号</label>
          <div class="layui-input-block w-auto">
            <input type="text" name="edit_dev_id" required lay-verify="edit_dev_id" v-model="editFormData.dev_id"  placeholder="请输入设备的编号"
                    class="layui-input">
          </div>
        </div>
        <div class="layui-form-item-special">
          <div id="edit_area"></div>
        </div>
        <div class="layui-form-item display_block">
          <label class="layui-form-label">具体地址</label>
          <div class="layui-input-block w-auto">
            <input type="text" name="edit_address"  lay-verify="edit_address" v-model="editFormData.address" placeholder="在这里你可以输入具体的街道地址"
                    class="layui-input">
          </div>
        </div>
        <div class="layui-form-item d_i_b mr-30">
          <label class="layui-form-label">部门</label>
          <div class="layui-input-block">
            <input type="text" name="edit_department"  lay-verify="edit_department" v-model="editFormData.department" placeholder="请输入合法的部门"  class="layui-input">
          </div>
        </div>
        <div class="layui-form-item d_i_b ml-30">
          <label class="layui-form-label">设备权限</label>
          <div class="layui-input-block">
            <select name="edit_device_status" lay-filter="edit_device_status" v-model="editFormData.status">
              <option value="">请选择</option>
              <option value="0">禁用</option>
              <option value="1" selected="">启用</option>
            </select>
          </div>
        </div>
        <div class="layui-form-item layui-form-text display_block">
          <label class="layui-form-label">备注</label>
          <div class="layui-input-block display_block w-auto">
            <textarea placeholder="您可以在这里输入一些说明备注" class="layui-textarea" v-model="editFormData.remark"></textarea>
          </div>
        </div>
        <div>
        </div>
      </form>
    </div>
    <div id="concat_user" class="hide">
      <table class="layui-hide" id="concat_user_table" lay-filter="concat_user_table"></table>
    </div>
    <div id="concat_device" class="hide">
      <form action="" class="layui-form layui-form-pane">
        <div class="layui-form-item">
          <div class="layui-inline">
            <label class="layui-form-label">用户姓名</label>
            <div class="layui-input-block">
              <input type="text" name="concat_device_username" placeholder="请输入用户姓名" id="concat_device_username"
                     class="layui-input" v-model="searchFormData.dev_id">
            </div>
          </div>
        </div>
        <div class="layui-form-item">
          <div class="layui-inline">
            <label class="layui-form-label">手机号码</label>
            <div class="layui-input-block">
              <input type="text" name="concat_device_phone" placeholder="请输入用户手机号码" id="concat_device_phone"
                     class="layui-input" v-model="searchFormData.dev_id">
            </div>
          </div>
        </div>
      </form>
      <table class="layui-hide" id="concat_device_table" lay-filter="concat_user_device"></table>
    </div>
    <!--配置部门-->
    <div id="dev_department" class="hide">
      <p class="col-red">提示：请在下方的部门中选择要配置的部门</p>
      <table class="layui-hide" id="dev_department_table" lay-filter="dev_department_table"></table>
    </div>
    <!--配置广告-->
    <div id="dev_ad" class="hide">
      <p class="col-red font13">提示：日期格式(2019-03-12 00:00:00 - 2029-04-23 03:05:40)。权重数值越大，权重越高，不同广告权重值切勿填写重复</p>
      <table class="layui-table" id="dev_ad_table">
        <thead>
        <tr>
          <th><div class="layui-form"><input type="checkbox" lay-skin="primary" id="dev_ad_switch_all" name="open" lay-filter="dev_ad_switch_all"></div></th>
          <th>广告名称</th>
          <th>生效区间</th>
          <th>播放区间</th>
          <th width="100">播放次数</th>
          <th width="100">权重数值</th>
          <th>租用类型</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(val,index) in tableData" :key="index" v-show="index>=pageStart&&index<pageEnd">
          <td><div class="layui-form"><input type="checkbox" lay-filter="dev_ad_switch_item" lay-skin="primary" :checked="val.usetype==1" name="open"></div></td>
          <td class="adName" :adCorp="val.adCorp" :adCode="val.adCode" :adContent="val.adContent">{{val.adName}}</td>
          <td class="rentTime"><button :testv="val.rentBegin" class="role-normal-btn" @click="showMsg($event)">{{val.rentBegin?val.rentBegin+' - '+val.rentEnd:'选择时间'}}</button></td>
          <td class="playBegin"><button class="normal-btn" @click="showMsg($event)">{{val.playBegin?val.playBegin+' - '+val.playEnd:'选择时间'}}</button></td>
          <td class="playCount"><input type="text" :value="val.playCount?val.playCount:''" placeholder="输入播放次数" class="layui-input"></td>
          <td class="adPriority"><input type="text" :value="val.adPriority?val.adPriority:''" placeholder="输入权重值" class="layui-input"></td>
          <td class="rentType">
            <form action="" class="layui-form">
              <div class="layui-form-item mb0">
                <div class="layui-input-block ml0">
                  <input type="radio" name="renType" value="1" title="启用" :checked="val.rentType==1">
                  <input type="radio" name="renType" value="2" title="停用" :checked="val.rentType==0">
                </div>
              </div>
            </form>
          </td>
        </tr>
        </tbody>
      </table>
      <div id="dev_ad_pagination"></div>
    </div>
    <!--配置公告-->
    <div id="dev_an" class="hide">
      <p class="col-red font13">提示：日期格式(2019-03-12 00:00:00 - 2029-04-23 03:05:40)。</p>
      <table class="layui-table" id="dev_ad_table">
        <thead>
        <tr>
          <th><div class="layui-form"><input type="checkbox" lay-skin="primary" id="dev_an_switch_all" name="open" lay-filter="dev_an_switch_all"></div></th>
          <th>通告名称</th>
          <th>生效区间</th>
          <th>通告类型</th>
          <th>数据状态</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(val,index) in tableDataS" :key="index" v-show="index>=pageStart&&index<pageEnd">
          <td><div class="layui-form"><input type="checkbox" lay-filter="dev_an_switch_item" lay-skin="primary" :checked="val.usetype==1" name="open"></div></td>
          <td :notifyCode = val.notifyCode class="notifyTitle">{{val.notifyTitle}}</td>
          <td class="playTime"><button class="normal-btn" @click="beginTime($event)">{{val.beginTime?val.beginTime:'选择时间'}}</button></td>
          <td class="notifyType">
            <form action="" class="layui-form">
              <div class="layui-form-item mb0">
                <div class="layui-input-block ml0">
                  <select name="" id="">
                    <option  value="">请选择</option>
                    <option :selected="val.notifyType==1" value="1">文字</option>
                    <option :selected="val.notifyType==2" value="2">图片</option>
                    <option :selected="val.notifyType==3" value="3">视频</option>
                  </select>
                </div>
              </div>
            </form>
          </td>
          <td class="dataState">
            <form action="" class="layui-form">
              <div class="layui-form-item mb0">
                <div class="layui-input-block ml0">
                  <input type="radio" name="renType" value="1" title="启用" :checked="val.dataState==1">
                  <input type="radio" name="renType" value="0" title="停用" :checked="val.dataState==2">
                </div>
              </div>
            </form>
          </td>
        </tr>
        </tbody>
      </table>
      <div id="dev_an_pagination"></div>
    </div>
    <!--版本更新-->
    <div id="dev_version" class="hide">
      <p class="col-red">提示：请在下方的部门中选择要配置的部门</p>
      <table class="layui-hide" id="dev_version_table" lay-filter="dev_version_table"></table>
    </div>
    <!--用户代码-->
    <div id="dev_user" class="hide">
      <form action="" class="layui-form">
        <div class="layui-form-item">
          <label for="" class="layui-form-label">选择接入方</label>
          <div class="layui-input-block">
            <select lay-filter="concat_user_select" name="" lay-search="">
              <option value="">请选择</option>
              <option v-for="val in vehicleDatas" :companyId="val.compnayId" :value="val.compnayId">{{val.name}}</option>
            </select>
          </div>
        </div>
      </form>
      <p v-show="dev_user_state" class="color-ccc font16  mt10">暂无数据，请选择车管所进行筛选</p>
      <table class="layui-table" v-show="!dev_user_state">
        <thead>
        <tr>
          <th>
           选择
          </th>
          <th>应用名称</th>
          <th>appId</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(val,index) in dev_user_datas" :key="index">
          <td>
             <input type="radio" name="dev_users" :value="val.appId">
          </td>
          <td>{{val.appName}}</td>
          <td>{{val.appId}}</td>
        </tr>
        </tbody>
      </table>
    </div>
    <!--配置商品-->
    <div id="dev_shops" class="hide">
      <p class="col-red">在下方输入要配置的属性名和属性值</p>
      <pre class="dev-shops-title"><p>输入商品编码</p><p>输入商品价格</p></pre>
      <ul class="dev-shops-box">
        <li>
          <input placeholder="在此处输入商品编码" type="text" v-model="shopAddMsg.certificateCode">
          <input placeholder="在此处输入商品价格" type="text" v-model="shopAddMsg.realPrice">
          <i title="添加商品属性" class="layui-icon layui-icon-add-circle cursor-p" @click="addShopItem"></i>
        </li>
      </ul>
      <table class="layui-table">
        <thead>
        <tr>
          <th>商品编码</th>
          <th>价格</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(val,index) in shopDatas" :key="index" v-if="shopDatas">
          <td>{{val.certificateCode}}</td>
          <td>{{val.realPrice}}</td>
        </tr>
        </tbody>
      </table>
    </div>
    <!--配置授权人相关信息-->
    <div id="dev_certigier" class="hide">
      <p class="col-red">设备授权人信息配置和展示</p>
      <pre class="dev-certigier-title"><p>授权人身份证号</p><p>授权人姓名</p><p>授权人备注</p></pre>
      <ul class="dev-certigier-box">
        <li>
          <input placeholder="输入授权人身份证号" type="text" v-model="certigierAddMsg.idcardNumber">
          <input placeholder="输入授权人姓名" type="text" v-model="certigierAddMsg.name">
          <input type="text" placeholder="在此处输入备注" v-model="certigierAddMsg.remark">
          <i title="添加商品属性" class="layui-icon layui-icon-add-circle cursor-p" @click="addCertigier"></i>
        </li>
      </ul>
      <table class="layui-table">
        <thead>
        <tr>
          <th>身份证号</th>
          <th>姓名</th>
          <th>备注</th>
        </tr>
        </thead>
        <tbody>
        <!--<tr style="line-height: 30px;padding-left: 40px;color: #ccc;">{{certigierFilter}}</tr>-->
        <tr v-for="(val,index) in certigierDatas" :key="index" v-if="certigierDatas">
          <td>{{val.idcardNumber}}</td>
          <td>{{val.name}}</td>
          <td>{{val.remark}}</td>
        </tr>
        </tbody>
      </table>
    </div>
    <!--配置设备软硬件参数-->
    <div id="dev_params" class="hide">
      <p class="col-red mb10">请在下方添加配置信息</p>
      <form action="" class="layui-form">
        <div class="layui-form-item">
          <!--  <select name="city" lay-verify="required" lay-filter="paramType">
              &lt;!&ndash;<option value="">请选择参数类型</option>&ndash;&gt;
              <option :selected="paramsAddArr.paramType==0"  value="0">软件</option>
              <option :selected="paramsAddArr.paramType==1"  value="1">硬件</option>
            </select>-->
          <input type="radio" id="paramTypeF" lay-filter="paramType" name="paramType" value="0" title="软件" >
          <input type="radio" id="paramTypeS" lay-filter="paramType" name="paramType" value="1" title="硬件" >
        </div>
        <div class="layui-form-item">
          <!-- paramRemark:'',
          paramType:'',
          josnOrXml:-->
          <select id="jsonOrXml" name="city" lay-verify="required" lay-filter="jsonOrXml"><!---->
            <option value="0">JSON</option>
            <option value="1">XML</option>
          </select>
        </div>
        <div class="layui-form-item">
          <input v-model="paramsAddArr.paramRemark" type="text" id="dev_params_des" placeholder="请输入描述信息">
        </div>
        <!---------------------------------->
        <pre class="dev-params-title"><p>属性名KEY</p><p>属性值VALUE</p></pre>
        <ul class="dev-params-box">
          <li>
            <input placeholder="输入参数名" type="text" v-model="paramsAddMsg.key">
            <input placeholder="输入参数值" type="text" v-model="paramsAddMsg.value">
            <i title="配置软硬件参数" class="layui-icon layui-icon-add-circle cursor-p" @click="addParams"></i>
          </li>
        </ul>
        <table class="layui-table">
          <thead>
          <tr>
            <th>参数名</th>
            <th>参数值</th>
          </tr>
          </thead>
          <tbody>
          <!--<tr style="line-height: 30px;padding-left: 40px;color: #ccc;">{{certigierFilter}}</tr>-->
          <tr v-for="(val,index) in paramsAddArr.keyValueData" :key="index" v-if="certigierDatas">
            <td>{{val.key}}</td>
            <td>{{val.value}}</td>
          </tr>
          </tbody>
        </table>
      </form>
    </div>
  </div>
</template>

<script>
  import jsonData from '../../../static/js/area_data';
  import config from '@/config';
  import OperatorUtils from '../../utils/OperatorUtils';
  import AMap from 'AMap';
  export default {
    name: 'device',
    data() {
      return {
        msg: 'device',
        dev_user_state:true,
        companyId:'',
        shopDatas:null,
        shopAddMsg:{
          certificateCode:'',
          realPrice:''
        },
        shopAddArr:[],
        certigierAddMsg:{
          idcardNumber:'',
          name:'',
          remark:''
        },
        certigierDatas:[],
        paramsAddMsg:{
          key:'',
          value:''
        },
        paramsAddArr:{
          devId:'',
          paramRemark:'',
          paramType:'',
          jsonOrXml:'',
          keyValueData:[]
        },
        arr: [{name: 'device', value: 'device'}],
        areaData: '',
        map:null,
        dev_user_datas:'',
        tableData:[],
        tableDataS:[],
        vehicleDatas:null,
        pageStart:0,
        pageEnd:8,
        table:'',
        picker:'',
        layDate:null,
        Authorization:OperatorUtils.getData('token'),
        addFormData:{
          "dtype": "add",
          "devId":"",
          "provinceId": "440000",
          "cityId": "440100",
          "areaId": "440104",
          "address": "",
          "compnay": "",
          "dataState": "",
          "remark": "",
          "longitude": "",
          "latitude": "",
        },
        editFormData:{
          dev_id:'',
          province:'',
          area:'',
          city:'',
          address:'',
          status:'',
          remark:'',
          department: ''
        },
        searchFormData:{
          start_time: this.$store.state.dateSel('-')[5],
          end_time: this.$store.state.dateSel('-')[4],
          dev_id:''
        }
      };
    },
    methods: {
      showMsg: function (event) {
          this.layDate.render({
            elem:event.currentTarget,
            theme: 'grid',
            calendar: true,
            type:'datetime',
            range:true,
            mark: {
              '0-12-31': '跨年'
            },
            done:function (val) {
              return val;
            }
          });
      },
      beginTime: function (event) {
        this.layDate.render({
          elem:event.currentTarget,
          theme: 'grid',
          calendar: true,
          type:'datetime',
          range:true,
          mark: {
            '0-12-31': '跨年'
          },
          done:function (val) {
            return val;
          }
        });
      },
      add: function (e) {
        e.preventDefault();
        var $$ = layui.jquery;
        var _this = this;
        layer.open({
          type: 1,
          title: '新增设备相关',
          area: ['510px', '460px'],
          closeBtn: 1,
          scrollbar: false,
          shadeClose: true,
          skin: 'layui-layer-molv',
          content: $$('#add_device'),
          btn: ['确定添加', '取消'],
          success(){

          },
          yes: function (index) {
           var province = $('.province-show').text();
           var city = $('.city-show').text();
           var area = $('.area-show').text();
           if(province==''){
              province = _this.addFormData.provinceId
           }
            if(city==''){
              city = _this.addFormData.cityId
            }
            if(area==''){
              area = _this.addFormData.areaId
            }
           _this.addFormData.provinceId = province;
           _this.addFormData.cityId = city;
           _this.addFormData.areaId = area;
           let type = 'AddAndEditDevData';
           var data = {
             "dtype": _this.addFormData.dtype,
             "devId":_this.addFormData.devId,
             "provinceId": _this.addFormData.provinceId,
             "cityId": _this.addFormData.cityId,
             "countyId": _this.addFormData.areaId,
             "address": _this.addFormData.address,
             "compnay": _this.addFormData.compnay,
             "dataState": _this.addFormData.dataState,
             "remark": _this.addFormData.remark,
             "longitude": _this.addFormData.longitude,
             "latitude": _this.addFormData.latitude
           };
            data = config.urlTransition(type,data);
             _this.$http.apiPost(HOST,data).then(function (res) {
               let code  = res.code;
               if(code==200){
                 layer.msg('添加完成', {
                   icon: 16
                   ,anim: -1
                   ,fixed: false,
                   time:1400
                 });
                 window.setTimeout(function () {
                   layer.closeAll();
                 },1500);
               }else {
                 layer.msg(res.message);
                 window.setTimeout(function(){
                   layer.closeAll();
                 },1500);
               }
             });
          },
          btn2: function (index) {
            layer.close(index);
          }
        });
      },
      tableRender(table,picker,form){
        var _this = this;
        let url = HOST+'?type=getDevInfo';
        var tableIns= table.render({
          elem: '#device_table',
          checkbox: true,
          url: url,
          limit:20,
          limits:[20,40,50,60,80],
          where:{
            starttime:_this.searchFormData.start_time,
            endtime:_this.searchFormData.end_time
          },
          toolbar: '#concat_device_table_toolbar',
          even: true,
          loading:true,
          response:{
            statusCode:200
          },
         headers:{
           'Authorization':_this.Authorization
         },
          cols: [[
            {type:'radio',width:60,title:'选择'},
            {field: 'ID', title: '#',width:80},
            {field: 'DEVID', title: '编号',width:110},
            {field:'DEPARTMENT',title:'部门',width:140},
            {field: 'ADDRESS', title: '地址',width:250},
            {field: 'DEVSTATE', title: '状态',width:90},
            {field: 'CREATETIME', title: '创建时间',width:170},
            {field: 'REMARK', title: '备注'},
            {
              field:'operateS',title:'是否免费',width:100,templet:function (d) {
                return '<form class="layui-form"><div class="layui-form-item"><input devId="'+d.DEVID+'" value="'+d.PRICE_MODEL+'" type="checkbox" name="price-model" lay-skin="switch" lay-filter="price_model" lay-text="是|否"></div></form>'
              }
            },
            {
              field: 'operate','title': '操作', width:130,templet: function (d) {
                return '<button dev_id="'+d.DEVID+'" province="'+d.PROVINCE+'" city="'+d.CITY+'" county="'+d.COUNTY+'" address="'+d.ADDRESS+'" belong="'+d.DEPARTMENT+'" status="'+d.DEVSTATE+'" remark="'+d.REMARK+'" class="layui-btn layui-btn-sm layui-btn-warm edit-btn">编辑</button>' +
                       '<button value="'+d.DEVID+'" class="layui-btn layui-btn-sm dev-details">详情</button>';
              }
            }
          ]],
           page: true,
          done:function(res){
            $('#search').click(function (e) {
              e.preventDefault();
              var reloadData = {
                devid:_this.searchFormData.dev_id,
                starttime:_this.searchFormData.start_time,
                endtime:_this.searchFormData.end_time
              };
              tableIns.reload({
                where:reloadData,
                page:{
                  curr:1
                }
              });
            });
            $('.edit-btn').click(function(e){
              e.preventDefault();
              var $$ = layui.jquery;
              var area_edit = new picker();
              area_edit.set({
                elem: '#edit_area',
                data: _this.areaData,
                canSearch: true,
                codeConfig: {
                  code: 440104,
                  type: 3
                }
              }).render();
              var province = $('#edit_area .layui-input-inline:nth-of-type(1) .layui-select-title  input').val();
              var city = $('#edit_area .layui-input-inline:nth-of-type(2) .layui-select-title  input').val();
              var area = $('#edit_area .layui-input-inline:nth-of-type(3) .layui-select-title  input').val();
              _this.editFormData.dev_id = $(this).attr('dev_id');
              _this.editFormData.province = $(this).attr('province');
              _this.editFormData.city=$(this).attr('city');
              _this.editFormData.area=$(this).attr('county');
              _this.editFormData.address=$(this).attr('address');
              _this.editFormData.department=$(this).attr('belong');
              _this.editFormData.authority=$(this).attr('status');
              _this.editFormData.remark=$(this).attr('remark');
              layer.open({
                type: 1,
                title: '编辑设备信息',
                area: ['520px', '420px'],
                closeBtn: 1,
                scrollbar: false,
                shadeClose: true,
                skin: 'layui-layer-molv',
                content: $$('#edit_device'),
                btn: ['确定编辑', '取消'],
                yes: function (index) {

                },
                btn2: function (index) {
                  layer.close(index);
                }
              });
            });
            $('.dev-details').click(function (e) {
              e.preventDefault();
              var dev_id = $(this).attr('value');
              _this.$router.push({name: '设备管理 / 设备详情',params:{name:dev_id,code:'1001'}});
            });
            $('td[data-field="DEVSTATE"]').children().each(function (val) {
              var value = $(this).text();
              if(value==0){
                $(this).html('<span class="abnormal-btn">禁用</span>');
              }else if(value==1){
                $(this).html('<span class="normal-btn">启用</span>');
              }
            });
            $('td[data-field="operateS"]').find('input[type="checkbox"]').each(function (val) {
              var value = $(this).val();
              if(value==1){
                $(this).prop('checked',true);
              }else if(value==0){
                $(this).prop('checked',false);
              }
              form.render()
            });
            form.on('switch(price_model)',function (data) {
              var checkStatus = this.checked;
              let type = 'ConfigPriceModel';
              var dev_id = $(this).attr('devId')
              var priceModel = null;
              if(checkStatus){
                  priceModel=1
              }else {
                priceModel=0
              }
              _this.$http.apiGet(HOST,config.getUrlTrans({type:type,devId:dev_id,priceModel:priceModel})).then(function (res) {
                if(res.code==200){
                  layer.msg('配置成功',{offset:'6px'})
                }else{
                  layer.msg('配置失败',{offset:'6px'})
                }
              })
            })
            /*paramType  jsonOrXml*/
            form.on('radio(paramType)',function (data) {
              var value = data.value;
                _this.paramsAddArr.paramType = value
              console.log(_this.paramsAddArr.paramType);
            })
            form.on('select(jsonOrXml)',function (data) {
              var value = data.value;
              console.log(value);
              if(value){
                _this.paramsAddArr.jsonOrXml = value
              }
            })
          }
        });
      },
      reset:function (e) {
        e.preventDefault();
        this.searchFormData.dev_id='';
        this.searchFormData.start_time=this.$store.state.dateSel('-')[5];
        this.searchFormData.end_time=this.$store.state.dateSel('-')[4];
      },
      concat_device(e){
        e.preventDefault();
        var _this = this;
        layer.open({
          type:1,
          title:'设备关联用户设置',
          area:['1050px','600px'],
          shadeClose:true,
          skin:_this.$store.state.skin,
          closeBtn:1,
          success:function(){
            layui.use('table',function () {
              var table = layui.table;
              var table_url = HOST+'?type=GetUserTable';
              var tableIns = table.render({
                elem: '#concat_device_table',
                url:table_url,
                loading:false,
                even:true,
                headers:{
                  'Authorization':_this.Authorization
                },
                title: '用户数据表',
                response:{
                  statusCode:200
                },
                cols: [[
                  {type: 'checkbox', fixed: 'left',style:'background:#f4f4f4'},
                  {field:'NAME', title:'用户姓名'},
                  {field:'PHONENUMBER', title:'手机号码'},
                  {field:'SEX', title:'性别'}
                ]],
                done:function(res){
                  layer.closeAll('loading');
                  $('td[data-field=\'SEX\']').children().each(function (val) {
                    var value = $(this).text();
                    value==1? $(this).html('男'): $(this).html('女');
                  });
                },
                page: true,
                id:'user_table'
              });
            });
          },
          btn:['确认设置','取消'],
          yes:function () {

          },
          content:$('#concat_device'),
          end:function () {
            $('#concat_device').css({'display':'none'});
          }
        });
      },
      mapRender() {
        var _this = this;
        AMap.plugin('AMap.Autocomplete',function (e) {
          var autoOptions = {
            city: ""
          };
          var autocomplete = new AMap.Autocomplete(autoOptions);
           $('#add_dev_address').on('input', function () {
             var currentVal = $('#add_dev_address').val()
             if(currentVal==''){
               $('#to_list_pane').hide()
             }
             var procince = $('#area div.layui-input-inline:nth-of-type(1) input').val();
             var city = $('#area div.layui-input-inline:nth-of-type(2) input').val();
             var county = $('#area div.layui-input-inline:nth-of-type(3) input').val();
             if(!county){
               layer.msg('请选择地区')
               return false;
             }
             autocomplete.search(procince+city+county+currentVal, function (status, result) {
               var l = result.tips;
               var effectivePoi = [];
               if (status == "complete" && l.length > 0) {
                 for (var i = 0; i < l.length; i++) {
                   //判断有经纬度才可以显示出来
                   if (l[i].location == "" || l[i].location == undefined) {
                     //无经纬度
                   } else {
                     var p = {
                       "adcode": l[i].adcode,
                       "address": l[i].address,
                       "district": l[i].district,
                       "id": l[i].id,
                       "name": l[i].name,
                       "lat": l[i].location.lat,
                       "lng": l[i].location.lng
                     };
                     effectivePoi.push(p);
                   }
                 }
                 var dom = "";
                 for (var ii = 0; ii < effectivePoi.length; ii++) {
                   dom += '<div lat="' + effectivePoi[ii].lat + '"  lng="' + effectivePoi[ii].lng + '" adcode="' + effectivePoi[ii].adcode + '" class="pos"><span class="pos-address">' + effectivePoi[ii].name + '</span><span class="pos-district">' + effectivePoi[ii].district + '</span></div>';
                 }
                 console.log(dom);
                 $('#to_list_pane').show().html(dom)
               }
             });
             $('#to_list_pane').delegate('.pos', 'click', function () {
               if(!$(this).attr('lat')||!$(this).attr('lng')){
                  layer.msg('该地区无法匹配经纬度，请选择更为详细地址')
                  return false;
                }else {
                  $('#add_dev_address').val($(this).text()).attr({
                    "lat": $(this).attr("lat"),
                    "lng": $(this).attr("lng")
                  });
                 _this.addFormData.address=$(this).text()
                 _this.addFormData.longitude=$(this).attr('lng')
                 _this.addFormData.latitude=$(this).attr('lat')
                 $('#to_list_pane').hide().html('')
                }
             });
           });

        })

      },
      addSibling($event){
        var firstElementChild = $event.currentTarget.nextElementSibling.value;
        if(firstElementChild){
          layer.msg('haha')
        }

      },
      addShopItem(){
        if(this.shopAddMsg.certificateCode==''){
          layer.msg('请输入属性名')
          return
        }
        if(this.shopAddMsg.realPrice==''){
          layer.msg('请输入属性值')
          return
        }
        this.shopDatas.push(this.shopAddMsg)
        this.shopAddMsg = {certificateCode:'',realPrice:''}
      },
      addCertigier(){
        if(this.certigierAddMsg.idcardNumber==''){
          layer.msg('请输入身份证号')
          return
        }
        if(this.certigierAddMsg.name==''){
          layer.msg('请输入授权人姓名')
          return
        }
        if(this.certigierAddMsg.remark==''){
          layer.msg('请输入备注')
          return
        }
        this.certigierDatas.push(this.certigierAddMsg)
        this.certigierAddMsg = {
          idcardNumber:'',
          name:'',
          remark:''
        }
      },
      addParams(){
        if(this.paramsAddMsg.key==''){
          layer.msg('请输入参数名')
          return
        }
        if(this.paramsAddMsg.value==''){
          layer.msg('请输入参数值')
          return
        }
        this.paramsAddArr.keyValueData.push(this.paramsAddMsg)
        this.paramsAddMsg = {
          key:'',
          value:''
        }
      }
    },
    mounted() {
      let _this = this;
      _this.areaData = jsonData;
      layui.config({
        base: './static/layui/extend/picker/'
      });
      layui.use(['picker', 'form', 'layer', 'laydate', 'table'], function () {
        var picker = layui.picker;
        var form = layui.form;
        var layer = layui.layer;
        var laydate = layui.laydate;
        var table = layui.table;
        _this.table=table;
        _this.picker = picker;
        _this.layDate = laydate;
        form.on('select(add_device_status)',function(data){
          _this.addFormData.dataState = data.value;
        });
        form.render();
        laydate.render({
          elem: '#start_date',
          value: _this.searchFormData.start_time,
          theme: 'grid',
          calendar: true,
          mark: {
            '0-12-31': '跨年',
            '0-0-01': '月初'
          },
          max: 0,
          done:function (val) {
            _this.searchFormData.start_time=val;
          }
        });
        laydate.render({
          elem: '#end_date',
          value: _this.searchFormData.end_time,
          theme: 'grid',
          calendar: true,
          mark: {
            '0-12-31': '跨年',
            '0-0-01': '月初'
          },
          max: 0,
          done:function (val) {
            console.log(val);
            _this.searchFormData.end_time = val;
          }
        });
        var area = new picker();
        area.set({
          elem: '#area',
          data: _this.areaData,
          canSearch: true,
          codeConfig: {
            code: 440104,
            type: 3
          }
        }).render();
        table.on('toolbar(device_table)', function(obj){
          var checkStatus = table.checkStatus(obj.config.id);
          var data = checkStatus.data;
          var event = obj.event;
          if(data.length<=0){
            layer.msg('请在下方表格中选择一条数据！');
            return;
          }
          if(event=='dev-depart'){
            let selctId = data[0].ID;
            layer.open({
             type: 1,
             title: '为设备配置部门',
             area:'850px',
             skin: _this.$store.state.skin,
             closeBtn: 1,
             shadeClose: true,
             content:$('#dev_department'),
             btn:['确定配置','取消'],
             success:function(){
               let url = HOST;
               var table_depart= table.render({
                 elem: '#dev_department_table',
                 checkbox: true,
                 url: url,
                 limit:20,
                 limits:[20,40,50,60,80],
                 even: true,
                 loading:true,
                 where:{
                   type:'GetDepartmentManagementTableList'
                 },
                 response:{
                   statusCode:200
                 },
                 headers:{
                   'Authorization':_this.Authorization
                 },
                 cols: [[
                   {type:'radio',width:60,title:'选择'},
                   {field:'id', title: '#',width:60},
                   {field:'shortName', title: '部门简称',width:120},
                   {field:'zsdw', title: '执行单位',width:120},
                   {field:'jbr', title: '经办人',width:80},
                   {field:'dataState', title: '状态',width:80},
                   {field:'cljg', title: '处理机构'}
                 ]],
                 page: true,
                 done:function(res){
                   $('td[data-field="dataState"]').children().each(function (val) {
                     var value = $(this).text();
                     value==1? $(this).html('正常'): $(this).html('异常');
                   });
                 }
               });
             },
             yes:function(){
               var checkStates = table.checkStatus('dev_department_table');
              if(checkStates.length<=0){
                layer.msg('请选择部门');
                return;
              }
               var dataS = {
                type:'ConfigDepartment',
                id:selctId,
                departmentId:checkStates.data[0].departmentId
                };
                dataS=config.getUrlTrans(dataS);
                _this.$http.apiGet(HOST,dataS).then(function (res) {
                  var code = res.code;
                  if(code==200){
                    layer.msg('配置成功');
                    setTimeout(function () {
                      layer.closeAll();
                      _this.tableRender(_this.table,_this.picker);
                    },1500);
                  }
                });
             },
             end:function () {
               $('#dev_department').css({'display':'none'});
             }
           });
          }
          else if(event=='dev-ad'){
            let dev_id = data[0].DEVID;
            layer.open({
              type: 1,
              title: '配置广告模块',
              area:['1200px','630px'],
              skin: _this.$store.state.skin,
              closeBtn: 1,
              shadeClose: true,
              content:$('#dev_ad'),
              btn:['确定配置','取消'],
              success:function(){
                form.render();
                var urlSet  = HOST+'?type=GetAdvertisementData'+'&devId='+dev_id+'&page=1&limit=99999';
                _this.$http.apiGet(urlSet).then(function (res) {
                  if(res.code==200){
                    _this.tableData = res.data;
                    layui.use('laypage',function () {
                      var laypage = layui.laypage;
                      laypage.render({
                        elem:'dev_ad_pagination',
                        count:res.count,
                        limit:8,
                        layout: ['count', 'prev', 'page', 'next', 'refresh', 'skip'],
                        jump: function (obj, first) {
                          var cur = obj.curr;
                          _this.pageStart = cur*8-8;
                          _this.pageEnd = cur*8;
                          if(_this.pageEnd>res.count){
                            _this.pageEnd=res.count;
                          }
                          setTimeout(function () {
                            form.render();
                            form.on('checkbox(dev_ad_switch_all)',function (data) {
                              var statusCur = data.elem.checked;
                              var child = $(data.elem).parents('thead').siblings('tbody').find('input:checkbox[name=\'open\']');
                              if(statusCur==true){
                                child.prop('checked',true);
                                form.render();
                              }else {
                                child.prop('checked',false) ;
                                form.render();
                              }
                            });
                            form.on('checkbox(dev_ad_switch_item)',function (data) {
                              var statusCur = data.elem.checked;
                              var child = $(data.elem).parents('tbody').siblings('thead').find('input:checkbox[name=\'open\']');
                              if(statusCur==true){
                                child.prop('checked',true);
                                form.render();
                              }else if(statusCur==false){
                                var selectArr = [];
                                var curElem = $(data.elem).siblings('.layui-form-checkbox');
                                $.each(curElem,function (val,index) {
                                  if($(this).hasClass('layui-form-checked')){
                                    selectArr.push($(this));
                                  }
                                });
                                var len = selectArr.length;
                                if(len>0){
                                  child.prop('checked',true);
                                  form.render();
                                }else {
                                  child.prop('checked',false);
                                  form.render();
                                }
                              }
                            });
                          },0);
                        }
                      });
                    });
                  }
                });
              },
              yes:function(){
                var modules_dataArr = $('tbody input[name=\'open\']:checked');
                var ad_config_data = {};
                var adDatas = [];
                let adConfigType = 'ConfigAdvertisement';
                $.each(modules_dataArr,function (val,index) {
                  var parents = $(this).parents('td');
                  adDatas.push({
                    adName:parents.siblings('.adName').text(),
                    adCorp:parents.siblings('.adName').attr('adCorp'),
                    adCode:parents.siblings('.adName').attr('adCode'),
                    rentTime:parents.siblings('.rentTime').find('button.role-normal-btn').text(),
                    playTime:parents.siblings('.playBegin').find('button.normal-btn').text(),
                    playCount:parents.siblings('.playCount').find('input').val(),
                    adPriority:parents.siblings('.adPriority').find('input').val(),
                    rentType:parents.siblings('.rentType').find('input:radio:checked').val()
                  });
                });
                ad_config_data.devId = dev_id;
                ad_config_data.adDatas = adDatas;
                ad_config_data=config.urlTransition(adConfigType,ad_config_data);
                _this.$http.apiPost(HOST,ad_config_data).then(function (res) {
                  if(res.code==200){
                    layer.msg('配置成功',{time:1300});
                    setTimeout(function () {
                      layer.closeAll();
                    },1500);
                  }else {
                    layer.msg('失败');
                  }
                });
              },
              end:function () {
                $('#dev_ad').css({'display':'none'});
              }
            });
          }
          else if(event=='dev-an'){
            let dev_id = data[0].DEVID;
            layer.open({
              type: 1,
              title: '配置通告模块',
              area:'1000px',
              skin: _this.$store.state.skin,
              closeBtn: 1,
              shadeClose: true,
              content:$('#dev_an'),
              btn:['确定配置','取消'],
              success:function(){
                form.render();
                var urlSet  = HOST+'?type=GetNotifyData'+'&devId='+dev_id+'&page=1&limit=99999';
                _this.$http.apiGet(urlSet).then(function (res) {
                  if(res.code==200){
                    _this.tableDataS = res.data;
                    layui.use('laypage',function () {
                      var laypage = layui.laypage;
                      laypage.render({
                        elem:'dev_an_pagination',
                        count:res.count,
                        limit:8,
                        layout: ['count', 'prev', 'page', 'next', 'refresh', 'skip'],
                        jump: function (obj, first) {
                          var cur = obj.curr;
                          _this.pageStart = cur*8-8;
                          _this.pageEnd = cur*8;
                          if(_this.pageEnd>res.count){
                            _this.pageEnd=res.count;
                          }
                          setTimeout(function () {
                            form.render();
                            form.on('checkbox(dev_an_switch_all)',function (data){
                              var statusCur = data.elem.checked;
                              var child = $(data.elem).parents('thead').siblings('tbody').find('input:checkbox[name=\'open\']');
                              if(statusCur==true){
                                child.prop('checked',true);
                                form.render();
                              }else {
                                child.prop('checked',false) ;
                                form.render();
                              }
                            });
                            form.on('checkbox(dev_an_switch_item)',function (data) {
                              var statusCur = data.elem.checked;
                              var child = $(data.elem).parents('tbody').siblings('thead').find('input:checkbox[name=\'open\']');
                              if(statusCur==true){
                                child.prop('checked',true);
                                form.render();
                              }else if(statusCur==false){
                                var selectArr = [];
                                var curElem = $(data.elem).siblings('.layui-form-checkbox');
                                $.each(curElem,function (val,index) {
                                  if($(this).hasClass('layui-form-checked')){
                                    selectArr.push($(this));
                                  }
                                });
                                var len = selectArr.length;
                                if(len>0){
                                  child.prop('checked',true);
                                  form.render();
                                }else {
                                  child.prop('checked',false);
                                  form.render();
                                }
                              }
                            });
                          },0);
                        }
                      });
                    });
                  }
                });
              },
              yes:function(){
                var an_dataArr = $('tbody input[name=\'open\']:checked');
                var an_config_data = {};
                var notifyDatas = [];
                let anConfigType = 'ConfigNotify';
                $.each(an_dataArr,function (val,index) {
                  var parents = $(this).parents('td');
                  notifyDatas.push({
                    notifyCode:parents.siblings('.notifyTitle').attr('notifyCode'),
                    playTime:parents.siblings('.playTime').find('button.normal-btn').text(),
                    dataState:parents.siblings('.dataState').find('input:radio:checked').val(),
                    notifyType:parents.siblings('.notifyType').find('option:selected').val()
                  });
                });
                an_config_data.devId = dev_id;
                an_config_data.notifyDatas = notifyDatas;
                an_config_data=config.urlTransition(anConfigType,an_config_data);
                _this.$http.apiPost(HOST,an_config_data).then(function (res) {
                  if(res.code==200){
                    layer.msg('配置成功',{time:1300});
                    setTimeout(function () {
                      layer.closeAll();
                    },1500);
                  }else {
                    layer.msg('失败');
                  }
                });
              },
              end:function () {
                $('#dev_an').css({'display':'none'});
              }
            });
          }
          else if(event=='dev-func'){
            let dev_id = data[0].DEVID;
            layer.open({
              type: 1,
              title: '配置功能模块',
              area:['850px','500px'],
              skin: _this.$store.state.skin,
              closeBtn: 1,
              shadeClose: true,
              content:$('#dev_function'),
              btn:['确定配置','取消'],
              success:function(){
                let url = HOST;
                var table_func= table.render({
                  id:'dev_function_table',
                  elem: '#dev_function_table',
                  checkbox: true,
                  url: url,
                  limit:1000,
                  limits:[20,40,50,60,80],
                  even: true,
                  loading:true,
                  where:{
                    type:'GetDeviceFunction',
                    devId:dev_id
                  },
                  response:{
                    statusCode:200
                  },
                  headers:{
                    'Authorization':_this.Authorization
                  },
                  cols: [[
                    {type:'checkbox',width:60,title:'选择'},
                    {field:'MENU_NAME', title: '功能名称'},
                    {field:'MENU_CODE', title: '功能代码'},
                    {field:'MENU_STATE', title: '功能状态',width:100}
                  ]],
                  page: false,
                  done:function(res){
                    $('td[data-field="MENU_STATE"]').children().each(function (val) {
                      var value = $(this).text();
                      var currentEle = $(this).parents('tr').find('td:eq(0)').find('input[type="checkbox"]');
                      if(value==1){
                        currentEle.prop('checked',true);
                        form.render();
                        $(this).html('<span class="normal-btn">启用</span>');
                      }else {
                        $(this).html('<span class="abnormal-btn">停用</span>');
                      }
                    });
                  }
                });
              },
              yes:function(){
                /*循环遍历所有的复选框，判断哪个拥有选中的类名*/
                var configType = 'ConfigFunction';
                setTimeout(function () {
                    var selectArr = [];
                    var strs ='';
                    var trs = $('#dev_function tbody tr');
                    $.each(trs,function () {
                      var curSelect = $(this).find('div.layui-form-checkbox');
                      if(curSelect.hasClass('layui-form-checked')){
                        var menu_code = $(this).find('td[data-field="MENU_CODE"] div').text();
                        strs+=','+menu_code;
                        selectArr.push(menu_code);
                      }
                    });
                    var data = {
                      devId:dev_id,
                      menuCode:strs
                    };
                    data=config.urlTransition(configType,data);
                    _this.$http.apiPost(HOST,data).then(function (res) {
                      if(res.code==200){
                        layer.msg('配置成功',{time:1300});
                        setTimeout(function () {
                          layer.closeAll();
                        },1500);
                      }else {
                        layer.msg('配置失败');
                      }
                    });
                });
              },
              end:function () {
                $('#dev_department').css({'display':'none'});
              }
            });
          }
          else if(event=='dev-update'){
            let dev_id = data[0].DEVID;
            let select_id = data[0].ID;
            layer.open({
              type: 1,
              title: '为设备配置版本更新',
              area:'1150px',
              skin: _this.$store.state.skin,
              closeBtn: 1,
              shadeClose: true,
              content:$('#dev_version'),
              btn:['确定配置','取消'],
              success:function(){
                let url = HOST;
                var table_version= table.render({
                  elem: '#dev_version_table',
                  checkbox: true,
                  url: url,
                  limit:20,
                  limits:[20,40,50,60,80],
                  even: true,
                  loading:true,
                  where:{
                    type:'GetAllVersionsData',
                    dtype:1
                  },
                  response:{
                    statusCode:200
                  },
                  headers:{
                    'Authorization':_this.Authorization
                  },
                  cols: [[
                    {type:'radio',width:60,title:'选择'},
                    {field:'versionName',title:'版本名称'},
                    {field: 'appName', title: '应用名称'},
                    {field:'versionCode',title:'版本号'},
                    {field: 'createTime', title: '创建时间'},
                    {field: 'updateTime', title: '更新时间'},
                    {field: 'dataState', title: '状态'}
                  ]],
                  page: {
                    layout:['prev','page','next','count','refresh','skip']
                  },
                  done:function(res){
                    $('td[data-field="dataState"]').children().each(function (val) {
                      var value = $(this).text();
                      value==1? $(this).html('<span class="normal-btn">正常</span>'): $(this).html('<span class="abnormal-btn">异常</span>');
                    });
                  }
                });
              },
              yes:function(){
               var checkStatus = table.checkStatus('dev_version_table');
               var config_version_type='ConfigDeVersionData';
                var data_s = {
                  devId:dev_id,
                  verDatas:[{
                    dataState:checkStatus.data[0].dataState,
                    versionCode:checkStatus.data[0].versionCode,
                    versionName:checkStatus.data[0].versionName,
                    appName:checkStatus.data[0].appName,
                    appCode:checkStatus.data[0].appCode
                  }]
                };
                data_s=config.urlTransition(config_version_type,data_s);
                 _this.$http.apiPost(HOST,data_s).then(function (res) {
                   var code = res.code;
                   if(code==200){
                     layer.msg('配置成功',{time:1200});
                     setTimeout(function () {
                       layer.closeAll();
                       _this.tableRender(_this.table,_this.picker);
                     },1500);
                   }
                 });
              },
              end:function () {
                $('#dev_version').css({'display':'none'});
              }
            });
          }
          else if(event=='concat-about'){
            let dev_id = data[0].DEVID;
              var urlSet = HOST+'?type=GetDevUser&devid='+dev_id;
              table.render({
                elem: '#concat_user_table',
                even: true,
                loading: true,
                url: urlSet,
                response:{
                  statusCode:200
                },
                headers:{
                  'Authorization':_this.Authorization
                },
                text:{
                  none:'该设备未匹配到相关用户'
                },
                cols: [[
                  {field: 'NAME', title: '姓名'},
                  {field: 'SEX', title: '性别'},
                  {field:'PHONENUMBER',title:'手机号'},
                  {field: 'BELONG', title: '所属应用'},
                  {field:'operate','title':'操作',templet:function(d){
                      return '<button value="'+d.DEV_ID+'" code="'+d.USER_CODE+'" class="layui-btn layui-btn-sm delete-contact">删除设备关联</button>';
                    }}
                ]],
                page: false,
                done:function (res) {
                  $('td[data-field=\'check\']').children().each(function (val) {
                    var value = $(this).text();
                    if(value==1){
                      var currentEle = $(this).parents('tr').find('td:eq(0)').find('input[type=\'checkbox\']');
                      currentEle.prop('checked',true);
                      form.render('checkbox');
                    }
                  });
                  $('.delete-contact').on('click',function (e) {
                    e.preventDefault();
                    var dev_id = $(this).attr('value');
                    var user_id = $(this).attr('code');
                    var type = 'DelDevUser';
                    var data = {
                      devid:dev_id,
                      userid:user_id
                    };
                    data=config.urlTransition(type,data);
                    _this.$http.apiPost(HOST,data).then(function(res){
                      var code = res.code;
                      if(code==200){
                        layer.msg('删除成功',{time:'1300ms'});
                        setTimeout(function () {
                          layer.closeAll();
                        },1500);
                      }else {
                        layer.msg(res.message,{time:'1300ms'});
                        setTimeout(function () {
                          layer.closeAll();
                        },1500);
                      }
                    });
                  });
                }
              });
              layer.open({
                type: 1,
                title: '为设备添加与车管所相对应的授权',
                area: ['800px', '500px'],
                closeBtn: 1,
                scrollbar: false,
                shadeClose: true,
                skin: 'layui-layer-molv',
                content: $('#concat_user'),
                success:function(){
                },
                end: function (index) {
                  $('#concat_user').css({'display':'none'});
                }
              });
          }
          else if(event=='dev-auth'){
            let auth_dev_id = data[0].DEVID;
           let type = 'GetCompanyInfoData';
           _this.$http.apiGet(HOST,config.getUrlTrans({type:type,page:1,limit:99999})).then(function (res) {
             _this.vehicleDatas = res.data;
             layer.open({
               type: 1,
               title: '为设备配置应用',
               area: ['800px', '500px'],
               closeBtn: 1,
               scrollbar: false,
               shadeClose: true,
               skin: 'layui-layer-molv',
               content: $('#dev_user'),
               btn:['确认配置','取消'],
               success:function(){
                 setTimeout(function () {
                   let type = 'GetCompanyAppNameDatas';
                   form.on('select(concat_user_select)',function (data) {
                     console.log(data.value);
                     _this.companyId = data.value;
                     _this.$http.apiGet(HOST,config.getUrlTrans({type:type,companyId:data.value,page:1,limit:9999})).then(function (res) {
                      if(res.code!=200){
                        _this.dev_user_state=true
                      }else{
                        _this.dev_user_state=false;
                        _this.dev_user_datas = res.data;
                      }
                      });
                   });
                   form.render();
                 });
               },
               yes:function(){
                 let config_type = 'ConfigAppData';
                 var id=$('input[name="dev_users"]:checked').val()
                 console.log(_this.companyId);
                 //type=ConfigAppData&appId=f6eb7ac6b89744369ae235c76c9b2d39&devId=XDH_ZH008&companyId=C98431F55E5348E093A195E3638B3F8C
                 _this.$http.apiGet(HOST,config.getUrlTrans({type:config_type,appId:id,devId:auth_dev_id,companyId:_this.companyId})).then(function (res) {
                   if(res.code==200){
                   layer.msg('配置成功',{time:1300});
                   setTimeout(function () {
                     layer.closeAll();
                   },1500);
                 }else {
                   layer.msg('失败');
                 }
                 })
               },
               end: function (index) {
                 $('#dev_user').css({'display':'none'});
               }
             });
           });
          }
          else if(event=='dev-certigier'){
           let certigier_dev_id = data[0].DEVID;
           let type = 'GetDevicePersonData';
           _this.$http.apiGet(HOST,config.getUrlTrans({type:type,devId:certigier_dev_id})).then(function (res) {
             console.log(res);
             if(res.code==200){
               var datas = res.data;
               if(datas==null){
                 datas=[];
               }
               _this.certigierDatas = datas;
               layer.open({
                 type:1,
                 shadeClose:true,
                 closeBtn:1,
                 area:'850px',
                 anim:5,
                 title:"获取和配置设备授权人信息",
                 skin:_this.$store.state.skin,
                 content:$('#dev_certigier'),
                 btn:['确定配置','取消'],
                 success:function () {
                 },
                 yes:function () {
                   var dataSet = config.urlTransition('ConfigDevicePerson',{
                     devId:certigier_dev_id,
                     dePersons:_this.certigierDatas
                   })
                   _this.$http.apiPost(HOST,dataSet).then(function (res) {
                     if(res.code==200){
                       layer.msg('配置成功',{time:1500})
                       setTimeout(function () {
                         layer.closeAll();
                       },2000)
                     }else{
                       layer.msg(res.message)
                     };
                   })
                   console.log(dataSet)
                 },
                 end:function () {
                   $('#dev_certigier').css({'display':'none'});
                 }
               })
             }

           })
          }
          else if(event=='dev-params'){
            let params_dev_id = data[0].DEVID;
            /*paramsAddArr*/
            form.render('radio')
            let type = 'GetKeyAndValueParam'
            _this.$http.apiGet(HOST,config.getUrlTrans({type:type,devId:params_dev_id})).then(function (res) {
              console.log(res);;
              if(res.code==200){
                _this.paramsAddArr.devId=params_dev_id
               _this.paramsAddArr.paramRemark=res.data.paramRemark
                _this.paramsAddArr.paramType=res.data.paramType
                _this.paramsAddArr.jsonOrXml=res.data.jsonOrXml
                if(res.data.keyValueData==null){
                  res.data.keyValueData = new Array()
                }
                console.log(_this.paramsAddArr.paramType);
                form.render('radio')
                _this.paramsAddArr.keyValueData=res.data.keyValueData
                console.log(_this.paramsAddArr);
                layer.open({
                  type: 1,
                  shadeClose: true,
                  closeBtn: 1,
                  area: '900px',
                  anim: 5,
                  title: "为设备配置软硬件参数",
                  skin: _this.$store.state.skin,
                  content: $('#dev_params'),
                  btn: ['确定配置', '取消'],
                  success:function () {
                    if(_this.paramsAddArr.paramType==0){
                      $("#paramTypeF").prop("checked",true);
                      $("#paramTypeS").prop("checked",false);
                    }else {
                      $("#paramTypeF").prop("checked",false);
                      $("#paramTypeS").prop("checked",true);
                    }
                    if(_this.paramsAddArr.jsonOrXml==0){
                      $('#jsonOrXml').find('option[value="0"]').prop("selected",true);
                      $("#jsonOrXml").find('option[value="1"]').prop("selected",false);
                    }else {
                      $('#jsonOrXml').find('option[value="1"]').prop("selected",true);
                      $("#jsonOrXml").find('option[value="0"]').prop("selected",false);
                    }

                    form.render()
                  },
                  end:function(){
                    $('#dev_params').css({'display':'none'})
                  },
                  yes:function () {
                    let type = 'ConfigKeyAndValueParam';
                    var data = config.urlTransition(type,_this.paramsAddArr)
                    _this.$http.apiPost(HOST,data).then(function (res) {
                      if(res.code==200){
                        layer.msg('配置成功',{time:1500})
                        setTimeout(function () {
                          layer.closeAll();
                        },1800)
                      }else {
                        layer.msg('配置失败')
                      };
                    })
                  }
                })
              }
            })

          }
          else if(event=='dev-shop'){
            let shops_dev_id = data[0].DEVID;
            layer.open({
              type:1,
              shadeClose:true,
              closeBtn:1,
              area:'700px',
              anim:5,
              title:"为设备配置价格和相关参数",
              skin:_this.$store.state.skin,
              content:$('#dev_shops'),
              btn:['确定配置','取消'],
              success:function(){
                let type = 'GetPricesData'
                let certificateCode = ''
                var data = config.getUrlTrans({
                  type:type,
                  certificateCode:certificateCode,
                  devId:shops_dev_id,
                  page:1,
                  limit:9999
                })
                _this.$http.apiGet(HOST,data).then(function (res) {
                  if(res.data==null){
                    res.data=new Array();
                  }
                  _this.shopDatas = res.data;
                })
              },
              yes:function () {
                let type = 'ConfigPricesData';
                let data ={
                  devId:shops_dev_id,
                  pricesData:_this.shopDatas
                };
                data = config.urlTransition(type,data);
                _this.$http.apiPost(HOST,data).then(function (res) {
                 if(res.code==200){
                   layer.msg('配置成功',{time:1300})
                   setTimeout(function () {
                     layer.closeAll();
                   },1500)
                 }else {
                   layer.msg(res.message,{time:2000})
                 }
                })
              },
              end:function () {
                $('#dev_shops').css({'display':'none'});
              }
            })
          }

        });
        _this.tableRender(_this.table,_this.picker,form);
      });
      this.$nextTick(function () {
        var current_id = $('.router-link-active > p').attr('name');
        var role_id = OperatorUtils.getData('userInfo').ROLEID;
        var data = {
          type:'GetMenuBtn',
          rid:role_id,
          mid:current_id
        };
        data=config.getUrlTrans(data);
        this.$http.apiGet(HOST,data).then(function (res) {
          var data = res.data;
        /*  layer.msg('123'+JSON.stringify(data),{
            time:8000
          });*/
        });
      });
      this.mapRender()
    },
    computed:{
      certigierFilter(){
        if(this.certigierDatas.length<1){
          return '无数据'
        }
      }
    }
  };
</script>

