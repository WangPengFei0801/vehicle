webpackJsonp([14],{P1vT:function(t,a,i){a=t.exports=i("UTlt")(!0),a.push([t.i,"#violation_details_popup[data-v-d5826766]{background-color:#f5f5f5}#violation_details_popup li[data-v-d5826766]{margin-top:20px}#violation_details_popup li h4[data-v-d5826766]{font-size:24px;line-height:50px;border-bottom:1px solid #ddd;color:#666;margin-bottom:10px}#violation_details_popup li p[data-v-d5826766]{width:85%;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;line-height:30px}#violation_details_popup li p span[data-v-d5826766]{font-weight:700;font-size:14px;width:33%}#violation_details_popup li p span b[data-v-d5826766]{display:inline-block;width:110px;color:#333;text-align:right}#violation_details_popup li p span i[data-v-d5826766]{font-weight:400;text-align:right;color:#666}#violation_details_popup>h2[data-v-d5826766]{line-height:50px;font-size:20px;color:#000;padding:0 20px 0 10px;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;font-weight:700;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;background:#fff;font-family:Roboto,sans-serif!important;margin-bottom:10px;border-bottom:1px solid #dee}#violation_details_popup>ul>li h3[data-v-d5826766]{font-size:16px;color:#111;line-height:42px;margin-bottom:4px;border-bottom:1px solid #ccc;background:#fff;padding-left:14px}#violation_details_popup>ul>li[data-v-d5826766]{background-color:#fff;margin-bottom:20px}#violation_details_popup>ul>li p span[data-v-d5826766]{color:#222;font-weight:700;font-size:14px;line-height:36px}#violation_details_popup>ul>li p span b[data-v-d5826766]{display:inline-block;width:130px;text-align:right}#violation_details_popup .layui-table thead tr[data-v-d5826766]{border-top:0}","",{version:3,sources:["C:/Users/Administrator/Desktop/project/fs-master/trunk/code/src/pages/controls/violationDetails.vue"],names:[],mappings:"AACA,0CACE,wBAA0B,CAC3B,AACD,6CACE,eAAiB,CAClB,AACD,gDACE,eAAgB,AAChB,iBAAkB,AAClB,6BAA8B,AAC9B,WAAY,AACZ,kBAAoB,CACrB,AACD,+CACE,UAAW,AACX,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,qBAAqB,AACjB,iBAAiB,AACrB,yBAA0B,AACtB,sBAAuB,AACnB,8BAA+B,AACvC,gBAAkB,CACnB,AACD,oDACE,gBAAkB,AAClB,eAAgB,AAChB,SAAW,CACZ,AACD,sDACE,qBAAsB,AACtB,YAAa,AACb,WAAY,AACZ,gBAAkB,CACnB,AACD,sDACE,gBAAoB,AACpB,iBAAkB,AAClB,UAAY,CACb,AACD,6CACE,iBAAkB,AAClB,eAAgB,AAChB,WAAY,AACZ,sBAAuB,AACvB,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,qBAAsB,AAClB,iBAAkB,AACtB,8BAA+B,AAC/B,6BAA8B,AAC1B,uBAAwB,AACpB,mBAAoB,AAC5B,gBAAkB,AAClB,yBAA0B,AACtB,sBAAuB,AACnB,8BAA+B,AACvC,gBAAiB,AACjB,wCAA6C,AAC7C,mBAAoB,AACpB,4BAA8B,CAC/B,AACD,mDACE,eAAgB,AAChB,WAAY,AACZ,iBAAkB,AAClB,kBAAmB,AACnB,6BAA8B,AAC9B,gBAAiB,AACjB,iBAAmB,CACpB,AACD,gDACE,sBAAuB,AACvB,kBAAoB,CACrB,AACD,uDACE,WAAY,AACZ,gBAAkB,AAClB,eAAgB,AAChB,gBAAkB,CACnB,AACD,yDACE,qBAAsB,AACtB,YAAa,AACb,gBAAkB,CACnB,AACD,gEACE,YAAc,CACf",file:"violationDetails.vue",sourcesContent:['\n#violation_details_popup[data-v-d5826766] {\n  background-color: #f5f5f5;\n}\n#violation_details_popup li[data-v-d5826766] {\n  margin-top: 20px;\n}\n#violation_details_popup li h4[data-v-d5826766] {\n  font-size: 24px;\n  line-height: 50px;\n  border-bottom: 1px solid #DDD;\n  color: #666;\n  margin-bottom: 10px;\n}\n#violation_details_popup li p[data-v-d5826766] {\n  width: 85%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap:nowrap;\n      flex-wrap:nowrap;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  line-height: 30px;\n}\n#violation_details_popup li p span[data-v-d5826766] {\n  font-weight: bold;\n  font-size: 14px;\n  width: 33%;\n}\n#violation_details_popup li p span b[data-v-d5826766] {\n  display: inline-block;\n  width: 110px;\n  color: #333;\n  text-align: right;\n}\n#violation_details_popup li p span i[data-v-d5826766] {\n  font-weight: normal;\n  text-align: right;\n  color: #666;\n}\n#violation_details_popup > h2[data-v-d5826766] {\n  line-height: 50px;\n  font-size: 20px;\n  color: #000;\n  padding: 0 20px 0 10px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  font-weight: bold;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  background: #fff;\n  font-family: "Roboto", sans-serif !important;\n  margin-bottom: 10px;\n  border-bottom: 1px solid #Dee;\n}\n#violation_details_popup > ul > li h3[data-v-d5826766] {\n  font-size: 16px;\n  color: #111;\n  line-height: 42px;\n  margin-bottom: 4px;\n  border-bottom: 1px solid #ccc;\n  background: #fff;\n  padding-left: 14px;\n}\n#violation_details_popup > ul > li[data-v-d5826766] {\n  background-color: #fff;\n  margin-bottom: 20px;\n}\n#violation_details_popup > ul > li p span[data-v-d5826766] {\n  color: #222;\n  font-weight: bold;\n  font-size: 14px;\n  line-height: 36px;\n}\n#violation_details_popup > ul > li p span b[data-v-d5826766] {\n  display: inline-block;\n  width: 130px;\n  text-align: right;\n}\n#violation_details_popup .layui-table thead tr[data-v-d5826766] {\n  border-top: 0;\n}\n'],sourceRoot:""}])},mQs2:function(t,a,i){"use strict";function o(t){i("xaRb")}Object.defineProperty(a,"__esModule",{value:!0});var p=i("QmSG"),e=i.n(p),n=(i("U/9I"),{name:"",data:function(){return{msg:"",arr:[{name:"",value:""}],popupData:null}},methods:{returnF:function(){window.history.go(-1)}},mounted:function(){var t=this,a=this.$route.params.setCode;if(a){var i=e.a.getUrlTrans({type:"ViolationDetail",id:a});this.$http.apiGet("http://192.168.8.82:80/carAuditApiTest/api",i).then(function(a){200==a.code&&(t.popupData=a.data,console.log(t.popupData))})}else this.$router.push({path:"/data/violation"})},beforeUpdate:function(){},updated:function(){},watch:function(){}}),l=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",[t.popupData?i("div",{attrs:{id:"violation_details_popup"}},[i("ul",[i("li",[i("h3",[t._v("申请人信息")]),t._v(" "),i("table",{staticClass:"layui-table details-popup-table",attrs:{"lay-skin":"line"}},[t._m(0),t._v(" "),i("tbody",[i("tr",[i("td",[t._v(t._s(t.popupData.driverName))]),t._v(" "),i("td",[t._v(t._s(t.popupData.devId))]),t._v(" "),i("td",[t._v(t._s(t.popupData.carOwnerIdNumber))]),t._v(" "),i("td",[t._v(t._s(t.popupData.carOwnerMobile))]),t._v(" "),i("td",[t._v(t._s(t.popupData.createTime))]),t._v(" "),i("td",[t._v(t._s(t.popupData.driverName))])])])])]),t._v(" "),i("li",[i("h3",[t._v("驾驶证信息")]),t._v(" "),i("table",{staticClass:"layui-table details-popup-table",attrs:{"lay-skin":"line"}},[t._m(1),t._v(" "),i("tbody",[i("tr",[i("td",[t._v(t._s(t.popupData[0].driverIdNumber))]),t._v(" "),i("td",[t._v(t._s(t.popupData[0].engineNumber))]),t._v(" "),i("td",[t._v(t._s(t.popupData[0].plateNumber))]),t._v(" "),i("td",[t._v(t._s(t.popupData[0].carType))]),t._v(" "),i("td",[t._v(t._s(t.popupData[0].vehicleVinCode))]),t._v(" "),i("td",[t._v(t._s(t.popupData[0].vehicleVinCode))])])])])]),t._v(" "),i("li",[i("h3",[t._v("违章信息")]),t._v(" "),i("table",{staticClass:"layui-table details-popup-table",attrs:{"lay-skin":"line"}},[t._m(2),t._v(" "),i("tbody",[i("tr",[i("td",[t._v(t._s(t.popupData[0].illegalContent))]),t._v(" "),i("td",[t._v(t._s(t.popupData[0].createTime))]),t._v(" "),i("td",[t._v(t._s(t.popupData[0].illegalLocation))]),t._v(" "),i("td",[t._v(t._s(t.popupData[0].illegalContent))]),t._v(" "),i("td",[t._v(t._s(t.popupData[0].illegalAddress))]),t._v(" "),i("td",[t._v(t._s(t.popupData[0].illegalAddress))])])])])]),t._v(" "),i("li",[i("h3",[t._v("驾驶人信息")]),t._v(" "),i("table",{staticClass:"layui-table details-popup-table",attrs:{"lay-skin":"line"}},[t._m(3),t._v(" "),i("tbody",[i("tr",[i("td",[t._v(t._s(t.popupData[0].driverName))]),t._v(" "),i("td",[t._v(t._s(t.popupData[0].driverIdNumber))]),t._v(" "),i("td",[t._v(t._s(t.popupData[0].engineNumber))]),t._v(" "),i("td",[t._v(t._s(t.popupData[0].illegalPoints))]),t._v(" "),i("td",[t._v(t._s(t.popupData[0].createTime))])])])])]),t._v(" "),i("li",[i("h3",[t._v("收费信息")]),t._v(" "),i("table",{staticClass:"layui-table details-popup-table",attrs:{"lay-skin":"line"}},[t._m(4),t._v(" "),i("tbody",[i("tr",[i("td",[t._v(t._s(t.popupData[0].monitoringId))]),t._v(" "),i("td",[t._v(t._s(t.popupData[0].thirdTradeNo))]),t._v(" "),i("td",[t._v(t._s(t.popupData[0].payStatus))]),t._v(" "),i("td",[t._v(t._s(t.popupData[0].payMentType))]),t._v(" "),i("td",[t._v(t._s(t.popupData[0].updateTime))]),t._v(" "),i("td",[t._v(t._s(t.popupData[0].fineAmount))]),t._v(" "),i("td",[t._v(t._s(t.popupData[0].overdueFine))]),t._v(" "),i("td",[t._v(t._s(t.popupData[0].totalFee))])])])])])]),t._v(" "),i("div",{staticClass:"tac mt12"},[i("button",{staticClass:"layui-btn layui-btn-normal",on:{click:t.returnF}},[t._v("返回违章管理")])])]):t._e()])},A=[function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("thead",[i("tr",{staticClass:"details-popup-table-tr"},[i("th",[t._v("车主")]),t._v(" "),i("th",[t._v("设备编号")]),t._v(" "),i("th",[t._v("车主身份证号")]),t._v(" "),i("th",[t._v("车主手机号码")]),t._v(" "),i("th",[t._v("办理时间")]),t._v(" "),i("th",[t._v("驾驶人")])])])},function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("thead",[i("tr",{staticClass:"details-popup-table-tr"},[i("th",[t._v("驾驶证号")]),t._v(" "),i("th",[t._v("驾驶人手机号：")]),t._v(" "),i("th",[t._v("车牌号码")]),t._v(" "),i("th",[t._v("车牌类型")]),t._v(" "),i("th",[t._v("发动机号")]),t._v(" "),i("th",[t._v("车架号")])])])},function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("thead",[i("tr",{staticClass:"details-popup-table-tr"},[i("th",[t._v("违章行为")]),t._v(" "),i("th",[t._v("违章时间")]),t._v(" "),i("th",[t._v("违章地址")]),t._v(" "),i("th",[t._v("违章内容")]),t._v(" "),i("th",[t._v("采集机构")]),t._v(" "),i("th",[t._v("处理机构")])])])},function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("thead",[i("tr",{staticClass:"details-popup-table-tr"},[i("th",[t._v("驾驶人")]),t._v(" "),i("th",[t._v("驾驶证号")]),t._v(" "),i("th",[t._v("驾驶人手机号")]),t._v(" "),i("th",[t._v("扣分")]),t._v(" "),i("th",[t._v("处理时间")])])])},function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("thead",[i("tr",{staticClass:"details-popup-table-tr"},[i("th",[t._v("订单号")]),t._v(" "),i("th",[t._v("支付流水号")]),t._v(" "),i("th",[t._v("支付状态")]),t._v(" "),i("th",[t._v("支付方式")]),t._v(" "),i("th",[t._v("支付时间")]),t._v(" "),i("th",[t._v("罚款金额")]),t._v(" "),i("th",[t._v("滞纳金")]),t._v(" "),i("th",[t._v("总金额")])])])}],s={render:l,staticRenderFns:A},d=s,_=i("C7Lr"),v=o,r=_(n,d,!1,v,"data-v-d5826766",null);a.default=r.exports},xaRb:function(t,a,i){var o=i("P1vT");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);i("FIqI")("4df40949",o,!0,{})}});