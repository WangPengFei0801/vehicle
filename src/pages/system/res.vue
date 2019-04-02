<style scoped>
  .filter {
    background-color: #fff;
    margin-top: 10px;
    margin-bottom: 20px;
  }

  .table-area {
    background-color: #fff;
    box-shadow:0 1px 4px 1px rgba(29, 29, 39, 0.15);
    padding: 10px;
  }
  #filterAdd {
    position: absolute;
    left: 100px;
    top: 103px;
    z-index: 999;
  }
</style>
<template>
  <div class="main-content" ref="viewBox">
    <div class="main-content-right-body">
      <div class="filter">
        <div class="current-page">
          <p><i class="layui-icon mr-10">&#xe641;</i>{{arr.name}}</p>
        </div>
        <form action="" class="layui-form layui-form-pane pore pl20">
          <div class="layui-form-item">
            <label for="" class="layui-form-label">请选择</label>
            <div class="layui-input-block">
              <select name="interest" lay-filter="aihao">
                <option value="1" name="CarAudit" selected="">CarAudit</option>
              </select>
            </div>
          </div>
          <button class="layui-btn layui-btn-sm" id="filterSearch"><i class="layui-icon mr-4">&#xe615;</i>搜索</button>
          <button @click.stop="add($event)" class="layui-btn layui-btn-sm" id="filterAdd"><i class="layui-icon mr-4">&#xe654;</i>添加</button>
        </form>
      </div>
      <div class="table-area">
        <table class="layui-hide" id="jurisdiction" lay-filter="jurisdiction"></table>
         <script type="text/html" id="toolbar">
            <div class="layui-btn-container">
              <button class="layui-btn layui-btn-sm layui-btn-danger" @click="del($event)" lay-event="getCheckData"><i class="layui-icon">&#xe640;</i>删除</button>
            </div>
         </script>
      </div>
    </div>
    <div class="hide" id="add_content" ref="">
      <form action="" class="layui-form layui-form-pane">
        <div class="layui-form-item display_block">
          <label class="layui-form-label">所属应用</label>
          <div class="layui-input-block w-auto">
            <select id="belong" name="interest" lay-filter="belong" v-model="addFormData.belong">
              <option value="CarAudit" name="1" selected="">CarAudit</option>
            </select>
          </div>
        </div>
        <div class="layui-form-item display_block">
          <label class="layui-form-label">标识</label>
          <div class="layui-input-block w-auto">
            <input type="text" placeholder="请输入符合规范的标识" name="date" id="add_mark" autocomplete="off" class="layui-input" v-model="addFormData.mark">
          </div>
        </div>
        <div class="layui-form-item display_block">
          <label for="" class="layui-form-label">名称</label>
          <div class="layui-input-block w-auto">
            <input type="text" id="res_add_name" autocomplete="off" class="layui-input" placeholder="请输入名称" v-model="addFormData.name">
          </div>
        </div>
        <div class="layui-form-item display_block">
          <label class="layui-form-label">状态</label>
          <div class="layui-input-block w-auto">
            <select name="add_status" lay-filter="status" v-model="addFormData.status">
              <option value="">请选择</option>
              <option value="1">正常</option>
              <option value="0">禁用</option>
            </select>
          </div>
        </div>
        <div class="layui-form-item layui-form-text display_block">
          <label  for="" class="layui-form-label" style="padding-left: 20px">备注</label>
          <div class="layui-input-block w-auto">
            <textarea v-model="addFormData.remark" rows="2" placeholder="请输入内容(想写就写，不想写就不写)" class="layui-textarea"></textarea>
          </div>
        </div>
        <div class="confrim tac"><button @click="confirm_add($event)" class="layui-btn layui-btn-sm">确定添加</button></div>
      </form>
    </div>
      <div id="edit_popup" style="display: none;">
        <form action="" class="layui-form layui-form-pane">
          <div class="layui-form-item display_block">
            <label class="layui-form-label">标识ID</label>
            <div class="layui-input-block w-auto">
              <input type="text" name="user_code" id="user_code" autocomplete="off" class="layui-input cursor-n bgce" readonly v-model="editFormData.id">
            </div>
          </div>
          <div class="layui-form-item d_i_b">
            <label class="layui-form-label">权限标识</label>
            <div class="layui-input-block w-160">
              <input type="text" name="res_edit_name" placeholder="请输入符合规范的标识" id="res_edit_name" autocomplete="off" class="layui-input" v-model="editFormData.mark">
            </div>
          </div>
          <div class="layui-form-item d_i_b ml-40">
            <label class="layui-form-label">名称</label>
            <div class="layui-input-block w-160">
              <input type="text" maxlength="11" name="account" placeholder="请输入符合规范的名称"  id="edit_phone" autocomplete="off" class="layui-input" v-model="editFormData.name">
            </div>
          </div>
          <div class="layui-form-item d_i_b">
            <label class="layui-form-label">权限状态</label>
            <div class="layui-input-block w-160">
              <select id="edit_status_set" name="interest" lay-filter="edit_status" v-model="editFormData.status">
                <option value="1" selected>正常</option>
                <option value="0">禁用</option>
              </select>
            </div>
          </div>
          <div class="layui-form-item d_i_b ml-40">
            <label class="layui-form-label">所属应用</label>
            <div class="layui-input-block w-160">
              <select id="edit_belong_set" name="edit_belong" lay-filter="edit_belong" v-model="editFormData.belong">
                <option value="1" selected>CarAudit</option>
              </select>
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
    <div class="hide" id="delete_content" ref="deleteContent"><button class="layui-btn layui-btn-sm" @click.stop="showMsg">{{page.del}}</button></div>
  </div>
</template>

<script>
  import config from '@/config';
  export default {
    name: "res",
    data() {
      return {
        msg: "权限节点",
        arr: {name: "权限管理", value: "res"},
        table:'',
        Authorization:OperatorUtils.getData('token'),
        page:{
          add:'确定',
          del:'确定'
        },
        addFormData:{
          belong:'CarAudit',
          name:'',
          remark:'',
          status:'1',
          mark:''
        },
        editFormData: {
          id:'',
          mark:'',
          name:'',
          belong:'1',
          status:'1',
          remark:''
        }
      }
    },
    methods: {
      showMsg: function () {

      },
      tableRender:function(table){
        let url  = HOST+'?type=GetResourceTable';
        let _this = this;
        var tableIns= table.render({
          elem: '#jurisdiction',
          url: url,
          loading:true,
          toolbar: '#toolbar',
          response:{
            statusCode:200
          },
          headers:{
            'Authorization':_this.Authorization
          },
          title: '用户数据',
          even:true,
          cols: [[
            {type: 'checkbox', fixed: 'left'},
            {field:'MY_ROWNUM',title:'#',width:100},
            {field: 'MARK', title: '标识',},
            {field:'RESOURCE_NAME',title:"名称",style:'color:#337AB7'},
            {field: 'BELONG', title: '所属应用'},
            {field: 'STATUS', title: '状态'},
            {field:'operate',title:'操作',fixed:'right',width:130,templet:function (res) {
                return '<a IDS="'+res.ID+'" name="'+res.MARK+'" value="'+res.BELONG+'" status="'+res.STATUS+'" call="'+res.RESOURCE_NAME+'" class="layui-btn layui-btn-sm edit">编辑</a><a IDS="'+res.ID+'" name="'+res.MARK+'" value="'+res.BELONG+'" status="'+res.STATUS+'" call="'+res.RESOURCE_NAME+'" class="layui-btn layui-btn-warm layui-btn-sm stop">停用</a>'
              }},
          ]],
          page: true,
          done:function (res) {
            layer.closeAll('loading')
            $("td[data-field='STATUS']").children().each(function (val) {
              var value = $(this).text();
              value==1? $(this).html('<span class="normal-btn">正常</span>'): $(this).html('<span class="abnormal-btn">禁用</span>')
            })
            $("td[data-field='operate']").children('').each(function (val) {
              var elem = $(this).find('.stop')
              if(elem.attr('status')==0){
                elem.text('启用')
              }else  if(elem.attr('status')==1){
                elem.text('停用')
              }
            })
            $('.edit').click(function (e) {
              e.preventDefault();
              var layer = layui.layer;
              var form = layui.form
              var $ = layui.$
              _this.editFormData.id = $(this).attr('IDS');
              _this.editFormData.mark = $(this).attr('name')
              _this.editFormData.belong=$(this).attr('value')
              _this.editFormData.name=$(this).attr('call')
              let status = $(this).attr('status');
              _this.editFormData.status=status;
              layer.open({
                type: 1,
                title: '编辑角色',
                area: ['550px', '370px'],
                closeBtn: 1,
                shadeClose: true,
                skin: 'layui-layer-molv',
                content: $("#edit_popup")
              });
            })
            $('.stop').click(function(e){
              e.preventDefault()
              var current = $(this).text();
              var status = $(this).attr('status');
              var id = $(this).attr('ids');
              layer.confirm('您确定要'+current+'该条数据？', {
                btn: ['确定','取消'] //按钮
              }, function(){
                let type = 'ResourceD_Enable';
                if(status==0){
                  status=1
                }else if(status==1){
                  status=0
                }
                var data = {
                  id:id,
                  status:status
                }
                data=config.urlTransition(type,data);
                layer.load(1)
                _this.$http.apiPost(HOST,data).then(function (res) {
                  let code = res.code;
                  console.log(code);
                  if(code==200){
                    layer.msg('操作成功。。', {icon: 2});
                    layer.closeAll();
                    tableIns.reload()
                  }else {
                    layer.msg(res.message)
                    layer.closeAll()
                  }
                });
              });
            })
          }
        })
        table.on('toolbar(jurisdiction)', function(obj){
          var checkStatus = table.checkStatus(obj.config.id);
          let events = obj.event;
          if(events=='getCheckData'){
            var data = checkStatus.data;
            var length = data.length;
            if(length==0){
              layer.msg('请在下方的列表中选择一项进行删除')
              return;
            }
            var id = data[0].ID;
            let type = "ResourceDel"
            var dataSet = {
              id:id
            };
            dataSet = config.deleteUrlTrans(type,dataSet);
            layer.confirm('确定要删除吗?',{skin:_this.$store.state.skin}, function(index){
              _this.$http.apiDelete(HOST,dataSet).then(function (res) {
                let code = res.code;
                if(code==200){
                  layer.msg('删除成功',{time:1000})
                  window.setTimeout(function(){
                    tableIns.reload()
                  },1100)
                }else {
                  layer.msg('failed')
                }
              })
            });
          }
        });
      },
      add: function (e) {
        e.preventDefault()
        var _this = this;
        layui.use('layer',function(){
          var $ = layui.$;
          var layer = layui.layer;
          layer.open({
            type: 1,
            title: '添加',
            area: ['520px', '420px'],
            closeBtn: 1,
            shadeClose: true,
            skin: _this.$store.state.skin,
            content: $('#add_content')
          });
        })

      },
      confirm_add:function(e){
        e.preventDefault();
        var _this = this;
        if(this.addFormData.mark==''){
          layer.tips('必填项', '#add_mark', {
            tips: [1, '#459eff'],
            time: 2000
          });
          return;
        }
        if(this.addFormData.name==''){
          layer.tips('必填项', '#res_add_name', {
            tips: [1, '#459eff'],
            time: 2000
          });
          return;
        }
        let type = 'ResourceAdd';
        var data = {
          mark:this.addFormData.mark,
          name:this.addFormData.name,
          belong:this.addFormData.belong,
          status:this.addFormData.status,
          remark:this.addFormData.remark
        }
        data = config.urlTransition(type,data)
        layer.load(1);
        this.$http.apiPost(HOST,data).then(function (res) {
          let code = res.code;
          if(code==200){
            layer.msg('添加成功',{time:1300});
            setTimeout(function () {
              layer.closeAll();
              _this.tableRender(_this.table);
            },1500)
          }else {
            layer.msg(res.message)
            setTimeout(function () {
              layer.closeAll();
            },1500)
          }
        })
      },
      editSubmit:function(e){
        e.preventDefault()
        let type = 'ResourceEdit';
        var data = {
          id:this.editFormData.id,
          mark:this.editFormData.mark,
          name:this.editFormData.name,
          belong:this.editFormData.belong,
          status:this.editFormData.status,
          remark:this.editFormData.remark
        }
        //
        data=config.urlTransition(type,data)
        layer.load(1);
       this.$http.apiPost(HOST,data).then(function (res) {
          let code = res.code;
          if(code==200){
            layer.msg('success')
            layer.closeAll();
          }else{
            layer.msg('failed');
            layer.closeAll()
          }
        })
      },
      retrun(){

      }
    },
    computed: {
      showNum: function () {

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
      layui.use(['form', 'layer','table'], function () {
        var layer = layui.layer;
        var form = layui.form;
        var table = layui.table;
        _this.table=table;
        form.on('select(belong)',function (data) {
          var value = data.value;
          _this.addFormData.belong = value;
        })
        form.on('select(status)',function (data) {
          var value = data.value;
          _this.addFormData.status = value;
        })
        form.on('select(edit_status)',function (data) {
          var value = data.value;
          _this.editFormData.status = value;
        })
        form.on('select(edit_belong)',function (data) {
          var value = data.value;
          _this.editFormData.belong = value;
        })
        _this.tableRender(_this.table)
        form.render();
      });

    },
    beforeUpdate() {

    },
    updated() {

    }
  }
</script>

