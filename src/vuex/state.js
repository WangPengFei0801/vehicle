const state = {
  showLeftMenu: true,
  showLoading: false,
  menus: [],
  user: {},
  warning: [],
  backlog: [],
  remind: {},
  current_id:'',
  dateSel:function(spe){
    var date = new Date();//今天
    var date2 = new Date();//明天
    var date3 = new Date();//八天前
    var date4 = new Date();//昨天
    var date5 = new Date();//前天
    var date6 = new Date();//七天前
    var date7 = new Date();//30天
    var date8 = new Date();//90天前
    var date9 = new Date();//60天前
    date3.setTime(date3.getTime() - 8 * 24 * 60 * 60 * 1000);
    date2.setTime(date2.getTime() + 24 * 60 * 60 * 1000);
    date4.setTime(date4.getTime() - 24 * 60 * 60 * 1000);
    date5.setTime(date5.getTime() - 2 * 24 * 60 * 60 * 1000);
    date6.setTime(date6.getTime() - 7 * 24 * 60 * 60 * 1000);
    date7.setTime(date7.getTime() - 30 * 24 * 60 * 60 * 1000);
    date8.setTime(date8.getTime() - 90 * 24 * 60 * 60 * 1000);
    date9.setTime(date9.getTime() - 60 * 24 * 60 * 60 * 1000);
    var seperator = spe;
    if (!seperator) {
      seperator = '/';
    }
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    var monthAnother = date2.getMonth() + 1;
    var month_3 = date3.getMonth() + 1;
    var dateAnother = date2.getDate();
    var date_3 = date3.getDate();
    var month_4 = date4.getMonth() + 1;
    var date_4 = date4.getDate();
    var month_5 = date5.getMonth() + 1;
    var date_5 = date5.getDate();
    var month_6 = date6.getMonth() + 1;
    var date_6 = date6.getDate();
    var month_7 = date7.getMonth() + 1;
    var date_7 = date7.getDate();
    var month_8 = date8.getMonth() + 1;
    var date_8 = date8.getDate();
    var month_9 = date9.getMonth() + 1;
    var date_9 = date9.getDate();
    if (month >= 1 && month <= 9) {
      month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
      strDate = "0" + strDate;
    }
    if (month_3 >= 1 && month_3 <= 9) {
      month_3 = "0" + month_3;
    }
    if (date_3 >= 0 && date_3 <= 9) {
      date_3 = "0" + date_3;
    }
    if (month_4 >= 1 && month_4 <= 9) {
      month_4 = "0" + month_4;
    }
    if (date_4 >= 0 && date_4 <= 9) {
      date_4 = "0" + date_4;
    }
    if (month_5 >= 1 && month_5 <= 9) {
      month_5 = "0" + month_5;
    }
    if (date_5 >= 0 && date_5 <= 9) {
      date_5 = "0" + date_5;
    }
    if (month_6 >= 1 && month_6 <= 9) {
      month_6 = "0" + month_6;
    }
    if (date_6 >= 0 && date_6 <= 9) {
      date_6 = "0" + date_6;
    }
    if (month_7 >= 1 && month_7 <= 9) {
      month_7 = "0" + month_7;
    }
    if (date_7 >= 0 && date_7 <= 9) {
      date_7 = "0" + date_7;
    }
    if (month_8 >= 1 && month_8 <= 9) {
      month_8 = "0" + month_8;
    }
    if (date_8 >= 0 && date_8 <= 9) {
      date_8 = "0" + date_8;
    }
    if (date_9 >= 0 && date_9 <= 9) {
      date_9 = "0" + date_9;
    }
    monthAnother > 10 ? monthAnother : "0" + monthAnother;
    dateAnother > 10 ? dateAnother : "0" + dateAnother;
    var currentdate = date.getFullYear() + seperator + month + seperator + strDate;
    var tommorwdate = date2.getFullYear() + seperator + monthAnother + seperator + dateAnother;
    var defaultdate = date3.getFullYear() + seperator + month_3 + seperator + date_3;
    var yesterdaydate = date4.getFullYear() + seperator + month_4 + seperator + date_4;
    var beforeYesterday = date5.getFullYear() + seperator + month_5 + seperator + date_5;
    var sevenDayAgo = date6.getFullYear() + seperator + month_6 + seperator + date_6;
    var thirtyDayAgo = date7.getFullYear() + seperator + month_7 + seperator + date_7;
    var ninetyDayAgo = date8.getFullYear() + seperator + month_8 + seperator + date_8;
    var sixtyDayAgo = date9.getFullYear() + seperator + month_9 + seperator + date_9;
    return [currentdate, tommorwdate, defaultdate, yesterdaydate, beforeYesterday, sevenDayAgo, thirtyDayAgo, ninetyDayAgo, sixtyDayAgo];
  },
  currentBtnSaveBox:'',
  skin:'layui-layer-molv',
  menuState:true,
  router:null
};

export default state
