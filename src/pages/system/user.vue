<style scoped>
  .main-content-top {
    width: 100%;
    height:160px;
  }
  .main-content-top > ul {
    width: 100%;
    height:100%;
    display: flex;
    flex-wrap:nowrap;
    justify-content: space-between;
  }
  .main-content-top > ul > li {
    width: 30%;
    height: 100%;
    background: #fff;
    box-shadow:0 1px 6px -1px rgba(0, 0, 0, 0.15);
    padding: 1.4rem 2rem;
  }
  .main-content-top > ul > li .fr p {
    font-size: 13px;
  }
  .main-content-top > ul > li .fr h3 {
    font-size: 20px;
    font-weight: bold;
  }
  .main-content-top > ul > li  h2{
    margin-top: 1.4rem;
    color: #ccc;
    font-weight: bold;
  }
  .main-content-left {
    float: left;
    min-height: 600px;
    background: #fff;
    box-shadow: 0 1px 6px -1px rgba(0, 0, 0, 0.15);
  }
  .main-content-right {
    width:100%;
    float: right;
    height: auto;
    background: white;
    box-shadow: 0 1px 4px 1px rgba(29, 29, 39, 0.15);
  }
  .main-content-right-middle {
    padding-top: 20px;
    padding-left: 20px;
  }

  .main-content-right-bottom {
    padding-left: 20px;
  }
  .date-icon {
    position: absolute;
    right: 8px;
    top: 8px;
  }
  .add-users-btn {
    position: absolute;
    top: 21px;
    left: 174px;
    z-index: 999;
  }
</style>
<style>
  #distribute_popup_root .layui-table-main table{
    width: 100%;
  }
  #distribute_popup_root .layui-laypage-limits {
    display: none!important;
  }
</style>
<template>
  <div class="main-content clearfix">
    <div class="middle-space"></div>
    <div class="main-content-right">
      <div class="main-content-right-top">
        <p><i class="layui-icon mr-14">&#xe770;</i>{{msg}}</p>
      </div>
      <div class="main-content-right-middle">
        <form class="layui-form layui-form-pane" action="">
          <div class="layui-form-item mr-14">
            <label class="layui-form-label">{{layData.userName}}</label>
            <div class="layui-input-inline">
              <input type="text" name="username"  placeholder="输入姓名或登录号" autocomplete="off" class="layui-input" v-model="formData.username">
            </div>
          </div>
          <div class="layui-form-item mr-14">
            <label class="layui-form-label">{{layData.phone}}</label>
            <div class="layui-input-inline">
              <input type="text" maxlength="11" name="phone"  placeholder="请输入用户手机" id="user_phone" autocomplete="off" class="layui-input" v-model="formData.phone">
            </div>
          </div>
          <div class="layui-form-item mr-14">
            <label class="layui-form-label">账号状态</label>
            <div class="layui-input-block">
              <select  name="interest" lay-filter="account_status" v-model="formData.status">
                <option value="">全部</option>
                <option value="1">正常</option>
                <option value="0">禁用</option>
              </select>
            </div>
          </div>
          <div class="layui-form-item">
            <div class="layui-inline mr2">
              <label class="layui-form-label">创建时间</label>
              <div class="layui-input-block">
                <input type="text" name="date" id="dateSelectF" autocomplete="off" class="layui-input" v-model="formData.start_time" readonly>
                <i class="layui-icon date-icon">&#xe637;</i>
              </div>
            </div>
          </div>
          <pre class="d_i_b mt8">至</pre>
          <div class="layui-form-item mr-14">
            <div class="layui-inline w-120">
              <input type="text" name="date" id="dateSelectS" autocomplete="off" class="layui-input" v-model="formData.end_time" readonly>
              <i class="layui-icon date-icon">&#xe637;</i>
            </div>
          </div>
          <div class="layui-form-item  mr-14">
            <button class="layui-btn layui-btn-sm" lay-filter="search" id="search_btn"><i class="layui-icon">&#xe615;</i>{{search}}</button>
            <button @click="reset($event)" type="button" class="layui-btn layui-btn-sm layui-btn-primary ml-50"><i class="layui-icon">&#xe9aa;</i>{{layData.reset}}</button>
          </div>
          <div class="layui-btn-container pore">
            <button v-show="btnCheck.add==1" @click.stop="add_user($event)" class="layui-btn layui-btn-sm add-users-btn"><i class="layui-icon layui-icon-add-circle"></i>添加新用户</button>
          </div>
        </form>

      </div>
      <div class="main-content-right-bottom">
        <table class="layui-hide" id="user_manger_table" lay-filter="user_manger_table"></table>
        <script v-show="btnCheck.dis_mo==1" type="text/html" id="toolbarDemo">
            <div class="layui-btn-container">
                 <button class="layui-btn layui-btn-sm user-dis-role" lay-event="getSelectData"><i class="layui-icon">&#xe609</i>为用户分配角色</button>
            </div>
         </script>
        <script  type="text/html" id="barDemo">
            <a  class="layui-btn layui-btn-sm" lay-event="edit">编辑</a>
            <a class="layui-btn layui-btn-danger layui-btn-sm" lay-event="del">删除</a>
            <a class="layui-btn layui-btn-warm layui-btn-sm operate-btn" lay-event="stop">停用</a>
        </script>

      </div>
    </div>
    <div id="popup" class="" style="display: none;">
      <form action="" class="layui-form layui-form-pane">
        <div class="layui-form-item display_block">
          <label class="layui-form-label">用户状态</label>
          <div class="layui-input-block w-auto">
            <select id="add_status_set" name="interest" lay-filter="add_status" v-model="addFormData.status">
              <option value="1">正常</option>
              <option value="0">禁用</option>
            </select>
          </div>
        </div>
        <div class="layui-form-item d_i_b">
          <label class="layui-form-label">用户姓名</label>
          <div class="layui-input-block w-160">
            <input type="text" name="username" style="display:none">
            <input type="text" name="username" placeholder="请输入用户姓名" id="add_name" autocomplete="off" class="layui-input" v-model="addFormData.name">
          </div>
        </div>
        <div class="layui-form-item d_i_b ml-40">
            <label class="layui-form-label">用户账号</label>
            <div class="layui-input-block w-160">
              <input type="text" name="account" placeholder="请输入用户账号"  id="add_account" autocomplete="off" class="layui-input" v-model="addFormData.loginname">
          </div>
        </div>
        <div class="layui-form-item d_i_b">
          <label class="layui-form-label">用户手机</label>
          <div class="layui-input-block w-160">
            <input type="text" maxlength="11" name="account" placeholder="请输入用户手机号码"  id="add_phone" autocomplete="off" class="layui-input" v-model="addFormData.phonenumber">
          </div>
        </div>
        <div class="layui-form-item d_i_b ml-40">
            <label for="" class="layui-form-label">用户密码</label>
            <div class="layui-input-block w-160">
              <input type="password" style="display:none;">
              <input type="password" id="add_password" placeholder="请输入用户登录密码" autocomplete="off" class="layui-input" v-model="addFormData.password">
            </div>
        </div>
        <div class="layui-form-item display_block" pane="">
          <label class="layui-form-label">用户性别</label>
          <div class="layui-input-block w-auto" style="min-height: 32px;">
            <input type="radio" name="sex" value="1" title="男" checked="" v-model="addFormData.sex">
            <input type="radio" name="sex" value="0" title="女" v-model="addFormData.sex">
          </div>
        </div>
        <div class="layui-form-item layui-form-text display_block">
          <label  for="" class="layui-form-label pl20">备注(可选)</label>
          <div class="layui-input-block w-auto">
            <textarea rows="2" placeholder="请输入备注(可填可不填)" class="layui-textarea" v-model="addFormData.remark" id="add_user_remark"></textarea>
          </div>
        </div>
        <div class="confrim tac"><button class="layui-btn layui-btn-sm" @click.stop="addSubmit($event)">确定添加</button></div>
      </form>
    </div>
    <div id="edit_popup" style="display: none;">
      <form action="" class="layui-form layui-form-pane">
        <div class="layui-form-item display_block">
          <label class="layui-form-label">标识ID</label>
          <div class="layui-input-block w-auto">
            <input type="text" name="user_code" id="user_code" autocomplete="off" class="layui-input cursor-n bgce" readonly v-model="editFormData.user_code">
          </div>
        </div>
        <div class="layui-form-item d_i_b">
          <label class="layui-form-label">用户状态</label>
          <div class="layui-input-block w-160">
            <select id="user_edit_status_set" name="interest" lay-filter="edit_status" v-model="editFormData.status">
              <option value="1" selected>正常</option>
              <option value="0">禁用</option>
            </select>
          </div>
        </div>
        <div class="layui-form-item d_i_b ml-40" pane="">
          <label class="layui-form-label">用户性别</label>
          <div class="layui-input-block w-160" style="min-height: 32px;">
            <input type="radio" name="sex" value="1" title="男" checked="">
            <input type="radio" name="sex" value="0" title="女">
          </div>
        </div>
        <div class="layui-form-item d_i_b">
          <label class="layui-form-label">用户姓名</label>
          <div class="layui-input-block w-160">
            <input type="text" name="username" placeholder="请输入用户姓名" id="edit_name" autocomplete="off" class="layui-input" v-model="editFormData.name">
          </div>
        </div>
        <div class="layui-form-item d_i_b ml-40">
          <label class="layui-form-label">用户手机</label>
          <div class="layui-input-block w-160">
            <input type="text" maxlength="11" name="account" placeholder="请输入用户手机号码"  id="edit_phone" autocomplete="off" class="layui-input" v-model="editFormData.phonenumber">
          </div>
        </div>
        <div class="layui-form-item d_i_b ">
          <label for="" class="layui-form-label">用户密码</label>
          <div class="layui-input-block w-160">
            <input type="password" id="edit_password" placeholder="请输入用户登录密码" autocomplete="off" class="layui-input" v-model="editFormData.password">
          </div>
        </div>
        <div class="layui-form-item d_i_b ml-40">
          <label class="layui-form-label">登录账号</label>
          <div class="layui-input-block w-160">
            <input type="text"  name="login_account" placeholder=""  autocomplete="off" class="layui-input cursor-n bgce" readonly v-model="editFormData.loginaccount">
          </div>
        </div>
        <div class="layui-form-item layui-form-text display_block">
          <label  for="" class="layui-form-label" style="padding-left: 20px">备注(可选)</label>
          <div class="layui-input-block w-auto">
            <textarea rows="2" placeholder="请输入备注(可填可不填)" class="layui-textarea" id="edit_remark" v-model="editFormData.remark"></textarea>
          </div>
        </div>
        <div class="confrim tac"><button class="layui-btn layui-btn-sm" @click.stop="editSubmit($event)">确定编辑</button></div>
      </form>
    </div>
    <div id="distribute_popup" style="display: none;">
      <div id="distribute_popup_root"></div>
      <div class="tac mt12">
        <button class="layui-btn layui-btn-sm" id="confirm_distribute">确定分配</button>
      </div>
    </div>
  </div>
</template>
<script>
  import countUp from 'countup';
  import config from '@/config';
  import OperatorUtils from '../../utils/OperatorUtils';
  import md5 from 'js-md5';
  export default {
    name: 'user',
    data() {
      return {
        msg: '用户管理',
        arr: [{name: 'user', value: 'user'}],
        iconfont:'iconfont icon-user mr4',
        accountStatus:'',
        start:0,
        end:55000,
        personCount:10000,
        orderCount:9999,
        search:'搜索',
        btnData:'',
        current_host: window.location.hostname,
        Authorization:OperatorUtils.getData('token'),
        options:{
          useEasing:true,
          useGrouping:true,
          separation:',',
          decimal:'.'
        },
        layData:{
          getSelectData:'获取选中行数据',
          getCheckLength:'获取选中条目',
          isAll:'是否全选',
          phone:'手机号码',
          userName:'账号姓名',
          allType:'全部类型',
          reset:'重置'
        },
        icon:{
          search:'iconfont icon-sousuo mr4',
          allType:'iconfont mr4'
        },
        formData:{
          username:'',
          start_time:this.$store.state.dateSel('-')[5],
          end_time:this.$store.state.dateSel('-')[0],
          phone:'',
          status:''
        },
        addFormData:{
          name:'',
          loginname:'',
          password:'',
          phonenumber: '',
          sex:'1',
          status:'1',
          remark:'',
          level:OperatorUtils.getData('userInfo').ROLEID
        },
        editFormData:{
          user_code:'',
          loginaccount:'',
          name:'',
          phonenumber:'',
          password:'',
          sex:'1',
          status:'1',
          remark:''
        },
        btnCheck:{
          dis_mo:'',
          dis_re:'',
          stop:'',
          add:'',
          delete:'',
          change:'',
          search:''
        }
      };
    },
    methods: {
      showMsg: function () {
        console.log(this.msg);
      },
      addSubmit:function(e){
        e.preventDefault();
        var _this = this;
        if(this.addFormData.name==''){
          layer.tips('必填项！', '#add_name', {
            tips: [1, '#459eff'],
            time: 1500
          });
          return;
        }
        if(this.addFormData.loginname==''){
          layer.tips('必填项！', '#add_account', {
            tips: [1, '#459eff'],
            time: 1500
          });
          return;
        }
        if(this.addFormData.phonenumber==''){
          layer.tips('必填项！', '#add_phone', {
            tips: [1, '#459eff'],
            time: 1500
          });
          return;
        }
        var type = 'UserCreate';
        var createcode = OperatorUtils.getData('userInfo');
        var data = {
          name:this.addFormData.name,
          createcode:createcode.USER_CODE,
          loginname:this.addFormData.loginname,
          password:md5(this.addFormData.password),
          phonenumber:this.addFormData.phonenumber,
          sex:this.addFormData.sex,
          status:this.addFormData.status,
          remark:this.addFormData.remark,
          level:this.addFormData.level
        };
        data = config.urlTransition(type,data);
        let url = HOST;
       this.$http.apiPost(url,data).then(function(res){
          var code = res.code;
          if(code==200){
            layer.msg('添加成功',{time:1300});
            setTimeout(function () {
              _this.tableRender();
              layer.closeAll();
            },1500);
          }
        });
      },
      editSubmit:function(e){
        e.preventDefault();
        var _this = this;
        if(this.editFormData.name==''){
          layer.tips('必填项！', '#edit_name', {
            tips: [1, '#459eff'],
            time: 1500
          });
          return;
        }
        if(this.editFormData.phonenumber==''){
          layer.tips('必填项！', '#edit_phone', {
            tips: [1, '#459eff'],
            time: 1500
          });
          return;
        }
        if(this.editFormData.phonenumber.length!=11){
          layer.tips('长度不对！', '#edit_phone', {
            tips: [1, '#459eff'],
            time: 1500
          });
          return;
        }
        if(this.editFormData.password==''){
          layer.tips('必填项！', '#edit_password', {
            tips: [1, '#459eff'],
            time: 1500
          });
          return;
        }
        let type = 'UpdateUser';
        var data = {
          usercode:this.editFormData.user_code,
          password:this.editFormData.password,
          phonenumber:this.editFormData.phonenumber,
          sex:this.editFormData.sex,
          status:this.editFormData.status,
          name:this.editFormData.name,
          remark:this.editFormData.remark
        };
        data=config.urlTransition(type,data);
        this.$http.apiPost(HOST,data).then(function (res) {
          let code = res.code;
          if(code==200){
            layer.msg('编辑成功',{time:1200});
            setTimeout(function () {
              layer.closeAll();
              _this.tableRender()
            })

          }else{
            layer.msg('failed');
          }
        });
      },
      tableRender:function(url){
        var _this = this;
        layui.config({
          base:'./static/layui/extend/transfer/'
        }).use(['table','form','transfer'],function(){
          var table = layui.table;
          var form = layui.form;
          var transfer = layui.transfer;
          var table_url = HOST+'?type=GetUserTable';
          var tableIns = table.render({
            elem: '#user_manger_table',
            url:table_url,
            toolbar: '#toolbarDemo',
            loading:true,
            even:true,
            where:{
              starttime:_this.formData.start_time,
              endtime:_this.formData.end_time
            },
            limit:20,
            limits:[20,40,50,60,80],
            headers:{
              'Authorization':_this.Authorization
            },
            title: '用户数据表',
            response:{
              statusCode:200
            },
            cols: [[
              {type: 'checkbox', fixed: 'left',style:'background:#f4f4f4'},
              {field:'ID', title:'ID',width:90},
              {field:'LOGINNAME', title:'登录账号',width:140},
              {field:'NAME', title:'用户姓名',width:140},
              {field:'PHONENUMBER', title:'手机号码',width:140},
              {field:'SEX', title:'性别',width:80},
              {field:'STATUS', title:'账号状态',width:100},
              {field:'CREATE_TIME', title:'创建时间'},
              {filed:'operate',fixed: 'right', name:'test',title:'操作',width:200, toolbar: '#barDemo'}
            ]],
            done:function(res){
             layer.closeAll('loading');
             var delete_collage = $('.layui-btn[lay-event="del"]');
             var edit_collage = $('.layui-btn[lay-event="edit"]');
             var stop_collage = $('.layui-btn[lay-event="stop"]');
             console.log(_this.btnCheck)
              setTimeout(function () {
                if(_this.btnCheck.delete==1){
                  delete_collage.css({'display':'inline-block'});
                }else{
                  delete_collage.css({display:'none'});
                }
                if(_this.btnCheck.change==1){
                  edit_collage.css({'display':'inline-block'});
                }else{
                  edit_collage.css({display:'none'});
                }
                if(_this.btnCheck.stop==1){
                  stop_collage.css({'display':'inline-block'});
                }else{
                  stop_collage.css({display:'none'});
                }
                if(_this.btnCheck.change!=1&&_this.btnCheck.edit!=1&&_this.btnCheck.stop!=1){
                  $('td[data-field="8"],th[data-field="8"]').css({display:'none'})
                }
              },0)

              form.render()
              $('td[data-field="SEX"]').children().each(function (val) {
                var value = $(this).text();
                value==1? $(this).html('男'): $(this).html('女');
              });
              $('td[data-field="NAME"]').children().each(function (val) {
                var value = $(this).text();
                if(value==''){
                  $(this).html('<span class="col-red">未录入</span>');
                }
              });
              $('td[data-field="STATUS"]').children().each(function (val) {
                var value = $(this).text();
                var operate_btn = $(this).parents('td').siblings('td[data-field="8"]').find('.operate-btn');
                if(value==0){
                  $(this).html('<span style="color: #fa5555; padding: 2px 6px; border: 1px solid rgba(135,158,5,.2);background-color: rgba(235,158,5,.1);border-radius:4px">禁用</span>');
                  operate_btn.text('启用').css({background:'rgb(0, 186, 152)'});
                }else if(value==1){
                  $(this).html('<span style="color: #eb9e05; padding: 2px 6px; border: 1px solid rgba(135,158,5,.2);background-color: rgba(235,158,5,.1);border-radius:4px">启用</span>');
                  operate_btn.text('停用').css({'background':'rgb(145, 184, 0)'});
                }
              });
            },
            page: true,
            id:'user_table'
          });
          //头工具栏事件
          table.on('toolbar(user_manger_table)', function(obj){
            var checkStatus = table.checkStatus(obj.config.id);
            let events = obj.event;
            let baseConfig = {'page':true,'limit':10,height:460};
            let cols = [{type: 'radio',width:100,title:'选择'},{field:'ROLE_NAME', title: '角色身份',width:150}];
            if(events=='getSelectData'){
              var data = checkStatus.data;
              var length = data.length;
              if(length==0){
                layer.msg('请至少选中一个用户');
                return;
              }
              if(length>1){
                layer.msg('最多同时对一个用户进行编辑');
                return;
              }
              var user_id = data[0].USER_CODE;
              var data = config.getUrlTrans({type:'GetAllRole',userid:user_id});
              var dataAno = config.getUrlTrans({type:'GetUserRole',userid:user_id});
              /*layer.load(2);*/
              _this.$http.apiGet(HOST,dataAno).then(function (res) {
                let request_code = res.code;
                if(request_code==200){
                  let request_data = res.data;
                  _this.$http.apiGet(HOST,data).then(function (res) {
                    let code = res.code;
                    if(code==200){
                      let dataL = res.data;
                      layer.closeAll('loading');
                      let tb_s = transfer.render({
                        elem:'#distribute_popup_root',
                        cols:cols,
                        data:[dataL,request_data],
                        tabConfig:baseConfig,
                        done:function () {
                          layer.msg('success');
                        }
                      });
                      layer.open({
                        type:1,
                        title:'分配角色',
                        area:['1000px','600px'],
                        shadeClose:true,
                        skin:_this.$store.state.skin,
                        closeBtn:1,
                        success:function(){
                          var sum = 0;
                          $('#confirm_distribute').click(function (e) {
                            e.stopPropagation();e.preventDefault();
                            var get_data = transfer.get(tb_s,'r');
                            let user_code =get_data[0].ID;
                            let select_user_id = user_id;
                            let set_user_type = 'SetUserRole';
                            var data = config.urlTransition(set_user_type,{usercode:select_user_id,roleid:user_code});
                            _this.$http.apiPost(HOST,data).then(function (res) {
                              let code = res.code;
                              if(code==200){
                                sum+=1;
                                if(sum>1){
                                  return false;
                                }
                                layer.msg('设置成功');
                                setTimeout(function(){
                                  layer.closeAll();
                                  return false;
                                },1500)
                              }else {
                                layer.msg(res.message);
                              }
                              return ;
                            });
                          });
                        },
                        content:$('#distribute_popup'),
                        end:function () {
                          $('#distribute_popup').css({'display':'none'});
                        }
                      });
                    }else {
                      layer.closeAll('loading');
                      layer.msg(res.message);
                    }
                  });
                }
              });
            }
          });
          //监听行工具事件
          table.on('tool(user_manger_table)', function(obj){
            if(obj.event === 'del'){
              let type= 'DeleteUser';
              var data = {
                usercode:obj.data.USER_CODE
              };
              data = config.urlTransition(type,data);
              var dataReset = {};
              dataReset.data=data;
              layer.confirm('确定要删除吗?',{skin:_this.$store.state.skin}, function(index){
                _this.$http.apiDelete(HOST,dataReset).then(function (res) {
                  var code = res.code;
                  if(code==200){
                    layer.msg('删除成功');
                    setTimeout(function () {
                      obj.del();
                      layer.close(index);
                    },500);
                  }else {
                    layer.msg('删除失败');
                  }
                });

              });
            } else if(obj.event === 'edit'){
              form.render();
              $('#user_code').val(obj.data.USER_CODE);
              _this.editFormData.user_code=obj.data.USER_CODE;
              _this.editFormData.loginaccount=obj.data.LOGINNAME;
              _this.editFormData.name = obj.data.NAME;
              _this.editFormData.phonenumber = obj.data.PHONENUMBER;
              layer.open({
                type:1,
                shadeClose:true,
                area:['550px','420px'],
                skin:_this.$store.state.skin,
                title:'编辑',
                content:$('#edit_popup'),
                end:function(){
                  $('#edit_popup').css({display:'none'});
                },
                closeBtn:1
              });
            }else if(obj.event=='stop'){
              let elem = this;
              let user_code = obj.data.USER_CODE;
              let type = 'D_EnableUser';
              let status = obj.data.STATUS==0?1:0;
              var data = config.urlTransition(type,{usercode:user_code,status:status});
              var operate_status = '';
              var text = $(elem).text();
              if(text=='停用'){operate_status='启用';}else{operate_status='停用';}
              layer.load(1);
               layer.confirm('您确定要'+text+'该用户吗？',{skin:_this.$store.state.skin,title:text+'提示'}, function(index){
                  _this.$http.apiPost(HOST,data).then(function (res) {
                    var code = res.code;
                    if(code==200){
                      layer.msg('已'+text+'该用户');
                      $(elem).text(operate_status);
                      _this.tableRender();
                    }else {
                      layer.msg(data.message);
                      layer.closeAll('loading');
                    }

                  });
                },function () {
                 layer.closeAll('loading');
               });
            }
          });
          /*layui表格的数据重载*/
          $('#search_btn').click(function (e) {
            e.preventDefault();
            var table_reload_data ={
              name:_this.formData.username,
              phonenumber:_this.formData.phone,
              status:_this.formData.status,
              starttime:_this.formData.start_time,
              endtime:_this.formData.end_time
            };
            if(table_reload_data.phonenumber!=''){
              if(table_reload_data.phonenumber.length!=11){
                layer.tips('号码长度不对', '#user_phone', {
                  tips: [1, '#459eff'],
                  time: 1500
                });
                return;
              }
            }
            tableIns.reload({
              where:table_reload_data,
              page:{
                curr:1
              }
            });
          });
        });

      },
      add_user:function(e){
        e.preventDefault();
        layer.open({
          type:1,
          area:['550px','410px'],
          title:'添加新用户',
          closeBtn:1,
          shadeClose:true,
          success(){
            $('#add_account,#add_password').val('')
            layer.msg($('#add_account').val())
          },
          skin:'layui-layer-molv',
          end:function(){
           $('#popup').css('display','none');
          },
          content:$('#popup')
        });
      },
      reset:function(e){
        e.preventDefault();
        this.formData.username='';
        this.formData.status='';
        this.formData.start_time=this.$store.state.dateSel('-')[5];
        this.formData.end_time=this.$store.state.dateSel('-')[3];
        this.formData.phone='';
      },
      showBtnBox:function () {
      }
    },
    computed: {
      showNum: function () {

      }
    },
    mounted() {
      let _this = this;
       // console.log(this.$store.state.current_id)
       // var current_id = $('.router-link-active > p').attr('name');
        var current_id = this.$store.state.current_id;
        var role_id = OperatorUtils.getData('userInfo').ROLEID;
        var data = {
          type:'GetMenuBtn',
          rid:role_id,
          mid:current_id
        };
        data=config.getUrlTrans(data);
        this.$http.apiGet(HOST,data).then(function (res) {
          var data = res.data;
          _this.btnCheck.dis_mo=data[0].check;
          _this.btnCheck.add=data[1].check;
          _this.btnCheck.delete=data[2].check;
          _this.btnCheck.change=data[3].check;
          _this.btnCheck.search=data[4].check;
          _this.btnCheck.stop=data[5].check;
        });


      /*this.$nextTick(function(){
       let count = new countUp(this.$refs.countUp,0,this.end,0,2.5,this.options)
        if(!count.error){
          count.start()
        }
        let personCount =  new countUp(this.$refs.personCount,0,this.personCount,0,2.5,this.options)
        if(!personCount.error){
          personCount.start();
        }
        let orderCount =  new countUp(this.$refs.orderCount,0,this.orderCount,0,2.5,this.options)
        if(!orderCount.error){
          orderCount.start();
        }
      })*/
      layui.use(['form', 'layer', 'laydate'], function () {
        let form = layui.form,layer = layui.layer,laydate = layui.laydate;
        form.render();
        form.on('select(account_status)',function (data) {
            var val = data.value;
            _this.formData.status=val;
        });
        form.on('select(add_status)',function (data) {
          var val = data.value;
          _this.addFormData.status = val;
        });
        form.on('radio',function (data) {
          var value = data.value;
          _this.addFormData.sex=value;
        });
        form.on('select(edit_status)',function (data) {
          var val = data.value;
          _this.editFormData.status=val;
        });
        laydate.render({
          elem:'#dateSelectF',
          value:_this.formData.start_time,
          theme:'grid',
          calendar:true,
          max:0,
          mark:{
            '0-12-31':'跨年',
            '0-0-01':'月初'
          },
          done:function(val){
            _this.formData.start_time = val;
          }
        });
        laydate.render({
          elem:'#dateSelectS',
          value:_this.formData.end_time,
          theme:'grid',
          calendar:true,
          mark:{
            '0-12-31':'跨年',
            '0-0-01':'月初'
          },
          max:0,
          done:function (val) {
            _this.formData.end_time=val;
          }
        });
        _this.tableRender();
      });
    },
    beforeUpdate() {

    },
    updated() {

    },
    watch:{
      $route(){
       layui.use('form',function(){
         var form = layui.form;
         form.render();
       });
      }
    },
    created(){

    }
  };
</script>
