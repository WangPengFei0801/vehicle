<style scoped>
  #content {
    background: #f2f8f9;
    padding: 14px 1rem;
    transition: all 0.25s ease;
    -moz-transition: all 0.25s ease;
    -webkit-transition: all 0.25s ease;
    -ms-transition: all 0.25s ease;
    border-top: 1px solid #ccc;
    font-size: 14px;
    font-family: "Poppins", sans-serif;
    margin-top: 140px;
  }

  .container-fluid {
    width: 100%;
    padding-right: 12.5px;
    padding-left: 12.5px;
    margin-right: auto;
    margin-left: auto;
    color: #666 !important
  }
  .container-fluid a {
    color: #00ce68;
  }
  .copy-right {
    float: left;
  }
  .copy-right a  {
    text-decoration: underline;
  }
  .msg-des {
    color: #777;
    float: right;
    height: 100%;
    margin-right: 20px;
    font-size: 14px;
  }

  .return-top {
    position: fixed;
    right: 20px;
    bottom: 100px;
    width: 42px;
    height: 42px;
    text-align: center;
    line-height: 46px;
    background-color: #9F9F9F;
    border-radius: 4%;
    z-index: 999;
    cursor: pointer;
  }

  .return-top > i {
    font-size: 38px;
    color: #fff;
  }
</style>
<template>
  <div>
    <div id="content" class="clearfix">
      <div class="container-fluid"><p class="copy-right">{{msgReverse}}<a :href="arr.url">{{arr.name}}</a>{{arr.value}}</p>
      </div>
      <span class="msg-des">车架管后台管理系统</span>
    </div>
    <p class="return-top hide" title="返回顶部">
      <i class="layui-icon">&#xe604;</i>
    </p>
  </div>
</template>

<script>
  export default {
    name: 'copy-right',
    data () {
      return {
        currentYear:new Date().getFullYear(),
        msg: `Copyright © `,
        arr: {name: ' .foto ', value: 'All rights reserved.', url: 'http://www.fotoit.cn/'}
      };
    },
    methods: {
      scrollTop () {

      },
      returnTop () {
      }
    },
    computed: {
      msgReverse:function () {
        return this.msg+(new Date().getFullYear())
      }
    },
    beforeCreate () {

    },
    created () {

    },
    destroyed () {
    },
    mounted () {
      layui.use(['element', 'layer', 'laydate'], function () {
        var element = layui.element;
        var layer = layui.layer;
        var laydate = layui.laydate;
        console.log(this.year);
      });
      window.addEventListener('scroll', function () {
        var $height = $('.layout-right').scrollTop();
        if ($height > 300) {
          $('.return-top').show()
        } else {
          $('.return-top').hide()
        }
      }, true);
      $('.return-top').bind('click',function () {
        $('.layout-right').animate({scrollTop: 0},'50');
      })
    },
    beforeUpdate () {

    },
    updated () {

    }
  };
</script>

