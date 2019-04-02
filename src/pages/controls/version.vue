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
    top: 105px;
    z-index: 999;
  }

</style>
<style>
  .history-version-box {
    width: 100%;
    position: absolute;
    left: 0;
  }
  .history-version-box li {
    float: left;
    width: 12.5%;
    line-height: 30px;
    font-size: 12px;
    color: #666;
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
              <select name="version" lay-filter="version">
                <option value="2" name="">最新版本</option>
              </select>
            </div>
          </div>
          <button class="layui-btn layui-btn-sm" id="version_search"><i class="layui-icon mr-4">&#xe615;</i>搜索</button>
        </form>
      </div>
      <div class="table-area">
        <table class="layui-hide" id="jurisdiction" lay-filter="jurisdiction"></table>
         <script type="text/html" id="toolbar">
             <p>提示：</p>
         </script>
      </div>
    </div>
    <div class="hide" id="delete_content" ref="deleteContent"><button class="layui-btn layui-btn-sm" @click.stop="showMsg">{{page.del}}</button></div>
    <div class="hide" id="history_version">
      <table class="layui-table layui-hide" lay-filter="history_version_table" id="history_version_table"></table>
      <!--<ul class="layui-timeline">
        <li class="layui-timeline-item" v-for="(val,index) in versionDatas" :key="index">
          <i class="layui-icon layui-timeline-axis">&#xe63f;</i>
          <div class="layui-timeline-content layui-text">
            <h3 class="layui-timeline-title">{{val.createTime}}</h3>
            <p>
             {{versionName}}+'相关历史信息'
              <br><i class="iconfont icon-yuandianxiao"></i>{{val.versionCode}}
              <br><i class="iconfont icon-yuandianxiao"></i>{{val.versionName}}
              <br><i class="iconfont icon-yuandianxiao"></i>{{val.createUserid}} <i class="layui-icon"></i>
            </p>
          </div>
        </li>
      </ul>-->
    </div>
    <div class="hide" id="version_upload">
      <form action="" class="layui-form">
        <div class="layui-form-item">
          <input type="text" placeholder="输入应用名称" class="layui-input" v-model="uploadFormData.appName">
        </div>
        <div class="layui-form-item">
          <select name="interest" lay-filter="isForced">
            <option value="">是否强制更新</option>
            <option value="0">否</option>
            <option value="1">是</option>
          </select>
        </div>
        <div class="layui-form-item">
          <input type="text" placeholder="输入更新版本名称" class="layui-input" v-model="uploadFormData.versionName">
        </div>
        <div class="layui-form-item">
          <select name="interest" lay-filter="isAllUpdate" v-model="uploadFormData.allUpdate">
            <option value="">是否全部更新</option>
            <option value="0">否</option>
            <option value="1">是</option>
          </select>
        </div>
        <div class="layui-form-item">
          <input type="text" placeholder="输入备注" class="layui-input" v-model="uploadFormData.remark">
        </div>
      </form>
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
  </div>
</template>

<script>

  import config from '@/config';
  import OperatorUtils from '../../utils/OperatorUtils';
  export default {
    name: "res",
    data() {
      return {
        msg: "权限节点",
        arr: {name: "版本控制", value: "res"},
        table:'',
        uploader:'',
        versionDatas:null,
        Authorization:OperatorUtils.getData('token'),
        page:{
          add:'确定',
          del:'确定'
        },
        uploadFormData:{
          appName:'',
          remark:'',
          versionName:'',
          isForced:'',
          isAllUpdate: ''
        }
      }
    },
    methods: {
      tableRender:function(table){
        let url  = HOST;
        let _this = this;
        var tableIns= table.render({
          elem: '#jurisdiction',
          url: url,
          loading:true,
          toolbar: '#toolbar',
          where:{
            type:'GetAllVersionsData',
            dtype:'2'
          },
          response:{
            statusCode:200
          },
          headers:{
            'Authorization':_this.Authorization
          },
          title: '用户数据',
          even:true,
          cols: [[
            {field:'versionName',title:"版本名称"},
            {field: 'appName', title: '应用名称'},
            {field:'versionCode',title:'版本号'},
            {field: 'createTime', title: '创建时间'},
            {field: 'updateTime', title: '更新时间'},
            {field: 'dataState', title: '状态'},
            {field: 'uploadVersion',title: '上传更新',width:90,templet:function (d) {
                return'<a href="javascript:;" appName="'+d.appName+'" class="upload-version color-blue tdu">上传版本</a>';
              }},
            {field: 'uploadVersion',title: '版本下载',width:90,templet:function (d) {
                return'<a href="javascript:;" appCode="'+d.appCode+'" class="download-version color-blue tdu">下载文件</a>';
              }},
            {field: 'historyVersion', title: '历史版本',width:100,templet:function (d) {
                return'<button appName="'+d.appName+'" class="layui-btn layui-btn-sm history-version">历史版本</button>';
              }}
          ]],
          page: true,
          done:function (res) {
            layer.closeAll('loading')
            $("td[data-field='dataState']").children().each(function (val) {
              var value = $(this).text();
              value==1? $(this).html('<span class="normal-btn">正常</span>'): $(this).html('<span class="abnormal-btn">异常</span>')
            })
            $('#version_search').click(function (e) {
              e.preventDefault();
              var currentVal = $('select[name="version"]').val()
              tableIns.reload({
                where: {
                  type:'GetAllVersionsData',
                  dtype:currentVal
                },
                page:{
                  curr:1
                }
              })
            })
            $('.history-version').click(function (e) {
              var appName = $(this).attr('appName')
              var parents = $(this).parents('tr')
              layer.open({
                type:1,
                content:$('#history_version'),
                yes:function () {
                  layer.closeAll();
                },
                success:function(){
                  table.render({
                    elem: '#history_version_table',
                    url: 'http://192.168.8.74/carauditapi/api',
                    loading:true,
                    where:{
                      type:'GetAllVersionsData',
                      dtype:'1',
                      appName:appName
                    },
                    response:{
                      statusCode:200
                    },
                    headers:{
                      'Authorization':_this.Authorization
                    },
                    title: '用户数据',
                    even:true,
                    cols: [[
                      {field:'versionName',title:"版本名称"},
                      {field: 'appName', title: '应用名称'},
                      {field:'versionCode',title:'版本号'},
                      {field: 'createTime', title: '创建时间',width:160},
                      {field: 'updateTime', title: '更新时间',width:160},
                      {field: 'dataState', title: '状态'},
                      {field: 'historyDownload', title: '历史下载',templet:function (d) {
                          return'<button appName="'+d.appName+'" class="layui-btn layui-btn-sm history-version">版本下载</button>';
                       }}
                    ]],
                    page: true,
                    done:function () {
                      ;
                    }
                  })
                },
                title:'历史版本',
                area:'1000px',
                shadowClose:true
              })
            })
            $('.upload-version').click(function () {
              layer.open({
                type: 1,
                content: $('#version_upload'),
                area:['1000px','400px'],
                yes: function () {
                  console.log(_this.uploadFormData);
                  _this.uploader.upload()
                },
                success:function () {
                  var GUID = WebUploader.Base.guid();//一个GUID
                  var $list = $('#thelist');
                  _this.uploader = WebUploader.create({
                    auto: false,
                    swf: './static/uploader/Uploader.swf',
                    //server:HOST,
                    server:'http://192.168.8.74/carauditapi/api',
                    pick: '#picker',
                    chunked: true,
                    chunkSize: 2000000,//2M
                    formData: {
                      Authorization:OperatorUtils.getData('token'),
                      guid: GUID,
                      versionName:_this.uploadFormData.versionName,
                      remark:_this.uploadFormData.remark,
                      apitype:'VersionUpload',
                      appName:_this.uploadFormData.appName,
                      isForced:_this.uploadFormData.isForced,
                      isAllUpdate:_this.uploadFormData.isAllUpdate,
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
                    data.remark= _this.uploadFormData.remark;
                    data.isForced = _this.uploadFormData.isForced;
                    data.isAllUpdate = _this.uploadFormData.isAllUpdate;
                    data.appName = _this.uploadFormData.appName
                    data.versionName = _this.uploadFormData.versionName
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
                       apitype:'VersionMerge',
                       versionName:_this.uploadFormData.versionName,
                       remark:_this.uploadFormData.remark,
                       appName:_this.uploadFormData.appName,
                       isForced:_this.uploadFormData.isForced,
                       isAllUpdate:_this.uploadFormData.isAllUpdate,
                       name:file.name
                     };
                     $.ajax({
                       type:"post",
                         url:'http://192.168.8.74/carauditapi/api',
                       //url:HOST,
                       data:data,
                       success:function () {
                         $("#uploader .state").html("上传成功...");
                         $("#uploding").html("上传成功");
                         setTimeout(function () {
                           layer.closeAll();
                           this.tableRender();
                         },1500)
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
                  };
                },
                btn:['确定配置','取消'],
                end:function () {
                  ;
                },
                shadeClose:true,
                page:true
              })
            })
            $('.download-version').click(function () {
              let download_type = 'VersionFileDownload'
              let appCode = $(this).attr('appCode');
              layer.load(1)
              _this.$http.apiPostDownload('http://192.168.8.74/carauditapi/api',config.urlTransition(download_type,{paramid:appCode}),{responseType:'arraybuffer'}).then(function (res) {
                var fileName = decodeURI(res.headers.filename.split('.')[0])
                fileName = fileName+'.'+res.headers.filename.split('.')[1]
                _this.download(res.data,fileName)
              });
            })
          }
        })
      },
      download (res,name) {
        if (!res) {
          return
        }
        let blob = new Blob([res],{type:'application/octet-stream'});
        var time = new Date().getTime();
        var filename = name;
        let url = window.URL.createObjectURL(blob);
        let link = document.createElement('a');
        link.style.display = 'none';
        link.href = url;
        link.setAttribute('download',filename);
        document.body.appendChild(link);
        link.click()
        layer.closeAll('loading')
      }
    },
    mounted() {
      var _this = this;
      layui.use(['form', 'layer','table'], function () {
        var layer = layui.layer;
        var form = layui.form;
        var table = layui.table;
        _this.table=table;
        form.on('select(isForced)',function (data) {
          var value = data.value;
          _this.uploadFormData.isForced = value;
        });
        form.on('select(isAllUpdate)',function (data) {
          var value = data.value;
          console.log(value)
          _this.uploadFormData.isAllUpdate = value;
        });
        form.render();
        _this.tableRender(_this.table)
      });

    }
  }
</script>

