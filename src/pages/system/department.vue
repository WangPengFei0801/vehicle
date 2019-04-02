<style scoped>
  .content-top {
    background: #fff;
    margin-top: 40px;
  }
  .content-bottom {
    box-shadow:0 1px 4px 1px rgba(29, 29, 39, 0.15);
    background-color: #fff;
    padding: 10px;
  }
</style>
<style>
  #area .layui-input-inline:nth-of-type(3) {
    margin-right: 0;
  }
</style>
<template>
  <div>
    <div class="content">
      <div class="content-top clearfix">
        <div class="current-page">
          <p><i class="iconfont">&#xe643;</i>部门列表</p>
        </div>
        <form action="" class="layui-form layui-form-pane fl pl20">
          <div class="layui-form-item">
            <div class="layui-inline">
              <label class="layui-form-label">功能名称</label>
              <div class="layui-input-block">
                <input type="text" placeholder="请输入功能名称" class="layui-input" v-model="searchFormData.func_name">
              </div>
            </div>
          </div>
          <button class="layui-btn layui-btn-sm vt" id="search"><i class="layui-icon">&#xe615;</i>搜索</button>
          <button class="layui-btn layui-btn-sm layui-btn-primary vt" @click="reset($event)"><i class="layui-icon">&#xe669;</i>重置</button>
        </form>
        <div class="content-top-right fr">
          <button @click.stop="add($event)" class="layui-btn layui-btn-sm"><i class="layui-icon">&#xe654;</i>添加</button>
        </div>
      </div>
      <div class="content-bottom">
        <table class="layui-hide" lay-filter="department_table" id="department_table"></table>
        <script type="text/html" id="department_table_toolbar">
            <p class="col-red">提示：该表格展示的是所有部门列表</p>
        </script>
      </div>
    </div>
    <div id="add_department" style="display: none;">
      <form action="" class="layui-form layui-form-pane">
        <div class="layui-form-item d_i_b">
          <label class="layui-form-label">处理机构</label>
          <div class="layui-input-block w-160">
            <input type="text" name="serial-number" required  v-model="addFormData.cljg"  placeholder="输入处理机构" class="layui-input">
          </div>
        </div>
        <div class="layui-form-item d_i_b ml-30">
          <label class="layui-form-label">部门编码</label>
          <div class="layui-input-block w-160">
            <input type="text" name="serial-number" required  v-model="addFormData.glbm"  placeholder="部门的编码" class="layui-input">
          </div>
        </div>
        <div class="layui-form-item d_i_b ml-30">
          <label class="layui-form-label">部门简称</label>
          <div class="layui-input-block w-160">
            <input type="text" name="serial-number" required  v-model="addFormData.shortName"  placeholder="部门的简写名称" class="layui-input">
          </div>
        </div>
        <div class="layui-form-item d_i_b">
          <label class="layui-form-label">部门全称</label>
          <div class="layui-input-block w-160">
            <input type="text" name="serial-number" required  v-model="addFormData.fullName"  placeholder="部门的全称" class="layui-input">
          </div>
        </div>
        <div class="layui-form-item d_i_b ml-30">
          <label class="layui-form-label">单位编码</label>
          <div class="layui-input-block w-160">
            <input type="text" name="serial-number" required  v-model="addFormData.zsdw"  placeholder="执收单位编码" class="layui-input">
          </div>
        </div>
        <div class="layui-form-item d_i_b ml-30">
          <label class="layui-form-label">商户编号</label>
          <div class="layui-input-block w-160">
            <input type="text" name="serial-number" required  v-model="addFormData.merchantId"  placeholder="商户编号（通联）" class="layui-input">
          </div>
        </div>
        <div class="layui-form-item d_i_b">
          <label class="layui-form-label">商户名称</label>
          <div class="layui-input-block w-160">
            <input type="text" name="serial-number" required  v-model="addFormData.merchantName"  placeholder="商户名称（通联）" class="layui-input">
          </div>
        </div>
        <div class="layui-form-item d_i_b ml-30">
          <label class="layui-form-label">APPID</label>
          <div class="layui-input-block w-160">
            <input type="text" name="serial-number" required  v-model="addFormData.payAppId"  placeholder="appid（通联）" class="layui-input">
          </div>
        </div>
        <div class="layui-form-item d_i_b ml-30">
          <label class="layui-form-label">KEY</label>
          <div class="layui-input-block w-160">
            <input type="text" name="serial-number" required  v-model="addFormData.key"  placeholder="key（通联）" class="layui-input">
          </div>
        </div>
        <div class="layui-form-item d_i_b">
          <label class="layui-form-label">回调url</label>
          <div class="layui-input-block w-160">
            <input type="text" name="serial-number" required  v-model="addFormData.notifyUrl"  placeholder="回调url" class="layui-input">
          </div>
        </div>
        <div class="layui-form-item d_i_b ml-30">
          <label class="layui-form-label">用户代码</label>
          <div class="layui-input-block w-160">
            <input type="text" name="serial-number" required  v-model="addFormData.yhdm"  placeholder="输入用户代码" class="layui-input">
          </div>
        </div>
        <div class="layui-form-item d_i_b ml-30">
          <label class="layui-form-label">部门地址</label>
          <div class="layui-input-block w-160">
            <input type="text" name="serial-number" required  v-model="addFormData.address"  placeholder="输入部门地址" class="layui-input">
          </div>
        </div>
        <div class="layui-form-item d_i_b">
          <label class="layui-form-label">经办人</label>
          <div class="layui-input-block w-160">
            <input type="text" name="serial-number" required  v-model="addFormData.jbr"  placeholder="输入经办人" class="layui-input">
          </div>
        </div>
      </form>
    </div>
    <div id="edit_department" style="display: none;">
      <form action="" class="layui-form layui-form-pane">
        <div class="layui-form-item d_i_b">
          <label class="layui-form-label">id</label>
          <div class="layui-input-block w-160">
            <input type="text" name="serial-number" required  v-model="editFormData.id"  placeholder="id" class="layui-input">
          </div>
        </div>
        <div class="layui-form-item d_i_b ml-30">
          <label class="layui-form-label">部门编码</label>
          <div class="layui-input-block w-160">
            <input type="text" name="serial-number" required  v-model="editFormData.glbm"  placeholder="部门的编码" class="layui-input">
          </div>
        </div>
        <div class="layui-form-item d_i_b ml-30">
          <label class="layui-form-label">部门简称</label>
          <div class="layui-input-block w-160">
            <input type="text" name="serial-number" required  v-model="editFormData.shortName"  placeholder="部门的简写名称" class="layui-input">
          </div>
        </div>
        <div class="layui-form-item d_i_b">
          <label class="layui-form-label">部门全称</label>
          <div class="layui-input-block w-160">
            <input type="text" name="serial-number" required  v-model="editFormData.fullName"  placeholder="部门的全称" class="layui-input">
          </div>
        </div>
        <div class="layui-form-item d_i_b ml-30">
          <label class="layui-form-label">单位编码</label>
          <div class="layui-input-block w-160">
            <input type="text" name="serial-number" required  v-model="editFormData.zsdw"  placeholder="执收单位编码" class="layui-input">
          </div>
        </div>
        <div class="layui-form-item d_i_b ml-30">
          <label class="layui-form-label">商户编号</label>
          <div class="layui-input-block w-160">
            <input type="text" name="serial-number" required  v-model="editFormData.merchantId"  placeholder="商户编号（通联）" class="layui-input">
          </div>
        </div>
        <div class="layui-form-item d_i_b">
          <label class="layui-form-label">商户名称</label>
          <div class="layui-input-block w-160">
            <input type="text" name="serial-number" required  v-model="editFormData.merchantName"  placeholder="商户名称（通联）" class="layui-input">
          </div>
        </div>
        <div class="layui-form-item d_i_b ml-30">
          <label class="layui-form-label">APPID</label>
          <div class="layui-input-block w-160">
            <input type="text" name="serial-number" required  v-model="editFormData.payAppId"  placeholder="appid（通联）" class="layui-input">
          </div>
        </div>
        <div class="layui-form-item d_i_b ml-30">
          <label class="layui-form-label">KEY</label>
          <div class="layui-input-block w-160">
            <input type="text" name="serial-number" required  v-model="editFormData.key"  placeholder="key（通联）" class="layui-input">
          </div>
        </div>
        <div class="layui-form-item d_i_b">
          <label class="layui-form-label">回调url</label>
          <div class="layui-input-block w-160">
            <input type="text" name="serial-number" required  v-model="editFormData.notifyUrl"  placeholder="回调url" class="layui-input">
          </div>
        </div>
        <div class="layui-form-item d_i_b ml-30">
          <label class="layui-form-label">用户代码</label>
          <div class="layui-input-block w-160">
            <input type="text" name="serial-number" required  v-model="editFormData.yhdm"  placeholder="输入用户代码" class="layui-input">
          </div>
        </div>
        <div class="layui-form-item d_i_b ml-30">
          <label class="layui-form-label">部门地址</label>
          <div class="layui-input-block w-160">
            <input type="text" name="serial-number" required  v-model="editFormData.address"  placeholder="输入部门地址" class="layui-input">
          </div>
        </div>
        <div class="layui-form-item d_i_b">
          <label class="layui-form-label">经办人</label>
          <div class="layui-input-block w-160">
            <input type="text" name="serial-number" required  v-model="editFormData.jbr"  placeholder="输入经办人" class="layui-input">
          </div>
        </div>
        <div class="layui-form-item d_i_b ml-30">
          <label class="layui-form-label">处理机构</label>
          <div class="layui-input-block w-160">
            <input type="text" name="serial-number" required  v-model="editFormData.cljg"  placeholder="输入处理机构" class="layui-input">
          </div>
        </div>
        <div class="layui-form-item d_i_b ml-30">
          <label class="layui-form-label">单选框</label>
          <div class="layui-input-block w-162">
            <input lay-filter="dataState" type="radio" name="dataState" value="1" title="启用" checked>
            <input lay-filter="dataState" type="radio" name="dataState" value="0" title="禁用">
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  import config from '@/config';
  import OperatorUtils from '../../utils/OperatorUtils';
  export default {
    name: 'device',
    data() {
      return {
        msg: 'device',
        arr: [{name: 'device', value: 'device'}],
        areaData: '',
        table:'',
        picker:'',
        Authorization:OperatorUtils.getData('token'),
        addFormData:{
          "glbm":'',
          "shortName":'',
          "fullName":'',
          "zsdw":'',
          "merchantId":'',
          "merchantName":'',
          "payAppId":'',
          "key":'',
          "notifyUrl":'',
          "yhdm":'',
          "address":'',
          "jbr":'',
          "cljg":'',
    },
        editFormData:{
          "glbm":'',
          "shortName":'',
          "fullName":'',
          "zsdw":'',
          "merchantId":'',
          "merchantName":'',
          "payAppId":'',
          "key":'',
          "notifyUrl":'',
          "yhdm":'',
          "address":'',
          "jbr":'',
          "cljg":'',
          dataState:'',
          id:''
        },
        searchFormData:{
          func_name:''
        }
      };
    },
    methods: {
      add: function (e) {
        e.preventDefault();
        var $$ = layui.jquery;
        var _this = this;
        layer.open({
          type: 1,
          title: '添加部门',
          area: '802px',
          closeBtn: 1,
          scrollbar: false,
          shadeClose: true,
          skin: 'layui-layer-molv',
          content: $$('#add_department'),
          btn: ['确定添加', '取消'],
          yes: function (index) {
           var tipMsg = '添加成功'
           var data = {
             "dtype": "add",
             "glbm":_this.addFormData.glbm,
             "shortName":_this.addFormData.shortName,
             "fullName":_this.addFormData.fullName,
             "zsdw":_this.addFormData.zsdw,
             "merchantId":_this.addFormData.merchantId,
             "merchantName":_this.addFormData.merchantName,
             "payAppId":_this.addFormData.payAppId,
             "key":_this.addFormData.key,
             "notifyUrl":_this.addFormData.notifyUrl,
             "yhdm":_this.addFormData.yhdm,
             "address":_this.addFormData.address,
             "jbr":_this.addFormData.jbr,
             "cljg":_this.addFormData.cljg
           };
           _this.addAndedit(data,tipMsg)
          },
          btn2: function (index) {
            layer.close(index);
          }
        });
      },
      edit: function () {
        var $$ = layui.jquery;
        var _this = this;
        layer.open({
          type: 1,
          title: ' 编辑部门',
          area: '802px',
          closeBtn: 1,
          scrollbar: false,
          shadeClose: true,
          skin: 'layui-layer-molv',
          content: $$('#edit_department'),
          btn: ['确定编辑', '取消'],
          yes: function (index) {
            var tipMsg = '编辑成功'
            var data = {
              "dtype": "edit",
              "glbm":_this.editFormData.glbm,
              "shortName":_this.editFormData.shortName,
              "fullName":_this.editFormData.fullName,
              "zsdw":_this.editFormData.zsdw,
              "merchantId":_this.editFormData.merchantId,
              "merchantName":_this.editFormData.merchantName,
              "payAppId":_this.editFormData.payAppId,
              "key":_this.editFormData.key,
              "notifyUrl":_this.editFormData.notifyUrl,
              "yhdm":_this.editFormData.yhdm,
              "address":_this.editFormData.address,
              "jbr":_this.editFormData.jbr,
              "cljg":_this.editFormData.cljg,
              id:_this.editFormData.id,
              dataState:_this.editFormData.dataState
            };
            console.log(data);
           _this.addAndedit(data,tipMsg)
          },
          btn2: function (index) {
            layer.close(index);
          }
        });
      },
      tableRender(table){
        var _this = this;
        let url = HOST
       var tableIns= table.render({
          elem: '#department_table',
          checkbox: false,
          url: url,
          limit:20,
          limits:[20,40,50,60,80],
          where:{
            type:'GetDepartmentManagementTableList'
          },
          even: true,
          loading:true,
         toolbar:'#department_table_toolbar',
          response:{
            statusCode:200
          },
         headers:{
           'Authorization':_this.Authorization
         },
          cols: [[
            {field:'id', title: '#',width:60},
            {field:'shortName', title: '部门简称',width:120},
            {field:'zsdw', title: '执行单位',width:120},
            {field:'jbr', title: '经办人',width:80},
            {field:'createTime',title:'创建时间',width:160},
            {field:'updateTime',title:'更新时间',width:160},
            {field:'dataState', title: '状态',width:80},
            {field:'cljg', title: '处理机构',width:120},
            {field:'address', title: '部门地址'},
            {
              field: 'operate','title': '操作', width:80,templet: function (d) {
                return '<button merchantName="'+d.merchantName+'" merchantId="'+d.merchantId+'" cljg="'+d.cljg+'" glbm="'+d.glbm+'" fullName="'+d.fullName+'" payAppId="'+d.payAppId+'"  key="'+d.key+'" cljg="'+d.cljg+'" notifyurl="'+d.notifyUrl+'" id="'+d.id+'" departmentId="'+d.departmentId+'" shortName="'+d.shortName+'" jbr="'+d.jbr+'" address="'+d.address+'" zsdw="'+d.zsdw+'" dataState="'+d.dataState+'" yhdm="'+d.yhdm+'" class="layui-btn layui-btn-sm department-edit-btn">编辑</button>'
              }
            }
          ]],
           page: true,
          done:function(res){
            $('#search').click(function (e) {
              e.preventDefault();
              var reloadData = {
                menuName:_this.searchFormData.func_name,
                type:'GetDevFuncDefault'
              };
              tableIns.reload({
                where:reloadData,
                page:{
                  curr:1
                }
              });
            });
            $('.department-edit-btn').click(function(e){
              e.preventDefault();
              _this.editFormData.id=$(this).attr("id");
              _this.editFormData.glbm=$(this).attr("glbm");
              _this.editFormData.shortName=$(this).attr("shortName");
              _this.editFormData.fullName=$(this).attr("fullName");
              _this.editFormData.zsdw=$(this).attr("zsdw");
              _this.editFormData.merchantId=$(this).attr("merchantId");
              _this.editFormData.merchantName=$(this).attr("merchantName");
              _this.editFormData.payAppId=$(this).attr("payAppId");
              _this.editFormData.key=$(this).attr("key");
              _this.editFormData.notifyUrl=$(this).attr("notifyUrl");
              _this.editFormData.yhdm=$(this).attr("yhdm");
              _this.editFormData.address=$(this).attr("address");
              _this.editFormData.jbr=$(this).attr("jbr");
              _this.editFormData.cljg=$(this).attr("cljg");
              _this.editFormData.dataState = $(this).attr('dataState');
              _this.edit()
            });
            $('td[data-field="dataState"]').children().each(function (val) {
              var value = $(this).text();
              var operate_btn = $(this).parents('td').siblings('td[data-field="8"]').find('.operate-btn');
              if(value==1){
                $(this).html('<span class="abnormal-btn">正常</span>');
              }else if(value==0){
                $(this).html('<span class="normal-btn">异常</span>');
              }
            });
          }
        });
      },
      reset:function (e) {
        e.preventDefault();
        this.searchFormData.dev_id='';
        this.searchFormData.start_time=this.$store.state.dateSel('-')[5];
        this.searchFormData.end_time=this.$store.state.dateSel('-')[4];
      },
      addAndedit(data,msg){
        let type = 'AddAndEditDepartmentData';
        var dataS = data;
        dataS=config.urlTransition(type,dataS);
        this.$http.apiPost(HOST,dataS).then(function (res) {
            let code  = res.code;
            if(code==200){
                layer.msg(msg, {
                  icon: 16
                  ,anim: -1
                  ,fixed: false,
                  time:1200
                });
                window.setTimeout(function () {
                  layer.closeAll();
                  _this.tableRender(table)
                },1500);
              }else {
                layer.msg(res.message);
                window.setTimeout(function(){
                  layer.closeAll();
                },1500);
              }
          });
      }
    },
    mounted() {
      let _this = this;
      layui.use(['form', 'layer', 'table'], function () {
        var form = layui.form;
        var table = layui.table;
        _this.table=table;
        form.on('radio(dataState)',function(data){
          _this.editFormData.dataState = data.value;
        });
        form.render();
        _this.tableRender(_this.table);
      });
    },
  };
</script>

