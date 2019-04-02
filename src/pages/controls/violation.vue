<style scoped>
  .content-top {
    background: #fff;
    margin-top: 40px;
    margin-bottom: 20px;
  }
  .content-bottom {
    box-shadow:0 1px 4px 1px rgba(29, 29, 39, 0.15);
    background-color: #fff;
    padding: 10px;
  }
</style>
<template>
  <div>
    <div class="content">
      <div class="content-top clearfix">
        <div class="current-page">
          <p><i class="iconfont">&#xe653;</i>违章管理</p>
        </div>
        <form action="" class="layui-form layui-form-pane fl pl20">
          <div class="layui-form-item">
            <label class="layui-form-label">设备编号</label>
            <div class="layui-inline mr0">
              <div class="layui-input-inline">
                <input type="text" id="violation_dev_id" name="date" autocomplete="off" placeholder="输入设备编号" class="layui-input" v-model="violationFormData.devId">
              </div>
            </div>
          </div>
          <div class="layui-form-item">
            <label class="layui-form-label">身份证号</label>
            <div class="layui-inline mr0">
              <div class="layui-input-inline">
                <input type="text" id="violation_drivingLicenseno" placeholder="输入身份证号" name="date" autocomplete="off" class="layui-input" v-model="violationFormData.driverNumber">
              </div>
            </div>
          </div>
          <div class="layui-form-item">
            <label class="layui-form-label">车主姓名</label>
            <div class="layui-inline mr0">
              <div class="layui-input-inline">
                <input type="text" id="violation_drivingLicenseno" placeholder="输入车主姓名" name="date" autocomplete="off" class="layui-input" v-model="violationFormData.driverName">
              </div>
            </div>
          </div>
          <div class="layui-form-item">
            <label class="layui-form-label">车牌号码</label>
            <div class="layui-inline mr0">
              <div class="layui-input-inline">
                <input type="text"  placeholder="输入车牌号" name="date" autocomplete="off" class="layui-input" v-model="violationFormData.illegalId">
              </div>
            </div>
          </div>
          <div class="layui-form-item">
            <label for="" class="layui-form-label">车辆类型</label>
            <div class="layui-input-inline">
              <select name="" id="" v-model="violationFormData.carType">
                <option value="">全部</option>
                <option value="01">大型汽车</option>
                <option value="02">小型汽车</option>
                <option value="03">使馆汽车</option>
                <option value="04">领馆汽车</option>
                <option value="05">境外汽车</option>
                <option value="06">外籍汽车</option>
                <option value="07">普通摩托车</option>
                <option value="08">轻便摩托车</option>
                <option value="09">使馆摩托车</option>
                <option value="10">领馆摩托车</option>
                <option value="11">境外摩托车</option>
                <option value="12">外籍摩托车</option>
                <option value="13">低速车</option>
                <option value="14">拖拉机</option>
                <option value="15">挂车</option>
                <option value="16">教练汽车</option>
                <option value="17">教练摩托车</option>
                <option value="18">试验汽车</option>
                <option value="19">试验摩托车</option>
                <option value="20">临时入境汽车</option>
                <option value="21">临时入境摩托车</option>
                <option value="22">临时行驶车</option>
                <option value="23">警用汽车</option>
                <option value="24">警用摩托</option>
                <option value="25">原农机号牌</option>
                <option value="26">香港入出境车</option>
                <option value="27">澳门入出境车</option>
                <option value="31">武警号牌</option>
                <option value="32">军队号牌</option>
                <option value="99">其他号牌</option>
              </select>
            </div>
          </div>
          <div class="d_i_b">
            <div class="layui-form-item">
              <label class="layui-form-label">创建时间</label>
              <div class="layui-inline mr0">
                <div class="layui-input-inline ">
                  <input type="text" name="date" v-model="violationFormData.begintime" id="violation_start_date" class="layui-input">
                </div>
              </div>
            </div>
            <pre class="d_i_b mt8 ">至</pre>
            <div class="layui-form-item">
              <div class="layui-inline">
                <div class="layui-input-inline">
                  <input type="text" id="violation_end_date" name="date" autocomplete="off" class="layui-input" v-model="violationFormData.endtime">
                </div>
              </div>
            </div>
          </div>
          <button class="layui-btn layui-btn-sm vt" id="search"><i class="layui-icon">&#xe615;</i>搜索</button>
          <button class="layui-btn layui-btn-sm layui-btn-primary vt" @click="reset($event)"><i class="layui-icon">&#xe669;</i>重置</button>
        </form>
      </div>
      <div class="content-bottom">
        <table class="layui-hide" lay-filter="violation_device_table" id="violation_device_table"></table>
        <script type="text/html" id="violation_table_toolbar">
            <div class="layui-btn-container">
              <button class="layui-btn layui-btn-sm" lay-event="violation_get_data"><i class="layui-icon">&#xe609</i>导出选择</button>
              <button class="layui-btn layui-btn-sm" lay-event="violation_get_all_data"><i class="iconfont icon-daochu"></i>导出全部</button>
              <p class="col-red font14">提示：点击表格右侧详情按钮查看该违章详情信息</p>
            </div>
        </script>
      </div>
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
        popupData:'',
        Authorization:OperatorUtils.getData('token'),
        violationFormData:{
          begintime:'',
          endtime:'',
          devId:'',
          driverNumber:'',
          driverName:'',
          illegalId:'',
          carType:""
        }
      };
    },
    methods: {
      tableRender(table,tableCheckboxUtil){
        var _this = this;
        let url = HOST
        var tableIns= table.render({
          id:'violatioin_table',
          elem: '#violation_device_table',
          checkbox: true,
          url: url,
          limit:20,
          limits:[20,40,50,60,80],
          where:{
            type:'LoadViolationList'
          },
          even: true,
          loading:true,
         toolbar:'#violation_table_toolbar',
          response:{
            statusCode:200
          },
         headers:{
           'Authorization':_this.Authorization
         },
          cols: [[
            {type: 'checkbox'},
            {field:'devId', title: '设备编号',style:'color:#f40',width:90},
            {field:'driverName', title: '车主',width:84},
            {field:'carType', title: '车型',width:100},
            {field:'carOwnerMobile',title:'车主手机',width:130},
            {field:'driverIdNumber',title:'身份证号',width:170},
            {field:'illegalId', title: '车牌号',width:110},
            {field:'decisionId', title: '处罚书号',width:100},
            {field:'createTime', title: '创建时间',width:146},
            {field:'illegalContent', title: '违规内容',width:90},
            {field:'illegalLocation', title: '违规地点'},
            {field:'operate',title:'操作', width:96,templet:function (d) {
                return '<button id="'+d.billId+'" class="layui-btn layui-btn-sm  violation-details"><i class="font14 layui-icon layui-icon-survey"></i>详情</button>';
              }}
          ]],
           page: true,
          done:function(res){
            $('#search').click(function (e) {
              e.preventDefault();
              layer.msg('搜索')
              var reloadData = {
                type:'LoadViolationList',
                devId:_this.violationFormData.devId,
                driverNumber:_this.violationFormData.driverNumber,
                carType:_this.violationFormData.carType,
                illegalId:_this.violationFormData.illegalId,
                driverName:_this.violationFormData.driverName,
                starttime:_this.violationFormData.start_time,
                endtime:_this.violationFormData.end_time,
              };
              tableIns.reload({
                where:reloadData,
                page:{
                  curr:1
                }
              });
            });
            $('td[data-field="DEVSTATE"]').children().each(function (val) {
              var value = $(this).text();
              var operate_btn = $(this).parents('td').siblings('td[data-field="8"]').find('.operate-btn');
              if(value==0){
                $(this).html('<span class="abnormal-btn">禁用</span>');
              }else if(value==1){
                $(this).html('<span class="normal-btn">启用</span>');
              }else if(value==2){
                $(this).html('<span class="abnormal-btn">删除</span>');
              }
            });
            $('td[data-field="carType"]').children().each(function (val) {
              var value = $(this).text();
              vehicle_type($(this),value)
            });
           function vehicle_type (elem,value) {
             switch (value) {
               case '01':
                 elem.text('大型汽车')
               break;
               case '02':
                 elem.text('小型汽车')
                   break;
             }
           };
            tableCheckboxUtil.checkedDefault({
              gridId:'violatioin_table',
              fieldName:'billId'
            });
            tableCheckboxUtil.init({
              gridId:'violatioin_table',
              filterId:'violation_device_table',
              fieldName:'billId'
            });
            $('.violation-details').bind('click',function () {
              var billId = $(this).attr("id");
              _this.$router.push({name: '违章管理 / 违章详情',params:{setCode:billId}});
            })
            table.on('toolbar(violation_device_table)', function(obj){
              let events = obj.event;
              if(events=='violation_get_data'){
                var select_data = tableCheckboxUtil.getValue({
                  gridId:'violatioin_table'
                });
                var length = select_data.length;
                console.log(length)
                if(length<1){
                  layer.msg('最少选择一条数据')
                }else {
                  let type = 'ExportLoadViolationList';
                  var str ='';
                  for(var i = 0;i< length; i++){
                      str+=','+select_data[i]
                  }
                  var data = {
                    paramid:str.substring(1)
                  }
                  data=config.urlTransition(type,data);
                  _this.$http.apiPost(HOST,data,{responseType:'arraybuffer'}).then(function (res) {
                    _this.download(res)
                  })
                }
              }else if (events=='violation_get_all_data'){
                _this.$http.apiPost(HOST,{type:'ExportLoadViolationList',data:{paramid:''}},{responseType:'arraybuffer'}).then(function (res) {
                  _this.download(res)
                })
              } ;
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
      returnF(){
        $('#violation_details_popup').addClass('hide').animate({
          display: 'none',
          'opacity': 0
        }, 500,function () {
          $('.content').removeClass('hide').animate({display: 'block', 'opacity': 1},500);
        })
      },
      download(res){
        if (!res) {
          return
        }
        let blob = new Blob([res],{type:'application/octet-stream'});
        var time = new Date().getTime();
        var filename = "下载资料"+time+'.xls';
        let url = window.URL.createObjectURL(blob);
        let link = document.createElement('a');
        link.style.display = 'none';
        link.href = url;
        link.setAttribute('download',filename);
        document.body.appendChild(link);
        link.click()
      }
    },
    computed: {

    },
    mounted() {
      let _this = this;
      layui.config({
        base:'./static/layui/extend/tableCheckBoxUtil/'
      }).use(['form', 'layer', 'table','tableCheckBoxUtil'], function () {
        var form = layui.form;
        var table = layui.table;
        var tableCheckBoxUtil = layui.tableCheckBoxUtil;
        _this.table=table;
        form.on('select(device_status)',function(data){
          _this.addFormData.status = data.value;
        });
        form.render();
        _this.tableRender(_this.table,tableCheckBoxUtil);
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

    },
    beforeUpdate() {

    },
    updated() {

    }
  };
</script>

