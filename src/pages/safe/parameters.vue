<style scoped>
  .content {
    padding: 10px 20px;
    background-color: #fff;
    padding-bottom: 50px;
  }
  .content-title {
    font-weight: bold;
    font-size: 20px;
    font-family:'hiragino sans gb','arial','microsoft yahei ui','microsoft yahei'!important;
  }
  .content-body {
    width: 600px;
    height: 700px;
    background: url("../../../static/assets/img/set-bg.jpg") repeat-x center center;
    border-radius: 20px;
    padding-top: 6px;
  }
  .set-item,.set-title {
    display: block;
    width: 100%;
    background: transparent;
    border-bottom: 1px solid #fff;
    padding: 0 0 0 10px;
  }
  .set-item>span:nth-of-type(1),.set-title>span:nth-of-type(1) {
    display: inline-block;
    width: 220px;
    font-size: 12px;
    line-height: 44px;
    border-right: 1px solid #fff;
    padding-right: 10px;
  }
  .set-item>span:nth-of-type(1){
    color: #555;
    text-align: right;
  }
  .set-title>span{
    display: inline-block;
    font-size: 13px;
    font-weight: bold;
    text-align: center;
  }
  .set-title>span:nth-of-type(2){
    width: 96px;
    padding-left: 10px;
    border-right: 1px solid #fff;
    line-height: 44px;
  }
  .set-title>span:nth-of-type(3){
    width: 140px;
    text-align: center;
  }
  .set-item>span:nth-of-type(2) {
    width: 120px;
    font-size: 12px;
    color: #555;
    text-align: center;
    margin-left: 14px;
  }
  .set-item > input {
    background-color: transparent;
    height: 44px;
    width: 100px;
    border-right: 1px solid #fff;
    padding-left:6px ;
    text-align: center;
  }
  section:nth-last-child(1){
    width: 100%;
    text-align: right;
    padding: 30px 20px 10px;
  }
</style>
<template>
  <div class="content">
    <h1 class="content-title">参数设置</h1>
    <hr>
    <div class="content-body">
      <section class="set-title"><span>名称</span><span>值</span><span>说明</span></section>
      <section class="set-item"><span>最大在线人数</span><input type="text" value="123"><span>系统运行登录的最大人数</span></section>
      <section class="set-item"><span>密码重置延长时间(天)</span><input type="text"><span>用户密码重置后延长的有效天数</span></section>
      <section class="set-item"><span>长期不登录时间间隔(天)</span><input type="text"><span>用于检测用户长期不登录的时间跨度</span></section>
      <section class="set-item"><span>用户高频访问次数</span><input type="text"><span>超出该数值阻止用户登录</span></section>
      <section class="set-item"><span>用户高频访问时间间隔(分钟)</span><input type="text"><span>在该时间内查询用户高频访问次数</span></section>
      <section class="set-item"><span>用户限制登录错误次数</span><input type="text"><span>超出该数值在一段时间内限制用户登录</span></section>
      <section class="set-item"><span>用户限制登录错误次数时间间隔(分钟)</span><input type="text"><span></span></section>
      <section class="set-item"><span>用户限制登录错误次数持续时间(分钟)</span><input type="text"><span></span></section>
      <section class="set-item"><span>用户禁止登录错误次数</span><input type="text"><span></span></section>
      <section class="set-item"><span>用户禁止登录错误次数时间间隔(分钟)</span><input type="text"><span></span></section>
      <section class="set-item"><span>终端登录错误次数</span><input type="text"><span></span></section>
      <section class="set-item"><span>终端登录错误次数时间间隔(分钟)</span><input type="text"><span></span></section>
      <section><button class="layui-btn layui-btn-sm"><i class="iconfont vb">&#xe70d;</i>保存配置</button></section>
    </div>
  </div>
</template>

<script>
  export default {
    name: "parameters",
    data() {
      return {
        msg: "parameters",
        arr: [{name: "parameters", value: "parameters"}]
      }
    },
    methods: {
      showMsg: function () {
        console.log(this.msg)
      }
    },
    computed: {
      showNum: function () {
        console.log(1 - 1)
      }
    },
    beforeCreate() {

    },
    created() {

    },
    beforeMount() {

    },
    mounted() {

    },
    beforeUpdate() {

    },
    updated() {

    },
  }
</script>

