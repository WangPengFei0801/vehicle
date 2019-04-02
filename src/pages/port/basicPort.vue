<style scoped>
  .main-content-header {
    padding-top: 20px;
    background-color: #fff;
    padding-left: 20px;
    margin-bottom: 20px;
    box-shadow:0 0 3px #ddd;
  }

  .main-content-body {
    background-color: #fff;
    box-shadow: 0 1px 4px 1px rgba(29, 29, 39, 0.15);
  }

  .tBody {
    padding: 10px;
  }
  #port_area .layui-input-inline:nth-of-type(3) {
    margin-right: 0;
  }
  .device-content-bottom .layui-table-tool {
    padding-left: 123px;
    padding-top: 12px;
  }
  .dev-content .layui-layer-page .layui-layer-content {
    overflow: auto!important;
  }
  #vehicle_address_pane {
    z-index: 666;
    background: #fff;
    font-size: 13px;
    position: absolute;
    width: 660px;
    padding: 15px 0;
    display: none;
  }
</style>
<style>
  #vehicle_address_pane div {
    line-height: 22px;
    font-size: 12px;
  }
  #vehicle_address_pane div:hover {
    background:#ccc;
    cursor: pointer;
  }
  #vehicle_address_pane tbody .layui-table-cell {
    line-height: 24px;
    height: 24px;
  }
</style>
<template>
  <div class="main-content">
    <div class="main-content-header">
      <form action="" class="layui-form layui-form-pane">
        <div class="layui-form-item d_i_b">
          <label class="layui-form-label">车管所</label>
          <div class="layui-input-block w-160">
            <input type="text" name="role_id" autocomplete="off" placeholder="车管所名称" class="layui-input" v-model="searchMsg">
          </div>
        </div>
        <div class="tac d_i_b ml-40">
          <button class="layui-btn layui-btn-sm" id="basic_search">搜索</button>
        </div>
      </form>
    </div>
    <div class="main-content-body">
      <div class="main-content-left-top"><i class="layui-icon mr-4">&#xe649;</i>车管所信息列表</div>
      <div class="main-content-left-body">
        <div class="tBody">
          <button @click="basic_add" class="layui-btn layui-btn-sm">添加车管所</button>
          <table class="layui-table layui-form" id="vehicle_list_table" lay-filter="vehicle_list_table"></table>
        </div>
      </div>
    </div>
    <div id="basic_add_popup" class="hide">
      <form action="" class="layui-form layui-form-pane">
        <div class="layui-form-item display_block">
          <label class="layui-form-label">车管所名</label>
          <div class="layui-input-block w-auto">
            <input type="text" name="title" id="add_vehicle_name" autocomplete="off" placeholder="输入车管所名称" class="layui-input"
                   v-model="basicAddFormData.name">
          </div>
        </div>
        <div class="layui-form-item-special">
          <div id="port_area"></div>
        </div>
        <div class="layui-form-item display_block">
          <label class="layui-form-label">车管地址</label>
          <div class="layui-input-block w-auto">
            <input type="text" name="title" id="add_vehicle_address" placeholder="为了确保录入经纬度，请在下方弹窗中选择地址" class="layui-input"
                   v-model="basicAddFormData.address">
          </div>
          <div id="vehicle_address_pane" class="poa"></div>
        </div>
        <div class="layui-form-item display_block">
          <label class="layui-form-label">创建人员</label>
          <div class="layui-input-block w-auto">
            <input type="text" name="title" id="add_vehicle_create" placeholder="输入创建人姓名" class="layui-input" v-model="basicAddFormData.jbr">
          </div>
        </div>
        <div class="layui-form-item layui-form-text display_block">
          <label for="" class="layui-form-label pl20">备注(可选)</label>
          <div class="layui-input-block w-auto">
            <textarea rows="2" placeholder="请输入备注(可填可不填)" class="layui-textarea"
                      v-model="basicAddFormData.basic_remark"></textarea>
          </div>
        </div>
        <span class="province-show hide"></span><span class="city-show hide"></span><span class="area-show hide"></span>
      </form>
    </div>
    <div id="basic_edit_popup" class="hide">
      <form action="" class="layui-form layui-form-pane">
        <div class="layui-form-item display_block">
          <label class="layui-form-label">车管所名</label>
          <div class="layui-input-block w-auto">
            <input type="text" placeholder="输入车管所名" autocomplete="off" class="layui-input"
                   v-model="basicEditFormData.NAME">
          </div>
        </div>
        <div class="layui-form-item display_block">
          <label class="layui-form-label">车管地址</label>
          <div class="layui-input-block w-auto">
            <input type="text" placeholder="输入车管所名" autocomplete="off" class="layui-input"
                   v-model="basicEditFormData.ADDRESS">
          </div>
        </div>

        <div class="layui-form-item display_block">
          <label class="layui-form-label">经办人</label>
          <div class="layui-input-block w-auto">
            <input type="text" name="username" placeholder="输入经办人姓名" autocomplete="off" class="layui-input"
                   v-model="basicEditFormData.JBR">
          </div>
        </div>
        <div class="layui-form-item display_block">
          <label class="layui-form-label">用户代码</label>
          <div class="layui-input-block w-auto">
            <input type="text" name="username" placeholder="输入用户代码" autocomplete="off" class="layui-input"
                   v-model="basicEditFormData.USERCODE">
          </div>
        </div>
        <div class="layui-form-item layui-form-text display_block">
          <label class="layui-form-label pl20">备注(可选)</label>
          <div class="block w-auto">
            <textarea rows="2" placeholder="请输入备注(可填可不填)" class="layui-textarea"
                      v-model="basicEditFormData.REMARK"></textarea>
          </div>
        </div>
      </form>
    </div>
    <div id="basic_concat_user" class="hide">
      <form action="" class="layui-form layui-form-pane">
        <div class="layui-form-item d_i_b">
          <label class="layui-form-label">部门编码</label>
          <div class="layui-input-block w-160">
            <input type="text" name="title" placeholder="输入创建部门编码" class="layui-input" v-model="concatUser.glbm">
          </div>
        </div>
        <div class="layui-form-item d_i_b ml-40">
          <label class="layui-form-label">数据状态</label>
          <div class="layui-input-block w-160">
            <select lay-filter="dataState">
              <option value="">请选择</option>
              <option value="1">正常</option>
              <option value="0">禁用</option>
            </select>
          </div>
        </div>
        <div class="layui-form-item d_i_b ml-40">
          <label class="layui-form-label">部门全称</label>
          <div class="layui-input-block w-160">
            <input type="text" name="account" placeholder="输入管理部门全称"  class="layui-input" v-model="concatUser.fullName">
          </div>
        </div>
        <div class="layui-form-item d_i_b">
          <label class="layui-form-label">部门简称</label>
          <div class="layui-input-block w-160">
            <input type="text" name="username" placeholder="输入管理部门简称" class="layui-input" v-model="concatUser.shortName">
          </div>
        </div>
        <div class="layui-form-item d_i_b ml-40">
          <label class="layui-form-label">商户编号</label>
          <div class="layui-input-block w-160">
            <input type="text" name="account" placeholder="输入商户编号" class="layui-input" v-model="concatUser.merchantId">
          </div>
        </div>
        <div class="layui-form-item d_i_b ml-40">
          <label class="layui-form-label">appid</label>
          <div class="layui-input-block w-160">
            <input type="text" name="account" placeholder="输入appId"  class="layui-input" v-model="concatUser.payAppId">
          </div>
        </div>
        <div class="layui-form-item d_i_b">
          <label class="layui-form-label">单位编码</label>
          <div class="layui-input-block w-160">
            <input type="text" name="username" placeholder="输入执收单位编码" class="layui-input" v-model="concatUser.zsdw">
          </div>
        </div>

        <div class="layui-form-item d_i_b ml-40">
          <label class="layui-form-label">商户名称</label>
          <div class="layui-input-block w-160 ml-40">
            <input type="text" name="username" placeholder="输入商户名称" class="layui-input" v-model="concatUser.merchantName">
          </div>
        </div>
        <div class="layui-form-item d_i_b ml-40">
          <label class="layui-form-label">回调地址</label>
          <div class="layui-input-block w-160">
            <input type="text" name="account" placeholder="输入appId" class="layui-input" v-model="concatUser.notifyUrl">
          </div>
        </div>
        <div class="layui-form-item d_i_b">
          <label class="layui-form-label">key</label>
          <div class="layui-input-block w-160">
            <input type="text" name="username" placeholder="输入key值" class="layui-input" v-model="concatUser.key">
          </div>
        </div>

        <div class="layui-form-item d_i_b ml-40">
          <label class="layui-form-label">用户代码</label>
          <div class="layui-input-block w-160">
            <input type="text" name="username" placeholder="输入用户代码" class="layui-input" v-model="concatUser.yhdm">
          </div>
        </div>
        <div class="layui-form-item d_i_b ml-40">
          <label class="layui-form-label">经办人</label>
          <div class="layui-input-block w-160">
            <input type="text" name="username" placeholder="输入经办人姓名" class="layui-input" v-model="concatUser.jbr">
          </div>
        </div>
        <div class="layui-form-item d_i_b">
          <label class="layui-form-label">部门地址</label>
          <div class="layui-input-block w-160">
            <input type="text" name="addressPort" placeholder="输入部门地址" class="layui-input" v-model="concatUser.address">
          </div>
        </div>
        <div class="layui-form-item d_i_b ml-40">
          <label class="layui-form-label">处理机构</label>
          <div class="layui-input-block w-160">
            <input type="text" name="cljgPort" placeholder="输入处理机构" class="layui-input" v-model="concatUser.cljg">
          </div>
        </div>
        <div class="layui-form-item d_i_b ml-40">
          <label class="layui-form-label">关键字</label>
          <div class="layui-input-block w-160">
            <input id="port_key_word" type="text" name="keywordPort" placeholder="输入能识别用户的关键字" class="layui-input" v-model="concatUser.keyword">
          </div>
        </div>
      </form>
    </div>
    <div id="set_port" class="hide">
      <form action="" class="layui-form">
        <div class="layui-form-item"><input id="set_url" placeholder="配置接口基础地址" type="text" class="layui-input"></div>
        <div class="layui-form-item"><input id="set_count" placeholder="配置接口基础次数" type="text" class="layui-input"></div>
        <div class="layui-form-item"><input id="set_port_time" placeholder="配置基础时间" readonly type="text" class="layui-input"></div>
        <div class="layui-form-item"><input id="set_port_ip" placeholder="配置基础授权ip" type="text" class="layui-input"></div>
        <div class="layui-form-item"><input id="set_port_name" placeholder="配置联系人姓名" type="text" class="layui-input"></div>
        <div class="layui-form-item"><input id="set_port_phone" placeholder="配置联系人号码" type="text" class="layui-input" maxlength="11"></div>
      </form>
      <form action="" class="layui-form">
        <table class="layui-table" v-show="set_port_data">
          <thead>
          <tr>
            <th>
              选择
            </th>
            <th>接口标识</th>
            <th>接口地址</th>
            <th>调用次数</th>
            <th>起始时间</th>
            <th>授权ip</th>
            <th>联系人</th>
            <th>联系号码</th>
            <th>接口描述</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(val,index) in set_port_data" :key="index">
            <td style="width: 60px">
               <div class="layui-form-item">
                 <input :jkId="val.jkId" :des="val.jkName" :jkms="val.jkms" :checked="val.userType==1" :value="val.apiInfoId" type="checkbox" lay-filter="set-port" name="set-port" lay-skin="primary">
               </div>
            </td>
            <td width="100">{{val.jkId}}</td>
            <td class="set-url-box" width="100">
              <div class="layui-form-item">
                <input :value="val.url" type="text" placeholder="输入接口地址" class="layui-input set-url">
              </div>
            </td>
            <td class="set-count-box" width="80">
              <div class="layui-form-item">
                <input :value="val.count" type="text" placeholder="调用次数" class="layui-input set-count">
              </div>
            </td>
            <td class="set-time-box" width="164">
              <div class="layui-form-item w-164">
                <input :value="val.startTime?val.startTime+' - '+val.endTime:''" type="text" placeholder="编辑更改" class="layui-input set-time">
              </div>
            </td>
            <td class="set-ip-box" width="120">
              <div class="layui-form-item w-80">
                <input :value="val.ip" type="text" placeholder="授权ip" class="layui-input set-ip">
              </div>
            </td>
            <td class="set-name-box" width="120">
              <div class="layui-form-item w-80">
                <input :value="val.contacts" type="text" placeholder="联系姓名" class="layui-input set-name">
              </div>
            </td>
            <td class="set-phone-box" width="120">
              <div class="layui-form-item w-80">
                <input :value="val.mobile" type="text" placeholder="联系号码" class="layui-input set-phone">
              </div>
            </td>
            <td >{{val.jkName}}</td>
          </tr>
          </tbody>
        </table>
      </form>

    </div>
    <div id="port_user" class="hide">
      <p class="col-red font14">提示：点击单元格可直接对表格进行编辑</p>
      <table class="layui-table layui-hide" id="port_user_table" lay-filter="port_user_table"></table>
    </div>
  </div>
</template>

<script>
  import jsonData from '../../../static/js/area_data';
  import config from '@/config';
  import OperatorUtils from '../../utils/OperatorUtils';
  import AMap from 'AMap';
  export default {
    name: '',
    data () {
      return {
        msg: '',
        picker:'',
        areaData:jsonData,
        searchMsg:'',
        tableEditData:[],
        arr: [{name: '', value: ''}],
        port_user_datas:'',
        Authorization: OperatorUtils.getData('token'),
        set_port_data:'',
        basicAddFormData: {
          name: '',
          address: '',
          jbr: '',
          basic_remark: '',
          longitude:'',
          latitude:'',
          "provinceId": "440000",
          "cityId": "440100",
          "areaId": "440104",
        },
        basicEditFormData: {
          ID: '',
          NAME: '',
          ADDRESS: '',
          CREATETIME: '',
          USERCODE: '',
          REMARK: '',
          JBR: ''
        },
        concatUser:{
          "departmentId": "",
          "dataState": "",
          "glbm": "",
          "shortName": "",
          "fullName": "",
          "zsdw": "",
          "merchantId": "",
          "merchantName": "",
          "payAppId": "",
          "key": "",
          "notifyUrl": "",
          "yhdm": "",
          "address": "",
          "jbr": "",
          "cljg": "",
          keyword:''
        },
        setPort:{
          count:'',
          time:'',
          address:''
        },
        setMsg:{
          addMsg:'确认添加',
          editMsg:'确认编辑'
        }
      };
    },
    methods: {
      tableRender: function (table,form) {
        var _this = this;
        let type = 'GetVehicleTable';
        layui.use(['table', 'form', 'laydate'], function () {
          var table = layui.table;
          var tableIns = table.render({
            elem: '#vehicle_list_table',
            url: HOST,
            loading: true,
            even: true,
            where: {type: type},
            limit: 20,
            limits: [20, 40, 50, 60, 80],
            response: {
              statusCode: 200
            },
            headers: {
              'Authorization': _this.Authorization
            },
            text: {
              none: '暂无相关数据'
            },
            cols: [[
              {field: 'ID', title: '#',width:88},
              {field: 'NAME', title: '车管所',width:140},
              {field: 'JBR', title: '创建人',width:90},
              {field: 'CREATETIME', title: '创建时间', width: 170},
              {field: 'ADDRESS', title: '地址',width:240},
              {field: 'REMARK', title: '备注'},
              {field: 'setPort', width:90,title: '配置接口',templet:function (d) {
                  return '<a id="'+d.ID+'" href="javascript:;" class="set-port color-blue tdu">配置接口</a>'
                }},
              {
                field: 'operate', title: '操作', width: 200, templet: function (d) {
                  return '<div class="layui-btn-group"><button  ID="' + d.ID + '" NAME="' + d.NAME + '" JBR="' + d.JBR + '" ADDRESS="' + d.ADDRESS + '" CREATETIME="' + d.CREATETIME + '" USERCODE="' + d.USERCODE + '" REMARK="' + d.REMARK + '" title="编辑该车管所" class="layui-btn-sm layui-btn layui-btn-primary basic-operate-edit ml0"> <i class="layui-icon">&#xe642;</i></button><button standard="' + d.ID + '" title="删除该车管所" class="layui-btn-sm layui-btn layui-btn-primary basic-operate-del"> <i class="layui-icon">&#xe640;</i></button><button title="分配用户" class="layui-btn-sm layui-btn layui-btn-primary basic-concat-user" id="'+d.ID+'"><i class="layui-icon">&#xe612;</i></button><button title="查看关联用户" class="layui-btn-sm layui-btn-primary layui-btn port-users" id="'+d.ID+'"><i class="layui-icon">&#xe613;</i></button></div>';
                }
              }
            ]],
            page: true,
            done: function (res) {
              $('#basic_search').click(function (e) {
                e.preventDefault();
                var table_reload_data = {
                  name: _this.searchMsg,
                  type:'GetVehicleTable'
                };
                tableIns.reload({
                  where: table_reload_data,
                  page: {
                    curr: 1
                  }
                });
              });
              $('.basic-operate-edit').click(function () {
                _this.basicEditFormData.ID = $(this).attr('ID');
                _this.basicEditFormData.NAME = $(this).attr('NAME');
                _this.basicEditFormData.ADDRESS = $(this).attr('ADDRESS');
                _this.basicEditFormData.CREATETIME = $(this).attr('CREATETIME');
                _this.basicEditFormData.USERCODE = $(this).attr('USERCODE');
                _this.basicEditFormData.REMARK = $(this).attr('REMARK');
                _this.basicEditFormData.JBR = $(this).attr('JBR');
                form.render();
                layer.open({
                  type: 1,
                  shadeClose: true,
                  closeBtn: 1,
                  skin: _this.$store.state.skin,
                  area: ['620px', '450px'],
                  title: '编辑信息',
                  content: $('#basic_edit_popup'),
                  end: function () {
                    $('#basic_edit_popup').css({display: 'none'});
                  },
                  btn: ['确认修改', '取消'],
                  yes: function () {
                    var type = 'EidtApiVehicle';
                    var data = {
                      id: _this.basicEditFormData.ID,
                      name: _this.basicEditFormData.NAME,
                      address: _this.basicEditFormData.ADDRESS,
                      usercode: _this.basicEditFormData.USERCODE,
                      remark: _this.basicEditFormData.REMARK,
                      jbr: _this.basicEditFormData.JBR
                    };
                    data = config.urlTransition(type, data);
                    let url = HOST;
                    _this.$http.apiPost(url, data).then(function (res) {
                      var code = res.code;
                      if (code == 200) {
                        layer.msg('修改成功');
                        setTimeout(function () {
                          layer.closeAll();
                          _this.tableRender(table,form);
                        }, 1500);
                      }else {
                        layer.msg('修改失败')
                        setTimeout(function () {
                          layer.closeAll()
                        },1500)
                      }
                    });
                  }
                });
              });
              $('.basic-operate-del').click(function () {
                var id = $(this).attr('standard');
                let type = 'DelApiVehicle';
                var data = {
                  id: id
                };
                data = config.deleteUrlTrans(type, data);
                layer.load(1);
                layer.confirm('确定要删除该条数据？', {
                  btn: ['确定', '取消'],
                  skin: _this.$store.state.skin
                }, function () {
                  _this.$http.apiDelete(HOST, data).then(function (res) {
                    let code = res.code;
                    if (code == 200) {
                      layer.msg('删除成功',{time:1200});
                      setTimeout(function () {
                        layer.closeAll();
                      }, 1500);
                    } else {
                      layer.msg(res.message);
                      layer.closeAll();
                    }
                    _this.tableRender();
                  });

                }, function (index) {
                  layer.closeAll();
                });
              });
              $('.basic-concat-user').click(function (e) {
                e.preventDefault();
                var $this = $(this).attr('id')
                layer.open({
                  type: 1,
                  shadeClose: true,
                  closeBtn: 1,
                  skin: _this.$store.state.skin,
                  area: '818px',
                  title: '车管所关联用户',
                  content: $('#basic_concat_user'),
                  end: function () {
                    $('#basic_concat_user').css({display: 'none'});
                  },
                  btn: ['确认绑定', '取消'],
                  yes: function () {
                   var type = 'AddVehicleUser';
                   var data = {};
                   data.userDatas = {
                       "departmentId": $this,
                        "dataState": _this.concatUser.dataState,
                        "glbm": _this.concatUser.glbm,
                        "shortName": _this.concatUser.shortName,
                        "fullName": _this.concatUser.fullName,
                        "zsdw": _this.concatUser.zsdw,
                        "merchantId": _this.concatUser.merchantId,
                        "merchantName": _this.concatUser.merchantName,
                        "payAppId": _this.concatUser.payAppId,
                        "key": _this.concatUser.key,
                        "notifyUrl": _this.concatUser.notifyUrl,
                        "yhdm": _this.concatUser.yhdm,
                        "address": _this.concatUser.address,
                        "jbr": _this.concatUser.jbr,
                        "cljg":_this.concatUser.cljg,
                        "onlyCode":_this.concatUser.keyword
                    };
                   if(data.userDatas.onlyCode==''){
                     layer.tips('必填项', '#port_key_word', {
                       tips: [1, '#f40'],
                       time: 2000
                     });
                     return;
                   }
                    data = config.urlTransition(type, data);
                    let url = HOST;
                    _this.$http.apiPost(url, data).then(function (res) {
                      var code = res.code;
                      if (code == 200) {
                        layer.msg('绑定成功',{time:1300});
                        setTimeout(function () {
                          layer.closeAll();
                          _this.tableRender();
                        }, 1500);
                      }else {
                        layer.msg('绑定失败')
                        setTimeout(function () {
                          layer.closeAll()
                        },1500)
                      }
                    });
                  }
                });
              })
              $('.set-port').click(function (e) {
                var id_set = $(this).attr('id');
                layer.open({
                  type:1,
                  title:'配置接口',
                  content:$('#set_port'),
                  shadeClose: true,
                  closeBtn: 1,
                  skin: _this.$store.state.skin,
                  area: ['1000px', '550px'],
                  btn:['确定配置','取消'],
                  success:function(){
                    var data  = config.getUrlTrans({
                      type:'GetVehicleApiData',
                      vehId:id_set,
                      page:1,
                      limit:99999
                    })
                    _this.$http.apiGet(HOST,data).then(function (res) {
                      if(res.code==200){
                       _this.set_port_data =  res.data
                      }
                    })
                  },
                  yes:function () {
                    var type = 'ConfigVehicleApi';
                    var data = {
                      paramId:id_set
                    }
                    var selectData = $('tbody input[name="set-port"]:checked');
                    var vehapiData=[];
                    $.each(selectData,function () {
                      vehapiData.push({
                        apiInfoId:$(this).attr('value'),
                        jkId: $(this).attr('jkId'),
                        jkName: $(this).attr('des'),
                        jkms:$(this).attr('jkms'),
                        validityTime:$(this).parents('td').siblings('.set-time-box').find('.set-time').val(),
                        url:$(this).parents('td').siblings('.set-url-box').find('.set-url').val(),
                        ip:$(this).parents('td').siblings('.set-ip-box').find('.set-ip').val(),
                        count:$(this).parents('td').siblings('.set-count-box').find('.set-count').val(),
                        mobile:$(this).parents('td').siblings('.set-phone-box').find('.set-phone').val(),
                        contacts:$(this).parents('td').siblings('.set-name-box').find('.set-name').val()
                      })
                    })
                    data.vehapiData=vehapiData;
                    data=config.urlTransition(type,data)
                    _this.$http.apiPost(HOST,data).then(function (res) {
                      var code = res.code;
                      if(code==200){
                        layer.msg('成功',{time:1300})
                        setTimeout(function () {
                          layer.closeAll();
                        },1500)
                      }else {
                        layer.msg(res.message,{time:2000})
                      }
                    })
                  },
                  end:function () {
                    form.render('checkbox');
                  }
                });
              })
              $('.port-users').click(function (e) {
                var ids = $(this).attr('id')
                let type = 'GetVehicleUserData';
                layer.open({
                  type: 1,
                  title: '该关联的相关用户',
                  area: ['1200px', '500px'],
                  closeBtn: 1,
                  scrollbar: false,
                  shadeClose: true,
                  skin: 'layui-layer-molv',
                  content: $('#port_user'),
                  btn:['确认编辑','取消'],
                  success:function(){
                    setTimeout(function () {
                      table.render({
                        elem: '#port_user_table',
                        url: HOST,
                        loading: true,
                        even: true,
                        where: {type: type,id:ids},
                        limit: 20,
                        limits: [20, 40, 50, 60, 80],
                        response: {
                          statusCode: 200
                        },
                        headers: {
                          'Authorization': _this.Authorization
                        },
                        text: {
                          none: '暂无相关数据'
                        },
                        cols: [[
                          {field: 'glbm', title: '管理部门',width:110,edit:'text'},
                          {field: 'fullName', title: '部门全称',width:250,edit:'text'},
                          {field: 'yhdm', title: '用户代码',width:90,edit:'text'},
                          {field: 'onlyCode', title: '唯一标识',width:170,edit:'text'},
                          {field: 'jbr', title: '经办人',width:90,edit:'text'},
                          {field: 'cljg', title: '处理机构',width:170,edit:'text'},
                          {field: 'createTime', title: '创建时间',width:170,},
                          {field: 'operateS', title: '操作',width:90,templet:function (d) {
                              return '<button id="'+d.id+'" key="'+d.key+'" payAppId="'+d.payAppId+'"  notifyUrl="'+d.notifyUrl+'" address="'+d.address+'" merchantName="'+d.merchantName+'" merchantId="'+d.merchantId+'" zsdw="'+d.zsdw+'" shortName="'+d.shortName+'" departmentId="'+d.departmentId+'" updateTime="'+d.updateTime+'" jbr="'+d.jbr+'" class="layui-btn layui-btn-danger layui-btn-sm port-user-table-del">删除</button>';
                            }},
                        ]],
                        page: false,
                        done:function (res) {
                          table.on('tool(port_user_table)',function (obj) {
                            console.log(obj);
                          })
                          $('.port-user-table-del').click(function () {
                            var parent = $(this).parents('tr');
                            parent.remove();
                          })
                        }
                      })
                     /* table.on('edit(port_user_table)',function (obj) {
                        _this.tableEditData.push(obj.data);
                      })*/
                    });
                  },
                  yes:function(){
                    var data = {};
                    data.vehId = ids;
                    var port_user_del = $('.port-user-table-del')
                    $.each(port_user_del,function () {
                      _this.tableEditData.push({
                        "departmentId": $(this).attr('departmentId'),
                        "onlyCode": $(this).parents('td').siblings('td[data-field="onlyCode"]').find('div').text(),
                        "dataState": 1,
                        "glbm":$(this).parents('td').siblings('td[data-field="glbm"]').find('div').text(),
                        "shortName": $(this).attr('shortName'),
                        "fullName": $(this).parents('td').siblings('td[data-field="fullName"]').find('div').text(),
                        "zsdw": $(this).attr('zsdw'),
                        "merchantId": $(this).attr('merchantId'),
                        "merchantName": $(this).attr('merchantName'),
                        "payAppId": $(this).attr('payAppId'),
                        "key": $(this).attr('key'),
                        "notifyUrl": $(this).attr('notifyUrl'),
                        "yhdm": $(this).parents('td').siblings('td[data-field="yhdm"]').find('div').text(),
                        "address": $(this).attr('address'),
                        "jbr": $(this).parents('td').siblings('td[data-field="jbr"]').find('div').text(),
                        "cljg": $(this).parents('td').siblings('td[data-field="cljg"]').find('div').text(),
                      })
                    })
                      data.userDataList = _this.tableEditData;
                      if(data.userDataList.length<1){
                        layer.msg('您未对任何信息做修改')
                        return;
                      }
                      let type = 'BatchEditVehicleUser';
                      data = config.urlTransition(type,data);
                    console.log(data);
                    _this.$http.apiPost(HOST,data).then(function (res) {
                          if(res.code==200){
                            layer.msg('编辑成功',{time:1500})
                            setTimeout(function () {
                              layer.closeAll();
                            },2000)
                          }
                        })
                  },
                  btn2:function(){
                    layer.closeAll()
                  },
                  end: function (index) {
                    $('#dev_user').css({'display':'none'});
                  }
                });;
              })
            }
          });
        });
      },
      basic_add () {
        var _this = this;
        layer.open({
          type: 1,
          title: '添加车管所',
          skin: _this.$store.state.skin,
          area: ['680px', '500px'],
          closeBtn: 1,
          shadeClose: true,
          content: $('#basic_add_popup'),
          btn: [_this.setMsg.addMsg, '取消'],
          success:function(){
            var port_area = new _this.picker();
            port_area.set({
              elem: '#port_area',
              data: _this.areaData,
              canSearch: true,
              codeConfig: {
                code: 440104,
                type: 3
              }
            }).render();
          },
          yes: function () {
            var type = 'AddApiVehicle';
            var province = $('.province-show').text();
            var city = $('.city-show').text();
            var area = $('.area-show').text();
            if(province==''){
              province = _this.basicAddFormData.provinceId
            }
            if(city==''){
              city = _this.basicAddFormData.cityId
            }
            if(area==''){
              area = _this.basicAddFormData.areaId
            }
            _this.basicAddFormData.provinceId = province;
            _this.basicAddFormData.cityId = city;
            _this.basicAddFormData.areaId = area;
            var data = {
              "provinceId":province,
              "cityId":city,
              "countyId":area,
              address: _this.basicAddFormData.address,
              name: _this.basicAddFormData.name,
              jbr: _this.basicAddFormData.jbr,
              remark: _this.basicAddFormData.basic_remark,
              longitude:_this.basicAddFormData.longitude,
              latitude:_this.basicAddFormData.latitude
            };
            if(!data.name){
              layer.tips('请检查此项', '#add_vehicle_name', {
                tips: [1, '#459eff'],
                time: 2000
              });
              return;
            }
            if(!data.address){
              layer.tips('请检查此项', '#add_vehicle_address', {
                tips: [1, '#459eff'],
                time: 2000
              });
              return;
            }
            if(!data.jbr){
              layer.tips('请检查此项', '#add_vehicle_create', {
                tips: [1, '#459eff'],
                time: 2000
              });
              return;
            }
            data = config.urlTransition(type, data);
            let url = HOST;
            layer.load(1, {
              shade: [0.4,'#fff']
            });
            _this.$http.apiPost(url, data).then(function (res) {
              var code = res.code;
              if (code == 200) {
                layer.msg('添加成功',{time:"1300"});
                setTimeout(function () {
                  layer.closeAll();
                  _this.tableRender();
                }, 1500);
              } else {
                layer.msg(res.message);
              }
            });

          },
          end: function () {
            $('#basic_add_popup').css({'display': 'none'});
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
          $('#add_vehicle_address').on('input', function () {
            var currentVal = $('#add_vehicle_address').val()
            if(currentVal==''){
              $('#vehicle_address_pane').hide()
            }
            var procince = $('#port_area div.layui-input-inline:nth-of-type(1) input').val();
            var city = $('#port_area div.layui-input-inline:nth-of-type(2) input').val();
            var county = $('#port_area div.layui-input-inline:nth-of-type(3) input').val();
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
                $('#vehicle_address_pane').show().html(dom)
              }
            });
            $('#vehicle_address_pane').delegate('.pos', 'click', function () {
              if(!$(this).attr('lat')||!$(this).attr('lng')){
                layer.msg('该地区无法匹配经纬度，请选择更为详细地址')
                return false;
              }else {
                $('#add_port_address').val($(this).text()).attr({
                  "lat": $(this).attr("lat"),
                  "lng": $(this).attr("lng")
                });
                _this.basicAddFormData.address=$(this).text()
                _this.basicAddFormData.longitude=$(this).attr('lng')
                _this.basicAddFormData.latitude=$(this).attr('lat')
                $('#vehicle_address_pane').hide().html('')
              }
            });
          });

        })

      },
    },
    mounted () {
      var _this = this;
      layui.config({
        base: './static/layui/extend/picker/'
      }).use(['table', 'layer','form','laydate','picker'], function () {
        var table = layui.table;
        var layer = layui.layer;
        var form = layui.form;
        _this.picker = layui.picker;
        form.render()
        form.on('select(dataState)',function (data) {
          var value = data.value;
          _this.concatUser.dataState = value;
        });
        form.on('checkbox(set-port)',function (data) {
          var value = data.value;
          var status = data.elem.checked;
          if(status){
            var currentElem = $(data.elem).parents('td');
            currentElem.siblings('.set-time-box').find('.set-time').val($('#set_port_time').val());
            currentElem.siblings('.set-url-box').find('.set-url').val($('#set_url').val());
            currentElem.siblings('.set-ip-box').find('.set-ip').val($('#set_port_ip').val());
            currentElem.siblings('.set-count-box').find('.set-count').val($('#set_count').val());
            currentElem.siblings('.set-name-box').find('.set-name').val($('#set_port_name').val());
            currentElem.siblings('.set-phone-box').find('.set-phone').val($('#set_port_phone').val());
          }
        });
        _this.tableRender(table,form);
        layui.laydate.render({
          elem: '#set_port_time',
          theme: 'grid',
          calendar: true,
          mark: {
            '0-12-31': '跨年'
          },
          range: true,
          done:function (val) {
          }
        });

      });
      this.mapRender()
    },
    updated () {
      this.$nextTick(function () {
        layui.use(['form'],function () {
          layui.form.render();
        });
      })
    },
    watch () {
    }
  };
</script>

