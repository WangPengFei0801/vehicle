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

  .main-content-right-bottom {
    padding: 15px;
  }

  .layui-form-checkbox span {
    font-size: 12px;
  }
</style>
<template>
  <div class="main-content">
    <div class="main-content-header">
      <form class="layui-form layui-form-pane pl20 clearfix" action="">
        <div class="layui-form-item mr-10">
          <label class="layui-form-label">接口标识</label>
          <div class="layui-input-block w-auto">
            <input type="text" name="user_code" placeholder="输入接口标识" id="api_id" class="layui-input" v-model="searchData.jkId">
          </div>
        </div>
        <div class="layui-form-item mr-10">
          <label class="layui-form-label">接口名称</label>
          <div class="layui-input-block w-auto">
            <input type="text" name="user_code" placeholder="输入接口名称" class="layui-input" v-model="searchData.jkName">
          </div>
        </div>
        <div class="layui-form-item port-search"><button id="search_port" class="layui-btn layui-btn-sm">查询</button><button  class="layui-btn layui-btn-primary layui-btn-sm" @click="reset($event)">重置</button></div>
      </form>
    </div>
    <div class="middle-space"></div>
    <div class="main-content-body">
      <div class="main-content-body-right">
        <div class="main-content-body-right-top">
          <p><i class="iconfont mr-6">&#xe6fc;</i>广告列表</p>
        </div>
        <div class="main-content-right-bottom">
          <div class="layui-btn-container pore">
            <button @click.stop="add_ad" class="layui-btn layui-btn-sm add-users-btn"><i
              class="layui-icon layui-icon-add-circle"></i>新增接口
            </button>
          </div>
          <table class="layui-hide" id="ad_table" lay-filter="ad_table"></table>
        </div>
      </div>
    </div>
    <div id="api_popup" class="" style="display: none;">
      <form action="" class="layui-form layui-form-pane">
        <div class="layui-form-item display_block">
          <label class="layui-form-label">接口ID</label>
          <div class="layui-input-block w-auto">
            <input type="text" name="username" placeholder="输入接口ID" id="api_add_id" autocomplete="off" class="layui-input" v-model="addFormData.jkid">
          </div>
        </div>
        <div class="layui-form-item display_block">
          <label class="layui-form-label">接口名称</label>
          <div class="layui-input-block w-auto">
            <input type="text" name="account" placeholder="输入接口名"  autocomplete="off" class="layui-input" v-model="addFormData.jkName">
          </div>
        </div>
        <div class="layui-form-item layui-form-text display_block">
          <label for="" class="layui-form-label pl20">备注(可选)</label>
          <div class="layui-input-block w-auto">
            <textarea rows="2" placeholder="请输入备注(可填可不填)" class="layui-textarea" v-model="addFormData.jkms"></textarea>
          </div>
        </div>
      </form>
    </div>
    <div id="api_edit_popup" class="" style="display: none;">
      <form action="" class="layui-form layui-form-pane">
        <div class="layui-form-item d_i_b">
          <label class="layui-form-label">接口ID</label>
          <div class="layui-input-block w-160">
            <input type="text" name="username" placeholder="输入接口ID" id="api_edit_id" class="layui-input" v-model="editFormData.jkid">
          </div>
        </div>
        <div class="layui-form-item d_i_b">
          <label class="layui-form-label">接口名称</label>
          <div class="layui-input-block w-160">
            <input type="text" name="account" placeholder="输入接口名称"  autocomplete="off"
                   class="layui-input" v-model="editFormData.jkName">
          </div>
        </div>
        <div class="layui-form-item layui-form-text display_block">
          <label for="" class="layui-form-label pl20">备注</label>
          <div class="layui-input-block w-auto">
            <textarea rows="2" placeholder="请输入备注(可填可不填)" class="layui-textarea" v-model="editFormData.jkms"></textarea>
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
    name: 'role',
    data () {
      return {
        msg: 'role',
        arr: [{name: 'role', value: 'role'}],
        Authorization: OperatorUtils.getData('token'),
        formData: {
          id: '',
          mobile: ''
        },
        addFormData: {
          jkid: '',
          jkName: '',
          jkms: '',
        },
        editFormData: {
          jkid: '',
          jkName: '',
          jkms: ''
        },
        layData: {
          search: '搜索输入'
        },
        searchData: {
          jkId: '',
          jkName:''
        }
      };
    },
    methods: {
      add_ad: function (e) {
        var _this = this;
        e.preventDefault();
        layer.open({
          type: 1,
          area: ['550px', '350px'],
          title: '新增接口',
          closeBtn: 1,
          shadeClose: true,
          skin: 'layui-layer-molv',
          btn: ['确定添加', '取消'],
          end: function () {
            $('#api_popup').css('display', 'none');
          },
          yes: function () {
            var type = 'AddApiInfo';
            var data = {
              jkId: _this.addFormData.jkid,
              jkName: _this.addFormData.jkName,
              jkms: _this.addFormData.jkms
            };
            data = config.urlTransition(type, data);
            console.log(data);
            let url = 'http://192.168.8.74/carauditapi/api';
            _this.$http.apiPost(url, data).then(function (res) {
              var code = res.code;
              if (code == 200) {
                layer.msg('添加成功');
                setTimeout(function () {
                  layer.closeAll();
                  _this.tableRender();
                }, 1500);
              }
            });
          },
          content: $('#api_popup')
        });
      },
      reset: function (e) {
        e.preventDefault();
        this.searchData.msg = '';
      },
      tableRender: function () {
        var _this = this;
        let type = 'GetApiInfoData';
        var data = {
          type: type
        };
        layui.use(['table', 'form', 'laydate'], function () {
          var table = layui.table;
          var form = layui.form;
          var laydate = layui.laydate;
          form.on('select(adtype)', function (data) {
            var val = data.value;
            _this.addFormData.adtype = val;
          });
          var tableIns = table.render({
            elem: '#ad_table',
            url: HOST,
            loading: true,
            even: true,
            where: data,
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
              {field: 'rowNo', title: '#', width: 80},
              {field: 'jkId', title: '接口标识',width:100},
              {field: 'jkName', title: '接口名称', width: 300},
              {field: 'jkms', title: '接口描述'},
              {
                field: 'operate', title: '操作', width: 140, templet: function (d) {
                  return '<button jkid="' + d.jkId + '"  id="'+d.id+'" jkName="' + d.jkName + '" jkms="' + d.jkms + '" class="layui-btn-sm layui-btn api-operate-edit">编辑</button><button  standard="'+d.id+'" class="layui-btn-sm layui-btn layui-btn-danger api-operate-del">删除</button>';
                }
              }
            ]],
            page: true,
            done: function (res) {
              $('#search_port').click(function (e) {
                e.preventDefault();
                var table_reload_data = {
                  jkId: _this.searchData.jkId,
                  jkName: _this.searchData.jkName,
                  type: type
                };
                tableIns.reload({
                  where: table_reload_data,
                  page: {
                    curr: 1
                  }
                });
              });
              $('.api-operate-edit').click(function () {
                _this.editFormData.id = $(this).attr('id');
                _this.editFormData.jkid = $(this).attr('jkid');
                _this.editFormData.jkName = $(this).attr('jkName');
                _this.editFormData.jkms = $(this).attr('jkms');
                form.render();
                layer.open({
                  type: 1,
                  shadeClose: true,
                  closeBtn: 1,
                  skin: _this.$store.state.skin,
                  area: ['550px', '280px'],
                  title: '编辑接口',
                  content: $('#api_edit_popup'),
                  success(){
                  },
                  end: function () {
                    $('#api_edit_popup').css({display: 'none'});
                  },
                  btn: ['确认修改', '取消'],
                  yes: function () {
                    var type = 'EditApiInfo';
                    var data = {
                      id:_this.editFormData.id,
                      jkid: _this.editFormData.jkid,
                      jkName: _this.editFormData.jkName,
                      jkms: _this.editFormData.jkms,
                    };
                    data = config.urlTransition(type, data);
                    console.log(data);
                    let url = HOST;
                    _this.$http.apiPost(url, data).then(function (res) {
                      var code = res.code;
                      if (code == 200) {
                        layer.msg('修改成功');
                        setTimeout(function () {
                          layer.closeAll();
                          _this.tableRender();
                        }, 1500);
                      }
                    });
                  }
                });
              });
              $('.api-operate-del').click(function () {
                var id = $(this).attr('standard');
                let type = 'ApiInfoDel';
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
                      layer.msg('删除成功');
                      setTimeout(function () {
                        layer.closeAll();
                      },1500)
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
            }
          });
        });
      },
      edit_ad: function (e) {
        var _this = this;
        e.preventDefault();
        layer.open({
          type: 1,
          area: ['550px', '440px'],
          title: '新增接口',
          closeBtn: 1,
          shadeClose: true,
          skin: 'layui-layer-molv',
          btn: ['确定添加', '取消'],
          end: function () {
            $('#edit_popup').css('display', 'none');
          },
          yes: function () {

          },
          content: $('#edit_popup')
        });
      },
      search(){

      }
    },
    computed: {
      showNum: function () {
      },
      layerSet: function (elem) {

      }
    },
    beforeCreate () {

    },
    created () {

    },
    beforeMount () {

    },
    mounted () {
      let _this = this;
      layui.use(['form', 'layer', 'laydate', 'element'], function () {
        let form = layui.form, layer = layui.layer, laydate = layui.laydate, element = layui.element;
        laydate.render({
          elem: '#api_add_stime',
          value: _this.addFormData.stime,
          theme: 'grid',
          calendar: true,
          mark: {
            '0-12-31': '跨年'
          },
          max: 0,
          done: function (val) {
            _this.addFormData.stime = val;
          }
        });
        laydate.render({
          elem: '#api_add_etime',
          value: _this.addFormData.etime,
          theme: 'grid',
          calendar: true,
          mark: {
            '0-12-31': '跨年'
          },
          max: 0,
          done: function (val) {
            _this.addFormData.etime = val;
          }
        });
        _this.tableRender();
      });
    },
    beforeUpdate () {

    },
    updated () {
      this.$nextTick(function () {
        layui.use('form', function () {
          layui.form.render();
        });
      });
    }
  };
</script>


