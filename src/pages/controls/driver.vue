<style scoped>
  .layui-tab-title {
    height: 50px;
  }

  .layui-tab-title li {
    line-height: 50px;
    margin: 0 20px;
  }

  .layui-tab-title .layui-this:after {
    height: 51px;
  }

  .main-content {
    padding-top: 0;
  }

  .content-top {
    padding: 20px;
    background: #fff;
    box-shadow: 0 1px 6px -1px rgba(0, 0, 0, 0.15);
  }

  .layui-tab {
    background-color: #fff;
    box-shadow: 0 1px 4px 1px rgba(29, 29, 39, 0.15)
  }

  #driver_unchecked_popup_box {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
  }

  #details_popup {
    background-color: #f5f5f5;
    padding-bottom: 40px;
  }

  #driver_unchecked_popup_box li {
    width: 200px;

  }

  #details_popup {
    background-color: #f5f5f5;
  }

  #details_popup > h2 {
    line-height: 50px;
    font-size: 20px;
    color: #000;
    padding: 0 20px 0 10px;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    font-weight: bold;
    justify-content: space-between;
    background: #fff;
    font-family: "Roboto", sans-serif !important;
    margin-bottom: 10px;
    border-bottom: 1px solid #Dee;
  }

  #details_popup > ul > li h3 {
    font-size: 16px;
    color: #111;
    line-height: 42px;
    margin-bottom: 4px;
    border-bottom: 1px solid #ccc;
    background: #fff;
    padding-left: 14px;
  }

  #details_popup > ul > li {
    background-color: #fff;
    margin-bottom: 20px;
  }

  #details_popup > ul > li:nth-child(1) p, #details_popup > ul > li:nth-child(3) p {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    width: 85%;
  }

  .identity {

  }

  .details-bottom-s {
    padding-right: 20%;
    text-align: right;
    margin-bottom: 30px;
  }

  .details-bottom-f {
    padding-top: 20px;
    text-align: center;
  }

  .details-bottom-s button {
    color: #fff;
  }

  .missing-prove, .apply-des-box {
    width: 620pt;
    background-color: #fff;
    margin: 0 auto;
    border: 1px solid #000;
    margin-top: 30px;
  }
</style>
<style>
  .layout-right .personal-pic-msg {
    position: absolute;
    width: 100%;
    left: 0;
    box-shadow: 0 0 15px #aaa;
    height: 200px;
    bottom: 0;
    background: #fff;
  }

  .layout-right .personal-pic-msg ul {
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: space-around;
    padding: 0 150px 0 190px;
  }

  .driver-sport {
    animation-name: driver_sport;
    animation-duration: 600ms;
    animation-fill-mode: forwards;
    animation-timing-function: ease;
  }

  @keyframes driver_sport {
    from {
      bottom: -200px;
    }
    to {
      bottom: 0;
    }
  }

  @keyframes driver_sport_two {
    from {
      bottom: 0;
    }
    to {
      bottom: -200px;
    }
  }

  .driver_tabs .layui-table-body tr {
    cursor: pointer;
  }
#print_item_f,#print_item_s,#print_item_t {
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -41px;
  margin-top: -14px;
}
</style>
<template>
  <article class="main-content">
    <div class="middle-space"></div>
    <div class="layui-tab layui-tab-brief" lay-filter="driver_tabs">
      <div class="layui-tab-title">
        <li class="layui-this" lay-id="11">未审核</li>
        <li lay-id="22">已审核</li>
        <li lay-id="33">审核未过</li>
      </div>
      <div class="layui-tab-content">
        <div class="layui-tab-item layui-show">
          <div class="content-top clearfix">
            <form action="" class="layui-form layui-form-pane">
              <div class="layui-form-item mr-14">
                <label class="layui-form-label">业务类型</label>
                <div class="layui-input-inline ">
                  <select name="interest" lay-filter="unChecked_btype" v-model="uncheckedSearchFormData.btype">
                    <option value=""></option>
                    <option value="1">期满换证</option>
                    <option value="2" selected="">遗失补证</option>
                    <option value="3">损毁换证</option>
                    <option value="4">信息变更</option>
                    <option value="5">机动车号牌补换</option>
                    <option value="7">六年免检</option>
                  </select>
                </div>
              </div>
              <div class="layui-form-item mr-14">
                <label class="layui-form-label">身份证号</label>
                <div class="layui-inline mr0">
                  <div class="layui-input-inline ">
                    <input type="text" name="date" placeholder="输入身份证号" id="driver_unchecked_card_number"
                            class="layui-input" v-model="uncheckedSearchFormData.drivingLiceseno">
                  </div>
                </div>
              </div>
              <div class="layui-form-item mr-14">
                <label class="layui-form-label">车牌号</label>
                <div class="layui-inline mr0">
                  <div class="layui-input-inline ">
                    <input type="text" name="date" placeholder="输入车牌号" id="driver_unchecked_id_card_number"
                            class="layui-input" v-model="uncheckedSearchFormData.iscertificateok">
                  </div>
                </div>
              </div>
              <div class="layui-form-item mr-14">
                <label class="layui-form-label">设备编号</label>
                <div class="layui-inline mr0">
                  <div class="layui-input-inline ">
                    <input type="text" name="date" placeholder="输入订单编号" id="driver_unchecked_dev_number"
                           v-model="uncheckedSearchFormData.orderId"  class="layui-input">
                  </div>
                </div>
              </div>
              <div class="layui-form-item">
                <label class="layui-form-label">受理时间</label>
                <div class="layui-inline mr0">
                  <div class="layui-input-inline mr0">
                    <input type="text" name="date" id="driver_unchecked_start_date"
                           class="layui-input" v-model="uncheckedSearchFormData.begintime">
                  </div>
                </div>
              </div>
              <pre class="d_i_b mt8 ml-6 mr-6">至</pre>
              <div class="layui-form-item ">
                <div class="layui-inline">
                  <div class="layui-input-inline">
                    <input type="text" id="driver_unchecked_end_date" name="date"  class="layui-input"
                           v-model="uncheckedSearchFormData.endtime">
                  </div>
                </div>
              </div>
              <button id="unchecked_btn" class="layui-btn layui-btn-sm vt"><i class="layui-icon">&#xe615;</i>查询</button>
              <button class="layui-btn layui-btn-sm layui-btn-primary ml-16 vt" id="driver_unchecked_reset"><i
                class="layui-icon">&#xe669;</i>重置
              </button>
            </form>
          </div>
          <div class="content-bottom driver-unchecked-content-bottom">
            <script type="text/html" id="dirver_unchecked_table_toolbar">
            <div class="layui-btn-container">
              <button class="layui-btn layui-btn-sm" lay-event="driver_unchecked_get_data"><i class="layui-icon">&#xe609</i>导出选择</button>
              <button class="layui-btn layui-btn-sm" lay-event="driver_unchecked_get_all_data"><i class="iconfont icon-daochu"></i>导出全部</button>
              <p class="col-red font14">提示：点击对应行查看该驾驶证详情信息</p>
            </div>
        </script>
            <table class="layui-hide" lay-filter="driver_unchecked_table" id="driver_unchecked_table"></table>
          </div>
        </div>
        <div class="layui-tab-item">
          <div class="content-top clearfix">
            <form action="" class="layui-form layui-form-pane">
              <div class="layui-form-item">
                <label class="layui-form-label">选择时间</label>
                <div class="layui-inline mr0">
                  <div class="layui-input-inline ">
                    <input type="text" name="date" v-model="DcheckedSearchFormData.begintime"
                           id="driver_checked_start_date"  class="layui-input">
                  </div>
                </div>
              </div>
              <pre class="d_i_b mt8 ">至</pre>
              <div class="layui-form-item">
                <div class="layui-inline">
                  <div class="layui-input-inline">
                    <input type="text" id="driver_checked_end_date" name="date"  class="layui-input"
                           v-model="DcheckedSearchFormData.endtime">
                  </div>
                </div>
              </div>
              <div class="layui-form-item">
                <label class="layui-form-label">业务类型</label>
                <div class="layui-input-inline" v-model="DcheckedSearchFormData.btype">
                  <select name="interest" lay-filter="checked_btype">
                    <option value=""></option>
                    <option value="1">期满换证</option>
                    <option value="2" selected="">遗失补证</option>
                    <option value="3">损毁换证</option>
                    <option value="4">信息变更</option>
                    <option value="5">机动车号牌补换</option>
                    <option value="7">六年免检</option>
                  </select>
                </div>
              </div>
              <div class="layui-form-item mr-14">
                <label class="layui-form-label">身份证号</label>
                <div class="layui-inline mr0">
                  <div class="layui-input-inline ">
                    <input type="text" name="date" placeholder="输入身份证号" id="driver_checked_card_number"
                            class="layui-input" v-model="DcheckedSearchFormData.drivingLiceseno">
                  </div>
                </div>
              </div>
              <div class="layui-form-item mr-14">
                <label class="layui-form-label">车牌号</label>
                <div class="layui-inline mr0">
                  <div class="layui-input-inline ">
                    <input type="text" name="date" placeholder="输入车牌号" id="driver_checked_id_card_number"
                            class="layui-input" v-model="DcheckedSearchFormData.iscertificateok">
                  </div>
                </div>
              </div>
              <div class="layui-form-item mr-14">
                <label class="layui-form-label">设备编号</label>
                <div class="layui-inline mr0">
                  <div class="layui-input-inline ">
                    <input type="text" name="date" placeholder="输入订单编号" id="driver_checked_dev_number"
                           v-model="DcheckedSearchFormData.orderId"  class="layui-input">
                  </div>
                </div>
              </div>
              <button id="checked_btn" class="layui-btn layui-btn-sm vt"><i class="layui-icon">&#xe615;</i>查询</button>
            </form>
          </div>
          <div class="content-bottom">
             <script type="text/html" id="dirver_checked_table_toolbar">
            <div class="layui-btn-container">
              <button class="layui-btn layui-btn-sm" lay-event="driver_checked_get_data"><i class="layui-icon">&#xe609</i>导出选择</button>
              <button class="layui-btn layui-btn-sm" lay-event="driver_checked_get_all_data"><i class="iconfont icon-daochu"></i>导出全部</button>
              <p class="col-red font14">提示：点击对应行查看该驾驶证详情信息</p>
            </div>
        </script>
            <table class="layui-hide" lay-filter="driver_checked_table" id="driver_checked_table"></table>
          </div>
        </div>
        <div class="layui-tab-item">
          <div class="content-top clearfix">
            <form action="" class="layui-form layui-form-pane">
              <div class="layui-form-item">
                <label class="layui-form-label">受理时间</label>
                <div class="layui-inline mr0">
                  <div class="layui-input-inline mr0">
                    <input type="text" name="date" v-model="unSuccessFormData.begintime"
                           id="driver_checked_unsuccess_start_date"  class="layui-input">
                  </div>
                </div>
              </div>
              <pre class="d_i_b mt8 ml-6 mr-6">至</pre>
              <div class="layui-form-item ">
                <div class="layui-inline">
                  <div class="layui-input-inline">
                    <input type="text" id="driver_checked_unsuccess_end_date" name="date"
                           class="layui-input" v-model="unSuccessFormData.endtime">
                  </div>
                </div>
              </div>
              <div class="layui-form-item mr-14">
                <label class="layui-form-label">业务类型</label>
                <div class="layui-input-inline ">
                  <select name="interest" lay-filter="unSuccess_btype" v-model="unSuccessFormData.btype">
                    <option value=""></option>
                    <option value="1">期满换证</option>
                    <option value="2" selected="">遗失补证</option>
                    <option value="3">损毁换证</option>
                    <option value="4">信息变更</option>
                    <option value="5">机动车号牌补换</option>
                    <option value="7">六年免检</option>
                  </select>
                </div>
              </div>
              <div class="layui-form-item mr-14">
                <label class="layui-form-label">身份证号</label>
                <div class="layui-inline mr0">
                  <div class="layui-input-inline ">
                    <input type="text" name="date" placeholder="输入身份证号" id="driver_checked_unsuccess_card_number"
                            class="layui-input" v-model="unSuccessFormData.drivingLiceseno">
                  </div>
                </div>
              </div>
              <div class="layui-form-item mr-14">
                <label class="layui-form-label">车牌号</label>
                <div class="layui-inline mr0">
                  <div class="layui-input-inline ">
                    <input type="text" name="date" placeholder="输入车牌号"  class="layui-input"
                           v-model="unSuccessFormData.iscertificateok">
                  </div>
                </div>
              </div>
              <div class="layui-form-item mr-14">
                <label class="layui-form-label">设备编号</label>
                <div class="layui-inline mr0">
                  <div class="layui-input-inline ">
                    <input type="text" name="date" placeholder="输入设备编号"  class="layui-input">
                  </div>
                </div>
              </div>
              <button id="unSuccess_btn" class="layui-btn layui-btn-sm vt"><i class="layui-icon">&#xe615;</i>查询</button>
              <button class="layui-btn layui-btn-sm layui-btn-primary ml-16 vt"><i class="layui-icon">&#xe669;</i>重置
              </button>
            </form>
          </div>
          <div class="content-bottom">
            <script type="text/html" id="driver_checked_unsuccess_toolbar">
            <div class="layui-btn-container">
              <button class="layui-btn layui-btn-sm" lay-event="driver_checked_unsuccess_get_data"><i class="layui-icon">&#xe609</i>导出选择</button>
              <button class="layui-btn layui-btn-sm" lay-event="driver_checked_unsuccess_get_all_data"><i class="iconfont icon-daochu"></i>导出全部</button>
              <p class="col-red font14">提示：点击对应行查看该驾驶证详情信息</p>
            </div>
        </script>
            <table class="layui-hide" lay-filter="driver_checked_unsuccess_table"
                   id="driver_checked_unsuccess_table"></table>
          </div>
        </div>
      </div>
      <div id="driver_unchecked_popup" class="hide">
        <form action="" class="layui-form layui-form-pane">
          <div class="layui-form-item" pane="">
            <ul id="driver_unchecked_popup_box">
              <li><input type="checkbox" name="unChecked-reason" value="申请人照片和身份证不符" lay-filter="cancel_reason"
                         lay-skin="primary" title="申请人照片和身份证不符"></li>
              <li><input type="checkbox" name="unChecked-reason" value="体检表不符合要求" lay-filter="cancel_reason"
                         lay-skin="primary" title="体检表不符合要求"></li>
              <li><input type="checkbox" name="unChecked-reason" value="没有提交体检表" lay-filter="cancel_reason"
                         lay-skin="primary" title="没有提交体检表"></li>
              <li><input type="checkbox" name="unChecked-reason" value="手写签名不符合要求" lay-filter="cancel_reason"
                         lay-skin="primary" title="手写签名不符合要求"></li>
              <li><input type="checkbox" name="unChecked-reason" value="没有提交纸质相片" lay-filter="cancel_reason"
                         lay-skin="primary" title="没有提交纸质相片"></li>
              <li><input type="checkbox" name="unChecked-reason" value="身份证复印件不符合要求" lay-filter="cancel_reason"
                         lay-skin="primary" title="身份证复印件不符合要求"></li>
              <li><input type="checkbox" name="unChecked-reason" value="没有递交相片回执" lay-filter="cancel_reason"
                         lay-skin="primary" title="没有递交相片回执"></li>
            </ul>
          </div>
          <div class="layui-form-item layui-form-text display_block mt12">
            <label class="layui-form-label">其他原因</label>
            <div class="layui-input-block w-auto">
              <textarea v-model="cancel_commond" placeholder="请输入内容" class="layui-textarea"></textarea>
            </div>
          </div>
        </form>
      </div>
    </div>
    <div id="details_popup" class="hide">
      <h2 class="details-header"><span><i>{{detailsData.bustype}}</i></span><span><i>{{detailsData.ctime}}</i></span>
      </h2>
      <ul>
        <li>
          <h3>申请人信息</h3>
          <table class="layui-table details-popup-table" lay-skin="line">
            <thead>
            <tr class="details-popup-table-tr">
              <th>申请人</th>
              <th>手机号码</th>
              <th>申请业务</th>
              <th>驾驶证号</th>
              <th>相片图像号：</th>
              <th>取证方式：</th>
              <th>收件人：</th>
              <th>收件地址：</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>{{detailsData.name}}</td>
              <td>{{detailsData.agentmobile}}</td>
              <td>{{detailsData.bustype}}</td>
              <td>{{detailsData.idcardnumber}}</td>
              <td>{{detailsData.agentidcardnumber}}</td>
              <td>{{detailsData.takeway}}</td>
              <td>{{detailsData.agentname}}</td>
              <td>{{detailsData.address}}</td>
            </tr>
            </tbody>
          </table>
        </li>
        <li class="details-popup-li-spec">
          <div class="details-table-li-child">
            <h3>收费信息</h3>
            <table class="layui-table details-popup-table" lay-skin="line">
              <colgroup>
                <col width="150">
                <col width="150">
                <col width="150">
                <col width="150">
                <col>
              </colgroup>
              <thead>
              <tr class="details-popup-table-tr">
                <th>照相服务费</th>
                <th>身份证扫描</th>
                <th>支付方式</th>
                <th>快递费</th>
                <th style="text-align:right;padding-right: 50px;">总额</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>{{detailsData.servicefee}}</td>
                <td>{{detailsData.idcardcopyfee}}</td>
                <td>{{detailsData.paymenttype}}</td>
                <td>{{detailsData.postage}}</td>
                <td style="text-align:right;padding-right: 50px;">{{detailsData.tctalfee}}</td>
              </tr>
              </tbody>
            </table>
          </div>
        </li>
        <li>
          <h3>审核信息</h3>
          <table class="layui-table details-popup-table" lay-skin="line">
            <colgroup>
              <col width="150">
              <col width="150">
              <col width="150">
              <col width="150">
              <col>
            </colgroup>
            <thead>
            <tr class="details-popup-table-tr">
              <th>审核结果</th>
              <th>受理流水号</th>
              <th>归档状态</th>
              <th>制证/牌状态</th>
              <th>受理结果描述</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>{{detailsData.auditresult}}</td>
              <td>{{detailsData.istakephoto}}</td>
              <td>{{detailsData.iscollectok}}</td>
              <td>{{detailsData.lsh}}</td>
              <td>{{detailsData.lshms}}</td>
            </tr>
            </tbody>
          </table>
        </li>
        <li>
          <h3>申请人资料</h3>
          <p class="tac"><img :src="detailsData.agentIdCardFaceUrl" alt=""><img :src="detailsData.agentSignUrl" alt="">
          </p>
          <p class="tac"></p>
        </li>
      </ul>
      <!-----------------------------------------打印区域------------------------------------->
      <div class="print-area">
        <div class="pore" style="width: 720pt;margin: 0 auto" align=center x:publishsource="Excel">
          <button @click="print_excel('#print_area_f')" @mouseleave="removeActive($event)" @mouseenter="addActive($event)" :class="print_status_control_f?'d_i_b':'hide'" class="layui-btn layui-btn-sm hide" id="print_item_f">打印申请表</button>
          <table id="print_area_f" @mouseleave="print_status_f" @mouseenter="print_status_f" border=0 cellpadding=0 cellspacing=0 class=xl654365
                 style='border-collapse:collapse;table-layout:fixed;width:720pt'>
            <col class=xl654365 width=23 style='mso-width-source:userset;mso-width-alt:
 736;width:17pt'>
            <col class=xl654365 width=33 style='mso-width-source:userset;mso-width-alt:
 1056;width:25pt'>
            <col class=xl654365 width=73 style='mso-width-source:userset;mso-width-alt:
 2336;width:55pt'>
            <col class=xl654365 width=59 style='mso-width-source:userset;mso-width-alt:
 1888;width:44pt'>
            <col class=xl654365 width=28 style='mso-width-source:userset;mso-width-alt:
 896;width:21pt'>
            <col class=xl654365 width=25 style='mso-width-source:userset;mso-width-alt:
 800;width:19pt'>
            <col class=xl654365 width=21 span=2 style='mso-width-source:userset;
 mso-width-alt:672;width:16pt'>
            <col class=xl654365 width=22 style='mso-width-source:userset;mso-width-alt:
 704;width:17pt'>
            <col class=xl654365 width=21 span=20 style='mso-width-source:userset;
 mso-width-alt:672;width:16pt'>
            <col class=xl654365 width=22 style='mso-width-source:userset;mso-width-alt:
 704;width:17pt'>
            <tr height=25 style='mso-height-source:userset;height:18.75pt'>
              <td colspan=3 height=25 class=xl1524365 width=129 style='height:18.75pt;
  width:97pt;visibility:hidden;'><a name="RANGE!A1:AD44">附件1</a></td>
              <td class=xl654365 width=59 style='width:44pt'></td>
              <td class=xl654365 width=28 style='width:21pt'></td>
              <td class=xl654365 width=25 style='width:19pt'></td>
              <td class=xl654365 width=21 style='width:16pt'></td>
              <td class=xl654365 width=21 style='width:16pt'></td>
              <td class=xl654365 width=22 style='width:17pt'></td>
              <td class=xl654365 width=21 style='width:16pt'></td>
              <td class=xl654365 width=21 style='width:16pt'></td>
              <td class=xl654365 width=21 style='width:16pt'></td>
              <td class=xl654365 width=21 style='width:16pt'></td>
              <td class=xl654365 width=21 style='width:16pt'></td>
              <td class=xl654365 width=21 style='width:16pt'></td>
              <td class=xl654365 width=21 style='width:16pt'></td>
              <td class=xl654365 width=21 style='width:16pt'></td>
              <td class=xl654365 width=21 style='width:16pt'></td>
              <td class=xl654365 width=21 style='width:16pt'></td>
              <td colspan=4 class=xl1454365 width=84 style='width:64pt'></td>
              <td colspan=7 class=xl784365 width=148 style='width:113pt'></td>
            </tr>
            <tr height=48 style='mso-height-source:userset;height:36.0pt'>
              <td colspan=30 height=48 class=xl1534365 style='height:36.0pt'>机 动 车 驾 驶 证 申
                请 表
              </td>
            </tr>
            <tr height=37 style='mso-height-source:userset;height:27.75pt'>
              <td height=37 class=xl764365 style='height:27.75pt'></td>
              <td class=xl774365></td>
              <td class=xl774365></td>
              <td class=xl774365></td>
              <td class=xl774365></td>
              <td class=xl774365></td>
              <td class=xl774365></td>
              <td class=xl774365></td>
              <td colspan=5 class=xl1384365 style='border-right:.5pt solid black'>受理岗签字签章</td>
              <td colspan=7 class=xl1464365 style='border-right:1.0pt solid black;font-weight:400;'></td>
              <td colspan=4 class=xl1484365 style='border-left:none'>档案编号</td>
              <td colspan=6 class=xl1504365 style='border-right:1.0pt solid black;
  border-left:none;font-weight:400;'>{{detailsData.documentid}}</td>
            </tr>
            <tr height=29 style='mso-height-source:userset;height:21.95pt'>
              <td rowspan=6 height=193 class=xl1344365 width=23 style='height:146.15pt;
  width:17pt'>申请人信息
              </td>
              <td class=xl754365>姓名</td>
              <td colspan=9 class=xl1134365 style='border-left:none'>{{detailsData.name}}</td>
              <td colspan=2 class=xl1374365 style='border-left:none'>性别</td>
              <td colspan=2 class=xl1334365 style='border-left:none;font-weight:400;'>{{detailsData.sex}}</td>
              <td colspan=3 class=xl1124365 style='border-right:.5pt solid black;
  border-left:none'>出生日期
              </td>
              <td colspan=6 class=xl1334365 style='border-left:none;font-weight:400;'>{{detailsData.birthday}}</td>
              <td colspan=2 class=xl1124365 style='border-right:.5pt solid black;
  border-left:none'>国籍
              </td>
              <td colspan=4 class=xl1134365 style='border-right:1.0pt solid black;
  border-left:none'>中国</td>
            </tr>
            <tr height=26 style='mso-height-source:userset;height:20.1pt'>
              <td rowspan=2 height=52 class=xl854365 width=33 style='border-bottom:.5pt solid black;
  height:40.2pt;border-top:none;width:25pt'>身份证明名称
              </td>
              <td colspan=2 class=xl1434365 width=132 style='border-left:none;width:99pt;padding-top:6px;'></td>
              <td colspan=2 class=xl1104365 width=53 style='border-left:none;width:40pt;padding-top:6px;'>号码</td>
              <td class=xl664365 width=21 style='border-top:none;border-left:none;
  width:16pt;padding-top:6px;' v-for="val in idCardNumber">{{val}}</td>
              <td colspan=6 rowspan=5 class=xl1244365 style='border-right:1.0pt solid black'><img :src="detailsData.pasterpath" alt=""></td>
            </tr>
            <tr height=26 style='mso-height-source:userset;height:20.1pt'>
              <td colspan=2 height=26 class=xl1434365 width=132 style='height:20.1pt;
  border-left:none;width:99pt'></td>
              <td colspan=2 class=xl1104365 width=53 style='border-left:none;width:40pt'>号码</td>
              <td class=xl704365 width=21 style='border-left:none;width:16pt'></td>
              <td class=xl714365 width=21 style='border-left:none;width:16pt'></td>
              <td class=xl714365 width=22 style='border-left:none;width:17pt'></td>
              <td class=xl714365 width=21 style='border-left:none;width:16pt'></td>
              <td class=xl714365 width=21 style='border-left:none;width:16pt'></td>
              <td class=xl714365 width=21 style='border-left:none;width:16pt'></td>
              <td class=xl714365 width=21 style='border-left:none;width:16pt'></td>
              <td class=xl714365 width=21 style='border-left:none;width:16pt'></td>
              <td class=xl714365 width=21 style='border-left:none;width:16pt'></td>
              <td class=xl714365 width=21 style='border-left:none;width:16pt'></td>
              <td class=xl724365 style='border-left:none;padding-left:3px;'></td>
              <td class=xl724365 style='border-left:none;padding-left:3px;'></td>
              <td class=xl724365 style='border-left:none;padding-left:3px;'></td>
              <td class=xl724365 style='border-left:none;padding-left:3px;'></td>
              <td class=xl724365 style='border-left:none;padding-left:3px;'></td>
              <td class=xl724365 style='border-left:none;padding-left:3px;'></td>
              <td class=xl724365 style='border-left:none;padding-left:3px;'></td>
              <td class=xl734365 style='border-left:none;padding-left:3px;'></td>
            </tr>
            <tr height=37 style='mso-height-source:userset;height:27.75pt'>
              <td height=37 class=xl744365 width=33 style='height:27.75pt;border-top:none;
  width:25pt'>邮寄地址
              </td>
              <td colspan=22 class=xl1214365 style='border-right:.5pt solid black;
  border-left:none;font-weight:400;padding-top:10px;'>{{detailsData.address}}</td>
            </tr>
            <tr height=35 style='mso-height-source:userset;height:26.25pt'>
              <td height=35 class=xl744365 width=33 style='height:26.25pt;border-top:none;
  width:25pt'>固定电话
              </td>
              <td colspan=9 class=xl1154365 width=291 style='border-right:.5pt solid black;
  border-left:none;width:220pt;padding-top:10px;'>{{detailsData.mobile}}</td>
              <td colspan=4 class=xl1214365 style='border-right:.5pt solid black;
  border-left:none;padding-top:10px;'>电子信箱
              </td>
              <td colspan=9 class=xl1224365
                  style='border-right:.5pt solid black;font-weight:normal;padding-top:10px;'></td>
            </tr>
            <tr height=40 style='mso-height-source:userset;height:30.0pt'>
              <td height=40 class=xl854365 width=33 style='height:30.0pt;border-top:none;
  width:25pt'>移动电话
              </td>
              <td colspan=9 class=xl1184365 width=291 style='border-right:.5pt solid black;
  border-left:none;width:220pt;padding-top:10px;'>{{detailsData.mobile}}</td>
              <td colspan=4 class=xl1274365 style='border-right:.5pt solid black;
  border-left:none;padding-top:10px;'>邮政编码
              </td>
              <td colspan=9 class=xl1294365 style='border-right:.5pt solid black;
  border-left:none;padding-top:10px;'></td>
            </tr>
            <tr height=19 style='height:14.25pt'>
              <td rowspan=16 height=363 class=xl1784365 width=23 style='border-bottom:1.0pt solid black;
  height:272.45pt;width:17pt'>申请业务种类
              </td>
              <td colspan=3 class=xl1904365 width=165 style='border-left:none;width:124pt'>{{detailsData.bustype}}</td>
              <td colspan=2 rowspan=4 class=xl1874365 width=53 style='width:40pt'>申请的准驾车型代号</td>
              <td colspan=5 rowspan=4 class=xl2384365 width=106 style='width:81pt;font-weight:400;'></td>
              <td colspan=19 rowspan=2 class=xl2414365 width=400 style='border-right:1.0pt solid black;
  width:305pt'>属于持军警驾驶证、境外驾驶证申领的，还应填写所持驾驶证种类：
              </td>
            </tr>
            <tr height=19 style='height:14.25pt'>
              <td colspan=3 height=19 class=xl994365 width=165 style='height:14.25pt;
  border-left:none;width:124pt'></td>
            </tr>
            <tr height=19 style='height:14.25pt'>
              <td colspan=3 height=19 class=xl994365 width=165 style='height:14.25pt;
  border-left:none;width:124pt'><i class="driver-checkbox">口</i>3持军警驾驶证申领
              </td>
              <td colspan=19 class=xl2394365 width=400 style='border-right:1.0pt solid black;
  border-left:none;width:305pt'><i class="driver-checkbox">口</i>11军队驾驶证<span style='mso-spacerun:yes'>&nbsp;
  </span><i class="driver-checkbox">口</i>12武警驾驶证<span style='mso-spacerun:yes'>&nbsp;&nbsp;&nbsp;</span></td>
            </tr>
            <tr height=19 style='height:14.25pt'>
              <td colspan=3 height=19 class=xl994365 width=165 style='height:14.25pt;
  border-left:none;width:124pt'><i class="driver-checkbox">口</i>4持境外驾驶证申领
              </td>
              <td colspan=19 class=xl2394365 width=400 style='border-right:1.0pt solid black;
  border-left:none;width:305pt'><i class="driver-checkbox">口</i>13香港驾驶证<span style='mso-spacerun:yes'>&nbsp;
  </span><i class="driver-checkbox">口</i>14澳门驾驶证<span style='mso-spacerun:yes'>&nbsp; </span><i class="driver-checkbox">口</i>15台湾驾驶证<span
                style='mso-spacerun:yes'>&nbsp; </span><i class="driver-checkbox">口</i>16外国驾驶证
              </td>
            </tr>
            <tr height=19 style='height:14.25pt'>
              <td colspan=10 height=19 class=xl2364365 width=324 style='height:14.25pt;
  border-left:none;width:245pt'><i class="driver-checkbox">口</i>5证件损毁换证<span
                style='mso-spacerun:yes'>&nbsp;&nbsp; </span><i class="driver-checkbox">口</i>6转入换证<span
                style='mso-spacerun:yes'>&nbsp; </span><i class="driver-checkbox">口</i>7有效期满换证
              </td>
              <td colspan=19 class=xl2344365 style='border-right:1.0pt solid black;
  border-left:none'>换证时无法提交居住、暂住证明原因：<span style="font-weight:400;font-size:10pt;"></span></td>
            </tr>
            <tr height=19 style='mso-height-source:userset;height:14.25pt'>
              <td colspan=10 height=19 class=xl994365 width=324 style='height:14.25pt;
  border-left:none;width:245pt'><i class="driver-checkbox">口</i>8达到规定年龄换证<span style='mso-spacerun:yes'>&nbsp;
  </span><i class="driver-checkbox">口</i>9自愿降低准驾车型换证
              </td>
              <td colspan=9 rowspan=2 class=xl1634365 width=189 style='width:144pt'>申请的准驾车型代号</td>
              <td colspan=10 rowspan=2 class=xl1634365 width=211 style='border-right:1.0pt solid black;
  width:161pt;font-weight:400;'></td>
            </tr>
            <tr height=19 style='height:14.25pt'>
              <td colspan=10 height=19 class=xl994365 width=324 style='height:14.25pt;
  border-left:none;width:245pt'><i class="driver-checkbox">口</i>10因身体条件变化降低准驾车型换证
              </td>
            </tr>
            <tr height=34 style='mso-height-source:userset;height:25.5pt;'>
              <td colspan=3 height=34 class=xl1714365 width=165 style='border-right:.5pt solid black;
  height:25.5pt;border-left:none;width:124pt;padding-top:10px;'><i class="driver-checkbox">口</i>17信息变化换证
              </td>
              <td colspan=3 class=xl1634365 width=74 style='border-left:none;width:56pt;padding-top:10px;'>变更事项</td>
              <td colspan=6 class=xl1774365 width=127
                  style='border-left:none;width:97pt;font-size:10pt;padding-top:10px;'></td>
              <td colspan=4 class=xl1634365 width=84 style='border-left:none;width:64pt;padding-top:10px;'>变更内容</td>
              <td colspan=13 class=xl1684365 width=274 style='border-right:1.0pt solid black;
  border-left:none;width:209pt;font-size:10pt;padding-top:10px;'></td>
            </tr>
            <tr height=29 style='mso-height-source:userset;height:21.95pt'>
              <td colspan=3 height=29 class=xl1744365 width=165 style='border-right:.5pt solid black;
  height:21.95pt;border-left:none;width:124pt;padding-top:8px;'><i class="driver-checkbox">口</i>18信息备案
              </td>
              <td colspan=3 class=xl1634365 width=74 style='border-left:none;width:56pt;padding-top:8px;'>从业单位</td>
              <td colspan=23 class=xl1684365 width=485 style='border-right:1.0pt solid black;
  border-left:none;width:370pt;font-size:10pt;padding-top:8px;'></td>
            </tr>
            <tr class=xl784365 height=19 style='height:14.25pt'>
              <td colspan=5 height=19 class=xl994365 width=218 style='height:14.25pt;
  border-left:none;width:164pt'><i class="driver-checkbox">口</i>19补证
              </td>
              <td rowspan=7 class=xl1104365 width=21 style='border-bottom:1.0pt solid black;
  border-top:none;width:16pt'>原 因
              </td>
              <td colspan=5 class=xl1654365 width=106 style='border-right:.5pt solid black;
  border-left:none;width:81pt'><i class="driver-checkbox">口</i>27丢失<span style='mso-spacerun:yes'>&nbsp;
  </span><i class="driver-checkbox">口</i>28其他
              </td>
              <td colspan=18 class=xl884365 width=379 style='border-right:1.0pt solid black;
  border-left:none;width:289pt'>补证时无法提交居住、暂住证明原因：<span style="font-weight:400;font-size:10pt;"></span></td>
            </tr>
            <tr class=xl784365 height=19 style='height:14.25pt'>
              <td colspan=5 height=19 class=xl994365 width=218 style='height:14.25pt;
  border-left:none;width:164pt'><i class="driver-checkbox">口</i>20注销
              </td>
              <td colspan=23 class=xl954365 width=485 style='border-right:1.0pt solid black;
  border-left:none;width:370pt'><i class="driver-checkbox">口</i>29本人申请<span
                style='mso-spacerun:yes'>&nbsp;&nbsp; </span><i class="driver-checkbox">口</i>30死亡<span
                style='mso-spacerun:yes'>&nbsp;&nbsp; </span><i class="driver-checkbox">口</i>31身体条件不适合<span
                style='mso-spacerun:yes'>&nbsp;&nbsp; </span><i class="driver-checkbox">口</i>32丧失民事行为能力<span
                style='mso-spacerun:yes'>&nbsp;&nbsp; </span><i class="driver-checkbox">口</i>33其他
              </td>
            </tr>
            <tr class=xl784365 height=23 style='mso-height-source:userset;height:17.25pt'>
              <td colspan=5 height=23 class=xl994365 width=218 style='height:17.25pt;
  border-left:none;width:164pt;padding-top:5px;'><i class="driver-checkbox">口</i>21注销最高准驾车型
              </td>
              <td colspan=23 rowspan=2 class=xl954365 width=485 style='border-right:1.0pt solid black;
  width:370pt'><i class="driver-checkbox">口</i>34发生交通事故造成人员死亡，承担同等以上责任<br>
                <i class="driver-checkbox">口</i>35连续三个记分周期不参加审验<span style='mso-spacerun:yes'>&nbsp; </span><i
                  class="driver-checkbox">口</i>36记满12分<br>
                <i class="driver-checkbox">口</i>37延长的实习期内再次记6分以上但未达到12分
              </td>
            </tr>
            <tr class=xl784365 height=25 style='mso-height-source:userset;height:18.75pt'>
              <td colspan=5 height=25 class=xl994365 width=218 style='height:18.75pt;
  border-left:none;width:164pt;padding-top:5px;'><i class="driver-checkbox">口</i>22注销实习准驾车型
              </td>
            </tr>
            <tr height=21 style='mso-height-source:userset;height:15.75pt'>
              <td colspan=2 rowspan=2 height=46 class=xl994365 width=106 style='height:
  34.5pt;width:80pt'><i class="driver-checkbox">口</i>23恢复驾驶资格
              </td>
              <td rowspan=2 class=xl1104365 width=59 style='border-top:none;width:44pt'>准驾车型代号</td>
              <td colspan=2 rowspan=2 class=xl1104365 width=53 style='width:40pt;font-weight:400;'></td>
              <td colspan=23 rowspan=2 class=xl954365 width=485 style='border-right:1.0pt solid black;
  width:370pt'><i class="driver-checkbox">口</i>38超过有效期一年以上未换证被注销未满两年<br/>
                <i class="driver-checkbox">口</i>39未按规定提交体检证明被注销未满两年<span
                  style='mso-spacerun:yes'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></td>
            </tr>
            <tr height=25 style='mso-height-source:userset;height:18.75pt'>
            </tr>
            <tr height=35 style='mso-height-source:userset;height:26.25pt'>
              <td colspan=5 height=35 class=xl1014365 width=218 style='height:26.25pt;
  border-left:none;width:164pt;padding-top:3px;'><i class="driver-checkbox">口</i>24延期换证<span style='mso-spacerun:yes'>&nbsp;
  </span><i class="driver-checkbox">口</i>25延期审验<br/><i class="driver-checkbox">口</i>26延期提交身体条件证明
              </td>
              <td colspan=23 class=xl2244365 width=485 style='border-right:1.0pt solid black;
  border-left:none;width:370pt;padding-top:10px;'><i class="driver-checkbox">口</i>40服兵役<span
                style='mso-spacerun:yes'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </span><i class="driver-checkbox">口</i>41出国（境）<span
                style='mso-spacerun:yes'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span><i class="driver-checkbox">口</i>42其他
              </td>
            </tr>
            <tr height=20 style='mso-height-source:userset;height:15.0pt'>
              <td colspan=3 rowspan=2 height=43 class=xl1814365 width=129 style='border-right:
  .5pt solid black;border-bottom:.5pt solid black;height:32.25pt;width:97pt'>申请方式
              </td>
              <td colspan=27 rowspan=2 class=xl1974365 width=618 style='border-right:1.0pt solid black;
  border-bottom:.5pt solid black;width:470pt'><span
                style='mso-spacerun:yes'>&nbsp;&nbsp; </span><i class="driver-checkbox">口</i>43本人申请<span
                style='mso-spacerun:yes'>&nbsp;&nbsp; </span><i class="driver-checkbox">口</i>44监护人申请<span
                style='mso-spacerun:yes'>&nbsp;&nbsp; </span><font class="font74365"><i class="driver-checkbox">口</i>45委托</font><font
                class="font84365"><span
                style='mso-spacerun:yes'>
  </span></font><font class="font74365">代理申请</font></td>
            </tr>
            <tr height=23 style='mso-height-source:userset;height:17.25pt'>
            </tr>
            <tr height=34 style='mso-height-source:userset;height:25.5pt'>
              <td colspan=3 rowspan=2 height=68 class=xl1814365 width=129 style='border-right:
  .5pt solid black;border-bottom:1.0pt solid black;height:51.0pt;width:97pt'>委托代理人<br>
                监护人信息
              </td>
              <td colspan=2 class=xl1864365 width=87 style='border-right:.5pt solid black;
  border-left:none;width:65pt'>代理人/监护人姓名
              </td>
              <td colspan=4 class=xl904365 width=89 style='border-right:.5pt solid black;
  border-left:none;width:68pt;padding-top:10px;'></td>
              <td colspan=3 class=xl2274365 width=63 style='border-right:.5pt solid black;
  border-left:none;width:48pt;text-align:center;'>身份证明名<span style='mso-spacerun:yes'>&nbsp;
  </span>称
              </td>
              <td colspan=5 class=xl2304365 style='border-right:.5pt solid black;
  border-left:none;padding-top:10px;'></td>
              <td colspan=3 class=xl1864365 width=63 style='border-right:.5pt solid black;
  border-left:none;width:48pt'>身份证明号<span style='mso-spacerun:yes'>&nbsp;
  </span>码
              </td>
              <td colspan=10 class=xl1864365 width=211 style='border-right:1.0pt solid black;
  border-left:none;width:161pt;padding-top:10px;'></td>
            </tr>
            <tr height=34 style='mso-height-source:userset;height:25.5pt'>
              <td colspan=2 height=34 class=xl974365 width=87 style='border-right:.5pt solid black;
  height:25.5pt;border-left:none;width:65pt'>联系地址
              </td>
              <td colspan=12 class=xl1084365 width=257 style='border-right:.5pt solid black;
  width:196pt'></td>
              <td colspan=3 class=xl1074365 width=63 style='border-right:.5pt solid black;
  border-left:none;width:48pt'>联系电话
              </td>
              <td colspan=10 class=xl1044365 width=211 style='border-right:1.0pt solid black;
  border-left:none;width:161pt;font-size:10pt;'></td>
            </tr>
            <tr height=19 style='height:14.25pt'>
              <td rowspan=15 height=277 class=xl1354365 width=23 style='border-bottom:1.0pt solid black;
  height:207.75pt;width:17pt'>申告的义务和内容
              </td>
              <td colspan=20 class=xl1564365 style='border-left:none;padding-top:3px;'><span
                style='mso-spacerun:yes'>&nbsp;&nbsp;&nbsp; </span><font
                class="font64365">机动车驾驶证申请人应当如实申告是否具有下列不准申请的情形：</font></td>
              <td class=xl824365 style='border-top:none'>　</td>
              <td colspan=8 rowspan=2 class=xl2034365 width=169 style='border-right:1.0pt solid black;
  border-bottom:.5pt solid black;width:129pt'><span
                style='mso-spacerun:yes'>&nbsp;&nbsp; </span>申请人及代理人对申请材料的真实有效性负责。
              </td>
            </tr>
            <tr height=19 style='height:14.25pt'>
              <td colspan=21 height=19 class=xl1024365 style='height:14.25pt;border-left:
  none'><span style='mso-spacerun:yes'>&nbsp;&nbsp;&nbsp;&nbsp;
  </span>一、器质性心脏病、癫痫病、美尼尔氏症、眩晕症、癔病、震颤麻痹、精神病、痴呆以及影响
              </td>
            </tr>
            <tr height=19 style='height:14.25pt'>
              <td colspan=21 height=19 class=xl934365 width=555 style='height:14.25pt;
  border-left:none;width:421pt'><span
                style='mso-spacerun:yes'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </span>肢体活动的神经系统疾病等妨碍安全驾驶疾病；<span
                style='mso-spacerun:yes'>&nbsp;&nbsp;</span></td>
              <td colspan=8 rowspan=5 class=xl2124365 width=169 style='border-right:1.0pt solid black;
  width:129pt'>申请人签字：<span style="font-size:10pt;font-weight:400;"></span></td>
            </tr>
            <tr height=19 style='height:14.25pt'>
              <td colspan=20 height=19 class=xl1024365 style='height:14.25pt;border-left:
  none'><span style='mso-spacerun:yes'>&nbsp;&nbsp;&nbsp;&nbsp;
  </span>二、三年内有吸食、注射毒品行为或者解除强制隔离戒毒措施未满三年，或者长期服用依赖性
              </td>
              <td class=xl844365></td>
            </tr>
            <tr height=19 style='height:14.25pt'>
              <td colspan=20 height=19 class=xl1024365 style='height:14.25pt;border-left:
  none'><span
                style='mso-spacerun:yes'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </span>精神药品成瘾尚未戒除；
              </td>
              <td class=xl844365></td>
            </tr>
            <tr height=19 style='height:14.25pt'>
              <td colspan=20 height=19 class=xl1624365 width=534 style='height:14.25pt;
  border-left:none;width:405pt'><span
                style='mso-spacerun:yes'>&nbsp;&nbsp;&nbsp;&nbsp;
  </span>三、提供虚假申请材料，以欺骗等不正当手段申领机动车驾驶证；
              </td>
              <td class=xl804365 width=21 style='width:16pt'></td>
            </tr>
            <tr height=19 style='height:14.25pt'>
              <td colspan=20 height=19 class=xl1444365 style='height:14.25pt;border-left:
  none'><span style='mso-spacerun:yes'>&nbsp;&nbsp;&nbsp;&nbsp;
  </span>四、造成交通事故后逃逸构成犯罪；
              </td>
              <td class=xl794365></td>
            </tr>
            <tr height=19 style='height:14.25pt'>
              <td colspan=20 height=19 class=xl1444365 style='height:14.25pt;border-left:
  none'><span style='mso-spacerun:yes'>&nbsp;&nbsp;&nbsp;&nbsp;
  </span>五、饮酒后或者醉酒驾驶机动车发生重大交通事故构成犯罪；
              </td>
              <td class=xl794365></td>
              <td colspan=8 class=xl2154365 width=169 style='border-right:1.0pt solid black;
  width:129pt'></td>
            </tr>
            <tr height=19 style='height:14.25pt'>
              <td colspan=20 height=19 class=xl1444365 style='height:14.25pt;border-left:
  none'><span style='mso-spacerun:yes'>&nbsp;&nbsp;&nbsp;&nbsp;
  </span>六、醉酒驾驶机动车或者饮酒后驾驶营运机动车依法被吊销机动车驾驶证未满五年；
              </td>
              <td class=xl794365></td>
              <td colspan=8 rowspan=5 class=xl2094365 width=169 style='border-right:1.0pt solid black;
  width:129pt'>代理人/监护人签字:<span style="font-size:10pt;font-weight:400;"></span></td>
            </tr>
            <tr height=19 style='height:14.25pt'>
              <td colspan=20 height=19 class=xl1444365 style='height:14.25pt;border-left:
  none'><span style='mso-spacerun:yes'>&nbsp;&nbsp;&nbsp;&nbsp;
  </span>七、醉酒驾驶营运机动车依法被吊销机动车驾驶证未满十年；
              </td>
              <td class=xl794365></td>
            </tr>
            <tr height=19 style='height:14.25pt'>
              <td colspan=20 height=19 class=xl864365 style='height:14.25pt;border-left:
  none'><span style='mso-spacerun:yes'>&nbsp;&nbsp;&nbsp;&nbsp;
  </span>八、因其他情形依法被吊销机动车驾驶证未满二年
              </td>
              <td class=xl794365></td>
            </tr>
            <tr height=19 style='height:14.25pt'>
              <td colspan=20 height=19 class=xl864365 style='height:14.25pt;border-left:
  none'><span style='mso-spacerun:yes'>&nbsp;&nbsp;&nbsp;&nbsp;
  </span>九、驾驶许可依法被撤销未满三年
              </td>
              <td class=xl794365></td>
            </tr>
            <tr height=19 style='height:14.25pt'>
              <td colspan=20 height=19 class=xl1444365 style='height:14.25pt;border-left:
  none'><span style='mso-spacerun:yes'>&nbsp;&nbsp;&nbsp;&nbsp;
  </span>十、法律和行政法规规定的其他不准申请的情形。
              </td>
              <td class=xl794365></td>
            </tr>
            <tr height=19 style='height:14.25pt'>
              <td colspan=20 height=19 class=xl1584365 width=534 style='height:14.25pt;
  border-left:none;width:405pt'><span
                style='mso-spacerun:yes'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span><font
                class="font64365">上述内容本人已认真阅读，本人不具有所列的不准申请的情形。<span
                style='mso-spacerun:yes'>&nbsp;</span></font></td>
              <td class=xl814365 width=21 style='width:16pt'></td>
              <td colspan=8 rowspan=2 class=xl1914365 style='border-right:1.0pt solid black;
  border-bottom:1.0pt solid black'>__年__月__日
              </td>
            </tr>
            <tr height=11 style='mso-height-source:userset;height:8.25pt'>
              <td colspan=20 height=11 class=xl1604365 style='height:8.25pt;border-left:
  none'><span style='mso-spacerun:yes'>&nbsp;</span></td>
              <td class=xl834365>　</td>
            </tr>
            <![if supportMisalignedColumns]>
            <tr height=0 style='display:none'>
              <td width=23 style='width:17pt'></td>
              <td width=33 style='width:25pt'></td>
              <td width=73 style='width:55pt'></td>
              <td width=59 style='width:44pt'></td>
              <td width=28 style='width:21pt'></td>
              <td width=25 style='width:19pt'></td>
              <td width=21 style='width:16pt'></td>
              <td width=21 style='width:16pt'></td>
              <td width=22 style='width:17pt'></td>
              <td width=21 style='width:16pt'></td>
              <td width=21 style='width:16pt'></td>
              <td width=21 style='width:16pt'></td>
              <td width=21 style='width:16pt'></td>
              <td width=21 style='width:16pt'></td>
              <td width=21 style='width:16pt'></td>
              <td width=21 style='width:16pt'></td>
              <td width=21 style='width:16pt'></td>
              <td width=21 style='width:16pt'></td>
              <td width=21 style='width:16pt'></td>
              <td width=21 style='width:16pt'></td>
              <td width=21 style='width:16pt'></td>
              <td width=21 style='width:16pt'></td>
              <td width=21 style='width:16pt'></td>
              <td width=21 style='width:16pt'></td>
              <td width=21 style='width:16pt'></td>
              <td width=21 style='width:16pt'></td>
              <td width=21 style='width:16pt'></td>
              <td width=21 style='width:16pt'></td>
              <td width=21 style='width:16pt'></td>
              <td width=22 style='width:17pt'></td>
            </tr>
            <![endif]>
          </table>

        </div>
        <div class="apply-des-box pore">
          <button  @click="print_excel('#print_area_s')" @mouseleave="removeActive($event)" @mouseenter="addActive($event)" :class="print_status_control_s?'d_i_b':'hide'"  class="layui-btn layui-btn-sm" id="print_item_s">打印申请表</button>
          <div id="print_area_s" @mouseleave="print_status_s" @mouseenter="print_status_s"  class=WordSection1 style='layout-grid:15.6pt'>
            <p class=MsoNormal align=center style='margin-right:1.25pt;text-align:center'><b><span lang=EN-US style='font-size:22.0pt'>&nbsp;</span></b></p>
            <p class=MsoNormal align=center style='margin-right:1.25pt;text-align:center'><b><span lang=EN-US style='font-size:22.0pt;font-family:Symbol'>&nbsp;</span></b></p>
            <p class=MsoNormal align=left style='margin-right:1.25pt;text-align:left'><a name="OLE_LINK8"></a><a name="OLE_LINK7"></a><a name="OLE_LINK6"><span lang=EN-US style='font-size:26.0pt;font-family:C39HrP24DhTt'>{{detailsData.agentidcardnumber}}</span></a></p>
            <p class=MsoNormal align=center style='margin-right:1.25pt;text-align:center'><span lang=EN-US
                                                                                                style='font-size:16.0pt'>{{detailsData.name}}</span>
            </p>
            <p class=MsoNormal align=center style='margin-right:1.25pt;text-align:center'><a name="OLE_LINK20"><span
              style='font-size:16.0pt;font-family:黑体'>机动车驾驶证业务</span></a><a name="OLE_LINK19"></a><a
              name="OLE_LINK18"></a><a name="OLE_LINK17"></a><a name="OLE_LINK16"><span
              style='font-size:16.0pt;font-family:黑体'>受理凭证</span></a></p>
            <p class=MsoNormal align=center style='margin-right:1.25pt;text-align:center'><span lang=EN-US
                                                                                                style='font-size:16.0pt;font-family:黑体'>&nbsp;</span>
            </p>
            <p class=MsoNormal align=left style='margin-right:1.25pt;text-align:left;text-indent:16pt'><span
              style='font-size:16.0pt;font-family:仿宋_GB2312'>业务流水号：</span><u><span lang=EN-US
                                                                                   style='font-size:16.0pt;font-family:Symbol'>{{detailsData.agentidcardnumber}}</span></u>
            </p>
            <p class=MsoNormal align=left
               style='margin-right:1.25pt;text-align:left;text-indent:16.0pt;background:white'><span
              style='font-size:16.0pt;font-family:仿宋_GB2312'>业务种类：</span><a name="OLE_LINK15"></a><a
              name="OLE_LINK14"></a><a name="OLE_LINK13"></a><a name="OLE_LINK12"></a><a name="OLE_LINK11"></a><a
              name="OLE_LINK10"></a><a name="OLE_LINK9"><span lang=EN-US style='font-size:16.0pt;font-family:仿宋_GB2312'>{{detailsData.bustype}}</span></a></p>
            <p class=MsoNormal align=left
               style='margin-right:1.25pt;text-align:left;text-indent:16.0pt;background:white'><span
              style='font-size:16.0pt;font-family:仿宋_GB2312'>档案编号：</span><span lang=EN-US style='font-size:16.0pt'>{{detailsData.documentid}}</span>
            </p>
            <p class=MsoNormal align=left
               style='margin-right:1.25pt;text-align:left;text-indent:16.0pt;background:white'><span
              style='font-size:16.0pt;font-family:仿宋_GB2312'>身份证号：</span><span lang=EN-US style='font-size:16.0pt'>{{detailsData.idcardnumber}}</span>
            </p>
            <p class=MsoNormal align=left
               style='margin-right:1.25pt;text-align:left;text-indent:16.0pt;background:white'><span lang=EN-US
                                                                                                     style='font-size:16.0pt'>---------------</span>
            </p>
            <p class=MsoNormal align=left
               style='margin-right:1.25pt;text-align:left;text-indent:48.0pt;background:white'><span
              style='font-size:16.0pt;font-family:仿宋_GB2312'>姓名：</span><span lang=EN-US style='font-size:16.0pt'>{{detailsData.name}}</span>
            </p>
            <p class=MsoNormal align=left
               style='margin-right:1.25pt;text-align:left;text-indent:16.0pt;background:white'><span
              style='font-size:16.0pt;font-family:仿宋_GB2312'>受理时间：</span><span lang=EN-US style='font-size:16.0pt'>{{detailsData.ctime}}</span>
            </p>
            <p class=MsoNormal align=left
               style='margin-right:1.25pt;text-align:left;text-indent:32.0pt;background:white'><span
              style='font-size:16.0pt;font-family:仿宋_GB2312'>经办人：</span><span lang=EN-US
                                                                              style='font-size:16.0pt'></span></p>
            <p class=MsoNormal align=left
               style='margin-right:1.25pt;text-align:left;text-indent:16.0pt;background:white'><span
              style='font-size:16.0pt;font-family:仿宋_GB2312'>友情提示：</span></p>
            <p class=MsoNormal align=left style='margin-right:1.25pt;text-align:left'><b><span
              lang=EN-US style='font-size:16.0pt'>&nbsp;</span></b></p>
            <p class=MsoNormal align=left style='margin-right:1.25pt;text-align:left'><b><span
              lang=EN-US style='font-size:16.0pt'>&nbsp;</span></b></p>
            <p class=MsoNormal align=left style='margin-right:1.25pt;text-align:left'><b><span
              lang=EN-US style='font-size:16.0pt'>&nbsp;</span></b></p>
            <p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>
          </div>
        </div>
        <div class="missing-prove pore">
          <button @click="print_excel('#print_area_t')" @mouseleave="removeActive($event)" @mouseenter="addActive($event)" :class="print_status_control_t?'d_i_b':'hide'" class="layui-btn layui-btn-sm hide" id="print_item_f">打印申请表</button>
          <div id="print_area_t" @mouseleave="print_status_t" @mouseenter="print_status_t" >
            <p style="margin:0pt 1.25pt 0pt 0pt; orphans:0; text-align:center; widows:0"><span
              style="font-family:'Times New Roman'; font-size:22pt; font-weight:bold">&nbsp;</span></p>
            <p style="margin:0pt 1.25pt 0pt 0pt; orphans:0; text-align:center; widows:0"><span
              style="font-family:黑体; font-size:16pt">机动车驾驶证遗失声明</span></p>
            <p style="background-color:#ffffff; line-height:16pt; margin:0pt 1.25pt 0pt 0pt; text-indent:21pt"><span
              style="font-family:'Times New Roman'; font-size:16pt">&nbsp;</span></p>
            <p
              style="background-color:#ffffff; font-size:16pt; line-height:150%; margin:0pt 1.25pt 0pt 0pt; text-indent:21pt">
              <span style="font-family:仿宋_GB2312; font-size:16pt">姓名</span><span
              style="font-family:仿宋_GB2312; font-size:16pt; text-decoration:underline">&nbsp; </span><span
              style="font-family:'Times New Roman'; font-size:16pt; text-decoration:underline">{{detailsData.name}}</span><span
              style="font-family:'Times New Roman'; font-size:16pt; text-decoration:underline"> </span><span
              style="font-family:'Times New Roman'; font-size:16pt; text-decoration:underline">&nbsp;</span><span
              style="font-family:仿宋_GB2312; font-size:16pt">，证件号码</span><span
              style="font-family:仿宋_GB2312; font-size:16pt; text-decoration:underline">&nbsp;&nbsp; </span><span
              style="font-family:'Times New Roman'; font-size:16pt; text-decoration:underline">{{detailsData.idcardnumber}}</span><span
            <p style="background-color:#ffffff; font-size:16pt; line-height:150%; margin:0pt 1.25pt 0pt 0pt"><span
              style="font-family:仿宋_GB2312; font-size:16pt">档案编号</span><span
              style="font-family:仿宋_GB2312; font-size:16pt; text-decoration:underline"> </span><span
              style="font-family:'Times New Roman'; font-size:16pt; text-decoration:underline">{{detailsData.busid}}</span><span
              style="font-family:仿宋_GB2312; font-size:16pt">驾驶证新编号</span><span
              style="font-family:仿宋_GB2312; font-size:16pt; text-decoration:underline"> </span><span
              style="font-family:'Times New Roman'; font-size:16pt; text-decoration:underline">{{detailsData.documentid}}</span><span
              style="font-family:'Times New Roman'; font-size:16pt; text-decoration:underline"> </span><span
              style="font-family:'Times New Roman'; font-size:16pt; text-decoration:underline">&nbsp;</span><span
              style="font-family:仿宋_GB2312; font-size:16pt">，驾驶证于</span><span
              style="font-family:'Times New Roman'; font-size:16pt; text-decoration:underline">____</span><span
              style="font-family:仿宋_GB2312; font-size:16pt">年</span><span
              style="font-family:'Times New Roman'; font-size:16pt; text-decoration:underline">__</span><span
              style="font-family:仿宋_GB2312; font-size:16pt">月</span><span
              style="font-family:'Times New Roman'; font-size:16pt; text-decoration:underline">__</span><span
              style="font-family:仿宋_GB2312; font-size:16pt">日丢失，声明作废。上述情况属实，不存在以隐瞒、欺骗手段补领驾驶证行为，否则愿承担法律责任。</span></p>
            <p
              style="background-color:#ffffff; font-size:16pt; line-height:150%; margin:0pt 1.25pt 0pt 0pt; text-indent:21pt">
              <span
                style="font-family:仿宋_GB2312; font-size:16pt">本人郑重声明：自该日后由此驾驶证所引发的一切不当后果和以此驾驶证办理的一切事务与本人无关。</span><span
              style="font-family:仿宋_GB2312; font-size:16pt"> </span></p>
            <p style="background-color:#ffffff; line-height:16pt; margin:0pt 1.25pt 0pt 0pt"><span
              style="font-family:'Times New Roman'; font-size:16pt">&nbsp;</span></p>
            <p style="margin:0pt 1.25pt 0pt 0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"><span
              style="font-family:仿宋_GB2312; font-size:16pt">特此声明！</span></p>
            <p style="margin:0pt 1.25pt 0pt 0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"><span
              style="font-family:'Times New Roman'; font-size:16pt">&nbsp;</span></p>
            <p style="margin:0pt 1.25pt 0pt 0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"><span
              style="font-family:仿宋_GB2312; font-size:16pt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span><span
              style="font-family:仿宋_GB2312; font-size:16pt">声明人签字：</span></p>
            <p style="margin:0pt 1.25pt 0pt 0pt; orphans:0; text-align:justify; text-indent:21pt; widows:0"><span
              style="font-family:'Times New Roman'; font-size:16pt">&nbsp;</span></p>
            <p style="margin:0pt 1.25pt 0pt 0pt; orphans:0; text-align:justify; text-indent:157.5pt; widows:0"><span
              style="font-family:'Times New Roman'; font-size:16pt">____</span><span
              style="font-family:仿宋_GB2312; font-size:16pt">年</span><span
              style="font-family:'Times New Roman'; font-size:16pt">__</span><span
              style="font-family:仿宋_GB2312; font-size:16pt">月</span><span
              style="font-family:'Times New Roman'; font-size:16pt">__</span><span
              style="font-family:仿宋_GB2312; font-size:16pt">日</span></p>
            <p style="margin:0pt 1.25pt 0pt 0pt; orphans:0; widows:0"><span
              style="font-family:'Times New Roman'; font-size:16pt; font-weight:bold">&nbsp;</span></p>
            <p style="margin:0pt 1.25pt 0pt 0pt; orphans:0; widows:0"><span
              style="font-family:'Times New Roman'; font-size:16pt; font-weight:bold">&nbsp;</span></p>
            <p style="margin:0pt 1.25pt 0pt 0pt; orphans:0; widows:0"><span
              style="font-family:'Times New Roman'; font-size:16pt; font-weight:bold">&nbsp;</span></p>
            <p style="margin:0pt; orphans:0; text-align:justify; widows:0"><span
              style="font-family:'Times New Roman'; font-size:10.5pt">&nbsp;</span></p>
          </div>
        </div>
      </div>
      <!-------------------------------------------------------------------------------------->
      <div class="details-bottom">
        <div class="details-bottom-f">
          <button v-if="detailsData.auditstate==0" class="layui-btn layui-btn-sm">审核成功</button>
          <button v-if="detailsData.auditstate==0" class="layui-btn layui-btn-sm">审核失败</button>
          <button v-if="detailsData.auditstate==1" class="layui-btn layui-btn-sm">证件归档</button>
          <button v-if="detailsData.auditstate==2" class="layui-btn layui-btn-sm">审核通过</button>
        </div>
        <div class="details-bottom-s">
          <button class="layui-btn layui-btn-normal  layui-btn-radius layui-btn-primary" id="details_return">返回</button>
        </div>
      </div>
    </div>

  </article>
</template>

<script>
  import config from '@/config';
  import OperatorUtils from '../../utils/OperatorUtils';
  import '../../../static/css/stylesheet.css';

  export default {
    name: 'vehicle',
    data () {
      return {
        msg: 'vehicle',
        Authorization: OperatorUtils.getData('token'),
        userCode: OperatorUtils.getData('userInfo').USER_CODE,
        arr: [{name: 'vehicle', value: 'vehicle'}],
        print_status_control_f:false,
        print_status_control_s:false,
        print_status_control_t:false,
        detailsData: '',
        dataArr: '',
        tableIndex: 0,
        cancel_commond: '',
        idCardNumber: [],
        DcheckedSearchFormData: {
          begintime: this.$store.state.dateSel('-')[2],
          endtime: this.$store.state.dateSel('-')[0],
          btype: '',
          drivingLiceseno: '',
          iscertificateok: '',
          takeway: ''
        },
        uncheckedSearchFormData: {
          begintime: this.$store.state.dateSel('-')[2],
          endtime: this.$store.state.dateSel('-')[0],
          btype: '',
          drivingLiceseno: '',
          iscertificateok: '',
          takeway: ''
        },
        unSuccessFormData: {
          begintime: this.$store.state.dateSel('-')[2],
          endtime: this.$store.state.dateSel('-')[0],
          btype: '',
          drivingLiceseno: '',
          iscertificateok: '',
          takeway: ''
        }
      };
    },
    methods: {
      tableRender (table, form,tableCheckboxUtil) {
        var _this = this;
        var tableIns = table.render({
          id:'driver_unchecked_table',
          elem: '#driver_unchecked_table',
          url: HOST,
          even: true,
          loading: true,
          page: true,
          where: {
            type: 'PoliceDataList',
            dtype: 0,
            userid: this.userCode
          },
          limit: 20,
          limits: [20, 40, 50, 60, 80],
          toolbar:'#dirver_unchecked_table_toolbar',
          headers: {
            'Authorization': this.Authorization
          },
          response: {
            statusCode: 200
          },
          cols: [[
            {type: 'checkbox'},
            {field: 'bevid', title: '设备编号', width: 90},
            {field: 'name', title: '姓名', width: 80},
            {field: 'mobile', title: '手机', width: 120},
            {field: 'idcardnumber', title: '驾驶证号', width: 150},
            {field: 'ctime', title: '创建时间', width: 170},
            {field: 'bustype', 'title': '业务类型', width: 90},
            {field: 'takeway', 'title': '快递类别', width: 90},
            {field: 'address', title: '地址'},
            {
              field: 'lock', title: '数据审核', width: 182, templet: function (d) {
                return '<button id="'+d.busid+'" class="layui-btn layui-btn-sm unchecked-details">详情</button><button name="' + d.busid + '" class="layui-btn layui-btn-sm Dchecked-allow mr4">通过</button><button name="' + d.busid + '" class="layui-btn layui-btn-sm Dchecked-unallow layui-btn-danger mr4">不过</button>';
              }
            }
          ]],
          done: function () {
            form.on('select(unChecked_btype)', function (data) {
              var value = data.value;
              _this.uncheckedSearchFormData.btype = value;
            });
            $('#unchecked_btn').bind('click', function (e) {
              e.preventDefault();
              var table_reload_dataS = {
                type: 'PoliceDataList',
                begintime: _this.uncheckedSearchFormData.begintime,
                endtime: _this.uncheckedSearchFormData.endtime,
                drivingLicenseno: _this.uncheckedSearchFormData.drivingLiceseno,
                btype: _this.uncheckedSearchFormData.btype,
                iscertificateok: _this.uncheckedSearchFormData.iscertificateok,
                takeway: _this.uncheckedSearchFormData.takeway,
                userid: _this.userCode,
                dtype: 0
              };
              tableIns.reload({
                  where: table_reload_dataS,
                  page: {
                    curr: 1
                  }
                }
              );
            });
            $('.Dchecked-allow').click(function (e) {
              var $this = $(this);
              e.stopPropagation();
              layer.confirm('确定要通过该条数据？', {
                btn: ['确定', '取消'],
                skin: _this.$store.state.skin
              }, function () {
                var type = 'ReviewPolicesData';
                var data = {
                  busid: $this.attr('name'),
                  auditstate: 1
                };
                data = config.urlTransition(type, data);
                _this.$http.apiPost(HOST, data).then(function (res) {
                  let code = res.code;
                  if (code == 200) {
                    layer.msg('审核成功');
                    setTimeout(function () {
                      layer.closeAll();
                      _this.tableRender(table);
                    }, 1500);
                  } else {
                    layer.msg(res.message);
                    layer.closeAll();
                  }
                });
              }, function (index) {
                layer.close(index);
              });
            });
            $('.Dchecked-unallow').click(function (e) {
              var $this = $(this);
              e.stopPropagation();
              layer.open({
                type: 1,
                title: '审核未通过原因',
                skin: _this.$store.state.skin,
                area: ['620px', '420px'],
                closeBtn: 1,
                shadeClose: true,
                content: $('#driver_unchecked_popup'),
                btn: ['确认选择', '取消'],
                yes: function () {
                  if (_this.cancel_commond != '') {
                    _this.dataArr += _this.cancel_commond + ';';
                  }
                  var type = 'ReviewPolicesData';
                  var data = {
                    busid: $this.attr('name'),
                    auditstate: 2,
                    auditresult: _this.dataArr
                  };
                  data = config.urlTransition(type, data);
                  _this.$http.apiPost(HOST, data).then(function (res) {
                    var code = res.code;
                    if (code == 200) {
                      layer.msg('审核成功');
                      setTimeout(function () {
                        layer.closeAll();
                        _this.tableRender(table);
                      }, 1500);
                    }
                  });
                },
                end: function () {
                  $('#driver_unchecked_popup').css({display: 'none'});
                }
              });
            });
            $('.unchecked-details').bind('click',function () {
              var type = 'PoliceDetail';
              var busid = $(this).attr('id')
              _this.viewDetails(type,busid)
            })
            tableCheckboxUtil.checkedDefault({
              gridId:'driver_unchecked_table',
              fieldName:'billId'
            });
            tableCheckboxUtil.init({
              gridId:'driver_unchecked_table',
              filterId:'driver_unchecked_table',
              fieldName:'id'
            });
            table.on('toolbar(driver_unchecked_table)', function(obj){
              let events = obj.event;
              if(events=='driver_unchecked_get_data'){
                var idlist_f = tableCheckboxUtil.getValue({
                  gridId:'driver_unchecked_table'
                });
                var length = idlist_f.length;
                console.log(length)
                if(length<1){
                  layer.msg('最少选择一条数据')
                }else {
                  let type = 'ExportPoliceDataList';
                  var str ='';
                  for(var i = 0;i< length; i++){
                    str+=','+idlist_f[i]
                  }
                  var data = {
                    dtype:0,
                    paramid:str.substring(1)
                  }
                  data=config.urlTransition(type,data);
                  console.log(data);
                  _this.$http.apiPost(HOST,data,{responseType:'arraybuffer'}).then(function (res) {
                    _this.download(res,'未审核')
                  })
                }
              }else if (events=='driver_unchecked_get_all_data'){
               _this.$http.apiPost(HOST,{type:'ExportPoliceDataList',data:{dtype:0,paramid:''}},{responseType:'arraybuffer'}).then(function (res) {
                  _this.download(res,'未审核')
                })
              } ;
            });
          }
        });
        $('#details_return').click(function (e) {
          e.preventDefault();
          $('#details_popup').addClass('hide').animate({
            display: 'none',
            'opacity': 0
          }, 500, function () {
            $('.layui-tab').removeClass('hide').animate({display: 'block', 'opacity': 1},500);
          });
        });
        $('.layui-table-body').mouseleave(function () {
          $('.personal-pic-msg').css({'opacity': '0', 'display': 'none'});
        });
        /*layui表格监听行点击事件和鼠标经过事件*/
      },
      checkedTableRender (table, form,tableCheckboxUtil) {
        var _this = this;
        table.render({
          id:'driver_checked_table',
          elem: '#driver_checked_table',
          url: HOST,
          even: true,
          loading: true,
          page: true,
          where: {
            type: 'PoliceDataList',
            dtype: 1,
            userid: this.userCode
          },
          limit: 20,
          limits: [20, 40, 50, 60, 80],
          headers: {
            'Authorization': this.Authorization
          },
          response: {
            statusCode: 200
          },
          toolbar:'#dirver_checked_table_toolbar',
          cols: [[
            {type: 'checkbox'},
            {field: 'bevid', title: '设备编号', width: 90},
            {field: 'name', title: '姓名', width: 90},
            {field: 'mobile', title: '手机', width: 120},
            {field: 'takeway', title: '邮寄方式', width: 90},
            {field: 'idcardnumber', title: '驾驶证号', width: 150},
            {field: 'ctime', title: '创建时间', width: 170},
            {field: 'address', title: '地址'},
            {
              field: 'switchOption', title: '下发证件', width: 90, templet: function (d) {
                return ' <input type="checkbox" value="' + d.busid + '" name="close" lay-skin="switch" lay-filter="switchOption" lay-text="ON|OFF">';
              }
            },
            {
              field: 'experience', width: 100, title: '归档状态', templet: function (d) {
                return '<button name="' + d.busid + '"  status = "'+d.iscollectok+'" class="layui-btn layui-btn-sm dCheckedArchive mr4">未归档</button>';
              }
            },
            {
              field: 'operate', width: 100, title: '查看详情', templet: function (d) {
                return '<button name="' + d.busid + '" class="layui-btn layui-btn-sm checked-details mr4">详情</button>';
              }
            }
          ]],
          done: function (res) {
            $('td[data-field="experience"]').find('button').each(function (val) {
              console.log($(this))
              var status = $(this).attr('status');
              if(status==1){
                $(this).html('已归档').addClass('bgce col-ccc');
              }
            });
            $('.dCheckedArchive').on('click', function () {
              var $this = $(this);
              layer.confirm('确定要归档该条数据？', {
                btn: ['确定', '取消'],
                skin: _this.$store.state.skin
              }, function () {
                var type = 'GuiDPolicesData';
                var data = {
                  id: $this.attr('name')
                };
                data = config.urlTransition(type, data);
                _this.$http.apiPost(HOST, data).then(function (res) {
                  let code = res.code;
                  if (code == 200) {
                    layer.msg('归档成功');
                    setTimeout(function () {
                      layer.closeAll();
                    }, 1500);
                  } else {
                    layer.msg(res.message);
                    layer.closeAll();
                  }
                  _this.checkedTableRender(table, form,tableCheckboxUtil);
                });
              }, function (index) {
                layer.close(index);
              });
            });
            $('.checked-details').on('click',function () {
              var type = 'PoliceDetail';
              var busid = $(this).attr('name')
              _this.viewDetails(type,busid);
            })
            tableCheckboxUtil.checkedDefault({
              gridId:'driver_checked_table',
              fieldName:'id'
            });
            tableCheckboxUtil.init({
              gridId:'driver_checked_table',
              filterId:'driver_checked_table',
              fieldName:'id'
            });
            table.on('toolbar(driver_checked_table)', function(obj){
              let events = obj.event;
              if(events=='driver_checked_get_data'){
                var idlist_s = tableCheckboxUtil.getValue({
                  gridId:'driver_checked_table'
                });
                var length = idlist_s.length;
                if(length<1){
                  layer.msg('最少选择一条数据')
                }else {
                  let type = 'ExportPoliceDataList';
                  var str ='';
                  for(var i = 0;i< length; i++){
                    str+=','+idlist_s[i]
                  }
                  var data = {
                    dtype:1,
                    paramid:str.substring(1)
                  }
                  data=config.urlTransition(type,data);
                  console.log(data);
                  _this.$http.apiPost(HOST,data,{responseType:'arraybuffer'}).then(function (res) {
                    _this.download(res,'审核已过')
                  })
                }
              }else if (events=='driver_checked_get_all_data'){
                _this.$http.apiPost(HOST,{type:'ExportPoliceDataList',data:{dtype:1,paramid:''}},{responseType:'arraybuffer'}).then(function (res) {
                  _this.download(res,'审核已过')
                })
              } ;
            });
            form.on('switch(switchOption)', function (dataS) {
              var status = this.checked;
              let type = 'FaZPolicesData';
              var data = {
                id: $(this).attr('value')
              };
              data = config.urlTransition(type, data);
              if (status) {
                _this.$http.apiPost(HOST, data).then(function (res) {
                  var code = res.code;
                  if (code == 200) {
                    layer.tips('证件下发成功', dataS.othis);
                  }
                });
              } else {

              }
            });
            form.on('checkbox(cancel_reason)', function (data) {
              var value = data.value;
              _this.dataArr += value + ';';
            });
          }
        });
      },
      unsuccessTableRender (table, form,tableCheckboxUtil) {
        var _this = this;
        table.render({
          id:'driver_checked_unsuccess_table',
          elem: '#driver_checked_unsuccess_table',
          url: HOST,
          even: true,
          loading: true,
          page: true,
          where: {
            type: 'PoliceDataList',
            dtype: 2,
            userid: this.userCode
          },
          limit: 20,
          limits: [20, 40, 50, 60, 80],
          headers: {
            'Authorization': this.Authorization
          },
          response: {
            statusCode: 200
          },
          toolbar:'#driver_checked_unsuccess_toolbar',
          cols: [[
            {type: 'checkbox'},
            {field: 'bevid', title: '设备编号', width: 90},
            {field: 'name', title: '姓名', width: 90},
            {field: 'mobile', title: '手机', width: 120},
            {field: 'bustype', title: '业务类型', width: 90},
            {field: 'idcardnumber', title: '驾驶证号', width: 150},
            {field: 'takeway', title: '邮寄方式', width: 90},
            {field: 'ctime', title: '创建时间', width: 170},
            {field: 'address', title: '地址'},
            {
              field: 'experience', width: 90, title: '审核操作', templet: function (d) {
                return '<button name="' + d.busid + '" class="layui-btn layui-btn-sm unSuccess-checked mr4">通过</button>';
              }
            }
          ]],
          done: function () {
            $('.unSuccess-checked').click(function () {
              var $this = $(this);
              var type = 'ReviewPolicesData';
              var data = {
                busid: $this.attr('name'),
                auditstate: 1
              };
              data = config.urlTransition(type, data);
              _this.$http.apiPost(HOST, data).then(function (res) {
                var code = res.code;
                if (code == 200) {
                  layer.msg('审核成功');
                  setTimeout(function () {
                    layer.closeAll();
                  }, 1500);
                }
              });
            });
            tableCheckboxUtil.checkedDefault({
              gridId:'driver_checked_unsuccess_table',
              fieldName:'id'
            });
            tableCheckboxUtil.init({
              gridId:'driver_checked_unsuccess_table',
              filterId:'driver_checked_unsuccess_table',
              fieldName:'id'
            });
            table.on('toolbar(driver_checked_unsuccess_table)', function(obj){
              let events = obj.event;
              console.log(events);
              if(events=='driver_checked_unsuccess_get_data'){
                var idlist_t = tableCheckboxUtil.getValue({
                  gridId:'driver_checked_unsuccess_table'
                });
                var length = idlist_t.length;
                if(length<1){
                  layer.msg('最少选择一条数据')
                }else {
                  let type = 'ExportPoliceDataList';
                  var str ='';
                  for(var i = 0;i< length; i++){
                    str+=','+idlist_t[i]
                  }
                  var data = {
                    dtype:2,
                    paramid:str.substring(1)
                  }
                  data=config.urlTransition(type,data);
                  _this.$http.apiPost(HOST,data,{responseType:'arraybuffer'}).then(function (res) {
                    _this.download(res,'审核未过')
                  })
                }
              }else if (events=='driver_checked_unsuccess_get_all_data'){
                _this.$http.apiPost(HOST,{type:'ExportPoliceDataList',data:{dtype:2,paramid:''}},{responseType:'arraybuffer'}).then(function (res) {
                  _this.download(res,'审核未过')
                })
              } ;
            });
          }
        });
      },
      tableOnF (table, elem) {
        table.on('row(' + elem + ')', function (obj) {
          var data = obj.data;
          var currentEl = $(obj.tr);
          $('.layout-right').children('.personal-pic-msg').remove();
          var str = '';
          str += '<div class="personal-pic-msg"><ul>';
          str += '<li><img class="pic1" src="' + data.idcardphotopath + '" alt="图片相关"></li>';
          str += '<li><img class="pic2" src="' + data.idcardfacepath + '" alt="图片相关"></li>';
          str += '<li><img class="pic3" src="' + data.videophotopath + '" alt="图片相关"></li>';
          str += '<li><img class="pic4" src="' + data.signphotopath + '" alt="图片相关"></li>';
          str += '<li><img class="pic4" src="' + data.pasterpath + '" alt="图片相关"></li>';
          str += '</ul></div>';
          $('.layout-right').append(str);
          $('.personal-pic-msg').addClass('driver-sport').css({'opacity': 1, bottom: 0});
        });
      },
      tableOnS (table, elem) {
        var _this = this;
      },
      print_status_f(){
        this.print_status_control_f=!this.print_status_control_f
      },
      print_status_s(){
        this.print_status_control_s=!this.print_status_control_s
      },
      print_status_t(){
        this.print_status_control_t=!this.print_status_control_t
      },
      addActive($event){
        $event.currentTarget.className='layui-btn layui-btn-sm d_i_b'
      },
      removeActive($event){
        $event.currentTarget.className='layui-btn layui-btn-sm hide'
      },
      print_excel(elem){
        var elem = $(elem)
        function getjQueryObject(string) {
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
              $this = $(arguments[0]);
              if (isNode($this[0])) {
                if (arguments.length > 1) {
                  options = arguments[1];
                }
              } else {
                options = arguments[0];
                $this = $("html");
              }
            } else {
              $this = $("html");
            }
          }
          // Default options
          var defaults = {globalStyles: true, mediaPrint: false, stylesheet: null, noPrintSelector: ".no-print", iframe: true, append: null, prepend: null, manuallyCopyFormValues: true, deferred: $.Deferred()};
          options = $.extend({}, defaults, (options || {}));
          var $styles = $("");
          if (options.globalStyles) {
            $styles = $("style, link, meta, title");
          } else if (options.mediaPrint) {
            $styles = $("link[media=print]");
          }
          if (options.stylesheet) {
            $styles = $.merge($styles, $('<link rel="stylesheet" href="' + options.stylesheet + '">'));
          }
          var copy = $this.clone();
          copy = $("<span/>")
            .append(copy);
          copy.find(options.noPrintSelector)
            .remove();
          copy.append($styles.clone());

          copy.append(getjQueryObject(options.append));
          copy.prepend(getjQueryObject(options.prepend));
          if (options.manuallyCopyFormValues) {
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
              var $field = $(this);
              $field.text($field.val());
            });
          }
          // Get the HTML markup string
          var content = copy.html();
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
                  setTimeout(function () {
                    if (iframeCount === 0) {
                      $iframe.remove();
                    }
                  }, 100);
                })
                .fail(function (err) {
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
        $.print(elem)
      },
      download(res,string){
        if (!res) {
          return
        }
        let blob = new Blob([res],{type:'application/octet-stream'});
        var time = new Date().getTime();
        var filename = string+time+'.xls';
        let url = window.URL.createObjectURL(blob);
        let link = document.createElement('a');
        link.style.display = 'none';
        link.href = url;
        link.setAttribute('download',filename);
        document.body.appendChild(link);
        link.click()
      },
      viewDetails(type,id){
        var _this = this;
        var data = config.getUrlTrans({type: type, id: id});
        this.$http.apiGet(HOST, data).then(function (res) {
          if (res.code == 200) {
            _this.detailsData = res.data;
            var newData = _this.detailsData.idcardnumber;
            for (var i = 0; i < newData.length; i++) {
              _this.idCardNumber.push(newData[i]);
            }
            console.log(_this.idCardNumber);
          }
        });
        var $width = $(window).width() - 190;
        var $height = $(window).height();
        $('.layui-tab').addClass('hide').animate({display: 'none', 'opacity': 0}, 500, function () {
          $('#details_popup').removeClass('hide').animate({
            height: 'auto',
            width: $width,
            display: 'block',
            'opacity': 1
          }, 500);
        });
      }
    },
    mounted () {
      var _this = this;
      layui.config({
        base:'./static/layui/extend/tableCheckBoxUtil/'
      }).use(['form', 'layer', 'laydate', 'table', 'element','tableCheckBoxUtil'], function () {
        var form = layui.form;
        var layer = layui.layer;
        var laydate = layui.laydate;
        var table = layui.table;
        var element = layui.element;
        var tableCheckBox = layui.tableCheckBoxUtil;
        form.render();
        element.on('tab(driver_tabs)', function (data) {
          $('.layui-table-body').mouseleave(function () {
            $('.personal-pic-msg').css({'opacity': '0', 'display': 'none'});
          });
          _this.tableIndex = data.index;
          if (_this.tableIndex == 0) {
            _this.tableOnF(table, 'driver_unchecked_table');
            _this.tableOnS(table, 'driver_unchecked_table');
          } else if (_this.tableIndex == 1) {
            _this.tableOnF(table, 'driver_checked_table');
            _this.tableOnS(table, 'driver_checked_table');
          } else if (_this.tableIndex == 2) {
            _this.tableOnF(table, 'driver_checked_unsuccess_table');
            _this.tableOnS(table, 'driver_checked_unsuccess_table');
          }
        });
        _this.tableRender(table, form, tableCheckBox);
        _this.checkedTableRender(table, form,tableCheckBox);
        _this.unsuccessTableRender(table, form,tableCheckBox);
        _this.tableOnF(table, 'driver_unchecked_table');
        _this.tableOnS(table, 'driver_unchecked_table');
        laydate.render({
          elem: '#driver_unchecked_start_date',
          value: _this.$store.state.dateSel('-')[2],
          theme: 'grid',
          calendar: true,
          mark: {
            '0-12-31': '跨年',
            '0-0-01': '月初'
          },
          max: 0,
          done: function (val) {
            _this.uncheckedSearchFormData.begintime = val;
          }
        });
        laydate.render({
          elem: '#driver_unchecked_end_date',
          value: _this.$store.state.dateSel('-')[0],
          theme: 'grid',
          calendar: true,
          mark: {
            '0-0-01': '月初',
            '0-12-31': '跨年'
          },
          max: 0,
          done: function (val) {
            _this.uncheckedSearchFormData.endtime = val;
          }
        });
        laydate.render({
          elem: '#driver_checked_start_date',
          value: _this.$store.state.dateSel('-')[0],
          theme: 'grid',
          calendar: true,
          mark: {
            '0-0-01': '月初',
            '0-12-31': '跨年'
          },
          max: 0,
          done: function (val) {
            _this.DcheckedSearchFormData.begintime = val;
          }
        });
        laydate.render({
          elem: '#driver_checked_end_date',
          value: _this.$store.state.dateSel('-')[0],
          theme: 'grid',
          calendar: true,
          mark: {
            '0-0-01': '月初',
            '0-12-31': '跨年'
          },
          max: 0,
          done: function (val) {
            _this.DcheckedSearchFormData.endtime = val;
          }
        });
      });
      $('.layui-icon-ok').click(function (e) {
        e.stopPropagation();
      })
    },
    updated () {
      layui.use('table', function () {
        var table = layui.table;
        table.init();
      });
    },
    created () {

    },
    watch: {
      $route () {

      }
    }
  };
</script>

