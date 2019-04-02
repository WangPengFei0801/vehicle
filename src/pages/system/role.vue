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

  .main-content-body-left-bottom {
    padding-top: 10px;
  }
  .main-content-right-bottom{
    padding: 15px;
  }
  .layui-colla-title {
    position: relative;
    height: 36px;
    line-height: 36px;
    padding: 0 15px 0 35px;
    color: #333;
    background-color: #ffff;
    cursor: pointer;
    font-size: 13px;
    overflow: hidden;
    font-weight: bold;
  }
  .layui-colla-content {
    font-size: 12px;
    padding-top: 0;
  }
  .layui-form-checkbox span {
    font-size: 12px;
  }
  #resource .layui-table td {
    border-width: 1px;
    padding: 3px 15px;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap
  }
  .left-child,.right-child {
    display: inline-block;
  }
  .left-child {
    width: 120px;
  }
</style>
<style>
  #distribute_modules .layui-form-checkbox span {
    font-size: 12px;
    line-height: 1.1;
  }
  #resource .layui-laypage-limits {
    display: none;
  }


  #resource .layui-table {
    width: 100%;
  }
  #distribute_modules .colla-content-child{
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: space-between;
  }

  #distribute_modules .colla-content-child > div:nth-child(1){
    width: 24%;
  }
  #distribute_modules .colla-content-child > div:nth-child(2){
    width: 75%;
    text-align: right;
  }
</style>
<template>
  <div class="main-content">
    <div class="main-content-header">
      <form class="layui-form layui-form-pane ar clearfix" action="">
        <div class="layui-form-item fl ml-30">
          <div class="layui-input-inline mr0">
            <input type="text" name="username" id="role_name" placeholder="请输入角色身份" autocomplete="off"
                   class="layui-input" v-model="searchData.msg">
          </div>
          <button class="layui-btn layui-btn-sm" id="role_search"><i class="layui-icon">&#xe615;</i>搜索</button>
          <button class="layui-btn layui-btn-sm layui-btn-primary ml-16" id="reset" @click="reset($event)"><i class="layui-icon">&#xe669;</i>重置</button>
        </div>
        <div class="layui-form-item">
          <button v-show="roleBtnCheck.add==1" class="layui-btn layui-btn-sm" id="add" @click.stop="add($event)"><i class="mr-4"></i>添加</button>
        </div>
      </form>
    </div>
    <div class="middle-space"></div>
    <div class="main-content-body">
      <div class="main-content-body-right">
        <div class="main-content-body-right-top">
          <p><i class="iconfont mr-6">&#xe6fc;</i>角色分类</p>
        </div>
        <div class="main-content-right-bottom">
          <table class="layui-hide" id="role_table" lay-filter="role_table"></table>
           <script type="text/html" id="toolbarSet">
            <div class="layui-btn-container">
              <button class="layui-btn layui-btn-sm mr-20 hide" lay-event="getCheckData"><i class="layui-icon">&#xe609</i>为角色分配资源</button>
              <button class="layui-btn layui-btn-sm hide" lay-event="dis_m"><i class="layui-icon">&#xe609</i>为角色分配模块</button>
            </div>
         </script>
        </div>
      </div>
    </div>
    <div class="main-content-footer">

    </div>
    <div id="add_content" ref="add_content" class="hide">
      <form action="" class="layui-form layui-form-pane">
        <div class="layui-form-item display_block">
          <label class="layui-form-label">角色名称</label>
          <div class="layui-input-block w-auto">
            <input type="text" name="title" autocomplete="off" placeholder="请输入角色名称" class="layui-input" v-model="addFormData.role_name">
          </div>
        </div>
        <div class="layui-form-item display_block">
          <label class="layui-form-label">状态</label>
          <div class="layui-input-block w-auto">
            <select name="add_status" id="add_status" lay-filter="add_status" v-model="addFormData.status">
              <option value=""></option>
              <option value="1">正常</option>
              <option value="0" selected="">禁用</option>
            </select>
          </div>
        </div>
        <div class="layui-form-item layui-form-text display_block">
          <label  for="" class="layui-form-label pl20">备注(可选)</label>
          <div class="layui-input-block w-auto">
            <textarea rows="2" placeholder="请输入备注(可填可不填)" class="layui-textarea" v-model="addFormData.role_remark" id="add_role_remark"></textarea>
          </div>
        </div>
        <div class="tac"><button @click="confirm_add($event)" class="layui-btn layui-btn-sm">确定添加</button></div>
      </form>
    </div>
    <div id="edit_content" ref="edit_content" class="hide">edit</div>
    <div id="distribute_resource" class="hide">
      <div id="resource">
        <!--<table class="layui-hide" id="resource_table" lay-filter="resource_table"></table>-->
        <table class="layui-table" id="distribute_resource_table">
          <colgroup>
            <col width="70">
            <col width="250">
            <col width="150">
            <col width="150">
            <col>
          </colgroup>
          <thead>
          <tr>
            <th><div class="layui-form"><input type="checkbox" id="switch_all"   name="open" lay-skin="switch" lay-filter="switchAll" lay-text="ON|OFF"></div></th>
            <th>ID</th>
            <th>权限名称</th>
            <th>所属应用</th>
            <th>标识</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(val,index) in tableData" :key="index" v-show="index>pageStart&&index<pageEnd">
            <td><div class="layui-form"><input type="checkbox" :checked="val.check==1" name="open" lay-skin="switch" lay-filter="switchTest" lay-text="ON|OFF"></div></td>
            <td>{{val.ID}}</td>
            <td>{{val.RESOURCE_NAME}}</td>
            <td>{{val.BELONG}}</td>
            <td>{{val.MARK}}</td>
          </tr>
          </tbody>
        </table>
        <div id="pagination"></div>
      </div>
    </div>
    <div id="distribute_modules" class="hide">
      <div class="layui-collapse" lay-filter="modules" lay-accordion>
        <div class="layui-colla-item" v-for="(val,index) in formData" :key="index">
          <h2 class="layui-colla-title">{{val.mname}}</h2>
          <div class="layui-colla-content" :class="index==0?'layui-show':''">
            <div class="colla-content-child">
              <form action="" class="layui-form">
                <div class="layui-form-item display_block mb5" v-for="(valS,indexS) in val.children" :key="indexS">
                  <div class="left-child">
                    <input type="checkbox" :checked="valS.check" lay-filter="leftCheckbox" name="left-checkbox" :parent_id="valS.parent_id" :value="valS.mid" class="modules-left-checkbox"  v-bind:title="valS.mname" lay-skin="primary">
                  </div>
                  <div class="right-child">
                   <input type="checkbox" lay-filter="rightCheckbox" v-for="(valT,indexT) in valS.btnlist" :key="indexT" name="right-checkbox" :value="valT.bid" class="modules-right-checkbox" :checked="valT.check"  v-bind:title="valT.bname" lay-skin="primary">
                  </div>

                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="popup" style="display: none;">
      <form action="" class="layui-form layui-form-pane">
        <div class="layui-form-item display_block">
          <label class="layui-form-label">角色标识</label>
          <div class="layui-input-block w-auto">
            <input type="text" name="role_id"  readonly autocomplete="off" class="layui-input cursor-n bgce" v-model="editData.id">
          </div>
        </div>
        <div class="layui-form-item d_i_b">
          <label class="layui-form-label">用户状态</label>
          <div class="layui-input-block w-160">
            <select id="edit_status_set" name="interest" lay-filter="edit_status" v-model="editData.status">
            </select>
          </div>
        </div>
        <div class="layui-form-item fr">
          <label class="layui-form-label">角色身份</label>
          <div class="layui-input-block w-160">
            <input type="text" name="username"  placeholder="输入角色身份" autocomplete="off" class="layui-input" v-model="editData.role_name">
          </div>
        </div>
      <div class="layui-form-item layui-form-text display_block">
          <label class="layui-form-label pl20">角色备注(可选)</label>
          <div class="block w-auto">
            <textarea rows="2" placeholder="请输入备注(可填可不填)" class="layui-textarea" v-model="editData.remark" id="add_remark"></textarea>
          </div>
        </div>
        <div class="tac">
          <button class="confirm-edit layui-btn layui-btn-sm" @click="confirm_edit($event)">确定编辑</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  import config from '@/config';
  import OperatorUtils from '../../utils/OperatorUtils';
  export default {
    name: 'role',
    data() {
      return {
        msg: 'role',
        arr: [{name: 'role', value: 'role'}],
        Authorization:OperatorUtils.getData('token'),
        tableData:[],
        totalPage:'',
        pageEnd:10,
        pageStart:0,
        itemLength:'',
        pageCollage:[],
        rightBtnArr:[],
        modules_all_select:[],
        modules_simple_select:[],
        layData: {
          search: '搜索输入'
        },
        icon: {
          search: 'iconfont icon-sousuo mr4',
          allType: 'iconfont icon-tubiao-loudoutu mr4',
          iconfont: 'iconfont',
          add: 'icon-iconfontadd',
          edit: 'icon-xiugai',
          del: 'icon-quxiao'
        },
        formData:'',
        searchData: {
          msg: ''
        },
        editData:{
          id:'',
          status:'',
          role_name:'',
          remark:''
        },
        addFormData: {
          role_name:'',
          status:'',
          role_remark:'',
          level:OperatorUtils.getData('userInfo').ROLEID
        },
        roleBtnCheck:{
          dis_mo:'',
          dis_res:'',
          stop:'',
          add:'',
          delete:'',
          change:'',
          search:''
        }
      };
    },
    methods: {
      prePage(event){

      },
      add: function (e) {
        e.preventDefault();
        var _this = this;
        layui.use(['layer', 'form'], function () {
          var layer = layui.layer;
          var form = layui.form;
          form.render();
          var $ = layui.$;
          layer.open({
            type: 1,
            title: '添加角色',
            skin:_this.$store.state.skin,
            area: ['500px', '320px'],
            closeBtn: 1,
            shadeClose: true,
            content: $('#add_content')
          });
        });
      },
      confirm_add(e){
        e.preventDefault();
        var _this = this;
        if(this.addFormData.status==''){
          layer.tips('必选项！', $('#add_status +div'), {
            tips: [1, '#459eff'],
            time: 1500
          });
          return;
        }
        let type = 'RoleAdd';
        var data = {
          rolename:this.addFormData.role_name,
          status:this.addFormData.status,
          roleremark:this.addFormData.role_remark,
          level:this.addFormData.level
        };
        data = config.urlTransition(type,data);
        layer.load(2);
        this.$http.apiPost(HOST,data).then(function (res) {
          let code = res.code;
          if(code==200){
            layer.closeAll();
            layer.msg('添加成功',{time:1000});
            setTimeout(function () {
              _this.tableRender();
            },1000);
          }else {
            layer.closeAll();
            layer.msg(res.message);
          }
        });
      },
      edit: function (e) {
        e.preventDefault();
        layui.use(['layer', 'form'], function () {
          e.preventDefault();
          var layer = layui.layer;
          var form = layui.form;
          var $ = layui.$;
          layer.open({
            type: 1,
            title: '编辑角色',
            area: ['500px', '300px'],
            closeBtn: 1,
            shadeClose: true,
            skin: 'layui-layer-molv',
            content: $('#edit_content')
          });
        });
      },
      confirm_edit:function(e){
        e.preventDefault();
        let type = 'RoleEdit';
        let _this = this;
        var data = {
          id:this.editData.id,
          rolename:this.editData.role_name,
          roleremark:this.editData.remark,
          status:this.editData.status
        };
        data = config.urlTransition(type,data);
        layer.load(1);
        this.$http.apiPost(HOST,data).then(function (res) {
          let code = res.code;
          if(code==200){
            layer.closeAll();
            layer.msg('修改成功',{time:1000});
            setTimeout(function () {
              _this.tableRender();
            },1000);
          }else {
            layer.msg(res.message);
          }
        });
      },
      reset: function (e) {
          e.preventDefault();
          this.searchData.msg='';
      },
      tableRender: function () {
        var _this = this;
        let type = 'GetRoleTable';
        var data = {
          type: type
        };
        layui.use(['table','form'], function () {
          var table = layui.table;
          var form = layui.form;
          form.on('select(add_status)',function (data) {
            var value = data.value;
            _this.addFormData.status=value;
          });
          var tableIns = table.render({
            elem: '#role_table',
            url: HOST,
            loading: true,
            even: true,
            where: data,
            toolbar: '#toolbarSet',
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
              {type: 'radio',style:'background:#f4f4f4',title:'选择'},
              {field: 'MY_ROWNUM', title: '#',width:80},
              {field: 'ROLE_NAME', title: '角色身份',width:160},
              {field: 'CREATE_TIME', title: '创建时间',width:170},
              {field: 'UPDATE_TIME', title: '更新时间',width:170},
              {field: 'STATUS', title: '状态',width:120},
              {field: 'ROLE_REMARK', title: '角色备注'},
              {
                field: 'operate', title: '操作',width:180, templet: function (d) {
                  return '<button remark="'+d.ROLE_REMARK+'" identity="'+d.ROLE_NAME+'" status="'+d.STATUS+'" value="'+d.ID+'" class="layui-btn-sm layui-btn operate-edit">编辑</button><button identity="'+d.ROLE_NAME+'" stauts="'+d.STATUS+'" value="'+d.ID+'" class="layui-btn-sm layui-btn layui-btn-danger operate-del">删除</button><button identity="'+d.ROLE_NAME+'" status="'+d.STATUS+'" value="'+d.ID+'" class="layui-btn-sm layui-btn operate-btn layui-btn-primary">停用</button>';
                }
              }
            ]],
            page: true,
            done: function (res) {
              layer.closeAll('loading');
              var dis_res = $('.layui-btn[lay-event="getCheckData"]');
              var dis_mo = $('.layui-btn[lay-event="dis_m"]');
              setTimeout(function () {
                if(_this.roleBtnCheck.dis_re==1){
                  dis_res.removeClass('hide').css({display:'inline-block'})
                }else{
                  dis_res.removeClass('hide').css({display:'none'})
                }
                if(_this.roleBtnCheck.dis_mo==1){
                  dis_mo.removeClass('hide').css({display:'inline-block'})
                }else{
                  dis_mo.removeClass('hide').css({display:'none'})
                }
                if(_this.roleBtnCheck.change==1){
                  $('.operate-edit').css({display:'inine-block'})
                }else{
                  $('.operate-edit').css({display:'none'})
                }
                if(_this.roleBtnCheck.stop==1){
                  $('.operate-btn').css({display:'inline-block'})
                }else{
                  $('.operate-btn').css({display:'none'})
                }
                if(_this.roleBtnCheck.delete==1){
                  $('.operate-del').css({display:'inline-block'})
                }else{
                  $('.operate-del').css({display:'none'})
                }
                if(_this.roleBtnCheck.change!=1&&_this.roleBtnCheck.delete!=1&&_this.roleBtnCheck.stop!=1){
                  $('td[data-field="operate"],th[data-field="operate"]').css({display:'none'})
                }
              },0)
              $('td[data-field=\'STATUS\']').children().each(function (val) {
                var value = $(this).text();
                value==1? $(this).html('<span class="normal-btn">正常</span>'): $(this).html('<span class="abnormal-btn">停用</span>');
              });
              $('td[data-field=\'operate\']').children('').each(function (val) {
                var elem = $(this).find('.operate-btn');
                if(elem.attr('status')==0){
                  elem.text('启用');
                }else  if(elem.attr('status')==1){
                  elem.text('停用');
                }
              });
              $('td[data-field=\'UPDATE_TIME\']').children().each(function (val) {
                var value = $(this).text();
                if(!value){$(this).html('<span class="">未查询到该更新时间</span>');}
              });
              $('td[data-field=\'ROLE_REMARK\']').children().each(function (val) {
                var value = $(this).text();
                if(!value){$(this).html('<span class="">角色无备注，可以选择对角色重新编辑····</span>');}
              });
              $('#role_search').click(function (e) {
                e.preventDefault();
                var table_reload_data = {
                  rolename:_this.searchData.msg,
                  type:type
                };
                tableIns.reload({
                  where:table_reload_data,
                  page:{
                    curr:1
                  }
                });
              });
              $('.operate-edit').click(function () {
                _this.editData.id = $(this).attr('value');
                _this.editData.role_name = $(this).attr('identity');
                _this.editData.remark = $(this).attr('remark');
                let status = $(this).attr('status');
                _this.editData.status=status;
                var str;
                if(status==0){
                   str = '<option value="1">正常</option>'+'<option value="0" selected>禁用</option>';
                }else if(status==1){
                   str = '<option value="1" selected>正常</option>'+'<option value="0" >禁用</option>';
                }
                $('#edit_status_set').html(str);
                form.render('select');
                form.on('select(edit_status)',function (data) {
                  var value = data.value;
                  _this.editData.status = value;
                });
                layer.open({
                  type:1,
                  shadeClose:true,
                  closeBtn:1,
                  skin:_this.$store.state.skin,
                  area:['550px','340px'],
                  title:'编辑角色',
                  content:$('#popup'),
                  end:function () {
                    $('#popup').css({display:'none'});
                  }
                });
              });
              $('.operate-del').click(function () {
                var id = $(this).attr('value');
                let type = 'RoleDel';
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
                      layer.msg('删除成功',{time:1200});
                      setTimeout(function () {
                        layer.closeAll();
                        _this.tableRender();
                      },1500)
                    }else {
                      layer.msg(res.message,{time:1200});
                      setTimeout(function () {
                        layer.closeAll();
                        _this.tableRender();
                      },1500)
                    }
                  });
                }, function(index){
                    layer.closeAll();
                });
              });
              $('.operate-btn').click(function (e) {
                e.preventDefault();
                let $this = $(this)
                var status = $(this).attr('status')==0?1:0;
                var ids = $(this).val();
                let type = "RoleD_Enable";
                var text = $(this).text();
                var operate_status = null;
                if(text=='停用'){operate_status='启用'}else{operate_status='停用'};
                var data = config.urlTransition(type,{id:ids,status:status});
                layer.confirm('您确定要'+text+'该用户吗？',{skin:_this.$store.state.skin,title:text+'提示'}, function(index){
                  _this.$http.apiPost(HOST,data).then(function (res) {
                    var code = res.code;
                    var data  = res.data;
                    if(code==200){
                      layer.msg('已'+text+'该用户',{time:5000});
                      $this.text(operate_status)
                      $this.parents('td').siblings('td[data-field="STATUS"]').find('span').text(text)
                    }else {
                      layer.msg(data.message);
                      layer.closeAll('loading')
                    }
                  })
                },function () {
                  layer.closeAll('loading')
                })
              })
            }
          });
          table.on('toolbar(role_table)', function(obj){
            var checkStatus = table.checkStatus(obj.config.id);
            let events = obj.event;
            if(events=='getCheckData'){
              var data = checkStatus.data;
              var length = data.length;
                if(length==0){
                   layer.msg('请至少选中一个角色');
                   return;
                 }
                 if(length>1){
                   layer.msg('最多同时对一个角色进行编辑');
                   return;
                 }else {
                   var user_id = data[0].ID;
                   var currentRole = OperatorUtils.getData('userInfo').ROLEID;
                   var urlSet  = HOST+'?type=GetRoleResourceTable'+'&checkroleid='+user_id+'&roleid='+currentRole+'&page=1&limit=99999';
                   var $$ = layui.$;
                  _this.$http.apiGet(urlSet).then(function (res) {
                    if(res.code==200){
                      _this.tableData = res.data;
                      layui.use('laypage',function () {
                        var laypage = layui.laypage;
                        laypage.render({
                          elem:'pagination',
                          count:res.count,
                          layout: ['count', 'prev', 'page', 'next', 'limit', 'refresh', 'skip'],
                          jump: function (obj, first) {
                            var cur = obj.curr;
                            _this.pageStart = cur*10-10;
                            _this.pageEnd = cur*10;
                            if(_this.pageEnd>res.count){
                              _this.pageEnd=res.count;
                            }
                            setTimeout(function () {
                              var elems = [];
                              var trs = $('#resource tbody tr')
                              $.each(trs,function () {
                                if($(this).css('display')!='none'){
                                  var curSelect = $(this).find('div.layui-form-switch')
                                  if(curSelect.hasClass('layui-form-onswitch')){
                                    elems.push($(this))
                                  }
                                }
                              });
                             _this.itemLength= elems.length
                             if(elems.length<9){
                               $('input[lay-filter="switchAll"]').prop('checked',false);
                               form.render()
                             }else {
                               $('input[lay-filter="switchAll"]').prop('checked',true);
                               form.render()
                             }
                            },0)
                          }
                        })
                      })
                    }
                  })
                   layer.open({
                     type: 1,
                     title: '为角色分配资源',
                     area: ['1000px', '610px'],
                     closeBtn: 1,
                     shadeClose: true,
                     skin: 'layui-layer-molv',
                     content: $$('#distribute_resource'),
                     btn:['确定','取消'],
                     success:function(){
                       _this.modules_all_select=[];
                    /*   form.on('checkbox',function (data) {
                         var currentStatus = data.elem.checked;
                         data.elem=$(data.elem)
                         var currentName=data.elem.attr('lay-filter');
                         if(currentStatus==true){
                           if(currentName){
                             $("#resource td[data-field='ID']").children().each(function (val) {
                               var value = $(this).text();
                              _this.modules_all_select.push(value);
                             })
                           }else {
                             data.elem=$(data.elem);
                             var ids = data.elem.parents('td').next().find('div').text();
                            _this.modules_simple_select.push(ids);
                           }
                         }

                       })*/
                     },
                     yes:function () {
                       var tds = $('#resource td:nth-of-type(1)');
                       var resourceType = 'SetRoleResource';
                       var resourceArr=[];
                       $.each(tds, function (val, index) {
                         var curItem = $(this).find('div.layui-form-switch');
                         if(curItem.hasClass('layui-form-onswitch')){
                           resourceArr.push($(this).next('td').text())
                         }
                         //console.log($(this).find('input').parents('td').next('td').text());
                       });
                       if(resourceArr.length<1){
                         layer.msg('请至少选择一个资源')
                         return;
                       }else {
                         var data = {
                           roleid:user_id,
                           resourceid:resourceArr
                         }
                         data=config.urlTransition(resourceType,data)
                         console.log(data);
                          $.ajax({
                            url:HOST,
                            dataType:'json',
                            data:JSON.stringify(data),
                            type:'POST',
                            headers:{
                              'Content-Type': 'application/json,charset=utf-8',
                              'Accept': 'application/json',
                              'Authorization': _this.Authorization
                            },
                            beforeSend:function(){
                              layer.load(1, {
                                shade: [0.1, '#fff']
                              });
                            },
                            success:function(res){
                              var code = res.code;
                              if(code==200){
                                layer.msg('设置资源成功', {
                                  icon: 6
                                });
                                setTimeout(function () {
                                  layer.closeAll();
                                },600);
                              }else {
                                layer.msg(res.message);
                                setTimeout(function () {
                                  layer.closeAll();
                                },600);
                              }
                            },
                            complete:function(xmlHttps){
                               layer.closeAll('loading')
                            }
                          });
                       }
                     },
                     end:function () {
                       layer.msg('end')
                       /*----------------------弹窗关闭后恢复所有的初始状态---------------------------*/
                       form.render('checkbox');
                     }
                   });
                 }
            }else if(events=='dis_m'){
             var data = checkStatus.data;
              var length = data.length;
              var roleid = OperatorUtils.getData('userInfo').ROLEID;
              let dis_type = 'GetRoleMenbtnTable';
              if(length==0){
                layer.msg('请至少选中一个角色');
                return;
              }else {
                var current_select_id = data[0].ID;
                var dataSet = config.getUrlTrans({type:"GetRoleMenbtnTable",roleid:roleid,checkroleid:current_select_id});
                _this.$http.apiGet(HOST,dataSet).then(function (res) {
                  let code = res.code;
                  if(code==200){
                    var data = res.data;
                    _this.formData = data;
                  }
                })
                form.on('checkbox(leftCheckbox)',function (data) {
                  var statusCur = data.elem.checked;
                  var child = $(data.elem).parents('.left-child').siblings('.right-child').find("input:checkbox[name='right-checkbox']");
                  var childS = $(data.elem).parents('.left-child').siblings('.right-child').find(".layui-form-checkbox");
                  if(statusCur==true){
                      child.prop('checked',true);
                      form.render();
                  }else {
                    child.prop('checked',false) ;
                    form.render();
                  }
                })
                form.on('checkbox(rightCheckbox)',function (data) {
                  var statusCur = data.elem.checked;
                  var child = $(data.elem).parents('.right-child').siblings('.left-child').find("input:checkbox[name='left-checkbox']");
                  if(statusCur==true){
                    _this.rightBtnArr.push($(data.elem));
                    if(_this.rightBtnArr.length>0){
                      child.prop('checked',true);
                      form.render();
                    }
                  }else if(statusCur==false){
                    var selectArr = [];
                    var curElem = $(data.elem).siblings(".layui-form-checkbox");
                    $.each(curElem,function (val,index) {
                      if($(this).hasClass('layui-form-checked')){
                        selectArr.push($(this))
                      }
                    })
                   var len = selectArr.length;
                    if(len>0){
                      child.prop('checked',true);
                      form.render();
                    }else {
                      child.prop('checked',false);
                      form.render()
                    }
                  }
                });
                layer.open({
                  type: 1,
                  title: '为角色分配模块',
                  area: ['1080px','650px'],
                  closeBtn: 1,
                  shadeClose: true,
                  skin: 'layui-layer-molv',
                  content: $('#distribute_modules'),
                  btn:['确定分配','取消'],
                  success:function () {

                  },
                  yes:function () {
                    var modules_dataArr = $("input[name='left-checkbox']:checked");
                    //console.log('左边选中的部分：'+JSON.stringify(modules_dataArr))
                    /*modules_dataArr存储的是左侧选中的按钮*/
                   let mod_type ="SetRoleMenuAndBtn";
                    var data = {};
                    var objData ={};
                    data.roleid = current_select_id;
                    data.modules=[];
                    $.each(modules_dataArr,function (val) {
                      var value = $(this).val();
                      var siblings_child = $(this).parents('.left-child').siblings('.right-child').find('input');
                      objData = {
                        "mid":value
                      };
                      objData.btnid=[];
                      $.each(siblings_child,function (index, val) {
                        if($(this).is(":checked")){
                          objData.btnid.push($(this).val())
                        }
                      });
                      data.modules.push(objData)
                    });
                    data=config.urlTransition(mod_type,data);
                     $.ajax({
                       url:'http://192.168.8.74/carauditapi/api',
                       dataType:'json',
                       data:JSON.stringify(data),
                       type:'POST',
                       headers:{
                         'Content-Type': 'application/json,charset=utf-8',
                         'Accept': 'application/json',
                         'Authorization': _this.Authorization
                       },
                       beforeSend:function(){
                         layer.load(1, {
                           shade: [0.1, '#fff']
                         });
                       },
                       success:function(res){
                         var code = res.code;
                         if(code==200){
                            layer.msg('设置资源成功', {
                              icon: 6
                            });
                            setTimeout(function () {
                              layer.closeAll();
                            },1500);
                         }else {
                           layer.msg(res.message);
                           setTimeout(function () {
                             layer.closeAll();
                           },1500);
                         }
                       },
                       complete:function(xmlHttps){

                       }
                     });
                  },
                  end:function () {
                    $('#distribute_modules').css({'display':'none'});
                  }
                });
              }
            }
          });
        });
      }
    },
    computed: {
      showNum: function () {
      },
      layerSet: function (elem) {

      }
    },
    beforeCreate() {

    },
    created() {

    },
    beforeMount() {

    },
    mounted() {
      let _this = this;
      layui.use(['form', 'layer', 'laydate','element'], function () {
        let form = layui.form, layer = layui.layer, laydate = layui.laydate,element=layui.element;
        form.render();
        form.on('switch(switchAll)',function (data) {
          var tds = $('#resource td:nth-of-type(1)');
          var trs = $('#resource tbody tr')
          if(this.checked){
           $.each(tds,function (val,index) {
             if($(this).parent('tr').css('display')!='none'){
              $(this).find('input').prop('checked',true)
               form.render('checkbox')
             }
           })
          }else {
            $.each(tds,function (val,index) {
              if($(this).parent('tr').css('display')!='none'){
                $(this).find('input').prop('checked',false)
                form.render('checkbox')
              }
            })
          }
        });
        form.on('switch(switchTest)',function (data) {
          var currentId = $(this).parents('td').next('td').text()
          if(this.checked){
            console.log(currentId)
          }
        })
        _this.tableRender();
      });
      var current_id = this.$store.current_id;
      var role_id = OperatorUtils.getData('userInfo').ROLEID;
      var data = {
        type:'GetMenuBtn',
        rid:role_id,
        mid:current_id
      };
      data=config.getUrlTrans(data);
      this.$http.apiGet(HOST,data).then(function (res) {
        var data = res.data;
        _this.roleBtnCheck.dis_mo=data[0].check;
        _this.roleBtnCheck.dis_re=data[1].check;
        _this.roleBtnCheck.stop=data[2].check;
        _this.roleBtnCheck.add=data[3].check;
        _this.roleBtnCheck.delete=data[4].check;
        _this.roleBtnCheck.change=data[5].check;
        _this.roleBtnCheck.search=data[6].check;
      });

    },
    beforeUpdate() {

    },
    updated() {
      this.$nextTick(function () {
        layui.use(['form','element'],function () {
          layui.form.render();
          layui.element.render('collapse','modules')
        });
      })
    }
  };
</script>


