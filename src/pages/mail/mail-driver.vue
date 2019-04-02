<style scoped>
  .layui-tab-title {
    height: 74px;
  }
  .layui-tab-title > li {
    padding: 6px 4px;
    min-width: 84px;
  }
  .layui-tab-title > li > i {
    margin: 0 auto;
    margin-bottom: 10px;
    width: 34px;
    height: 34px;
    border-radius: 50%;
    background: #57ADFA;
    color: #fff;
    line-height: 34px;
    text-align: center;
  }
  .layui-tab-title > li:nth-child(2) > i {
    background-color: #FC9948;
  }
  .layui-tab-title .layui-this:after{
    height: 70px;
  }
  .layui-show {
    display: block;
    opacity: 1;
    transition: all 0.5s;
    animation:show .8s ease-in-out  alternate forwards;
  }
  .layui-hide {
    display: none;
    opacity: 0;
    transition: all 0.5s;
    animation:hide .8s ease-in-out  alternate forwards;
  }
  @keyframes show {
    from,
    20%,
    40%,
    60%,
    80%,
    to {
      -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }

    0% {
      opacity: 0;
      -webkit-transform: scale3d(0.3, 0.3, 0.3);
      transform: scale3d(0.3, 0.3, 0.3);
    }

    20% {
      -webkit-transform: scale3d(1.1, 1.1, 1.1);
      transform: scale3d(1.1, 1.1, 1.1);
    }

    40% {
      -webkit-transform: scale3d(0.9, 0.9, 0.9);
      transform: scale3d(0.9, 0.9, 0.9);
    }

    60% {
      opacity: 1;
      -webkit-transform: scale3d(1.03, 1.03, 1.03);
      transform: scale3d(1.03, 1.03, 1.03);
    }

    80% {
      -webkit-transform: scale3d(0.97, 0.97, 0.97);
      transform: scale3d(0.97, 0.97, 0.97);
    }

    to {
      opacity: 1;
      -webkit-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
    }
  }
  @keyframes hide {
    20% {
      -webkit-transform: scale3d(0.9, 0.9, 0.9);
      transform: scale3d(0.9, 0.9, 0.9);
    }

    50%,
    55% {
      opacity: 1;
      -webkit-transform: scale3d(1.1, 1.1, 1.1);
      transform: scale3d(1.1, 1.1, 1.1);
    }

    to {
      opacity: 0;
      -webkit-transform: scale3d(0.3, 0.3, 0.3);
      transform: scale3d(0.3, 0.3, 0.3);
    }
  }
</style>
<template>
    <div>
      <div class="layui-tab layui-tab-card" lay-filter="docDemoTabBrief">
        <ul class="layui-tab-title clearfix">
          <li  class="layui-this"><i class="iconfont display_block font22">&#xe670;</i><span>驾驶证</span></li>
          <li><i class="iconfont display_block font22">&#xe670;</i><span>资料下载</span></li>
          <li><i class="iconfont display_block font22">&#xe66f;</i><span>行驶证</span></li>
        </ul>
        <div class="layui-tab-content">
          <div class="layui-tab-item layui-show">
            <div class="content-first-top">
              <form action="" class="layui-form layui-form-pane">
                <div class="layui-form-item">
                  <div class="layui-inline mr2">
                    <label class="layui-form-label">创建时间</label>
                    <div class="layui-input-block">
                      <input type="text" name="date" id="driver_start_time" autocomplete="off" class="layui-input" v-model="emailFormData.start_time" readonly>
                      <i class="layui-icon date-icon">&#xe637;</i>
                    </div>
                  </div>
                </div>
                <pre class="d_i_b mt8">至</pre>
                <div class="layui-form-item">
                  <div class="layui-inline w-120">
                    <input type="text" name="date" id="driver_end_time" autocomplete="off" class="layui-input" v-model="emailFormData.end_time" readonly>
                    <i class="layui-icon date-icon">&#xe637;</i>
                  </div>
                </div>
                <div class="layui-form-item">
                  <label class="layui-form-label">用户姓名</label>
                  <div class="layui-input-inline">
                    <input type="text" maxlength="11" name="phone"  placeholder="请输入姓名" id="email_username" autocomplete="off" class="layui-input" v-model="emailFormData.email_username">
                  </div>
                </div>
                <div class="layui-form-item">
                  <label class="layui-form-label">驾驶证号</label>
                  <div class="layui-input-inline">
                    <input type="text" maxlength="11" name="phone"  placeholder="请输入驾驶证号" id="email_driver_card" autocomplete="off" class="layui-input" v-model="emailFormData.email_driver_card">
                  </div>
                </div>
                <div class="layui-form-item">
                  <label class="layui-form-label">快递单号</label>
                  <div class="layui-input-inline">
                    <input type="text" maxlength="11" name="phone"  placeholder="请输入快递单号" id="email_driver" autocomplete="off" class="layui-input" v-model="emailFormData.email_number">
                  </div>
                </div>
                <div class="layui-form-item">
                  <button class="layui-btn layui-btn-sm" lay-filter="search" id="search_btn"><i class="layui-icon">&#xe615;</i>搜索</button>
                </div>
              </form>
            </div>
            <div class="content-first-bottom">
              <table class="layui-hide" id="mail_driver_table" lay-filter="mail_driver_table"></table>
           <script type="text/html" id="mail_driver_table_toolbar">
              <div class="layui-btn-container">
              <button class="layui-btn layui-btn-sm" lay-event="get_select_data"><i class="layui-icon">&#xe609</i>导出选择列</button>
              <button class="layui-btn layui-btn-sm" lay-event="get_all_data"><i class="layui-icon">&#xe609</i>导出所有页</button>
            </div>
         </script>
            </div>
          </div>
          <div class="layui-tab-item">内容2</div>
          <div class="layui-tab-item">内容3</div>
        </div>
      </div>
    </div>
</template>

<script>
  import config from '@/config'
  export default {
    name: 'mail-driver',
    data () {
      return {
        msg: 'mail-service',
        arr: [{name: '', value: ''}],
        tableF:'',
        Authorization:OperatorUtils.getData('token'),
        emailFormData:{
          start_time:'',
          end_time:'',
          email_number:'',
          email_username:'',
          email_driver_card:''
        }
      };
    },
    methods: {
      tableRender(table){
        var _this =  this;
        var tableIns = table.render({
          elem: '#mail_driver_table',
          url: HOST+'?type=LoadDrivingDataList',
          loading: false,
          even: true,
          toolbar: '#mail_driver_table_toolbar',
          response: {
            statusCode: 200
          },
          headers:{
            'Authorization':_this.Authorization
          },
          cols: [[
            {type: 'checkbox'},
            {field: 'MY_ROWNUM', title: '#'},
            {field: 'ID', width: 250, title: '角色标识'},
            {field: 'ROLE_NAME', title: '角色身份'},
            {field: 'ROLE_REMARK', title: '角色备注'},
            {field: 'STATUS', title: '状态'},
            {field: 'CREATE_TIME', title: '创建时间'},
            {field: 'UPDATE_TIME', title: '更新时间'},
          /*{
            /*eld: 'operate', title: '操作',width:240, templet: function (d) {
              return '<button identity="'+d.ROLE_NAME+'" status="'+d.STATUS+'" value="'+d.ID+'" class="layui-btn-sm layui-btn mr-10 operate-edit">编辑</button><button identity="'+d.ROLE_NAME+'" stauts="'+d.STATUS+'" value="'+d.ID+'" class="layui-btn-sm layui-btn layui-btn-danger operate-del mr-10">删除</button><button identity="'+d.ROLE_NAME+'" status="'+d.STATUS+'" value="'+d.ID+'" class="layui-btn-sm layui-btn mr-10 operate-btn layui-btn-primary">停用</button>';
            }
            }*/
          ]],
          page: true,
          done: function (res) {


          }
        });
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
      layui.use(['table', 'layer', 'laydate'], function () {
        var table = layui.table;
        var layer = layui.layer;
        var laydate = layui.laydate;
        _this.tableF = table;
        _this.tableRender(_this.tableF);
        laydate.render({
          elem: '#driver_start_time',
          value: _this.$store.state.dateSel('-')[4],
          theme: 'grid',
          calendar: true,
          mark: {
            '0-12-31': '跨年'
          },
          max: 0
        });
        laydate.render({
          elem: '#driver_end_time',
          value: _this.$store.state.dateSel('-')[2],
          theme: 'grid',
          calendar: true,
          mark: {
            '0-12-31': '跨年'
          },
          max: 0
        })
      });
    },
    beforeUpdate () {

    },
    updated () {

    }
  };
</script>

