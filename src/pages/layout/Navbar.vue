<style scoped>
  .layout-header {
    height: 50px;
    background: #309bff;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    z-index: 1000;
  }
  .layout-header-left {
    display: inline-block;
    margin-left: 190px;
  }
  #shadow {
    position: fixed;
    background-color: rgba(0,0,0,.2);
    height:5000px;
    width: 100%;
    top: 0;
    display: none;
    z-index: 899;
    left: 0;
  }
  .menu-translate-setting {
    height: 100%;
    text-align: center;
    width: 64px;
    float: left;
    cursor: pointer;
    background: rgba(255, 255, 255, 0.13);
    color: #fff;
  }

  .menu-icon {
    font-size: 28px;
    line-height: 64px;
  }

  .user-panel {
    margin-left: 10px;
    padding: 0px 10px;
  }

  .layout-header-right {
    float: right;
    padding-right: 36px;
    color: #fff;
    padding-top: 1px;
    display: inline-block;
  }

  .list-panel:hover {
    box-sizing: border-box;
    border-bottom: 2px solid #5c6b77;
  }

  .layui-nav {
    background-color: transparent;
  }

  .layout-header-right .layui-nav .layui-nav-item {
    position: relative;
  }

  .nav-item {
    position: relative !important;
    padding-left: 48px !important;
  }

  .nav-item > i {
    position: absolute;
    left: 20px;
    top: -1px;
    font-size: 14px;
  }
  .menu-translate {
    transform: rotateY(180deg);
    transition:rotateY 30ms;
  }
  .layout-header .skin-set .layui-nav .layui-nav-item > a {
    color: #eee;
  }
  .layout-header .skin-set .layui-nav .layui-nav-item .skin-set-nav-child a {
    padding: 0;
    text-align: center;
    width: 84px;
  }
 .layout-header-right .layui-nav-item dd {
   line-height: 42px;
 }
  .skin-set,.all-screen,.menu-set {
    width: 60px;
    line-height: 50px;
    vertical-align: top;
    cursor: pointer;
    display: inline-block;
    height: 50px;
    text-align: center;
  }
  .all-screen i {
    font-size: 14px;
    color: #ddd;
  }
.menu-set >i {
  color: #fff;
  font-size: 24px;
}
  .skin-set i {
    font-size: 14px;
    color: #ddd;
  }
  .layout-header .layui-nav .layui-nav-child dd.layui-this a, .layui-nav-child dd.layui-this {
    color: #333;
  }
</style>
<style>
  .show-nav {
    position: absolute;
    left: 76px;
    top: 0;
    background-color: #fff;
    box-shadow: 0px 0px 10px #999;
    display: none;
  }

  .show-nav > li {
    line-height: 34px;
  }

  .show-nav > li.show-item > a {
    color: #444;
  }

  .show-nav:before {
    content: '';
    position: absolute;
    background: #fff;
    border-width: 1px;
    width: 16px;
    height: 16px;
    left: -16px;
    top: 10px;
    border-radius: 0 0 0 100%;
    line-height: 0;
    border-color: transparent transparent #aaa transparent;
  }

  .show-nav > li.show-item > a:hover {
    color: #40AFFE;
  }

  .skin-list-show {
    width: 100%;
    height: 180px;
    position: relative;

  }
  #skin_list_show {
    position: fixed;
    right: -320px;
    top: 62px;
    background: #fff;
    width: 310px;
    padding-left: 18px;
    height: 5000px;
    box-sizing: border-box;
    box-shadow: 0 0 6px #ccc;
    z-index: 900;
  }

  #skin_list_show h3 {
    line-height: 40px;
    padding-left: 20px;
    color: #555;
    border-bottom: 1px solid #eee;
    margin-bottom: 20px;
  }

  #skin_list_show section {
    position: relative;
    display: inline-block;
    vertical-align: top;
    width: 80px;
    height: 50px;
    margin: 0 10px 40px 0;
    background-color: #f2f2f2;
    cursor: pointer;
    font-size: 12px;
    color: #666;
    zoom: 1;
  }

  .skin-show-header {
    position: relative;
    z-index: 10;
    height: 10px;
    border-top: 1px solid #f2f2f2;
    border-right: 1px solid #f2f2f2;
  }

  .skin-show-nav {
    position: absolute;
    left: 0;
    top: 0;
    width: 16px;
    height: 100%;
    z-index: 11;
    box-shadow: 1px 0 2px 0 rgba(0, 0, 0, .05);
  }

  #skin_list_show section span {
    position: absolute;
    bottom: -20px;
    left: 20px;
    color: #999;
  }

  section:after {
    content: '';
    position: absolute;
    z-index: 20;
    top: 50%;
    left: 50%;
    width: 1px;
    height: 0;
    border: 1px solid #f2f2f2;
    transition: all .3s;
    -webkit-transition: all .3s;
    opacity: 0;
  }

  section:hover::after {
    width: 100%;
    height: 100%;
    padding: 4px;
    top: -5px;
    left: -5px;
    border-color: #5FB878;
    opacity: 1;
  }

  #skin_list_show section:nth-of-type(1) .skin-show-header,
  #skin_list_show section:nth-of-type(1) .skin-show-nav {
    background: #44c660;
  }

  #skin_list_show section:nth-of-type(2) .skin-show-header,
  #skin_list_show section:nth-of-type(2) .skin-show-nav {
    background: #DE3163;
  }

  #skin_list_show section:nth-of-type(3) .skin-show-header,
  #skin_list_show section:nth-of-type(3) .skin-show-nav {
    background: #5C50E6;
  }

  #skin_list_show section:nth-of-type(4) .skin-show-header,
  #skin_list_show section:nth-of-type(4) .skin-show-nav {
    background: #0033FF;
  }

  #skin_list_show section:nth-of-type(5) .skin-show-header,
  #skin_list_show section:nth-of-type(5) .skin-show-nav {
    background: #2A3F54;
  }

  #skin_list_show section:nth-of-type(6) .skin-show-header {
    background-color: #009688;
  }

  #skin_list_show section:nth-of-type(6) .skin-show-nav {
    background-color: #28333E;
  }

  #skin_list_show section:nth-of-type(7) .skin-show-header {
    background-color: #AA3130;
  }

  #skin_list_show section:nth-of-type(7) .skin-show-nav {
    background-color: #28333E;
  }

  #skin_list_show section:nth-of-type(8) .skin-show-header {
    background-color: #409EFF;
  }

  #skin_list_show section:nth-of-type(8) .skin-show-nav {
    background-color: #20222A;
  }

  #skin_list_show section:nth-of-type(9) .skin-show-header {
    background-color: #2F9688;
  }

  #skin_list_show section:nth-of-type(9) .skin-show-nav {
    background-color: #20222A;
  }

  #skin_list_show section:nth-of-type(10) .skin-show-header {
    background-color: #c71585;
  }

  #skin_list_show section:nth-of-type(10) .skin-show-nav {
    background-color: #f40;
  }

  #skin_list_show section:nth-of-type(11) .skin-show-header {
    background-color: #0e8a9d;
  }

  #skin_list_show section:nth-of-type(11) .skin-show-nav {
    background-color: #dac121;
  }

  #skin_list_show section:nth-of-type(12) .skin-show-header {
    background-color: #0e8a9d;
  }

  #skin_list_show section:nth-of-type(12) .skin-show-nav {
    background-color: #dac121;
  }

  #skin_list_show section:nth-of-type(13) .skin-show-header {
    background-color: #0e8a9d;
  }

  #skin_list_show section:nth-of-type(13) .skin-show-nav {
    background-color: #dac121;
  }

  #skin_list_show section:nth-of-type(14) .skin-show-header {
    background-color: #0e8a9d;
  }

  #skin_list_show section:nth-of-type(14) .skin-show-nav {
    background-color: #dac121;
  }

  #skin_list_show section:last-of-type .skin-show-header {
    background: linear-gradient(120deg, #00e4d0, #5983e8);
  }

  #skin_list_show section:last-of-type .skin-show-nav {
    background: #2A3F54;
  }

  @keyframes slideInRight {
    from {
      -webkit-transform: translate3d(100%, 0, 0);
      transform: translate3d(100%, 0, 0);
      visibility: visible;
      right: -320px;
    }

    to {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
      right: 0;
    }
  }

  @keyframes slideOutRight {
    from {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
      right: 0;
    }

    to {
      visibility: hidden;
      -webkit-transform: translate3d(100%, 0, 0);
      transform: translate3d(100%, 0, 0);
      right: -320px;
    }
  }
  @keyframes fadeIn {
    from {
      opacity: 0;
      display: none;
      z-index: 500;
    }

    to {
      opacity: 1;
      display: block;
      z-index: 1001;
    }
  }
  @keyframes fadeOut {
    from {
      opacity: 1;
      display: block;
    }

    to {
      opacity: 0;
      display: none;
    }
  }
  .display-block {
    display: block!important;
  }
  .fadeOut {
    animation-name: fadeOut;
    animation-fill-mode: both;
    animation-duration: .3s;
  }

  .fadeIn {
    animation-name: fadeIn;
    animation-fill-mode: both;
    animation-duration: .3s;
  }
  .slideInRight {
    animation-fill-mode: both;
    animation-name: slideInRight;
    animation-duration: .3s;
  }

  .slideOutRight {
    animation-duration: .3s;
    animation-name: slideOutRight;
    animation-fill-mode: both;
  }

  .slideInRight .layui-layer-content {
    padding-right: 10px;
  }
</style>
<template>
  <div>
    <div class="layout-header clearfix">
      <div class="layout-header-left">
        <div :class="$store.state.menuState?'menu-translate':''" class="menu-set tac" @click="changeMenu">
          <i class="iconfont icon-zhankai"></i>
        </div>
      </div>
      <div class="layout-header-right">
        <div class="all-screen d_i_b" @click="handleFullScreen">
          <i class="iconfont icon-quanping"></i>
        </div>
        <div class="skin-set d_i_b" @click="showSchema">
          <i class="iconfont">&#xe698;</i>
        </div>
        <ul slot="list" class="layui-nav d_i_b">
          <li class="layui-nav-item" name="1">
            <a style="color: #fff;" href="javascript:;"><i class="userLogo iconfont mr-10">&#xe65e;</i>Hi,{{userData.userName}}</a>
            <dl class="layui-nav-child">
              <dd @click="passwd"><a class="nav-item" href="javascript:;"><i class="iconfont">&#xe6e8;</i>{{userOption.changePas}}</a>
              </dd>
              <dd @click="logout"><a class="nav-item" href="JavaScript:;"><i class="iconfont">&#xe6fa;</i>{{userOption.loginOut}}</a>
              </dd>
            </dl>
          </li>
        </ul>
      </div>
      <div id="skin_list_show" class="skin-list-show" :class="schemaStatus?'slideInRight':'slideOutRight'">
        <h3>选择主题</h3>
        <section class="schema-set">
          <header class="skin-show-header"></header>
          <nav class="skin-show-nav"></nav>
          <span>主题一</span>
        </section>
        <section class="schema-set">
          <header class="skin-show-header"></header>
          <nav class="skin-show-nav"></nav>
          <span>主题二</span>
        </section>
        <section class="schema-set">
          <header class="skin-show-header"></header>
          <nav class="skin-show-nav"></nav>
          <span>主题三</span>
        </section>
        <section class="schema-set">
          <header class="skin-show-header"></header>
          <nav class="skin-show-nav"></nav>
          <span>主题四</span>
        </section>
        <section class="schema-set">
          <header class="skin-show-header"></header>
          <nav class="skin-show-nav"></nav>
          <span>主题五</span>
        </section>
        <section class="schema-set">
          <header class="skin-show-header"></header>
          <nav class="skin-show-nav"></nav>
          <span>主题六</span>
        </section>
        <section class="schema-set">
          <header class="skin-show-header"></header>
          <nav class="skin-show-nav"></nav>
          <span>主题七</span>
        </section>
        <section class="schema-set">
          <header class="skin-show-header"></header>
          <nav class="skin-show-nav"></nav>
          <span>主题八</span>
        </section>
        <section class="schema-set">
          <header class="skin-show-header"></header>
          <nav class="skin-show-nav"></nav>
          <span>主题九</span>
        </section>
        <section class="schema-set">
          <header class="skin-show-header"></header>
          <nav class="skin-show-nav"></nav>
          <span>主题十</span>
        </section>
        <section class="schema-set">
          <header class="skin-show-header"></header>
          <nav class="skin-show-nav"></nav>
          <span>主题十一</span>
        </section>
        <section class="schema-set">
          <header class="skin-show-header"></header>
          <nav class="skin-show-nav"></nav>
          <span>主题十二</span>
        </section>
        <section class="schema-set">
          <header class="skin-show-header"></header>
          <nav class="skin-show-nav"></nav>
          <span>主题十三</span>
        </section>
        <section class="schema-set">
          <header class="skin-show-header"></header>
          <nav class="skin-show-nav"></nav>
          <span>默认</span>
        </section>
      </div>
    </div>
    <div id="shadow" v-on:click="showSchema" :class="schemaStatus?'display-block':''"></div>
  </div>
</template>

<script>
  import DateUtils from 'utils/DateUtils';
  import config from '@/config';
  import Emitter from '@/utils/mixins/emitter';
  import OperatorUtils from '../../utils/OperatorUtils';

  const tableRefOptions = {
    width: 420,
    labelWidth: 80
  };
  export default {
    name: 'navbar',
    mixins: [Emitter],
    props: ['toggleClick'],
    data () {
      return {
        label1: (h) => {
          return h('div', [
            h('Badge', {
              props: {
                dot: this.$store.state.warning.length > 0
              }
            }, [h('span', '报 警')])
          ]);
        },
        label2: (h) => {
          return h('div', [
            h('Badge', {
              props: {
                dot: this.$store.state.backlog.length > 0
              }
            }, [h('span', '待 办')])
          ]);
        },
        label3: (h) => {
          return h('div', [
            h('Badge', {
              props: {
                dot: false
              }
            }, [h('span', '消 息')])
          ]);
        },
        userData: OperatorUtils.getUserData(),
        menuStatus: false,
        schemaStatus: false,
        tableRefOptions,
        tabIndex: 0,
        fullscreen: false,
        DateUtils,
        userOption: {
          loginOut: '退出登录',
          changePas: '更改密码',
          userLogoSrc: '../../../static/assets/img/header-test.gif'
        }
      };
    },
    computed: {
      warningList () {
        return this.$store.state.warning;
      },
      backlogList () {
        if (this.$store.state.backlog != null) {
          return this.$store.state.backlog.slice(0, 4);
        }
        return this.$store.state.backlog;
      },
      isNewMsg () {
        if (this.$store.state.backlog.length > 0 || this.$store.state.warning.length > 0) {
          return true;
        } else {
          return false;
        }
      }
    },
    mounted () {
      layui.use('layer', function () {
        let layer = layui.layer;
      });
      this.changeColor();
    },
    methods: {
      passwd () {
        this.$refs.tablePopupEdit.open({
          title: '修改密码',
          postUrl: '/sys/user/respwd'
        });
      },
      logout () {
        let _this = this;
        layer.confirm('您确定要退出吗？', {
          btn: ['确定', '取消'],
          skin: 'layui-layer-molv'
        }, function (index) {
          layer.close(index);
          layer.load(1);
          let type = 'SignOut';
          let user_code = OperatorUtils.getData('userInfo').USER_CODE;
          var data = config.urlTransition(type,{usercode:user_code});
          _this.$http.apiPost(HOST,data).then(function (response) {
            let code = response.code;
            if(code==200){
              layer.closeAll();
              setTimeout(function () {
                OperatorUtils.clear();
                _this.$router.push('/login')
              },1500)
            }
          })
        }, function () {
        });
      },
      changeColor () {
        setTimeout(function () {
          $('.schema-set').click(function () {
            var index = $(this).index();
            let bg1 = $(this).find('.skin-show-header').css('background');
            let bg2 = $(this).find('.skin-show-nav').css('background');
            var bgColleage = {bg_f:bg1,bg_s:bg2}
            OperatorUtils.setData('bgColleage', bgColleage);
            console.log(OperatorUtils.getData('bgColleage'));
            $('#sliderBar,.itemed-child,.layui-nav-child,.layui-nav .layui-nav-child a').css({'background': bg2,'transition':'all 0.5s'});
            $('.layout-header').css({'background': bg1,'transition':'all 0.5s'});
            $('.layui-nav .layui-nav-child a').hover(function () {
              if(index==1||index==2){
                $(this).css({'background':'skyblue'}).parent('dd').siblings('dd').find('a').css({'background':bg2});
              }else if(index==3||index==4){
                $(this).css({'background':'purple'}).parent('dd').siblings('dd').find('a').css({'background':bg2});
              }else if(index==5||index==6||index==7||index==8||index==9||index==14){
                $(this).css({'background':'#2d323d'}).parent('dd').siblings('dd').find('a').css({'background':bg2});
              }else if(index==10){

              }else if(index==11||index==12||index==13){

              }
            })
          });
        },0)

      },
      showSchema () {
        this.schemaStatus = !this.schemaStatus;
      },
      handleFullScreen(){
        let element = document.documentElement;
        if (this.fullscreen) {
          if (document.exitFullscreen) {
            document.exitFullscreen();
          } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
          } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
          } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
          }
        } else {
          if (element.requestFullscreen) {
            element.requestFullscreen();
          } else if (element.webkitRequestFullScreen) {
            element.webkitRequestFullScreen();
          } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
          } else if (element.msRequestFullscreen) {
            // IE11
            element.msRequestFullscreen();
          }
        }
        this.fullscreen = !this.fullscreen;
      },
      changeMenu(){
        this.$store.commit('menuState')
      }
    },
    components: {
      tableRefOptions
    }
  };
</script>


