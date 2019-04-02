<style scoped>
  .layui-tab-title {
    height: 50px;
  }
  .layui-tab-title li {
    line-height: 50px;
    margin: 0 20px;
  }
  .layui-tab-title .layui-this:after{
    height: 51px;
  }
  .main-content {
    padding-top: 0;
  }
  .content-top {
    padding: 20px;
    background: #fff;
    box-shadow: 0 1px 6px -1px rgba(0, 0, 0, 0.15);
  }
  .layui-tab {
    background-color: #fff;
    box-shadow:0 1px 4px 1px rgba(29, 29, 39, 0.15)
  }
</style>

<template>
  <article class="main-content">
    <div class="middle-space"></div>
    <div class="layui-tab layui-tab-brief" lay-filter="vehicle_tabs">
      <div class="layui-tab-title">
        <li class="layui-this" lay-id="11">未审核</li>
        <li lay-id="22">已审核</li>
        <li lay-id="33">审核未过</li>
      </div>
      <div class="layui-tab-content">
        <div class="layui-tab-item layui-show">
          <div class="content-top clearfix">
            <form action="" class="layui-form layui-form-pane">
              <div class="layui-form-item">
                <label class="layui-form-label">受理时间</label>
                <div class="layui-inline mr0">
                  <div class="layui-input-inline mr0">
                    <input type="text" name="date" id="vehicle_unchecked_start_date" autocomplete="off" class="layui-input" v-model="checkedSearchFormDate.begintime">
                  </div>
                </div>
              </div>
              <pre class="d_i_b mt8 ml-6 mr-6">至</pre>
              <div class="layui-form-item ">
                <div class="layui-inline">
                  <div class="layui-input-inline">
                    <input type="text" id="vehicle_unchecked_end_date" name="date" autocomplete="off" class="layui-input" v-model="checkedSearchFormDate.endtime">
                  </div>
                </div>
              </div>
              <div class="layui-form-item mr-14">
                <label class="layui-form-label">业务类型</label>
                <div class="layui-input-inline ">
                  <select name="interest" lay-filter="filter" v-model="checkedSearchFormDate.btype">
                    <option value=""></option>
                    <option value="0">期满换证</option>
                    <option value="1">遗失补证</option>
                    <option value="2">损毁换证</option>
                    <option value="3">证件转入</option>
                  </select>
                </div>
              </div>
              <div class="layui-form-item mr-14">
                <label class="layui-form-label">身份证号</label>
                <div class="layui-inline mr0">
                  <div class="layui-input-inline ">
                    <input type="text" name="date" placeholder="输入身份证号" id="vehicle_unchecked_card_number" autocomplete="off" class="layui-input" v-model="checkedSearchFormDate.drivingLiceseno">
                  </div>
                </div>
              </div>
              <div class="layui-form-item mr-14">
                <label class="layui-form-label">车牌号</label>
                <div class="layui-inline mr0">
                  <div class="layui-input-inline ">
                    <input type="text" name="date" placeholder="输入车牌号" id="vehicle_unchecked_id_card_number" autocomplete="off" class="layui-input" v-model="checkedSearchFormDate.iscertificateok">
                  </div>
                </div>
              </div>
              <div class="layui-form-item mr-14">
                <label class="layui-form-label">流水号</label>
                <div class="layui-inline mr0">
                  <div class="layui-input-inline ">
                    <input type="text" name="date" placeholder="输入流水号" autocomplete="off" class="layui-input" v-model="checkedSearchFormDate.takeway">
                  </div>
                </div>
              </div>
              <div class="layui-form-item mr-14">
                <label class="layui-form-label">设备编号</label>
                <div class="layui-inline mr0">
                  <div class="layui-input-inline ">
                    <input type="text" name="date" placeholder="输入订单编号" id="vehicle_unchecked_dev_number" autocomplete="off" class="layui-input">
                  </div>
                </div>
              </div>
              <button class="layui-btn layui-btn-sm vt"><i class="layui-icon">&#xe615;</i>查询</button>
              <button class="layui-btn layui-btn-sm layui-btn-primary ml-16 vt" id="vehicle_unchecked_reset"><i class="layui-icon">&#xe669;</i>重置</button>
            </form>
          </div>
          <div class="content-bottom">
            <script type="text/html" id="vehicle_unchecked_table_toolbar">
            <div class="layui-btn-container">
              <button class="layui-btn layui-btn-sm" lay-event="vehicle_unchecked_get_data"><i class="layui-icon">&#xe609</i>导出选择</button>
              <button class="layui-btn layui-btn-sm" lay-event="vehicle_unchecked_get_all_data"><i class="iconfont icon-daochu"></i>导出全部</button>
              <p class="col-red font14">提示：点击右侧详情按钮查看该行驶证详情信息</p>
            </div>
        </script>
            <table class="layui-hide" lay-filter="vehicle_unchecked_table" id="vehicle_unchecked_table"></table>
          </div>
        </div>
        <div class="layui-tab-item">
          <div class="content-top clearfix">
            <form action="" class="layui-form layui-form-pane">
              <div class="layui-form-item">
                <label class="layui-form-label">选择时间</label>
                <div class="layui-inline mr0">
                  <div class="layui-input-inline ">
                    <input type="text" name="date" id="vehicle_checked_start_date" autocomplete="off" class="layui-input">
                  </div>
                </div>
              </div>
              <pre class="d_i_b mt8 ">至</pre>
              <div class="layui-form-item">
                <div class="layui-inline">
                  <div class="layui-input-inline">
                    <input type="text" id="vehicle_checked_end_date" name="date" autocomplete="off" class="layui-input">
                  </div>
                </div>
              </div>
              <div class="layui-form-item">
                <label class="layui-form-label">业务类型</label>
                <div class="layui-input-inline">
                  <select name="interest" lay-filter="filter">
                    <option value=""></option>
                    <option value="0">期满换证</option>
                    <option value="1" selected="">遗失补证</option>
                    <option value="2">损毁换证</option>
                    <option value="3">证件转入</option>
                  </select>
                </div>
              </div>
              <button class="layui-btn layui-btn-sm vt"><i class="layui-icon">&#xe615;</i>查询</button>
            </form>
          </div>
          <div class="content-bottom">
            <script type="text/html" id="vehicle_checked_table_toolbar">
            <div class="layui-btn-container">
              <button class="layui-btn layui-btn-sm" lay-event="vehicle_checked_get_data"><i class="layui-icon">&#xe609</i>导出选择</button>
              <button class="layui-btn layui-btn-sm" lay-event="vehicle_checked_get_all_data"><i class="iconfont icon-daochu"></i>导出全部</button>
              <p class="col-red font14">提示：点击右侧详情按钮查看该行驶证详情信息</p>
            </div>
        </script>
            <table class="layui-hide" lay-filter="vehicle_checked_table" id="vehicle_checked_table"></table>
          </div>
        </div>
        <div class="layui-tab-item">
          <div class="content-top clearfix">
            <form action="" class="layui-form layui-form-pane">
              <div class="layui-form-item">
                <label class="layui-form-label">受理时间</label>
                <div class="layui-inline mr0">
                  <div class="layui-input-inline mr0">
                    <input type="text" name="date" id="vehicle_checked_unsuccess_start_date" autocomplete="off" class="layui-input">
                  </div>
                </div>
              </div>
              <pre class="d_i_b mt8 ml-6 mr-6">至</pre>
              <div class="layui-form-item ">
                <div class="layui-inline">
                  <div class="layui-input-inline">
                    <input type="text" id="vehicle_checked_unsuccess_end_date" name="date" autocomplete="off" class="layui-input">
                  </div>
                </div>
              </div>
              <div class="layui-form-item mr-14">
                <label class="layui-form-label">业务类型</label>
                <div class="layui-input-inline ">
                  <select name="interest" lay-filter="filter">
                    <option value=""></option>
                    <option value="0">期满换证</option>
                    <option value="1" selected="">遗失补证</option>
                    <option value="2">损毁换证</option>
                    <option value="3">证件转入</option>
                  </select>
                </div>
              </div>
              <div class="layui-form-item mr-14">
                <label class="layui-form-label">身份证号</label>
                <div class="layui-inline mr0">
                  <div class="layui-input-inline ">
                    <input type="text" name="date" id="vehicle_checked_unsuccess_card_number" autocomplete="off" class="layui-input">
                  </div>
                </div>
              </div>
              <div class="layui-form-item mr-14">
                <label class="layui-form-label">车牌号</label>
                <div class="layui-inline mr0">
                  <div class="layui-input-inline ">
                    <input type="text" name="date" id="vehicle_checked_unsuccess_id_card_number" autocomplete="off" class="layui-input">
                  </div>
                </div>
              </div>
              <div class="layui-form-item mr-14">
                <label class="layui-form-label">流水号</label>
                <div class="layui-inline mr0">
                  <div class="layui-input-inline ">
                    <input type="text" name="date" autocomplete="off" class="layui-input">
                  </div>
                </div>
              </div>
              <div class="layui-form-item mr-14">
                <label class="layui-form-label">设备编号</label>
                <div class="layui-inline mr0">
                  <div class="layui-input-inline ">
                    <input type="text" name="date" id="vehicle_checked_unsuccess_dev_number" autocomplete="off" class="layui-input">
                  </div>
                </div>
              </div>
              <button class="layui-btn layui-btn-sm vt"><i class="layui-icon">&#xe615;</i>查询</button>
              <button class="layui-btn layui-btn-sm layui-btn-primary ml-16 vt" id="vehicle_checked_unsuccess_reset"><i class="layui-icon">&#xe669;</i>重置</button>
            </form>
          </div>
          <div class="content-bottom">
              <script type="text/html" id="vehicle_checked_unsuccess_table_toolbar">
            <div class="layui-btn-container">
              <button class="layui-btn layui-btn-sm" lay-event="vehicle_checked_unsuccess_get_data"><i class="layui-icon">&#xe609</i>导出选择</button>
              <button class="layui-btn layui-btn-sm" lay-event="vehicle_checked_unsuccess_get_all_data"><i class="iconfont icon-daochu"></i>导出全部</button>
              <p class="col-red font14">提示：点击右侧详情按钮查看该行驶证详情信息</p>
            </div>
        </script>
            <table class="layui-hide" lay-filter = vehicle_checked_unsuccess_table id="vehicle_checked_unsuccess_table"></table>
          </div>
        </div>
      </div>
      <div id="vehicle_unchecked_popup" class="hide">
        <form action="" class="layui-form layui-form-pane">
          <div class="layui-form-item" pane="">
            <ul id="vehicle_unchecked_popup_box">
              <li><input type="checkbox" name="vehicle-unChecked-reason" value="行驶证照片和身份证不符" lay-filter="vehicle_cancel_reason" lay-skin="primary" title="行驶证照片和身份证不符"></li>
              <li><input type="checkbox" name="vehicle-unChecked-reason" value="身份证正面复印件不符合要求" lay-filter="vehicle_cancel_reason" lay-skin="primary" title="身份证正面复印件不符合要求"></li>
              <li><input type="checkbox" name="vehicle-unChecked-reason" value="身份证反面复印件不符合要求" lay-filter="vehicle_cancel_reason" lay-skin="primary" title="身份证反面复印件不符合要求"></li>
              <li><input type="checkbox" name="vehicle-unChecked-reason" value="没有保险凭证复印件" lay-filter="vehicle_cancel_reason" lay-skin="primary" title="没有保险凭证复印件"></li>
              <li><input type="checkbox" name="vehicle-unChecked-reason" value="保险凭证复印件不符合要求" lay-filter="vehicle_cancel_reason" lay-skin="primary" title="保险凭证复印件不符合要求"></li>
            </ul>
          </div>
          <div class="layui-form-item layui-form-text display_block mt12">
            <label class="layui-form-label">其他原因</label>
            <div class="layui-input-block w-auto">
              <textarea v-model="vehicle_cancel_commond" placeholder="请输入内容" class="layui-textarea"></textarea>
            </div>
          </div>
        </form>
      </div>
    </div>
  </article>
</template>

<script>
  import config from '@/config';
  import OperatorUtils from '../../utils/OperatorUtils';
  export default {
    name: "vehicle",
    data() {
      return {
        msg: "vehicle",
        Authorization:OperatorUtils.getData('token'),
        userCode:OperatorUtils.getData('userInfo').USER_CODE,
        arr: [{name: "vehicle", value: "vehicle"}],
        tableIndex:0,
        detailsDatas:'',
        vehicle_cancel_commond:'',
        checkedSearchFormDate:{
          begintime:this.$store.state.dateSel('-')[2],
          endtime:this.$store.state.dateSel('-')[0],
          btype:'',
          drivingLiceseno:'',
          iscertificateok:'',
          takeway:'',
          name:''
        },
        uncheckedSearchFormData:{

        }
      }
    },
    methods: {
      showMsg: function () {
        console.log(this.msg)
      },
      tableRender(table,tableCheckboxUtil){
        var _this = this;
        table.render({
          id:'vehicle_unchecked_table',
          elem:'#vehicle_unchecked_table',
          url:HOST,
          even:true,
          loading:true,
          page:true,
          where:{
            type:'VehicleDataList',
            dtype:0,
            userid:this.userCode
          },
          limit:20,
          limits:[20,40,50,60,80],
          headers:{
            'Authorization':this.Authorization
          },
          response:{
            statusCode:200
          },
          toolbar:'#vehicle_unchecked_table_toolbar',
          cols: [[
            {type:'checkbox'},
            {field:'devId',  title: '设备编号',width:90},
            {field:'name', title: '姓名',width:84},
            {field:'mobile', title: '手机',width:114},
            {field:'idCardNumber', title: '身份者号',width:170},
            {field:'createTime', title: '创建时间',width:170},
            {field:'address', title: '地址'},
            {field:'lock',title:'数据审核',width:182,templet:function (d) {
                return '<button id="'+d.busId+'" class="layui-btn layui-btn-sm vehicle-unchecked mr4">详情</button><button name="'+d.busId+'" class="layui-btn layui-btn-sm Vchecked-allow mr4">通过</button><button name="'+d.busId+'" class="layui-btn layui-btn-sm Vchecked-unallow layui-btn-danger mr4">不过</button>'
             }},
          ]],
          done:function () {
            $('.Vchecked-allow').click(function (e) {
              var $this = $(this);
              e.stopPropagation();
              layer.confirm('确定要通过该条数据？', {
                btn: ['确定','取消'],
                skin:_this.$store.state.skin
              }, function(){
                var type = 'ReviewVehicleData';
                var data = {
                  busid:$this.attr('name'),
                  auditstate: 1
                };
                data=config.urlTransition(type,data);
                _this.$http.apiPost(HOST,data).then(function (res) {
                  let code  = res.code;
                  if(code==200){
                    layer.msg('审核成功');
                    setTimeout(function () {
                      layer.closeAll();
                      _this.tableRender(table)
                    },1500)
                  }else {
                    layer.msg(res.message);
                    layer.closeAll();
                  }
                });
              }, function(index){
                layer.close(index);
              });
            });
            $('.Vchecked-unallow').click(function (e) {
              var $this = $(this);
              e.stopPropagation();
              layer.open({
                type: 1,
                title: '审核未通过原因',
                skin: _this.$store.state.skin,
                area: ['620px', '420px'],
                closeBtn: 1,
                shadeClose: true,
                content: $('#vehicle_unchecked_popup'),
                btn:['确认选择','取消'],
                yes:function(){
                  if(_this.cancel_commond!=''){
                    _this.dataArr+=_this.cancel_commond+';'
                  }
                  var type = 'ReviewVehicleData';
                  var data = {
                    busid:$this.attr('name'),
                    auditstate:2,
                    auditresult:_this.dataArr
                  };
                  data=config.urlTransition(type,data);
                  _this.$http.apiPost(HOST,data).then(function (res) {
                    var code = res.code;
                    if(code==200){
                      layer.msg('审核成功')
                      setTimeout(function () {
                        layer.closeAll();
                      },1500)
                    }
                  });
                },
                end:function () {
                  $('#vehicle_unchecked_popup').css({display:'none'});
                }
              });
            });
            $('.vehicle-unchecked').click(function () {
              var busid = $(this).attr('id');
              _this.$router.push({name: '行驶证 / 行驶证详情',params:{setCode:busid}});
            })
            tableCheckboxUtil.checkedDefault({
              gridId:'driver_unchecked_table',
              fieldName:'billId'
            });
            tableCheckboxUtil.init({
              gridId:'vehicle_unchecked_table',
              filterId:'vehicle_unchecked_table',
              fieldName:'id'
            });
            table.on('toolbar(vehicle_unchecked_table)', function(obj){
              let events = obj.event;
              if(events=='vehicle_unchecked_get_data'){
                var iccollege_f = tableCheckboxUtil.getValue({
                  gridId:'vehicle_unchecked_table'
                });
                var length = iccollege_f.length;
                if(length<1){
                  layer.msg('最少选择一条数据')
                }else {
                  let type = 'ExportVehicleDataList';
                  var str ='';
                  for(var i = 0;i< length; i++){
                    str+=','+iccollege_f[i]
                  }
                  var data = {
                    dtype:0,
                    paramid:str.substring(1)
                  }
                  data=config.urlTransition(type,data);
                 _this.$http.apiPost(HOST,data,{responseType:'arraybuffer'}).then(function (res) {
                    _this.download(res,'未审核')
                  })
                }
              }else if (events=='vehicle_unchecked_get_all_data'){
              _this.$http.apiPost(HOST,{type:'ExportVehicleDataList',data:{dtype:0,paramid:''}},{responseType:'arraybuffer'}).then(function (res) {
                  _this.download(res,'未审核')
                })
              } ;
            });
          }
        })
      },
      checkedTableRender(table,form,tableCheckboxUtil){
        var _this = this;
        table.render({
          id:'vehicle_checked_table',
          elem:'#vehicle_checked_table',
          url:HOST,
          even:true,
          loading:true,
          page:true,
          where:{
            type:'VehicleDataList',
            dtype:1,
            userid:this.userCode
          },
          limit:20,
          limits:[20,40,50,60,80],
          headers:{
            'Authorization':_this.Authorization
          },
          response:{
            statusCode:200
          },
          toolbar:'#vehicle_checked_table_toolbar',
          cols: [[
            {type:'checkbox'},
            {field:'devId',  title: '设备编号',width:90},
            {field:'name', title: '姓名',width:90},
            {field:'mobile', title: '手机',width:120},
            {field:'idCardNumber', title: '驾驶证号',width:170},
            {field:'createTime', title: '创建时间',width:160},
            {field:'switchOption', title: '下发证件',width:100, templet:function (d) {
                return ' <input type="checkbox" value="'+d.busId+'" name="close" lay-skin="switch" lay-filter="switchOption" lay-text="ON|OFF">'
              }},
            {field:'address', title: '地址'},
            {field:'experience', width:90, title: '证件归档',templet:function (d) {
                return '<button name="'+d.busId+'" class="layui-btn layui-btn-sm vCheckedArchive mr4">归档</button>'
              }},
          ]],
          done:function () {
            $(".vCheckedArchive").on('click',function () {
              var $this = $(this);
              layer.confirm('确定要归档该条数据？', {
                btn: ['确定','取消'],
                skin:_this.$store.state.skin
              }, function(){
                var type = 'GuiDVehicleData';
                var data = {
                  id:$this.attr('name')
                };
                data=config.urlTransition(type,data)
                _this.$http.apiPost(HOST,data).then(function (res) {
                  let code  = res.code;
                  if(code==200){
                    layer.msg('归档成功');
                    setTimeout(function () {
                      layer.closeAll();
                    },1500)
                  }else {
                    layer.msg(res.message);
                    layer.closeAll();
                  }
                  _this.checkedTableRender(table,form,tableCheckboxUtil);
                });
              }, function(index){
                layer.close(index);
              });
            })
            form.on('switch(switchOption)', function(dataS){
              var status = this.checked;
              let type = 'FaZVehicleData';
              var data = {
                id:$(this).attr('value')
              };
              data = config.urlTransition(type,data);
              if(status){
                _this.$http.apiPost(HOST,data).then(function (res) {
                  var code = res.code;
                  if(code==200){
                    layer.tips('证件下发成功',dataS.othis);
                    $(dataS.othis).addClass('layui-disabled')
                    form.render();
                  }
                })
              }else {

              }
            });
            form.on('checkbox(vehicle_cancel_reason)',function (data) {
              var value = data.value;
              _this.dataArr+=value+';'
            })
            tableCheckboxUtil.checkedDefault({
              gridId:'vehicle_checked_table',
              fieldName:'id'
            });
            tableCheckboxUtil.init({
              gridId:'vehicle_checked_table',
              filterId:'vehicle_checked_table',
              fieldName:'id'
            });
            table.on('toolbar(vehicle_checked_table)', function(obj){
              let events = obj.event;
              if(events=='vehicle_checked_get_data'){
                var iccollege_s = tableCheckboxUtil.getValue({
                  gridId:'vehicle_checked_table'
                });
                var length = iccollege_s.length;
                if(length<1){
                  layer.msg('最少选择一条数据')
                }else {
                  let type = 'ExportVehicleDataList';
                  var str ='';
                  for(var i = 0;i< length; i++){
                    str+=','+iccollege_s[i]
                  }
                  var data = {
                    dtype:1,
                    paramid:str.substring(1)
                  }
                  data=config.urlTransition(type,data);
                  _this.$http.apiPost(HOST,data,{responseType:'arraybuffer'}).then(function (res) {
                    _this.download(res,'未审核')
                  })
                }
              }else if (events=='vehicle_checked_get_all_data'){
                _this.$http.apiPost(HOST,{type:'ExportVehicleDataList',data:{dtype:1,paramid:''}},{responseType:'arraybuffer'}).then(function (res) {
                  _this.download(res,'未审核')
                })
              };
            });
          }
        })
      },
      unsuccessTableRender(table,tableCheckboxUtil){
        var _this = this;
        table.render({
          id:"vehicle_checked_unsuccess_table",
          elem:'#vehicle_checked_unsuccess_table',
          url:HOST,
          even:true,
          loading:true,
          page:true,
          where:{
            type:'VehicleDataList',
            dtype:2,
            userid:this.userCode
          },
          limit:20,
          limits:[20,40,50,60,80],
          headers:{
            'Authorization':this.Authorization
          },
          response:{
            statusCode:200
          },
          toolbar:'#vehicle_checked_unsuccess_table_toolbar',
          cols: [[
            {type:'checkbox'},
            {field:'devId',  title: '设备编号',width:90},
            {field:'name', title: '姓名',width:90},
            {field:'mobile', title: '手机',width:120},
            {field:'idCardNumber', title: '驾驶证号',width:170},
            {field:'createTime', title: '创建时间',width:160},
            {field:'address', title: '地址'},
            {field:'experience', width:120, title: '操作',templet:function (d) {
                return '<button name="'+d.busId+'" class="layui-btn layui-btn-sm unSuccess-checked mr4">审核通过</button>'
              }},
          ]],
          done:function () {
            $('.unSuccess-checked').click(function () {
              var $this = $(this);
             var type = 'ReviewVehicleData';
             var data = {
               busid:$(this).attr('name'),
               auditstate:1
             };
             data=config.urlTransition(type,data)
              _this.$http.apiPost(HOST,data).then(function (res) {
                var code = res.code;
                if(code==200){
                  layer.msg('审核成功')
                  setTimeout(function () {
                    layer.closeAll();
                  },1500)
                }
                _this.unsuccessTableRender(table)
              })
            })
            tableCheckboxUtil.checkedDefault({
              gridId:'vehicle_checked_unsuccess_table',
              fieldName:'id'
            });
            tableCheckboxUtil.init({
              gridId:'vehicle_checked_unsuccess_table',
              filterId:'vehicle_checked_unsuccess_table',
              fieldName:'id'
            });
            table.on('toolbar(vehicle_checked_unsuccess_table)', function(obj){
              let events = obj.event;
              if(events=='vehicle_checked_unsuccess_get_data'){
                var iccollege_t = tableCheckboxUtil.getValue({
                  gridId:'vehicle_checked_unsuccess_table'
                });
                var length = iccollege_t.length;
                if(length<1){
                  layer.msg('最少选择一条数据')
                }else {
                  let type = 'ExportVehicleDataList';
                  var str ='';
                  for(var i = 0;i< length; i++){
                    str+=','+iccollege_t[i]
                  }
                  var data = {
                    dtype:2,
                    paramid:str.substring(1)
                  }
                  data=config.urlTransition(type,data);
                  _this.$http.apiPost(HOST,data,{responseType:'arraybuffer'}).then(function (res) {
                    _this.download(res,'未审核')
                  })
                }
              }else if (events=='vehicle_checked_unsuccess_get_all_data'){
                _this.$http.apiPost(HOST,{type:'ExportVehicleDataList',data:{dtype:2,paramid:''}},{responseType:'arraybuffer'}).then(function (res) {
                  _this.download(res,'未审核')
                })
              };
            });
          }
        })
      },
      tableOnFirst(table,elem){
        table.on('row('+elem+')', function (obj) {
          var data = obj.data;
          $('.layout-right').children('.personal-pic-msg').remove();
          var str = '';
          str += '<div class="personal-pic-msg"><ul>';
          str += '<li><img class="pic1" src="' + data.idcardphotopath + '" alt="图片相关"></li>';
          str += '<li><img class="pic2" src="' + data.idcardfacepath + '" alt="图片相关"></li>';
          str += '<li><img class="pic3" src="' + data.videophotopath + '" alt="图片相关"></li>';
          str += '<li><img class="pic4" src="' + data.signphotopath + '" alt="图片相关"></li>';
          str += '<li><img class="pic4" src="' + data.pasterpath + '" alt="图片相关"></li>';
          str += '</ul></div>';
          $('.layout-right').append(str);
          $('.personal-pic-msg').addClass('driver-sport').css({'opacity': 1,bottom:0});
        });
      },
      tableOnSecond(table,elem){

      },
      download(res,string){
        if (!res) {
          return
        }
        let blob = new Blob([res],{type:'application/octet-stream'});
        var time = new Date().getTime();
        var filename = string+time+'.xls';
        let url = window.URL.createObjectURL(blob);
        let link = document.createElement('a');
        link.style.display = 'none';
        link.href = url;
        link.setAttribute('download',filename);
        document.body.appendChild(link);
        link.click()
      }
    },
    mounted() {
      var _this = this;
      layui.config({
      base:'./static/layui/extend/tableCheckBoxUtil/'
    }).use(['form', 'layer', 'laydate','table','element','tableCheckBoxUtil'], function () {
        var form = layui.form;
        var layer = layui.layer;
        var laydate = layui.laydate;
        var table = layui.table;
        var element = layui.element;
        var tableCheckBoxUtil = layui.tableCheckBoxUtil;
        form.render();
        element.on('tab(vehicle_tabs)', function(data){
          $('.layui-table-body').mouseleave(function () {
            $('.personal-pic-msg').css({'opacity': '0','display':'none'});
          });
          _this.tableIndex = data.index;
          if(_this.tableIndex==0){
            _this.tableOnFirst(table,'vehicle_unchecked_table');
            _this.tableOnSecond(table,'vehicle_unchecked_table')
          }else if(_this.tableIndex==1){
            _this.tableOnFirst(table,'vehicle_checked_table');
            _this.tableOnSecond(table,'vehicle_checked_table')
          }else if(_this.tableIndex==2){
            _this.tableOnFirst(table,'vehicle_checked_unsuccess_table');
            _this.tableOnSecond(table,'vehicle_checked_unsuccess_table')
          }
        });
       _this.tableRender(table,tableCheckBoxUtil);
       _this.checkedTableRender(table,form,tableCheckBoxUtil);
       _this.unsuccessTableRender(table,tableCheckBoxUtil);
       laydate.render({
         elem: '#vehicle_unchecked_start_date',
         value: _this.$store.state.dateSel('-')[2],
         theme: 'grid',
         calendar: true,
         mark: {
           '0-12-31': '跨年',
           '0-0-01':'月初'
         },
         max: 0,
         done:function (val) {

         }
       });
        laydate.render({
          elem:'#vehicle_unchecked_end_date',
          value:_this.$store.state.dateSel('-')[0],
          theme:'grid',
          calendar:true,
          mark:{
            '0-0-01':'月初',
            '0-12-31':'跨年'
          },
          max:0,
          done:function (val) {

          }
        })
      })
    },
    updated() {
      layui.use('table',function () {
        var table=layui.table;
        table.init();
      })
    },
    created(){

    },
    watch:{
      $route(){

      }
    }
  }
</script>

