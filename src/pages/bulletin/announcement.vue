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
<template>
  <div class="main-content">
    <div class="main-content-header">
      <form class="layui-form layui-form-pane pl20 clearfix" action="">
        <div class="layui-form-item mr-10">
          <label class="layui-form-label">通告代码</label>
          <div class="layui-input-block w-auto">
            <input type="text" name="notify_code" placeholder="输入规范的通告代码" id="ad_code" autocomplete="off" class="layui-input"  v-model="formData.notifytitle">
          </div>
        </div>
        <div class="layui-form-item  ml-20">
          <label class="layui-form-label">通告类型</label>
          <div class="layui-input-block w-160">
            <select id="add_status_set" name="interest" lay-filter="notifytype" v-model="formData.notifytype">
              <option value="1">图片</option>
              <option value="2">视频</option>
              <option value="3">文字</option>
            </select>
          </div>
        </div>
        <div class="layui-form-item ml-20">
          <label class="layui-form-label">选择时间</label>
          <div class="layui-inline mr0">
            <div class="layui-input-inline mr-4">
              <input type="text" name="date" id="start_date" autocomplete="off" class="layui-input" v-model="formData.start_time">
            </div>
          </div>
        </div>
        <pre class="d_i_b mt8 mr-4">至</pre>
        <div class="layui-form-item ">
          <div class="layui-inline">
            <div class="layui-input-inline">
              <input type="text" id="end_date" name="date" autocomplete="off" class="layui-input" v-model="formData.end_time">
            </div>
          </div>
        </div>
        <div class="layui-form-item  ml-10">
          <button class="layui-btn layui-btn-sm" id="role_search"><i class="layui-icon">&#xe615;</i>搜索</button>
          <button class="layui-btn layui-btn-sm layui-btn-primary ml-16" id="reset" @click="reset($event)"><i class="layui-icon">&#xe669;</i>重置</button>
        </div>
      </form>
    </div>
    <div class="middle-space"></div>
    <div class="main-content-body">
      <div class="main-content-body-right">
        <div class="main-content-body-right-top">
          <p><i class="iconfont mr-6">&#xe6fc;</i>通告列表</p>
        </div>
        <div class="main-content-right-bottom">
          <div class="layui-btn-container pore">
            <button @click.stop="add_notify" class="layui-btn layui-btn-sm"><i class="layui-icon layui-icon-add-circle"></i>添加通告</button>
          </div>
          <table class="layui-hide" id="notify_table" lay-filter="notify_table"></table>
        </div>
      </div>
    </div>
    <div id="notify_popup" class="" style="display: none;">
      <form action="" class="layui-form layui-form-pane">
        <div class="layui-form-item d_i_b">
          <label class="layui-form-label">使用状态</label>
          <div class="layui-input-block w-160" style="border: 1px solid #e6e6e6; min-height: 30px!important;">
            <input type="radio" lay-filter="is_used" name="used" value="1" title="是" checked="">
            <input type="radio" lay-filter="is_used" name="used" value="0" title="否">
          </div>
        </div>
        <div class="layui-form-item d_i_b ml-40">
          <label class="layui-form-label">通告标题</label>
          <div class="layui-input-block w-160">
            <input type="text" name="username" placeholder="请输入通告标题"  autocomplete="off" class="layui-input" v-model="addFormData.notifytitle">
          </div>
        </div>
        <div class="layui-form-item display_block">
          <label class="layui-form-label">通告类型</label>
          <div class="layui-input-block w-auto">
            <select id="" name="interest" lay-filter="dtype" v-model="addFormData.dtype">
              <option value="1">图片</option>
              <option value="2">视频</option>
              <option value="3">文字</option>
            </select>
          </div>
        </div>
        <div class="layui-form-item display_block">
          <div class="upload-box">
            <div id="uploader" class="wu-example">
              <!--用来存放文件信息-->
              <div id="thelist" class="uploader-list"></div>
              <div class="btns">
                <div id="picker" class="layui-btn layui-btn-sm pore"><i class="layui-icon layui-icon-upload"></i><span>选择视频</span></div>
              </div>
            </div>
            <table class="fileList_parent layui-table">
              <thead>
              <tr>
                <th>文件名称</th>
                <th>类型</th>
                <th>大小</th>
                <th>进度</th>
                <th>说明</th>
              </tr>
              </thead>
              <tbody class="fileList">
              </tbody>
            </table>
          </div>
        </div>
        <div class="layui-form-item layui-form-text display_block">
          <label  for="" class="layui-form-label pl20">通告内容(可选)</label>
          <div class="layui-input-block w-auto">
            <textarea rows="2" placeholder="请输入内容(可填可不填)" class="layui-textarea" v-model="addFormData.content"></textarea>
          </div>
        </div>
      </form>
    </div>
    <div id="notify_edit_popup" class="" style="display: none;">
      <form action="" class="layui-form layui-form-pane">
        <div class="layui-form-item d_i_b">
          <label class="layui-form-label">广告ID</label>
          <div class="layui-input-block w-160">
            <input type="text" name="username" placeholder="通告标题" id="edit_name" autocomplete="off" class="layui-input" v-model="editFormData.notifytitle">
          </div>
        </div>
        <div class="layui-form-item d_i_b ml-40">
          <label class="layui-form-label">广告编号</label>
          <div class="layui-input-block w-160">
            <input type="text" name="account" placeholder="通告编号"  id="edit_account" autocomplete="off" class="layui-input" v-model="editFormData.notifyCode">
          </div>
        </div>
        <div class="layui-form-item d_i_b">
          <label class="layui-form-label">使用状态</label>
          <div class="layui-input-block w-160" style="border: 1px solid #e6e6e6; min-height: 30px!important;">
            <input type="radio" lay-filter="edit_is_used" name="used" value="1" title="是" checked="">
            <input type="radio" lay-filter="edit_is_used" name="used" value="0" title="否">
          </div>
        </div>
        <div class="layui-form-item d_i_b ml-40">
          <label class="layui-form-label">商户名称</label>
          <div class="layui-input-block w-160">
            <input type="text" maxlength="11" name="account" placeholder="图片路径"  id="edit_phone" autocomplete="off" class="layui-input" v-model="editFormData.bgpath">
          </div>
        </div>
        <div class="layui-form-item d_i_b">
          <label class="layui-form-label">保存路径</label>
          <div class="layui-input-block w-160">
            <input type="text" maxlength="11" name="account" placeholder="保存路径" autocomplete="off" class="layui-input" v-model="editFormData.savepath">
          </div>
        </div>
        <div class="layui-form-item d_i_b ml-40">
          <label class="layui-form-label">通告类型</label>
          <div class="layui-input-block w-160">
            <select id="edit_status_set" name="interest" lay-filter="edit_type" v-model="editFormData.notifytype">
              <option value="1">图片</option>
              <option value="2">视频</option>
              <option value="3">文字</option>
            </select>
          </div>
        </div>
        <div class="layui-form-item layui-form-text display_block">
          <label  for="" class="layui-form-label pl20">备注(可选)</label>
          <div class="layui-input-block w-auto">
            <textarea rows="2" placeholder="请输入备注(可填可不填)" class="layui-textarea" v-model="editFormData.notifycontent"></textarea>
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
    data() {
      return {
        msg: 'role',
        uploader:null,
        Authorization:OperatorUtils.getData('token'),
        formData:{
          notifytitle:'',
          notifytype:'',
          start_time:this.$store.state.dateSel('-')[5],
          end_time:this.$store.state.dateSel('-')[0],
        },
        addFormData:{
          "notifytitle": "",
          "dtype":"",
          "btype":2,
          "content":"",
          "isuse":1
        },
        editFormData:{
          type:1,
          notifytitle:'',
          notifyCode:'',
          notifytype:'',
          savepath:'',
          notifycontent:'',
          bgpath:'',
          isuse:'',
          id:''
        },
        layData: {
          search: '搜索输入'
        },
        searchData: {
          msg: ''
        }
      };
    },
    methods: {
      add_notify:function(e){
        var _this = this;
        e.preventDefault();
        layer.open({
          type:1,
          area:'550px',
          title:'添加通告',
          closeBtn:1,
          shadeClose:true,
          skin:'layui-layer-molv',
          btn:['确定添加','取消'],
          end:function(){
            $('#notify_popup').css('display','none');
          },
          yes:function(){
            _this.uploader.upload();
          },
          content:$('#notify_popup')
        });
      },
      reset: function (e) {
        e.preventDefault();
        this.searchData.msg='';
      },
      tableRender: function () {
        var _this = this;
        let type = 'GetNotifyTable';
        var data = {
          type: type,
          stime:_this.addFormData.start_time,
          etime:_this.addFormData.end_time,
        };
        layui.use(['table','form','laydate'], function () {
          var table = layui.table;
          var form = layui.form;
          var tableIns = table.render({
            elem: '#notify_table',
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
              {field: 'id', title: '#',width:80},
              {field: 'notifyTitle', title: '通告标题',width:130},
              {field: 'notifyCode', title: '通告代码',width:130},
              {field: 'bgPath', title: '图片路径',width:130},
              {field: 'savePath', title: '保存路径',width:130},
              {field: 'notifyType', title: '通告类型',width:90},
              {field: 'isUse', title: '使用状态',width:90},
              {field: 'notifyContent', title: '通告备注'},
              {
                field: 'operate', title: '操作',width:150, templet: function (d) {
                  return '<button  standard="'+d.id+'" isUse="'+d.isUse+'" notifyTitle="'+d.notifyTitle+'" notifyType="'+d.notifyType+'" notifyContent="'+d.notifyContent+'" notifyCode="'+d.notifyCode+'" savepath="'+d.savePath+'" bgPath="'+d.bgPath+'" class="layui-btn-sm layui-btn mr-10 notify-operate-edit">编辑</button><button standard="'+d.id+'" class="layui-btn-sm layui-btn layui-btn-danger notify-operate-del mr-10">删除</button>';
                }
              }
            ]],
            page: true,
            done: function (res) {
              $('#role_search').click(function (e) {
                e.preventDefault();
                var table_reload_data = {
                  notifytitle:_this.addFormData.notifytitle,
                  notifytype:_this.addFormData.notifytype,
                  stime:_this.addFormData.start_time,
                  etime:_this.addFormData.end_time,
                  type:type
                };
                tableIns.reload({
                  where:table_reload_data,
                  page:{
                    curr:1
                  }
                });
              });
              $('.notify-operate-edit').click(function () {
                _this.editFormData.id=$(this).attr('standard');
                _this.editFormData.notifytitle = $(this).attr('notifytitle');
                _this.editFormData.notifyCode = $(this).attr('notifyCode');
                _this.editFormData.notifytype = $(this).attr('notifytype');
                _this.editFormData.savepath = $(this).attr('savepath');
                _this.editFormData.notifycontent = $(this).attr('notifycontent');
                _this.editFormData.bgpath = $(this).attr('bgpath');
                _this.editFormData.isuse = $(this).attr('isuse');
                form.render();
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
                  area:['550px','440px'],
                  title:'编辑通告',
                  content:$('#notify_edit_popup'),
                  end:function () {
                    $('#notify_edit_popup').css({display:'none'});
                  },
                  btn:['确认修改','取消'],
                  yes:function () {
                    var type = 'EditNotify';
                    var data = {
                      Id:_this.editFormData.id,
                      notifytitle:_this.editFormData.notifytitle,
                      notifyCode:_this.editFormData.notifyCode,
                      notifytype:_this.editFormData.notifytype,
                      savepath:_this.editFormData.savepath,
                      notifycontent:_this.editFormData.notifycontent,
                      bgpath:_this.editFormData.bgpath,
                      isuse:_this.editFormData.isuse
                    };
                    data = config.urlTransition(type,data);
                    let url = HOST;
                    _this.$http.apiPost(url,data).then(function(res){
                      var code = res.code;
                      if(code==200){
                        layer.msg('修改成功');
                        setTimeout(function () {
                          layer.closeAll();
                          _this.tableRender();
                        },1500);
                      }
                    });
                  }
                });
              });
              $('.notify-operate-del').click(function () {
                var id = $(this).attr('standard');
                let type = 'NotifyDel';
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
                      setTimeout(function () {
                        layer.closeAll();
                      },1500)
                    }else {
                      layer.msg(res.message);
                      layre.closeAll();
                    }
                    _this.tableRender();
                  });

                }, function(index){
                  layer.close(index);
                });
              });
              $('td[data-field=\'notifyType\']').children().each(function (index) {
                var text = $(this).text();
                if(text==1){
                  $(this).text('文字')
                }else if(text==2){
                  $(this).text('图片')
                }else if(text==3){
                  $(this).text('视频')
                }
              });
            }
          });
        });
      }
    },
    mounted() {
      let _this = this;
      layui.use(['form', 'layer', 'laydate','element'], function () {
        let form = layui.form, layer = layui.layer, laydate = layui.laydate,element=layui.element;
        form.on('radio(is_used)',function (data) {
          var val = data.value;
          _this.addFormData.isuse=val;
          console.log(val);
        });
        form.on('select(dtype)',function (data) {
          var val = data.value;
          _this.addFormData.dtype=val;
          console.log(_this.addFormData.dtype);
        });
        laydate.render({
          elem: '#start_date',
          value: _this.addFormData.start_time,
          theme: 'grid',
          calendar: true,
          mark: {
            '0-12-31': '跨年'
          },
          max: 0,
          done:function (val) {
            _this.addFormData.start_time=val;
            console.log(_this.addFormData.start_time)
          }
        })
        laydate.render({
          elem: '#end_date',
          value: _this.addFormData.end_time,
          theme: 'grid',
          calendar: true,
          mark: {
            '0-12-31': '跨年'
          },
          max: 0,
          done:function (val) {
            _this.addFormData.end_time=val;
          }
        })
        form.render();
        _this.tableRender();
      });
      var GUID = WebUploader.Base.guid();//一个GUID
      $(function () {
          var $list = $('#thelist');
          _this.uploader = WebUploader.create({
            auto: false,
            swf: './static/uploader/Uploader.swf',
            server:'http://192.168.8.74/carauditapi/api',
            pick: '#picker',
            chunked: true,
            chunkSize: 2000000,//2M
            formData: {
              Authorization:OperatorUtils.getData('token'),
              guid: GUID,
              apitype:'Upload',
              btype:2,
              uploadType:'addNotify'
            },
            resize: false
          });
          _this.uploader.on('fileQueued', function (file) {
            $list.append('');
            var name = file.name;	//文件名
            var type = fileType(file.name);	//文件类型，获取的是文件的后缀
            var volume = bytesToSize(file.size);	//文件大小格式化
            var oTr = $("<tr></tr>");
            var str = '<td><cite title="' + name + '">' + name + '</cite></td>';
            str += '<td>' + type + '</td>';
            str += '<td>' + volume + '</td>';
            str += '<td id="jintutiao">';
            str += '<span id="baifenbi"></span>0%';
            str += '</td>';
            str += '<td id="uploding">等待上传</td>';
            $(".fileList").html(str)
          });
          var aa = 1;
          _this.uploader.on('uploadBeforeSend',function (file,data) {
            data.notifycontent=_this.addFormData.content;
            data.notifytitle= _this.addFormData.notifytitle;
            data.isuse = _this.addFormData.isuse;
            data.dtype = _this.addFormData.dtype;
          });
          _this.uploader.on('uploadProgress', function (file, percentage) {
            var $li = $('#' + file.id),
              $percent = $li.find('.progress .progress-bar');
            if (!$percent.length) {
              $percent = $('<div class="progress progress-striped active">' +
                '<div class="progress-bar" role="progressbar" style="width: 0%">' +
                '</div>' +
                '</div>').appendTo($li).find('.progress-bar');
            }
            $li.find('p.state').text('上传中');
            $("#uploding").html("上传中");
            $percent.css('width', percentage * 100 + '%');
            if (percentage == 1)
            {
              aa++;
            }
            if (aa<=2)
            {
              var shuzi=percentage * 100;
              $("#baifenbi").html(shuzi.toFixed(2));
            }
          });
          _this.uploader.on('uploadSuccess', function (file, response) {
            $('#' + file.id).find('p.state').text('已上传');
            var data = {
              Authorization:OperatorUtils.getData('token'),
              guid: GUID,
              apitype:'Merge',
              btype:2,
              dtype:_this.addFormData.dtype,
              uploadType:'addNotify',
              notifytitle:_this.addFormData.notifytitle,
              notifycontent:_this.addFormData.content,
              adName:_this.addFormData.name,
              isuse:_this.addFormData.isuse,
              name:file.name
            };
            $.ajax({
              type:"post",
              //  url:'http://192.168.8.74/carauditapi/api',
              url:'http://192.168.8.74/carauditapi/api',
              data:data,
              success:function () {
                $("#uploader .state").html("上传成功...");
                $("#uploding").html("上传成功");
                layer.closeAll();
                setTimeout(function () {
                  _this.tableRender();
                },1000)
              },
              error(){
                layer.msg('error',{time:200000})
              }
            });
          });
          _this.uploader.on('uploadError', function (file) {
            $('#' + file.id).find('p.state').text('上传出错');
          });
          _this.uploader.on('uploadComplete', function (file) {
            $('#' + file.id).find('.progress').fadeOut();
          });
          _this.uploader.on("uploadFinished", function () {
          });
        function bytesToSize(bytes) {
          var sizes = ['Bytes', 'KB', 'MB', 'G'];
          if (bytes == 0) return 'n/a';
          var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
          return (bytes / Math.pow(1024, i)).toFixed(1) + ' ' + sizes[i];
        }
        function fileType(name) {
          var nameArr = name.split(".");
          return nameArr[nameArr.length - 1].toLowerCase();
        }
      });
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


