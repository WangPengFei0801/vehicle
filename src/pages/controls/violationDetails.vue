<style scoped>
  #violation_details_popup {
    background-color: #f5f5f5;
  }
  #violation_details_popup li {
    margin-top: 20px;
  }
  #violation_details_popup li h4 {
    font-size: 24px;
    line-height: 50px;
    border-bottom: 1px solid #DDD;
    color: #666;
    margin-bottom: 10px;
  }
  #violation_details_popup li p {
    width: 85%;
    display: flex;
    flex-wrap:nowrap;
    justify-content: space-between;
    line-height: 30px;
  }
  #violation_details_popup li p span {
    font-weight: bold;
    font-size: 14px;
    width: 33%;
  }
  #violation_details_popup li p span b {
    display: inline-block;
    width: 110px;
    color: #333;
    text-align: right;
  }
  #violation_details_popup li p span i {
    font-weight: normal;
    text-align: right;
    color: #666;
  }
  #violation_details_popup > h2 {
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

  #violation_details_popup > ul > li h3 {
    font-size: 16px;
    color: #111;
    line-height: 42px;
    margin-bottom: 4px;
    border-bottom: 1px solid #ccc;
    background: #fff;
    padding-left: 14px;
  }

  #violation_details_popup > ul > li {
    background-color: #fff;
    margin-bottom: 20px;
  }

  #violation_details_popup > ul > li p span {
    color: #222;
    font-weight: bold;
    font-size: 14px;
    line-height: 36px;
  }

  #violation_details_popup > ul > li p span b {
    display: inline-block;
    width: 130px;
    text-align: right;
  }
  #violation_details_popup .layui-table thead tr {
    border-top: 0;
  }
</style>
<template>
<div>
  <div id="violation_details_popup" v-if="popupData">
    <ul>
       <li>
        <h3>申请人信息</h3>
        <table class="layui-table details-popup-table" lay-skin="line">
          <thead>
          <tr class="details-popup-table-tr">
            <th>车主</th>
            <th>设备编号</th>
            <th>车主身份证号</th>
            <th>车主手机号码</th>
            <th>办理时间</th>
            <th>驾驶人</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>{{popupData.driverName}}</td>
            <td>{{popupData.devId}}</td>
            <td>{{popupData.carOwnerIdNumber}}</td>
            <td>{{popupData.carOwnerMobile}}</td>
            <td>{{popupData.createTime}}</td>
            <td>{{popupData.driverName}}</td>
          </tr>
          </tbody>
        </table>
      </li>
      <li>
         <h3>驾驶证信息</h3>
         <table class="layui-table details-popup-table" lay-skin="line">
           <thead>
           <tr class="details-popup-table-tr">
             <th>驾驶证号</th>
             <th>驾驶人手机号：</th>
             <th>车牌号码</th>
             <th>车牌类型</th>
             <th>发动机号</th>
             <th>车架号</th>
           </tr>
           </thead>
           <tbody>
           <tr>
             <td>{{popupData[0].driverIdNumber}}</td>
             <td>{{popupData[0].engineNumber}}</td>
             <td>{{popupData[0].plateNumber}}</td>
             <td>{{popupData[0].carType}}</td>
             <td>{{popupData[0].vehicleVinCode}}</td>
             <td>{{popupData[0].vehicleVinCode}}</td>
           </tr>
           </tbody>
         </table>
       </li>
       <li>
         <h3>违章信息</h3>
         <table class="layui-table details-popup-table" lay-skin="line">
           <thead>
           <tr class="details-popup-table-tr">
             <th>违章行为</th>
             <th>违章时间</th>
             <th>违章地址</th>
             <th>违章内容</th>
             <th>采集机构</th>
             <th>处理机构</th>
           </tr>
           </thead>
           <tbody>
           <tr>
             <td>{{popupData[0].illegalContent}}</td>
             <td>{{popupData[0].createTime}}</td>
             <td>{{popupData[0].illegalLocation}}</td>
             <td>{{popupData[0].illegalContent}}</td>
             <td>{{popupData[0].illegalAddress}}</td>
             <td>{{popupData[0].illegalAddress}}</td>
           </tr>
           </tbody>
         </table>
       </li>
       <li>
         <h3>驾驶人信息</h3>
         <table class="layui-table details-popup-table" lay-skin="line">
           <thead>
           <tr class="details-popup-table-tr">
             <th>驾驶人</th>
             <th>驾驶证号</th>
             <th>驾驶人手机号</th>
             <th>扣分</th>
             <th>处理时间</th>
           </tr>
           </thead>
           <tbody>
           <tr>
             <td>{{popupData[0].driverName}}</td>
             <td>{{popupData[0].driverIdNumber}}</td>
             <td>{{popupData[0].engineNumber}}</td>
             <td>{{popupData[0].illegalPoints}}</td>
             <td>{{popupData[0].createTime}}</td>
           </tr>
           </tbody>
         </table>
       </li>
       <li>
         <h3>收费信息</h3>
         <table class="layui-table details-popup-table" lay-skin="line">
           <thead>
           <tr class="details-popup-table-tr">
             <th>订单号</th>
             <th>支付流水号</th>
             <th>支付状态</th>
             <th>支付方式</th>
             <th>支付时间</th>
             <th>罚款金额</th>
             <th>滞纳金</th>
             <th>总金额</th>
           </tr>
           </thead>
           <tbody>
           <tr>
             <td>{{popupData[0].monitoringId}}</td>
             <td>{{popupData[0].thirdTradeNo}}</td>
             <td>{{popupData[0].payStatus}}</td>
             <td>{{popupData[0].payMentType}}</td>
             <td>{{popupData[0].updateTime}}</td>
             <td>{{popupData[0].fineAmount}}</td>
             <td>{{popupData[0].overdueFine}}</td>
             <td>{{popupData[0].totalFee}}</td>
           </tr>
           </tbody>
         </table>
       </li>
    </ul>
    <div class="tac mt12"><button class="layui-btn layui-btn-normal" @click="returnF">返回违章管理</button></div>
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
        arr: [{name: '', value: ''}],
        popupData:null,
      };
    },
    methods: {
      returnF: function () {
        window.history.go(-1)
      }
    },
    mounted () {
      var _this = this
      var billId = this.$route.params.setCode;
      if(billId){
        var type = 'ViolationDetail';
        var data = config.getUrlTrans({type: type, id: billId});
        this.$http.apiGet(HOST, data).then(function (res) {
          if (res.code == 200) {
            _this.popupData = res.data;
            console.log(_this.popupData);
          }
        });
      }else {
        this.$router.push({path:'/data/violation'})
      }

    },
    beforeUpdate () {

    },
    updated () {

    },
    watch () {
    }
  };
</script>

