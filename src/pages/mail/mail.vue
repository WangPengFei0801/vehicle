<style scoped>
  .layui-tab-title {
    height: 74px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
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
    from{
      opacity: 0;
    }
    to{
      opacity: 1;
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
  .print-box {
    padding: 15.12px;
  }
  .print-area {
    width: 365px;
    height: auto;
    border: 2px dashed #222;
  }
  .print-area  section,
  .print-area * {
    box-sizing:border-box;
  }
  .print-area > section {
    float: left;

  }
  .print-content-header-left,.print-content-header-right {
    float: left;
  }
  .print-content-header-left-logo {
    width: 152px;
    height: 22.8px;
    border-bottom: 2px dashed #aaa;
  }
  .print-content-header-left-body {
    height: 53.2px;
    width: 152px;
    border-bottom: 2px dashed #222;
  }
  .print-content-header-left-body>h3 {
    font-size: 30px;
    text-align: center;
    line-height: 53px;
    font-family: SimSun-ExtB;
  }
  .print-content-header-right {
    width: 190px;
    height: 76px;
    border-left: 2px dashed #222;
    border-bottom: 2px dashed #222;
  }
  .print-content-body-first {
    height: 57px;
  }
  .print-content-body-first > div{
    float: left;
  }
  .print-content-body-first > div:nth-child(1){
    width: 175px;
    height: 57px;
    border-bottom: 2px dashed #222;
  }
  .print-content-body-first > div:nth-child(2){
    width: 190px;
    height: 57px;
    border-left: 2px dashed #222;
    border-bottom: 2px dashed #222;
  }
  .print-content-body-second {
    width: 365px;
    height: 64.6px;
    border-bottom: 2px dashed #222;
  }
  .print-content-body-third {
    height: 53.2px;
  }
  .print-content-body-third > div{
    float: left;
  }
  .print-content-body-third > div:nth-child(1){
    width: 152px;
    height: 53.2px;
    border-bottom: 2px dashed #222;
  }
  .print-content-body-third > div:nth-child(2){
    width: 213px;
    height: 53.2px;
    border-left: 2px dashed #222;
    border-bottom: 2px dashed #222;
  }
  .print-content-body-fourth {
    width: 365px;
    height: 76px;
    border-bottom: 2pxdashed #222;
  }
  .print-river {
    width: 365px;
    height: 15.2px;
    border-bottom:2px dashed #222;
    border-top: 2px dashed #222;
  }
  .print-content-footer-first{
    width: 365px;
    height: 57px;
    border-bottom: 2px dashed #222;
  }
  .print-content-footer-first > div {
    width: 201px;
    float: left;
    height: 57px;
  }
  .print-content-footer-first > div:nth-child(2){
    width: 163.4px;
  }
  .print-content-footer-second{
    height: 64.6px;
  }
  .print-content-footer-second > div{
    float: left;
  }
  .print-content-footer-second > div:nth-child(1){
    width:152px;
    height: 64.6px;
    border-bottom: 2px dashed #222;
  }
  .print-content-footer-second > div:nth-child(2){
    width: 213px;
    height: 64.6px;
    border-left: 2px dashed #222;
    border-bottom: 2px dashed #222;
  }
  .print-content-footer-third {
    height: 91.2px;
  }
  .print-content-footer-third>div {
    float: left;
  }
  .print-content-footer-third-top {
    width: 258.4px;
    height: 64.6px;
    border-bottom: 2px dashed #222;
  }
  .print-content-footer-third-bottom {
    width: 258.4px;
    height: 26.6px;
  }
  .print-content-footer-third>div:nth-child(2){
    width:106.4px;
    height: 91.2px;
    border-left: 2px dashed #222;
    text-align: center;
  }
  #print_content {
    width: 400px;
    margin: 0 auto;
  }
</style>
<template>
    <div>
      <div class="layui-tab layui-tab-card" lay-filter="docDemoTabBrief">
        <ul class="layui-tab-title clearfix">
          <li  class="layui-this"><i class="iconfont display_block font22">&#xe659;</i><span>驾驶证</span></li>
          <li><i class="iconfont display_block font22">&#xe63b;</i><span>行驶证</span></li>
          <li><i class="layui-icon display_block font22">&#xe609;</i><span>资料下载</span></li>
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
                  <button  class="layui-btn layui-btn-sm" lay-filter="search" id="search_btn"><i class="layui-icon">&#xe615;</i>搜索</button>
                  <button  @click="driver_reset($event)" class="layui-btn layui-btn-primary layui-btn-sm "><i class="layui-icon">&#xe669;</i>重置</button>
                  <button class="layui-btn layui-btn-sm" id="test_table_data">测试获取表格选中项</button>
                </div>
              </form>
            </div>
            <div class="content-first-bottom">
              <table class="layui-hide" id="mail_driver_table" lay-filter="mail_driver_table"></table>
           <script type="text/html" id="mail_driver_table_toolbar">
              <div class="layui-btn-container">
              <button class="layui-btn layui-btn-sm" lay-event="get_select_data"><i class="layui-icon">&#xe609</i>导出选择列</button>
              </div>
          </script>
            </div>
          </div>
          <div class="layui-tab-item">
            <div class="content-second-top">
              <form action="" class="layui-form layui-form-pane">
                <div class="layui-form-item">
                  <div class="layui-inline mr2">
                    <label class="layui-form-label">创建时间</label>
                    <div class="layui-input-block">
                      <input type="text" name="date" id="driving_start_time" autocomplete="off" class="layui-input" v-model="drivingFormData.start_time" readonly>
                      <i class="layui-icon date-icon">&#xe637;</i>
                    </div>
                  </div>
                </div>
                <pre class="d_i_b mt8">至</pre>
                <div class="layui-form-item">
                  <div class="layui-inline w-120">
                    <input type="text" name="date" id="driving_end_time" autocomplete="off" class="layui-input" v-model="drivingFormData.end_time" readonly>
                    <i class="layui-icon date-icon">&#xe637;</i>
                  </div>
                </div>
                <div class="layui-form-item">
                  <label class="layui-form-label">用户姓名</label>
                  <div class="layui-input-inline">
                    <input type="text" maxlength="11" name="phone" v-model="drivingFormData.email_username" placeholder="请输入姓名" id="email_driving_username" autocomplete="off" class="layui-input">
                  </div>
                </div>
                <div class="layui-form-item">
                  <label class="layui-form-label">驾驶证号</label>
                  <div class="layui-input-inline">
                    <input type="text" maxlength="11" name="phone" v-model="drivingFormData.email_driver_card" placeholder="请输入驾驶证号" id="email_driving_card" autocomplete="off" class="layui-input">
                  </div>
                </div>
                <div class="layui-form-item">
                  <label class="layui-form-label">快递单号</label>
                  <div class="layui-input-inline">
                    <input type="text" maxlength="11" name="phone" v-model="drivingFormData.email_number" placeholder="请输入快递单号" id="email_driving" autocomplete="off" class="layui-input">
                  </div>
                </div>
                <div class="layui-form-item">
                  <button class="layui-btn layui-btn-sm" lay-filter="search" id="search_btn_s"><i class="layui-icon">&#xe615;</i>搜索</button>
                </div>
              </form>
            </div>
            <div class="content-second-bottom">
               <script type="text/html" id="vehicle_toolbar">
              <div class="layui-btn-container">
              <button class="layui-btn layui-btn-sm" lay-event="get_select_data_3"><i class="layui-icon">&#xe601</i>批量导出</button>
              </div>
          </script>
              <table class="layui-hide" id="mail_driving_table" lay-filter="mail_driving_table"></table>
            </div>
          </div>
          <div class="layui-tab-item">
            <div class="content-second-top">
              <form action="" class="layui-form layui-form-pane">
                <div class="layui-form-item">
                  <div class="layui-inline mr2">
                    <label class="layui-form-label">创建时间</label>
                    <div class="layui-input-block">
                      <input type="text" name="date" id="download_start_time" autocomplete="off" class="layui-input" v-model="downloadFormData.start_time" readonly>
                      <i class="layui-icon date-icon">&#xe637;</i>
                    </div>
                  </div>
                </div>
                <pre class="d_i_b mt8">至</pre>
                <div class="layui-form-item">
                  <div class="layui-inline w-120">
                    <input type="text" name="date" id="download_end_time" autocomplete="off" class="layui-input" v-model="downloadFormData.end_time" readonly>
                    <i class="layui-icon date-icon">&#xe637;</i>
                  </div>
                </div>
                <div class="layui-form-item">
                  <label class="layui-form-label">用户姓名</label>
                  <div class="layui-input-inline">
                    <input type="text" maxlength="11" name="phone" v-model="downloadFormData.email_username" placeholder="请输入姓名" id="email_download_username" autocomplete="off" class="layui-input">
                  </div>
                </div>
                <div class="layui-form-item">
                  <label class="layui-form-label">驾驶证号</label>
                  <div class="layui-input-inline">
                    <input type="text" maxlength="11" name="phone" v-model="downloadFormData.email_driver_card" placeholder="请输入驾驶证号" id="email_download_card" autocomplete="off" class="layui-input">
                  </div>
                </div>
                <div class="layui-form-item">
                  <label class="layui-form-label">快递单号</label>
                  <div class="layui-input-inline">
                    <input type="text" maxlength="11" name="phone" v-model="downloadFormData.email_number" placeholder="请输入快递单号" id="email_download" autocomplete="off" class="layui-input">
                  </div>
                </div>
                <div class="layui-form-item">
                  <button class="layui-btn layui-btn-sm" lay-filter="search" id="search_btn_t"><i class="layui-icon">&#xe615;</i>搜索</button>
                </div>
              </form>
            </div>
            <div class="content-second-bottom">
               <script type="text/html" id="download_toolbar">
              <div class="layui-btn-container">
              <button class="layui-btn layui-btn-sm" lay-event="get_select_data_3"><i class="layui-icon">&#xe601</i>批量下载</button>
              </div>
          </script>
              <table class="layui-hide" id="mail_download_table" lay-filter="mail_download_table"></table>
            </div>
          </div>
        </div>
      </div>
      <div id="print_content" class="hide">
        <div class="print-box" v-for="val in email_msg" :key="val.id">
          <div id="print_area" class="print-area clearfix">
            <section class="print-content-header ">
              <div class="print-content-header-left">
                <div class="print-content-header-left-logo">
                    邮政快递单
                </div>
                <div class="print-content-header-left-body"><h3>标准快递</h3></div>
              </div>
              <div class="print-content-header-right"><img :src="val.barcode" alt=""></div>
            </section>
            <section class="print-content-body">
              <section class="print-content-body-first ">
                <div class="print-content-body-left">寄件：<span>寄件人手机：<i></i></span><span>寄件地址：<i></i></span></div>
                <div class="print-content-body-right">{{val.scontactor}}</div>
              </section>
              <section class="print-content-body-second ">
                  收件：<span>收件人手机：<i>{{val.mobile}}</i></span>
                <span>收件人地址：<i>{{val.address}}</i></span>
              </section>
              <section class="print-content-body-third ">
                <div>
                  <p>付款方式：<span>货到付款</span></p>
                  <p>计费金额（KG）：<span>1.4kg</span></p>
                  <p>报价金额（元）：<span>100元以内</span></p>
                </div>
                <div>
                  <p>收件人\代收人：<span>{{val.name}}</span></p>
                  <p>签收时间：<span>{{val.LossTime}}</span></p>
                  <p>快递送达：经收件人允许或收件人允许的代收人签收</p>
                </div>
              </section>
              <section class="print-content-body-fourth ">
                <div>
                  <p>订单号：<img src="" alt=""></p>
                  <p>件数：<span></span>重量（KG）：<span>1.4kg</span></p>
                </div>
                <div>
                  配货信息：<strong></strong>
                </div>
              </section>
            </section>
            <section class="print-river"></section>
            <section class="print-content-footer ">
              <section class="print-content-footer-first">
                <div><img :src="val.barcode"  width="120"/></div>
                <div><img src="../../../static/assets/img/EMS.jpg"  width="170"/></div>
              </section>
              <section class="print-content-footer-second ">
                <div>
                  寄件：<span>寄件人手机：<i>{{val.scustMobile}}</i></span>
                  <span>{{val.scustAddr}}</span>
                </div>
                <div>
                  收件：<span>收件人手机：<i>{{val.mobile}}</i></span>
                  <span>{{val.address}}</span>
                </div>
              </section>
              <section class="print-content-footer-third">
                <div class="">
                  <div class="print-content-footer-third-top">
                    备注：<strong>收货前请确认包装是否完好，有无破损，如有问题，请拒绝签收。</strong>
                  </div>
                  <div class="print-content-footer-third-bottom"><span>网址：www.ems.com.cn</span><span>客服电话：11183</span></div>
                </div>
                <div><img src="../../../static/assets/img/qrcode_for_ems.jpg" :width="91" alt=""></div>
              </section>

            </section>
          </div>
        </div>

      </div>
    </div>
</template>

<script>
  import config from '@/config';
  export default {
    name: 'mail',
    data () {
      return {
        msg: 'mail-service',
        arr: [{name: '', value: ''}],
        tableF:'',
        qrcode_src:'../../../static/assets/img/qrcode_for_ems.jpg',
        bar_code:null,
        Authorization:OperatorUtils.getData('token'),
        emailFormData:{
          start_time: this.$store.state.dateSel('-')[2],
          end_time: this.$store.state.dateSel('-')[3],
          email_number:'',
          email_username:'',
          email_driver_card:''
        },
        drivingFormData:{
          start_time: this.$store.state.dateSel('-')[2],
          end_time: this.$store.state.dateSel('-')[3],
          email_number:'',
          email_username:'',
          email_driver_card:''
        },
        downloadFormData:{
          start_time: this.$store.state.dateSel('-')[2],
          end_time: this.$store.state.dateSel('-')[3],
          email_number:'',
          email_username:'',
          email_driver_card:''
        },
        email_msg:[]
      };
    },
    methods: {
      tableRender(table,tableCheckBox){
        var _this =  this;
        var tableIns = table.render({
          id:'driver_GridCheckBoxTable',
          elem: '#mail_driver_table',
          url: HOST+'?type=LoadDrivingDataList&userid=29',
          loading: true,
          even: true,
          toolbar: '#mail_driver_table_toolbar',
          response: {
            statusCode: 200
          },
          limit:20,
          limits:[20,40,60,80,90],
          headers:{
            'Authorization':_this.Authorization
          },
          cols: [[
            {type: 'checkbox',style:'background:#f4f4f4'},
            {field: 'name', title: '姓名',width:90},
            {field: 'sex', title: '性别',width:60},
            {field: 'mobile', title: '手机号',width:120},
            {field: 'createTime', title: '创建时间',width:170},
            {field: 'idCardNumber', title: '驾驶证号',width:170},
            {field: 'bType', title: '业务类型',width:90},
            {field: 'address', title: '地址'},
            {
            field: 'operate', title: '操作',width:96, templet: function (d) {
              return '<button identity="'+d.ROLE_NAME+'" status="'+d.STATUS+'" value="'+d.id+'" class="layui-btn-sm layui-btn mr-10 operate-print"><i class="layui-icon layui-icon-print vm"></i>订单</button>';
            }
            }
          ]],
          page: true,
          done: function (res) {
            $('.operate-print').click(function () {
              var $this = $(this);
              layer.open({
                type: 1,
                title: false,
                area: ['100%', '100%'],
                shadeClose: true,
                skin: _this.$store.state.skin,
                closeBtn: 1,
                anim: 2,
                success: function () {
                  var url = HOST;
                  let type = 'PrintExpressData';
                  var data = {
                    id:[$this.attr('value')],
                    type:1,
                    ptype:1
                  };
                  data = config.urlTransition(type,data);
                  _this.$http.apiPost(url,data).then(function (res) {
                    _this.email_msg = res.data;
                  })
                },
                btn: ['确定打印', '取消'],
                yes: function () {
/*----------------------------------------------------------------------------------------*/
                  function getjQueryObject(string) {
                    // Make string a vaild jQuery thing
                    var jqObj = $("");
                    try {
                      jqObj = $(string)
                        .clone();
                    } catch (e) {
                      jqObj = $("<span />")
                        .html(string);
                    }
                    return jqObj;
                  }
                  function printFrame(frameWindow) {
                    // Print the selected window/iframe
                    var def = $.Deferred();
                    try {
                      setTimeout(function () {
                        frameWindow.focus();
                        try {
                          if (!frameWindow.document.execCommand('print', false, null)) {
                            frameWindow.print();
                          }
                        } catch (e) {
                          frameWindow.print();
                        }
                        frameWindow.close();
                        def.resolve();
                      }, 250);
                    } catch (err) {
                      def.reject(err);
                    }
                    return def;
                  }
                  function printContentInNewWindow(content) {
                    var w = window.open();
                    w.document.write(content);
                    w.document.close();
                    return printFrame(w);
                  }
                  function isNode(o) {
                    return !!(typeof Node === "object" ? o instanceof Node : o && typeof o === "object" && typeof o.nodeType === "number" && typeof o.nodeName === "string");
                  }
                  $.print = $.fn.print = function () {
                    var options, $this, self = this;
                    if (self instanceof $) {
                      self = self.get(0);
                    }
                    if (isNode(self)) {
                      $this = $(self);
                      if (arguments.length > 0) {
                        options = arguments[0];
                      }
                    } else {
                      if (arguments.length > 0) {
                        // $.print(selector,options)
                        $this = $(arguments[0]);
                        if (isNode($this[0])) {
                          if (arguments.length > 1) {
                            options = arguments[1];
                          }
                        } else {
                          // $.print(options)
                          options = arguments[0];
                          $this = $("html");
                        }
                      } else {
                        // $.print()
                        $this = $("html");
                      }
                    }
                    // Default options
                    var defaults = {
                      globalStyles: true,
                      mediaPrint: false,
                      stylesheet: null,
                      noPrintSelector: ".no-print",
                      iframe: true,
                      append: null,
                      prepend: null,
                      manuallyCopyFormValues: true,
                      deferred: $.Deferred()
                    };
                    // Merge with user-options
                    options = $.extend({}, defaults, (options || {}));
                    var $styles = $("");
                    if (options.globalStyles) {
                      // Apply the stlyes from the current sheet to the printed page
                      $styles = $("style, link, meta, title");
                    } else if (options.mediaPrint) {
                      // Apply the media-print stylesheet
                      $styles = $("link[media=print]");
                    }
                    if (options.stylesheet) {
                      // Add a custom stylesheet if given
                      $styles = $.merge($styles, $('<link rel="stylesheet" href="' + options.stylesheet + '">'));
                    }
                    // Create a copy of the element to print
                    var copy = $this.clone();
                    // Wrap it in a span to get the HTML markup string
                    copy = $("<span/>")
                      .append(copy);
                    // Remove unwanted elements
                    copy.find(options.noPrintSelector)
                      .remove();
                    // Add in the styles
                    copy.append($styles.clone());
                    // Appedned content
                    copy.append(getjQueryObject(options.append));
                    // Prepended content
                    copy.prepend(getjQueryObject(options.prepend));
                    if (options.manuallyCopyFormValues) {
                      // Manually copy form values into the HTML for printing user-modified input fields
                      // http://stackoverflow.com/a/26707753
                      copy.find("input")
                        .each(function () {
                          var $field = $(this);
                          if ($field.is("[type='radio']") || $field.is("[type='checkbox']")) {
                            if ($field.prop("checked")) {
                              $field.attr("checked", "checked");
                            }
                          } else {
                            $field.attr("value", $field.val());
                          }
                        });
                      copy.find("select").each(function () {
                        var $field = $(this);
                        $field.find(":selected").attr("selected", "selected");
                      });
                      copy.find("textarea").each(function () {
                        // Fix for https://github.com/DoersGuild/jQuery.print/issues/18#issuecomment-96451589
                        var $field = $(this);
                        $field.text($field.val());
                      });
                    }
                    // Get the HTML markup string
                    var content = copy.html();
                    // Notify with generated markup & cloned elements - useful for logging, etc
                    try {
                      options.deferred.notify('generated_markup', content, copy);
                    } catch (err) {
                      console.warn('Error notifying deferred', err);
                    }
                    // Destroy the copy
                    copy.remove();
                    if (options.iframe) {
                      // Use an iframe for printing
                      try {
                        var $iframe = $(options.iframe + "");
                        var iframeCount = $iframe.length;
                        if (iframeCount === 0) {
                          // Create a new iFrame if none is given
                          $iframe = $('<iframe height="0" width="0" border="0" wmode="Opaque"/>')
                            .prependTo('body')
                            .css({
                              "position": "absolute",
                              "top": -999,
                              "left": -999
                            });
                        }
                        var w, wdoc;
                        w = $iframe.get(0);
                        w = w.contentWindow || w.contentDocument || w;
                        wdoc = w.document || w.contentDocument || w;
                        wdoc.open();
                        wdoc.write(content);
                        wdoc.close();
                        printFrame(w)
                          .done(function () {
                            // Success
                            setTimeout(function () {
                              // Wait for IE
                              if (iframeCount === 0) {
                                // Destroy the iframe if created here
                                $iframe.remove();
                              }
                            }, 100);
                          })
                          .fail(function (err) {
                            // Use the pop-up method if iframe fails for some reason
                            console.error("Failed to print from iframe", err);
                            printContentInNewWindow(content);
                          })
                          .always(function () {
                            try {
                              options.deferred.resolve();
                            } catch (err) {
                              console.warn('Error notifying deferred', err);
                            }
                          });
                      } catch (e) {
                        // Use the pop-up method if iframe fails for some reason
                        console.error("Failed to print from iframe", e.stack, e.message);
                        printContentInNewWindow(content)
                          .always(function () {
                            try {
                              options.deferred.resolve();
                            } catch (err) {
                              console.warn('Error notifying deferred', err);
                            }
                          });
                      }
                    } else {
                      // Use a new window for printing
                      printContentInNewWindow(content)
                        .always(function () {
                          try {
                            options.deferred.resolve();
                          } catch (err) {
                            console.warn('Error notifying deferred', err);
                          }
                        });
                    }
                    return this;
                  };
                  $.print('#print_content')
/*---------------------------------------------------------------------------*/
                },
                btn1:function(){
                  layer.msg('cancel');
                },
                content:$('#print_content'),
                end:function () {
                  $('#print_content').css({'display':'none'});
                }
              });
            });
            $('#search_btn').click(function (e) {
              e.preventDefault();
              var table_reload_data ={
                name:_this.emailFormData.email_username,
                drivingLicenseNo:_this.emailFormData.email_driver_card,
                expressNumber:_this.emailFormData.email_number,
                dtype:1,
                beginTime:_this.emailFormData.start_time,
                endTime:_this.emailFormData.end_time
              };
              tableIns.reload({
                where: table_reload_data,
                page:{
                  curr:1
                }
              }
              );
            });
            tableCheckBox.checkedDefault({
              gridId:'driver_GridCheckBoxTable',
              fieldName:'name'
            })
            tableCheckBox.init({
              gridId:'driver_GridCheckBoxTable',
              filterId:'mail_driver_table',
              fieldName:'name'
            });
          }
        });
        var tableInstance = table.render({
          elem: '#mail_driving_table',
          url: HOST+'?type=LoadVehicleDataList&userid=29',
          loading: true,
          even: true,
          toolbar: '#vehicle_toolbar',
          response: {
            statusCode: 200
          },
          limit:20,
          limits:[20,40,60,80,90],
          headers:{
            'Authorization':_this.Authorization
          },
          cols: [[
            {type: 'checkbox',style:'background:#f4f4f4'},
            {field: 'name', title: '姓名',width:86},
            {field: 'carPlate', title: '车牌号',width:120},
            {field: 'mobile', title: '手机号',width:120},
            {field: 'idCardNumber', title: '驾驶证号',width:170},
            {field: 'bType', title: '业务类型',width:94},
            {field: 'createTime', title: '创建时间',width:170},
            {field: 'address', title: '地址'},

            {
              field: 'operate', title: '操作', width:96,templet: function (d) {
                return '<button class="layui-btn-sm layui-btn mr-10">打印录入单</button>';
              }
            }
          ]],
          page: true,
          done: function (res) {
            $('#search_btn_s').click(function (e) {
              e.preventDefault();
              var table_reload_dataS ={
                name:_this.drivingFormData.email_username,
                drivingLicenseNo:_this.drivingFormData.email_driver_card,
                expressNumber:_this.drivingFormData.email_number,
                dtype:1,
                beginTime:_this.drivingFormData.start_time,
                endTime:_this.drivingFormData.end_time
              };
              tableInstance.reload({
                  where: table_reload_dataS,
                  page:{
                    curr:1
                  }
                }
              );
              return false;
            });
           /* $('.operate-print').click(function () {
              layer.open({
                type:1,
                title:'打印邮政订单',
                area:['600px','500px'],
                shadeClose:true,
                skin:_this.$store.state.skin,
                closeBtn:1,
                success:function(){

                },
                content:$('#test'),
                end:function () {
                }
              });
            });*/
          }
        });
        var tableInstall = table.render({
            id:'download_GridCheckBoxTable',
            elem: '#mail_download_table',
            url: HOST+'?type=LoadPrintDrivingThreeDataList&userid=29',
            loading: true,
            even: true,
            toolbar: '#download_toolbar',
            response: {
              statusCode: 200
            },
            limit:20,
            limits:[20,40,60,80,90],
            headers:{
              'Authorization':_this.Authorization
            },
            cols: [[
              {type: 'checkbox',style:'background:#f4f4f4'},
              {field: 'NAME', title: '姓名',width:90},
              {field: 'MOBILE', title: '手机号',width:120},
              {field: 'BUS_TYPE', title: '业务类型',width:100},
              {field: 'DRIVING_TYPE', title: '驾照级别',width:100},
              {field: 'AUDIT_RESULT', title: '审核结果',width:90},
              {field: 'ADDRESS', title: '地址'},
              {
                field: 'operate', title: '操作',width:102, templet: function (d) {
                  return '<button value="'+d.BUS_ID+'" class="layui-btn-sm layui-btn mr-10 download-resource">资料下载</button>';
                }
              }
            ]],
            page: true,
            done: function (res) {
              $('#search_btn_t').click(function (e) {
                e.preventDefault();
                var table_reload_dataT ={
                  name:_this.downloadFormData.email_username,
                  drivingLicenseNo:_this.downloadFormData.email_driver_card,
                  expressNumber:_this.downloadFormData.email_number,
                  dtype:1,
                  beginTime:_this.downloadFormData.start_time,
                  endTime:_this.downloadFormData.end_time
                };
                tableInstall.reload({
                    where: table_reload_dataT,
                    page:{
                      curr:1
                    }
                  }
                );
                return false;
              });
              $('.download-resource').click(function (e) {
                e.preventDefault();
                let download_type = 'Download'
                var data = {
                  dtype:1,
                  busIdList:[$(this).attr('value')]
                };
                data=config.urlTransition(download_type,data);
                _this.$http.apiPost('http://192.168.8.74/carauditapi/api',data,{responseType:'arraybuffer'}).then(function (res) {
                  _this.download(res)
                })

              });
              tableCheckBox.checkedDefault({
                gridId:'download_GridCheckBoxTable',
                fieldName:'BUS_ID'
              })
              tableCheckBox.init({
                gridId:'download_GridCheckBoxTable',
                filterId:'mail_download_table',
                fieldName:'BUS_ID'
              });
            }
          });
        table.on('toolbar(mail_download_table)', function(obj){
          var checkStatus = table.checkStatus(obj.config.id);
          let events = obj.event;
          console.log(checkStatus);
          if(events=='get_select_data_3'){
            var data = checkStatus.data;
            var length = data.length;
            if(length==0){
              layer.msg('请至少选中一个用户');
              return;
            }else {
              var chooseData = tableCheckBox.getValue({
                gridId:'download_GridCheckBoxTable'
              });
              let downloadType = 'Download';
              var data = {
                dtype:2,
                busIdList:chooseData
              };
              data=config.urlTransition(downloadType,data);
              _this.$http.apiPost(HOST,data,{responseType:'arraybuffer'}).then(function (res) {
                _this.download(res);
              })
            }
         /* var bus_id = data[0].BUS_ID;
            var data = config.getUrlTrans({type:'GetAllRole',userid:user_id});
            var dataAno = config.getUrlTrans({type:'GetUserRole',userid:user_id});
            layer.load(2);*/
         /*   _this.$http.apiGet(HOST,dataAno).then(function (res) {
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
                      area:['600px','500px'],
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
                              layer.closeAll();
                              return false;
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
            });*/
          }
        });

      },
      driver_reset(e){
        e.preventDefault();
          this.emailFormData.start_time= this.$store.state.dateSel('-')[2];
          this.emailFormData.end_time= this.$store.state.dateSel('-')[3];
          this.emailFormData.email_number='';
          this.emailFormData.email_username='';
          this.emailFormData.email_driver_card='';
      },
      download (res) {
        if (!res) {
          return
        }
        let blob = new Blob([res],{type:'application/octet-stream'});
        var time = new Date().getTime();
        var filename = "下载资料"+time+'.zip';
        let url = window.URL.createObjectURL(blob);
       let link = document.createElement('a');
        link.style.display = 'none';
        link.href = url;
        link.setAttribute('download',filename);
        document.body.appendChild(link);
        link.click()
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
      layui.config({
        base:'./static/layui/extend/tableCheckBoxUtil/'
      }).use(['table', 'layer', 'laydate','tableCheckBoxUtil'], function () {
        var table = layui.table;
        var layer = layui.layer;
        var laydate = layui.laydate;
        var tableCheckBoxUtil = layui.tableCheckBoxUtil;
        _this.tableF = table;
        _this.tableRender(_this.tableF,tableCheckBoxUtil);
        laydate.render({
          elem: '#driver_start_time',
          value: _this.$store.state.dateSel('-')[2],
          theme: 'grid',
          calendar: true,
          mark: {
            '0-12-31': '跨年'
          },
          max: 0,
          done:function (val) {
            _this.emailFormData.start_time=val;
          }
        });
        laydate.render({
          elem: '#driver_end_time',
          value: _this.$store.state.dateSel('-')[3],
          theme: 'grid',
          calendar: true,
          mark: {
            '0-12-31': '跨年'
          },
          max: 0,
          done:function (val) {
            _this.emailFormData.end_time=val;
          }
        });
        laydate.render({
          elem: '#driving_start_time',
          value: _this.$store.state.dateSel('-')[2],
          theme: 'grid',
          calendar: true,
          mark: {
            '0-12-31': '跨年'
          },
          max: 0,
          done:function (val) {
            _this.drivingFormData.start_time=val;
          }
        });
        laydate.render({
          elem: '#driving_end_time',
          value: _this.$store.state.dateSel('-')[3],
          theme: 'grid',
          calendar: true,
          mark: {
            '0-12-31': '跨年'
          },
          max: 0,
          done:function (val) {
            _this.drivingFormData.end_time=val;
          }
        });
        laydate.render({
          elem: '#download_start_time',
          value: _this.$store.state.dateSel('-')[2],
          theme: 'grid',
          calendar: true,
          mark: {
            '0-12-31': '跨年'
          },
          max: 0,
          done:function (val) {
            _this.downloadFormData.start_time=val;
          }
        });
        laydate.render({
          elem: '#download_end_time',
          value: _this.$store.state.dateSel('-')[3],
          theme: 'grid',
          calendar: true,
          mark: {
            '0-12-31': '跨年'
          },
          max: 0,
          done:function (val) {
            _this.downloadFormData.end_time=val;
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

