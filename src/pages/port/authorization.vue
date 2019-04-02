<style scoped>
  .layui-btn-sm i {
    font-size: 12px;
  }

  .main-content-header {
    height: auto;
    background-color: #fff;
    padding-top: 15px;
    padding-right: 30px;
    box-shadow: 0 1px 6px -1px rgba(0, 0, 0, 0.15);
  }

  .main-content-body {
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: space-between;
    box-shadow:0 1px 4px 1px rgba(29, 29, 39, 0.15)
  }

  .main-content-body-left {
    width: 14%;
    min-height: 380px;
    background-color: #fff;
    box-shadow: 0 1px 6px -1px rgba(0, 0, 0, 0.15);
  }

  .main-content-body-right {
    width: 100%;
    min-height: 380px;
    background-color: #fff;
    box-shadow: 0 1px 6px -1px rgba(0, 0, 0, 0.15);
  }

  .layui-btn-sm i.iconfont {
    font-size: 12px !important;
  }

  .main-content-right-bottom{
    padding: 15px;
  }
  .layui-form-checkbox span {
    font-size: 12px;
  }
</style>
<style type="text/css">
  /*时分秒提示边框旋转*/
  .laydate-btns-time {
    width: 54px;
    height: 26px;
    text-align: center;
}
  .laydate-btns-time,.laydate-btns-time::before,.laydate-btns-time::after {
    position: absolute;
  }
  .laydate-btns-time::before,.laydate-btns-time::after {
    content: '';
    z-index: -1;
    margin: -5%;
    box-shadow:inset 0 0 0 1px #aaa;
    animation:clipMe 8s linear infinite;
    width: 54px;
    height: 26px;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
  .laydate-btns-time::before {
    animation-delay:-4s;
  }
  @keyframes clipMe {
    0%, 100% {
      clip: rect(0px, 50px, 1px, 0px);
    }
    25% {
      clip: rect(0px, 1px, 26px, 0px);
    }
    50% {
      clip: rect(26px, 50px, 26px, 0px);
    }
    75% {
      clip: rect(0px, 50px, 26px,50px);
    }
  }
</style>
<template>
  <div class="main-content">
    <div class="main-content-header">
      <form class="layui-form layui-form-pane pl20 clearfix" action="">
        <div class="layui-form-item mr-10">
          <label class="layui-form-label">应用ID</label>
          <div class="layui-input-block w-auto">
            <input type="text" name="user_code" placeholder="输入应用ID" id="auth_id" autocomplete="off" class="layui-input"  v-model="searchMsg">
          </div>
        </div>
        <div class="layui-form-item  ml-10">
          <button class="layui-btn layui-btn-sm" id="auth_search"><i class="layui-icon">&#xe615;</i>搜索</button>
          <button class="layui-btn layui-btn-sm layui-btn-primary ml-16" id="auth_reset" @click="reset($event)"><i class="layui-icon">&#xe669;</i>重置</button>
        </div>
      </form>
    </div>
    <div class="middle-space"></div>
    <div class="main-content-body">
      <div class="main-content-body-right">
        <div class="main-content-body-right-top">
          <p><i class="iconfont mr-6">&#xe6fc;</i>应用授权</p>
        </div>
        <div class="main-content-right-bottom">
          <div class="layui-btn-container pore">
            <button @click.stop="add_auth" class="layui-btn layui-btn-sm add-users-btn"><i class="layui-icon layui-icon-add-circle"></i>添加公司</button>
          </div>
          <table class="layui-hide" id="auth_table" lay-filter="auth_table"></table>
        </div>
      </div>
    </div>
    <div id="auth_popup" class="" style="display: none;">
      <form action="" class="layui-form layui-form-pane">
        <div class="layui-form-item display_block">
          <label class="layui-form-label">公司名称</label>
          <div class="layui-input-block w-auto">
            <input type="text" name="auth-company" placeholder="输入添加的公司名称" autocomplete="off" class="layui-input" v-model="addFormData.name">
          </div>
        </div>
        <div class="layui-form-item display_block">
          <div class="layui-input-block w-auto ml0">
            <div id="add_auth_area"></div>
          </div>
        </div>
        <div class="layui-form-item display_block">
          <label class="layui-form-label">公司地址</label>
          <div class="layui-input-block w-auto">
            <input type="text" name="auth-count" placeholder="输入公司详细地址" autocomplete="off" class="layui-input" v-model="addFormData.address">
          </div>
        </div>
        <div class="layui-form-item display_block">
          <label class="layui-form-label">联系人</label>
          <div class="layui-input-block w-auto">
            <input type="text" name="auth-count" placeholder="输入联系人姓名-" autocomplete="off" class="layui-input" v-model="addFormData.contacts">
          </div>
        </div>
        <div class="layui-form-item display_block">
          <label class="layui-form-label">联系电话</label>
          <div class="layui-input-block w-auto">
            <input type="text" name="auth-phone" placeholder="输入联系电话" maxlength="11" class="layui-input" v-model="addFormData.telphone">
          </div>
        </div>
      </form>
      <span class="province-show hide"></span><span class="city-show hide"></span><span class="area-show hide"></span>
    </div>
    <div id="auth_edit_popup" class="" style="display: none;">
      <form action="" class="layui-form layui-form-pane">
        <div class="layui-form-item display_block">
          <label class="layui-form-label">公司名称</label>
          <div class="layui-input-block w-auto">
            <input type="text" name="auth-company" placeholder="输入公司名称" autocomplete="off" class="layui-input" v-model="editFormData.name">
          </div>
        </div>
        <div class="layui-form-item display_block">
          <div class="layui-input-block w-auto ml0">
            <div id="edit_auth_area"></div>
          </div>
        </div>
        <div class="layui-form-item display_block">
          <label class="layui-form-label">公司地址</label>
          <div class="layui-input-block w-auto">
            <input type="text" name="auth-count" placeholder="输入公司详细地址" autocomplete="off" class="layui-input" v-model="editFormData.address">
          </div>
        </div>
        <div class="layui-form-item display_block">
          <label class="layui-form-label">联系人</label>
          <div class="layui-input-block w-auto">
            <input type="text" name="auth-count" placeholder="输入联系人姓名-" autocomplete="off" class="layui-input" v-model="editFormData.contacts">
          </div>
        </div>
        <div class="layui-form-item display_block">
          <label class="layui-form-label">联系电话</label>
          <div class="layui-input-block w-auto">
            <input type="text" name="auth-phone" placeholder="输入联系电话" maxlength="11" class="layui-input" v-model="editFormData.telphone">
          </div>
        </div>
      </form>
      <span class="province-show1 hide"></span><span class="city-show1 hide"></span><span class="area-show1 hide"></span>
    </div>
    <div id="add_auth" class="hide">
      <form action="" class="layui-form">
        <div class="layui-form-item d_i_b">
            <input type="text" class="layui-input" v-model="addAuthFormData.name" placeholder="输入应用名称">
        </div>
        <div class="layui-form-item d_i_b" v-show="vehicleDatas">
            <select name="vehicle" lay-verify="required" lay-filter="vehicle_select" lay-search="">
              <option value="">选择或搜索车管所</option>
              <option v-for="(val,index) in vehicleDatas" :key="index" :value="val.ID" :id="val.MY_ROWNUM">{{val.NAME}}</option>
            </select>
        </div>
        <div class="layui-form-item d_i_b">
            <select name="modules" lay-verify="required" lay-filter="ftdevuserId" lay-search="">
              <option value="">选择或搜索用户代码</option>
              <option v-for="(val,index) in userCode" :value="val.id">{{val.onlyCode}}</option>
            </select>
          </div>
        <div class="layui-form-item d_i_b w-164">
            <input type="text" name="" id="add_auth_time" placeholder="选择分配时间起止" readonly class="layui-input">
        </div>
        <div class="layui-form-item d_i_b w-120">
          <select name="vehicle" lay-verify="required" lay-search="" id="add_auth_isIp">
            <option value="">检测IP</option>
            <option value="1">是</option>
            <option value="0">否</option>
          </select>
        </div>
        <div class="layui-form-item" lay-vertify="required">
          <input type="text" id="add_auth_count" placeholder="输入调用次数" class="layui-input">
        </div>
      </form>
      <table class="layui-table" id="auth_port_table">
        <thead>
          <tr >
            <th>选择</th>
            <th>接口id</th>
            <th>接口地址</th>
            <th>Ip</th>
            <th>调用次数</th>
            <th>生效始末</th>
            <th>接口描述</th>
            <th>检测ip</th>
          </tr>
        </thead>
        <tbody>
        <tr v-if="!addAuthTable">暂无数据,请在上方选择车管所和用户代码^_^</tr>
        <tr v-else v-for="(val,index) in addAuthTable" :key="index">
          <td width="50">
            <form action="" class="layui-form">
              <div class="layui-form-item">
                <input type="checkbox" name="auth_checkbox" lay-filter="auth_checkbox" lay-skin="primary" :id="val.id" :jkName="val.jkName" :jkId="val.jkId" :jkxlh="val.jkxlh" :checked="val.userType">
              </div>
            </form>
          </td>
          <td class="add-auth-jkId" width="90">{{val.jkId}}</td>
          <th class="add-auth-url" width="90">{{val.url}}</th>
          <td class="add-auth-ip" width="100"><input type="text" :value="val.ip" class="layui-input"></td>
          <td class="add-auth-count" width="70"><input type="text" :value="val.count" class="layui-input"></td>
          <td class="add-auth-validityTime" width="190"><input type="text" :value="val.startTime+' - '+val.endTime" class="layui-input"></td>
          <td class="add-auth-name">{{val.jkName}}</td>
          <td class="add-auth-isip" width="140">
            <form action="" class="layui-form">
              <div class="layui-form-item mb0">
                  <input type="radio" value="1" name="is_ip" :chcked="val.isIp==1" title="YES">
                  <input type="radio" value="0" name="is_ip" :chcked="val.isIp==0" title="NO">
              </div>
            </form>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
    <div id="view_auth" class="hide">
      <table class="layui-table layui-hide" id="view_auth_table" lay-filter="view_auth_table"></table>
    </div>
    <div id="auth_view_details" class="hide">
      <table class="layui-table" id="auth_view_details_table" lay-filter="auth_view_details_table"></table>
    </div>
  </div>
</template>

<script>
  import jsonData from '../../../static/js/area_data';
  import config from '@/config';
  import OperatorUtils from '../../utils/OperatorUtils';
  export default {
    name: 'role',
    data() {
      return {
        msg: 'role',
        searchMsg:'',
        areaData:null,
        Authorization:OperatorUtils.getData('token'),
        vehicleDatas:'',
        userCode:null,
        addAuthTable:null,
        picker:'',
        formRender:null,
        addFormData:{
          name:'',
          address:'',
          contacts:'',
          telphone:'',
          "provinceId": "440000",
          "cityId": "440100",
          "areaId": "440104",
        },
        editFormData:{
          id:'',
          name:'',
          address:'',
          contacts:'',
          telphone:'',
          "provinceId": "440000",
          "cityId": "440100",
          "areaId": "440104",
        },
        addAuthFormData:{
          name:'',
          ftdevuserId: '',
        },
        searchData: {
          msg: ''
        }
      };
    },
    methods: {
      add_auth:function(e){
        var _this = this;
        e.preventDefault();
        layer.open({
          type:1,
          area:['614px','420px'],
          title:'添加公司',
          closeBtn:1,
          shadeClose:true,
          skin:'layui-layer-molv',
          btn:['确定添加','取消'],
          success:function(){
            _this.formRender.render();
          },
          end:function(){
            $('#auth_popup').css('display','none');
          },
          yes:function(){
            var type = 'AddCompanyInfo';
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
            var data = {
              "name": _this.addFormData.name,
              "address":_this.addFormData.address,
              "provinceId":province,
              "cityId": city,
              "countyId": area,
              contacts:_this.addFormData.contacts,
              "telphone": _this.addFormData.telphone,
            };
            data = config.urlTransition(type,data);
            let url = HOST;
            _this.$http.apiPost(url,data).then(function(res){
               var code = res.code;
               if(code==200){
                 layer.msg('添加成功',{time:2000});
                 setTimeout(function () {
                   layer.closeAll();
                   _this.tableRender();
                 },1500);
               }else {
                 layer.msg(res.message,{time:2000});
                /* setTimeout(function () {
                   window.history.go(0);
                 },1500)*/
               }
             });
            console.log(data);
          },
          content:$('#auth_popup')
        });
      },
      reset: function (e) {
        e.preventDefault();
        this.searchData.msg='';
      },
      tableRender: function () {
        var _this = this;
        let type = 'GetCompanyInfoData';
        var data = {
          type: type
        };
        layui.use(['table','form','laydate'], function () {
          var table = layui.table;
          var form = layui.form;
          _this.formRender = form;
          form.on('select(vehicle_select)',function (data) {
            var val = data.value;
            if(val){
              _this.$http.apiGet(HOST,config.getUrlTrans({type:'GetUserAndApiData',vehId:val,page:1,limit:99999})).then(function (res) {
                if(res.code==200){
                  _this.userCode = res.data.userDatas;
                  _this.addAuthTable = res.data.apiDatas;
                }else{

                }
              })
            }
          });
          form.on('select(ftdevuserId)',function (data) {
            var val = data.value;
            if(val){
             _this.addAuthFormData.ftdevuserId = val
            }
          });
          form.on('select(auth_edit_isip)',function(data){
            var value = data.value;
            _this.editFormData.isip=value;
          })
          var tableIns = table.render({
            elem: '#auth_table',
            url: HOST,
            loading: true,
            even: true,
            where: data,
            limit:20,
            limits:[20,40,50,60,80],
            response: {
              statusCode: 200
            },
            headers:{
              'Authorization':_this.Authorization
            },
            text:{
              none:'暂无相关数据'
            },
            cols: [[
              {field: 'name', title: '公司名称',width:180},
              {field: 'telphone', title: '联系电话',width:120},
              {field:'contacts',title:'联系人',width:80},
              {field: 'createTime', title: '生效开始',width:154},
              {field: 'dataState', title: '状态',width:74},
              {field:'countyName',title:"所在地",width:90},
              {field: 'address', title: '地址'},
              {field:'operate-2',title:'授权相关',width:164,templet:function (d) {
                  return '<a href="javascript:;" compnayId="'+d.compnayId+'" id="'+d.id+'" class="color-blue tdu add_auth">添加授权</a><a href="javascript:;" compnayId="'+d.compnayId+'" id="'+d.id+'" class="ml-26 color-blue tdu view-auth">查看授权</a>';
                }
              },
              {
                field: 'operate', title: '操作',width:140, templet: function (d) {
                  return '<button id="'+d.id+'" name="'+d.name+'" countyId="'+d.countyId+'" telphone="'+d.telphone+'" contacts="'+d.contacts+'" createTime="'+d.createTime+'" dataState="'+d.dataState+'" address="'+d.address+'" class="layui-btn-sm layui-btn  auth-operate-edit">编辑</button><button id="'+d.id+'" class="layui-btn-sm layui-btn layui-btn-danger auth-operate-del">删除</button>';
                }
              }
            ]],
            page: true,
            done: function (res) {
              $('td[data-field="dataState"]').children().each(function (val) {
                var value = $(this).text();
                value==1? $(this).html('<span class="normal-btn">正常</span>'): $(this).html('<span class="abnormal-btn">异常</span>');
              });
              $('#auth_search').click(function (e) {
                e.preventDefault();
                var table_reload_data = {
                  jkid:_this.searchMsg,
                  type:type
                };
                tableIns.reload({
                  where:table_reload_data,
                  page:{
                    curr:1
                  }
                });
              });
              $('.auth-operate-edit').click(function () {
                var countyId = $(this).attr('countyId')
                if(countyId=='null'){
                  countyId='440104'
                }
                _this.editFormData.id=$(this).attr('id');
                _this.editFormData.name = $(this).attr('name');
                _this.editFormData.address = $(this).attr('address');
                _this.editFormData.contacts = $(this).attr('contacts');
                _this.editFormData.telphone = $(this).attr('telphone');
                form.on('select(edit_type)',function (data) {
                  var value = data.value;
                  _this.editFormData.adtype = value;
                  form.render();
                });
                layer.open({
                  type:1,
                  shadeClose:true,
                  closeBtn:1,
                  skin:_this.$store.state.skin,
                  area:['546px','480px'],
                  title:'编辑公司信息',
                  content:$('#auth_edit_popup'),
                  end:function () {
                    $('#auth_edit_popup').css({display:'none'});
                  },
                  success:function(){
                    new _this.picker().set({
                      elem: '#edit_auth_area',
                      data: _this.areaData,
                      canSearch: true,
                      codeConfig: {
                        code: countyId,
                        type: 3
                      }
                    }).render();
                  },
                  btn:['确认修改','取消'],
                  yes:function () {
                    var auth_edit_type = 'EditCompanyInfo';
                    var province = $('.province-show1').text();
                    var city = $('.city-show1').text();
                    var area = $('.area-show1').text();
                    if(province==''){
                      province = _this.editFormData.provinceId
                    }
                    if(city==''){
                      city = _this.editFormData.cityId
                    }
                    if(area==''){
                      area = _this.editFormData.areaId
                    }
                    var auth_edit_data = {
                      id:_this.editFormData.id,
                      name:_this.editFormData.name ,
                      address:_this.editFormData.address ,
                      contacts:_this.editFormData.contacts,
                      telphone:_this.editFormData.telphone,
                      provinceId:province,
                      cityId:city,
                      countyId:area,
                      dataState:1
                    };
                    auth_edit_data = config.urlTransition(auth_edit_type,auth_edit_data);
                   _this.$http.apiPost(HOST,auth_edit_data).then(function(res){
                      var code = res.code;
                      if(code==200){
                        layer.msg('修改成功');
                        setTimeout(function () {
                          layer.closeAll();
                          _this.tableRender();
                        },1500);
                      }else {
                        layer.msg(res.message,{time:1300})
                       /* setTimeout(function () {
                          layer.closeAll();
                         window.history.go(0)
                        },1500);*/
                      }
                    });
                  }
                });
              });
              $('.auth-operate-del').click(function () {
                var id = $(this).attr('id');
                let type = 'DelCompanyInfo';
                var data = {
                  id:id
                };
                data = config.deleteUrlTrans(type,data);
                layer.load(1);
                layer.confirm('确定要删除该条数据？', {
                  btn: ['确定','取消'],
                  skin:_this.$store.state.skin
                }, function(){
                  _this.$http.apiDelete(HOST,data).then(function (res) {
                    let code  = res.code;
                    if(code==200){
                      layer.msg('删除成功');
                      setTimeout(function(){
                        layer.closeAll();
                        _this.tableRender();
                      },1500)

                    }else {
                      layer.msg(res.message);
                    }
                  });
                }, function(index){
                  layer.closeAll();
                });
              });
              $('.add_auth').click(function () {
                var companyId = $(this).attr('compnayId')
                layer.open({
                  type:1,
                  area:['1150px','480px'],
                  title:'为公司添加授权',
                  closeBtn:1,
                  shadeClose:true,
                  skin:'layui-layer-molv',
                  btn:['确定添加','取消'],
                  success:function(){
                    var url = HOST+'?type=GetVehicleTable&page=1&limit=9999'
                    _this.$http.apiGet(url).then(function (res) {
                      if(res.code==200){
                        _this.vehicleDatas = res.data
                      }else {
                        layer.msg(res.message)
                      }
                    })
                    _this.formRender.render('select');
                    form.on('checkbox(auth_checkbox)',function (obj) {
                      var elem = $(obj.elem)
                      var status = obj.elem.checked;
                      if(status){
                        var count = $('#add_auth_count').val();
                        var isIp = $('#add_auth_isIp').val();
                        console.log(isIp)
                        if(count!=''){
                          elem.parents('td').siblings('td.add-auth-count').find('input').val(count)
                        }
                        if(isIp==1){
                          elem.parents('td').siblings('td.add-auth-isip').find('input').prop('checked',true)
                        }else {
                          elem.parents('td').siblings('td.add-auth-isip').find('input').prop('checked',false)
                        }
                        form.render('radio')
                      }
                    })
                  },
                  end:function(){
                    $('#add_auth').css('display','none');
                  },
                  yes:function(){
                    let type = 'ConfigCompanyAipData';
                    var  data = {
                      appName:_this.addAuthFormData.name,
                      compnayId:companyId,
                      ftdevuserId:_this.addAuthFormData.ftdevuserId
                    }
                    var addAuthData = [];
                    var authCheckboxDatas = $('tbody input[name="auth_checkbox"]:checked');
                    console.log(authCheckboxDatas);
                    $.each(authCheckboxDatas,function () {
                      var currentEle = $(this).parents('td')
                      addAuthData.push({
                          id:$(this).attr('id'),
                          jkId:$(this).attr('jkid'),
                          "ip":currentEle.siblings('.add-auth-ip').find('input').val(),
                          "jkms":$(this).attr('jkName'),
                          "validityTime":currentEle.siblings('.add-auth-validityTime').find('input').val(),
                          "count":currentEle.siblings('.add-auth-count').find('input').val(),
                          "isIp":currentEle.siblings('.add-auth-isip').find('input[name="is_ip"]:checked').val(),
                      });
                    })
                    data.apiDatas = addAuthData;
                    data = config.urlTransition(type,data)
                    _this.$http.apiPost(HOST,data).then(function (res) {
                      if(res.code==200){
                        layer.msg('配置成功',{time:2000})
                        setTimeout(function () {
                          layer.closeAll();
                        },1300)
                      }else {
                        layer.msg(res.message,{time:2000})
                      };
                    })
                  },
                  content:$('#add_auth')
                });
              })
              $('.view-auth').click(function () {
                var company = $(this).attr('compnayid')
               /* _this.$http.apiGet(HOST,config.getUrlTrans({type:'GetCompanyApiDatas',companyId:company,page:1,limit}))*/
                layer.open({
                  type: 1,
                  title: '查看与该公司相关联的授权信息',
                  skin: _this.$store.state.skin,
                  area: ['920px','450px'],
                  closeBtn: 1,
                  shadeClose: true,
                  content: $('#view_auth'),
                  end:function () {
                    $('#view_auth').css({display:'none'});
                  },
                  btn:['确定'],
                  yes:function () {
                    layer.closeAll();
                  },
                  success:function () {
                    table.render({
                    elem: '#view_auth_table',
                       //GetCompanyApiDatas
                    url: HOST+'?type=GetCompanyAppNameDatas&companyId='+company,
                    loading: false,
                    even: true,
                    response: {
                    statusCode: 200
                    },
                    headers:{
                      'Authorization':_this.Authorization
                    },
                    cols: [[
                      {field: 'appName',title: '应用名称',resize:true},
                      {field: 'jkxlh', title: '应用授权码'},
                      {field:'operateSet',title:'查看详情',width:100,templet:function (d) {
                          return '<a appId="'+d.appId+'" href="javascript:;" class="color-blue font12 tdu auth-view-details">查看详情</a>'
                        }}
                    ]],
                      page: true,
                      done: function (res) {
                        $('.auth-view-details').bind('click',function () {
                          var appId = $(this).attr('appid')
                          layer.open({
                            type: 1,
                            title: '查看与该公司所相关联应用的授权信息',
                            skin: _this.$store.state.skin,
                            area: ['920px', '450px'],
                            closeBtn: 1,
                            shade:['0.000001','#000'],
                            shadeClose: true,
                            content: $('#auth_view_details'),
                            end: function () {
                              $('#auth_view_details').css({display: 'none'});
                            },
                            btn: ['确定'],
                            success:function(){
                              var where = {
                                type:'GetCompanyApiDatas',
                                companyId:company,
                                appId:appId
                              }
                              table.render({
                                elem: '#auth_view_details_table',
                                url: HOST,
                                loading: true,
                                even: true,
                                where:where,
                                response: {
                                  statusCode: 200
                                },
                                limit:20,
                                limits:[20,40,60,80,90],
                                headers:{
                                  'Authorization':_this.Authorization
                                },
                                cols: [[
                                  {field: 'companyName', title: '第三方名称'},
                                  {field: 'isIp', title: '检测ip'},
                                  {field: 'count', title: '调用次数'},
                                  {field: 'vehicleName', title: '车管所名'},
                                  {field: 'yhdm', title: '用户代码'},
                                  {field: 'jbr', title: '经办人'},
                                  {field: 'vehicleName', title: '车管所名'},
                                  {field: 'cljg', title: '处理机构'},
                                ]],
                                page: false,
                                done: function (res) {
                                }
                              });
                            },
                            yes: function () {
                              layer.closeAll();
                            },
                            btn2:function () {
                              ;
                            }
                          });
                        })
                      }
                  });
                  }
                })
              })
            }
          });
          layui.laydate.render({
            elem:'#add_auth_time',
            theme: 'grid',
            calendar: true,
            mark: {
              '0-12-31': '跨年'
            },
            range: true,
            done:function (val) {
              $('.add-auth-validityTime').find('input').val(val)
            }
          })
        });
      },
      edit_ad:function(e){
        var _this = this;
        e.preventDefault();
        layer.open({
          type:1,
          area:['550px','380px'],
          title:'添加授权应用信息',
          closeBtn:1,
          shadeClose:true,
          skin:'layui-layer-molv',
          btn:['确定添加','取消'],
          end:function(){
            $('#edit_popup').css('display','none');
          },
          yes:function(){

          },
          content:$('#edit_popup')
        });
      },
    },
    mounted() {
      let _this = this;
      _this.areaData = jsonData;
      layui.config({
        base: './static/layui/extend/picker/'
      });
      layui.use(['form', 'layer', 'laydate','element','picker'], function () {
        let form = layui.form, layer = layui.layer, laydate = layui.laydate,element=layui.element,picker=layui.picker;
        form.render('select')
        _this.picker=picker;
        var area_datas = new picker();
        area_datas.set({
          elem: '#add_auth_area',
          data: _this.areaData,
          canSearch: true,
          codeConfig: {
            code: 440104,
            type: 3
          }
        }).render();
        laydate.render({
          elem:'#auth_stime',
          value:_this.addFormData.stime,
          theme:'grid',
          type:'datetime',
          format:'yyyy/MM/dd HH:mm:ss',
          calendar:true,
          mark:{
            '0-12-31':'跨年',
            '0-0-01':'月初'
          },
          done:function(val){
            _this.addFormData.stime = val;
          }
        });
        laydate.render({
          elem:'#auth_etime',
          value:_this.addFormData.etime,
          theme:'grid',
          type:'datetime',
          format:'yyyy/MM/dd HH:mm:ss',
          calendar:true,
          mark:{
            '0-12-31':'跨年',
            '0-0-01':'月初'
          },
          done:function (val) {
            _this.addFormData.etime=val;
          }
        });
        laydate.render({
          elem:'#auth_edit_stime',
          value:_this.editFormData.stime,
          theme:'grid',
          type:'datetime',
          calendar:true,
          format:'yyyy/MM/dd HH:mm:ss',
          mark:{
            '0-12-31':'跨年',
            '0-0-01':'月初'
          },
          done:function (val) {
            _this.editFormData.stime=val;
          }
        });
        laydate.render({
          elem:'#auth_edit_etime',
          value:_this.editFormData.etime,
          theme:'grid',
          calendar:true,
          type:'datetime',
          format:'yyyy/MM/dd HH:mm:ss',
          mark:{
            '0-12-31':'跨年',
            '0-0-01':'月初'
          },
          done:function (val) {
            _this.editFormData.etime=val;
          }
        });
        _this.tableRender();
      });
    },
    beforeUpdate() {

    },
    updated() {
      this.$nextTick(function () {
        layui.use(['form'],function () {
          layui.form.render();
        })
      })
    }
  };
</script>


