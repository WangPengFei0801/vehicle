<style scoped>
  #vehicle_details_popup {
    background-color: #f5f5f5;
    padding-top: 10px;
  }
  #vehicle_details_popup li {
    margin-top: 20px;
    margin-bottom: 20px;
    background-color: #fff;
  }
  .insurance {
    width: 1024px;
    overflow: hidden;
    margin: 0 auto;
  }
  .insurance > p {
    line-height: 36px;
    font-size: 14px;
    margin-left: 450px;
  }
  .apply-person-msg {
    background-color: #fff;
  }
  .apply-person-msg > h4 {
    font-size: 26px;
    padding-left: 30px;
    line-height: 50px;
    color: #666;
  }
  #vehicle_details_popup > h2 {
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
  #vehicle_details_popup > ul > li h3 {
    font-size: 16px;
    color: #111;
    line-height: 42px;
    margin-bottom: 4px;
    border-bottom: 1px solid #ccc;
    background: #fff;
    padding-left: 14px;
  }
  .MsoNormalTable * {
    -webkit-box-sizing: content-box;
    -moz-box-sizing: content-box;
    box-sizing: content-box;
  }
  .icon-gouxuan-weixuanzhong-xianxingfangkuang {
    font-size: 12px;
    color: #fff;
    border: 1px solid #000;
    margin-right: 4px;
  }
</style>
<template>
    <div>
      <div id="vehicle_details_popup" v-if="detailsDatas">
        <h2><span><i>{{detailsDatas.bustype}}</i></span><span><i>{{detailsDatas.ctime}}</i></span></h2>
        <ul>
          <li>
            <h3>申请人信息-1</h3>
            <table class="layui-table details-popup-table" lay-skin="line">
              <colgroup>
                <col width="150">
                <col width="150">
                <col width="150">
                <col width="150">
                <col width="150">
                <col width="150">
                <col width="150">
                <col>
              </colgroup>
              <thead>
              <tr class="details-popup-table-tr">
                <th>申请人</th>
                <th>身份证号</th>
                <th>手机号</th>
                <th>申请业务</th>
                <th>申请时间</th>
                <th>车辆类型</th>
                <th>车牌号</th>
                <th>地址</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>{{detailsDatas.name}}</td>
                <td>{{detailsDatas.idnumber}}</td>
                <td>{{detailsDatas.mobile}}</td>
                <td>{{detailsDatas.bustype}}</td>
                <td>{{detailsDatas.carownname}}</td>
                <td>{{detailsDatas.cartype}}</td>
                <td>{{detailsDatas.busid}}</td>
                <td>{{detailsDatas.address}}</td>
              </tr>
              </tbody>
            </table>
          <li>
            <h3>申请人信息-2</h3>
            <table class="layui-table details-popup-table" lay-skin="line">
              <colgroup>
                <col width="150">
                <col width="150">
                <col width="150">
                <col width="150">
                <col width="150">
                <col width="150">
                <col width="150">
                <col>
              </colgroup>
              <thead>
              <tr class="details-popup-table-tr">
                <th>车辆拥有者姓名</th>
                <th>车辆拥有者地址</th>
                <th>车架号</th>
                <th>发动机号</th>
                <th>档案编号</th>
                <th>是否邮寄</th>
                <th>手机号码</th>
                <th>邮寄地址</th>
                <th>保单号</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>{{detailsDatas.carownname}}</td>
                <td>{{detailsDatas.carownaddress}}</td>
                <td>{{detailsDatas.tradingno}}</td>
                <td>{{detailsDatas.outtradingno}}</td>
                <td>{{detailsDatas.outtradingno}}</td>
                <td>{{detailsDatas.isagent}}</td>
                <td>{{detailsDatas.carenginenumber}}</td>
                <td>{{detailsDatas.carownaddress}}</td>
                <td>{{detailsDatas.tradingno}}</td>
              </tr>
              </tbody>
            </table>

          </li>
          <li>
            <h3>收费信息</h3>
            <table class="layui-table details-popup-table" lay-skin="line">
              <colgroup>
                <col width="150">
                <col width="150">
                <col width="150">
                <col width="150">
                <col width="150">
                <col width="150">
                <col width="150">
                <col>
              </colgroup>
              <thead>
              <tr class="details-popup-table-tr">
                <th>支付方式</th>
                <th>支付时间</th>
                <th>邮寄费</th>
                <th>复印费</th>
                <th>工本费</th>
                <th>车牌费</th>
                <th>总额 </th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>{{detailsDatas.paymenttype}}</td>
                <td>{{detailsDatas.certificateoktime}}</td>
                <td>{{detailsDatas.mailfee}}</td>
                <td>{{detailsDatas.copyfee}}</td>
                <td>{{detailsDatas.certfee}}</td>
                <td>{{detailsDatas.platefee}}</td>
                <td>{{detailsDatas.totalfee}}</td>
                <td>{{detailsDatas.carownaddress}}</td>
              </tr>
              </tbody>
            </table>
          </li>
          <li>
            <h3>审核信息</h3>
            <table class="layui-table details-popup-table" lay-skin="line">
              <colgroup>
                <col width="150">
                <col width="150">
                <col width="150">
                <col>
              </colgroup>
              <thead>
              <tr class="details-popup-table-tr">
                <th>审核结果</th>
                <th>归档状态</th>
                <th>制证/牌状态</th>
                <th>业务受理流水号</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>{{detailsDatas.auditresult}}</td>
                <td>{{detailsDatas.cararchives}}</td>
                <td>{{detailsDatas.datastate}}</td>
                <td>{{detailsDatas.lsh}}</td>
              </tr>
              </tbody>
            </table>
          </li>
        </ul>
        <div class="apply-person-msg">
          <h4>申请人资料</h4>
          <div class="insurance">
            <p>保险凭证正面</p>
            <div class=WordSection1 style='layout-grid:15.6pt'>
              <table class=MsoNormalTable border=0 cellspacing=0 cellpadding=0 width=700
                     style='width:525.0pt;margin-left:.1pt;border-collapse:collapse'>
                <tr style='height:30.75pt'>
                  <td width=700 colspan=46 style='width:525.0pt;border:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:30.75pt'>
                    <p class=MsoNormal align=center style='text-align:center'><b><span
                      style='font-size:14.0pt;font-family:宋体'>申请人信息栏</span></b></p>
                  </td>
                </tr>
                <tr style='height:38.1pt'>
                  <td width=65 colspan=2 rowspan=3 style='width:48.7pt;border-left:solid windowtext 1pt;padding:0cm 5.4pt 0cm 5.4pt;layout-flow:vertical-ideographic;
  height:38.1pt'>
                    <p class=MsoNormal align=center style='text-align:center'><span
                      style='font-size:10.0pt;font-family:宋体'>机动车所有人</span></p>
                  </td>
                  <td width=81 colspan=2 style='width:60.55pt;border-top:none;border-left:solid windowtext 1.0pt;
  border-bottom:solid windowtext 1.0pt;border-right:solid black 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:38.1pt'>
                    <p class=MsoNormal align=center style='text-align:center'><span
                      style='font-size:10.0pt;font-family:宋体'>姓名<span lang=EN-US>/</span>名称</span></p>
                  </td>
                  <td width=235 colspan=20 style='width:176.05pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid black 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:38.1pt'>
                    <p class=MsoNormal align=center style='text-align:center'><span style='font-size:12.0pt;
  font-family:宋体'>{{detailsDatas.name}}</span></p>
                  </td>
                  <td width=115 colspan=11 style='width:86.6pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid black 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:38.1pt'>
                    <p class=MsoNormal align=center style='text-align:center'><span
                      style='font-size:10.0pt;font-family:宋体'>邮政编码</span></p>
                  </td>
                  <td width=204 colspan=11 style='width:153.1pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:38.1pt'>
                    <p class=MsoNormal align=center style='text-align:center'><span
                      style='font-size:12.0pt;font-family:宋体'>$邮政编码$</span></span></p>
                  </td>
                </tr>
                <tr style='height:38.1pt'>
                  <td width=81 colspan=2 style='width:60.55pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt;height:38.1pt'>
                    <p class=MsoNormal align=center style='text-align:center'><span
                      style='font-size:10.0pt;font-family:宋体'>邮寄地址</span></p>
                  </td>
                  <td width=554 colspan=42 style='width:415.75pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:38.1pt'>
                    <p class=MsoNormal align=center style='text-align:center'><span
                      style='font-size:12.0pt;font-family:宋体'>{{detailsDatas.address}}</span></p>
                  </td>
                </tr>
                <tr style='height:38.1pt'>
                  <td width=81 colspan=2 style='width:60.55pt;border-top:none;border-left:solid windowtext 1.0pt;
  border-bottom:none;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt;
  height:38.1pt'>
                    <p class=MsoNormal align=center style='text-align:center'><span
                      style='font-size:10.0pt;font-family:宋体'>手机号码</span></p>
                  </td>
                  <td width=235 colspan=20 style='width:176.05pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:38.1pt'>
                    <p class=MsoNormal align=center style='text-align:center'><span
                      style='font-size:10.0pt;font-family:宋体'>{{detailsDatas.mobile}}</span></p>
                  </td>
                  <td width=115 colspan=11 style='width:86.6pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:38.1pt'>
                    <p class=MsoNormal align=center style='text-align:center'><span
                      style='font-size:10.0pt;font-family:宋体'>固定电话</span></p>
                  </td>
                  <td width=204 colspan=11 style='width:153.1pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:38.1pt'>
                    <p class=MsoNormal align=center style='text-align:center'><span
                      style='font-size:10.0pt;font-family:宋体'>{{detailsDatas.mobile}}</span></p>
                  </td>
                </tr>
                <tr style='height:41.25pt'>
                  <td width=65 colspan=2 style='width:48.7pt;border:solid windowtext 1.0pt;
  border-right:none;padding:0cm 5.4pt 0cm 5.4pt;layout-flow:vertical-ideographic;
  height:41.25pt'>
                    <p class=MsoNormal align=center style='text-align:center'><span
                      style='font-size:10.0pt;font-family:宋体'>代理人</span></p>
                  </td>
                  <td width=81 colspan=2 style='width:60.55pt;border:solid windowtext 1.0pt;
  border-right:solid black 1.0pt;padding:0cm 5.4pt 0cm 5.4pt;height:41.25pt'>
                    <p class=MsoNormal align=center style='text-align:center'><span
                      style='font-size:10.0pt;font-family:宋体'>姓名<span lang=EN-US>/</span>名称</span></p>
                  </td>
                  <td width=143 colspan=9 style='width:106.95pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid black 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:41.25pt'>
                    <p class=MsoNormal align=center style='text-align:center'><span
                      style='font-size:10.0pt;font-family:宋体'>　</span></p>
                  </td>
                  <td width=92 colspan=11 style='width:69.1pt;border-top:solid windowtext 1.0pt;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid black 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:41.25pt'>
                    <p class=MsoNormal align=center style='text-align:center'><span
                      style='font-size:10.0pt;font-family:宋体'>手机号码</span></p>
                  </td>
                  <td width=320 colspan=22 style='width:239.7pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:41.25pt'>
                    <p class=MsoNormal align=center style='text-align:center'><span
                      style='font-size:10.0pt;font-family:宋体'>$联系电话$</span></p>
                  </td>
                </tr>
                <tr style='height:44.25pt'>
                  <td width=700 colspan=46 style='width:525.0pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt;height:44.25pt'>
                    <p class=MsoNormal align=center style='text-align:center'><b><span
                      style='font-size:14.0pt;font-family:宋体'>申请业务事项</span></b></p>
                  </td>
                </tr>
                <tr style='height:38.25pt'>
                  <td width=118 colspan=3 style='width:88.7pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt;height:38.25pt'>
                    <p class=MsoNormal align=center style='text-align:center'><span
                      style='font-size:10.0pt;font-family:宋体'>号牌种类</span></p>
                  </td>
                  <td width=213 colspan=14 style='width:159.4pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:38.25pt'>
                    <p class=MsoNormal align=center style='text-align:center'><span
                      style='font-size:12.0pt;font-family:宋体'>$号牌种类$</span></p>
                  </td>
                  <td width=149 colspan=16 style='width:112.1pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:38.25pt'>
                    <p class=MsoNormal align=center style='text-align:center'><span
                      style='font-size:10.0pt;font-family:宋体'>号牌号码</span></p>
                  </td>
                  <td width=220 colspan=13 style='width:164.8pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:38.25pt'>
                    <p class=MsoNormal align=center style='text-align:center'><span style='font-size:12.0pt;
  font-family:宋体'>$号牌号码$</span></p>
                  </td>
                </tr>
                <tr style='height:36.0pt'>
                  <td width=118 colspan=3 style='width:88.7pt;border-top:none;border-left:solid windowtext 1.0pt;
  border-bottom:none;border-right:solid black 1.0pt;padding:0cm 5.4pt 0cm 5.4pt;
  height:36.0pt'>
                    <p class=MsoNormal align=center style='text-align:center'><span
                      style='font-size:10.0pt;font-family:宋体'>申请事项</span></p>
                  </td>
                  <td width=582 colspan=43 style='width:436.3pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:36.0pt'>
                    <p class=MsoNormal align=center style='text-align:center'><span
                      style='font-size:12.0pt;font-family:宋体'>申请原因及明细</span></p>
                  </td>
                </tr>
                <tr style='height:30.0pt'>
                  <td width=36 rowspan=2 style='width:26.7pt;border:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;layout-flow:vertical-ideographic;height:30.0pt'>
                    <p class=MsoNormal align=center style='text-align:center'><span
                      style='font-size:10.0pt;font-family:宋体'>号牌</span></p>
                  </td>
                  <td width=83 colspan=2 style='width:62.0pt;border:solid windowtext 1.0pt;
  border-left:none;padding:0cm 5.4pt 0cm 5.4pt;height:30.0pt'>
                    <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US
                                                                                    style='font-size:10.0pt;font-family:宋体'><i class="iconfont icon-gouxuan-weixuanzhong-xianxingfangkuang"></i></span><span style='font-size:
  10.0pt;font-family:宋体'>补领</span></p>
                  </td>
                  <td width=27 style='width:20.55pt;border-top:solid windowtext 1.0pt;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:none;
  padding:0cm 5.4pt 0cm 5.4pt;height:30.0pt'>
                    <p class=MsoNormal align=left style='text-align:left'><span lang=EN-US
                                                                                style='font-size:10.0pt;font-family:宋体'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </span></p>
                  </td>
                  <td width=80 nowrap colspan=4 style='width:59.95pt;border-top:solid windowtext 1.0pt;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:none;
  padding:0cm 5.4pt 0cm 5.4pt;height:30.0pt'>
                    <p class=MsoNormal align=left style='text-align:left'><span lang=EN-US
                                                                                style='font-size:10.0pt;font-family:宋体'><i class="iconfont icon-gouxuan-weixuanzhong-xianxingfangkuang"></i></span><span style='font-size:
  10.0pt;font-family:宋体;color:black'>丢失</span></p>
                  </td>
                  <td width=46 nowrap colspan=3 style='width:34.5pt;border-top:solid windowtext 1.0pt;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:none;
  padding:0cm 5.4pt 0cm 5.4pt;height:30.0pt'>
                    <p class=MsoNormal align=center style='text-align:center'><span
                      style='font-size:10.0pt;font-family:宋体;color:black'>　</span></p>
                  </td>
                  <td width=94 nowrap colspan=10 style='width:70.5pt;border-top:solid windowtext 1.0pt;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:none;
  padding:0cm 5.4pt 0cm 5.4pt;height:30.0pt'>
                    <p class=MsoNormal align=left style='text-align:left'><span lang=EN-US
                                                                                style='font-size:10.0pt;font-family:宋体'><i class="iconfont icon-gouxuan-weixuanzhong-xianxingfangkuang"></i></span><span style='font-size:
  10.0pt;font-family:宋体;color:black'>灭失</span></p>
                  </td>
                  <td width=30 colspan=6 style='width:22.2pt;border-top:solid windowtext 1.0pt;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:none;
  padding:0cm 5.4pt 0cm 5.4pt;height:30.0pt'>
                    <p class=MsoNormal align=center style='text-align:center'><span
                      style='font-size:10.0pt;font-family:宋体;color:black'>　</span></p>
                  </td>
                  <td width=85 nowrap colspan=6 style='width:63.8pt;border-top:solid windowtext 1.0pt;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:none;
  padding:0cm 5.4pt 0cm 5.4pt;height:30.0pt'>
                    <p class=MsoNormal align=left style='text-align:left'><span lang=EN-US
                                                                                style='font-size:10.0pt;font-family:宋体'><i class="iconfont icon-gouxuan-weixuanzhong-xianxingfangkuang"></i></span><span style='font-size:
  10.0pt;font-family:宋体;color:black;border: 1px solid;'>前号牌</span></p>
                  </td>
                  <td width=62 colspan=5 style='width:46.7pt;border-top:solid windowtext 1.0pt;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:none;
  padding:0cm 5.4pt 0cm 5.4pt;height:30.0pt'>
                    <p class=MsoNormal align=center style='text-align:center'><span
                      style='font-size:10.0pt;font-family:宋体;color:black'>　</span></p>
                  </td>
                  <td width=75 nowrap colspan=3 style='width:56.0pt;border-top:solid windowtext 1.0pt;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:none;
  padding:0cm 5.4pt 0cm 5.4pt;height:30.0pt'>
                    <p class=MsoNormal align=left style='text-align:left'><span lang=EN-US style='font-size:10.0pt;font-family:宋体'><i class="iconfont icon-gouxuan-weixuanzhong-xianxingfangkuang"></i></span><span style='font-size:
  10.0pt;font-family:宋体;color:black'>后号牌</span></p>
                  </td>
                  <td width=68 nowrap colspan=4 style='width:51.0pt;border-top:solid windowtext 1.0pt;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:none;
  padding:0cm 5.4pt 0cm 5.4pt;height:30.0pt'>
                    <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  10.0pt;font-family:宋体'>　</span></p>
                  </td>
                  <td width=15 nowrap style='width:11.1pt;border:solid windowtext 1.0pt;
  border-left:none;padding:0cm 5.4pt 0cm 5.4pt;height:30.0pt'>
                    <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  10.0pt;font-family:宋体'>　</span></p>
                  </td>
                </tr>
                <tr style='height:30.0pt'>
                  <td width=83 colspan=2 style='width:62.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:30.0pt'>
                    <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US
                                                                                    style='font-size:10.0pt;font-family:宋体'><i class="iconfont icon-gouxuan-weixuanzhong-xianxingfangkuang"></i></span><span style='font-size:
  10.0pt;font-family:宋体'>换领</span></p>
                  </td>
                  <td width=27 style='width:20.55pt;padding:0cm 5.4pt 0cm 5.4pt;height:30.0pt'>
                    <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  10.0pt;font-family:宋体'>　</span></p>
                  </td>
                  <td width=80 nowrap colspan=4 style='width:59.95pt;border-bottom:1px solid #000;padding:0cm 5.4pt 0cm 5.4pt;height:30.0pt'>
                    <p class=MsoNormal align=left style='text-align:left'><span lang=EN-US style='font-size:10.0pt;font-family:宋体'><i class="iconfont icon-gouxuan-weixuanzhong-xianxingfangkuang"></i></span><span style='font-size:
  10.0pt;font-family:宋体;color:black'>前号牌</span></p>
                  </td>
                  <td width=16 nowrap style='width:12.0pt;border:none;border-bottom:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:30.0pt'>
                    <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  10.0pt;font-family:宋体;color:black'>　</span></p>
                  </td>
                  <td width=16 nowrap style='width:12.1pt;border:none;border-bottom:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:30.0pt'>
                    <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  10.0pt;font-family:宋体;color:black'>　</span></p>
                  </td>
                  <td width=16 nowrap colspan=2 style='width:11.8pt;padding:0cm 5.4pt 0cm 5.4pt;
  height:30.0pt'>
                    <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  10.0pt;font-family:宋体;color:black'>　</span></p>
                  </td>
                  <td width=16 nowrap colspan=2 style='width:11.8pt;padding:0cm 5.4pt 0cm 5.4pt;
  height:30.0pt'>
                    <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  10.0pt;font-family:宋体;color:black'>　</span></p>
                  </td>
                  <td width=16 nowrap style='width:11.8pt;padding:0cm 5.4pt 0cm 5.4pt;
  height:30.0pt'>
                    <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  10.0pt;font-family:宋体;color:black'>　</span></p>
                  </td>
                  <td width=15 nowrap style='width:11.1pt;padding:0cm 5.4pt 0cm 5.4pt;
  height:30.0pt'>
                    <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  10.0pt;font-family:宋体;color:black'>　</span></p>
                  </td>
                  <td width=15 nowrap colspan=2 style='width:11.1pt;border:none;border-bottom:
  solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt;height:30.0pt'>
                    <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  10.0pt;font-family:宋体;color:black'>　</span></p>
                  </td>
                  <td width=15 nowrap colspan=2 style='width:11.1pt;border:none;border-bottom:
  solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt;height:30.0pt'>
                    <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  10.0pt;font-family:宋体;color:black'>　</span></p>
                  </td>
                  <td width=20 nowrap colspan=3 style='width:15.0pt;border:none;border-bottom:
  solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt;height:30.0pt'>
                    <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  10.0pt;font-family:宋体;color:black'>　</span></p>
                  </td>
                  <td width=15 nowrap colspan=3 style='width:11.1pt;border:none;border-bottom:
  solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt;height:30.0pt'>
                    <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  10.0pt;font-family:宋体;color:black'>　</span></p>
                  </td>
                  <td width=15 nowrap colspan=3 style='width:11.1pt;padding:0cm 5.4pt 0cm 5.4pt;
  height:30.0pt'>
                    <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  10.0pt;font-family:宋体;color:black'>　</span></p>
                  </td>
                  <td width=101 nowrap colspan=8 style='width:75.5pt;border:none;padding:0cm 5.4pt 0cm 5.4pt;
  height:30.0pt'>
                    <p class=MsoNormal align=left style='text-align:left'><span lang=EN-US
                                                                                style='font-size:10.0pt;font-family:宋体'><i class="iconfont icon-gouxuan-weixuanzhong-xianxingfangkuang"></i></span><span style='font-size:
  10.0pt;font-family:宋体;color:black'>后号牌</span></p>
                  </td>
                  <td width=47 nowrap colspan=3 valign=bottom style='width:35.0pt;padding:0cm 5.4pt 0cm 5.4pt;
  height:30.0pt'>
                    <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  10.0pt;font-family:宋体;color:black'>　</span></p>
                  </td>
                  <td width=75 nowrap colspan=3 valign=bottom style='width:56.0pt;padding:0cm 5.4pt 0cm 5.4pt;
  height:30.0pt'>
                    <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  12.0pt;font-family:宋体;color:black'>　</span></p>
                  </td>
                  <td width=49 nowrap valign=bottom style='width:37.05pt;padding:0cm 5.4pt 0cm 5.4pt;
  height:30.0pt'>
                    <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  12.0pt;font-family:宋体'>　</span></p>
                  </td>
                  <td width=30 nowrap colspan=2 valign=bottom style='width:22.25pt;border:none;
  border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt;height:30.0pt'>
                    <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  12.0pt;font-family:宋体'>　</span></p>
                  </td>
                </tr>
                <tr style='height:30.0pt'>
                  <td width=36 rowspan=2 style='width:26.7pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt;layout-flow:vertical-ideographic;
  height:30.0pt'>
                    <p class=MsoNormal align=center style='text-align:center'><span
                      style='font-size:10.0pt;font-family:宋体'>行驶证</span></p>
                  </td>
                  <td width=83 colspan=2 style='width:62.0pt;border-top:solid windowtext 1.0pt;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid black 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:30.0pt'>
                    <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US
                                                                                    style='font-size:10.0pt;font-family:宋体'><i class="iconfont icon-gouxuan-weixuanzhong-xianxingfangkuang"></i></span><span style='font-size:
  10.0pt;font-family:宋体'>补领</span></p>
                  </td>
                  <td width=27 style='width:20.55pt;border-top:solid windowtext 1.0pt;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:none;
  padding:0cm 5.4pt 0cm 5.4pt;height:30.0pt'>
                    <p class=MsoNormal align=left style='text-align:left'><span lang=EN-US
                                                                                style='font-size:10.0pt;font-family:宋体'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </span></p>
                  </td>
                  <td width=80 colspan=4 style='width:59.95pt;border:none;border-bottom:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:30.0pt'>
                    <p class=MsoNormal align=left style='text-align:left'><span lang=EN-US
                                                                                style='font-size:10.0pt;font-family:宋体'><i class="iconfont icon-gouxuan-weixuanzhong-xianxingfangkuang"></i></span><span style='font-size:
  10.0pt;font-family:宋体'>丢失</span></p>
                  </td>
                  <td width=16 style='width:12.0pt;border:none;border-bottom:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:30.0pt'>
                    <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  10.0pt;font-family:宋体'>　</span></p>
                    <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  10.0pt;font-family:宋体'>　</span></p>
                  </td>
                  <td width=16 style='width:12.1pt;border:none;border-bottom:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:30.0pt'>
                    <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  10.0pt;font-family:宋体'>　</span></p>
                  </td>
                  <td width=16 colspan=2 style='width:11.8pt;border-top:solid windowtext 1.0pt;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:none;
  padding:0cm 5.4pt 0cm 5.4pt;height:30.0pt'>
                    <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  10.0pt;font-family:宋体'>　</span></p>
                  </td>
                  <td width=16 colspan=2 style='width:11.8pt;border-top:solid windowtext 1.0pt;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:none;
  padding:0cm 5.4pt 0cm 5.4pt;height:30.0pt'>
                    <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  10.0pt;font-family:宋体'>　</span></p>
                  </td>
                  <td width=16 style='width:11.8pt;border-top:solid windowtext 1.0pt;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:none;
  padding:0cm 5.4pt 0cm 5.4pt;height:30.0pt'>
                    <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  10.0pt;font-family:宋体'>　</span></p>
                  </td>
                  <td width=15 style='width:11.1pt;border-top:solid windowtext 1.0pt;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:none;
  padding:0cm 5.4pt 0cm 5.4pt;height:30.0pt'>
                    <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  10.0pt;font-family:宋体'>　</span></p>
                  </td>
                  <td width=15 colspan=2 style='width:11.1pt;border:none;border-bottom:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:30.0pt'>
                    <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  10.0pt;font-family:宋体'>　</span></p>
                  </td>
                  <td width=15 colspan=2 style='width:11.1pt;border:none;border-bottom:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:30.0pt'>
                    <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  10.0pt;font-family:宋体'>　</span></p>
                  </td>
                  <td width=20 colspan=3 style='width:15.0pt;border:none;border-bottom:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:30.0pt'>
                    <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  10.0pt;font-family:宋体'>　</span></p>
                  </td>
                  <td width=15 colspan=3 style='width:11.1pt;border:none;border-bottom:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:30.0pt'>
                    <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  10.0pt;font-family:宋体'>　</span></p>
                  </td>
                  <td width=15 colspan=3 style='width:11.1pt;border-top:solid windowtext 1.0pt;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:none;
  padding:0cm 5.4pt 0cm 5.4pt;height:30.0pt'>
                    <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  10.0pt;font-family:宋体'>　</span></p>
                  </td>
                  <td width=101 colspan=8 style='width:75.5pt;border-top:solid windowtext 1.0pt;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:none;
  padding:0cm 5.4pt 0cm 5.4pt;height:30.0pt'>
                    <p class=MsoNormal align=left style='text-align:left'><span lang=EN-US
                                                                                style='font-size:10.0pt;font-family:宋体'><i class="iconfont icon-gouxuan-weixuanzhong-xianxingfangkuang"></i></span><span style='font-size:
  10.0pt;font-family:宋体'>灭失</span></p>
                  </td>
                  <td width=47 colspan=3 style='width:35.0pt;border-top:solid windowtext 1.0pt;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:none;
  padding:0cm 5.4pt 0cm 5.4pt;height:30.0pt'>
                    <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  10.0pt;font-family:宋体'>　</span></p>
                  </td>
                  <td width=75 colspan=3 style='width:56.0pt;border-top:solid windowtext 1.0pt;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:none;
  padding:0cm 5.4pt 0cm 5.4pt;height:30.0pt'>
                    <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  10.0pt;font-family:宋体'>　</span></p>
                  </td>
                  <td width=49 style='width:37.05pt;border-top:solid windowtext 1.0pt;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:none;
  padding:0cm 5.4pt 0cm 5.4pt;height:30.0pt'>
                    <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  10.0pt;font-family:宋体'>　</span></p>
                  </td>
                  <td width=30 colspan=2 style='width:22.25pt;border:solid windowtext 1.0pt;
  border-left:none;padding:0cm 5.4pt 0cm 5.4pt;height:30.0pt'>
                    <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  10.0pt;font-family:宋体'>　</span></p>
                  </td>
                </tr>
                <tr style='height:30.0pt'>
                  <td width=83 colspan=2 style='width:62.0pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid black 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:30.0pt'>
                    <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US
                                                                                    style='font-size:10.0pt;font-family:宋体'><i class="iconfont icon-gouxuan-weixuanzhong-xianxingfangkuang"></i></span><span style='font-size:
  10.0pt;font-family:宋体'>换领</span></p>
                  </td>
                  <td width=27 style='width:20.55pt;border:none;border-bottom:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:30.0pt'>
                    <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  10.0pt;font-family:宋体'>　</span></p>
                  </td>
                  <td width=44 style='width:33.05pt;border:none;border-bottom:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:30.0pt'>
                    <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  10.0pt;font-family:宋体'>　</span></p>
                  </td>
                  <td width=16 style='width:11.8pt;border:none;border-bottom:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:30.0pt'>
                    <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  10.0pt;font-family:宋体'>　</span></p>
                  </td>
                  <td width=20 colspan=2 style='width:15.1pt;border:none;border-bottom:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:30.0pt'>
                    <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  10.0pt;font-family:宋体'>　</span></p>
                  </td>
                  <td width=16 style='width:12.0pt;border:none;border-bottom:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:30.0pt'>
                    <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  10.0pt;font-family:宋体'>　</span></p>
                  </td>
                  <td width=16 style='width:12.1pt;border:none;border-bottom:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:30.0pt'>
                    <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  10.0pt;font-family:宋体'>　</span></p>
                  </td>
                  <td width=16 colspan=2 style='width:11.8pt;border:none;border-bottom:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:30.0pt'>
                    <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  10.0pt;font-family:宋体'>　</span></p>
                  </td>
                  <td width=74 colspan=7 style='width:55.5pt;border:none;border-bottom:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:30.0pt'>
                    <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  10.0pt;font-family:宋体'>　</span></p>
                  </td>
                  <td width=20 colspan=3 style='width:15.0pt;border:none;border-bottom:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:30.0pt'>
                    <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  10.0pt;font-family:宋体'>　</span></p>
                  </td>
                  <td width=15 colspan=3 style='width:11.1pt;border:none;border-bottom:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:30.0pt'>
                    <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  10.0pt;font-family:宋体'>　</span></p>
                  </td>
                  <td width=15 colspan=3 style='width:11.1pt;border:none;border-bottom:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:30.0pt'>
                    <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  10.0pt;font-family:宋体'>　</span></p>
                  </td>
                  <td width=15 colspan=2 style='width:11.1pt;border:none;border-bottom:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:30.0pt'>
                    <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  10.0pt;font-family:宋体'>　</span></p>
                  </td>
                  <td width=15 style='width:11.1pt;border:none;border-bottom:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:30.0pt'>
                    <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  10.0pt;font-family:宋体'>　</span></p>
                  </td>
                  <td width=15 style='width:11.1pt;border:none;border-bottom:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:30.0pt'>
                    <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  10.0pt;font-family:宋体'>　</span></p>
                  </td>
                  <td width=41 colspan=2 style='width:30.5pt;border:none;border-bottom:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:30.0pt'>
                    <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  10.0pt;font-family:宋体'>　</span></p>
                  </td>
                  <td width=16 colspan=2 style='width:11.7pt;border:none;border-bottom:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:30.0pt'>
                    <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  10.0pt;font-family:宋体'>　</span></p>
                  </td>
                  <td width=47 colspan=3 style='width:35.0pt;border:none;border-bottom:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:30.0pt'>
                    <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  10.0pt;font-family:宋体'>　</span></p>
                  </td>
                  <td width=75 colspan=3 style='width:56.0pt;border:none;border-bottom:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:30.0pt'>
                    <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  10.0pt;font-family:宋体'>　</span></p>
                  </td>
                  <td width=51 colspan=2 style='width:38.45pt;border:none;border-bottom:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:30.0pt'>
                    <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  10.0pt;font-family:宋体'>　</span></p>
                  </td>
                  <td width=30 colspan=2 style='width:22.25pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:30.0pt'>
                    <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  10.0pt;font-family:宋体'>　</span></p>
                  </td>
                </tr>
                <tr style='height:30.0pt'>
                  <td width=36 rowspan=3 style='width:26.7pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt;layout-flow:vertical-ideographic;
  height:30.0pt'>
                    <p class=MsoNormal align=center style='text-align:center'><span
                      style='font-size:10.0pt;font-family:宋体'>登记证书</span></p>
                  </td>
                  <td width=83 colspan=2 style='width:62.0pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:30.0pt'>
                    <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US
                                                                                    style='font-size:10.0pt;font-family:宋体'><i class="iconfont icon-gouxuan-weixuanzhong-xianxingfangkuang"></i></span><span style='font-size:
  10.0pt;font-family:宋体'>申领</span></p>
                  </td>
                  <td width=582 colspan=43 style='width:436.3pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:30.0pt'>
                    <p class=MsoNormal align=center style='text-align:center'><span
                      style='font-size:10.0pt;font-family:宋体'>　</span></p>
                  </td>
                </tr>
                <tr style='height:30.0pt'>
                  <td width=83 colspan=2 style='width:62.0pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:30.0pt'>
                    <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US
                                                                                    style='font-size:10.0pt;font-family:宋体'><i class="iconfont icon-gouxuan-weixuanzhong-xianxingfangkuang"></i></span><span style='font-size:
  10.0pt;font-family:宋体'>补领</span></p>
                  </td>
                  <td width=27 style='width:20.55pt;border:none;border-bottom:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:30.0pt'>
                    <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  10.0pt;font-family:宋体'>　</span></p>
                  </td>
                  <td width=71 colspan=3 style='width:53.3pt;border:none;border-bottom:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:30.0pt'>
                    <p class=MsoNormal align=left style='text-align:left'><span lang=EN-US
                                                                                style='font-size:10.0pt;font-family:宋体'><i class="iconfont icon-gouxuan-weixuanzhong-xianxingfangkuang"></i></span><span style='font-size:
  10.0pt;font-family:宋体'>丢失</span></p>
                  </td>
                  <td width=25 colspan=2 style='width:18.65pt;border:none;border-bottom:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:30.0pt'>
                    <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  10.0pt;font-family:宋体'>　</span></p>
                    <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  10.0pt;font-family:宋体'>　</span></p>
                  </td>
                  <td width=16 style='width:12.1pt;border:none;border-bottom:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:30.0pt'>
                    <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  10.0pt;font-family:宋体'>　</span></p>
                  </td>
                  <td width=16 colspan=2 style='width:11.8pt;border:none;border-bottom:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:30.0pt'>
                    <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  10.0pt;font-family:宋体'>　</span></p>
                  </td>
                  <td width=74 colspan=7 style='width:55.5pt;border:none;border-bottom:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:30.0pt'>
                    <p class=MsoNormal align=left style='text-align:left'><span lang=EN-US
                                                                                style='font-size:10.0pt;font-family:宋体'><i class="iconfont icon-gouxuan-weixuanzhong-xianxingfangkuang"></i></span><span style='font-size:
  10.0pt;font-family:宋体'>灭失</span></p>
                  </td>
                  <td width=20 colspan=3 style='width:15.0pt;border:none;border-bottom:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:30.0pt'>
                    <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  10.0pt;font-family:宋体'>　</span></p>
                  </td>
                  <td width=15 colspan=3 style='width:11.1pt;border:none;border-bottom:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:30.0pt'>
                    <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  10.0pt;font-family:宋体'>　</span></p>
                  </td>
                  <td width=15 colspan=3 style='width:11.1pt;border:none;border-bottom:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:30.0pt'>
                    <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  10.0pt;font-family:宋体'>　</span></p>
                  </td>
                  <td width=101 colspan=8 style='width:75.5pt;border:none;border-bottom:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:30.0pt'>
                    <p class=MsoNormal align=left style='text-align:left'><span lang=EN-US
                                                                                style='font-size:10.0pt;font-family:宋体'><i class="iconfont icon-gouxuan-weixuanzhong-xianxingfangkuang"></i></span><span style='font-size:
  10.0pt;font-family:宋体'>未获得</span></p>
                  </td>
                  <td width=47 colspan=3 style='width:35.0pt;border:none;border-bottom:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:30.0pt'>
                    <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  10.0pt;font-family:宋体'>　</span></p>
                  </td>
                  <td width=75 colspan=3 style='width:56.0pt;border:none;border-bottom:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:30.0pt'>
                    <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  10.0pt;font-family:宋体'>　</span></p>
                  </td>
                  <td width=51 colspan=2 style='width:38.45pt;border:none;border-bottom:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:30.0pt'>
                    <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  10.0pt;font-family:宋体'>　</span></p>
                  </td>
                  <td width=30 colspan=2 style='width:22.25pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:30.0pt'>
                    <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  10.0pt;font-family:宋体'>　</span></p>
                  </td>
                </tr>
                <tr style='height:30.0pt'>
                  <td width=83 nowrap colspan=2 style='width:62.0pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:30.0pt'>
                    <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US
                                                                                    style='font-size:10.0pt;font-family:宋体'><i class="iconfont icon-gouxuan-weixuanzhong-xianxingfangkuang"></i></span><span style='font-size:
  10.0pt;font-family:宋体'>换领</span></p>
                  </td>
                  <td width=27 style='width:20.55pt;border:none;border-bottom:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:30.0pt'>
                    <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  10.0pt;font-family:宋体'>　</span></p>
                  </td>
                  <td width=44 style='width:33.05pt;border:none;border-bottom:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:30.0pt'>
                    <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  10.0pt;font-family:宋体'>　</span></p>
                  </td>
                  <td width=16 style='width:11.8pt;border:none;border-bottom:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:30.0pt'>
                    <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  10.0pt;font-family:宋体'>　</span></p>
                  </td>
                  <td width=20 colspan=2 style='width:15.1pt;border:none;border-bottom:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:30.0pt'>
                    <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  10.0pt;font-family:宋体'>　</span></p>
                  </td>
                  <td width=16 style='width:12.0pt;border:none;border-bottom:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:30.0pt'>
                    <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  10.0pt;font-family:宋体'>　</span></p>
                  </td>
                  <td width=16 style='width:12.1pt;border:none;border-bottom:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:30.0pt'>
                    <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  10.0pt;font-family:宋体'>　</span></p>
                  </td>
                  <td width=16 colspan=2 style='width:11.8pt;border:none;border-bottom:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:30.0pt'>
                    <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  10.0pt;font-family:宋体'>　</span></p>
                  </td>
                  <td width=74 colspan=7 style='width:55.5pt;border:none;border-bottom:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:30.0pt'>
                    <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  10.0pt;font-family:宋体'>　</span></p>
                  </td>
                  <td width=20 colspan=3 style='width:15.0pt;border:none;border-bottom:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:30.0pt'>
                    <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  10.0pt;font-family:宋体'>　</span></p>
                  </td>
                  <td width=15 colspan=3 style='width:11.1pt;border:none;border-bottom:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:30.0pt'>
                    <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  10.0pt;font-family:宋体'>　</span></p>
                  </td>
                  <td width=15 colspan=3 style='width:11.1pt;border:none;border-bottom:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:30.0pt'>
                    <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  10.0pt;font-family:宋体'>　</span></p>
                  </td>
                  <td width=15 colspan=2 style='width:11.1pt;border:none;border-bottom:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:30.0pt'>
                    <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  10.0pt;font-family:宋体'>　</span></p>
                  </td>
                  <td width=15 style='width:11.1pt;border:none;border-bottom:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:30.0pt'>
                    <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  10.0pt;font-family:宋体'>　</span></p>
                  </td>
                  <td width=15 style='width:11.1pt;border:none;border-bottom:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:30.0pt'>
                    <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  10.0pt;font-family:宋体'>　</span></p>
                  </td>
                  <td width=41 colspan=2 style='width:30.5pt;border:none;border-bottom:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:30.0pt'>
                    <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  10.0pt;font-family:宋体'>　</span></p>
                  </td>
                  <td width=16 colspan=2 style='width:11.7pt;border:none;border-bottom:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:30.0pt'>
                    <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  10.0pt;font-family:宋体'>　</span></p>
                  </td>
                  <td width=47 colspan=3 style='width:35.0pt;border:none;border-bottom:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:30.0pt'>
                    <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  10.0pt;font-family:宋体'>　</span></p>
                  </td>
                  <td width=75 colspan=3 style='width:56.0pt;border:none;border-bottom:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:30.0pt'>
                    <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  10.0pt;font-family:宋体'>　</span></p>
                  </td>
                  <td width=51 colspan=2 style='width:38.45pt;border:none;border-bottom:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:30.0pt'>
                    <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  10.0pt;font-family:宋体'>　</span></p>
                  </td>
                  <td width=30 colspan=2 style='width:22.25pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:30.0pt'>
                    <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  10.0pt;font-family:宋体'>　</span></p>
                  </td>
                </tr>
                <tr style='height:30.0pt'>
                  <td width=36 rowspan=3 style='width:26.7pt;border-top:none;border-left:solid windowtext 1.0pt;
  border-bottom:solid black 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;layout-flow:vertical-ideographic;height:30.0pt'>
                    <p class=MsoNormal align=center style='text-align:center'><span
                      style='font-size:10.0pt;font-family:宋体'>检验合格标志</span></p>
                  </td>
                  <td width=83 colspan=2 style='width:62.0pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:30.0pt'>
                    <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US
                                                                                    style='font-size:10.0pt;font-family:宋体'><i class="iconfont icon-gouxuan-weixuanzhong-xianxingfangkuang"></i></span><span style='font-size:
  10.0pt;font-family:宋体'>申请</span></p>
                  </td>
                  <td width=27 style='width:20.55pt;border:none;border-bottom:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:30.0pt'>
                    <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  10.0pt;font-family:宋体'>　</span></p>
                  </td>
                  <td width=235 colspan=20 style='width:176.05pt;border:none;border-bottom:1px solid #000;padding:0cm 5.4pt 0cm 5.4pt;height:30.0pt'>
                    <p class=MsoNormal align=left style='text-align:left'><span lang=EN-US
                                                                                style='font-size:10.0pt;font-family:宋体'><i class="iconfont icon-gouxuan-weixuanzhong-xianxingfangkuang"></i></span><span style='font-size:
  10.0pt;font-family:宋体'>在登记地车辆管理所申请</span></p>
                  </td>
                  <td width=15 colspan=3 style='width:11.1pt;border:none;border-bottom:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:30.0pt'>
                    <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  10.0pt;font-family:宋体'>　</span></p>
                  </td>
                  <td width=290 colspan=18 style='width:217.5pt;border:none;border-bottom:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:30.0pt'>
                    <p class=MsoNormal align=left style='text-align:left'><span lang=EN-US
                                                                                style='font-size:10.0pt;font-family:宋体'><i class="iconfont icon-gouxuan-weixuanzhong-xianxingfangkuang"></i></span><span style='font-size:
  10.0pt;font-family:宋体'>在登记地以外车辆管理所申请</span></p>
                  </td>
                  <td width=15 style='width:11.1pt;border-top:none;border-left:none;border-bottom:
  solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt;
  height:30.0pt'>
                    <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  10.0pt;font-family:宋体'>　</span></p>
                  </td>
                </tr>
                <tr style='height:30.0pt'>
                  <td width=83 colspan=2 style='width:62.0pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:30.0pt'>
                    <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US
                                                                                    style='font-size:10.0pt;font-family:宋体'><i class="iconfont icon-gouxuan-weixuanzhong-xianxingfangkuang"></i></span><span style='font-size:
  10.0pt;font-family:宋体'>补领</span></p>
                  </td>
                  <td width=27 style='width:20.55pt;border:none;border-bottom:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:30.0pt'>
                    <p class=MsoNormal align=left style='text-align:left'><span lang=EN-US
                                                                                style='font-size:10.0pt;font-family:宋体'>&nbsp; </span></p>
                  </td>
                  <td width=80 colspan=4 style='width:59.95pt;border:none;border-bottom:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:30.0pt'>
                    <p class=MsoNormal align=left style='text-align:left'><span lang=EN-US
                                                                                style='font-size:10.0pt;font-family:宋体'><i class="iconfont icon-gouxuan-weixuanzhong-xianxingfangkuang"></i></span><span style='font-size:
  10.0pt;font-family:宋体'>丢失</span></p>
                  </td>
                  <td width=16 style='width:12.0pt;border:none;border-bottom:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:30.0pt'>
                    <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  10.0pt;font-family:宋体'>　</span></p>
                    <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  10.0pt;font-family:宋体'>　</span></p>
                  </td>
                  <td width=16 style='width:12.1pt;border:none;border-bottom:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:30.0pt'>
                    <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  10.0pt;font-family:宋体'>　</span></p>
                  </td>
                  <td width=16 colspan=2 style='width:11.8pt;border:none;border-bottom:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:30.0pt'>
                    <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  10.0pt;font-family:宋体'>　</span></p>
                  </td>
                  <td width=16 colspan=2 style='width:11.8pt;border:none;border-bottom:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:30.0pt'>
                    <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  10.0pt;font-family:宋体'>　</span></p>
                  </td>
                  <td width=16 style='width:11.8pt;border:none;border-bottom:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:30.0pt'>
                    <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  10.0pt;font-family:宋体'>　</span></p>
                  </td>
                  <td width=15 style='width:11.1pt;border:none;border-bottom:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:30.0pt'>
                    <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  10.0pt;font-family:宋体'>　</span></p>
                  </td>
                  <td width=15 colspan=2 style='width:11.1pt;border:none;border-bottom:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:30.0pt'>
                    <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  10.0pt;font-family:宋体'>　</span></p>
                  </td>
                  <td width=15 colspan=2 style='width:11.1pt;border:none;border-bottom:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:30.0pt'>
                    <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  10.0pt;font-family:宋体'>　</span></p>
                  </td>
                  <td width=20 colspan=3 style='width:15.0pt;border:none;border-bottom:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:30.0pt'>
                    <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  10.0pt;font-family:宋体'>　</span></p>
                  </td>
                  <td width=15 colspan=3 style='width:11.1pt;border:none;border-bottom:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:30.0pt'>
                    <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  10.0pt;font-family:宋体'>　</span></p>
                  </td>
                  <td width=15 colspan=3 style='width:11.1pt;border:none;border-bottom:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:30.0pt'>
                    <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  10.0pt;font-family:宋体'>　</span></p>
                  </td>
                  <td width=101 colspan=8 style='width:75.5pt;border:none;border-bottom:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:30.0pt'>
                    <p class=MsoNormal align=left style='text-align:left'><span lang=EN-US
                                                                                style='font-size:10.0pt;font-family:宋体'><i class="iconfont icon-gouxuan-weixuanzhong-xianxingfangkuang"></i></span><span style='font-size:
  10.0pt;font-family:宋体'>灭失</span></p>
                  </td>
                  <td width=47 colspan=3 style='width:35.0pt;border:none;border-bottom:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:30.0pt'>
                    <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  10.0pt;font-family:宋体'>　</span></p>
                  </td>
                  <td width=75 colspan=3 style='width:56.0pt;border:none;border-bottom:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:30.0pt'>
                    <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  10.0pt;font-family:宋体'>　</span></p>
                  </td>
                  <td width=49 style='width:37.05pt;border:none;border-bottom:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:30.0pt'>
                    <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  10.0pt;font-family:宋体'>　</span></p>
                  </td>
                  <td width=30 colspan=2 style='width:22.25pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:30.0pt'>
                    <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  10.0pt;font-family:宋体'>　</span></p>
                  </td>
                </tr>
                <tr style='height:30.0pt'>
                  <td width=83 nowrap colspan=2 style='width:62.0pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:30.0pt'>
                    <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US
                                                                                    style='font-size:10.0pt;font-family:宋体'><i class="iconfont icon-gouxuan-weixuanzhong-xianxingfangkuang"></i></span><span style='font-size:
  10.0pt;font-family:宋体'>换领</span></p>
                  </td>
                  <td width=27 style='width:20.55pt;border:none;border-bottom:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:30.0pt'>
                    <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  10.0pt;font-family:宋体'>　</span></p>
                  </td>
                  <td width=44 style='width:33.05pt;border:none;border-bottom:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:30.0pt'>
                    <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  10.0pt;font-family:宋体'>　</span></p>
                  </td>
                  <td width=16 style='width:11.8pt;border:none;border-bottom:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:30.0pt'>
                    <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  10.0pt;font-family:宋体'>　</span></p>
                  </td>
                  <td width=20 colspan=2 style='width:15.1pt;border:none;border-bottom:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:30.0pt'>
                    <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  10.0pt;font-family:宋体'>　</span></p>
                  </td>
                  <td width=16 style='width:12.0pt;border:none;border-bottom:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:30.0pt'>
                    <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  10.0pt;font-family:宋体'>　</span></p>
                  </td>
                  <td width=16 style='width:12.1pt;border:none;border-bottom:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:30.0pt'>
                    <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  10.0pt;font-family:宋体'>　</span></p>
                  </td>
                  <td width=16 colspan=2 style='width:11.8pt;border:none;border-bottom:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:30.0pt'>
                    <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  10.0pt;font-family:宋体'>　</span></p>
                  </td>
                  <td width=74 colspan=7 style='width:55.5pt;border:none;border-bottom:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:30.0pt'>
                    <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  10.0pt;font-family:宋体'>　</span></p>
                  </td>
                  <td width=20 colspan=3 style='width:15.0pt;border:none;border-bottom:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:30.0pt'>
                    <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  10.0pt;font-family:宋体'>　</span></p>
                  </td>
                  <td width=15 colspan=3 style='width:11.1pt;border:none;border-bottom:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:30.0pt'>
                    <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  10.0pt;font-family:宋体'>　</span></p>
                  </td>
                  <td width=15 colspan=3 style='width:11.1pt;border:none;border-bottom:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:30.0pt'>
                    <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  10.0pt;font-family:宋体'>　</span></p>
                  </td>
                  <td width=15 colspan=2 style='width:11.1pt;border:none;border-bottom:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:30.0pt'>
                    <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  10.0pt;font-family:宋体'>　</span></p>
                  </td>
                  <td width=15 style='width:11.1pt;border:none;border-bottom:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:30.0pt'>
                    <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  10.0pt;font-family:宋体'>　</span></p>
                  </td>
                  <td width=15 style='width:11.1pt;border:none;border-bottom:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:30.0pt'>
                    <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  10.0pt;font-family:宋体'>　</span></p>
                  </td>
                  <td width=41 colspan=2 style='width:30.5pt;border:none;border-bottom:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:30.0pt'>
                    <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  10.0pt;font-family:宋体'>　</span></p>
                  </td>
                  <td width=16 colspan=2 style='width:11.7pt;border:none;border-bottom:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:30.0pt'>
                    <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  10.0pt;font-family:宋体'>　</span></p>
                  </td>
                  <td width=47 colspan=3 style='width:35.0pt;border:none;border-bottom:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:30.0pt'>
                    <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  10.0pt;font-family:宋体'>　</span></p>
                  </td>
                  <td width=75 colspan=3 style='width:56.0pt;border:none;border-bottom:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:30.0pt'>
                    <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  10.0pt;font-family:宋体'>　</span></p>
                  </td>
                  <td width=51 colspan=2 style='width:38.45pt;border:none;border-bottom:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:30.0pt'>
                    <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  10.0pt;font-family:宋体'>　</span></p>
                  </td>
                  <td width=30 colspan=2 style='width:22.25pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:30.0pt'>
                    <p class=MsoNormal align=left style='text-align:left'><span style='font-size:
  10.0pt;font-family:宋体'>　</span></p>
                  </td>
                </tr>
                <tr style='height:24.0pt'>
                  <td width=242 colspan=9 rowspan=3 style='width:181.2pt;border-top:none;
  border-left:solid windowtext 1.0pt;border-bottom:solid black 1.0pt;
  border-right:solid black 1.0pt;padding:0cm 5.4pt 0cm 5.4pt;height:24.0pt'>
                    <p class=MsoNormal align=left style='text-align:left'><span lang=EN-US
                                                                                style='font-size:11.0pt;font-family:黑体'>&nbsp; </span><b><span lang=EN-US
                                                                                                                                               style='font-size:11.0pt;font-family:宋体'>&nbsp;&nbsp;</span></b><b><span
                      style='font-size:11.0pt;font-family:宋体'>机动车所有人及代理人对申请材料的真实有效性负责。<span
                      lang=EN-US> <br>
  &nbsp;&nbsp;&nbsp; </span>自新机动车牌证领取之日起，原机动车牌证作废，不得继续使用。</span></b></p>
                  </td>
                  <td width=458 colspan=37 style='width:343.8pt;border:none;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:24.0pt'>
                    <p class=MsoNormal align=left style='text-align:left'><span lang=EN-US
                                                                                style='font-size:10.0pt;font-family:宋体'>&nbsp;</span><span style='font-size:
  10.0pt;font-family:宋体'>机动车所有人（代理人）签字：</span></p>
                  </td>
                </tr>
                <tr style='height:36.0pt'>
                  <td width=458 colspan=37 style='width:343.8pt;border:none;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:36.0pt'>
                    <p class=MsoNormal align=center style='text-align:center'><span
                      style='font-size:10.0pt;font-family:宋体'>$申请人签字$</span></p>
                  </td>
                </tr>
                <tr style='height:15.0pt'>
                  <td width=239 colspan=24 style='width:179.0pt;border:none;border-bottom:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:15.0pt'>
                    <p class=MsoNormal align=center style='text-align:center'><span
                      style='font-size:10.0pt;font-family:宋体'>　</span></p>
                  </td>
                  <td width=220 colspan=13 style='width:164.8pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:15.0pt'>
                    <p class=MsoNormal align=center style='text-align:center'><span lang=EN-US
                                                                                    style='font-size:10.0pt;font-family:宋体'>yyyy</span><span style='font-size:
  10.0pt;font-family:宋体'>年<span lang=EN-US>&nbsp;&nbsp;mm&nbsp;</span>月<span
                      lang=EN-US>&nbsp; dd&nbsp; </span>日 </span></p>
                  </td>
                </tr>
                <tr height=0>
                  <td width=36 style='border:none'></td>
                  <td width=29 style='border:none'></td>
                  <td width=53 style='border:none'></td>
                  <td width=27 style='border:none'></td>
                  <td width=44 style='border:none'></td>
                  <td width=16 style='border:none'></td>
                  <td width=11 style='border:none'></td>
                  <td width=9 style='border:none'></td>
                  <td width=16 style='border:none'></td>
                  <td width=16 style='border:none'></td>
                  <td width=14 style='border:none'></td>
                  <td width=2 style='border:none'></td>
                  <td width=15 style='border:none'></td>
                  <td width=1 style='border:none'></td>
                  <td width=16 style='border:none'></td>
                  <td width=15 style='border:none'></td>
                  <td width=11 style='border:none'></td>
                  <td width=4 style='border:none'></td>
                  <td width=13 style='border:none'></td>
                  <td width=2 style='border:none'></td>
                  <td width=16 style='border:none'></td>
                  <td width=2 style='border:none'></td>
                  <td width=2 style='border:none'></td>
                  <td width=11 style='border:none'></td>
                  <td width=2 style='border:none'></td>
                  <td width=2 style='border:none'></td>
                  <td width=11 style='border:none'></td>
                  <td width=2 style='border:none'></td>
                  <td width=2 style='border:none'></td>
                  <td width=13 style='border:none'></td>
                  <td width=15 style='border:none'></td>
                  <td width=15 style='border:none'></td>
                  <td width=39 style='border:none'></td>
                  <td width=2 style='border:none'></td>
                  <td width=14 style='border:none'></td>
                  <td width=2 style='border:none'></td>
                  <td width=2 style='border:none'></td>
                  <td width=43 style='border:none'></td>
                  <td width=2 style='border:none'></td>
                  <td width=2 style='border:none'></td>
                  <td width=71 style='border:none'></td>
                  <td width=2 style='border:none'></td>
                  <td width=2 style='border:none'></td>
                  <td width=49 style='border:none'></td>
                  <td width=15 style='border:none'></td>
                  <td width=15 style='border:none'></td>
                </tr>
              </table>
              <p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import config from '@/config';
  import OperatorUtils from '../../utils/OperatorUtils';
  export default {
    name: '',
    data () {
      return {
        msg: '',
        detailsDatas:'',
        arr: [{name: '', value: ''}]
      };
    },
    methods: {
     getParams(){
       var _this = this
       var code = this.$route.params.setCode;
       if(code){
         var type = 'VehicleDetail';
         var data = config.getUrlTrans({type: type, id: code});
         _this.$http.apiGet(HOST, data).then(function (res) {
           if (res.code == 200) {
             _this.detailsDatas = res.data;
           }
         });
       }else {
         this.$router.push({path:'/data/vehicles'})
       }
     }
    },
    mounted () {
      this.getParams()
    },
    watch () {
    }
  };
</script>

