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
          <label class="layui-form-label">广告代码</label>
          <div class="layui-input-block w-auto">
            <input type="text" name="user_code" placeholder="输入规范的广告代码" id="ad_code"  class="layui-input"  v-model="adFormData.code">
          </div>
        </div>
        <div class="layui-form-item mr-10">
          <label class="layui-form-label">商户名称</label>
          <div class="layui-input-block w-auto">
            <input type="text" name="user_code" placeholder="输入商户名称" id="ad_corp"  class="layui-input"  v-model="adFormData.adcorp">
          </div>
        </div>
        <div class="layui-form-item mr-10">
          <label class="layui-form-label">广告名称</label>
          <div class="layui-input-block w-auto">
            <input type="text" name="user_name" placeholder="输入广告名称" id="ad_name"  class="layui-input"  v-model="adFormData.name">
          </div>
        </div>
        <div class="layui-form-item mr-10">
          <label class="layui-form-label">选择时间</label>
          <div class="layui-inline mr0">
            <div class="layui-input-inline mr-4">
              <input type="text" name="date" id="start_date"  class="layui-input" v-model="adFormData.start_time">
            </div>
          </div>
        </div>
        <pre class="d_i_b mt8 mr-4">至</pre>
        <div class="layui-form-item ">
          <div class="layui-inline">
            <div class="layui-input-inline">
              <input type="text" id="end_date" name="date"  class="layui-input" v-model="adFormData.end_time">
            </div>
          </div>
        </div>
        <div class="layui-form-item  ml-10">
          <button class="layui-btn layui-btn-sm" id="role_search"><i class="layui-icon">&#xe615;</i>搜索</button>
          <button class="layui-btn layui-btn-sm layui-btn-primary ml-16" id="reset" @click="reset($event)"><i class="layui-icon">&#xe669;</i>重置</button>
        </div>
      </form>
    </div>
    <!-------- 这里是上传的区域 ------->
    <div class="middle-space"></div>
    <div class="main-content-body">
      <div class="main-content-body-right">
        <div class="main-content-body-right-top">
          <p><i class="iconfont mr-6">&#xe6fc;</i>广告列表</p>
        </div>
        <div class="main-content-right-bottom">
          <div class="layui-btn-container pore">
            <button @click.stop="add_ad" class="layui-btn layui-btn-sm add-users-btn"><i class="layui-icon layui-icon-add-circle"></i>添加广告</button>
          </div>
          <table class="layui-hide" id="ad_table" lay-filter="ad_table"></table>
        </div>
      </div>
    </div>
    <div id="add_ad_popup" class="hide">
      <form action="" class="layui-form layui-form-pane">
        <div class="layui-form-item display_block">
          <label class="layui-form-label">广告名称</label>
          <div class="layui-input-block w-auto">
            <input type="text" name="username" placeholder="请输入广告名称"  class="layui-input" v-model="addFormData.name">
          </div>
        </div>
        <div class="layui-form-item display_block">
          <label class="layui-form-label">商户名称</label>
          <div class="layui-input-block w-auto">
            <input type="text"  name="account" placeholder="请输入商户名称"  id="add_phone" class="layui-input" v-model="addFormData.adcorp">
          </div>
        </div>
        <div class="layui-form-item display_block">
          <label class="layui-form-label">广告类型</label>
          <div class="layui-input-block w-auto">
            <select id="add_status_set" name="interest" lay-filter="adtype" v-model="addFormData.adtype">
              <option value="1">图片</option>
              <option value="2">视频</option>
              <option value="3">文字</option>
            </select>
          </div>
        </div>
        <div class="layui-form-item layui-form-text display_block">
          <label  for="" class="layui-form-label pl20">备注(可选)</label>
          <div class="layui-input-block w-auto">
            <textarea rows="2" placeholder="请输入备注(可填可不填)" class="layui-textarea" v-model="addFormData.content"></textarea>
          </div>
        </div>
        <div class="layui-form-item display_block">
          <div class="upload-box">
            <div id="uploader" class="wu-example">
              <!--用来存放文件信息-->
              <div id="thelist" class="uploader-list"></div>
              <div class="btns">
                <div id="picker" class="layui-btn layui-btn-sm pore"><i class="layui-icon layui-icon-upload"></i> <span class="upload-type">选择图片</span></div>
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
      </form>
    </div>
    <div id="edit_popup" class="" style="display: none;">
      <form action="" class="layui-form layui-form-pane">
        <div class="layui-form-item d_i_b">
          <label class="layui-form-label">广告ID</label>
          <div class="layui-input-block w-160">
            <input type="text" name="username" placeholder="请输入广告ID" id="edit_name"  class="layui-input" v-model="editFormData.id">
          </div>
        </div>
        <div class="layui-form-item d_i_b ml-40">
          <label class="layui-form-label">广告编号</label>
          <div class="layui-input-block w-160">
            <input type="text" name="account" placeholder="请输入广告编号"  id="edit_account"  class="layui-input" v-model="editFormData.adcode">
          </div>
        </div>
        <div class="layui-form-item d_i_b">
          <label class="layui-form-label">广告名称</label>
          <div class="layui-input-block w-160">
            <input type="text" name="ad_name" placeholder="请输入广告名称" class="layui-input" v-model="editFormData.name">
          </div>
        </div>
        <div class="layui-form-item d_i_b ml-40">
          <label class="layui-form-label">商户名称</label>
          <div class="layui-input-block w-160">
            <input type="text" maxlength="11" name="account" placeholder="请输入商户名称"  id="edit_phone"  class="layui-input" v-model="editFormData.adcorp">
          </div>
        </div>
        <div class="layui-form-item d_i_b">
          <label class="layui-form-label">保存路径</label>
          <div class="layui-input-block w-160">
            <input type="text" maxlength="11" name="account" placeholder="请输入保存路径"  id="edit_phone"  class="layui-input" v-model="editFormData.savepath">
          </div>
        </div>
        <div class="layui-form-item d_i_b ml-40">
          <label class="layui-form-label">广告类型</label>
          <div class="layui-input-block w-160">
            <select id="edit_status_set" name="interest" lay-filter="edit_type" v-model="editFormData.adtype">
              <option value="1">图片</option>
              <option value="2">视频</option>
              <option value="3">文字</option>
            </select>
          </div>
        </div>
        <div class="layui-form-item layui-form-text display_block">
          <label  for="" class="layui-form-label pl20">备注(可选)</label>
          <div class="layui-input-block w-auto">
            <textarea rows="2" placeholder="请输入备注(可填可不填)" class="layui-textarea" v-model="addFormData.content" id="add_user_remark"></textarea>
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
        arr: [{name: 'role', value: 'role'}],
        Authorization:OperatorUtils.getData('token'),
        uploader:null,
        adFormData:{
          code:'',
          name:'',
          adcorp:'',
          start_time:this.$store.state.dateSel('-')[5],
          end_time:this.$store.state.dateSel('-')[0],
        },
        addFormData:{
          type:1,
          adcorp:'',
          name:'',
          adtype:'1',
          content:''
        },
        editFormData:{
          type:1,
          id:'',
          adcode:'',
          adcorp:'',
          name:'',
          adtype:'',
          savepath:'',
          content:''
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
      add_ad:function(e){
        var _this = this;
        e.preventDefault();
        layer.open({
          type:1,
          area:['800px','520px'],
          title:'添加广告',
          closeBtn:1,
          shadeClose:true,
          skin:'layui-layer-molv',
          btn:['确定添加','取消'],
          end:function(){
            $('#add_ad_popup').css('display','none');
          },
          yes:function(){
            _this.uploader.upload();
          },
          content:$('#add_ad_popup')
        });
      },
      reset: function (e) {
          e.preventDefault();
          this.searchData.msg='';
      },
      tableRender: function () {
        var _this = this;
        let type = 'GetAdTable';
        var data = {
          type: type,
          stime:_this.adFormData.start_time,
          etime:_this.adFormData.end_time,
        };
        layui.use(['table','form','laydate'], function () {
          var table = layui.table;
          var form = layui.form;
          form.on('select(adtype)',function (data) {
            var val = data.value;
            console.log(val)
            _this.addFormData.adtype=val;
            if(val==1){
              $('.upload-type').html('选择图片')
            }else {
              $('.upload-type').html('选择视频')
            }
          });
          var tableIns = table.render({
            elem: '#ad_table',
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
              {field: 'name', title: '广告名称',width:130},
              {field: 'adcorp', title: '商户名称',width:130},
              {field: 'adtype', title: '广告类型',width:100},
              {field: 'savepath', title: '保存路径',width:300},
              {field: 'content', title: '备注'},
              {
                field: 'operate', title: '操作',width:140, templet: function (d) {
                  return '<button adtype="'+d.adtype+'" standard="'+d.id+'" adcode="'+d.adcode+'" name="'+d.name+'" content="'+d.content+'" savepath="'+d.savepath+'" adcorp="'+d.adcorp+'" class="layui-btn-sm layui-btn operate-edit">编辑</button><buttonadtype="'+d.adtype+'" standard="'+d.id+'" adcode="'+d.adcode+'" name="'+d.name+'" content="'+d.content+'" savepath="'+d.savepath+'" adcorp="'+d.adcorp+'" class="layui-btn-sm layui-btn layui-btn-danger operate-del">删除</button>';
                }
              }
            ]],
            page: true,
            done: function (res) {
              $('#role_search').click(function (e) {
                e.preventDefault();
                var table_reload_data = {
                  adcode:_this.adFormData.code,
                  adcorp:_this.adFormData.adcorp,
                  name:_this.adFormData.name,
                  stime:_this.adFormData.start_time,
                  etime:_this.adFormData.end_time,
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
                _this.editFormData.id = $(this).attr('standard');
                _this.editFormData.adcode = $(this).attr('adcode');
                _this.editFormData.name = $(this).attr('name');
                _this.editFormData.savepath = $(this).attr('savepath');
                _this.editFormData.adcorp = $(this).attr('adcorp');
                _this.editFormData.adtype = $(this).attr('atype');
                $("#edit_status_set").find("option[value='"+ _this.editFormData.adtype+"']").prop("selected",true);
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
                  title:'编辑广告',
                  content:$('#edit_popup'),
                  end:function () {
                    $('#edit_popup').css({display:'none'});
                  },
                  btn:['确认修改','取消'],
                  yes:function () {
                    var type = 'EditAd';
                    var data = {
                      Id:_this.editFormData.id,
                      adcode:_this.editFormData.adcode,
                      adcorp:_this.editFormData.adcorp,
                      name:_this.editFormData.name,
                      adtype:_this.editFormData.adtype,
                      savepath:_this.editFormData.savepath,
                      content:_this.editFormData.content
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
              $('.operate-del').click(function () {
                var id = $(this).attr('standard');
                let type = 'AdDel';
                var data = {
                  id:id
                };
                data = config.deleteUrlTrans(type,data);
                layer.load(1);
                layer.confirm('确定要删除该条数据？', {
                  btn: ['确定','取消'],
                  skin:_this.$store.state.skin
                }, function(){
                  _this.$http.apiDelete('http://192.168.8.74/carauditapi/api',data).then(function (res) {
                    let code  = res.code;
                    if(code==200){
                      layer.msg('删除成功',{time:1200});
                      setTimeout(function () {
                        layer.closeAll();
                        _this.tableRender();
                      },1200)

                    }else {
                      layer.msg(res.message);
                      setTimeout(function () {
                        layer.closeAll();
                      },1200)
                    }

                  });

                }, function(index){
                  layer.close(index);
                });
              });
              $('td[data-field=\'adtype\']').children().each(function (index) {
               var text = $(this).text();
               if(text==1){
                 $(this).text('文字')
               }else if(text==2){
                 $(this).text('图片')
               }else if(text==3){
                 $(this).text('视频')
               }
              });
              $('td[data-field=\'content\']').children().each(function (index) {
                if(!$(this).text()){
                  $(this).text('未对该广告进行备注，可选择点击右侧编辑按钮对该广告进行修改····')
                }
              })
            }
          });
        });
      }
    },
    mounted() {
      let _this = this;
      layui.use(['form', 'layer', 'laydate','element'], function () {
        let form = layui.form, layer = layui.layer, laydate = layui.laydate,element=layui.element;
        laydate.render({
          elem: '#start_date',
          value: _this.adFormData.start_time,
          theme: 'grid',
          calendar: true,
          mark: {
            '0-12-31': '跨年'
          },
          max: 0,
          done:function (val) {
            _this.adFormData.start_time=val;
            console.log(_this.adFormData.start_time)
          }
        });
        laydate.render({
          elem: '#end_date',
          value: _this.adFormData.end_time,
          theme: 'grid',
          calendar: true,
          mark: {
            '0-12-31': '跨年'
          },
          max: 0,
          done:function (val) {
            _this.adFormData.end_time=val;
          }
        });
        _this.tableRender();
        form.render();
        /*---------------------------文件上传测试----------------------------------------------*/
        var GUID = WebUploader.Base.guid();//一个GUID
        $(function () {
            var $list = $('#thelist');
            _this.uploader = WebUploader.create({
              auto: false,
              swf: './static/uploader/Uploader.swf',
              server:HOST,
              pick: '#picker',
              chunked: true,
              chunkSize: 2000000,//2M
              formData: {
                Authorization:OperatorUtils.getData('token'),
                guid: GUID,
                apitype:'Upload',
                btype:1,
                dtype:_this.addFormData.adtype,
                uploadType:'addAd'
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
              data.content=_this.addFormData.content;
              data.adName= _this.addFormData.name;
              data.adcorp = _this.addFormData.adcorp;
              data.dtype = _this.addFormData.adtype;
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
                btype:1,
                dtype:_this.addFormData.adtype,
                uploadType:'addAd',
                adcorp:_this.addFormData.adcorp,
                content:_this.addFormData.content,
                adName:_this.addFormData.name,
                name:file.name
              };
              $.ajax({
                type:"post",
                //  url:'http://192.168.8.74/carauditapi/api',
                url:HOST,
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
          };
      });
    },
    watch(){
      this.$nextTick(function () {
        layui.use('form',function () {
          layui.form.render();
        })
      })
    }
  };
</script>


