<!--页面菜单，图标设置-->
<style scoped>
  .content {
    padding: 15px;
  }
  .content-top .form {
    margin-top: 20px;
    padding: 14px 0 ;
    padding-top: 0;
  }
  .main-content {
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: space-between;
    padding: 20px 0;
  }

  .main-content-left {
    width: 42%;
    height: auto;
    max-height: 700px;
    background: #fff;
    padding: 0 15px 15px 15px;
  }

  .main-content-right {
    width: 52%;
    min-height: 400px;
    background-color: #fff;
    padding: 0 15px 15px 15px;
  }

  .main-content-left-top,
  .main-content-right-top {
    padding: 0;
    line-height: 34px;
    border-bottom: 1px solid #dedede;
  }
</style>
<style>
  .layui-border-box {
    border-width: 0;
  }
</style>
<template>
  <div class="content">
    <div class="content-top">
      <div class="form tar bgcf">
        <div class="current-page">
          <p class="tal"><i class="iconfont mr-4">&#xe665;</i>菜单权限</p>
        </div>
        <button @click="edit" class="layui-btn layui-btn-sm ml-30"><i class="layui-icon">&#xe642;</i>菜单</button>
        <button @click="addMenu" class="layui-btn layui-btn-sm ml-30"><i class="layui-icon">&#xe654;</i>菜单</button>
        <button @click="editBtn" class="layui-btn layui-btn-sm ml-30"><i class="layui-icon">&#xe642;</i>按钮</button>
        <button @click="addBtn" class="layui-btn layui-btn-sm"><i class="layui-icon">&#xe654;</i>按钮</button>
      </div>
    </div>
    <div class="main-content">
      <div class="main-content-left">
        <div class="main-content-left-top"><i class="layui-icon mr-4">&#xe665;</i>所有菜单</div>
        <div class="main-content-left-body">
          <div class="tBody">
            <table class="layui-table layui-form" id="resource_tree_table" lay-filter="resource_tree_table"></table>
          </div>
        </div>
      </div>
      <div class="main-content-right">
        <div class="main-content-right-top"><i class="layui-icon mr-4">&#xe620;</i>菜单分配</div>
        <div class="main-content-right-body">
          <table class="layui-hide" id="menu_set" lay-filter="menu_set"></table>
        </div>
      </div>
    </div>
    <div id="popup" style="display: none;">
      <form action="" class="layui-form layui-form-pane">
        <div class="layui-form-item display_block">
          <label class="layui-form-label">id标识</label>
          <div class="layui-input-block w-auto">
            <input type="text" name="role_id" autocomplete="off" class="layui-input cursor-n bgce" readonly v-model="editData.ids">
          </div>
        </div>
        <div class="layui-form-item ">
          <label class="layui-form-label">标识</label>
          <div class="layui-input-block w-160">
            <input type="text" name="username" autocomplete="off" placeholder="暂无标识" class="layui-input " v-model="editData.mark">
          </div>
        </div>
        <div class="layui-form-item fr">
          <label class="layui-form-label">菜单名</label>
          <div class="layui-input-block w-160">
            <input type="text" name="username" autocomplete="off" class="layui-input " v-model="editData.title">
          </div>
        </div>
        <div class="layui-form-item ">
          <label class="layui-form-label">图标</label>
          <div class="layui-input-block w-160">
            <span type="text" name="username" autocomplete="off" class="layui-input layui-icon" v-html="editData.icon"></span>
          </div>
        </div>
        <div class="layui-form-item fr">
          <label class="layui-form-label">父级id</label>
          <div class="layui-input-block w-160">
            <input type="text" name="username" autocomplete="off" class="layui-input " v-model="editData.pid">
          </div>
        </div>
        <div class="tac">
          <button class="confirm-edit layui-btn layui-btn-sm" id="confirm_edit">确定编辑</button>
        </div>
      </form>
    </div>
    <div id="add_popup" style="display: none;">
      <form action="" class="layui-form layui-form-pane">
        <div class="layui-form-item display_block">
          <label class="layui-form-label">标识</label>
          <div class="layui-input-block w-auto">
            <input type="text" name="username" autocomplete="off" placeholder="菜单标识" class="layui-input " v-model="addData.mark">
          </div>
        </div>
        <div class="layui-form-item display_block ">
          <label class="layui-form-label">菜单名</label>
          <div class="layui-input-block w-auto">
            <input type="text" placeholder="输入显示的菜单名称" name="username" autocomplete="off" class="layui-input " v-model="addData.title">
          </div>
        </div>
        <div class="layui-form-item display_block ">
          <label class="layui-form-label">url</label>
          <div class="layui-input-block w-auto">
            <input type="text" placeholder="输入菜单url" name="username" autocomplete="off" class="layui-input " v-model="addData.url">
          </div>
        </div>
        <div class="layui-form-item display_block">
          <label class="layui-form-label">图标</label>
          <div class="layui-input-block w-auto">
            <input type="text" name="add_icon" placeholder="输入图标转义字符(格式:&#x15f;)" class="layui-input layui-icon" v-html="addData.icon">
          </div>
        </div>
        <div class="layui-form-item display_block">
          <label class="layui-form-label">父级id</label>
          <div class="layui-input-block w-auto">
            <input type="text" name="username" placeholder="输入父级菜单的id标识"  class="layui-input " v-model="addData.pid">
          </div>
        </div>
      </form>
    </div>
    <div id="select_box" class="hide"></div>
    <div id="icon_box_one" style="display: none;">
      hahha
    </div>
    <div id="edit_btn_popup" style="display: none;">
      <form action="" class="layui-form layui-form-pane">
        <div class="layui-form-item display_block ">
          <label class="layui-form-label">菜单名</label>
          <div class="layui-input-block w-auto">
            <input type="text" name="edit_menu_name" autocomplete="off" class="layui-input " v-model="editBtnData.name">
          </div>
        </div>
        <div class="layui-form-item display_block">
          <label class="layui-form-label">图标</label>
          <div class="layui-input-block w-auto">
            <span type="text"  @click="showIconBox" name="edit_menu_icon" autocomplete="off" class="layui-input layui-icon" v-html="editBtnData.icon"></span>
          </div>
        </div>
        <div class="layui-form-item display_block">
          <label class="layui-form-label">ID</label>
          <div class="layui-input-block w-auto">
            <input type="text" name="edit_menu_mid" readonly autocomplete="off" class="layui-input bgce cursor-n" v-model="editBtnData.id">
          </div>
        </div>
        <div class="layui-form-item layui-form-text display_block">
          <label  for="" class="layui-form-label pl20">备注(可选)</label>
          <div class="layui-input-block w-auto">
            <textarea rows="2" placeholder="请输入备注(可填可不填)" class="layui-textarea" v-model="editBtnData.remark" id="edit_btn_remark"></textarea>
          </div>
        </div>
      </form>
    </div>
    <div id="add_btn_popup" style="display: none;">
      <form action="" class="layui-form layui-form-pane">
        <div class="layui-form-item display_block">
          <label class="layui-form-label">ID</label>
          <div class="layui-input-block w-auto">
            <input type="text" name="add_btn_mid" autocomplete="off" class="layui-input" v-model="addBtnData.id">
          </div>
        </div>
        <div class="layui-form-item display_block ">
          <label class="layui-form-label">按钮名称</label>
          <div class="layui-input-block w-auto">
            <input type="text" name="edit_btn_name" autocomplete="off" class="layui-input " v-model="addBtnData.name">
          </div>
        </div>
        <div class="layui-form-item display_block">
          <label class="layui-form-label">按钮图标</label>
          <div class="layui-input-block w-auto">
            <span type="text"  @click="showIconBox" name="add_btn_icon" autocomplete="off" class="layui-input layui-icon" v-html="addBtnData.icon"></span>
          </div>
        </div>
        <div class="layui-form-item display_block">
          <label class="layui-form-label">菜单ID</label>
          <div class="layui-input-block w-auto">
            <span type="text" name="add_btn_mid" autocomplete="off" class="layui-input layui-icon" v-html="addBtnData.mid"></span>
          </div>
        </div>
        <div class="layui-form-item layui-form-text display_block">
          <label  for="" class="layui-form-label pl20">备注(可选)</label>
          <div class="layui-input-block w-auto">
            <textarea rows="2" placeholder="请输入备注(可填可不填)" class="layui-textarea" v-model="addBtnData.remark" id="add_btn_remark"></textarea>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  import config from '@/config';
  export default {
    name: 'resource',
    data () {
      return {
        msg: 'resource',
        arr: [{name: 'resource', value: 'resource'}],
        selected: '',
        Authorization: OperatorUtils.getData('token'),
        rightTableOption:'',
        upAll: '全部收起',
        downAll: '全部展开',
        selectedAll: '获取选中',
        treeGrid:{},
        tableSet:'',
        editData: {
          ids: '',
          title: '',
          url: '',
          pid: '',
          mark: '',
          icon: '',
          type: ''
        },
        addData:{
          title: '',
          url: '',
          pid: '',
          mark: '',
          icon: ''
        },
        editBtnData:{
          id:'',
          mid:'',
          icon:'',
          remark:'',
          name:''
        },
        addBtnData:{
          id:'',
          mid:'',
          icon:'',
          remark:'',
          name:''
        }
      };
    },
    methods: {
      edit () {
        var _this = this;
        var dataS = this.treeGrid;
        console.log(dataS);
        console.log('------------------------------');
        if (!dataS.ID) {
          layer.msg('请选择您要编辑的菜单选项');
          return false;
        } else {
            this.editData.ids = dataS.id;
            this.editData.title = dataS.menuName;
            this.editData.url = dataS.menuUrl;
            this.editData.pid = dataS.parentId;
            this.editData.mark = dataS.mark;
            this.editData.icon = dataS.icon;

            let type = 'MenuEdit';
            var data = {
              menuname: this.editData.title,
              mark: this.editData.mark,
              url: this.editData.url,
              pid: this.editData.pid,
              mid: this.editData.ids,
              icon: String(this.editData.icon)
            };
          data=config.urlTransition(type,data);
            $('#confirm_edit').click(function (e) {
              e.preventDefault();
              _this.$http.apiPost(HOST,data).then(function (res) {
                let code = res.code;
                if(code==200){
                  layer.msg('编辑成功');
                  setTimeout(function () {
                    layer.closeAll();
                  },800)
                }else {
                  layer.msg(res.message)
                  layer.closeAll()
                }
              });
            });
        }

        layer.open({
          type: 1,
          title: '编辑菜单',
          skin: this.$store.state.skin,
          area: ['520px', '320px'],
          closeBtn: 1,
          shadeClose: true,
          content: $('#popup'),
          end:function () {
            $('#popup').css({display:'none'});
          }
        });
      },
      addMenu(){
        var _this = this;
        layer.open({
          type: 1,
          title: '添加菜单',
          skin: this.$store.state.skin,
          area: ['480px', '380px'],
          closeBtn: 1,
          shadeClose: true,
          content: $('#add_popup'),
          btn:['确认添加','取消'],
          yes:function () {
            let type = 'MenuAdd';
            var data = {
              menuname: _this.addData.title,
              mark: _this.addData.mark,
              url: _this.addData.url,
              pid: _this.addData.pid,
              icon: String(_this.addData.icon)
            };
            data=config.urlTransition(type,data);
            _this.$http.apiPost(HOST,data).then(function (res) {
              let code = res.code;
              if(code==200){
                layer.msg('添加成功',{time:1200});
                setTimeout(function () {
                  layer.closeAll();
                },1500)
              }else {
                layer.msg(res.message)
                layer.closeAll()
              }
            });
          },
          end:function () {
            $('#add_popup').css({display:'none'});
          }
        });
      },
      showIconBox(){
        layer.open({
          type: 1,
          title: '选择图标',
          skin: this.$store.state.skin,
          area: ['100%', '100%'],
          closeBtn: 1,
          shadeClose: true,
          content: $('#icon_box_one'),
          anim:2
        });
      },
      editBtn(){
        var dataCollege = [];
        var getCheckData = this.tableSet.checkStatus('menu_set');
        getCheckData=getCheckData.data;
        console.log(getCheckData);
        var _this = this;
        for(var i = 0;i<getCheckData.length;i++){
          dataCollege.push(getCheckData[i].ID);
        }
        let setType = 'BtnRightEdit';
        var lenS = dataCollege.length;
        if(lenS<1){
          layer.msg('请至少选择一个按钮进行修改', {
            icon: 5
            ,shade: 0.01
          });
          return false;
        }else if(lenS>1) {
          layer.msg('最多只能选择一个', {
            icon: 6
            ,shade: 0.01
          });
          return false;
        }else {
          _this.editBtnData.icon = getCheckData[0].ICON;
          _this.editBtnData.id = getCheckData[0].ID;
          _this.editBtnData.name = getCheckData[0].NAME;
          /* name*/
          layer.open({
            type:1,
            title:'编辑按钮',
            area:['600px','400px'],
            shadeClose:true,
            skin:_this.$store.state.skin,
            closeBtn:1,
            success:function(){
            },
            btn:['确认添加','取消'],
            yes:function () {
              let edit_btn_type = 'BtnRightEdit';
              var dataSet = {
                id:_this.editBtnData.id,
                name:_this.editBtnData.name,
                icon:_this.editBtnData.icon,
                rightremark:_this.editBtnData.remark
              }
              dataSet = config.urlTransition(setType,dataSet);
              $.ajax({
                url:HOST,
                dataType:'json',
                data:JSON.stringify(dataSet),
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
                    layer.msg('编辑按钮成功', {
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

                }
              });
            },
            content:$('#edit_btn_popup'),
            end:function () {
              $('#edit_btn_popup').css({'display':'none'})
            }
          })
        }
      },
      addBtn(){
        var _this = this;
        layer.open({
          type:1,
          title:'添加按钮',
          area:['600px','420px'],
          shadeClose:true,
          skin:_this.$store.state.skin,
          closeBtn:1,
          success:function(){
          },
          content:$('#add_btn_popup'),
          btn:['确认添加','取消'],
          yes:function () {
            let type = 'MenuAdd';
          },
          end:function () {
            $('#add_btn_popup').css({'display':'none'})
          }
        })
      }
    },
    computed: {
      showNum: function () {
        console.log(1 - 1);
      }
    },
    beforeCreate () {

    },
    created () {

    },
    beforeMount () {

    },
    mounted () {
      var _this = this;
      var ptable = null;
      layui.config({
        base: './static/layui/layui/extend_m/'
      }).extend({treeGrid:'treeGrid'}).use(['treeGrid', 'layer', 'laydate', 'table', 'form'], function () {
        let layer = layui.layer,table = layui.table, form = layui.form,treeGrid = layui.treeGrid,$=layui.jquery;
        _this.tableSet = table;
        var tableIns=table.render({
          elem: '#menu_set',
          url: HOST,
          even: true,
          loading: true,
          response: {
            statusCode: 200
          },
          headers: {
            'Authorization': _this.Authorization
          },
          where: {
            type: 'GetBtnTable'
          },
          limit:1000,
          cols: [[
            {type: 'checkbox'},
            {field: 'NAME', title: '按钮名'},
            {field: 'ICON', title: '图标'},
            {field: 'STYLE', title: '样式'},
            {field: 'DOM_ID', title: 'id', style: 'color:#44c660'}
          ]],
          page: false,
          done: function (res) {
            let data = res.data;

            $('td[data-field=\'DOM_ID\']').children().each(function (index) {
              var text = $(this).text();
              if(!text){$(this).html('<span>未录入</span>');}

            });
          }
        });
        ptable=treeGrid.render({
          id:'resource_tree_table'
          ,elem: "#resource_tree_table",
          url:HOST+'?type=GetMenuTable'
          ,response:{
            statusCode:200
          }
          ,cellMinWidth: 100
          ,idField:'id'//必須字段
          ,treeId:'id'//树形id字段名称
          ,treeUpId:'parentId'//树形父id字段名称
          ,treeShowName:'menuName'//以树形式显示的字段
          ,height:'500'
          ,isFilter:false
          ,iconOpen:true//是否显示图标【默认显示】
          ,isOpenDefault:false//节点默认是展开还是折叠【默认展开】
          ,loading:true
          ,method:'get'
          ,isPage:true
          ,cols: [[
            {type:'radio'},
            {field:'menuName',title: '菜单名',width:'60%'},
            {field:'menuUrl', title: 'url',width:'30%'}
          ]]
          ,parseData:function (res) {//数据加载后回调
            return res;
          }
          ,onClickRow:function (index, o) {
            _this.treeGrid = o;
            console.log(o);
            tableIns.reload({
              where:{
                type:'GetBtnTable',
                mid:_this.treeGrid.id
              }
            })
          }
        });

      });
    },
    beforeUpdate () {

    },
    updated () {

    }
  };
</script>

