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
          <p><i class="iconfont">&#xe643;</i>设备功能</p>
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
          <button @click.stop="add($event)" class="layui-btn layui-btn-sm"><i class="layui-icon">&#xe654;</i>添加功能</button>
        </div>
      </div>
      <div class="content-bottom">
        <table class="layui-hide" lay-filter="func_device_table" id="func_device_table"></table>
        <script type="text/html" id="func_device_table_toolbar">
        <p class="col-red">提示：该表格展示了所有设备的基本功能</p>
        </script>
      </div>
    </div>
    <div id="add_device_func" style="display: none;">
      <form action="" class="layui-form layui-form-pane">
        <div class="layui-form-item display_block">
          <label class="layui-form-label">菜单名称</label>
          <div class="layui-input-block w-auto">
            <input type="text" name="serial-number" required  v-model="addFormData.menu_name"  placeholder="输入菜单名称" class="layui-input">
          </div>
        </div>
        <div class="layui-form-item display_block">
          <label class="layui-form-label">应用编号</label>
          <div class="layui-input-block w-auto">
            <input type="text" name="serial-number" required  v-model="addFormData.app_id"  placeholder="输入应用编号" autocomplete="off" class="layui-input">
          </div>
        </div>
        <div class="layui-form-item display_block mr-30">
          <label class="layui-form-label">菜单值</label>
          <div class="layui-input-block w-auto">
            <input type="text"  v-model="addFormData.menu_value" placeholder="输入菜单值" class="layui-input">
          </div>
        </div>
        <div class="layui-form-item d_i_b mr-30">
          <label class="layui-form-label">菜单代码</label>
          <div class="layui-input-block">
            <input type="text" name="menu_code" v-model="addFormData.menu_code" placeholder="输入菜单代码" autocomplete="off" class="layui-input">
          </div>
        </div>
        <div class="layui-form-item d_i_b ml-34">
          <label class="layui-form-label">菜单类别</label>
          <div class="layui-input-block">
            <input type="text" name="address" lay-verify="menu_type" v-model="addFormData.menu_type" placeholder="输入菜单类别" class="layui-input">
          </div>
        </div>
          <div class="layui-form-item d_i_b mr-30">
            <label class="layui-form-label">菜单状态</label>
            <div class="layui-input-block">
              <select name="interest" lay-filter="func_device_state" v-model="addFormData.menu_state">
                <option value="">请选择</option>
                <option value="0">禁用</option>
                <option value="1" selected="">启用</option>
              </select>
            </div>
        </div>
        <div class="layui-form-item d_i_b ml-34">
          <label class="layui-form-label">菜单等级</label>
          <div class="layui-input-block">
            <select name="interest" lay-filter="func_device_menu_level" v-model="addFormData.menu_level">
              <option value="">请选择</option>
              <option value="0">一级</option>
              <option value="1">二级</option>
              <option value="2">三级</option>
            </select>
          </div>
        </div>
        <div class="layui-form-item layui-form-text display_block">
          <label class="layui-form-label">备注</label>
          <div class="layui-input-block display_block w-auto">
            <textarea placeholder="您可以在这里的输入一些备注(可选)" class="layui-textarea" v-model="addFormData.remark"></textarea>
          </div>
        </div>
        <div>
        </div>
      </form>
    </div>
    <div id="edit_device_func" style="display: none;">
      <form action="" class="layui-form layui-form-pane">
        <div class="layui-form-item display_block">
          <label class="layui-form-label">菜单名称</label>
          <div class="layui-input-block w-auto">
            <input type="text" name="serial-number" required  v-model="editFormData.menu_name"  placeholder=""
                   autocomplete="off" class="layui-input">
          </div>
        </div>
        <div class="layui-form-item display_block">
          <label class="layui-form-label">应用编号</label>
          <div class="layui-input-block w-auto">
            <input type="text" name="edit_func_app_id" required  v-model="editFormData.app_id"  placeholder="" autocomplete="off" class="layui-input">
          </div>
        </div>
        <div class="layui-form-item d_i_b mr-30">
          <label class="layui-form-label">菜单代码</label>
          <div class="layui-input-block">
            <input type="text" name="edit_func_menu_code" v-model="editFormData.menu_code" placeholder="" autocomplete="off" class="layui-input">
          </div>
        </div>
        <div class="layui-form-item d_i_b ml-34">
          <label class="layui-form-label">菜单类别</label>
          <div class="layui-input-block">
            <input type="text" name="address" lay-verify="edit_func_menu_type" v-model="editFormData.menu_type" placeholder="" autocomplete="off" class="layui-input">
          </div>
        </div>
        <div class="layui-form-item d_i_b mr-30">
          <label class="layui-form-label">菜单状态</label>
          <div class="layui-input-block">
            <select name="interest" lay-filter="edit_func_device_state" v-model="editFormData.state">
              <option value="">请选择</option>
              <option value="0">禁用</option>
              <option value="1" selected="">启用</option>
            </select>
          </div>
        </div>
        <div class="layui-form-item d_i_b ml-34">
          <label class="layui-form-label">菜单等级</label>
          <div class="layui-input-block">
            <select name="interest" lay-filter="edit_func_device_menuType" v-model="editFormData.menu_level">
              <option value="">请选择</option>
              <option value="1">一级</option>
              <option value="2">二级</option>
              <option value="3">三级</option>
            </select>
          </div>
        </div>
        <div class="layui-form-item layui-form-text display_block">
          <label class="layui-form-label">备注</label>
          <div class="layui-input-block display_block w-auto">
            <textarea placeholder="您可以在这里的输入一些备注(可选)" class="layui-textarea" v-model="editFormData.remark"></textarea>
          </div>
        </div>
        <div>
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
          menu_name:'',
          menu_code:'',
          menu_type:'',
          menu_level:'',
          menu_state:'',
          app_id:'',
          remark:'',
          menu_value:''
        },
        editFormData:{
          menu_name:'',
          menu_code:'',
          menu_type:'',
          menu_level:'',
          menu_state:'',
          app_id:'',
          remark:'',
          menu_value:''
        },
        searchFormData:{
          func_name:''
        }
      };
    },
    methods: {
      showMsg: function () {
        console.log(this.msg);
      },
      add: function (e) {
        e.preventDefault();
        var $$ = layui.jquery;
        var _this = this;
        layer.open({
          type: 1,
          title: '新增设备基本功能',
          area: ['502px', '480px'],
          closeBtn: 1,
          scrollbar: false,
          shadeClose: true,
          skin: 'layui-layer-molv',
          content: $$('#add_device_func'),
          btn: ['确定添加', '取消'],
          yes: function (index) {
           let type = 'AddDevFuncDefault';
           var data = {
             menuname:_this.addFormData.menu_name,
             menucode:_this.addFormData.menu_code,
             menustate:_this.addFormData.menu_state,
             menulevel:_this.addFormData.menu_level,
             menutype: _this.addFormData.menu_type,
             menuvalue:_this.addFormData.menu_value,
             appid:_this.addFormData.app_id,
             remark:_this.addFormData.remark
           };
            data = config.urlTransition(type,data);
            _this.$http.apiPost(HOST,data).then(function (res) {
              let code  = res.code;
              if(code==200){
                layer.msg('添加完成', {
                  icon: 16
                  ,anim: -1
                  ,fixed: false,
                  time:900
                });
                window.setTimeout(function () {
                  layer.closeAll();
                },1000);
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
      tableRender(table){
        var _this = this;
        let url = HOST
       var tableIns= table.render({
          elem: '#func_device_table',
          checkbox: false,
          url: url,
          limit:20,
          limits:[20,40,50,60,80],
          where:{
            type:'GetDevFuncDefault'
          },
          even: true,
          loading:true,
         toolbar:'#func_device_table_toolbar',
          response:{
            statusCode:200
          },
         headers:{
           'Authorization':_this.Authorization
         },
          cols: [[
            {field:'id', title: '#',width:120},
            {field:'appId', title: '编号',width:140},
            {field:'menuName', title: '功能名称',width:180},
            {field:'createTime',title:'创建时间',width:180},
            {field:'dataState', title: '状态',width:120},
            {field:'remark', title: '备注'},
            {
              field: 'operate','title': '操作', width:140,templet: function (d) {
                return '<button func_id="'+d.id+'" menuLevel="'+d.menuLevel+'" menuName="'+d.menuName+'" menuType="'+d.menuType+'" menuCode="'+d.menuCode+'" menuValue="'+d.menuValue+'" dataState="'+d.dataState+'" menuState="'+d.menuState+'" dataSource="'+d.dataSource+'" appId="'+d.appId+'" class="layui-btn layui-btn-sm func-edit-btn">编辑</button><button func_id="'+d.id+'" class="layui-btn layui-btn-sm layui-btn-danger func-delete-btn">删除</button>';
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
            $('.func-edit-btn').click(function(e){
              e.preventDefault();
             _this.editFormData.menu_name = $(this).attr('func_id');
              _this.editFormData.menu_type = $(this).attr('menuType');
              _this.editFormData.menu_level=$(this).attr('menuLevel');
              _this.editFormData.menu_state=$(this).attr('menuState');
              _this.editFormData.app_id=$(this).attr('appId');
              _this.editFormData.remark=$(this).attr('remark');
              _this.editFormData.menu_value=$(this).attr('menuValue');
              _this.editFormData.menu_code=$(this).attr('menuCode');
              layer.open({
                type: 1,
                title: '修改设备基础功能',
                area: ['504px', '420px'],
                closeBtn: 1,
                scrollbar: false,
                shadeClose: true,
                skin: 'layui-layer-molv',
                content: $('#edit_device_func'),
                btn: ['确定编辑', '取消'],
                yes: function (index) {

                },
                btn2: function (index) {
                  layer.close(index);
                },
                end:function () {
                  $('#edit_device_func').css({display:'none'});
                }
              });
            });
            $('.func-delete-btn').click(function () {
              var id = $(this).attr('func_id');
              let type = 'DelDevFuncDefault';
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
                    layer.msg('删除成功',{time:1300});
                    setTimeout(function () {
                      layer.closeAll();
                    },1500)
                  }else {
                    layer.msg(res.message);
                    setTimeout(function () {
                      layer.closeAll();
                    },1500)
                  }
                  _this.tableRender(table);
                });

              }, function(index){
                layer.close(index);
              });
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
    },
    mounted() {
      let _this = this;
      layui.use(['form', 'layer', 'table'], function () {
        var form = layui.form;
        var table = layui.table;
        _this.table=table;
        form.on('select(func_device_menu_level)',function(data){
          _this.addFormData.menu_level = data.value;
        });
        form.on('select(func_device_state)',function(data){
          _this.addFormData.menu_state = data.value;
        });
        form.render();
        _this.tableRender(_this.table);
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

    }
  };
</script>

