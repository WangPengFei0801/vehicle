<style scoped>
  .content {
    padding: 50px;
    text-align: center;
  }
  .content>div > h1{
    font-size: 24px;
    margin-top: 50px;
    color: #333;
  }
  .content > div > p {
    margin-top: 20px;
  }
  @keyframes fadeIn {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  .fadeIn {
    -webkit-animation-name: fadeIn;
    animation-name: fadeIn;
    animation-duration: .8s;
    animation-fill-mode: both;
    animation-delay: .8s;
  }

  @keyframes fadeInDown {
    from {
      opacity: 0;
      -webkit-transform: translate3d(0, -100%, 0);
      transform: translate3d(0, -100%, 0);
    }

    to {
      opacity: 1;
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
  }
  .fadeInDown {
    -webkit-animation-name: fadeInDown;
    animation-name: fadeInDown;
    animation-duration: .8s;
    animation-fill-mode: both;
  }

</style>
<template>
    <div class="content">
      <div><img class="fadeInDown" src="../../../static/assets/img/power.png" width="400" alt="">
        <h1 class="fadeIn">抱歉您没有权限访问该页面</h1>
        <p><a class="fadeIn" href="#/index">返回主页</a></p>
      </div>
    </div>
</template>

<script>
    export default {
        name: "",
        data() {
            return {
                msg: "404",
                arr: [{name: "", value: ""}]
            }
        },
        methods: {
        },
        computed: {
        },
        beforeCreate() {

        },
        created() {

        },
        beforeMount() {

        },
        mounted() {
            layui.use(['element', 'layer', 'laydate'], function () {
                var element = layui.element;
                var layer = layui.layer;
                var laydate = layui.laydate
            })
        },
        beforeUpdate() {

        },
        updated() {

        },
        watch() {
        }
    }
</script>

